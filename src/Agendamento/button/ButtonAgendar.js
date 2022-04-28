import "./style/styleButton.css";
import showDropdown from "../Agendamento"

function ButtonAgendar() {
  return (
    <div id="containerButtonAgendar">
      <input
        value="Agendar"
        type="submit"
        id="buttonProximo"
        className="buttonAgendar"
        onClick={showDropdown} 
      />
    </div>
  );
}

export default ButtonAgendar;
