import { createApp } from "vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";

import App from "./App.vue";
import "./assets/scss/index.scss";

import router from "./router/index";

import { useComponents } from "@/sam-design";

const app = createApp(App);
const pinia = createPinia();

const { SIcon } = useComponents();

app.component("s-icon", SIcon);

app.use(router);
app.use(pinia);
app.use(Antd);

app.mount("#app");
