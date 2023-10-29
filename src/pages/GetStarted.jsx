import React, { useState } from 'react';

function YourFormComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    note: '', // Added 'note' field
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://terra-server.clemeons.workers.dev/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log('Form submitted successfully!');
      // Handle success, e.g., show a success message
    } else {
      console.error('Error submitting form:', response.status);
      // Handle error, e.g., show an error message
    }
  };

  return (
    <div>      <h2>Get Started:</h2>
    <h3>Contact US!</h3>
    <p>Ready to unlock the full potential of your land development projects? Contact us today for a consultation and take the first step towards turning your vision into reality.</p>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        /><br/>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        /><div><br/><textarea
        name="note"
        value={formData.note}
        onChange={handleInputChange}
        placeholder="Your Note"
        rows="4" // Adjust the number of rows as needed
      /></div>
        <div>
          <button type="submit">Submit</button></div>
        
      </form>
    </div>
  );
}

export default YourFormComponent;
