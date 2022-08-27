"use strict"
import {theForm, card_number, card_name, card_month_year,card_CVC,form_input ,send, Reg} from "./variables.js"
 import {validarDato} from "../controller/controller.js"

// theForm.addEventListener("submit" , )




form_input.forEach(every=>{
    every.addEventListener("keyup",validarDato
    )
    every.addEventListener("blur",()=>{
    //     console.log("si")
    //    form_input[0].value.test(Reg.Name_holder)
    })
})


// theForm.addEventListener("submit",)