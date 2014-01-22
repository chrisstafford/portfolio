var CurrentPage = 'introduction';

$('document').ready(function(){
	
	$('#content').load('introduction.html', setupAjax);
	
	//Handle nav links
	$('nav a').click(function(e){
		e.preventDefault();
		CurrentPage = $(this).attr('href').replace('.html', '');
		$('title').text(CurrentPage);
		$('#content').load( $(this).attr('href'), setupAjax );		
	});
	
});

//Ensure loaded content is observed
function setupAjax() {

	$('#partial').fadeIn(); //simple default animation on page load
	
	//Do stuff on portfolio
	if(CurrentPage == 'portfolio') {
		var thumbIndex = 1;
	
		for( var i = 0; i < portfolio.length; i++) {
			$('#portfolio').append('<li id="item-' + i + '"></li>');
			$('#item-' + i).append('<a class="new-window thumb"><img alt="portfolio thumbnail" /></a>');
			$('#item-' + i).append('<h2>' + portfolio[i].title + '</h2>');
			$('#item-' + i).append('<span><a class="new-window">' + portfolio[i].url + '</a></span>');
			$('#item-' + i).append('<p>' + portfolio[i].description + '</p>');
			$('#item-' + i + ' a').attr('href', portfolio[i].url);
			$('#item-' + i + ' img').attr('src', portfolio[i].thumb);
		}
		
		for( var i = 0; i < thumbnails.length; i++ ){
			$('#thumbs').append('<li id="thumb-' + i + '"></li>');			
			$('#thumb-' + i).append('<img alt="portfolio thumbnail" />');
			$('#thumb-' + i).append('<h3>' + thumbnails[i].title + '</h3>');
			$('#thumb-' + i).append('<p>' + thumbnails[i].description + '</p>');
			$('#thumb-' + i + ' img').attr('src', thumbnails[i].thumb);
		}
		
		$('#next').click(function(e){
			e.preventDefault();
			
			/*$('#thumbs li').index(thumbIndex).fadeOut('400', function(){
				thumbIndex++;
				$('#thumbs li').index(thumbIndex).fadeIn();
			});*/
		});
	}	
}