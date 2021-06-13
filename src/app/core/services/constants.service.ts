import { InjectionToken } from '@angular/core';

export interface IConstantsService {
  [key: string]: string;
}

export const constants = {
  App: 'TaskManager',
  ver: '1.0',
  API_URL: 'http://...',
};

export const ConstantsService = new InjectionToken<string>('ConstantsService');
