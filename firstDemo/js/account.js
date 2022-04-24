$('.register').each(function(i) {
    $(this).click(function() {
        $('.registerform').addClass('registerform-active');
        $('.login').css('background-color', '#ebe5a3');
        $('.register').css('color', '#ebe5a3');
    });
});
$('.login').each(function(i) {
    $(this).click(function() {
        $('.registerform').removeClass('registerform-active');
        $('.register').css('background-color', '#dc7244');
    });
});



document.querySelector('registerform').addEventListener('submit', (e) => {
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data)
});

document.querySelector('loginform').addEventListener('submit', (e) => {
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log(data)
});