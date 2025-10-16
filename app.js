// Array to store messages
var messages = [];

// Constructor function for messages
function Message(text, sender) {
  this.text = text;
  this.sender = sender;
}

// DOM elements
var chatBox = document.getElementById("chatBox");
var sendBtn = document.getElementById("sendBtn");
var messageInput = document.getElementById("messageInput");

// Add event listener to button
sendBtn.addEventListener("click", sendMessage);

// Function to send message
function sendMessage() {
  try {
    var text = messageInput.value.trim();

    // Validate message
    if (text === "") {
      throw "Message cannot be empty!";
    }

    // Create message object
    var userMsg = new Message(text, "User");
    messages.push(userMsg);

    // Display user message
    appendMessage(userMsg);

    // Clear input
    messageInput.value = "";

    // Simulate bot reply after 1.5 seconds
    setTimeout(autoReply, 1500);
  } 
  catch (error) {
    alert("Error: " + error);
  }
}

// Function to append message to chat box
function appendMessage(msg) {
  var messageDiv = document.createElement("div");
  messageDiv.classList.add("message");

  // Add different class based on sender
  if (msg.sender === "User") {
    messageDiv.classList.add("user");
  } else {
    messageDiv.classList.add("bot");
  }

  messageDiv.textContent = msg.sender + ": " + msg.text;
  chatBox.appendChild(messageDiv);

  // Scroll to bottom
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to simulate bot reply
function autoReply() {
  // Simple auto responses
  var replies = [
    "That's interesting!",
    "I see!",
    "Can you tell me more?",
    "Nice one!",
    "Haha, good point!"
  ];

  var randomIndex = Math.floor(Math.random() * replies.length);
  var replyText = replies[randomIndex];

  var botMsg = new Message(replyText, "Bot");
  messages.push(botMsg);

  appendMessage(botMsg);
}
