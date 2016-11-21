import Ember from 'ember';

export default Ember.Route.extend({
    model: function (params) {
        var time_stamp = Math.floor(Date.now() / 1000),
            public_key = this.controllerFor('authorization').get('public_key'),
            private_key = this.controllerFor('authorization').get('private_key');
        // console.debug(this.controllerFor('authorization').get('public_key'));
        // console.debug(this.controllerFor('authorization').get('private_key'));

        if ((!public_key) || (!private_key)) {
            location.href = "/authorization";
        }

        var hash_key = md5(time_stamp + private_key + public_key), url;
        //console.debug(hash_key);

        var url_character = 'https://gateway.marvel.com:443/v1/public/characters/' + params.character_id + ' ?ts=' + time_stamp + '&apikey=' + public_key + '&hash=' + hash_key;
        var url_comics = 'https://gateway.marvel.com:443/v1/public/characters/' + params.character_id + '/comics?ts=' + time_stamp + '&apikey=' + public_key + '&hash=' + hash_key;
        console.debug(url_character);
        console.debug(url_comics);

        return new Ember.RSVP.hash({
            character: Ember.$.ajax({url: url_character, dataType: "JSON", type: 'GET'}),
            comics: Ember.$.ajax({url: url_comics, dataType: "JSON", type: 'GET'})
        });
    },

    setupController: function (controller, models) {
        var character = models.character;
        var comics = models.comics;


        console.debug(comics)

        controller.set('character', character.data.results[0]);
        controller.set('comics', comics.data.results);
    }
});


