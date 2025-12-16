import { useState } from "react"

function App() {
  let [email, setEmail] = useState();
  let [name,setName] = useState();
  function newContact() {
    let contact = {
      email,
      name
    };
    // send to REDUX
  }

  function clearContacts() {
    //
  }
  return (
   <div>
      Email : <input type="email" onChange={(evt) => setEmail(evt.target.value)}/> <br />
      Name: <input type="text" onChange={(evt) => setName(evt.target.value)}/> <br />
      <button type="button" onClick={newContact}> Add Contact</button>
      <button type="button"  onClick={clearContacts}>Clear Contacts</button>
   </div>
  )
}

export default App
