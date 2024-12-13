/**
 * Build a URL with a base URL, path and query parameters
 */
export const buildUrl = (
  baseUrl: string,
  path: string,
  params: Record<string, unknown>
): string => {
  const url = new URL(path, baseUrl);
  for (const key of Object.keys(params)) {
    url.searchParams.append(key, params[key] as string);
  }
  return url.toString();
};

/**
 * Get a localized description based on the time of day
 * @param dateTime The date and time in string format
 * @param inputLanguage The language to use for the description
 * @returns A localized description based on the time of day, defaults to English
 */
export const getDescriptionFromDateTime = (
  dateTime: string,
  inputLanguage: string
): string => {
  const hour = new Date(dateTime).getHours();

  let period: string;
  switch (true) {
    case hour < 12:
      period = "morning";
      break;
    case hour < 18:
      period = "afternoon";
      break;
    default:
      period = "evening";
      break;
  }

  const language = supportedLanguages.includes(inputLanguage)
    ? inputLanguage
    : "en";

  return localizedDescriptions[period][language];
};

const supportedLanguages = ["en", "nl"];
const localizedDescriptions: Record<string, Record<string, string>> = {
  morning: {
    en: "Game of Squash in the morning.",
    nl: "Potje Squash in de ochtend.",
  },
  afternoon: {
    en: "Game of Squash in the afternoon.",
    nl: "Potje Squash in de middag.",
  },
  evening: {
    en: "Game of Squash in the evening.",
    nl: "Potje Squash in de avond.",
  },
};
