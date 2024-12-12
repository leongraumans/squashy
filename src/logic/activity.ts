import { STRAVA_CONFIG } from "~src/config";
import { getAccessToken, handleResponse } from "~src/lib/strava";
import { getDescriptionFromDateTime, getUnixTimestamp } from "~src/lib/time";
import type { Activity, ActivityUpdateParams, Sport } from "~src/lib/types";

const ACTIVITY_ENDPOINT = "https://www.strava.com/api/v3/";
const EXCLUDE_SPORT_TYPES: Sport[] = ["Squash", "Run", "Hike", "Walk"];

export const syncActivities = async (offsetHours: number): Promise<void> => {
  const activities = await getActivities(offsetHours);
  console.debug(`Found ${activities.length} activities`);

  for (const activity of activities) {
    // skip certain sports for now, replace with specific inclusion list
    if (EXCLUDE_SPORT_TYPES.includes(activity.sport_type)) {
      console.debug(`Skipping activity of type ${activity.sport_type}`);
      continue;
    }

    await updateActivity(activity.id, {
      name: "Squash",
      sport_type: "Squash",
      description: getDescriptionFromDateTime(activity.start_date_local),
    });
  }
};

export const getActivities = async (
  offsetHours: number
): Promise<Activity[]> => {
  const unixTimeStamp = getUnixTimestamp(offsetHours);
  const accessToken = await getAccessToken();
  const response = await fetch(
    `${ACTIVITY_ENDPOINT}athletes/${STRAVA_CONFIG.userId}/activities?after=${unixTimeStamp}&access_token=${accessToken}`
  );
  return await handleResponse(response);
};

export const updateActivity = async (
  id: number,
  updateParams: ActivityUpdateParams
): Promise<void> => {
  const filteredParams = Object.fromEntries(
    Object.entries(updateParams).filter(([_, value]) => value !== undefined)
  );

  const accessToken = await getAccessToken();
  const response = await fetch(
    `${ACTIVITY_ENDPOINT}activities/${id}?access_token=${accessToken}`,
    {
      method: "PUT",
      body: JSON.stringify(filteredParams),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  await handleResponse(response);

  console.debug(`Updated activity ${id}`);
};
