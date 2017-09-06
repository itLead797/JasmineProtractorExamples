/**
 * Created by n0215998 on 3/8/2017.
 */

import {browser, element, by} from 'protractor';
import {BasePage} from './base.po';
import {ProductFitField} from './uat/models/field.coverage-conditions.model.po';
import {ProductFitClassCode} from './uat/models/class-code.coverage-conditions.model.po';
import {EligibilityPage} from './eligibility.po';
import {RatingInfoPage} from './ratingInfo.po';
import {UnderwritingPage} from './underwriting.po';
import {QuotePage} from './quote.po';
import ProductFitData = require('./uat/pageObjects/coverage-conditions.data.po');


export class HappyPath extends BasePage {


    openPage(zipCode: string): void {
        let eligibility = new EligibilityPage();
        describe('open page', () => {
            it('for ' + zipCode, () => {
                eligibility.getPage(); // '0548840', 'helpdesk'
                eligibility.setZipCode(zipCode);
            });
        });
    }
    openPageForUser(zipCode: string, user: string, password: string): void {
        let eligibility = new EligibilityPage();
        describe('open page', () => {
            it('for ' + zipCode, () => {
                eligibility.getPage(user, password); // '0548840', 'helpdesk'
                eligibility.setZipCode(zipCode);
            });
        });
    }

    enterClassCode(classCode: ProductFitClassCode): void {
        let eligibility = new EligibilityPage();
        describe('Change Class Code for: ' + classCode.value, () => {
            it('Descr: ' + classCode.description, () => {
                eligibility.setClassCode(classCode.value);
                eligibility.selectClassCodeResult(1);
            });
        });
    }

    changeClassCode(classCode: ProductFitClassCode): void {
        let eligibility = new EligibilityPage();
        describe('Change Class Code for: ' + classCode.value, () => {
            it('Descr: ' + classCode.description, () => {
                eligibility.selectEditClassCode();
                eligibility.setClassCode(classCode.value);
                browser.sleep(2000);
                eligibility.selectClassCodeResult(1);
            });
        });
    }

    checkQuestions(activeQuestion: ProductFitField, classCode: ProductFitClassCode): void {
        let eligibility = new EligibilityPage();

        describe(classCode.value + ': Check Question: ' + activeQuestion.baseId, () => {
            //console.log(activeQuestion.id);
            let messageElement = element(by.id(activeQuestion.id));

            it('Question is displayed', () => {
                eligibility.waitForVisible(messageElement);
                expect(messageElement.isPresent()).toBe(true);
            });

            it('text is: ' + activeQuestion.approvedText, () => {
                expect(messageElement.getAttribute('innerHTML')).toContain(activeQuestion.text);
            });
        });
    }

    answerQuestions(activeQuestion: ProductFitField) {
        describe('answering required questions', () => {
            it('entering question data', () => {
                if (activeQuestion.baseId == 'uwqLMGENRL77') {
                    let liabilityQuestion = element(by.id('coverageConditionsQuestions-uwqLMGENRL77_2Label'));
                    this.waitForAndClick(liabilityQuestion);
                }
                if (activeQuestion.questionType == 'value') {
                    let questionField = element(by.id('coverageConditionsQuestions' + activeQuestion.baseId));
                    this.waitForAndSendKeys(questionField, '0');
                }
            });
        });
    }

    fullPath() {
        describe('Framework POC', () => {
            let eligibility = new EligibilityPage();
            let rating = new RatingInfoPage();
            let underwriting = new UnderwritingPage();
            let quote = new QuotePage();

            it('walk eligibility page', () => {
                eligibility.setEffectiveDate(eligibility.getCurrentDate());
                eligibility.clickLosses();
                eligibility.setEligibilityAcknowledgement();
                eligibility.selectAgency('0');
                eligibility.selectProducer('0');
                eligibility.setLegalEntity(2);
                eligibility.setFirstInsured('Extended HappyPath Test');
                eligibility.setLocationAddress1('10 HappyPath Street');
                eligibility.setLocationAddress2('ste 1');
                eligibility.setPhoneNumber('541-278-9462');
                eligibility.selectAcceptPrimaryAddress();
                eligibility.continue();
                eligibility.selectNoneAboveCreateAccount();
                eligibility.selectNoneAboveExperian();
            });

            it('walk rating info page', () => {
                rating.selectTerritory('001');
                rating.setNumberOfEmployees('25');
                rating.setGrossAnnualRevenues('500000');
                rating.setYearBusinessStarted('2010');
                rating.setBuildingInsuranceNeeded('YES');
                rating.setBuildingLimit('357000');
                rating.setBPPLimit('20000');
                rating.setConstructionType(1);
                rating.setGreaterThan75PctSprinkler();
                rating.setYearBuilt('2010');
                rating.continue();
                // rating.setHeatingUpdated('1965');
                // rating.setHeatingIntegrity('YES');
                // rating.setRoofingUpdated('1965');
                // rating.setRoofingIntegrity('YES');
                // rating.setPlumbingUpdated('1965');
                // rating.setPlumbingIntegrity('YES');
                // rating.setWiringUpdated('1965');
                // rating.setWiringIntegrity('YES');
                rating.setAlarmType(1);
                rating.setNumberOfStories('2');
                rating.setBuildingSize('2000');
                rating.selectItvOverwriteBtn();
                rating.setAreaOccupiedInsured('1000');
                rating.setOccupiedByOthers('1000');
                rating.setPercentagePartialResidential('2');
                rating.selectOtherTenantOperations('No');
                rating.continueNextPage();
            });

            it('walk underwriting page', () => {
                underwriting.clickEmploymentRelatedPractices();
                underwriting.selectAdditionalInsured('Yes');
                underwriting.continue();
            });

            it('walk quote page', () => {
                quote.continue();
            });
        });
    }


}

