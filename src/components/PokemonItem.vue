<script setup>
    defineProps(['name']);
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div class="card-title">
                {{name}}
            </div>
        </div>
    </div>
</template>