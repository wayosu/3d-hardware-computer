<script setup>
import { defineProps } from 'vue';
import ToggleSpeaker from './ToggleSpeaker.vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    title: String,
    subtitle: String,
    showBackButton: Boolean,
    toggleSpeaker: Function,
    isMuted: Boolean,
    imageSrc: String,
});
</script>

<template>
    <div class="p-6 bg-gradient-to-b from-blue-600 to-blue-800 rounded-b-[40px] shadow">
        <div class="flex justify-between items-center mb-5">
            <!-- Back button will be shown based on the 'showBackButton' prop -->
            <template v-if="showBackButton">
                <RouterLink :to="{ name: 'home' }" class="inline-flex gap-2 items-center font-body text-white border border-white rounded-full ps-2 pe-4 pt-2 pb-1 hover:shadow-inner hover:shadow-white transition-all">
                    <img src="../assets/images/icon-back.svg" alt="icon-back" class="w-5 invert -mt-1">
                    <span class="text-sm">Kembali</span>
                </RouterLink>
            </template>
            
            <span v-else class="font-title font-bold text-2xl text-white italic">H3Dware</span>

            <!-- Toggle speaker component -->
            <ToggleSpeaker :toggleSpeaker="toggleSpeaker" :isMuted="isMuted" />
        </div>

        <div class="flex flex-col gap-5 justify-center items-center">
            <!-- Dynamic image based on prop -->
            <img :src="imageSrc" alt="header-image" class="w-[50%]">

            <div class="text-center">
                <h1 class="font-title text-white mb-1 text-xl">{{ title }}</h1>
                <p class="font-body text-white">{{ subtitle }}</p>
            </div>
        </div>
    </div>
</template>
