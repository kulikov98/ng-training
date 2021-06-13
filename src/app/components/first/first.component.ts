import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { ConstantsService, IConstantsService } from 'src/app/core/services/constants.service';
import { GeneratedString } from 'src/app/core/services/generator.factory';
import { ILocalStorageService, LocalStorageService } from 'src/app/core/services/local-storage.service';


enum Category {
  'one',
  'two',
  'tree',
}

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  name = 'some name';
  description = 'some description';
  price = 99.9;
  category = Category;
  isAvailable = false;

  advantages: Array<{ value: string }> = [
    { value: 'low price' },
    { value: 'pefect condition' },
    { value: 'nice color' },
  ];

  constructor(
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() @Inject(ConstantsService) private constantsService: IConstantsService,
    @Optional() @Inject(GeneratedString) private generatedString: string,
    @Optional() @Inject(LocalStorageService) private localStorageService: ILocalStorageService,
  ) { }

  ngOnInit(): void {
    console.log(this.configOptionsService);

    console.log('constantsService', this.constantsService);
    console.log('generatedString', this.generatedString);

    this.localStorageService.setItem('test', 'testValue');
    console.log(this.localStorageService.getItem('test'));
    this.localStorageService.clear();
  }

}
