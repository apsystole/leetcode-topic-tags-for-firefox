(function () {
    console.log("LeetCode Extension starting")

    const catchButton = new MutationObserver(() => {
        let button = document.querySelector('#headlessui-popover-button-\\:rf\\:')
        if (button) {
            catchButton.disconnect()
            setTimeout(() => {
                button.click()
                console.log("LeetCode Extension click 1")
                setTimeout(() => {
                    button = document.querySelector('#headlessui-popover-button-\\:rf\\:')

                    button.nextSibling.childNodes[0].childNodes[0].click()
                    console.log("LeetCode Extension click 2")

                    setTimeout(() => {
                        // Now close the popup neatly.
                        document.querySelector('#headlessui-popover-button-\\:rf\\:').click()
                        console.log("LeetCode Extension click 3")
                    }, 500)
                }, 500)
            }, 3000)
        }
    })

    catchButton.observe(document.body, {
        childList: true,
        subtree: true
    })
})()
