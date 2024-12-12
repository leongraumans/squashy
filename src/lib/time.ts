/**
 * Get the current Unix timestamp minus the offset
 * @param offsetHours The number of hours to offset the current time by
 * @returns The Unix timestamp of the current time minus the offset
 */
export const getUnixTimestamp = (offsetHours: number): number => {
  const now = new Date();
  const offsetTime = now.getTime() - offsetHours * 3600 * 1000;
  return Math.floor(offsetTime / 1000);
};

export const getDescriptionFromDateTime = (dateTime: string): string => {
  const date = new Date(dateTime);
  const hour = date.getHours();
  if (hour < 12) {
    return "Potje Squash in de ochtend.";
  }
  if (hour < 18) {
    return "Potje Squash in de middag.";
  }
  return "Potje Squash in de avond.";
};
