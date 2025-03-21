export function useMediaQuery(query: string) {
    const value = ref(false);

    const onChange = (e: MediaQueryListEvent) => {
        value.value = e.matches;
    }

    onMounted(() => {
        const mediaQueryList = window.matchMedia(query);
        value.value = mediaQueryList.matches;
        mediaQueryList.addEventListener('change', onChange);
    })

    onUnmounted(() => {
        const mediaQueryList = window.matchMedia(query);
        mediaQueryList.removeEventListener('change', onChange);
    })

    return {
        isDesktop: value
    }
}