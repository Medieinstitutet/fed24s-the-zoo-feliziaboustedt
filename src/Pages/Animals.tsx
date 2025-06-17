import { useAnimals } from "../context/AnimalContext";
import { NavLink } from "react-router";
import { ActionTypes } from "../Reducer/AnimalReducer";
import { feedingStatus } from "../helpers/FeedingStatus";
import type { IAnimalExt } from "../context/IAnimal";
import { Loader } from "../components/Loader";

export const Animals = () => {
  const { animals, loading, error } = useAnimals() as {
    animals: IAnimalExt[];
    loading: boolean;
    error: string | null;
    updateAnimalLastFed: (id: string, newLastFed: string) => void;
  };

  //Felhantering
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-amber-50 p-7">
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold text-amber-700">Träffa djuren</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10">
        {animals.map((animal: IAnimalExt) => {
          const status = feedingStatus(animal.lastFed);

          const borderColor =
            status === ActionTypes.REACENTLYFED
              ? "border-green-500"
              : status === ActionTypes.NEEDSFEEDINGSOON
              ? "border-orange-400"
              : status === ActionTypes.NEEDFEEDINGURGENTLY
              ? "border-red-600"
              : "border-gray-200";

          const statusText =
            status === ActionTypes.REACENTLYFED
              ? "✔️ Mätt och belåten"
              : status === ActionTypes.NEEDSFEEDINGSOON
              ? "⚠️ Snart dags att mata"
              : status === ActionTypes.NEEDFEEDINGURGENTLY
              ? "🐾 Djuret behöver mat!"
              : "";

          const statusTextColor =
            status === ActionTypes.REACENTLYFED
              ? "text-green-600"
              : status === ActionTypes.NEEDSFEEDINGSOON
              ? "text-orange-500"
              : status === ActionTypes.NEEDFEEDINGURGENTLY
              ? "text-red-600"
              : "text-gray-500";

          return (
            <div
              key={animal.id}
              className={`max-w-sm bg-white shadow-md rounded-lg overflow-hidden border-4 ${borderColor} hover:shadow-lg transition-shadow duration-300`}
            >
              <h2 className="p-4 text-xl font-semibold text-center text-gray-800">
                {animal.name}
              </h2>
              <img
                src={animal.imageUrl}
                alt={`Här kommer snart en bild på ${animal.name}`}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "undraw_playful-cat_3ta5.png";
                }}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <span className="text-gray-600 text-sm line-clamp-3 block mb-2">
                  {animal.shortDescription}
                </span>

                {statusText && (
                  <p className={`text-sm font-medium ${statusTextColor}`}>
                    {statusText}
                  </p>
                )}

                <NavLink to={`/animals/${animal.id}`}>
                  <button className="mt-3 text-amber-600 font-medium hover:underline cursor-pointer">
                    Lär dig mer om {animal.name}
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
