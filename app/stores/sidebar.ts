interface SidebarStore {
    isOpen: boolean;
}

export const useSidebarStore = defineStore('sideStore', {
    state: (): SidebarStore => ({isOpen: false}),
    getters: {
        getIsSidebarOpen: (state) => state.isOpen,
    },
    actions: {
        togggleSidebar () {
            this.isOpen = !this.isOpen}
    },
})
