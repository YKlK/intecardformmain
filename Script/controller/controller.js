
 import {Reg , form_input} from "../View/variables.js"

//esta funcion le paso uno de los valores de reg y el nombre del input
export function receptor_Reg_value(val,form){
    document.getElementById(`${form}_icon`).classList.remove("bi-circle");
            if(val.test(event.target.value)){
                document.getElementById(`form_${form}`).classList.remove("exepcion");
                document.getElementById(`form_${form}`).classList.add("correcto");
                document.getElementById(`${form}_icon`).classList.remove("bi-exclamation-octagon-fill");
                document.getElementById(`${form}_icon`).classList.add("bi-check-circle");
                document.getElementById(`${form}_icon`).style.color= "blue"
            }
            else{
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
        // document.getElementById("name_icon").classList.remove("bi-circle");
        //     if(Reg.Name_holder.test(event.target.value)){
        //         document.getElementById("form_name").classList.remove("exepcion");
        //         document.getElementById("form_name").classList.add("correcto");
        //         document.getElementById("name_icon").classList.remove("bi-exclamation-octagon-fill");
        //         document.getElementById("name_icon").classList.add("bi-check-circle");
        //         document.getElementById("name_icon").style.color= "blue"
        //     }
        //     else{
        //         document.getElementById("form_name").classList.remove("correcto");
        //         document.getElementById("form_name").classList.add("exepcion");
        //         document.getElementById("name_icon").classList.add("bi-exclamation-octagon-fill");
        //         document.getElementById("name_icon").classList.remove("bi-check-circle");
        //         document.getElementById("name_icon").style.color= "red"
        //     }
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