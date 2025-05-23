import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './styles/App.css'

const socket = io('http://localhost:3000');

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message received', (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off('message received');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('chat message', message);
      setMessage('');
    }
  };

return (
  <div className="container">
    <h1 className="title">Type your text</h1>
    <input
      className="input"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Type your message"
    />
    <button className="button" onClick={sendMessage}>Send</button>
    <div className="messages">
      {messages.map((msg, i) => (
        <p className="message" key={i}>{msg}</p>
      ))}
    </div>
  </div>
);
}

export default App;
