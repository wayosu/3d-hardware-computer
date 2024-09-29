<script setup>
import BottomNavigation from './components/BottomNavigation.vue';
import { ref, onMounted, onUnmounted } from 'vue';

// Background music setup
const backgroundMusic = new Audio(new URL('./assets/audio/bgm.mp3', import.meta.url).href);
backgroundMusic.loop = true;
const isMuted = ref(true);

// Function to toggle mute/unmute
const toggleSpeaker = () => {
    isMuted.value = !isMuted.value;
    backgroundMusic.muted = isMuted.value;
};

// Autoplay background music when the page loads
const startAudio = () => {
    backgroundMusic.muted = isMuted.value; // Start with current muted state
    backgroundMusic.play().catch((error) => {
        console.error("Error playing audio:", error);
    });
};

onMounted(() => {
    startAudio();
});

onUnmounted(() => {
    backgroundMusic.pause();
});
</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-700 overflow-auto">
        <div class="max-w-md w-full h-screen bg-white shadow-md overflow-auto">
            <router-view :toggleSpeaker="toggleSpeaker" :isMuted="isMuted" />
    
            <BottomNavigation />
        </div>
    </div>
</template>
