$("document").ready(function() {
    $("#btn1").click(function(){
        $("#roos1").hide(4000)
        $("#p1").css('color','green');
    })

    $("#btn2").click(function(){
        $("#roos1").show(4000)
        $("#p1").css('color','black');
    })

    $("#btn3").click(function(){
        $("#roos2").slideUp(4000)
        $("#p1").css('color','green');
    })

    $("#btn4").click(function(){
        $("#roos2").slideDown(4000)
        $("#p1").css('color','black');
    })


});






// $("document").ready(function() {
//     $("#btn1").click(function() {
//         $("#roos1").slideUp(4000);
//     }

// )
// $("#btn2").click(function() {
//     $("#roos1").slideDown(4000);
// }

// )

// $("#btn3").click (function() {
//     $("#roos1)").slideUp(2000);
// })

// $("#btn4").click(function() {
//     $("#roos1").slideDown(2000);
// })

// });



