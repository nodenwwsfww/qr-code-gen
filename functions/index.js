$(function() {
    function makeCode () {
        if ($('.qrText').val() != '') {
            var elText = document.getElementById("qr-text");

            if (!elText.value) {
                elText.focus();
                return;
            }
            console.log(elText.value)

            // Options
            var options = {
                text: elText.value,
                width: 200,
                height: 200,
            };

            $('#qrcode').empty();
            // Create QRCode Object
            new QRCode(document.getElementById("qrcode"), options);
            $('#qrcode').css('display', 'block');
            document.querySelector('.text-click-on-qr').style.display = 'block'
        }
    }

    makeCode();

    $("#generate-btn").
    on("click", function () {
        makeCode();
    })

    $('button#generate-btn').on('click', function() {
        $('.input-bar').addClass('load');
    });

    $('#qrcode').on('click', function() {

        var canvas = $("canvas")[0];
        var img = canvas.toDataURL("image/png");
        // window.location.href = img;
        $('.downloadCode').attr('href', img);
    });
    window.onunload = function () {
        $('#qrcode').empty();
        document.querySelector('.qrText').value = '';
    };

});