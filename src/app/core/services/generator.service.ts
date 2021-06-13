import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  static getNewID(): number {
    return Math.floor(Math.random() * 10);
  }

  generate(n: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    const res = new Array(n).fill(null).reduce<string>(acc => {
      const randomNum = Math.floor(Math.random() * chars.length) + 1;
      return acc += chars[randomNum - 1];
    }, '');

    return res;
  }
}
