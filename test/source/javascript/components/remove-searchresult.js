$(document).on('click','.js-remove-searchresult',function(event){
    event.preventDefault();
    $(this).closest('li').remove();
});