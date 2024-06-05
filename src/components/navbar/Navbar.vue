<template>
    <div :class="{ 'block': isOpen, 'hidden': !isOpen }" class="fixed inset-0 z-10 bg-zinc-800/40 backdrop-blur-sm opacity-100"></div>
    <nav class="nav">
        <div class="mx-auto w-full max-w-7xl py-7 bg-white border-x border-zinc-100">
            <div class="hidden mx-auto py-2 md:flex w-1/3 h-10 justify-evenly rounded-full shadow-md ring-1 ring-zinc-200">
                <router-link class="hover:text-teal-500 transition-all" to="/" active-class="text-teal-500">影集</router-link>
                <router-link class="hover:text-teal-500 transition-all" to="/about" active-class="text-teal-500">关于</router-link>
            </div>
            <button class="md:hidden fixed w-20 h-10 top-4 right-3 text-gray-900 rounded-full bg-white shadow shadow-gray-500" @click="toggleMenu">
                <i class="pi pi-bars"></i>
            </button>
        </div>

        <ul rol="list" :class="{ 'block': isOpen, 'hidden': !isOpen }" class="md:hidden fixed w-96 p-10 top-1 left-1/2 -ml-48 rounded-3xl bg-white text-zinc-800 text-base z-50">
            <li class="flex justify-between h-12 leading-10 text-gray-500">
                <span>菜单</span><span @click="toggleMenu"><i class="pi pi-times"></i></span>
            </li>
            <li class="h-12 leading-10 border-b border-gray-200 text-lg">
                <router-link class="block hover:text-teal-500 transition-all" to="/"  active-class="text-teal-500">影集</router-link>
            </li>
            <li class="h-12 pt-1 leading-10 text-lg">
                <router-link class="block hover:text-teal-500 transition-all" to="/about"  active-class="text-teal-500">关于</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>