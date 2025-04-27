const EventMitter = require("events");
const MyEmitter = new EventMitter();

function sendMessage(user, message, emitter) {
  emitter.emit("message", { user, message });
}

MyEmitter.on("message", (data) => {
  console.log(`${data.user}: ${data.message}`);
});

sendMessage("Alice", "Hello, everyone!", MyEmitter);
sendMessage("Bob", "Hi Alice!", MyEmitter);
sendMessage("Charlie", "Good morning!", MyEmitter);
