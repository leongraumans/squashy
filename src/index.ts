import { outputHelp } from "~src/lib/help-text";
import { getCommandLineArgs } from "./config";
import { syncActivities } from "./logic/activity";

async function main(): Promise<void> {
  const { help, offset, language } = getCommandLineArgs();

  if (help) {
    outputHelp();
    return;
  }

  syncActivities(offset, language);
}

main();
