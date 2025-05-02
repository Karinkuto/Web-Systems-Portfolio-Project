import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@/components": path.resolve(__dirname, "./src/components"),
			"@/data": path.resolve(__dirname, "./src/data"),
			"@/ui": path.resolve(__dirname, "./src/components/ui"),
			"@/sections": path.resolve(__dirname, "./src/components/sections"),
			"@/hooks": path.resolve(__dirname, "./src/hooks"),
		},
	},
});
