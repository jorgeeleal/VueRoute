<script setup>
import { useFavoritosStore } from '@/store/useFavoritosStore';
import { storeToRefs } from 'pinia';
//------------------------------------------------------------------

const useFavoritos = useFavoritosStore();

const {remove} = useFavoritos;
const {favoritos} = storeToRefs(useFavoritos);

</script>

<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0">Sin favoritos</p>
    <ul v-else class="list-group">
        <li v-for="pokemon in favoritos" class="list-group-item">
            <div>
                {{ pokemon.name }}
            </div>
            <div>
                <button class="btn btn-sm btn-danger me-2" @click="remove(pokemon.id)">Eliminar</button>
                <router-link class="btn btn-sm btn-warning fw-light" :to ="`/pokemons/${pokemon.name}`">
                    ver información
                </router-link>
            </div>
        </li>
    </ul>
</template>