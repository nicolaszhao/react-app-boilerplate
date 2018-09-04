import { API_ENV } from './env';

// for browser history of react-router
export const APP_BASE_URL = process.env.NODE_ENV === 'development' ? '/' : '/';

export const API_BASE_URL = `//${API_ENV ? `${API_ENV}.` : ''}nz.com/api`;
