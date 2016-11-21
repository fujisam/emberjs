import Ember from 'ember';

export default Ember.Controller.extend({

    init: function () {
        this.set('form', Ember.Object.create());
    },
    
    actions: {
        submitForm: function () {
            var public_key = this.get('form.public_key'),
                private_key = this.get('form.private_key');

            this.set('public_key', public_key);
            this.set('private_key', private_key);
            this.transitionToRoute('characters');
        }
    }
});


