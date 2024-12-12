# Squashy

Squashy is a straightforward CLI tool designed to sync your squash activities with Strava. It's particularly useful when your smartwatch doesn't support Squash as an activity type.

## Getting Started

First, you need to create a Strava API application to get your `client_id` and `client_secret`. You can do this by following the instructions [here](https://developers.strava.com/docs/getting-started/).

Once you have your `client_id` and `client_secret`, create an `.env` file by copying the `.env.example` file and filling in the values.

```bash
cp .env.example .env
```

Then, run the following command to run the application:

```bash
pnpm sync
```

Please refer to the `--help` command for more information on how to use the application.
