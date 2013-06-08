var Content = Backbone.Model.extend({
  isTag:function(name){
    return _.include(this.get("tags"), name);
  }
});
