import Ember from 'ember';
export default Ember.Route.extend({
model: function() {
  return this.store.createRecord('blog');
}, /*
setupController: function(controller,model){
   controller.set('model',model);
    controller.set('names', ['Stefan', 'Miguel', 'Tomster', 'Pluto']);

 },*/

actions:{
  save:function(model){
  var self=this;
  model.set('created_at',model.get('created_at').toJSON().replace('T',' ').substring(0,19));
  model.save().then(function(){
  self.transitionTo('blogs');
  });
}
}
});
