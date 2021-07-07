document.addEventListener("DOMContentLoaded", function() {
  let input = document.querySelector("#phone");

  window.intlTelInput(input, {
    utilsScript: "assets/js/utils.js",
  });

  function phoneMask() {
    if ($('.iti__selected-flag')[0].title.includes('Brazil')){
      var num = $(this).val().replace(/\D/g,'');

      $(this).val('(' + num.substring(0,2) + ') ' + num.substring(2,7) + '-' + num.substring(7,11));
    }
  }

  $('#phone').keyup(phoneMask);

  function generateLink() {
    fullNumber = $('#phone').val().replace( /\D/g, '')
    countryCode = $('.iti__selected-flag')[0].title.replace( /^\D+/g, '')

    $("#button").attr("href", "https://api.whatsapp.com/send?phone=" + countryCode + fullNumber)
  }

  $('#button').click(function() {
    generateLink()
  });

  $('#phone').focus(function(){
    if ($("#phone").val() != ""){
      $("#button").text('gerar link');
    }
  });

  $('#phone').blur(function(){
    if ($("#phone").val() != ""){
      $("#button").text('iniciar conversa');
    }
  });
});
