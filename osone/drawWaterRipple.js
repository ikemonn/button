//makeRandomCircle();
var alpha = 1.0;
var cnt = 0;
var rippleArray = new Array();

var canvas = document.getElementById("cvs").getContext("2d");


function addRipple(_x, _y) {
    var obj = new Object();
    obj.x = _x;
    obj.y = _y;    
    obj.r = 1;
    obj.alpha = 1;
    rippleArray.push(obj);
}

function makeRipple() {
    var circle = document.getElementById("cvs").getContext("2d");

    for (var i = 0; i < rippleArray.length; i++) {
        var z = rippleArray[i].alpha;

        console.log(z);
        r = rippleArray[i].r;

        var color = "rgba(" + 25 + "," + 125 + "," + 200 + "," + z + ")"; 
        circle.beginPath();
        circle.lineWidth = 1;
        circle.strokeStyle = color;

        var sAng = 0;            //円弧の開始角度
        var eAng = 2 * Math.PI;  //円弧の終端角度
        circle.arc(rippleArray[i].x, rippleArray[i].y, r, sAng, eAng, true);
        circle.stroke();

        rippleArray[i].alpha -= 0.005;
        rippleArray[i].r += 1;
        //circle.fillStyle = color;
        //circle.fill();

        if (z < 0) {
            rippleArray.splice(i, 1);
            i--;
        }
    }

    requestAnimFrame( function() {
    //console.log('clear');
            canvas.clearRect(0,0,800,800);
            makeRipple();
        });
}

window.document.onclick = function(e) {
    console.log('click');
    addRipple(getMousePosition(e).x, getMousePosition(e).y);
}

function makeCircle(x, y) {

}

 window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function( callback ){
                window.setTimeout(callback, 100 / 60);
              };
    })();

function getMousePosition(e) {
    var obj = new Object();
    if(e) {
        obj.x = e.pageX;
        obj.y = e.pageY;
    }
    else {
        obj.x = event.x + document.body.scrollLeft;
        obj.y = event.y + document.body.scrollTop;
    }
    return obj;
}

requestAnimFrame( function() {
    //console.log('clear');
            canvas.clearRect(0,0,800,800);
            makeRipple();
        });