console.log("LeetCode extension starting")

const catchButton = new MutationObserver(() => {
    const svgSelect = 'svg[class="svg-inline--fa fa-arrow-down-arrow-up absolute h-[1em] -translate-x-1/2 -translate-y-1/2 align-[-0.125em] left-1/2 top-1/2"]'
    let svg = document.querySelector(svgSelect)
    if (svg) {
        console.log("LeetCode extension 26-09 found svg to click")
        catchButton.disconnect()
        setTimeout(() => {
            simulateClick(svg.parentElement.parentElement.parentElement)
            console.log("LeetCode extension 26-09 click submenu")

            setTimeout(() => {
                let tags = document.evaluate(
                    "//div[normalize-space()='Tags']",
                    document,
                    null,
                    XPathResult.FIRST_ORDERED_NODE_TYPE,
                    null
                ).singleNodeValue;
                if (tags) {
                    console.log("LeetCode extension 26-09 click Tags")
                    tags.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

                    setTimeout(() => {
                        simulateClick(svg.parentElement.parentElement.parentElement)
                        console.log("LeetCode extension 26-09 close submenu neatly")
                    }, 500)
                }
            }, 1000)
        }, 3000)
    }
})

function simulateClick(element) {
    element.focus();
    // The only way I was able to "click" the button is to hit an Enter key :shrug:
    element.dispatchEvent(new KeyboardEvent("keydown", {
        bubbles: true,
        cancelable: true,
        key: "Enter",
        keyCode: 13
    }));
}

catchButton.observe(document.body, {
    childList: true,
    subtree: true
})
