import type { IAnimalExt } from "../context/IAnimal";
import { get } from "./serviceBase";
import type { IAnimal } from "../context/IAnimal";

export const getAnimals = async (): Promise<IAnimal[]> => {
  try {
    const response = await get<IAnimal[]>(
      "https://animals.azurewebsites.net/api/animals"
    );

    const enrichedAnimals: IAnimal[] = response.map((animal) => {
      const savedFedTime = localStorage.getItem(`feedingTime-${animal.id}`);

      return {
        ...animal,
        lastFed: savedFedTime ?? animal.lastFed,
      };
    });
    return enrichedAnimals;
  } catch (error) {
    console.error("Error getting Animal-data");
    throw error;
  }
};

export const getAnimal = async (id: string) => {
  const response = await get<IAnimalExt>(
    `https://animals.azurewebsites.net/api/animals/${id}`
  );
  const savedFedTime = localStorage.getItem(`feedingTime-${response.id}`);
  return {
    ...response,
    lastFed: savedFedTime ?? response.lastFed,
  };
};
