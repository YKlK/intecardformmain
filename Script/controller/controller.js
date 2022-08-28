
 import {Reg , form_input ,form_validados , card_number , card_name , card_month_year , card_CVC} from "../View/variables.js"

//esta funcion le paso uno de los valores de reg y el nombre del input
export function receptor_Reg_value(val,form){
    document.getElementById(`${form}_icon`).classList.remove("bi-circle");
            if(val.test(event.target.value)){
                form_validados[form]=true;
                document.getElementById(`form_${form}`).classList.remove("exepcion");
                document.getElementById(`form_${form}`).classList.add("correcto");
                document.getElementById(`${form}_icon`).classList.remove("bi-exclamation-octagon-fill");
                document.getElementById(`${form}_icon`).classList.add("bi-check-circle");
                document.getElementById(`${form}_icon`).style.color= "blue"
            }
            else{
                form_validados[form]=false;
                document.getElementById(`form_${form}`).classList.remove("correcto");
                document.getElementById(`form_${form}`).classList.add("exepcion");
                document.getElementById(`${form}_icon`).classList.add("bi-exclamation-octagon-fill");
                document.getElementById(`${form}_icon`).classList.remove("bi-check-circle");
                document.getElementById(`${form}_icon`).style.color= "red"
            }
}

export const validarDato =(event)=>{
   switch(event.target.name){
    case "name":
        receptor_Reg_value(Reg.Name_holder,"name")
        
        break;
    case "number":
        receptor_Reg_value(Reg.Number,"number")
        
        break;
    case "month":
        receptor_Reg_value(Reg.Month,"month")

        break;
    case "year":
        receptor_Reg_value(Reg.Year,"year")

        break;
    case "CVC":
        receptor_Reg_value(Reg.CVC,"CVC")
        break;
    } 
};

export const Validar_Datos_formulario_final=(event)=>{
    event.preventDefault();
    if (form_validados.name && form_validados.number && form_validados.month && form_validados.year && form_validados.CVC ){

        

        card_number.textContent = form_input[1].value;
        card_name.textContent = form_input[0].value;
        card_month_year.textContent = `${form_input[2].value}/${form_input[3].value}`;
        card_CVC.textContent = form_input[4].value;


        
    }
    else{
        alert("formulario incompleto");
    }
    

}

