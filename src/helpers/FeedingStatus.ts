import { ActionTypes } from "../Reducer/AnimalReducer";

export const feedingStatus = (lastfed: string): ActionTypes => {
  const lastFedTime = new Date(lastfed).getTime();
  const now = Date.now();
  const hoursSinceFed = (now - lastFedTime) / (1000 * 60 * 60);

  if (hoursSinceFed < 3) return ActionTypes.REACENTLYFED;
  if (hoursSinceFed < 4) return ActionTypes.NEEDSFEEDINGSOON;
  return ActionTypes.NEEDFEEDINGURGENTLY;
};
