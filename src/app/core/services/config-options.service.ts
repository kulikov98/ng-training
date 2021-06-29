import { Injectable } from '@angular/core';
import { IConfigOptions } from './IConfigOptions';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: Partial<IConfigOptions> = {};

  setConfig(config: Partial<IConfigOptions>): void {
    this.config = { ...this.config, ...config };
  }

  getConfig(): Partial<IConfigOptions> {
    return { ...this.config };
  }
}
