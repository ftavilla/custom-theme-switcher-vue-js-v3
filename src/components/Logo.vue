<script>
import useTheme from "./useTheme";

export default {
  setup() {
    const { theme } = useTheme();
    return { theme };
  }
};
</script>

<template>
  <div :class="$style[`t-${theme}`]">
    <img width="25%" src="../assets/logo.png">
  </div>
</template>

<style module>
.t-light {
  width: 100%;
  height: 100%;
  background: white;
}

.t-dark {
  width: 100%;
  height: 100%;
  background: black;
}
</style>