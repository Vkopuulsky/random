var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
     var thisNumber = Math.random()
     if(thisNumber < 0.11){
         makeImage("https://cdn.shopify.com/s/files/1/1061/1924/files/Very_Angry_Emoji.png?9898922749706957214", 53, 3.5, 94, 93, "1.0")
         makeText("Angry!", 75, 35, 20, "sansita", "blue", "1.0")//mad
     } else if(thisNumber < 0.22){
         makeImage("https://cdn.shopify.com/s/files/1/1061/1924/files/Very_Mad_Emoji.png?9898922749706957214", 53, 3.5, 94, 93, "1.0")//fuming
     } else {
         makeImage("http://images.distractify.com/v0.2/body/2015/10/high-7.jpg", 53, 3.5, 94, 93, "1.0")//deadly
     }
     }

// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {  
        var thyNumber = Math.random()
        if(thyNumber < 0.45){
            makeCircle(100, 50, 45, "blue", "1.0")
    makeCircle(118, 35, 8, "1.0")
    makeCircle(83, 35, 8, "1.0")
    makeEllipse(100, 65, 30, 10, "white", "1.0")
    makeRect(70, 70, 60, 10, "blue", "1.0")
    makeText("Sad!", 82, 25, 20, "sansita", "purple", "1.0")//sad
        } else if(thyNumber < 0.56){
            makeImage("http://i1.mirror.co.uk/incoming/article5090721.ece/ALTERNATES/s615b/Paula-Cochrane.jpg", 53, 3.5, 94, 93, "1.0")// miserable
        } else {
        makeImage("https://duqwellbeing.files.wordpress.com/2015/10/emoji-overwhelmed.png", 53, 3.5, 94, 93, "1.0")//overwhelmed
        }
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
        var mineNumber = Math.random()
        if(mineNumber < 0.75){
    makeCircle(100, 50, 45, "yellow", "1.0")
    makeCircle(118, 35, 8, "1.0")
    makeCircle(83, 35, 8, "1.0")
    makeEllipse(100, 65, 30, 15, "white", "1.0")
    makeRect(70, 40, 60, 20, "yellow", "1.0")
    makeText("Happy!", 75, 55, 20, "sansita", "green", "1.0")//happy
        } else if(mineNumber < 0.85){
            makeImage("https://rlv.zcache.com/face_with_tears_of_joy_emoji_classic_round_sticker-r8efa1045719143db81c284357ea6ef17_v9waf_8byvr_630.jpg?view_padding=%5B285%2C0%2C285%2C0%5D", 53, 3.5, 94, 93, "1.0")//joyful
        } else {
            makeImage("http://pix.iemoji.com/images/emoji/apple/ios-9/256/relieved-face.png", 53, 3.5, 94, 93, "1.0")//content
        }
}


// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var myNumber = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if(myNumber < 0.33){
        createFirstScene()
    }
    // Else, if the number is less than 0.67, call the function to create your second scene.
    else if(myNumber < 0.67){
    createSecondScene()
    }
    // Else, call the function to create your third scene.
    else{
    createThirdScene()
    }
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}