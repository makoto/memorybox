$().ready(function(){
  $('.carousel').carousel()

  contents = new Contents([], {
    model: Content,
    url: '/content.json'
  });

  contents.fetch({reset: true, error: function() { console.log(arguments); }})
  contents.on("reset", function(d){
    var nav_tags = new NavigationTagsView(contents.tags())
    nav_tags.render()
    new CarouselView(d.filterByTag("Summer"))
  })

})