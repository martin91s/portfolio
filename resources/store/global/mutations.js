export default {
    /**
     *  toggle the mobile nav
     *
     * @param {Object} state
     */
    toggleMobileNav(state) {
        state.mobile_nav_visible = !state.mobile_nav_visible;
    },
};
