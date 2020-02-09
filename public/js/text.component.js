'use strict';

const textComponent = {
    name: 'textComponent',
    template: `<pre>This is an textComponent {{msg}} {{ inputText }}</pre>`,
    props: ['inputText'],
    data: function () {
        return {
            msg: 'BAR'
        }
    }
};

Vue.component('text-component', textComponent);