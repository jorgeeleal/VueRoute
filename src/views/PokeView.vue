<script setup>   

    import { useRoute, useRouter } from 'vue-router';
    import { useData } from '@/composables/useData';
    //-------------------------------------------------------------------------- 

    const route = useRoute();
    const router = useRouter();

    const {data, getData, loading, error} = useData();

    const back = () => {
        router.push('/pokemons');
    }
    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
    <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <br>
    <div v-if="error" class="alert alert-danger" >
        {{ error }}
    </div> 
    <div v-if="data">
        <h1>Info</h1>
        <div class="card">         <!-- Optional chaining :  -- Si no ha cargado la promesa-->
            <img :src="data.sprites?.front_default" class="card-img-top" alt="..." style="width: 8rem;">
            <div class="card-body">
                <div class="card-title fs-4 fw-semibold" >
                    {{ $route.params.name }}
                </div>    
            </div>
        </div>
    </div>
    <button class="btn btn-outline-primary mt-3" @click="back">atrás</button>
</template>
