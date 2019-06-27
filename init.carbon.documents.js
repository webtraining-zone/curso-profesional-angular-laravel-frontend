let {CarbonLDP} = require('carbonldp');

const BASE_CARBON_URL = 'http://localhost:8083';
let carbon = new CarbonLDP(BASE_CARBON_URL);

carbon.documents.$exists('projects').then((exist) => {
  if (!exist) {
    carbon.documents.$create('/', {}, 'projects');
  }
}).catch(e => console.log(e));

carbon.documents.$exists('en').then((exist) => {
  if (!exist) {
    carbon.documents.$create('/', {}, 'en');
  }
}).catch(e => console.log(e));

carbon.documents.$exists('es').then((exist) => {
  if (!exist) {
    carbon.documents.$create('/', {}, 'es');
  }
}).catch(e => console.log(e));

carbon.documents.$exists('users').then((exist) => {
  if (!exist) {
    carbon.documents.$create('/', {}, 'users');
  }
}).catch(e => console.log(e));



