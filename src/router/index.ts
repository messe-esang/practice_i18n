import i18n from "@/locale/i18n";
import { userStore } from "@/store/store";
import HelloWorld from "@/views/HelloWorld.vue";
import Login from "@/views/Login.vue";
import MyPage from "@/views/MyPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/login', name: 'Login', component: Login},
    {path: '/my-page', name: 'MyPage', component: MyPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes : routes
})

router.beforeEach((to, from) => {
    const needLoginPage = ['MyPage']
    const userInfo = userStore()
    if(!userInfo.isLoggedIn && needLoginPage.includes(to.name as string) && to.name !== 'Login') {
        alert(i18n.global.t("login.loginAlert"))
        return { name: "Login"}
    }
})

export default router