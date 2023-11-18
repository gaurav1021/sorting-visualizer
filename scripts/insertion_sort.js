/*
    *****************
    DONE BY:-   Gaurav Mangal
    
    *****************
*/

function Insertion() {
  //Setting Time complexities
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N^2)";
  document.getElementById("Time_Best").innerText = "Ω(N)";

  //Setting Space complexity
  document.getElementById("Space_Worst").innerText = "O(1)";

  fetch("../sorting-visualizer/scripts/info_inst.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      // Insert the fetched HTML content into the specified div
      document.getElementById("cinfo").innerHTML = data;
    });

  c_delay = 0;

  for (var j = 0; j < array_size; j++) {
    div_update(divs[j], div_sizes[j], "yellow"); //Color update

    var key = div_sizes[j];
    var i = j - 1;
    var fg = true;
    while (i >= 0 && fg == true) {
      div_update(divs[i], div_sizes[i], "yellow"); //Color update
      div_update(divs[i + 1], div_sizes[i + 1], "yellow"); //Color update
      if (div_sizes[i] > key) {
        div_update(divs[i], div_sizes[i], "red"); //Color update
        div_update(divs[i + 1], div_sizes[i + 1], "red"); //Color update
        var temp = div_sizes[i + 1];
        div_sizes[i + 1] = div_sizes[i];
        div_sizes[i] = temp;
        div_update(divs[i], div_sizes[i], "blue");
        div_update(divs[i + 1], div_sizes[i + 1], "blue");
        i -= 1;
      } else {
        div_update(divs[i], div_sizes[i], "blue"); //Color update
        div_update(divs[i + 1], div_sizes[i + 1], "blue"); //Color update
        fg = false;
      }
    }
    div_sizes[i + 1] = key;
  }

  for (var t = 0; t < j; t++) {
    div_update(divs[t], div_sizes[t], "green"); //Color update
  }
  div_update(divs[j - 1], div_sizes[j - 1], "green"); //Color update

  enable_buttons();
}

/*
    *****************
    DONE BY:-   Gaurav Mangal
    
    *****************
*/
