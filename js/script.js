$('ul').on('click', 'li', function(){
    $(this).toggleClass('done');
})

$('ul').on('click', 'span', function(event){
    console.log('something');
    event.stopPropagation();
    $(this).parent().fadeOut(function(){
        $(this).remove()
    });
})

$('input').keypress(function(event){
    if (event.which === 13){
        var item = $(this).val();
        $('ul').append(`<li><span>x</span> ${item}</li>`)
        $(this).val('');
    }
})

$('h1 span').click(function(){
    $('input').fadeToggle();
})