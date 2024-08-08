// const apiKey = 'YOUR_API_KEY'; // Replace with your OpenAI API key
// const apiEndpoint = 'https://api.openai.com/v1/chat/completions';

// document.getElementById('send-button').addEventListener('click', async () => {
//     const userInput = document.getElementById('user-input').value;
//     if (userInput.trim() === '') return;

//     // Display user message
//     displayMessage(userInput, 'user');

//     // Clear the input field
//     document.getElementById('user-input').value = '';

//     // Get bot response from AI
//     const botResponse = await getBotResponse(userInput);
//     displayMessage(botResponse, 'bot');
// });

// function displayMessage(message, sender) {
//     const chatBox = document.getElementById('chat-box');
//     const messageDiv = document.createElement('div');
//     messageDiv.className = `message ${sender}-message`;
//     messageDiv.textContent = message;
//     chatBox.appendChild(messageDiv);
//     chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
// }

// async function getBotResponse(userInput) {
//     try {
//         const response = await fetch(apiEndpoint, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${apiKey}`
//             },
//             body: JSON.stringify({
//                 model: 'gpt-3.5-turbo', // Specify the model, e.g., 'gpt-3.5-turbo' or 'gpt-4'
//                 messages: [{ role: 'user', content: userInput }]
//             })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         const botMessage = data.choices[0].message.content;
//         return botMessage;

//     } catch (error) {
//         console.error('Error fetching AI response:', error);
//         return 'Sorry, I am having trouble processing your request.';
//     }
// }

document.getElementById('send-button').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    // Display user message
    displayMessage(userInput, 'user');

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Generate bot response
    const botResponse = getBotResponse(userInput);
    displayMessage(botResponse, 'bot');
});

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = message;
    messageDiv.style.backgroundColor = 'transparent';
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userInput) {
    // Simple bot responses based on user input
    const responses = {
        hello: 'Hello! How can I assist you today?',
        how: 'I am here to help you with any questions you might have.',
        what: 'I am a chatbot. I can provide information and assist with basic queries.',
        default: 'Sorry, I do not understand that. Can you please rephrase?'
    };

    const inputLowerCase = userInput.toLowerCase();
    return responses[inputLowerCase] || responses['default'];
}
