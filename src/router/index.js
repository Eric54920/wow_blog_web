import { createRouter, createWebHistory } from 'vue-router'
import Gallery from '@/views/gallery/gallery.vue'
import GalleryDetail from '@/views/galleryDetail/galleryDetail.vue'
import About from '@/views/about/about.vue'

const routes = [
  {
    path: '/',
    name: 'Gallery',
    component: Gallery,
  },
  {
    path: '/gallery/detail',
    name: 'Detail',
    component: GalleryDetail
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router