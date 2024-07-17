import { defineStore } from "pinia"

interface UserInfo {
    id: string,
    name : string
}

export const userStore = defineStore("user", {
    state : () : UserInfo => ({
        id: "",
        name : ""
    }),
    persist : {
        storage : sessionStorage,
    },
    actions : {
        reset() {
            this.id = ''
            this.name = ''
        },
        login() {
            this.id = 'test'
            this.name = '곽용준'
        }
    },
    getters : {
        isLoggedIn : (userInfo : UserInfo) => {
            return userInfo.id !== '';
        }
    }
})