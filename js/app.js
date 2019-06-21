$('.sidenav').sidenav();

$('.slider').slider({
    indicators: false,
    height: 475,
    transtion: 500,
    interval: 3000
});

$('#autocomplete-input').autocomplete({
    data:{
        "Egypt":null,
        "Aruba":null,
        "Cancun":null,
        "Los Anglos":null,
        "London":null,
        "Barlen":null,
        "Roma":null,
        "Paris":null
    }
    
});

const gallary = document.querySelectorAll('.materialboxed')
M.Materialbox.init(gallary,{});
