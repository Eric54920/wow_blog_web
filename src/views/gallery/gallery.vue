<script setup>
import { reactive, onMounted } from 'vue';
import { getGallery } from '@/apis/Gallery'

const gallerys = reactive([]);

const getGalleryList = () => {
    getGallery().then(res => {
        gallerys.value = res.data;
    })
}

onMounted(() => {
    getGalleryList()
})
</script>

<template>
    <div class="gallery">
        <div class="w-full max-w-7xl mx-auto pt-7 pb-20 bg-white border-x border-zinc-100 box-content">
            <div class="avatar px-5 md:px-20">
                <div class="w-20 rounded-full overflow-hidden">
                    <img src="@/assets/1.jpg" alt="">
                </div>
            </div>
            <div class="intro px-5 py-7 md:px-20 md:py-14">
                <h1 class="text-4xl font-bold tracking-tight text-zinc-800">摄影</h1>
                <p class="mt-6 text-sm md:text-base text-zinc-600">
                    作为一名热爱捕捉瞬间的摄影爱好者，我通过镜头记录生活中的美好与独特，擅长用光影和构图讲述每一个动人的故事。无论是壮丽的自然风光还是平凡的日常细节，我都相信每一张照片背后都有一段值得分享的记忆。</p>
            </div>
            <div class="images px-5 md:px-20">
                <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch gap-8">
                    <router-link class="overflow-hidden shadow cursor-pointer" v-for="gallery in gallerys.value"
                        :to="{ path: '/gallery/detail', query: { id: gallery.id } }"><img
                            :src="gallery.cover"></router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<style></style>