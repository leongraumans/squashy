import commandLineArgs, { type OptionDefinition } from "command-line-args";
import dotenv from "dotenv";

dotenv.config();

export const STRAVA_CONFIG = {
  clientId: process.env.STRAVA_CLIENT_ID,
  clientSecret: process.env.STRAVA_CLIENT_SECRET,
  refreshToken: process.env.STRAVA_REFRESH_TOKEN,
  userId: process.env.STRAVA_USER_ID,
};

export const getCommandLineArgs = () => {
  const optionDefinitions: OptionDefinition[] = [
    { name: "help", alias: "h", type: Boolean },
    { name: "offset", alias: "o", type: Number, defaultValue: 1 },
    { name: "language", alias: "l", type: String, defaultValue: "nl" },
  ];

  return commandLineArgs(optionDefinitions);
};
