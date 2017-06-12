var timeOut = null,
    myXHR = null;

$(function() {

    var $search = $('.js-search');

    if (!$search.length) {
        return;
    };

    $search.keydown(function() {
        var $autoComplete = $('.js-autocomplete');
        $autoComplete.hide();

        if(timeOut) clearTimeout(timeOut);

        var value = $(this).val();


        if(value.length >= 3){
            timeOut = setTimeout(function(){
                var url = 'https://api.chucknorris.io/jokes/search?query='+value+'';
                if(myXHR) myXHR.abort();
                myXHR = $.ajax({
                    url: url,
                    method: 'GET',
                    type: 'json'
                }).done(function(data) {
                    var quoteArray = [];
                    var result = data['result'];
                    for( var i in result ) {
                        quoteArray.push(result[i]['value']);
                    }
                    autocomplete(quoteArray);
                });

            }, 1000);
        }


    });




});