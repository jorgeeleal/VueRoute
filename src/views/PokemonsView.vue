<script setup>
    import axios from 'axios';
    import {ref} from 'vue';
    import {RouterLink} from 'vue-router';
    import PokemonItem from '../components/PokemonItem.vue';
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
    <h1 class="pokemons">Pokemons.</h1>
    <div class="container" v-for="pokemon in pokemons" >
        <router-link :to ="`/pokemons/${pokemon.name}`">
            <PokemonItem :name="pokemon.name" />
        </router-link>
    </div>
    
</template>

<style>
@media (min-width: 1024px) {
  .pokemons {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>