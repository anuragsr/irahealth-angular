import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  constructor() { }

  // Observable string sources
  private langSetSource = new Subject<string>()
  private langGetSource = new Subject<string>()

  // Observable string streams
  langSet$ = this.langSetSource.asObservable()
  langGet$ = this.langGetSource.asObservable()

  // Service message commands
  setLang(lang: string) {
    this.langSetSource.next(lang)
  }

  getLang(lang: string) {
    this.langGetSource.next(lang)
  }
}
