import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';
import {LangService} from '../../utils/lang/lang-service.service';
import {l} from '../../utils/helpers';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  lang: string = 'hi'
  visibleForm: string = 'login'

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

  ngOnInit(): void {
    const sliderConfig = {
      auto: true,
      // autoDelay: 4000,
      // pause: 10000,
      controls: false,
      // adaptiveHeight: true,
    }
    $('.bxslider').bxSlider(sliderConfig);
  }

}
