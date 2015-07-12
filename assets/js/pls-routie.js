(function($){
    $.plsRoutie = function(selector, settings){
		
		var config = {
			routes:[]
		};
		if ( settings ){$.extend(config, settings);}

			  var obj = $(selector);				 
				  
				render = function (url) {
					// Get the keyword from the url.
					var curPage="";
					for(var i=0; i<config.routes.length; i++){
						if (url.indexOf(config.routes[i]) > -1) {
							curPage = config.routes[i];
							//console.log("true"+routes[i]);
						}
					}	
					if(curPage == ""){
						curPage = config.routes[0];
					}		
					renderPgae("assets/template/"+curPage+".html");		
				}
				
				renderPgae = function (path){
					obj.load(path);
					alert(path);
				} 
				  
				$(window).on('hashchange', function(){
					render(window.location.hash);
				});
		
        
		return this;
	};
})(jQuery);
