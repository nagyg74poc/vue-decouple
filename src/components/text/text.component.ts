'use strict';
import Vue from 'vue';

export const textComponent = Vue.extend({
    name: 'textComponent',
    template: `<pre>This is an textComponent {{msg}} {{ inputText }}</pre>`,
    props: ['inputText'],
    data: function () {
        return {
            msg: 'BAR'
        }
    }
});

Vue.component('text-component', textComponent);


// const texts = document.querySelectorAll('.v-cmp-text');
// texts.forEach((text, index) => {
//     let c = new Vue({
//         name: `cmpText${index}`,
//         el: text,
//         components: {
//             'text-component': textComponent
//         },
//     });
// });