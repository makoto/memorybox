var Contents = Backbone.Collection.extend({
  filterByTag:function(tag){
    var filtered = this.models.filter(function(model){
      return model.isTag(tag)
    })
    return new Contents(filtered)
  },
  tags: function(){
    return _.uniq(_.flatten(contents.pluck("tags")))
  }
})
