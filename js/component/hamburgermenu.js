export const initializeHamburgerMenu = () => {
    const menu = document.querySelector(".js-header-menu");
    const openButton = document.querySelector(".js-hamburger-button");
    const closeButton = document.querySelector(".js-hamburger-close-button");

    if (!menu || !openButton || !closeButton) return;
    // menu.showModal();

    const openMenu = () => {
        menu.showModal();
    };

    const closeMenu = () => {
        menu.close();
    };

    openButton.addEventListener("click", () => {
        openMenu();
    });

    closeButton.addEventListener("click", () => {
        closeMenu();
    });
};
