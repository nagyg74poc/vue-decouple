'use strict';

const historyComponent = {
    name: 'historyComponent',
    template: `<div class="history">
<h3>This is a historyComponent</h3>
<button @click="addHit">Add Hit</button>
<h4>Store Hits</h4>
<ol>
  <li v-for="hit in storeHits">
    {{ hit.from }}: {{hit.val}}, {{hit.origin}}
  </li>
</ol>
<h4>Service Hits</h4>
<ul>
  <li v-for="hit in serviceHits">
    {{ hit.from }}: {{hit.val}}
  </li>
</ul>
</div>`,
    data: function () {
        return {
            hits : this.$customService.hits
        }
    },
    mounted(){
        this.$store.dispatch('registerHit', {
            from: 'History',
            val: 'Default'
        });
    },
    methods: {
        addHit(){
            const hit = {
                from: 'History',
                val: 'H',
            };
            this.$customService.addHit(hit.from, hit.val);
            this.$store.dispatch('registerHit', hit);
        }
    },
    computed: {
        storeHits(){
            return this.$store.getters.hits;
        },
        serviceHits: function () {
            return this.$customService.hits;
        }
    }
};

Vue.component('history-component', historyComponent);