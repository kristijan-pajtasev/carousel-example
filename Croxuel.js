var Croxuel = (function() {

    var isAnimating = false;

    function left() {
        if(!isAnimating) {
            isAnimating = true;
            var activeImage = document.querySelector("#croxuel li.active");
            var leftImage = document.querySelector("#croxuel li.left");
            var rightImage = document.querySelector("#croxuel li.right");

            activeImage.className = "leftTransition";
            leftImage.className = "right";
            rightImage.className = "active";

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
            var activeImage = document.querySelector("#croxuel li.active");
            var leftImage = document.querySelector("#croxuel li.left");
            var rightImage = document.querySelector("#croxuel li.right");

            activeImage.className = "rightTransition";
            leftImage.className = "active";
            rightImage.className = "left";

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

