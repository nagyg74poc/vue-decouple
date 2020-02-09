import Vuex, { MutationTree, Store, ActionTree, GetterTree } from 'vuex';

export interface Hit {
    from: string;
    val: string;
    origin?: string;
}

interface HitState {
    hits: Hit[];
}

const state: HitState = {
    hits: [
        {
            from: 'default',
            val: 'X'
        }
    ]
}

const mutations: MutationTree<HitState> = {
    addHit(state, newHit: Hit) {
        state.hits.push(newHit);
    }
}

const actions: ActionTree<HitState, HitState> = {
    registerHit({ commit, state }, hit: Hit) {
        commit('addHit', hit);
    }
}

const getters: GetterTree<HitState, HitState> = {
    hits(state) {
        return state.hits.map(h => {
            h.origin = 'from getter';
            return h;
        });
    }
}

export const store = {
    state,
    mutations,
    actions,
    getters,
};