# Squashy 🎾

Effortlessly update your squash activities in Strava with **Squashy**, a lightweight CLI tool
designed for squash enthusiasts. Ideal for those whose smartwatches don't natively support squash as
an activity type, Squashy bridges the gap between your game and Strava.

---

## 🚀 Features

- **Activity Correction**: Perfect if you are already syncing your squash activities automatically
  to Strava, but as the wrong sport type (e.g. "Workout"). This tool updates those activities so
  that they're marked as a squash match.
- **Simple Configuration**: Easy setup with your Strava API credentials.

---

## 🛠️ Getting Started

### 1️⃣ Prerequisites

To use Squashy, you'll need a Strava API application. Follow the [Strava Developer
Guide](https://developers.strava.com/docs/getting-started/) to create your app and obtain the
following:

- `STRAVA_CLIENT_ID`
- `STRAVA_CLIENT_SECRET`
- `STRAVA_REFRESH_TOKEN`
- `STRAVA_USER_ID`

### 2️⃣ Setup

1. Clone this repository.
2. Copy the example environment file and fill in your Strava API credentials:

   ```bash
   cp .env.example .env
   ```

3. Install dependencies:

   ```bash
   pnpm i
   ```

### 3️⃣ Sync Activities

Run the following command to sync your activities:

```bash
pnpm squashy
```

For detailed usage options, check the built-in help:

```bash
pnpm squashy --help
```

---

## 📜 License

Squashy is open-source software licensed under the MIT License. See the [LICENSE](LICENSE) file for
details.

---

## 🌟 Contribute

We welcome contributions! If you have ideas, bug fixes, or features you'd like to add, feel free to
open an issue or submit a pull request.

---

Enjoy syncing and keep smashing those squash games! 🎾
