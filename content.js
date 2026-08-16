const SELECTOR = "#selector-class-name";

function removeSelector() {
    const element = document.querySelector(SELECTOR);

    if (element) {
        element.remove();
        console.log("Selecotor Class Removed");
    }
}

// Remove it immediately
removeSelector();

// Watch for the website creating it again
const observer = new MutationObserver(() => {
    removeSelector();
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});
