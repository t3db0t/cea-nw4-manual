This is a demo repo for getting Expo 54 to work with Nativewind 4 and Tailwind 3.

The steps I used to create this are:

1. `pnpx create-expo-app`
2. `pnpm exec expo install expo-router@~6.0.9`
3. `pnpm add -D tailwindcss@^3.4.18`
4. ```
   pnpm add nativewind@latest
   pnpm add -D prettier prettier-plugin-tailwindcss
   ```
5. Create `babel.config.js`:

   ```
   module.exports = function (api) {
   api.cache(true);
   return {
      presets: [
         // Add jsxImportSource so className compiles correctly
         ["babel-preset-expo", { jsxImportSource: "nativewind" }],
         "nativewind/babel",
      ],
      plugins: [
         "react-native-worklets/plugin", // replaces old 'react-native-reanimated/plugin'
      ],
   };
   };
   ```

6. Create `tailwind.config.js`:

   ```
   module.exports = {
   presets: [require("nativewind/preset")],
   content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
   darkMode: "class",
   };
   ```

7. Create `metro.config.js`:

   ```
   const { getDefaultConfig } = require("expo/metro-config");
   const { withNativeWind } = require("nativewind/metro");
   const config = getDefaultConfig(__dirname);
   module.exports = withNativeWind(config, { input: "./global.css" });
   ```

8. Create `global.css`:

   ```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

9. Add `import "@/global.css";` to `app/_layout.tsx`

10. `pnpm exec expo start -c`
11. I then added the Tailwind test code you see in the 2 tabs.
