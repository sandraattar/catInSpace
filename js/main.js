//create 4 buttons that move the picture
//left=37
//up=38
//right=39
//down=40

$(document).ready(function (){

  var catjquery = $('#kitten');

  var move = 50; //the amount of pixels the cat will move
  //viewport object
  var viewPort = {
  //property: value
  top: $(window).scrollTop(),
  bottom: $(window).scrollTop() + $(window).height(),
  left: $(window).scrollLeft(),
  right: $(window).scrollLeft() + $(window).width()
  }

  //movement function uses animate method in jquery to move the pic in different directions
  function movement (e){
    console.log(viewPort.top > catjquery.offset().top)
    e.preventDefault();
    if(e.keyCode == 39){

      //by adding a positive number to 'left' the pic will move to the right
      catjquery.animate({'left': '+='+move})
    }

    else if(e.keyCode == 37){
      //by adding a negative number to 'left' the pic will move to the left
      catjquery.animate({'left':'-='+move})
    }
    else if(e.keyCode == 40){
      //by adding a positive number to 'top' the pic will move down
      catjquery.animate({'top':'+='+move})
    }
    //check if the keyCode is equal to 38/top arrow key
    //and check if the window viewPort top is greater than the cat top
    else if(e.keyCode == 38 && viewPort.top < catjquery.offset().top){
      //by adding a negative number to 'top' the pic will move up
      catjquery.animate({'top':'-='+move})
    }
    // a keyevent that resets the cat position (top and left) to 0 when the user presses something like 'R'
    else if (e.keyCode == 82){
      catjquery.animate ({'left': 0})
      catjquery.animate ({'top': 0})
    }
  };

  $(document).on('keydown', function(kevent){
    movement (kevent);
  });


});
