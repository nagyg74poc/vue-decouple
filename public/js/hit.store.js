const store = {
    state: {
        hits: [
            {
                from: 'default',
                val: 'X'
            }
        ]
    },
    mutations: {
        addHit(state, newHit) {
            state.hits.push(newHit);
        }
    },
    actions: {
        registerHit({commit, state}, hit) {
            commit('addHit', hit);
        }
    },
    getters: {
        hits(state) {
            return state.hits.map(h => {
                return {
                    ...h,
                    origin : 'from getter'
                };
            });
        }
    }
};

var VueStore = new Vuex.Store(store);