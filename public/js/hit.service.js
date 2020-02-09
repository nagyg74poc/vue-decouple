'use strict';

const srv = {
    hits: [
        {
            from: 'default',
            val: 'X'
        }
    ],
    hit(from, val) {
        this.addHit(from, val);
    },
    addHit(from, val) {
        this.hits.push({from, val});
    }
};

Vue.prototype.$customService = srv;