import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref([])

    const addFavorito = poke => {
        favoritos.value.push(poke);
    };

    const remove = id => {
        favoritos.value = favoritos.value.filter(item => item.id != id)
    }

    const isAdded = name => favoritos.value.find(item => item.name === name)
    
    return{
        favoritos,
        addFavorito, 
        remove,
        isAdded
    }
})