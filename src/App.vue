<script setup>
import Navbar from "@/components/navbar/Navbar.vue"
import Footer from "@/components/footer/Footer.vue"
</script>

<template>
  <!-- header -->
  <Navbar></Navbar>
  
  <main>
    <RouterView />
  </main>

  <!-- footer -->
  <Footer></Footer>
</template>

<style scoped></style>
