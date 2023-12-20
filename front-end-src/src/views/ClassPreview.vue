<script setup lang="ts">
import DynamicBar from '@/components/DynamicBar.vue'
import HeapMapChart from '@/components/HeapMapChart.vue'
</script>

<template>
    <div class="ClassPreviewContainer">
        <DynamicBar></DynamicBar>
        <HeapMapChart></HeapMapChart>
    </div>
    
</template>

<style scoped>
.ClassPreviewContainer{
    display: flex;
    
}
</style>