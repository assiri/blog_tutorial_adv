import Ember from 'ember';
export default Ember.Route.extend({
model: function(params) {
  return this.store.findRecord('blog', params.blog_id);
},
actions:{
  update:function(model){
  var self=this;
  model.set('created_at',model.get('created_at').toJSON().replace('T',' ').substring(0,19));
  model.save().then(function(){
    self.transitionTo('blogs');
  });
},
delete:function(model){
var self=this;
model.destroyRecord().then(function(){
  self.transitionTo('blogs');
});
}
}
});
