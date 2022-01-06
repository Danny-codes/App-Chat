const chatForm = document.getElementById('chat-form');
const messagesDiv = document.querySelector('.chat-message');

const socket = io()

//Message from server
socket.on('message', message => {
    console.log(message)
    outputMessage(message);

    //scroll down
    messagesDiv.scrollTop = messagesDiv.scrollHeight;

});

//Message submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    //Get message Text
    const msg = e.target.elements.msg.value;

    //Emit message to server
    socket.emit('chatMessage', msg);

      //clear input
      e.target.elements.msg.value = '';
      e.target.elements.msg.focus();
})

//Output message to DOM
outputMessage = (message) => {
    const div = document.createElement('div')
    div.classList.add('message');
    div.innerHTML = `
    <p class="message-info">${message.username} <span>${message.time}</span></p>
    <p>
        ${message.text}
    </p>
    `
    document.querySelector('.chat-message').appendChild(div)
}