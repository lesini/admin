import Vue from 'vue'
import App from './App'
import Field from 'vt-field'
import router from './router'
import Validator from 'vt-validator'
import { Selects, Options } from 'vt-select'
import { Drag, Drop } from 'components/dnd'

Vue.component('Drag', Drag)
Vue.component('Drop', Drop)
Vue.component('Field', Field)
Vue.component('Selects', Selects)
Vue.component('Options', Options)
Vue.component('Validator', Validator)

new Vue({
    router,
    ...App
}).$mount('#app')