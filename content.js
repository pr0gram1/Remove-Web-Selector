const SELECTOR = "#desktop-dynamic-upsell-dialog";

function removeUpsell() {
    const element = document.querySelector(SELECTOR);

    if (element) {
        element.remove();
        console.log("Login Modal Removed");
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