import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore('favoritos', () => {

    const favoritos = ref([])

    if(localStorage.getItem("favoritos")){
        favoritos.value = JSON.parse(localStorage.getItem("favoritos"))
    }

    const addFavorito = poke => {
        favoritos.value.push(poke);
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
    };

    const remove = id => {
        favoritos.value = favoritos.value.filter(item => item.id != id)
        localStorage.setItem("favoritos", JSON.stringify(favoritos.value));
    }

    const isAdded = name => favoritos.value.find(item => item.name === name)
    
    return{
        favoritos,
        addFavorito, 
        remove,
        isAdded
    }
})