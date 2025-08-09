import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Check deployment platform
  const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
  const isVercelMode = mode === 'vercel';
  
  let base = "/";
  
  // Only use GitHub Pages base path when building in GitHub Actions
  if (mode === 'production' && isGitHubPages && !isVercelMode) {
    base = "/ae-portfolio-website/";
  }
  
  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
