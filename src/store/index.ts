import Vue from 'vue';
import Vuex, { Store } from 'vuex';

import { store as HitStore } from './hit.store'

// declare global {
//     interface Window {
//         VueStoreInstance: any;
//     }
// }

Vue.use(Vuex);

export const StoreInstance = new Store(HitStore);
// window.VueStoreInstance = StoreInstance;