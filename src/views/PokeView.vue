<script setup>   
    import axios from 'axios';
    import { useRoute, useRouter } from 'vue-router';
    //-------------------------------------------------------------------------- 

    const route = useRoute();
    const router = useRouter();

    const back = () => {
        router.push('/pokemons');
    }

    const getInfo = async() => {
        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    getInfo();
</script>

<template>
    <div class="card">
        <div class="card-body">
            <div class="card-title fs-4 fw-semibold" >
                {{ $route.params.name }}
            </div>  
            <button class="btn btn-outline-primary" @click="back">atrás</button>
        </div>
    </div>
</template>