const SELECTOR = "#selector-class-name";

function removeUpsell() {
    const element = document.querySelector(SELECTOR);

    if (element) {
        element.remove();
        console.log("Selecotor Class Removed");
    }
}

// Remove it immediately
removeUpsell();

// Watch for the website creating it again
const observer = new MutationObserver(() => {
    removeUpsell();
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});
