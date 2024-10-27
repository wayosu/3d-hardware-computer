<script setup>
import Header from '../components/Header.vue';
import { defineProps } from 'vue';

const props = defineProps({
    toggleSpeaker: Function,
    isMuted: Boolean,
    showBackButton: Boolean
});

const imageSrc = new URL('../assets/images/my-profile.png', import.meta.url).href;
</script>

<template>
    <Header 
        title="Informasi"
        subtitle="Informasi pembuat media pembelajaran."
        :toggleSpeaker="toggleSpeaker"
        :isMuted="isMuted"
        :imageSrc="imageSrc"
        :showBackButton="true"
    />

    <div class="p-6">
        <div class="bg-white p-4 border rounded-xl shadow">
            <div class="flex flex-col gap-2">
                <div>
                    <h1 class="font-title text-blue-600">Nama</h1>
                    <p class="font-body text-justify">Wahyu Setiawan Usman</p>
                </div>
                <div>
                    <h1 class="font-title text-blue-600">Email</h1>
                    <p class="font-body text-justify">wayosu.dev@gmail.com</p>
                </div>
                <div>
                    <h1 class="font-title text-blue-600">Github</h1>
                    <a href="https://github.com/wayosu" class="font-body text-justify hover:underline" target="_blank">wayosu</a>
                </div>
                <div>
                    <h1 class="font-title text-blue-600">Linkedin</h1>
                    <a href="https://www.linkedin.com/in/wahyu-setiawan-usman/" class="font-body text-justify hover:underline" target="_blank">Wahyu Setiawan Usman</a>
                </div>
            </div>
        </div>
    </div>
</template>
