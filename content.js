console.log("LeetCode extension starting")

const catchButton = new MutationObserver(() => {
    // 2025-04 layout
    const svgSelect = 'svg[data-icon="arrow-down-arrow-up"]'
    let svg = document.querySelector(svgSelect)
    if (svg) {
        catchButton.disconnect()
        setTimeout(() => {
            simulateClick(svg.parentElement.parentElement.parentElement)
            console.log("LeetCode extension 25-04 click 1")

            setTimeout(() => {
                // Hardcode menu item by class.
                document.querySelector('div[class="flex cursor-pointer justify-between px-3 py-2.5"]').click()
                console.log("LeetCode extension 25-04 click 2")

                setTimeout(() => {
                    // Neatly close the popup menu.
                    let svg = document.querySelector(svgSelect)
                    simulateClick(svg.parentElement.parentElement.parentElement)
                    console.log("LeetCode extension 25-04 click 3")
                }, 500)
            }, 500)
        }, 3000)
    }
    // 2024 layout, to be deleted.
    const select24 = '#headlessui-popover-button-\\:rf\\:'
    let button = document.querySelector(select24)
    if (button) {
        catchButton24.disconnect()
        setTimeout(() => {
            button.click()
            console.log("LeetCode extension 24 click 1")

            setTimeout(() => {
                button = document.querySelector(select24)
                // Since there is no easy stable selector (id/class), assume that:
                // - assume the menu div is always button's immediate sibling,
                // - assume it has another div inside,
                // - assume "Show topic tags" is always the first item in that div.
                button.nextSibling.childNodes[0].childNodes[0].click()
                console.log("LeetCode extension 24 click 2")

                setTimeout(() => {
                    // Neatly close the popup menu.
                    document.querySelector(select24).click()
                    console.log("LeetCode extension 24 lick 3")
                }, 500)
            }, 500)
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
