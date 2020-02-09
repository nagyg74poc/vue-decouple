'use strict';
import Vue from 'vue';
import { StoreInstance } from './store';
import { CustomerService } from './services/hit.service';
import './components';
import { VueMounter } from './vue.mounter';

Vue.prototype.$customService = new CustomerService();
Vue.prototype.$store = StoreInstance;
VueMounter();
new Vue({
    name: `cmpApp`,
    el: '#vue-app',
    store: StoreInstance,
    data: {
        message: 'Hello Vue!'
    }
});

