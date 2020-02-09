'use strict';
import Vue from 'vue';
// import { Vue } from '../../main';
// import { StoreInstance } from '../../store';
import { Hit } from '../../store/hit.store';

export const historyComponent = Vue.extend({
    name: 'historyComponent',
    template: `<div class="history">
<h3>This is a historyComponent</h3>
<button @click="addHit">Add Hit</button>
<h4>Store Hits</h4>
<ol class="store-list">
  <li v-for="hit in storeHits">
    {{ hit.from }}: {{hit.val}}
  </li>
</ol>
<h4>Service Hits</h4>
<ul>
  <li v-for="hit in serviceHits">
    {{ hit.from }}: {{hit.val}}
  </li>
</ul>
</div>`,
    mounted(){
        this.$store.dispatch('registerHit', {
            from: 'History',
            val: 'Default'
        });
    },
    methods: {
        addHit(){
            const hit: Hit = {
                from: 'History',
                val: 'H',
            };
            this.$customService.addHit(hit.from, hit.val);
            this.$store.dispatch('registerHit', hit);
        }
    },
    computed: {
        storeHits: function () {
            return this.$store.state.hits;
        },
        serviceHits: function () {
            return this.$customService.hits;
        }
    }
});

Vue.component('history-component', historyComponent);

// const histories = document.querySelectorAll('.v-cmp-history');
// histories.forEach((history, index) => {
//     let c = new Vue({
//         name: `cmpHistory${index}`,
//         el: history,
//         store: StoreInstance,
//         components: {
//             'history-component': historyComponent
//         },
//     });
// })