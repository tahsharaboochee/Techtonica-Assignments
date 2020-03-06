import React from 'react'


function Messages({messages}) {
  //<Messages/>
  if (messages.length === 0) {
    return (
      <div>No posts found</div>
    );
  }
  return (
    <div>
    <h2>Posts:</h2>
    <ul>
      {messages.sort((a, b) => b.date - a.date).map(message => (
        <li key={message.key}>{message.text} - {message.user} - {message.key}</li>
      ))}
    </ul>
    </div>
  );
}

export default Messages