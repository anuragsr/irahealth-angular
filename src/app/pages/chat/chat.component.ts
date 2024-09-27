import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { LangService } from '../../utils/lang/lang-service.service';
import { l } from '../../utils/helpers';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  lang = 'en';

  ngOnInit(): void {}

  constructor(
    private service: TranslocoService,
    private langService: LangService
  ) {
    this.langService.langSet$.subscribe((lang: string) => {
      l('Lang:', lang);
      this.lang = lang;
      this.service.setActiveLang(lang);
    });
  }
}
