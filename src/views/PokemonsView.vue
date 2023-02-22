<script setup>
    import {RouterLink} from 'vue-router';
    import {useData} from '@/composables/useData';
    //--------------------------------------------------------------------------

    const {data, getData, loading, error} = useData()
    
    getData('https://pokeapi.co/api/v2/pokemon');

</script>

<template>
    <h1 class="mb-4">Pokemons</h1>
    <div v-if="loading" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div v-if="error" class="alert alert-danger" >
        {{ error }}
    </div> 
    <div v-if="data">
        <ul class="list-group">
            <li v-for="pokemon in data.results" class="list-group-item">
                <router-link  :to ="`/pokemons/${pokemon.name}`">
                    {{ pokemon.name }}
                </router-link>
            </li>
            
        </ul>
        <button class="btn btn-primary mx-1 mt-3 mb-3" 
        @click="getData(data.previous)"
        :disabled="!data.previous">Prev</button>
        <button class="btn btn-primary mx-1 mt-3 mb-3" 
        @click="getData(data.next)"
        :disabled="!data.next">Next</button>
    </div>
</template>
