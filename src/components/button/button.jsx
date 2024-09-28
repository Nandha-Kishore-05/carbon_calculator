import "./button.css";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      className="custom-button"
      style={{
        width: props.width ? props.width : "100%",
        marginTop: props.marginTop,
        backgroundColor : props.backgroundColor
      }}
    >
      {props.label}
    </button>
  );
}

export default Button;
