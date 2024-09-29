<script setup>
import Header from '../components/Header.vue';
import MateriBelajarCard from '../components/MateriBelajarCard.vue';
import { defineProps, ref } from 'vue';
import srcMateri from '../data/materi.json';

const dataMateri = ref(srcMateri);

const props = defineProps({
    toggleSpeaker: Function,
    isMuted: Boolean,
    showBackButton: Boolean,
});

const imageSrc = new URL(
    '../assets/images/3d-illustration-mb.png',
    import.meta.url
).href;
</script>

<template>
    <Header
        title="Materi Belajar"
        subtitle="Daftar materi yang dapat dipelajari oleh H3Dware Explorers."
        :toggleSpeaker="toggleSpeaker"
        :isMuted="isMuted"
        :imageSrc="imageSrc"
        :showBackButton="true"
    />

    <MateriBelajarCard :dataMateri="dataMateri" :toggleSpeaker="toggleSpeaker" :isMuted="isMuted" />
</template>
