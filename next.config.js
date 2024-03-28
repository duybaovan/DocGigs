/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */

const redirects = async () => {
  return [
    {
      source: "/",
      destination: "/home",
      permanent: true,
    },
  ];
};

const config = {
  redirects,
};

export default config;
