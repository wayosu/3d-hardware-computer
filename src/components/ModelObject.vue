<script setup>
import { defineProps, onMounted, onUnmounted, ref } from 'vue';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const props = defineProps({
    modelSrc: String,
    modelScale: String,
    modelPosition: String,
});

const sceneContainer = ref(null);

onMounted(() => {
    // Setup Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xf2f2f2, 1);
    sceneContainer.value.appendChild(renderer.domElement);

    // Add Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 10, 10).normalize();
    scene.add(light);

    // Load Model 3D
    const loader = new GLTFLoader();
    const modelSrc = new URL(`../assets/3d-models/${props.modelSrc}`, import.meta.url).href;
    console.log(modelSrc);
    let model; // Declare model variable here

    loader.load(modelSrc, (gltf) => {
        const modelScale = props.modelScale;
        const modelPosition = props.modelPosition;
        model = gltf.scene; // Assign the loaded model to the variable
        model.scale.set(modelScale, modelScale, modelScale); // Ubah skala sesuai kebutuhan
        model.position.set(0, modelPosition, 0); // Posisikan model di tengah
        scene.add(model);

        // Initialize OrbitControls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25; // Mengatur damping untuk kontrol yang lebih halus
        controls.enableRotate = true;
        controls.enableZoom = true; // Mengizinkan zoom
        controls.zoomSpeed = 1.0; // Mengatur kecepatan zoom
        controls.enablePan = true; // Mengizinkan panning
        controls.autoRotate = true; // Mengaktifkan auto-rotate
        controls.autoRotateSpeed = 1.0; // Kecepatan auto-rotate

    }, undefined, (error) => {
        console.error(error);
    });

    // Position camera
    camera.position.z = 5;
    camera.position.y = 10;

    // Render Loop
    const animate = () => {
        requestAnimationFrame(animate);

        if (model) {
            // Auto-rotate model
            model.rotation.y += 0.005; // Ganti dengan rotasi yang Anda inginkan
        }

        renderer.render(scene, camera);
    };
    animate();

    // Adjust canvas on window resize
    const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    // Clean up on component unmount
    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
        renderer.dispose();
        // Check if sceneContainer is defined before removing child
        if (sceneContainer.value) {
            sceneContainer.value.removeChild(renderer.domElement);
        }
    });
});
</script>

<template>
    <div ref="sceneContainer" class="scene"></div>
</template>

<style scoped>
.scene {
    width: 100%;
    height: 50vh;
    overflow: hidden;
}
</style>
