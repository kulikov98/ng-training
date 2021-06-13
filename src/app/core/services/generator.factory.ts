import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const GeneratorFactory = (n: number) => {
    return (generator: GeneratorService) => generator.generate(n);
};

export const GeneratedString = new InjectionToken<string>('GeneratedString');
