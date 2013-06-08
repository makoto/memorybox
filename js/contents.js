var Contents = Backbone.Collection.extend({
  filterByTag:function(tag){
    return this.models.filter(function(model){
      return model.isTag(tag)
    })
  },
  tags: function(){
    return _.uniq(_.flatten(contents.pluck("tags")))
  }
})
