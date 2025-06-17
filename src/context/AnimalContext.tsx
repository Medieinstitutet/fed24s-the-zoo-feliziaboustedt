import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { IAnimal } from "./IAnimal";
import { getAnimals } from "../services/getAnimals";

export interface IAnimalContextType {
  animals: IAnimal[];
  loading: boolean;
  error: string | null;
  updateAnimalLastFed: (id: string, newLastFed: string) => void;
}

export const AnimalContext = createContext<IAnimalContextType | undefined>(
  undefined
);

export const AnimalProvider = ({ children }: { children: ReactNode }) => {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAnimals()
      .then((data) => {
        setAnimals(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Problem med att hämta djurdata");
        setLoading(false);
      });
  }, []);

  const updateAnimalLastFed = (id: string, newLastFed: string) => {
    setAnimals((animals) =>
      animals.map((animal) =>
        animal.id === +id ? { ...animal, lastFed: newLastFed } : animal
      )
    );
  };

  return (
    <AnimalContext.Provider
      value={{ animals, loading, error, updateAnimalLastFed }}
    >
      {children}
    </AnimalContext.Provider>
  );
};

export const useAnimals = () => {
  const context = useContext(AnimalContext);

  if (!context) {
    throw new Error("UseAnimals must be used in animalsprovider");
  }
  return context;
};
