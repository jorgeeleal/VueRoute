<script setup>   

    import { useRoute, useRouter } from 'vue-router';
    import { useData } from '@/composables/useData';
    import { useFavoritosStore } from '@/store/useFavoritosStore';
    //-------------------------------------------------------------------------- 

    const route = useRoute();
    const router = useRouter();

    const useFavoritos = useFavoritosStore();

    const {addFavorito, isAdded} = useFavoritos;


    const {data, getData, loading, error} = useData();

    const back = () => {
        router.push('/pokemons');
    }
    getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
    console.log(data);
</script>

<template>
    <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <br>
    <div v-if="error" class="alert alert-danger" >
        {{ error }}
    </div> 
    <div v-if="data" class="text-center">
        <h1>...</h1>
                                <!-- Optional chaining :  -- Si no ha cargado la promesa-->
        <img :src="data.sprites?.front_default"  alt="..."  style="width: 10rem;" >
        <p class="fs-4 fw-semibold" >
            {{ $route.params.name }}
        </p>
        <p class="fs-6 fw-lighter" >
            Experiencia: {{ data.base_experience }}
        </p>
        <p class="fs-6 fw-normal mb-2" >
            Habilidades:
        </p>
        <p v-for="hab in data.abilities" class="fs-6 fw-lighter mb-1">* {{ hab.ability.name }}</p>

        

        <button class="btn btn-warning mx-5 mt-4" 
        @click="addFavorito(data)"
        :disabled="isAdded(data.name)"
        >añadir a favoritos</button>    
    </div>
    <button class="btn btn-outline-primary mt-3 " @click="back">atrás</button>
</template>

<!-- class="card-img-top" style="width: 8rem;"-->