import { STRAVA_CONFIG } from "~src/config";
import { getAccessToken, handleResponse } from "~src/lib/auth";
import type { ActivityDetail, ActivityType } from "~src/lib/types";

const ACTIVITY_ENDPOINT = "https://www.strava.com/api/v3/";

export const getActivities = async (): Promise<ActivityType[]> => {
  const accessToken = await getAccessToken();
  const response = await fetch(
    `${ACTIVITY_ENDPOINT}athletes/${STRAVA_CONFIG.userId}/activities?access_token=${accessToken}`
  );
  return await handleResponse(response);
};

export const getActivity = async (id: number): Promise<ActivityDetail> => {
  const accessToken = await getAccessToken();
  const response = await fetch(
    `${ACTIVITY_ENDPOINT}activities/${id}?access_token=${accessToken}`
  );
  return await handleResponse(response);
};
