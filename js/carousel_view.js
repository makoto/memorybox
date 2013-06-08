var CarouselView = Backbone.View.extend({
  className: "carousel",
  render: function() {
    var template = $('.carousel-template').text()
    $('.carousel').html(Mustache.render(template, {contents:this.collection.toJSON()}))
    $('.carousel').carousel('next')
  },
  initialize: function(collection){
    this.collection = collection
    this.render()
  }
});