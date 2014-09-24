var Croxuel = (function() {

    var isAnimating = false;

    function getPrevious(className, index, array) {
        var length = array.length;
        var nextNode;
        for(var i = 0; i < length; i++) {
            var nextIndex = Math.abs(index - i) % length;
            var node = array[nextIndex];
            if(node.className.indexOf(className) >= 0) {
                nextNode = node;
                break;
            }
        }
        return nextNode;
    }

    function getNext(className, index, array) {
        var length = array.length;
        var nextNode;
        for(var i = 0; i < length; i++) {
            var nextIndex = (index + i) % length;
            var node = array[nextIndex];
            if(node.className.indexOf(className) >= 0) {
                nextNode = node;
                break;
            }
        }
        return nextNode;
    }

    function left() {
        if(!isAnimating) {
            isAnimating = true;
            var li = document.querySelectorAll("li");
            var liActive = document.querySelector("li.active");

            var liArray = [];
            for(var i = 0, length = li.length; i < length; i++) {
                liArray.push(li[i]);
            }
            var activeIndex = liArray.indexOf(liActive);
            var leftLi = getPrevious("left", activeIndex, liArray);
            var rightLi = getNext("right", activeIndex, liArray);
            liActive.className = "leftTransition";
            leftLi.className = "right";
            rightLi.className = "active";

            setTimeout(function () {
                var rightImageTransition = document.querySelector("#croxuel li.leftTransition");
                rightImageTransition.className = "left";
                isAnimating = false;
            }, 500);
        }
    }

    function right() {
        if(!isAnimating) {
            isAnimating = true;
            var li = document.querySelectorAll("li");
            var liActive = document.querySelector("li.active");

            var liArray = [];
            for(var i = 0, length = li.length; i < length; i++) {
                liArray.push(li[i]);
            }
            var activeIndex = liArray.indexOf(liActive);
            var leftLi = getNext("left", activeIndex, liArray);
            var rightLi = getPrevious("right", activeIndex, liArray);
            liActive.className = "rightTransition";
            leftLi.className = "active";
            rightLi.className = "left";

            setTimeout(function () {
                var rightImageTransition = document.querySelector("#croxuel li.rightTransition");
                rightImageTransition.className = "right";
                isAnimating = false;
            }, 500);
        }

    }

    function registerEvents() {
        if(document.querySelector("#croxuel[data-arrow_control]") != null) {
            addKeyControl();
        }
        if(document.querySelector("#croxuel[data-button_control]") != null) {
            addButtonControl();
        }
    }

    function addKeyControl() {
        document.querySelector("body").addEventListener("keydown", function(event){
            if(event.keyCode == 37) {
                left();
            } else if(event.keyCode == 39) {
                right();
            }
        });
    }

    function addButtonControl() {
        document.querySelector("body").addEventListener("click", function(event){
            var target = event.target;
            if(target.hasAttribute("data-croxuel_left_button")) {
                left();
            } else if(target.hasAttribute("data-croxuel_right_button")) {
                right();
            }
        });
    }

    return {
        slideLeft: function() {
                left();
        },
        slideRight: function() {
                right();
        },
        init: function() {
            document.addEventListener("DOMContentLoaded", function(){
                registerEvents();
            });

        }
    }
})();



Croxuel.init();

//var li = document.querySelectorAll("li");
//var liActive = document.querySelector("li.active");
//
//var liArray = [];
//for(var i = 0, length = li.length; i < length; i++) {
//    liArray.push(li[i]);
//}
//var activeIndex = liArray.indexOf(liActive);
//var leftLi = getPrevious("left", activeIndex, liArray);
//var rightLi = getNext("right", activeIndex, liArray);
//liActive.className = "left";
//leftLi.className = "right";
//rightLi.className = "active";
//
//function getNext(className, index, array) {
//    var length = array.length;
//    var nextNode;
//    for(var i = 0; i < length; i++) {
//        var nextIndex = (index + i) % length;
//        var node = array[nextIndex];
//        if(node.className.indexOf(className) >= 0) {
//            nextNode = node;
//            break;
//        }
//    }
//    return nextNode;
//}
//
//function getPrevious(className, index, array) {
//    var length = array.length;
//    var nextNode;
//    for(var i = 0; i < length; i++) {
//        var nextIndex = Math.abs(index - i) % length;
//        var node = array[nextIndex];
//        if(node.className.indexOf(className) >= 0) {
//            nextNode = node;
//            break;
//        }
//    }
//    return nextNode;
//}