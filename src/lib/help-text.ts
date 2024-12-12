import commandLineUsage, { type Section } from "command-line-usage";

export const outputHelp = () => {
  const sections: Section[] = [
    {
      header: "SQUASHY",
      content: "The Strava Squash Sync Service.",
    },
    {
      header: "Options",
      optionList: [
        {
          name: "help",
          description: "Display this usage guide.",
          alias: "h",
          type: Boolean,
        },
        {
          name: "offet",
          description:
            "The offset for retrieving Strava activities in hours (default: 1).",
          alias: "o",
          type: Number,
          typeLabel: "{underline hours}",
          defaultValue: 1,
        },
      ],
    },
  ];

  const usage = commandLineUsage(sections);
  console.info(usage);
};
