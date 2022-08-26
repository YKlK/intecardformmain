
 import {Reg , form_input} from "../View/variables.js"

export const validarDato =(event)=>{
   switch(event.target.name){
    case "name":
            
            if(Reg.Name_holder.test(event.target.value)){
                document.getElementById("form_name").classList.remove("exepcion");
                document.getElementById("form_name").classList.add("correcto");
                document.getElementById("name_icon").classList.remove("bi-exclamation-octagon-fill");
                document.getElementById("name_icon").classList.add("bi-check-circle");
                document.getElementById("name_icon").style.color= "blue"
            }
            else{
                document.getElementById("form_name").classList.remove("correcto");
                document.getElementById("form_name").classList.add("exepcion");
                document.getElementById("name_icon").classList.add("bi-exclamation-octagon-fill");
                document.getElementById("name_icon").classList.remove("bi-check-circle");
                document.getElementById("name_icon").style.color= "red"
            }
        break;
    case "number":
        break;
    case "month":
        break;
    case "year":
        break;
    case "CVC":
        break;
    } 
};