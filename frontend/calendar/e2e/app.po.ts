import { browser, element, by } from 'protractor';

export class CalendarPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cs-root h1')).getText();
  }
}
