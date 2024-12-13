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
