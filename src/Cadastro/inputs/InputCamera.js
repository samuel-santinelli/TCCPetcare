import "../style/Cadastro.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

function InputCamera() {
  return (
    <div id="containerInput">
         <div id="containerBorderImage">
              <img className="imgPreview" alt=""  />
              <input
                type="file"
                name="inputImage"
                className="inputImage"
                accept="image/jpeg, image/jpg, image/png"
                id="foto"
             
              />

              <CameraAltIcon id="iconInputCamera" />
              
            </div>
  </div>
  );
}

export default InputCamera;
