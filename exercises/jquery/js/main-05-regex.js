
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
let regexEmail = new RegExp('^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$');
let regexWebsite = new RegExp('^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,6})?(\/.*)?$');

function validateInputField( $, element, regex ){
    console.log($(element).val());
    console.log( regex.test($(element).val()) );

    if(regex.test($(element).val())){
        console.log("valid");
        $(".error", $(element).parent()).fadeOut();
    } else {
        console.log("wrong");
        $(".error", $(element).parent()).fadeIn();
    }
}

jQuery(document).ready(function($){

    $("#demo").css("color", "green");
    $("#demo").html("jQuery successfully loaded!");

    // for testing purpose
    //console.log(regexEmail.test("michael.ulmhotmail.com@"));

    $("#email").focusout(function(){
                validateInputField($, this, regexEmail)
            }
    );
    $("#website").focusout(function(){
                validateInputField($, this, regexWebsite)
            }
    );



});
