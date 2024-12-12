import type { OptionDefinition } from "command-line-args";
import commandLineArgs from "command-line-args";
import dotenv from "dotenv";
import { outputHelp } from "~src/lib/help-text";
import { getActivities } from "~src/logic/activity";

dotenv.config();

async function main(): Promise<void> {
  const optionDefinitions: OptionDefinition[] = [
    { name: "help", alias: "h", type: Boolean },
  ];

  const { help } = commandLineArgs(optionDefinitions);

  if (help) {
    outputHelp();
    return;
  }

  const myActivities = await getActivities();
  console.info(`${myActivities.length} activities found!`);
}

main();
