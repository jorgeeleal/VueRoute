<script setup>   
    import axios from 'axios';
    import { useRoute, useRouter } from 'vue-router';
    import {ref} from 'vue';
    //-------------------------------------------------------------------------- 

    const route = useRoute();
    const router = useRouter();

    const back = () => {
        router.push('/pokemons');
    }

    const pokeInfo = ref({});

    const getInfo = async() => {
        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
            pokeInfo.value = data;
        } catch (error) {
            console.log(error);
        }
    }

    getInfo();
</script>

<template>
    <h1>Info</h1>
    <div class="card">
                                <!-- Optional chaining :  -- Si no ha cargado la promesa-->
        <img :src="pokeInfo.sprites?.front_default" class="card-img-top" alt="..." style="width: 8rem;">
        <div class="card-body">
            <div class="card-title fs-4 fw-semibold" >
                {{ $route.params.name }}
            </div>  
            <button class="btn btn-outline-primary" @click="back">atrás</button>
        </div>
    </div>
</template>
