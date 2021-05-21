import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service intl;

  @action
  updateLanguage(language) {
    if (language === 'english') {
      this.intl.setLocale(['en-us']);
    } else {
      this.intl.setLocale(['de-de']);
    }
  }
}
