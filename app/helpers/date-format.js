import Ember from 'ember';

export function dateFormat(params/*, hash*/) {
    var dateString, date;
    dateString = new Date(params).toISOString();
    date = (dateString.substring(8, 10)) + "/" + (dateString.substring(5, 7)) + "/" + (dateString.substring(0, 4));

    return date;
}

export default Ember.Helper.helper(dateFormat);


