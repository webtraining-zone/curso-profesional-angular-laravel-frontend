import {CarbonLDP} from 'carbonldp';
import {BASE_CARBON_LDP_SCHEMA, COMMENTS_SCHEMA, PROJECT_SCHEMA, USER_SCHEMA} from './schemas';

const BASE_CARBON_URL = 'http://localhost:8083';
const carbon = new CarbonLDP(BASE_CARBON_URL);

carbon.extendObjectSchema(BASE_CARBON_LDP_SCHEMA);
carbon.extendObjectSchema('Comment', COMMENTS_SCHEMA);
carbon.extendObjectSchema('Project', PROJECT_SCHEMA);
carbon.extendObjectSchema('User', USER_SCHEMA);

export default carbon;
