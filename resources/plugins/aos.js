import Vue from 'vue';
import 'aos/dist/aos.css';

Vue.directive('aos', {
    /**
     * Set up the AOS instance
     *
     * @param {HTMLElement} el
     */
    bind(el) {
        if (!process.browser) {
            return;
        }

        const AOS = require('aos');

        el.setAttribute('data-aos', 'fade-left');

        AOS.init({
            offset: 100,
            duration: 1000,
            delay: 2000,
        });
    },

    /**
     * When the element is inserted, update the instance
     */
    inserted() {
        if (!process.browser) {
            return;
        }

        const AOS = require('aos');

        AOS.refresh();
    },

    /**
     * When the element changes, update the instance
     */
    update() {
        if (!process.browser) {
            return;
        }

        const AOS = require('aos');

        AOS.refresh();
    },
});
