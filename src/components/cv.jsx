import { useState } from "react";
import Form from "./form";
import Results from "./results";

function CV() {
  const [values, setValues] = useState([])

  function chnangeValue(title, value) {
    let newArr = values.filter(item => item.title !== title);
    newArr.push({title: title, value: value})
    setValues(newArr);
  }

  return (
    <div className="container">
      <Form onChange={chnangeValue}></Form>
      <Results values={values}></Results>
    </div>
  )
}

export default CV