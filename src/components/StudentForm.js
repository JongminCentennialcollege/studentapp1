import React, { useState } from 'react';

function StudentForm() {
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [studentPhone, setStudentPhone] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'studentName') setStudentName(value);
    if (name === 'studentEmail') setStudentEmail(value);
    if (name === 'studentPhone') setStudentPhone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to an API or handle it within the application
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="studentName" type="text" value={studentName} onChange={handleInputChange} />
      </label>
      <label>
        Email:
        <input name="studentEmail" type="email" value={studentEmail} onChange={handleInputChange} />
      </label>
      <label>
        Phone Number:
        <input name="studentPhone" type="tel" value={studentPhone} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default StudentForm;
