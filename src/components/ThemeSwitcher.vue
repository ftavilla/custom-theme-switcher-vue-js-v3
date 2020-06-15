<template>
  <div>
    <button @click="updateTheme('dark')">Enable darkmode</button>
    <button @click="updateTheme('light')">Enable lightmode</button>
  </div>
</template>

<script>
import useTheme from "./useTheme";

export default {
  setup() {
    const { updateTheme } = useTheme();
    return { updateTheme };
  }
};
</script>