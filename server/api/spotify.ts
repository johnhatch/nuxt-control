import { SpotifyApi } from '@spotify/web-api-ts-sdk';
const config = useRuntimeConfig();
const sdk = SpotifyApi.withClientCredentials(
  config.SPOTIFY_CLIENT_ID,
  config.SPOTIFY_CLIENT_SECRET
);

export default defineEventHandler(async (event) => {
  const api = await sdk.search('The Beatles', ['track']);
  return api.tracks.items;
});
