var boxes = prompt('how many boxes?', '8')




function creategrid() {

  
    for (i = 0; i < (boxes * boxes); i++) {




      $('#container').append("<div class='grid'></div>");
      $('.grid').height(1080/8);
      $('.grid').width(1080/8);



    }
  }



function newGrid() {

  $('.newgrid').click(function() {

    $('.grid').remove();
    creategrid();
    highlight();

  });



}

function highlight() {

  $('.grid').mouseover(function() {

    $(this).css('background-color', 'blue');

  })

}

$(document).ready(function() {

  

  creategrid();

  highlight();

  newGrid();




});