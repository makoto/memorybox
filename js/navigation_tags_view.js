var NavigationTagsView = Backbone.View.extend({
  tagName:'li',
  className: "navigation-tags",
  render: function() {
    var template = $('.navigation-tags-template').text()
    $('.navigation-tags').html(Mustache.render(template, {tags:this.tags}))
    console.log('template', template)
    // This should go into events:{}
    console.log('aaa', this.tags)
    // $('.navigation-tags a').on('click', this.open)
    $('.navigation-tags a').on('click', this.open)
  },
  initialize: function(tags){
    this.tags = tags;
    var self = this
  },
  open: function(e){
    e.preventDefault();
    var tag = e.target.text
    console.log(tag)
  }
});