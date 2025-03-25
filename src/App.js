import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

function App() {
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name) return;
    await addDoc(collection(db, "guestbook"), { name });
    setName('');
    fetchMessages();
  };

  const fetchMessages = async () => {
    const snapshot = await getDocs(collection(db, "guestbook"));
    setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div style={{ 
      padding: "2rem",
      backgroundColor: "#e8f5e9",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{ maxWidth: "600px", width: "100%" }}>
        <h1>📖 Guestbook</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button type="submit">Sign</button>
        </form>
        <ul>
          {messages.map(msg => (
            <li key={msg.id}>{msg.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
