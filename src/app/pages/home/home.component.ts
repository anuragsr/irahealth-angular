import { Component } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LangService } from '../../utils/lang/lang-service.service';
import { l } from '../../utils/helpers'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  lang: string = 'hi'

  constructor(
    private service: TranslocoService,
    private langService: LangService
  ) {
    this.langService.langSet$.subscribe((lang: string) => {
      l("Lang:", lang)
      this.lang = lang
      this.service.setActiveLang(lang)
    })
  }
}
