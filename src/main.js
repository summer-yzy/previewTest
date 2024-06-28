import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createI18n } from 'vue-i18n';
import zh from './langs/zh'
import en from './langs/en'


const abc = {
    zh,
    en
}

const i18n = createI18n({
    legacy: false,  // 设置为 false，启用 composition API 模式
    messages: abc,
    locale: 'zh'  // 设置默认语言
})

const app = createApp(App)
app.use(i18n)
app.use(ElementPlus)
app.use(router)

app.mount('#app')

