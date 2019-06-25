import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getFieldByLocale',
})
export class GetFieldByLocalePipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) protected localeId: string) {
  }

  transform(value: any, args?: any): any {
    if (value[args]) {
      const locale = this.localeId === 'en-US' ? 'en' : this.localeId;
      const localizedTranslation = this.getTranslationByLocale(
        value.translations, locale);
      return localizedTranslation[args];
    }

    return null;
  }

  getTranslationByLocale(translations, locale) {
    const localizedTranslationArray = translations.filter(
      translation => translation.locale === locale);
    if (Array.isArray(localizedTranslationArray) &&
      localizedTranslationArray.length > 0) {
      return localizedTranslationArray[0];
    }

    return null;
  }

}
