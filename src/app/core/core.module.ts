import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { constants, ConstantsService } from './services/constants.service';
import { GeneratorService } from './services/generator.service';
import { GeneratedString, GeneratorFactory } from './services/generator.factory';
import { LocalStorageService as LSService } from './services/local-storage.service';
import { ConfigOptionsService } from './services/config-options.service';


const LocalStorageService = new InjectionToken<string>('LocalStorageService');

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ConfigOptionsService,
    { provide: ConstantsService, useValue: constants },
    { provide: GeneratedString, useFactory: GeneratorFactory(10), deps: [GeneratorService] },
    { provide: LocalStorageService, useValue: LSService }
  ]
})
export class CoreModule { }
