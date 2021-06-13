import { Injectable } from '@angular/core';

export interface ILocalStorageService {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  clear(): void;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements ILocalStorageService {

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  clear(): void {
    localStorage.clear();
  }
}
