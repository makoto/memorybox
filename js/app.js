$().ready(function(){
  $('.carousel').carousel()

  contents = new Contents([], {
    model: Content,
    url: '/content.json'
  });

  contents.fetch({reset: true, error: function() { console.log(arguments); }})
  contents.on("reset", function(d){
    console.log('hello', contents.tags())
  })

})