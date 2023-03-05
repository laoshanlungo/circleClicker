import "./styles.css";
import {useState} from 'react';
import Cookie from './img/cookie.jpg'



export default function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [authentified, setAuthentified] = useState(false);
  const [upgradeValue, setUpgradeValue] = useState(1)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const delay = ms => new Promise(res => setTimeout(res, ms));


function logout(){
  setAuthentified(false)
  setName('')
  setUpgradeValue(1)
  setCounter(0);
}

async function handleCookieClick(){
  setCounter(counter+upgradeValue)
  if(counter===10){
    setButtonDisabled(false)
    await delay(10000);
    setButtonDisabled(true)
    setUpgradeValue(1)
  }
}



if(authentified){ 
  return (
    <div className="App">
      <h1>{name}`s CookieClicker</h1>
      <h2>Einfach auf den Cookie rauf</h2>
      <h3>Anzahl Cookie Klicks {counter}</h3>
      <br />
      <img className="cookie" src={Cookie} onClick={() => handleCookieClick()}/> 
      <br />
      <h4> Klick den Cookie </h4>
      <br />
      <button disabled={buttonDisabled} onClick={() => setUpgradeValue(
              upgradeValue === 1 ? upgradeValue + 4 : upgradeValue + 5
            )}> Upgrade Cookie </button>
      <button onClick={() => logout()}> Log Out </button>
    </div>
  );
}

  return (
    <div className="App">
      <h1>Logge dich erst ein</h1>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={() => setAuthentified(true)}> Log In </button>
    </div>
  )


 



}