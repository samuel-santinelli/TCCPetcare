import "../style/Cadastro.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function InputCamera() {
  return (
    <div id="containerInput">
        <div id="containerBorderImage">
    <input type="file" name="inputImage" className="inputImage" id="foto" />
    <CameraAltIcon id="iconInputCamera" />
    </div>
  </div>
  );
}

export default InputCamera;
