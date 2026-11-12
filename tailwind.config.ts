import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"], theme: { extend: { colors: { wine: "#4a1025", blush: "#f6dce1", cream: "#fff7f2" }, fontFamily: { serif: ["Georgia","serif"] } } }, plugins: [] } satisfies Config;
