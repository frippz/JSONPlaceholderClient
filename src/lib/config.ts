import {
  PUBLIC_VERSION,
  PUBLIC_BUILD_TIME,
  PUBLIC_SITE_TITLE,
  PUBLIC_BASE_URL,
  PUBLIC_API_BASE_URL,
  PUBLIC_SITE_FOLDER,
} from '$env/static/public';

export const version = PUBLIC_VERSION || '';
export const buildTime = PUBLIC_BUILD_TIME || '';
export const siteTitle = PUBLIC_SITE_TITLE || '';
export const baseUrl = PUBLIC_BASE_URL || '';
export const siteFolder = PUBLIC_SITE_FOLDER || '';
export const apiBaseUrl = PUBLIC_API_BASE_URL || '';
