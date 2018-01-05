function ran(){
  var random=Math.floor(Math.random() * 39) + 1
  return random;
}



function getQuotes(){
  //clears the quote box
  $("#quote").text(" ");


//gets the quotes from JSON
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(quotes){

    content=quotes[ran()].content;
    //remoes html tags
    content=content.replace("<p>","");
    content=content.replace("</p>","");
    title=quotes[ran()].title;
// gets the total letter count and whitspace count for twitter
     var charCount=content.length;
    charCount+=title.length+1;
//if its to long it will run again
  if (charCount>240){
    getQuotes();
  }

    else{
      //displays quotes in the box1
    $("#quote").append(content+ "<br>" + "-"+title)


//twitter button on click
    $("#tw-button").click(function(){
        if (charCount<=280){

//grabes text from the box1 and encodes it(removing specail chars that were created) and applies it to the twiter new tab
     $(this).attr("href",'https://twitter.com/intent/tweet/?text='+encodeURIComponent($("#quote").text()) );
    }

    });
//to help debug
    console.log("Quote number "+ran()+" was printed"+ "--- "+   charCount +" "+content);
    }

  });

}
