$(function myFunction() {

    var myVar;

    $("#btn1").on("click", function () {
        try{
            clearInterval(myVar);
        }
        catch(err1){
            return false;
        }
        
        $(".div1").stop();
        $(".div1").finish();
        $(".div1").animate({
            marginBottom: '350px',
            marginTop: '0px'
        }, 5000);
    });

    $("#btn2").on("click", function () {
        try {
            clearInterval(myVar);
        }
        catch(err2) {
            return false;
        }

        $(".div1").stop();
        $(".div1").finish();
        $(".div1").animate({
            marginTop: '350px',
            marginBottom: '0px'
        },5000);
    });

    $("#btn3").on("click", function () {
        try {
            clearInterval(myVar);
        }
        catch(err3) {
            return false;
        }

        $(".div1").stop();
        $(".div1").finish();
        $(".div1").animate({
            marginRight: '350px',
            marginLeft: '0px'
        }, 5000);
    });

    $("#btn4").on("click", function () {
        try {
            clearInterval(myVar);
        }
        catch(err4) {
            return false;
        }

        $(".div1").stop();
        $(".div1").finish();
        $(".div1").animate({
            marginLeft: '350px',
            marginRight: '0px'
        }, 5000);
    });

    $("#btn5").on("click", function () {
        try {
            clearInterval(myVar);
        }
        catch(err5) {
            return false;
        }

        $(".div1").stop();
        $(".div1").finish();
        $(".div1").fadeOut("slow");
    });

    $("#btn6").on("click", function () {
        try {
            clearInterval(myVar);
        }
        catch(err6) {
            return false;
        }

        $(".div1").stop();
        $(".div1").finish();
        $(".div1").fadeIn("slow");
    });

    $("#btn7").on("click", function () {

        $(".div1").stop();
        $(".div1").finish();
        myVar = setInterval(blink, 10);
    });

    function blink() {
         $(".div1").fadeOut("slow").fadeIn("slow");
    }

    $("#btn8").on("click", function () {
        try {
            clearInterval(myVar);
        }
        catch(err8) {
            return false;
        }

        $(".div1").stop();
        $(".div1").finish();
        $(".div1").animate({
             marginLeft: '0px',
             marginRight: '350px',
             marginBottom: '350px',
             marginTop: '0px',
         }, 0);
         $(".div1").fadeIn(0);
    });
});