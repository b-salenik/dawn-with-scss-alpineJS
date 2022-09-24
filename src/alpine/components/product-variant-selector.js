
export const productVariantSelector = () => ({
    currentVariant: {},
    productOptions: {},
    productVariants: {},
    selectedVariant: {},

    init() {
        this.currentVariant = JSON.parse(this.$el.dataset.currentVariant)
        this.productOptions = JSON.parse(this.$el.dataset.productOptions)
        this.productVariants = JSON.parse(this.$el.dataset.productVariants)
        this.selectedVariant = this.currentVariant

        console.log(this.currentVariant, this.productOptions, this.productVariants, this.selectedVariant)
    },

    selectOption(e, { name }) {
        const selectedValue = e.target.value
        console.log(selectedValue, name)
        const selectedOption = this.productOptions.find(option => option.name === name)
        const allOptionValuesWithoutSelected = selectedOption.values.filter(value => value !== selectedValue)

        const targetOptions = [
            selectedValue,
            ... this.selectedVariant.options.filter(value => !allOptionValuesWithoutSelected.includes(value))
        ]

        this.productVariants.some(variant => {
            if (variant.options.every(option => targetOptions.includes(option))) {
                this.selectedVariant = variant

                this.goToVariant(this.selectedVariant.id)
                return true
            }
        })
    },

    goToVariant(value) {
        const url = new URL(window.location)
        url.searchParams.set('variant', value)
        history.pushState({}, null, url);
    }
})
