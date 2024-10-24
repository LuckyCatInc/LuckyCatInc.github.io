const hamburger_open_button = document.querySelector('#hamburger-open-button')
const hamburger_panel = document.querySelector('#hamburger-menu .panel')
const hamburger_close_button = document.querySelector('#hamburger-close-button')
const hamburger_panel_items = document.querySelectorAll('#hamburger-menu .panel .internal-item')

hamburger_open_button.addEventListener('click', () => {
    hamburger_panel.classList.remove("hidden")
    hamburger_open_button.classList.add("hidden")
    hamburger_close_button.classList.remove("hidden")
    document.body.classList.add('overflow-hidden')
})

hamburger_close_button.addEventListener('click', () => {
    hamburger_panel.classList.add("hidden")
    hamburger_open_button.classList.remove("hidden")
    hamburger_close_button.classList.add("hidden")
    document.body.classList.remove('overflow-hidden')
})

hamburger_panel_items.forEach(item => {
    item.addEventListener('click', () => {
        event.preventDefault()

        hamburger_panel.classList.add("hidden")
        hamburger_open_button.classList.remove("hidden")
        hamburger_close_button.classList.add("hidden")
        document.body.classList.remove('overflow-hidden')

        const targetID = item.getAttribute('href')
        const targetElement = document.querySelector(targetID)

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
            })

            history.pushState(null, null, targetID)
        }
    })
})

const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// swiper settings
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});