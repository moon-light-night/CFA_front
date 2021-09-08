import {InjectionKey} from "vue";
import {createStore, Store, useStore as baseUseStore} from "vuex";

import {RootState} from "./types";
import {authentication} from "./authentication";

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
    modules: {
        authentication,
    },
});

export function useStore() {
    return baseUseStore(key);
}
