import axios from 'axios';

export const getSingleAnime = async (id) => {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    const { data: anime } = response.data;
    return anime;
};