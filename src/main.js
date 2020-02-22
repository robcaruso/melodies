import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
//import colors from 'vuetify/lib/util/colors'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// export default new vuetify({
//   theme: {
//     themes: {
//       light: {
//         primary: colors.red.darken1, // #E53935
//         secondary: colors.red.lighten4, // #FFCDD2
//         accent: colors.indigo.base, // #3F51B5
//       },
//     },
//   },
// })

new Vue({
  vuetify, axios, VueAxios,
  render: h => h(App)
}).$mount('#app')

