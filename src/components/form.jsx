import Input from "./input";
import FileInput from "./fileInput";

function Form({onChange}) {
  function chnangeValue(title, value) {
    onChange(title, value)
  }

  return (
    <>
      <form className="cv-form block">
        <div className="sec">
          <legend>General Information</legend>
          <div className="input-group">
            <FileInput title={"Photo"} accept="image/*" onChange={chnangeValue} />
            <Input title={"Name"} onChange={chnangeValue} />
            <Input title={"E-Mail"} type={"email"} onChange={chnangeValue} />
            <Input title={"Phone number"} type={"tel"} onChange={chnangeValue} />
          </div>
        </div>
        <div className="sec">
          <legend>Educational Experience</legend>
          <div className="input-group">
            <Input title={"School"} onChange={chnangeValue} />
            <Input title={"Study"} onChange={chnangeValue} />
            <Input title={"Date of study"} type="date" onChange={chnangeValue} />
          </div> 
        </div>
        <div className="sec">
          <legend>Practical Experience</legend>
          <div className="input-group">
            <Input title={"Company name"} onChange={chnangeValue} />
            <Input title={"Position title"} onChange={chnangeValue} />
            <Input title={"Main responsibilities"} onChange={chnangeValue} />
            <Input title={"Worked from"} type="date" onChange={chnangeValue} />
            <Input title={"Worked until"} type="date" onChange={chnangeValue} />
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
