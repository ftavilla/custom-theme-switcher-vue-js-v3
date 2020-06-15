<template>
  <ThemeProvider>
    <div>
      <Logo/>
      <ThemeSwitcher/>
    </div>
  </ThemeProvider>
</template>

<script>
import ThemeProvider from "./components/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Logo from "./components/Logo";

export default {
  name: "App",
  components: {
    ThemeProvider,
    ThemeSwitcher,
    Logo
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
