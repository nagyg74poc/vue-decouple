'use strict';

const playerComponent = {
    name: 'playerComponent',
    template: `<div class="player" :class="'player-'+randomNum">
<h3>{{ name }} - {{randomNum}}</h3>
<div>
    <button @click="onClickBtn('R')">R</button>
    <button @click="onClickBtn('P')">P</button>
    <button @click="onClickBtn('S')">S</button>
</div>
<h4>Store hits</h4>
<ul>
  <li v-for="hit in storeHits">
    {{ hit.from }}: {{hit.val}}, {{hit.origin}}
  </li>
</ul>
<h4>Service hits</h4>
<ul>
  <li v-for="hit in serviceHits">
    {{ hit.from }}: {{hit.val}}
  </li>
</ul>
</div>`,
    props: ['name', 'text'],
    data: function () {
        return {
            msg: 'PLAYER'
        }
    },
    beforeCreate() {
        this.randomNum = Math.floor(Math.random() * 8999) + 1000;
    },
    beforeMount() {
        let style = document.createElement('style');
        style.type = "text/css";
        style.appendChild(document.createTextNode(`.player-${this.randomNum} {color: ${this.text};}`));
        document.head.appendChild(style);
    },
    mounted() {
        const hit ={
            from: this.name,
            val: 'Mount',
        };
        this.$store.dispatch('registerHit', hit);
    },
    methods: {
        onClickBtn(char) {
            this.$customService.hit(this.name, char);
            this.$store.dispatch('registerHit', {
                from: this.name,
                val: char
            })
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

Vue.component('player-component', playerComponent);