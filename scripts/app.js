// getting the list refrence here and passing 
const list = document.querySelector('.chatList');

// getting the login and register form refrence
const loginForm = document.querySelector('.login');
const registerForm = document.querySelector('.register');

const registerMsg = document.querySelector('.registerMsg');


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.email1.value.trim();
    const pass = loginForm.password1.value.trim();

    console.log(email, pass);

    $(function() {
        $('#modal').modal('hide')
    });

})

registerForm.addEventListener('submit', (e) => {
        e.preventDefault();


        const email = registerForm.email.value.trim();
        const userName = registerForm.name.value.trim()
        const pass = registerForm.password.value.trim();


        console.log(email, userName, pass);
        registerForm.reset();

        setTimeout(() => {
            $(function() {
                $('.modal').modal('toggle')
            });
        }, 2500);
    })
    // getting the form submit of msg here
const sendMsg = document.querySelector('#sendMessage');

sendMsg.addEventListener('submit', (e) => {
    e.preventDefault();

    let NMsg = sendMsg.sender.value.trim();
    newChat.addMessage(NMsg).then(() => sendMsg.reset())
        .catch(() => console.log('Error..!'));
})


// getting the listner for the update name
const updateNAME = document.querySelector('#updateName');

updateNAME.addEventListener('submit', (e) => {
    e.preventDefault();

    let UName = updateNAME.updater.value.trim();

    newChat.updateName(UName);

    updateNAME.reset();

})


// getting the buttons reference
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {

        // clearing the list here
        ui.clearList();

        // updating the room here
        newChat.updateRoom(e.target.id);

        // getting the chat to subs the event here
        newChat.getChat(data => ui.renderList(data));

    }
})


let LocalName = localStorage.getItem('username') ? localStorage.getItem('username') : 'Anon'
    // this class adds both chat and UI class, joining them
const newChat = new Chat(LocalName, 'general');


// creating the UI instance here
const ui = new UI(list);

// whenever state change it calls
newChat.getChat(data => ui.renderList(data));