import commandLineUsage, { type Section } from "command-line-usage";

export const outputHelp = () => {
  const sections: Section[] = [
    {
      header: "🏆 SQUASHY 🎾",
      content:
        "Welcome to Squashy — the ultimate Strava sync tool for squash lovers! Smash your way to organized activity tracking.",
    },
    {
      header: "⚙️ Options",
      optionList: [
        {
          name: "help",
          description: "Show this smashing usage guide and conquer confusion.",
          alias: "h",
          type: Boolean,
        },
        {
          name: "offset",
          description:
            "Set the time offset for retrieving Strava activities between now and the past {underline hours}.",
          alias: "o",
          type: Number,
          typeLabel: "{underline hours}",
          defaultValue: 1,
        },
        {
          name: "language",
          description:
            "Set the language for the Strava activity descriptions. Currently supports {underline nl} (Dutch) and {underline en} (English).",
          alias: "l",
          type: String,
          typeLabel: "{underline code}",
          defaultValue: "nl",
        },
      ],
    },
    {
      header: "🎉 Example Usage",
      content: [
        "$ pnpm squashy --help",
        "$ pnpm squashy --offset 5 --language en",
        "$ pnpm squashy",
      ],
    },
    {
      header: "🔗 Learn More",
      content:
        "Check out the README for full details and tips: {underline https://github.com/leongraumans/squashy/}",
    },
  ];

  const usage = commandLineUsage(sections);
  console.info(usage);
};
