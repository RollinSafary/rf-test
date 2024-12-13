export const getEnvironmentVariables = (): Record<string, string> => ({
  NODE_ENV: process.env.NODE_ENV!,
});
