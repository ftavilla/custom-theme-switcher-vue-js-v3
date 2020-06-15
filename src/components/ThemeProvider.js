import { provide, reactive, toRefs } from "@vue/composition-api";

export const UserSettingsStateSymbol = Symbol(
  "User settings state provider identifier"
);
export const UserSettingsUpdateSymbol = Symbol(
  "User settings update provider identifier"
);

export default {
  setup() {
    const state = reactive({
      theme: "light"
    });
    provide(UserSettingsStateSymbol, toRefs(state));

    const update = (property, value) => {
      state[property] = value;
    };
    provide(UserSettingsUpdateSymbol, update);
  },
  render() {
    return this.$slots.default;
  }
};
