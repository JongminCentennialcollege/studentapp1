import React from 'react';
import StudentForm from './components/StudentForm';


const App = () => {
  const handleStudentFormSubmit = (studentData) => {
    // Handle the form data, e.g., save to state, send to API, etc.
    console.log('Form data submitted:', studentData);
  };

  return (
    <div>
      <h1>Student Application 1</h1>
      <StudentForm onSubmit={handleStudentFormSubmit} />
    </div>
  );
};

export default App;