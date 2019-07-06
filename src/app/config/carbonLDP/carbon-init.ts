import {CarbonLDP} from 'carbonldp';
import {PROJECT_SCHEMA, COMMENTS_SCHEMA, USER_SCHEMA} from './schemas';
const BASE_CARBON_URL = 'http://localhost:8083';
const carbon = new CarbonLDP(BASE_CARBON_URL);

carbon.extendObjectSchema('Comment', COMMENTS_SCHEMA);
carbon.extendObjectSchema('Project', PROJECT_SCHEMA);
carbon.extendObjectSchema('User', USER_SCHEMA);

export default carbon;
