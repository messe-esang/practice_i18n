<template>
    <div>
        마이페이지입니다.
    </div>
    <div>
        <span style="margin-right: 1rem;">{{ userInfo.name }} 님</span>
        <button @click="logout">로그아웃</button>
    </div>
</template>

<script setup lang="ts">
import { userStore } from '@/store/store';

const userInfo = userStore()

const logout = () => {
    if(window.confirm(userInfo.name + "님 로그아웃할까요?")) {
        userInfo.reset()
    }
}
</script>