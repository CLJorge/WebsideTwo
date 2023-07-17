$(document).ready(function(){

	//slider
    
    if(window.location.href.indexOf('index')> -1){
	      $('.galeria').bxSlider({
	      mode: 'fade',
	      captions: true,
	      slideWidth: 1200,
	      speed:1000

	      });

    };


    

    //post

    if(window.location.href.indexOf('index')> -1){

	    var posts = [
		    {
		    	title: 'Prueba de titulo 1',
		    	date:'Publicado el dia ' +moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"), //Do date: new Date(),
		    	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		    },
		        {
		    	title: 'Prueba de titulo 2',
		    	date:'Publicado el dia ' +moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
		    	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		    },
		        {
		    	title: 'Prueba de titulo 3',
		    	date:'Publicado el dia ' +moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
		    	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		    },
		        {
		    	title: 'Prueba de titulo 4',
		    	date:'Publicado el dia ' +moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
		    	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		    },
		        {
		    	title: 'Prueba de titulo 5',
		    	date:'Publicado el dia ' +moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
		    	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		    },
		        {
		    	title: 'Prueba de titulo 6',
		    	date:'Publicado el dia ' +moment().date()+' de '+moment().format("MMMM")+' del '+moment().format("YYYY"),
		    	content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		    },


	    ];

	    //console.log(posts);

	    posts.forEach((item, index)=>{

	    	var post =`
	    	        <article class="post">
						<h2>${item.title}</h2>
						<span class="date">${item.date}</span>
						<p>${item.content}</p>
						<a href="#" class="button-more">Leer más</a>
						
					</article>

			 `;

	       $("#posts").append(post)
	           


	    });

    }; 

    //SELECTOR DE TEMAS

    var theme = $("#theme");

    $("#to-green").click(function(){

    	theme.attr("href","css/green.css");

    });

      //var theme = $("#theme"); la hoja de estilo theme
    $("#to-red").click(function(){

    	theme.attr("href","css/red.css");

    });

    $("#to-blue").click(function(){

    	theme.attr("href","css/blue.css");

    });

    // SCROLL ARRIBA DE LA WEB

    $('.subir').click(function(){
    	e.preventDefault(); //Para que lleve a otra paginas- mantenga la misma


    	$('html, body').animate({
    		scrollTop:0
    	},1000);

    	return false;
    });


    //login falso

    $("#login form").submit(function(){
    	var form_name = $("#form_name").val();

    	localStorage.setItem("form_name", form_name);
    });


    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "underfined"){
      var about_parrafo = $("#about p");	
    
      $("#about p").html("<br><strong>Bienvenido, "+form_name+"</strong");
      about_parrafo.append("<a href='#' id='logout'>Cerrar Sesion</a>");

      $("#login form").hide();

      $("#logout").click(function(){
      	  localStorage.clear();
      	  location.reload();
      });
    }


    //ACORDEON

    if(window.location.href.indexOf('about')> -1){
    	$("#acordeon").accordion();
    }


    //RELOJ

    if(window.location.href.indexOf('reloj')> -1){

    	//setInterval() = Permite ejecutar en bucle cada segundo
    	setInterval(function(){
    		    	var reloj = moment().format('h:mm:ss');
    	        $("#reloj").html(reloj);

    	}, 1000);

    }

    //VALIDACION 

    if(window.location.href.indexOf('contact')> -1){

    	$("form input[name='date']").datepicker({
    		dateFormat: 'dd-mm-yy'
    	});

	    $.validate({
	    	lang: 'es',
	    	errorMessagePosition: 'top',
	    	scrollTopOnError: true
	    });

    }


    
    


});