export const productGallery = () => ({
    initialRender: true,
    currentImage: null,

    switchImage() {
        this.initialRender = false
        this.currentImage = {
            url: this.$el.dataset.url,
            alt: this.$el.dataset.alt || ''
        }
    },

})
