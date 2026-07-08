/*
    *****************
    DONE BY:-   Gaurav Mangal
    
    *****************
*/

/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;
*/

// Shared bar palette. The sort scripts pass the color *names* below
// ("blue" = idle, "yellow" = comparing, "red" = active/swap, "green" = sorted);
// bar_bg() maps each name to a nice gradient so the algorithms stay untouched.
var BAR_COLORS = {
  blue: "linear-gradient(180deg, #a5b4fc 0%, #4f46e5 100%)",
  yellow: "linear-gradient(180deg, #fcd34d 0%, #f59e0b 100%)",
  red: "linear-gradient(180deg, #fb7185 0%, #f43f5e 100%)",
  green: "linear-gradient(180deg, #4ade80 0%, #16a34a 100%)",
};
function bar_bg(color) {
  return BAR_COLORS[color] || color;
}

//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as = document.getElementById("a_size"),
  array_size = inp_as.value;
//   console.log(inp_as);
//   console.log(array_size);
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");
// console.log(inp_aspeed);
//var array_speed=document.getElementById('a_speed').value;

var butts_algos = document.querySelectorAll(".algos button");

var div_sizes = [];
var divs = [];
var margin_size;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
  cont.innerHTML = "";

  for (var i = 0; i < array_size; i++) {
    div_sizes[i] =
      Math.floor(Math.random() * 0.5 * (inp_as.max - inp_as.min)) + 10;
    divs[i] = document.createElement("div");
    divs[i].className = "bar";
    cont.appendChild(divs[i]);
    margin_size = 0.1;
    divs[i].style =
      "margin:0 " +
      margin_size +
      "%; background:" +
      bar_bg("blue") +
      "; width:" +
      (100 / array_size - 2 * margin_size) +
      "%; height:" +
      div_sizes[i] +
      "%;";
  }
}

function update_array_size() {
  array_size = inp_as.value;
  generate_array();
}

window.onload = update_array_size();

//Running the appropriate algorithm.
for (var i = 0; i < butts_algos.length; i++) {
  butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
  for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].classList = [];
    butts_algos[i].classList.add("butt_locked");

    butts_algos[i].disabled = true;
    inp_as.disabled = true;
    inp_gen.disabled = true;
    inp_aspeed.disabled = true;
  }
}

function runalgo() {
  disable_buttons();

  this.classList.add("butt_selected");
  switch (this.innerHTML) {
    case "Bubble":
      Bubble();
      break;
    case "Selection":
      Selection_sort();
      break;
    case "Insertion":
      Insertion();
      break;
    case "Merge":
      Merge();
      break;
    case "Quick":
      Quick();
      break;
    case "Heap":
      Heap();
      break;
  }
}

// Reflect the current slider values in the UI labels (purely cosmetic).
var lbl_size = document.getElementById("size_val");
var lbl_speed = document.getElementById("speed_val");
function refresh_labels() {
  if (lbl_size) lbl_size.textContent = inp_as.value;
  if (lbl_speed) lbl_speed.textContent = "×" + inp_aspeed.value;
}
inp_as.addEventListener("input", refresh_labels);
inp_aspeed.addEventListener("input", refresh_labels);
refresh_labels();

/*
    *****************
    DONE BY:-   Gaurav Mangal

    *****************
*/
