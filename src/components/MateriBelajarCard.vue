<script setup>
import { useRouter } from 'vue-router';

const { dataMateri } = defineProps(['dataMateri']);
const router = useRouter();

const goToMateri = (materiSlug) => {
    router.push({
        name: 'materi-belajar-detail',
        params: { slug: materiSlug }
    });
};
</script>

<template>
    <div class="flex flex-col gap-6 p-6 mb-16">        
        <article
            v-for="data in dataMateri" :key="data.slug" @click="goToMateri(data.slug)"
            class="group flex gap-6 bg-white p-6 border rounded-xl shadow hover:border-blue-600 transition-all"
        >
            <div
                class="inline-flex items-center justify-center w-10 h-10 bg-blue-600 p-2 rounded-full"
            >
                <svg
                    class="w-6"
                    viewBox="0 0 32 32"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                    <g id="icomoon-ignore"></g>
                    <path
                        d="M5.87 3.205v25.59l10.129-7.464 10.13 7.464v-25.59h-20.259zM25.063 26.685l-9.064-6.678-9.063 6.678v-22.414h18.127v22.414z"
                        fill="#ffffff"
                    ></path>
                    <path
                        d="M10.668 9.602h10.663v1.066h-10.663v-1.066z"
                        fill="#ffffff"
                    ></path>
                    <path
                        d="M10.668 13.867h10.663v1.066h-10.663v-1.066z"
                        fill="#ffffff"
                    ></path>
                </svg>
            </div>
            <h1 class="font-title group-hover:text-blue-600" >
                {{ data.judul }}
            </h1>
        </article>
    </div>
</template>
