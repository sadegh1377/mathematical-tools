import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faDivide,
    faTimes,
    faMinus,
    faPlus,
    faEquals,
    faPercent,
    faBackspace,
    faEraser,
    faSquare,
    faCircle
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faBackspace, faEraser, faMinus, faPlus, faEquals, faPercent, faTimes, faDivide,
    faCircle, faSquare
)


Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.prototype.$http = Axios;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
