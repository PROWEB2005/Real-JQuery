$('.ask').on('click', function(event){
    console.log(event);
    event.preventDefault();
    $('.ask').removeClass('active').next().slideUp(500)
    $('.answer').addClass('active').next().slideDown(500)
    $(this).toggleClass('active').next().stop(true).slideToggle(500);
})

$('.read-more').click(function(e){

    e.preventDefault()
    $('.text-hidden').toggleClass('hidden');
    
    if ($(this).text().trim() == 'Read More') {
        
        $(this).html('Read less')
    }
    else if ($(this).text().trim() == 'Read less'){
        $(this).text('Read More');
    }
});

$('button[data-filter]').click(function(){

    let attr = $(this).attr('data-filter');
    if (attr == 'all') {
        $('.js-filter-card').slideDown(500);
    }
    else {
        $('.js-filter-card').not('.bg-' + attr).slideUp(500)
        $('.js-filter-card').filter('.bg-' + attr).slideDown(500)
    }
    $(`.js-filter-card[data-filter=${attr}]`).slideDown(500);
});

$('.js-modal-show').click(function(e){

    e.preventDefault();
    $('.modal').show(500);
    $('body').css({overflow: 'hidden'})
});

$('.close').click(function(e){
    
    e.preventDefault();
    $('.modal').hide(500);
    $('body').css({overflow: 'scroll'})
});

$('.modal').click(function(event){

    if (event.currentTarget == event.target) {
        console.log(event);
        $('.modal').hide(500);
        $('body').css({overflow: 'scroll'})
    }
});

function typing(element){

    let fullText = '',
    i = 0,
    innerText = element.html();
    
    
    let int = setInterval(() => {
        
        fullText += innerText[i]
        i++
        if (innerText.length - 1 < i) {
            clearInterval(int)
        }
        element.html(fullText)
    }, 250)
}
    typing($('h1'));

    $(window).on('scroll',function () {
        if (pageYOffset < 0) {
            $('.nav').css({
                backdropFilter: 'blur(20px)',
            })
        }if (pageYOffset < 300) {
            $('.nav').css({
                background: 'blue'
            })}
        else if(pageYOffset < 500){
            $('.nav').css({
                position:'fixed',
                background: 'linear-gradient(green, red, silver)',
                boxShadow:'0 0 5px 5px #000',
                transition: '1s',
                display:'flex',
                flexDirection: 'column',
                width:'9%',
                height:'100vh',
                justifyContent:'center',
                alignItems:'center',
            
                paddingRight:'40px',
                paddingLeft:'30px',
    
            })
        }
    })