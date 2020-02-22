import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);

export default new Vuetify({

    theme: {
        themes: {
            light: {
                primary: '#63883D',
                secondary: '#005595',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    }
});
