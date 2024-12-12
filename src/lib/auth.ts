import { STRAVA_CONFIG } from "~src/config";

const TOKEN_ENDPOINT = "https://www.strava.com/oauth/token";

let cachedToken: { token: string; expiresAt: number } | null = null;

export const getAccessToken = async (): Promise<string> => {
  const now = Date.now() / 1000;
  if (cachedToken && cachedToken.expiresAt > now) {
    return cachedToken.token;
  }

  if (
    !STRAVA_CONFIG.clientId ||
    !STRAVA_CONFIG.clientSecret ||
    !STRAVA_CONFIG.refreshToken
  ) {
    throw new Error("Strava client ID, secret and refresh token are required");
  }

  const body = JSON.stringify({
    client_id: STRAVA_CONFIG.clientId,
    client_secret: STRAVA_CONFIG.clientSecret,
    refresh_token: STRAVA_CONFIG.refreshToken,
    grant_type: "refresh_token",
  });

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body,
  });

  const {
    access_token: token,
    expires_in: expiresIn,
  }: { access_token: string; expires_in: number } = await handleResponse(
    response
  );

  cachedToken = {
    token,
    expiresAt: now + expiresIn,
  };

  return token;
};

export const handleResponse = async (response: Response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(`API Error: ${error.message || response.statusText}`);
  }
  return response.json();
};
