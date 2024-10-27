<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="grid gap-6 h-auto max-w-lg grid-cols-2 mx-auto p-6">
        <RouterLink :to="{name: 'kompetensi-dasar'}" class="group flex flex-col justify-center items-center text-center p-6 bg-gradient-to-r from-sky-400 to-sky-600 rounded-xl shadow hover:shadow-2xl hover:shadow-sky-600 transition-all">
            <img src="../assets/images/icon-1.svg" alt="icon-kompetensi-dasar" class="w-20 invert">
            <h1 class="font-title text-white">Kompetensi Dasar</h1>
        </RouterLink>

        <RouterLink to="materi-belajar" class="group flex flex-col justify-center items-center text-center p-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-xl shadow hover:shadow-2xl hover:shadow-yellow-600 transition-all">
            <img src="../assets/images/icon-4.svg" alt="icon-materi-belajar" class="w-20 invert">
            <h1 class="font-title text-white">Materi Belajar</h1>
        </RouterLink>

        <RouterLink to="video-pembelajaran" class="flex flex-col justify-center items-center text-center p-6 bg-gradient-to-r from-red-400 to-red-600 rounded-xl shadow hover:shadow-2xl hover:shadow-red-600 transition-all">
            <img src="../assets/images/icon-3.svg" alt="icon-video-pembelajaran" class="w-20 invert">
            <h1 class="font-title text-white">Video Pembelajaran</h1>
        </RouterLink>

        <RouterLink to="" class="flex flex-col justify-center items-center text-center p-6 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-xl shadow hover:shadow-2xl hover:shadow-indigo-600 transition-all">
            <img src="../assets/images/icon-2.svg" alt="icon-evaluasi" class="w-20 invert">
            <h1 class="font-title text-white">Evaluasi</h1>
        </RouterLink>
    </div>
</template>
