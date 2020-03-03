import React, {useState} from 'react';
const users = {
  Tahshara: 'Tahshara',
  Lisa: 'Lisa',
  Zarina: 'Zarina',
  Amy: 'Amy',
  Gloria: 'Gloria',
}
class Message {
  constructor(text, user) {
    let date = new Date()
    this.key = date.toString()
    this.text = text
    this.user = user
    this.date = date
  }
}
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
function RemainingCharacters({charCount}) {
  let maxChars = 100;
  let remainingChars = maxChars - charCount;
  if (remainingChars <= 0) {
    return (<p style={{color: "red"}}>Characters left: {remainingChars}</p>);
  }
  return (<p>Characters left: {remainingChars}</p>);
}
function App() {
  const [user, setUser] = useState(users.User1);
  const [newPost, setNewPost] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [items, setItems] = useState([]);

  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s'>
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              setItems([...items, new Message(newPost, user)]);
              setNewPost("");
              setCharCount(0);

            }}
          >
          <select value={user} onChange={e => setUser(e.target.value)}>
            {Object.entries(users).map(([name, value]) => (
            <option value={value} key={name}>{name}</option>
            ))}
          </select>
            <label>
              New Post:
              <input
                type="text"
                name="name"
                value={newPost}
                onChange={e => {
                  setNewPost(e.target.value);
                  setCharCount(e.target.value.length);
                  }
                }
              />
            </label>
            <input type="submit" />
          <RemainingCharacters charCount={charCount} />
          </form>
          <Messages messages={items}/>
        </div>
  </div>
  );
}

export default App;
