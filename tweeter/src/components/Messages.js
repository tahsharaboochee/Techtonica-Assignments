import React from 'react'

export class Message {
  constructor(text, user) {
    let date = new Date()
    this.key = date.toString()
    this.text = text
    this.user = user
    this.date = date
  }
}

export function Messages({messages}) {
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
      {messages.sort((a, b) => b.date - a.date).map((message, i) => (
        <li key="{i}">{message.text} - {message.user} - {message.key}</li>
      ))} 
    </ul>
    </div>
  );
}

// export default Messages