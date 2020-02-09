'use strict';

const parentComponent = {
    name: 'parentComponent',
    props: ['name', 'text'],
    data: function () {
        return {
            msg: 'PARENT'
        }
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

Vue.component('parent-component', parentComponent);