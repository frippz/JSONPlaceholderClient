import ky from 'ky';
import { apiBaseUrl } from '$lib/config';

/**
 * Set up the API call
 */
export const api = ky.create({
  prefixUrl: apiBaseUrl,
  hooks: {
    beforeRequest: [
      async (request) => {
        request.headers.set('Content-Type', 'application/json');
      },
    ],
    afterResponse: [
      async (request, _options, response) => {
        if (response.status === 403) {
          request.headers.set('Content-Type', 'application/json');
        }
      },
    ],
  },
  retry: {
    limit: 10,
    backoffLimit: 1000,
  },
  timeout: 15000,
});
