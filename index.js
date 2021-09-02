let searchInput = document.getElementById('searchInput')

searchInput.addEventListener('keyup', (event) => {
    let searchQuery = event.target.value.toLowerCase();
    let allNameDOMcollections = document.getElementsByClassName('name')
    for (let counter = 0; counter < allNameDOMcollections.length; counter++) {
        let currentName = allNameDOMcollections[counter].textContent.toLowerCase()

        if (currentName.includes(searchQuery)) {
            allNameDOMcollections[counter].style.display = 'block'
        } else {
            allNameDOMcollections[counter].style.display = 'none'
        }
    }
})