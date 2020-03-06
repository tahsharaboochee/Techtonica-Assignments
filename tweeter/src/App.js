import React, {useState} from 'react';
import {Messages, Message} from '../src/components/Messages';
import RemainingCharacters from '../src/components/RemainingCharacters';

const users = {
  Tahshara: 'Tahshara',
  Lisa: 'Lisa',
  Zarina: 'Zarina',
  Amy: 'Amy',
  Gloria: 'Gloria',
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
