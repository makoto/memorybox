var NavigationTagsView = Backbone.View.extend({
  tagName:'li',
  className: "navigation-tags",
  render: function() {
    var template = $('.navigation-tags-template').text()
    $('.navigation-tags').html(Mustache.render(template, {tags:this.tags}))
    // This should go into events:{}
    $('.navigation-tags a').on('click', this.open)
  },
  initialize: function(tags){
    this.tags = tags;
    var self = this
  },
  open: function(e){
    e.preventDefault();
    var tag = e.target.text
    new CarouselView(window.contents.filterByTag(tag))
    new ThumnailsView(window.conten)
  }
});