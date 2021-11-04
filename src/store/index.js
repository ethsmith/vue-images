import Vuex from 'vuex';
import Vue from 'vue';
import auth from "@/store/modules/auth";
import images from "@/store/modules/images";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        images
    }
});