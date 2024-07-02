function FileInput({ title, accept = "", onChange }) {
  return (
    <div className="input-box">
      <label htmlFor={title + "-input"}>{title}: </label>
      <input
        type="file"
        accept={accept}
        id={title + "-input"}
        onChange={(changeE) => {
          const reader = new FileReader();
          reader.readAsDataURL(changeE.target.files[0]);
          reader.onload = (loadE) => {
            console.log("got the image");
            onChange(title, loadE.target.result);
          };
        }}
      />
    </div>
  );
}

export default FileInput;
