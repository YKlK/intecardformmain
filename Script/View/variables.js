"use strict"


//card-container-front
export let card_number = document.getElementById("number");
export let card_name = document.getElementById("name");
export let card_month_year = document.getElementById("month");
//card-container-back
export let card_CVC = document.getElementById("CVC");

//form
export let theForm = document.getElementById("form");
export let form_input = document.querySelectorAll("#form input")
export let send = document.getElementById("send");

//complete
export let completed = document.getElementById("Completed")

//REGEXP

export const Reg={
    Name_holder : /^[a-zA-Z\s]+$/,
    Number : /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/,
    Month : /^([1-9]|1[0-2])$/,
    Year : /\b(19[89][0-9]|20[0-4][0-9]|2050)\b/,
    CVC : /\d\d\d?/
}

export const form_validados={
    name: false,
    number: false,
    month: false,
    year: false,
    CVC: false
}