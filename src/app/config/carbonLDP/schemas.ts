// Constants for CarbonLDP Schemas
export const BASE_CARBON_LDP_SCHEMA: any = {
  wt: 'http://www.webtraining.zone/ns#',
};

export const PROJECT_SCHEMA = {
  id: {
    '@type': 'string'
  },
  comments: {
    '@container': '@set',
    '@type': '@id'
  }
};

export const USER_SCHEMA = {
  email: {
    '@type': 'string'
  },
  comments: {
    '@container': '@set',
    '@type': '@id'
  }
};

export const COMMENTS_SCHEMA = {
  author: {
    '@type': '@id'
  },
  project: {
    '@type': '@id'
  },
  content: {
    '@type': 'string'
  }
};


export const COMMENTS_CONTAINER = 'comments/';
