// js file for about us program
const scooterController = document.getElementById('scroll_scooter');
const container = document.getElementById('container');
const max = -120;
const min = -800;
const slideLength = 1530;
const scrollLineLength = max-min;
const scrollRatio = slideLength/scrollLineLength;

dragElement(scooterController, container, min, max);

function dragElement(elmnt, slide, min, max) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    const releaseDragElement = function () {
        document.onmouseup = null;
        document.onmousemove = null;
    }
    const elementDrag = function (e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        //pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        //pos4 = e.clientY;
        // set the element's new position:
        //elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        if (elmnt.offsetLeft - pos1 > min && elmnt.offsetLeft - pos1 < max) {
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
        
    }  
    const dragMouseDown = function (e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        //pos4 = e.clientY;
        document.onmouseup = releaseDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
    elmnt.onmousedown = dragMouseDown;
}


//slide.removeEventListener('scroll', moveController(controller, slide));
/*
function moveSlide(controller, slide) {  
    var moveDistance = scrollRatio*(-400-controller.style.left) + 'px';
    slide.style.setProperty('--tranX', moveDistance);
}

function moveController(controller, slide) {
    controller.style.left = (-slide.scrollLeft/scrollRatio-800) + 'px';
}*/

const step = 20;
const button = document.getElementById("topButton");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > step || document.documentElement.scrollTop > step) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}
function topFunction() {
    $("html, body").animate({scrollTop: "0"});
}

//function moveSlide(controller, slide) {
    
    //var moveDistance =  + 'px';
    // var dragDistance=0, dragStartPosition=0;
    // var controllerPos = controller.offsetLeft;

    /*
    // calculate the new cursor position:
    dragDistance = dragStartPosition - e.clientX;
    //pos2 = pos4 - e.clientY;
    dragStartPosition = e.clientX;
    */
    //var tranX = ;
  //  slide.style.setProperty('--tranX', moveDistance);
   // elmnt.style.left = -800-slide.style.left/ratio;
//}

!function() {
const container = document.getElementById('container');
//ele.scrollTop = 100;
container.scrollLeft = 0;

let pos = { left: 0, x: 0};

const mouseDownHandler = function (e) {
    pos = {
        // The current scroll
        left: container.scrollLeft,
     //   top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
    //    y: e.clientY,
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);

    container.style.cursor = 'grabbing';
    container.style.userSelect = 'none';
};

const mouseMoveHandler = function (e) {
    // How far the mouse has been moved
    const dx = e.clientX - pos.x;
  //  const dy = e.clientY - pos.y;

    // Scroll the element
  //  ele.scrollTop = pos.top - dy;
    container.scrollLeft = pos.left - dx;
};

const mouseUpHandler = function () {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
    container.style.cursor = 'grab';
    container.style.removeProperty('user-select');
};
}();


!function(){
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

    const scrollContentHandler = function () {
        window.requestAnimationFrame(function () {
            scooterController.style.left = (container.scrollLeft/scrollRatio)-800+'px';
        });
    };

    container.addEventListener('scroll', scrollContentHandler);
}();
//Jump when clicking the track
/*
const trackClickHandler = function (e) {
    const bound = track.getBoundingClientRect();
    const percentage = (e.clientY - bound.top) / bound.height;
    container.scrollLeft = percentage * (container.scrollHeight - container.clientHeight);
};

track.addEventListener('click', trackClickHandler);
*/
