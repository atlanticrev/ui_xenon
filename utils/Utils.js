const Utils = (() => {
    /**
     * @param {String} templateString
     * @returns {Element}
     */
    function createEl (templateString) {
        const el = document.createElement('div');
        el.innerHTML = templateString.trim();
        return el.firstElementChild;
    }

    return {
        createEl
    };
})();