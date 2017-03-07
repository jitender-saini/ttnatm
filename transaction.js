$(document).ready(function(){
  var i=0;
  $("#add_row").click(function(){
    $('#addr'+i).html("<td>"+ (i+1) +"</td><td> 1231</td><td>142525</td><td>635645</td><td>6767</td><td>0909</td>");

    $('#tab_logic').append('<tr id="addr'+(i+1)+'"></tr>');
    i++;
  });
  $("#delete_row").click(function(){
    if(i> 1){
      $("#addr"+(i-1)).html('');
      i--;
    }
  });

});
