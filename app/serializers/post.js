import DS from "ember-data";

var PostSerializer = DS.RESTSerializer.extend({
  // Create new "Posts" objects that only extract the relevant objects from the more complext WordPress objects
  extractArray: function(store, type, payload) {
    delete payload.found;
    payload.posts.forEach(function(post, index, array){
      var newHash = {title: post.title, content: post.content, id: post.ID};
      array[index] = newHash;
    });
    return this._super(store, type, payload);
  }
});

export default PostSerializer;