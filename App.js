window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-swither]');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.CDATA_SECTION_NODE.tab;

        tab_switcher.addEventListener('click', () => {
            
        })
    }
}