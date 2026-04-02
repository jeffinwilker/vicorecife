module.exports = {
  apps: [
    {
      name: "vicorecife",
      script: "npm",
      args: "start -- -p 3010",
      env: {
        NODE_ENV: "production",
        PORT: "3010",
      },
    },
  ],
};

