import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['authorization'],
    init: function () {
    },
    actions: {
        listCharacter: function (param) {
            this.transitionToRoute({queryParams: {index_letter: param}});
        }
    }
});


