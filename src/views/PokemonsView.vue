<script setup>
    import axios from 'axios';
    import {ref} from 'vue';
    import {RouterLink} from 'vue-router';
    //--------------------------------------------------------------------------

    const pokemons = ref([]);

    const getPokemons = async() => {
        try {
            const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
            pokemons.value = data.results;
        } catch (error) {
            console.log(error);
        }
    }

    getPokemons();
</script>

<template>
    <h1 class="mb-4">Pokemons</h1>

    <ul class="list-group">
        <li v-for="pokemon in pokemons" class="list-group-item">
            <router-link  :to ="`/pokemons/${pokemon.name}`">
                {{ pokemon.name }}
            </router-link>
        </li>
        
    </ul>

    
</template>
