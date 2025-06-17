import type { IAnimal, IAnimalExt } from "../context/IAnimal";

export enum ActionTypes {
  REACENTLYFED,
  NEEDSFEEDINGSOON,
  NEEDFEEDINGURGENTLY,
}

export type Action = {
  type: ActionTypes;
  payload: string;
};

export const AnimalReducer = (
  animals: (IAnimalExt & IAnimalExt)[],
  action: Action
): (IAnimal & IAnimalExt)[] => {
  if (!animals || !action) return [];

  return animals.map((animal) => {
    if (animal.id === +action.payload) {
      switch (action.type) {
        case ActionTypes.REACENTLYFED: {
          return { ...animal, isfed: true, lastFed: Date.now().toString() };
        }
        case ActionTypes.NEEDSFEEDINGSOON: {
          return { ...animal, isfed: false };
        }
        case ActionTypes.NEEDFEEDINGURGENTLY: {
          return { ...animal, isfed: false };
        }
        default:
          return animal;
      }
    }
    return animal;
  });
};
