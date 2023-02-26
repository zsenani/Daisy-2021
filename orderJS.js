function sortList(ul) {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById(ul);
  switching = true;
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
     
    // start by saying: no switching is done:
    switching = false;
    b = list.getElementsByTagName("LI");
    // Loop through all list-items:
    for (i = 0; i < (b.length - 1); i++) {
      // start by saying there should be no switching:
      shouldSwitch = false;
      /* check if the next item should
      switch place with the current item: */
     //alert(b[i].getAttribute("order"));
      if (b[i].getAttribute("order").toLowerCase() > b[i + 1].getAttribute("order").toLowerCase()) {
        /* if next item is alphabetically
        lower than current item, mark as a switch
        and break the loop: */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark the switch as done: */
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true; 
      sor = true;        
    }
  }
}