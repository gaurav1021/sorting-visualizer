/*
    *****************
    DONE BY:-   Gaurav Mangal
    
    *****************
*/

function Quick() {
  //Setting Time complexities
  document.getElementById("Time_Worst").innerText = "O(N^2)";
  document.getElementById("Time_Average").innerText = "Θ(N log N)";
  document.getElementById("Time_Best").innerText = "Ω(N log N)";

  //Setting Space complexity
  document.getElementById("Space_Worst").innerText = "O(log N)";

  fetch("../Sorting_Visualizer/scripts/info_qck.html")
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

  quick_sort(0, array_size - 1);

  for (var t = 0; t <= array_size-1; t++) {
    div_update(divs[t], div_sizes[t], "green"); //Color update
  }

  enable_buttons();
}

function quick_partition(start, end) {
  // if(start==end){
  //     div_update(divs[start], div_sizes[start], "green"); //Color update
  //     return start;
  // }
  var i = start + 1;
  var piv = div_sizes[start]; //make the first element as pivot element.
  div_update(divs[start], div_sizes[start], "yellow"); //Color update
  for (var j = start + 1; j <= end; j++) {
    //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
    if (div_sizes[j] < piv) {
      div_update(divs[j], div_sizes[j], "yellow"); //Color update

      div_update(divs[i], div_sizes[i], "red"); //Color update
      div_update(divs[j], div_sizes[j], "red"); //Color update

      var temp = div_sizes[i];
      div_sizes[i] = div_sizes[j];
      div_sizes[j] = temp;

      //   div_update(divs[i], div_sizes[i], "red"); //Height update
      //   div_update(divs[j], div_sizes[j], "red"); //Height update

      div_update(divs[i], div_sizes[i], "blue"); //Height update
      div_update(divs[j], div_sizes[j], "blue"); //Height update

      i += 1;
    }
  }
  div_update(divs[start], div_sizes[start], "red"); //Color update
  div_update(divs[i - 1], div_sizes[i - 1], "red"); //Color update

  var temp = div_sizes[start]; //put the pivot element in its proper place.
  div_sizes[start] = div_sizes[i - 1];
  div_sizes[i - 1] = temp;

  //   div_update(divs[start], div_sizes[start], "red"); //Height update
  //   div_update(divs[i - 1], div_sizes[i - 1], "red"); //Height update
  if (i - 2 == start) {
    div_update(divs[i - 1], div_sizes[i - 1], "green"); //Color update
    div_update(divs[start], div_sizes[start], "green"); //Color update
  } else if (i == end) {
    div_update(divs[i - 1], div_sizes[i - 1], "green"); //Color update
    div_update(divs[end], div_sizes[end], "green"); //Color update
  } else if (
    start == end ||
    start + 1 == end ||
    (start + 2 == end && start + 1 == i - 1) ||
    i - 1 == start ||
    i - 1 == end
  ) {
    for (var t = start; t <= end; t++) {
      div_update(divs[t], div_sizes[t], "green"); //Color update
    }
  } else {
    div_update(divs[i - 1], div_sizes[i - 1], "green"); //Color update
  }
  return i - 1; //return the position of the pivot
}

function quick_sort(start, end) {
  if (start < end) {
    //stores the position of pivot element
    var piv_pos = quick_partition(start, end);
    quick_sort(start, piv_pos - 1); //sorts the left side of pivot.
    quick_sort(piv_pos + 1, end); //sorts the right side of pivot.
  }
}

/*
    *****************
    DONE BY:-   Gaurav Mangal
    
    *****************
*/
