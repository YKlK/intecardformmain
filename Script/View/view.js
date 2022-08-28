"use strict"
import {theForm, card_number, card_name, card_month_year,card_CVC,form_input , Reg ,completed,ultimopaso} from "./variables.js"
 import {validarDato , Validar_Datos_formulario_final,retornar} from "../controller/controller.js"



form_input.forEach(every=>{
    every.addEventListener("keyup",validarDato)
})


theForm.addEventListener("submit",Validar_Datos_formulario_final)
completed.addEventListener("click",retornar)