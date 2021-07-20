import { useState } from 'react';
import './App.css';

const App = () => {
  const [isPal, setIsPal] = useState(false);

  const changeTrigger = (evt) => {
    console.log(isPalindrome(evt.target.value))
  }

  const isPalindrome = (str) => {
    let string = str.toLowerCase();
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let newStr = "";
    for (let i = 0; i < string.length; i++) {
      if (alphabet.indexOf(string[i]) > -1) {
        newStr += string[i];
      }
    }

    let revStr = newStr.split("").reverse().join("");
    return setIsPal(revStr === newStr);
  }

  return (
    <div className="App">
     <h1>Is this a palindrome?</h1>
     <input type='text' name='palindrome' onChange={changeTrigger} />
     <h2>{
       isPal ? 'True' : 'False'
       }</h2>
    </div>
  );
}

export default App;
