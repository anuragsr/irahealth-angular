import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { LangService } from './utils/lang/lang-service.service';

import { l } from './utils/helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LangService]
})
export class AppComponent {
  title: string = 'irahealth';
  lang: string = 'hi';
  checked: boolean = false;

  constructor(
    private service: TranslocoService,
    private langService: LangService,
    public router: Router
  ){
    // To listen from other components and broadcast everywhere
    // this.langService.langGet$.subscribe((lang: string) => {
    //   l("Lang:", lang)
    //   this.lang = lang
    //   this.broadcast()
    // })
  }

  ngOnInit(): void {
    console.log(this.service.getActiveLang())
    this.service.setActiveLang('hi')
  }

  changeLang(value){
    this.checked = value
    this.lang = value ? 'en' : 'hi'
    this.broadcast()
    // this.service.setActiveLang(value ? 'en' : 'hi')
  }

  broadcast() {
    this.langService.setLang(this.lang)
  }
}
