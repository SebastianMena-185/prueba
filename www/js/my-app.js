  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/anotador/',
        url: 'anotador.html',
      },
      {
        path:'/errordecampo/',
        url:'errordecampo.html'
      },
      {
        path:'/select/',
        url:'select.html'
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');
var jugador1="",jugador2="";
var total1=0, total2=0;
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    

    $$('#iniciar').on('click', function(){
            if ($$('#j1').val()=="" || $$('#j2').val()=="") {
                alert('complete todos los campos');
                $$('#j1').val()=="";
                $$('#j2').val()=="";
                }else {
            
               $$('#iniciar').attr('href','/anotador/');
            jugador1=$$('#j1').val();
            jjugador2=$$('#j2').val();
               
        

            }

            
    });


});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="anotador"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    alert('Hello');
    $$('#jj1').text(jugador1);
    $$('#jj2').text(jugador2);
    ;

    $$('input').on('click', function(){
        mostrar(1);
        mostrar(2);
    });
    function mostrar(m){
        for (var i = 1; i <=11; i++) {
           'total'+m+= $$('#btn'+i+'j'+m).val();
        }

    }



    $$('#j1-2').on('click', function(){
        multiplicar(1,2);
    });
    function multiplicar(n,a){
        totalf=$$('#j'+n+'-'+a).val();
        console.log(totalf);
        totalf=totalf*a;
        $$('#j'+n+'-'+a).val(totalf);
        console.log(totalf);
        //for (var i = 1; i <= 6 ; i++) {
          //  $$('')
        //}

    };
})