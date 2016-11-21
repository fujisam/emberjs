import Ember from 'ember';

export default Ember.Controller.extend({
    needs: ['authorization'],
    queryParams: ['index_letter'],
    index_letter: null,
    init: function () {
        var letters = [];
        for (var i = 97; i <= 122; i++) {
            letters.push(String.fromCharCode(i));
        }
        this.set('letters', letters);
    },

    actions: {
        listCharacter: function (param) {
            this.transitionToRoute({queryParams: {index_letter: param}});
        }
    }
});


