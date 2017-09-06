/**
 * Created by n0215998 on 8/24/2017.
 */
//import { EligibilityPage } from '../eligibility.po';
import { browser, element, by, ExpectedConditions, promise, ElementFinder, Key } from 'protractor';

describe('eligibility page verification', function () {
    let EC = ExpectedConditions;
    //let eligibility: EligibilityPage = new EligibilityPage();

    let zipCodeElement = element(by.id('zipCode')); //  <input id="zipCode"></input>
    let zipCodeClassElement = element(by.css('input-wrapper')); // <div class="input-wrapper"></div>
    let zipCodeModelElement = element(by.model('displayData')); // <div *ngIf="displayData.fields ...  //  *ngIf="!zipCode.valid ...
    let zipCodeBindingElement = element(by.binding('value'));  // <span ng-bind="name">'value'</span>
    let zipCodeButtonTextElement = element(by.buttonText('Save'));  // <button>Save</button>
    let zipCodePartialButtonTextElement = element(by.partialButtonText('Save'));  // <button>Save All</button>
    let zipCodePartialLinkElement = element(by.cssContainingText('td', 'Cell A')); // <table><tr><td>Cell A</td></tr></table>


    it('open Browser', () => {
        browser.get('/'); //Smoke test can bypass login in dev
        this.waitForVisible(zipCodeElement, 400000);
    });

    it('demo tests', () => {
        expect(EC.visibilityOf(zipCodeElement));
        expect(EC.visibilityOf(zipCodeClassElement));
        expect(EC.visibilityOf(zipCodeModelElement));
    });


});
