import { useMediaQuery } from "@vueuse/core";
import { computed } from "vue";

const isLg = useMediaQuery('(width >= 1024px)');
const isMd = useMediaQuery('(1024px > width > 768px)');
const isSm = useMediaQuery('(768px >= width)');


const screenSize = computed(() : ('desktop' | 'tablet' | 'mobile') => {
    let screensize:('desktop' | 'tablet' | 'mobile');
    switch (true) {
        case isLg.value:
            screensize= 'desktop'
        break;
        case isMd.value:
            screensize= 'tablet'
        break;
        case isSm.value:
            screensize= 'mobile'
        break;
        default:
            screensize= 'mobile'
        break;
    }

    return screensize;
})

export default screenSize;