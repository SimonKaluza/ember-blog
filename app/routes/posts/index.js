import Ember from "ember";

var PostsIndexRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('post');
  }
});

export default PostsIndexRoute;