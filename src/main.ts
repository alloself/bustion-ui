import "@/scss/index.scss";

import type { App } from "vue";
import { Icon } from "@/components";

export default {
  install: (app: App) => {
    app.component("Icon", Icon);
  },
};

export { Icon };
