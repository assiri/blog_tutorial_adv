import Ember from 'ember';
export default Ember.Route.extend({
model: function() {
  return this.store.createRecord('comment');
},
actions:{
  save:function(model,selected){
  var self=this;
  this.store.findRecord('blog',selected.id).then(function(blog){
  model.set('blog',blog);
  model.set('created_at',model.get('created_at').toJSON().replace('T',' ').substring(0,19));
  model.save().then(function(){
  self.transitionTo('comments');
  }); 
});


}
}
});
