import { inject } from "@vue/composition-api";
import { UserSettingsStateSymbol, UserSettingsUpdateSymbol } from "./ThemeProvider";

const useTheme = () => {
  const { theme } = inject(UserSettingsStateSymbol);
  const updateUserSettings = inject(UserSettingsUpdateSymbol);
  const updateTheme = value => updateUserSettings("theme", value);
  return { theme, updateTheme };
};

export default useTheme;
