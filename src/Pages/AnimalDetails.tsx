import { useParams } from "react-router";
import { feedingStatus } from "../helpers/FeedingStatus";
import { ActionTypes } from "../Reducer/AnimalReducer";
import { NavLink } from "react-router";
import { useAnimals } from "../context/AnimalContext";
import { Loader } from "../components/Loader";
import type { IAnimalExt } from "../context/IAnimal";

export const AnimalDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { animals, loading, error, updateAnimalLastFed } = useAnimals();

  //hämta djuren med id
  const animal = animals.find((a) => a.id === Number(id)) as IAnimalExt;
  //kontrollerar djurens mat-status
  const status: ActionTypes | null = animal
    ? feedingStatus(animal.lastFed)
    : null;
  //typar status för att undgå felmeddelanden.
  const isRecentlyFed = status === ActionTypes.REACENTLYFED;
  const needsFeedingSoon = status === ActionTypes.NEEDSFEEDINGSOON;
  const urgentlyNeedsFeeding = status === ActionTypes.NEEDFEEDINGURGENTLY;

  //uppdaterar localstorage när djuret blivit matat för att uppdatera statusen.
  const handleFeedAnimal = () => {
    if (!animal) return;

    const now = new Date().toISOString();
    localStorage.setItem(`feedingTime-${animal.id}`, now);
    updateAnimalLastFed(animal.id.toString(), now);
  };

  //Felhantering
  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!animal || !status === null) return <p>Djurdata saknas.</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={animal.imageUrl}
            alt={`Bild på ${animal.name}`}
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/undraw_playful-cat_3ta5.png";
            }}
            className="rounded-lg shadow-md w-full object-cover max-h-[400px]"
          />
        </div>

        <div className="md:w-1/2 bg-blue-100 p-6 rounded-lg shadow-sm space-y-4">
          <NavLink
            to="/animals"
            className="text-sm text-blue-600 underline hover:text-blue-800"
          >
            ← Tillbaka
          </NavLink>

          <h2 className="text-2xl font-bold text-center text-gray-800">
            {animal.name}
          </h2>

          <button
            onClick={handleFeedAnimal}
            disabled={isRecentlyFed}
            className={`w-full text-white font-medium py-2 px-4 rounded transition-colors duration-200
              ${
                urgentlyNeedsFeeding
                  ? "bg-red-600 hover:bg-red-700"
                  : needsFeedingSoon
                  ? "bg-orange-400 hover:bg-orange-500"
                  : isRecentlyFed
                  ? "bg-green-500 cursor-not-allowed opacity-70"
                  : "bg-gray-400"
              }
            `}
          >
            {isRecentlyFed
              ? `${animal.name} är mätt och belåten`
              : needsFeedingSoon
              ? `Snart dags att mata ${animal.name}`
              : urgentlyNeedsFeeding
              ? `${animal.name} behöver mat NU!`
              : "Status okänd"}
          </button>

          <div className="text-sm text-gray-700 space-y-1">
            <p>
              <b>Mitt namn på latin:</b> {animal.latinName}
            </p>
            <p>
              <b>Född:</b> {animal.yearOfBirth}
            </p>
            <p>
              <b>Äter jag medicin?:</b> {animal.medicine}
            </p>
          </div>
        </div>
      </div>

      <section className="mt-10">
        <h3 className="text-xl font-semibold mb-2">Om {animal.name}</h3>
        <p className="text-gray-800 leading-relaxed">
          {animal.longDescription}
        </p>
      </section>
    </div>
  );
};
