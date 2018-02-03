import { Request } from 'request';

class OpenDotaAPI {
    constructor() {
        { apiKey } = keyObject.apiKey;
        this.apiKey = apiKey;
        this.methods = {
            lists: {
                subscribe({ list_id, subscriber_hash }) {
                  return { type: 'PUT', endpoint: `/lists/${list_id}/members/${subscriber_hash}` };
                },
            },        
        }
    }

    buildRequestArguments(type, params) {
        const payload = { auth: `mailchimp:${this.apiKey}` };
    
        if (type === 'GET') {
          payload.params = params || {};
        } else {
          payload.data = params || {};
        }
    
        return payload;
    }

    request(action, params) {
        const type = action.type;
        const url = `https://us8.api.mailchimp.com/3.0${action.endpoint}`;
        const args = this.buildRequestArguments(type, params);
        const request = HTTP.call(type, url, args);
    
        if (request.error) return request.error;
        return request;
    }

    action(action, method, params) {
        const methodToCall = this.methods[action][method](params);
        return this.request(methodToCall, params);
    }

    lists(method, params) {
        return this.action('lists', method, params);
    }
}

export const OpenDotaWrapper = new OpenDotaAPI();