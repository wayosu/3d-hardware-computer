<script setup>
import Header from '../components/Header.vue';
import HomeCard from '../components/HomeCard.vue';
import { defineProps } from 'vue';

const props = defineProps({
    toggleSpeaker: Function,
    isMuted: Boolean,
    showBackButton: Boolean
});

const imageSrc = new URL('../assets/images/3d-illustration-homepage.png', import.meta.url).href;
</script>

<template>
    <Header 
        title="Hai, H3D Explorers"
        subtitle="Ayo mulai belajar perangkat keras komputer dengan pengalaman yang menyenangkan."
        :toggleSpeaker="toggleSpeaker"
        :isMuted="isMuted"
        :imageSrc="imageSrc"
        :showBackButton="false"
    />
    <HomeCard />
</template>
