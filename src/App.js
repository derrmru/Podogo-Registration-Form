import React, {useState} from 'react';
import Personal from './Personal';
import Medical from './Medical';
import Submit from './Submit';
import Complete from './Complete';

function App() {
  const [stage, setStage] = useState("personal");
  const [fields, setFields] = useState({//initial Fields variable state:
    title: "",
    firstName: "",
    lastName: "",
    dob: "",
    addressName: "",
    tel: "",
    email: "",
    GPName: "",
    insurer: "",
    auth: "",
    membership: ""
  })

  //update the global variable, Fields, accessible to components via props
  let updateFields = (d) => {
    setFields(d);
  }

  //Rerender function for each stage of the form, accessible to components 'back' and 'next' buttons via props
  let reRender = (e) => {
    setStage(e)
  }

  return (
    stage === "personal" ? 
      <Personal reRender={reRender} fields={fields} updateFields={updateFields} /> : stage === "medical" ? 
      <Medical reRender={reRender} fields={fields} updateFields={updateFields} /> : stage === "submit" ?
      <Submit reRender={reRender} fields={fields} updateFields={updateFields} /> : <Complete />
  )
}

export default App;
