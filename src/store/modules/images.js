import imgur from '@/api/imgur';
import { router } from '@/main';

const state =  {
    images: []
};

const getters = {
    getImages: (state) => state.images
};

const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth;
        const response = await imgur.fetchImages(token);
        commit('setImages', response.data.data);
    },

    async uploadImages({ rootState }, images) {
        const { token } = rootState.auth;
        await imgur.uploadImages(token, images);
        await router.push('/');
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images
    }
};

export default {
  state,
  getters,
  actions,
  mutations
};