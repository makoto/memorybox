var Contents = Backbone.Collection.extend({
  filterByTag:function(tag){
    var filtered = this.models.filter(function(model){
      return model.isTag(tag)
    })
    return new Contents(filtered)
  },
  tags: function(){
    return _.uniq(_.flatten(contents.pluck("tags")))
  },
  thumbnailForOtherTags: function(tag){
    var self = this
    var otherTags = _.difference(this.tags(), tag)
    var filtered = otherTags.map(function(tag){
      return self.filterByTag(tag).first()
    })
    return new Contents(filtered)
  }
})
