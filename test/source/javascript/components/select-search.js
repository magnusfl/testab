$(document).on('click','.js-select-search',function(event){
    event.preventDefault();

    var $searchResults = $('.js-search-results');
    var $autoComplete = $('.js-autocomplete');
    var text = $(this).text().slice(0, 4);
    text = text + '...';
    var today = new Date().toLocaleString().slice(0, 16);

    $autoComplete.hide();
    $searchResults.show();
    $searchResults.append('<li><a class="search-results__link">'+text+'<time>'+today+'</time><span class="search-results__cross-container js-remove-searchresult"><span class="search-results__cross"></span> </span> </a> </li>');

});