import Ember from 'ember';
export default Ember.Route.extend({
  model:function(){
      return this.store.findAll('comment').then(comments => comments.sortBy('created_at').reverse());
    }
});
