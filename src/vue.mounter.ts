import Vue, { ComponentOptions, VueConstructor } from 'vue';
import { Store } from 'vuex';

export function VueMounter(keyClass?: string) {

    keyClass = keyClass || 'is-vue';
    const initialisedClass = 'myVueApp';
    const appNamePrefix = `${initialisedClass}_`;

    document.querySelectorAll(`.${keyClass}`).forEach((appCandidate, index) => {
        appCandidate.classList.remove(keyClass!);
        appCandidate.classList.add(initialisedClass, `${appNamePrefix}${index}`);

        const vueOption: ComponentOptions<Vue> = {
            name: `${appNamePrefix}${index}`,
            el: appCandidate,
        }
        new Vue(vueOption);
    });

}