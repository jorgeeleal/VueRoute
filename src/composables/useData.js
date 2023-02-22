import axios from 'axios';
import {ref} from 'vue';

export const useData = () => {

    const data = ref(null);
    const loading = ref(true);
    const error = ref(null);

    const getData = async(url) => {
        loading.value = true;
        try {
            const response = await axios.get(url)
            data.value = response.data;
        } catch (e) {
            //console.log(e);
            error.value = "Error del servidor";
        } finally {
            loading.value = false;
        }
    };

    return {
        getData,
        data,
        loading, 
        error
    }

}