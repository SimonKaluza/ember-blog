import DS from "ember-data";

//export default DS.FixtureAdapter.extend();

export default DS.RESTAdapter.extend({
  host: 'https://public-api.wordpress.com',
  namespace: 'rest/v1/sites/inboxsimon.wordpress.com'
});