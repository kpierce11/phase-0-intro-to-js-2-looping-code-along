const writeCards = (names,event) => {
    const messages = []
    for(let i = 0; i < names.length;i++) {
        
           const greetingMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
           messages.push(greetingMessage)
          
    }
    return messages

}

function countDown() {
    for (let i = 10; i >= 0; i--) {
      console.log(i);
    }
  }