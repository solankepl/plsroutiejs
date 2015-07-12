$(function () {
	// var routes = ["page1", "page2","page3"];
	// render(window.location.hash);
	// $(window).on('hashchange', function(){
		// render(window.location.hash);
	// });
	
	// function render(url) {
		//Get the keyword from the url.
		// var curPage="";
		// for(var i=0; i<routes.length; i++){
			// if (url.indexOf(routes[i]) > -1) {
				// curPage = routes[i];
				//console.log("true"+routes[i]);
			// }
		// }	
		// if(curPage == ""){
			// curPage = routes[0];
		// }		
		// renderPgae("assets/template/"+curPage+".html");		
	// }
	
	// function renderPgae(path){
		// $("#mainContainer").load(path);
	// }
	
	 $.plsRoutie("#mainContainer",{
		routes:["page1", "page2","page3"]
	 });
});