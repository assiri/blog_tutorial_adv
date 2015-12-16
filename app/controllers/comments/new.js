import Ember from 'ember';
export default Ember.Controller.extend({
      actions: {
        searchBlog(term) {
          if (Ember.isBlank(term)) { return []; }
          const url = `http://localhost:8000/bl2/api/v4/blogs?q=true&fields=id,title&norel=true&title.startswith=${term}`;
          return Ember.$.getJSON(url).then(json => json.blog);
        }
      }
    });
