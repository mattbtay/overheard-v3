window.onload = function() { init() };

var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/10eQQGsVwyAlKSk_Ios-6z-t-eTym_g7v8iowmokSwAI/pubhtml';

var quoteItem = [];

  function init() {
    Tabletop.init( { 
      key: public_spreadsheet_url,
      callback: getInfo,
      simpleSheet: true 
   })
  }

  function getInfo(data, tabletop) {
    
    //console.log(data);
    
    var localData = data.slice(0);

    console.log(localData);

    //for (var i = 0; i < localData.length; i++) {
    // $('.quote-item').append('<p>' + localData[i].quote + ' by ' + localData[i].author + '</p>');
    //}

    Shuffle(localData);

    randomQuote();

	function randomQuote() {

		//for (var i=0; i < localData.length * 2; i++) {

			// console.log(localData.length);

			var quoteString = localData[0].quote;

			

			var encodedString = encodeURI(quoteString);

			var giphyUrl = 'http://api.giphy.com/v1/gifs/search?q=' + encodedString + '&api_key=dc6zaTOxFJmzC';

			$('.quote-text').html(quoteString);
			$('.quote-author').html('- ' + localData[0].author);

			$.getJSON(giphyUrl, function( data ) {

				var imgID = data.data[Math.floor(Math.random() * data.data.length)].id;

				console.log(data.data);
			  
			  console.log(imgID);

			  $('#videoSrc').prop('src', '//giphy.com/embed/' + imgID);

			  console.log('link:' + ' ' + '//giphy.com/embed/' + imgID)
			  
			});


			localData.splice(localData[0],1);

			if(localData.length === 0) {
				localData = data.slice(0);
				Shuffle(localData);
			}


		//}

	}

	$('#new').mousedown(function(){
		$(this).addClass('spinning');
		setTimeout(function(){
			$('#new').removeClass('spinning');
		},1000);
		randomQuote();
	});


  }// getData

	function Shuffle(o) {
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};



