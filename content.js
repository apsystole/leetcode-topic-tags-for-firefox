console.log("LeetCode extension starting")

const catchButton = new MutationObserver(() => {
    let button = document.querySelector('#headlessui-popover-button-\\:rf\\:')
    if (button) {
        catchButton.disconnect()
        setTimeout(() => {
            button.click()
            console.log("LeetCode extension click 1")

            setTimeout(() => {
                button = document.querySelector('#headlessui-popover-button-\\:rf\\:')
                // Since there is no easy stable selector (id/class), assume that:
                // - assume the menu div is always button's immediate sibling,
                // - assume it has another div inside,
                // - assume "Show topic tags" is always the first item in that div.
                button.nextSibling.childNodes[0].childNodes[0].click()
                console.log("LeetCode extension click 2")

                setTimeout(() => {
                    // Neatly close the popup menu.
                    document.querySelector('#headlessui-popover-button-\\:rf\\:').click()
                    console.log("LeetCode extension click 3")
                }, 500)
            }, 500)
        }, 3000)
    }
})

catchButton.observe(document.body, {
    childList: true,
    subtree: true
})
