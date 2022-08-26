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

//REGEXP

export const Reg={
    Name_holder : /^[a-zA-Z\s]+$/,
    Number : "/^([0-9]{4}\s){4}/",
    Month : "/\d{2}/",
    Year : "/\d{4}/",
    CVC : "/\d{3}/"
}