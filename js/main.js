$(document).ready(function () {

    $('.enter a').click(function(e,timer) {
        $('.enter').removeClass('visible');
        $('.sound').get(0).play();
        setTimeout(() => {
            $('.bird, .logo').removeClass('hide');
        }, "500");
        e.preventDefault();
    });

    $('.mute').click(function(e) {
        if ($('.sound').get(0).paused == false) {
            $('.sound').get(0).pause();
            $(this).addClass('muted')
        } else {
            $('.sound').get(0).play();
            $(this).removeClass('muted')
        }
        e.preventDefault();
    });


    $(".ca").on('click', function (){
        var text = $(this).text()
        console.log(text)
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val(text).select();
        document.execCommand("copy");
        $temp.remove();
        alert('Contract copied to clipboard');
        event.preventDefault();
    });

});