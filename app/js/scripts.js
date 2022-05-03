let searchBar = document.querySelector("#search-bar")
let searchButton = document.querySelector("#search-button")
let mobileSearchButton = document.querySelector("#mobile-search-button")
let mobileSideMenu = document.querySelector('.mobile-dropdown')
let checkBox = document.querySelector('#ham-button')

let aboutDropdown = document.querySelector('.about-section')
let aboutButton = document.querySelector('#about-button')

let nextButton = document.querySelector("#next")
let previousButton = document.querySelector("#previous")

let mainBackground = document.querySelector(".main-section")
let title = document.querySelector(".main-section h2")
let info = document.querySelector("#information")

let backgrounds = ['url(../images_content/slider1.png)', 'url(../images_content/slider2.png)', 'url(../images_content/slider3.png)']
let text = [{title: "DUNLAVIN CHURCH RESTORATION", info: "Sed feugiat imperdiet porttitor.Nulla lectus turpis, placerat ut sapien eu,pellentesque volutpat tellus. Nullam vel justo eu enim feugiat venenatis tristique vitae ligula. Aliquam semper interdum luctus"},
{title: "DUNLAVIN CHURCH RESTORATION", info: "Consectetur lacus sed, pretium sem. Tellus erat maximus elit, in accumsan urna urna a lorem. In hac habitasse platea dictumst. Praesent venenatis nisl ornare libero suscipit, vitae pretium nibh aliquam."},
{title: "DUNLAVIN CHURCH RESTORATION", info: "Maecenas lobortis sit amet ante et molestie. Proin id feugiat ante. Fusce ut ante neque. Etiam lacinia, enim dictum tincidunt cursus."}]

function showSearchBar() {
    if (searchBar.style.display === 'flex') {
        searchBar.style.display = 'none'
        searchButton.src = "../images_content/search_icon.png"
        mobileSearchButton.src = "../images_content/search_icon.png"
    } else {
        searchBar.style.display = 'flex'
        searchButton.src = "../images_content/mobile_menu_close.png"
        mobileSearchButton.src = "../images_content/mobile_menu_close.png"
    }
    
}

function showSideMenu() {
    if (mobileSideMenu.style.width == '80%') {
        mobileSideMenu.style.width = '0'
    } else {
        mobileSideMenu.style.width = '80%'
        
    }
}

function showMobileDropdown() {
    if (aboutDropdown.style.height == '175px') {
        aboutDropdown.style.height = '0'
        aboutButton.innerHTML = '+'
    } else {
        aboutDropdown.style.height = '175px'
        aboutButton.innerHTML = '-'
    }
}

let x = 0
function nextSlide() {
    x += 1
    if (x > 2) {
        x=0
    }
    mainBackground.style.backgroundImage = backgrounds[x]
    title.innerHTML = text[x].title
    info.innerHTML = text[x].info
}

function previousSlide() {
    x -= 1
    if (x < 0) {
        x=2
    }
    mainBackground.style.backgroundImage = backgrounds[x]   
    title.innerHTML = text[x].title  
    info.innerHTML = text[x].info
}

document.addEventListener('mouseup', function(e) {
    if (!mobileSideMenu.contains(e.target)) {
        mobileSideMenu.style.width = '0';
    }
});



searchButton.addEventListener('click', showSearchBar)
mobileSearchButton.addEventListener('click', showSearchBar)
nextButton.addEventListener('click', nextSlide)
previousButton.addEventListener('click', previousSlide)
checkBox.addEventListener('click', showSideMenu)
aboutButton.addEventListener('click', showMobileDropdown)

