<template>
    <div>
        로그인 화면입니다.
    </div>
    <div>
        <button @click="login">로그인하기</button>
        <router-link to="/my-page">마이페이지</router-link>
    </div>
    <div>
        {{ locale }}
    </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { userStore } from '@/store/store';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const userInfo = userStore()
const {locale} = useI18n()
onMounted(() => {
    userInfo.reset()
})

const login = () => {
    userInfo.login()
    alert(userInfo.name + " 로그인합니다.");
    router.push('/my-page');
}
</script>
