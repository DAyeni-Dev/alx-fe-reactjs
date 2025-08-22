import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "../components/formikForm"; 
import "./App.css";

function App() {
  return (
    <div>
      <h1>User Registration</h1>
      <RegistrationForm />

      <h1>User Registration (Formik)</h1>
      <formikForm />
    </div>
  );
}

export default App;
