import React,{useState} from "react";
import { Label, Select } from "../UI/Styles";
const useSelectMonedas = (label, options) => {

  const [state, setState] = useState('');
  const selectMonedas = () => (
    <>

      <Label htmlFor="">{label}</Label>

      <Select 
      value={state}
      onChange={(e) => setState(e.target.value)}
      
      >

        <option value="">Seleccione</option>
        
        {
        options.map((item) => (
          <option key={item.id} value={item.id}>
            {item.nombre}
          </option>
        ))
        }
      </Select>
    </>
  );

  return [state ,selectMonedas];
};

export default useSelectMonedas;
