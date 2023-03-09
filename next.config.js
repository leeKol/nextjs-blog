/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "lee_kol",
        mongodb_password: "7RluJBwFbbwjHMng",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-blog-dev",
      },
    };
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "lee_kol",
      mongodb_password: "7RluJBwFbbwjHMng",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-blog",
    },
  };
};
