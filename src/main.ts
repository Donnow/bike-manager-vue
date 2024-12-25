import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router";
import App from "./App.vue";
import "./style.css";
import axios from "./axios"; // 添加axios实例

const app = createApp(App);

app.config.globalProperties.$axios = axios; // 挂载axios到全局

app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
