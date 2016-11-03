//Declare the Color Object with our new keyword below here.
const Color = new Object();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[1] <= 255);
  let bluworks = (rgb[2] >= 0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
  var red = (rgb[0])/255;
  return math.round(red*100, -1);
};

//greenIntensity
Color.greenIntensity = function(rgb){
  var green = (rgb[1])/255;
  return math.round(green*100, -1);
};

//blueIntensity
Color.blueIntensity = function(rgb){
  var blue = (rgb[2])/255;
  return math.round(blue*100, -1);
};

//brightness
Color.brightness = function(rgb){
  let bright = rgb[0]+rgb[1]+rgb[2];
  return bright/3;
}


//complement
Color.complement = function(rgb){
  var comp = [];

  for(var i = 0, i<rgb.length, r++){
    var c = 255 - rgb[i];
    comp.push(c);
  }
  return comp;
}

}
