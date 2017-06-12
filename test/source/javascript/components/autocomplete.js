var autocomplete = function (quoteArray) {

    var $autoComplete = $('.js-autocomplete');
    var loopValue;

    $autoComplete.html('');

    if(quoteArray.length > 3){
        loopValue = 3;
    }

    for (var i = 0; i < loopValue; i++) {
        $autoComplete.append('<li><a class="search__autocomplete-link js-select-search">'+quoteArray[i]+'</a></li>');
    }
    if(quoteArray.length > 0){
        $autoComplete.show();
        $autoComplete.find('.js-select-search').first().attr('tabindex', '-1');
        $autoComplete.find('.js-select-search').first().focus();

    }



};