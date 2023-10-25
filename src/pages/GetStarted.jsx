import React, { useState } from 'react'; 
import axios from 'axios';

function GetStarted() {
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientNote, setClientNote] = useState(''); // Fixed typo in variable name

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://172.16.0.6:3000/addClient', { 
      clientName: clientName, 
      clientEmail: clientEmail, // Fixed typo in key
      clientNote: clientNote   // Fixed typo in key
    })
      .then(response => {
        console.log('Your information has been added successfully:', response.data);
        setClientName(''); // Resetting the input fields
        setClientEmail('');
        setClientNote('');
      })
      .catch(error => console.error('Error adding client:', error));
  }

  return (
    <div>
      <h2>Get Started:</h2>
        <h3>Contact US!</h3>
        <p>Ready to unlock the full potential of your land development projects? Contact us today for a consultation and take the first step towards turning your vision into reality.</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={clientName} 
          onChange={(e) => setClientName(e.target.value)} 
          placeholder="Name" 
        /> <br />
        <input 
          type="email" 
          value={clientEmail} 
          onChange={(e) => setClientEmail(e.target.value)} 
          placeholder="Email" 
        /> <br />
        <input 
          type="text" 
          value={clientNote} 
          onChange={(e) => setClientNote(e.target.value)} 
          placeholder="Note" 
        /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GetStarted;
