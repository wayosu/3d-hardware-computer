<script setup>
import Header from '../components/Header.vue';
import { defineProps } from 'vue';

const props = defineProps({
    toggleSpeaker: Function,
    isMuted: Boolean,
    showBackButton: Boolean
});

const imageSrc = new URL('../assets/images/3d-illustration-kd.png', import.meta.url).href;
</script>

<template>
    <Header 
        title="Kompetensi Dasar"
        subtitle="Kompetensi dasar yang diharapkan dalam proses belajar perangkat keras komputer."
        :toggleSpeaker="toggleSpeaker"
        :isMuted="isMuted"
        :imageSrc="imageSrc"
        :showBackButton="true"
    />

    <div class="flex flex-col gap-6 p-6">
        <div class="bg-white p-6 border rounded-xl shadow">
            <h1 class="font-title text-blue-600 mb-1">Kompetensi Dasar</h1>
            <p class="font-body">Mengidentifikasi berbagai komponen perangkat keras komputer.</p>
        </div>

        <div class="bg-white p-6 border rounded-xl shadow">
            <h1 class="font-title text-blue-600 mb-1">Tujuan Pembelajaran</h1>
            <ol class="list-decimal list-inside font-body">
                <li>Dapat mendefinisikan pengertian perangkat keras komputer.</li>
                <li>Dapat menjelaskan fungsi perangkat keras komputer.</li>
                <li>Dapat menentukan perangkat keras komputer berdasarkan fungsinya.</li>
            </ol>
        </div>
    </div>
</template>
