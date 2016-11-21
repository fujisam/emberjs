import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        index_letter: {
            refreshModel: true
        }
    },
    model: function (params) {
        var time_stamp = Math.floor(Date.now() / 1000),
            public_key = this.controllerFor('authorization').get('public_key'),
            private_key = this.controllerFor('authorization').get('private_key');
        // console.debug(this.controllerFor('authorization').get('public_key'));
        // console.debug(this.controllerFor('authorization').get('private_key'));

        var hash_key = md5(time_stamp + private_key + public_key), url;
        //console.debug(hash_key);

        if (params.index_letter) {
            url = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=' + params.index_letter + '&ts=' + time_stamp + '&apikey=' + public_key + '&hash=' + hash_key;
        } else {
            url = 'https://gateway.marvel.com:443/v1/public/characters?&ts=' + time_stamp + '&apikey=' + public_key + '&hash=' + hash_key;
        }
        var characters = Ember.$.ajax(url, {
            "type": 'GET', // HTTP method
            "dataType": 'JSON', // type of data expected from the API response
            "success": function (data, textStatus, jqXHR) {
                return data;
            },
            "error": function () {
                location.href = "/authorization";
            }
        });
        return characters;
    }
});


