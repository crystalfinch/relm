import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: process.ENV.BASE_APIKEY,
  authDomain: process.ENV.BASE_DOMAIN,
  databaseURL: process.ENV.BASE_DB
});

export default base;
