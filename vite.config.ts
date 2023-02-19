import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      port: env.DOCKER_CONTAINER_PORT,
      host: true,
    },
    define: {
      __APP_ENV__: env.APP_ENV,
    },
  };
});
