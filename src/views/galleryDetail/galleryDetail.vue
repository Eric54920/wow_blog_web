
<script setup>
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router'
import { getGalleryDetail } from '@/apis/Gallery'
import { Fancybox } from "@fancyapps/ui";

Fancybox.bind("[data-fancybox]", {
// Your custom options
});

const images = reactive([])
const detail = reactive({
    "title": "",
    "intro": "",
})

const route = useRoute();
const id = route.query.id;

const getDetail = () => {
    const params = {
        "id": id
    }
    getGalleryDetail(params).then(res => {
        detail.title = res.data.title
        detail.intro = res.data.intro
        images.value = res.data.images
    })
}

onMounted(() => {
    getDetail()
})
</script>

<template>
    <div class="gallery-detail">
        <div class="w-full max-w-7xl mx-auto pt-7 pb-20 bg-white border-x border-zinc-100 box-content">
            <div class="intro px-5 py-7 md:px-20 md:py-14">
                <h1 class="text-4xl font-bold tracking-tight text-zinc-800">{{ detail.title }}</h1>
                <p class="mt-6 text-sm md:text-base text-zinc-600">{{ detail.intro }}</p>
            </div>
            <div class="images px-5 md:px-20">
                <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch gap-8">
                    <a class="overflow-hidden shadow cursor-pointer" :data-src="url.url" v-for="url in images.value" data-fancybox="gallery">
                        <img :src="url.url" />
                    </a>
                </ul>
            </div>
        </div>
    </div>
</template>

<style></style>
