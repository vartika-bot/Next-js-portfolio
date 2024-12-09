import React, { useState, useEffect } from "react";

const ForumPage = () => {
  const [threads, setThreads] = useState([]);
  const [newThread, setNewThread] = useState("");
  const [search, setSearch] = useState("");
  const filteredThreads = threads.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );
  
  
  useEffect(() => {
    const fetchThreads = async () => {
      const res = await fetch("/threads");
      const data = await res.json();
      setThreads(data);
    };
    fetchThreads();
  }, []);

  const handleCreateThread = async () => {
    await fetch("/threads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newThread }),
    });
    setNewThread("");
    const res = await fetch("/threads");
    setThreads(await res.json());
  };

  return (
    <div>
      <h1>Discussion Forum</h1>
      <input value={newThread} onChange={(e) => setNewThread(e.target.value)} placeholder="Create a new thread" />
      <button onClick={handleCreateThread}>Post</button>
      <ul>
        {threads.map((thread, i) => (
          <li key={i}>{thread.title}</li>
        ))}
      </ul>
    </div>
  );
};




export default ForumPage;