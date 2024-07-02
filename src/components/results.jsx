import { printPage } from "../printResult";

function Results({ values }) {
  const photoPlaceHolderUrl = "/Placeholder_view_vector.svg";
  let img = photoPlaceHolderUrl;

  values.forEach((val) => {
    if (val.title === "Photo") {
      img = val.value;
    }
  });

  return (
    <div className="results-box printable block">
      <h4>General Information</h4>
      <img src={img} alt="" width="100px" />
      <Result values={values} title={"Name"}></Result>
      <Result values={values} title={"E-Mail"}></Result>
      <Result values={values} title={"Phone number"}></Result>
      <h4>Educational Experience</h4>
      <Result values={values} title={"School"}></Result>
      <Result values={values} title={"Study"}></Result>
      <Result values={values} title={"Date of study"}></Result>
      <h4>Practical Experience</h4>
      <Result values={values} title={"Company name"}></Result>
      <Result values={values} title={"Position title"}></Result>
      <Result values={values} title={"Main responsibilities"}></Result>
      <Result values={values} title={"Worked from"}></Result>
      <Result values={values} title={"Worked until"}></Result>
      <button
        className="download-btn not-printable"
        onClick={() => {
          // const name = values.forEach(val => {return val.title === "Name"? val.title : ""})
          printPage();
        }}
      >
        Download
      </button>
    </div>
  );
}

function Result({ title, values }) {
  return (
    <p>
      {title + ": "}
      {values.map((item) => {
        return item.title === title ? item.value : "";
      })}
    </p>
  );
}

export default Results;
