export const templateSwitch = (payload) => ({
    initial: null,
    active: null,
    init() {
        this.initial = payload;
        this.active = payload;
    },
    show(payload) {
        this.active = payload
    }
})
