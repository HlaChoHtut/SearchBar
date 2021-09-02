let usernameInput = document.getElementById('userNameInput')
usernameInput.addEventListener('keyup', (event) => {
    let username = event.target.value.toLowerCase();
    console.log(username)
})