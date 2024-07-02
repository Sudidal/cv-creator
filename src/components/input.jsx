function Input({title, type="text", onChange = () => console.log("shit")}) {
  return (
    <div className="input-box">
      <label htmlFor={title + "-input"}>{title}:{" "}</label>
      <input 
        type={type}
        id={title + "-input"}
        onChange={(e) => {
          onChange(title, e.target.value)
        }}
        />
    </div>
  )
}


export default Input