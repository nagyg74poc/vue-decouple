'use strict';
import Vue from 'vue';
import { Hit } from '../../store/hit.store';

export const parentComponent = Vue.extend({
    name: 'parentComponent',
    props: [ 'name', 'text' ],
    data: function () {
        return {
            msg: 'PARENT'
        }
    },
    mounted() {
        const hit = {
            from: this.name,
            val: 'Mount',
        };
        this.$store.dispatch('registerHit', hit);
    },
    methods: {
        onClickBtn(char: string) {
            const hit: Hit = {
                from: this.name,
                val: char
            };
            this.$customService.hit(this.name, char);
            this.$store.dispatch('registerHit', hit)
        }
    },
    computed: {
        storeHits() {
            return this.$store.getters.hits;
        },
        serviceHits: function () {
            return this.$customService.hits;
        }
    }
});

Vue.component('parent-component', parentComponent);