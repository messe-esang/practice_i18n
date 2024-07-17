<template>
    <div>
        {{ $t("messages.helloWorld") }}
    </div>
    <div>
        <button @click="alertTest" style="margin-right: 1rem;">Click Me</button>
        <button @click="changeLocale">Change Locale</button>
    </div>
    <div>
        Current Locale : {{ locale }}
    </div>
    <div>
        <router-link to="/login">로그인페이지</router-link>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n()

const alertTest = () => {
    window.alert(t("messages.alertTest"));
}

const changeLocale = () => {
    if(locale.value === 'en') {
        locale.value = 'ko';
    } else {
        locale.value = 'en';
    }
}
</script>