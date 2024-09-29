<script setup>
import { defineProps } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import dataMateri from '../data/materi.json';
import ToggleSpeaker from '../components/ToggleSpeaker.vue';
import ModelObject from '../components/ModelObject.vue';

const props = defineProps({
    slug: String,
    toggleSpeaker: Function,
    isMuted: Boolean,
});

const route = useRoute();
const materiSlug = route.params.slug;
const materi = dataMateri.find((m) => m.slug === materiSlug);
</script>

<template>
    <div class="p-6 bg-gradient-to-b from-blue-600 to-blue-800 shadow">
        <div class="flex justify-between items-center">
            <RouterLink :to="{ name: 'materi-belajar' }" class="inline-flex gap-2 items-center font-body text-white border border-white rounded-full ps-2 pe-4 pt-2 pb-1 hover:shadow-inner hover:shadow-white transition-all">
                    <img src="../assets/images/icon-back.svg" alt="icon-back" class="w-5 invert -mt-1">
                    <span class="text-sm">Kembali</span>
            </RouterLink>

            <ToggleSpeaker :toggleSpeaker="toggleSpeaker" :isMuted="isMuted" />
        </div>
    </div>

    <div class="flex flex-col">
        <ModelObject
            :modelSrc="materi.model_src"
            :modelScale="materi.model_scale"
            :modelPosition="materi.model_position"
        />

        <div class="p-6 mb-16">
            <h1 class="font-title font-bold text-2xl mb-4">{{ materi.judul }}</h1>
            <p class="font-body text-justify">{{ materi.deskripsi }}</p>
        </div>
    </div>
</template>
