import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [ticked, setTicked] = useState(0);
  const [list, setList] = useState([]);
  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let value = { text: userInput, checked: false };
    setList((list) => [...list, value]);
    setUserInput('');
  };

  const handleItem = (receivedId) => {
    let count = 0;
    list.map((item, id) => {
      if (id === receivedId) {
        item.checked = !item.checked;
      }
      if (item.checked) count++;
      return item;
    });
    setTicked((ticked) => count);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={userInput}
          placeholder="Enter task..."
        />
        <button>Add</button>
      </form>
      {list.length > 0 ? (
        <p>
          {ticked} out of {list.length} Completed
        </p>
      ) : (
        ''
      )}
      <ul>
        {list.map((item, id) => (
          <li
            className={item.checked ? 'is-done' : ''}
            onClick={() => {
              handleItem(id);
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}
