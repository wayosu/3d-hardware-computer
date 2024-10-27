<script setup>
import Header from '../components/Header.vue';
import { defineProps } from 'vue';

const props = defineProps({
    toggleSpeaker: Function,
    isMuted: Boolean,
    showBackButton: Boolean
});

const imageSrc = new URL('../assets/images/3d-illustration-vp.png', import.meta.url).href;
</script>

<template>
    <Header 
        title="Video Pembelajaran"
        subtitle="Video pelajaran yang dapat dipelajari oleh H3Dware Explorers."
        :toggleSpeaker="toggleSpeaker"
        :isMuted="isMuted"
        :imageSrc="imageSrc"
        :showBackButton="true"
    />

    <div class="flex flex-col gap-6 p-6">
        <div class="bg-white border rounded-xl shadow overflow-hidden">
            <div class="p-4">
                <h1 class="font-title text-blue-600">Network Interface Card</h1>
            </div>
            <iframe src="https://www.youtube.com/embed/FwNRb6MwXTI" frameborder="0" class="w-full aspect-video"></iframe>
        </div>
        <div class="bg-white border rounded-xl shadow overflow-hidden">
            <div class="p-4">
                <h1 class="font-title text-blue-600">Random Access Memory</h1>
            </div>
            <iframe src="https://www.youtube.com/embed/a--rNdqtwCI" frameborder="0" class="w-full aspect-video"></iframe>
        </div>
        <div class="bg-white border rounded-xl shadow overflow-hidden">
            <div class="p-4">
                <h1 class="font-title text-blue-600">Wireless Adapter</h1>
            </div>
            <iframe src="https://www.youtube.com/embed/uJL89x6eCHQ" frameborder="0" class="w-full aspect-video"></iframe>
        </div>
    </div>
</template>
