import Alpine from 'alpinejs'

//stores
import {mobileMenu} from "@/alpine/store/mobile-menu";
//components
import {templateSwitch} from "@/alpine/components/template-switch";
import {productGallery} from "@/alpine/components/product-gallery";
import {productVariantSelector} from "@/alpine/components/product-variant-selector";
import {addressesSwitch} from "@/alpine/components/addresses-switch";

// The window.Alpine = Alpine bit is optional,
// but is nice to have for freedom and flexibility.
// Like when tinkering with Alpine from the devtools for example.
window.Alpine = Alpine;

//register stores
Alpine.store('mobile-menu', mobileMenu)
//register components
Alpine.data('templateSwitch', templateSwitch)
Alpine.data('productGallery', productGallery)
Alpine.data('productVariantSelector', productVariantSelector)
Alpine.data('addressesSwitch', addressesSwitch)

Alpine.start()