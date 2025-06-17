export interface IAnimal {
  id: number;
  name: string;
  shortDescription: string;
  imageUrl: string;
  lastFed: string;
}

export interface IAnimalExt extends IAnimal {
  latinName: string;
  yearOfBirth: number;
  medicine: string;
  longDescription: string;
  isFed: boolean;
}
