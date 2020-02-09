document.querySelectorAll('.is-vue').forEach((appCandidate, index) => {
    let c = new Vue({
        name: `myVueApp${index}`,
        el: appCandidate,
        store: window.VueStore,
    });
});