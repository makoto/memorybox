var CarouselView = Backbone.View.extend({
  className: "carousel",
  render: function() {
    var template = $('.carousel-template').text()
    $('.carousel').html(Mustache.render(template, {contents:this.collection.toJSON()}))
    $('.carousel').carousel('next')
    $('.carousel').carousel('stop')
  },
  initialize: function(collection){
    this.collection = collection
    this.render()
  },
  open: function(e){
    e.preventDefault();
    var tag = e.target.text
  }
});