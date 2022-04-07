// js file for about us program
const scooterController = document.getElementById('scroll_scooter');
const container = document.getElementById('container');
var currentWindowWidth = window.innerWidth;
var currentWindowHeight = window.innerHeight;
const max = -100; //-100
const min = -800;
var slideLength = 2968-currentWindowWidth;
const scrollLineLength = max-min;
var scrollRatio = slideLength/scrollLineLength;
/*
window.onresize = reportWindowSize;
function reportWindowSize() {
  var newWidth = window.innerWidth;
  if(currentWindowWidth!==newWidth){
    window.location = window.location;
  }
}
*/
window.onresize = function (){
    currentWindowWidth = window.innerWidth;
    slideLength = 2968-currentWindowWidth;
    scrollRatio = slideLength/scrollLineLength;
    container.addEventListener('mousedown', mouseDownHandler);
    container.addEventListener('scroll', scrollContentHandler);
}

dragElement(scooterController, container, min, max);

function dragElement(elmnt, slide, min, max) {
    var pos1 = 0, pos3 = 0;
    const releaseDragElement = function () {
        document.onmouseup = null;
        document.onmousemove = null;
    }
    const elementDrag = function (e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos3 = e.clientX;
        if (elmnt.offsetLeft - pos1 > min && elmnt.offsetLeft - pos1 < max) {
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    }  
    const dragMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        document.onmouseup = releaseDragElement;
        document.onmousemove = elementDrag;
    }
    elmnt.onmousedown = dragMouseDown;
}

const step = 20;
const body = $("html, body");
const button = document.getElementById("topButton");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > step || document.documentElement.scrollTop > step) {
        button.style.opacity = "1";
    } else {
        button.style.opacity = "0";
    }
}
const scrollToTop = function() {
    body.animate({scrollTop: 0});
}
const aboutUs = function() {
    body.animate({scrollTop: 700}, 500, 'swing');
}
// Grab items to scroll
!function() {
    const container = document.getElementById('container');
    //container.scrollLeft = 0;
    let pos = { left: 0, x: 0};

    const mouseDownHandler = function (e) {
        pos = {
            left: container.scrollLeft,
            x: e.clientX,
        };
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
        container.style.cursor = 'grabbing';
        container.style.userSelect = 'none';
    };
    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        container.scrollLeft = pos.left - dx;
    };
    const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
        container.style.cursor = 'grab';
        container.style.removeProperty('user-select');
    };

    container.addEventListener('mousedown', mouseDownHandler);
}();

!function() {
    let pos = { left: 0, x: 0 };

    const mouseDownThumbHandler = function (e) {
        pos = {
            // The current scroll
            left: container.scrollLeft,
            // Get the current mouse position
            x: e.clientX,
        };
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };
    const mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        const dx = e.clientX - pos.x;
        // Scroll the content
        container.scrollLeft = pos.left + dx * scrollRatio;
    };
    const mouseUpHandler = function () {
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
        scooterController.style.cursor = 'grab';
        scooterController.style.removeProperty('user-select');
    };
    // Attach the `mousedown` event handler
    scooterController.addEventListener('mousedown', mouseDownThumbHandler);

    var scrollContentHandler = function () {
        window.requestAnimationFrame(function () {
            scooterController.style.left = (container.scrollLeft/scrollRatio)-800+'px';
        });
    };
    container.addEventListener('scroll', scrollContentHandler);
}();
//Jump when clicking the track
/*
const track = document.getElementById('scroll_line');
const trackClickHandler = function (e) {
    const bound = track.getBoundingClientRect();
    const percentage = (e.clientY - bound.left) / bound.width;
    container.scrollLeft = percentage * (container.scrollWidth - container.clientWidth);
};

track.addEventListener('click', trackClickHandler);
*/