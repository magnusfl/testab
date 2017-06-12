$(document).keypress(function(event) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {

        if(document.activeElement.classList.contains("js-select-search")){
            var $searchResults = $('.js-search-results');
            var $autoComplete = $('.js-autocomplete');
            var text = document.activeElement.innerText.slice(0, 4);
            text = text + '...';
            var today = new Date().toLocaleString().slice(0, 16);

            $autoComplete.hide();
            $searchResults.show();
            $searchResults.append('<li><a class="search-results__link">'+text+'<time>'+today+'</time><span class="search-results__cross-container js-remove-searchresult"><span class="search-results__cross"></span> </span> </a> </li>');

        }

    }
});