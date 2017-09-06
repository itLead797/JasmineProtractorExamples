/**
 * Created by n0215998 on 6/24/2016.
 */
import { browser, element, by, Key } from 'protractor';
import { BasePage } from '../../base.po';
import { ProductFitField } from '../models/field.coverage-conditions.model.po';
import { ProductFitClassCode } from '../models/class-code.coverage-conditions.model.po';
import { ProductFitZipCode } from '../models/zip-code.coverage-conditions.model.po';
import { ProductFitLob } from '../models/lob.coverage-conditions.model.po';
import { EligibilityPage } from '../../eligibility.po';
//import { ScenarioDataModel } from '../models/scenarioData.model.po';
//import { DefaultDataModel } from '../models/defaultData.model.po';

// -------Begin function list ------------------------------------------------------------
// -------- general use functions ------------------------------------

export class ProductFitPage extends BasePage {

    // -------- Logging functions ------------------------------------

    logTestSummaryReport(questions: Array<ProductFitField>) {
        console.log('Testing Summary Report');
        console.log('Number                         ID    RuleType  Relationship  ToBeTested   Question Text');
        console.log('------                         --    --------  ------------  ----------   -------------');

        for (let i: number = 0; i < questions.length; i++) {
            let numPad: string = '      ';
            let idPad: string = '                        ';
            let pad: string = '            ';
            let num: string = (numPad + questions[i].num).slice(-numPad.length);
            let baseId: string = (idPad + questions[i].baseId).slice(-idPad.length);
            let ruleType: string = (pad + questions[i].ruleType).slice(-pad.length);
            let relationship: string = (pad + questions[i].relationship).slice(-pad.length);
            let toBeTested: string = (pad + questions[i].toBeTested).slice(-pad.length);
            let text: string = questions[i].text[0];

            console.log(num + '   ' + baseId + ruleType + relationship + '  ' + toBeTested + '   ' + text);
        }

        let count: number = 0;
        for (let i: number = 0; i < questions.length; i++) {
            if (questions[i].approvedText[0] != questions[i].text[0]) {
                count++;
            }
        }
        // console.log('\nNumber of differences in the question text: ' + count);

        for (let i: number = 0; i < questions.length; i++) {
            if (questions[i].approvedText[0] != questions[i].text[0]) {
                console.log('\n' + questions[i].num + ' (' + questions[i].baseId + ') \t toBeTested: ' +
                    questions[i].toBeTested + '  \t lastReviewed: ' + questions[i].approvedTextReviewDate +
                    '\n\t Approved: ' + questions[i].approvedText +
                    '\n\t Actual:   ' + questions[i].text + '\n');
            }
        }
        console.log('');
    }

    logZipCodesToRun(zipCodeData: Array<ProductFitZipCode>) {
        console.log('State  Zip Code  toBeTested');
        console.log('-----  --------  ----------');

        for (let i = 0; i < zipCodeData.length; i++) {
            console.log(zipCodeData[i].state + '    ' + zipCodeData[i].value + '     ' + zipCodeData[i].toBeTested);
        }
        console.log('');
    }

    logClassCodesToRun(classCodeData: Array<ProductFitClassCode>) {
        console.log('toBeTested  ClassCode  Description  ');
        console.log('----------  ---------  -----------');

        for (let i = 0; i < classCodeData.length; i++) {
            if(classCodeData[i].toBeTested) {
                console.log(classCodeData[i].toBeTested + '\t' + classCodeData[i].value + '\t' + classCodeData[i].description);
            } else {
                console.log(classCodeData[i].toBeTested + '\t' + classCodeData[i].value + '\t' + classCodeData[i].description);
            }
        }
        console.log('');
    }
    logLobsToRun(lobs: Array<ProductFitLob>) {
        let tempActiveTable: Array<string> = [];
        let tempInactiveTable: Array<string> = [];

        for (let countNum = 0; countNum < lobs.length; countNum++) {
            if (lobs[countNum].toBeTested == true) {
                tempActiveTable.push(lobs[countNum].value);
            } else {
                tempInactiveTable.push(lobs[countNum].value);
            }
        }
        console.log('Testing turned ON for LOBs:  ' + JSON.stringify(tempActiveTable));
        console.log('Testing turned OFF for LOBs: ' + JSON.stringify(tempInactiveTable));
        return tempActiveTable;
    }

    logTestsToRun(activeTable: Array<ProductFitField>, inActiveTable: Array<ProductFitField>, classCodeData: ProductFitClassCode) {
        let tempActiveTable: Array<string> = [];
        let tempInactiveTable: Array<string> = [];

        for (let countNum: number = 0; countNum < activeTable.length; countNum++) {
            tempActiveTable.push(activeTable[countNum].num);
        }
        for (let countNum: number = 0; countNum < inActiveTable.length; countNum++) {
            tempInactiveTable.push(inActiveTable[countNum].num);
        }
        console.log('Tests to Run:');
        console.log('Positive testing for ' + classCodeData.value + ':  ' + JSON.stringify(tempActiveTable));
        console.log('Negative testing for ' + classCodeData.value + ':  ' + JSON.stringify(tempInactiveTable));
        console.log('');
    }

    logOnOffTestParameters(classCodeData: Array<ProductFitClassCode>, productFitQuestion: Array<ProductFitField>) {
        let tempClassCodeOn: Array<string> = [];
        let tempClassCodeOff: Array<string> = [];
        let tempProductFitOn: Array<string> = [];
        let tempProductFitOff: Array<string> = [];

        for (let i: number = 0; i < classCodeData.length; i++) {
            if (classCodeData[i].toBeTested == true) {
                tempClassCodeOn.push(classCodeData[i].value);
            }
        }
        for (let i: number = 0; i < classCodeData.length; i++) {
            if (classCodeData[i].toBeTested == false) {
                tempClassCodeOff.push(classCodeData[i].value);
            }
        }
        for (let i: number = 0; i < productFitQuestion.length; i++) {
            if (productFitQuestion[i].toBeTested == true) {
                tempProductFitOn.push(productFitQuestion[i].num);
            }
        }
        for (let i: number = 0; i < productFitQuestion.length; i++) {
            if (productFitQuestion[i].toBeTested == false) {
                tempProductFitOff.push(productFitQuestion[i].num);
            }
        }
        console.log('ClassCodes turned ON:  ' + JSON.stringify(tempClassCodeOn));
        console.log('ClassCodes turned OFF: ' + JSON.stringify(tempClassCodeOff));
        console.log('Questions turned ON:   ' + JSON.stringify(tempProductFitOn));
        console.log('Questions turned OFF:  ' + JSON.stringify(tempProductFitOff));
        console.log('');
    }

    // -------- setup functions --------------------------------------

    getPage(): void {
        this.login().then(() => {
            browser.get('/');
        });
    }

    selectPage(location: string) {
        // opens the NGI browser interface
        let pageLocation = element(by.id('eligibilityTab'));  // Eligibility page

        if (location == 'ratingInfo') {
            pageLocation = element(by.id('ratingInfoTab')); // Rating Info page
        }
        if (location == 'underwriting') {
            pageLocation = element(by.id('underwritingTab')); // Underwriting page
        }
        if (location == 'quote') {
            pageLocation = element(by.id('premiumSummaryTab')); // Quote page
        }
        this.waitForVisible(pageLocation);
        pageLocation.click();
    }


    enterZipCode(zip: string) {
        // enters the zip code into the zip code field
        // let zipCode:protractor.ElementFinder = element(by.id('zipCode'));
        let zipCode = element(by.id('zipCode'));

        this.waitForVisible(zipCode, 30000);
        zipCode.click();
        this.sendKeys(zipCode, zip);
        zipCode.sendKeys(Key.ENTER);
    }

    enterClassCode(classCodeData: ProductFitClassCode) {
        // enters a class code into the class code field
        let classCodeField = element(by.id('txtClassSearch'));

        this.waitForVisible(classCodeField);
        classCodeField.click();
        this.sendKeys(classCodeField, classCodeData.value); // enter class code

    }

    selectClassCodeDropdown(classCodeData: ProductFitClassCode) {
        // selects a specified dropdown item from the list provided
        let classCodeField = element(by.id('txtClassSearch'));
        let appetiteGuideElement = element(by.css('appetite-guide'));
        //  let classCodeDropdown:protractor.ElementFinder = element(by.css('#txtClassResult a:first-child'));
        let classCodeDropdown = element(by.css('#classSearchOptions > div > ul > li > a > span'));

        browser.sleep(3000);
        this.waitForVisible(classCodeDropdown);
        classCodeDropdown.click();
        expect(classCodeField.getAttribute('value')).toEqual(classCodeData.description);
        this.waitForVisible(appetiteGuideElement);
    }

    clearClassCodeField() {
        // selects the 'X' to clear the class code field
        // let clearClassCodeIcon:protractor.ElementFinder = element(by.className('fa-times'));
        let clearClassCodeIcon = element(by.className('btn btn-link right fa fa-remove'));


        this.waitForVisible(clearClassCodeIcon);
        expect(clearClassCodeIcon.isPresent()).toBe(true);
        clearClassCodeIcon.click();
    }

    selectLob(lob: string, selector: string, selectedLobs: Array<string>) {
        // select or deselect a LOB from the appetite display
        // updates a variable array to contain the currently selected LOBs
        if (selector == 'd') {
            this.waitForVisible(element(by.id(lob)));
            expect(element(by.id(lob)).isPresent()).toBe(true);
            element(by.id(lob)).click();
            for (let lobCnt = 0; lobCnt < selectedLobs.length; lobCnt++) {
                if (selectedLobs[lobCnt] == lob) {
                    selectedLobs.splice(lobCnt, 1);
                }
            }
            browser.manage().timeouts().implicitlyWait(5000);
        } else {
            this.waitForVisible(element(by.id(lob)));
            expect(element(by.id(lob)).isPresent()).toBe(true);
            element(by.id(lob)).click();
            expect(element(by.id(lob + '_control')).isSelected()).toBe(true);
            selectedLobs.push(lob);
            browser.manage().timeouts().implicitlyWait(5000);
        }
        return selectedLobs;
    }

    // ----------------- Initial Scope of testing functions -----------------------
    buildAllTestableZipCodes(zipCodeTbl: Array<ProductFitZipCode>) {
        let zipTable: Array<ProductFitZipCode> = [];

        // build table of all testable questions (tests turned ON)
        for (let tblCnt: number = 0; tblCnt < zipCodeTbl.length; tblCnt++) {
            if (zipCodeTbl[tblCnt].toBeTested == true) {
                zipTable.push(zipCodeTbl[tblCnt]);
            }
        }
        return zipTable;
    }

    buildTestableZipCodes(part: string, zipCodeData: Array<ProductFitZipCode>) {
        // builds a table of zip codes
        let selectedzipCodes: Array<ProductFitZipCode> = [];

        if (part == 'all') {
            for (let i: number = 0; i < zipCodeData.length; i++) {
                if (zipCodeData[i].toBeTested) {
                    selectedzipCodes.push(zipCodeData[i]);
                }
            }
        } else {
            for (let i: number = 0; i < zipCodeData.length; i++) {
                if (zipCodeData[i].state == part) {
                    selectedzipCodes.push(zipCodeData[i]);
                }
            }
        }
        return selectedzipCodes;
    }

    buildTestableClassCodes(part: string, ClassCodeData: Array<ProductFitClassCode>) {
        // builds a table of class codes separating the table in half (pt1 & pt2)
        let selectedClassCodes: Array<ProductFitClassCode> = [];
        if (part == 'pt1') {
            for (let i: number = 0; i < 2; i++) {
                if (ClassCodeData[i].toBeTested) {
                    selectedClassCodes.push(ClassCodeData[i]);
                }
            }
        }
        if (part == 'pt2') {
            for (let i: number = 2; i < ClassCodeData.length; i++) {
                if (ClassCodeData[i].toBeTested) {
                    selectedClassCodes.push(ClassCodeData[i]);
                }
            }
        }
        if (part == 'all') {
            for (let i: number = 0; i < ClassCodeData.length; i++) {
                if (ClassCodeData[i].toBeTested) {
                    selectedClassCodes.push(ClassCodeData[i]);
                }
            }
        } else {
            for (let i: number = 0; i < ClassCodeData.length; i++) {
                if (ClassCodeData[i].value == part) {
                    selectedClassCodes.push(ClassCodeData[i]);
                }
            }
        }
        return selectedClassCodes;
    }

    buildAllTestableQuestionsTable(questionTbl: Array<ProductFitField>) {
        let newActiveTable: Array<ProductFitField> = [];

        // build table of all testable questions (tests turned ON)
        for (let seqNum: number = 0; seqNum < questionTbl.length; seqNum++) {
            if (questionTbl[seqNum].toBeTested && (questionTbl[seqNum].relationship == 'parent' || questionTbl[seqNum].relationship == 'single')) {
                newActiveTable.push(questionTbl[seqNum]);
            }
        }
        return newActiveTable;
    }

    buildInactiveQuestionTable(sourceList: Array<string>, fitQuestion: Array<ProductFitField>) {
        // build table of testable questions NOT associated to a specific class code, and turned ON
        let questionTable: Array<ProductFitField> = fitQuestion.slice();
        let sourceTable: Array<string> = sourceList.slice();
        let newInactiveTable: Array<ProductFitField> = [];

        // remove matching question IDs from the fit question array
        for (let n: number = 0; n < questionTable.length; n++) {
            if (questionTable[n].toBeTested == false) {
                questionTable.splice(n, 1);
            }
        }
        for (let i: number = 0; i < sourceTable.length; i++) {
            for (let n: number = 0; n < questionTable.length; n++) {
                if (sourceTable[i] == questionTable[n].id) {
                    questionTable.splice(n, 1);
                }
            }
        }
        for (let i: number = 0; i < questionTable.length; i++) {
            newInactiveTable.push(questionTable[i]);
        }
        return newInactiveTable;
    }

    buildActiveQuestionTableByClassCode(sourceList: Array<string>, fitQuestion: Array<ProductFitField>) {
        // build table of testable questions (which ARE) associated to a specific class code, and turned ON
        let questionTable: Array<any> = fitQuestion.slice();
        let sourceTable: Array<string> = sourceList.slice();
        let newActiveTable: Array<any> = [];

        // remove matching question IDs from the fit question array
        for (let classCodeNum: number = 0; classCodeNum < sourceTable.length; classCodeNum++) {
            for (let seqNum: number = 0; seqNum < questionTable.length; seqNum++) {
                if (questionTable[seqNum].id == sourceTable[classCodeNum] && questionTable[seqNum].toBeTested == true) {
                    if (questionTable[seqNum].relationship == 'child') {
                        /// do nothing
                    } else {
                        newActiveTable.push(questionTable[seqNum]);
                    }
                }
            }
        }
        return newActiveTable;
    }

    buildTerminalQuestionTable(fitQuestion: Array<any>) {
        let questionTable: Array<any> = fitQuestion.slice();
        let newActiveTable: Array<any> = [];

        // remove matching question IDs from the fit question array
        for (let i: number = 0; i < questionTable.length; i++) {
            if (questionTable[i].ruleType == 'terminal') {
                newActiveTable.push(questionTable[i]);
            }
        }
        return newActiveTable;
    }

    buildProductFitQuestionTable(fitQuestion: Array<any>) {
        let questionTable: Array<any> = fitQuestion.slice();
        let newActiveTable: Array<any> = [];

        // remove matching question IDs from the fit question array
        for (let i: number = 0; i < questionTable.length; i++) {
            if (questionTable[i].ruleType == 'productFit') {
                newActiveTable.push(questionTable[i]);
            }
        }
        return newActiveTable;
    }

    buildChildQuestions(idNum: Array<string>, fitQuestion: Array<ProductFitField>) {
        // build an array of child question objects
        let childList: Array<ProductFitField> = [];
        let questions: Array<ProductFitField> = fitQuestion.slice();

        for (let n: number = 0; n < idNum.length; n++) {         // look through list of children in the question object
            for (let i: number = 0; i < questions.length; i++) { // look through the list of questions
                if (idNum[n] == questions[i].num) {             // find a matching num value
                    if (questions[i].toBeTested) {              // only add questions turned on for testing
                        childList.push(questions[i]);           // add the question object to a new array of child questions
                    }
                }
            }
        }
        return childList;
    }

    buildActiveTableWithInclude(field: string, value: any, questionList: Array<ProductFitField>) {
        let newActiveTable: Array<ProductFitField> = [];

        if (field == 'seq') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].seq == value) {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'num') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].num == value) {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'ruleType') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].ruleType == value) {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'toBeTested') {
            for (let i = 0; i < questionList.length; i++) {
                if (value == 'true') {
                    if (questionList[i].toBeTested) {
                        newActiveTable.push(questionList[i]);           // add the object to a new array
                    }
                }
                if (value == 'false') {
                    if (questionList[i].toBeTested) {
                        // skip toBeTested == true questions
                    } else {
                        newActiveTable.push(questionList[i]);           // add the object to a new array
                    }
                }
            }
        }
        if (field == 'id') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].id == value) {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'pageLocation') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].pageLocation == value) {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'baseId') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].baseId == value) {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'zipCode') {
            for (let i = 0; i < questionList.length; i++) {
                for (let n = 0; n < questionList[i].zipCode.length; n++) {
                    if (questionList[i].zipCode == value) {
                        newActiveTable.push(questionList[i]);           // add the object to a new array
                    }
                }
            }
        }
        if (field == 'lobs') {
            for (let i = 0; i < questionList.length; i++) {
                for (let n = 0; n < questionList[i].zipCode.length; n++) {
                    if (questionList[i].lobs == value) {
                        newActiveTable.push(questionList[i]);           // add the object to a new array
                    }
                }
            }
        }
        if (field == 'relationship') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].relationship == value) {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'children') {
            for (let i = 0; i < questionList.length; i++) {
                for (let n = 0; n < questionList[i].zipCode.length; n++) {
                    if (questionList[i].children == value) {
                        newActiveTable.push(questionList[i]);           // add the object to a new array
                    }
                }
            }
        }
        if (field == 'questionType') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].questionType == value) {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'testValues') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].testValues == value) {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }

        if (field == 'text') {
            for (let i = 0; i < questionList.length; i++) {
                for (let n = 0; n < questionList[i].text.length; n++) {
                    if (questionList[i].text == value) {
                        newActiveTable.push(questionList[i]);           // add the object to a new array
                    }
                }
            }
        }
        return newActiveTable;
    }

    buildActiveTableWithFilter(field: string, value: any, questionList: Array<ProductFitField>) {
        let newActiveTable: Array<ProductFitField> = [];

        if (field == 'seq') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].seq == value) {
                    // do nothing
                } else {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'num') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].num == value) {
                    // do nothing
                } else {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'ruleType') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].ruleType == value) {
                    // do nothing
                } else {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'toBeTested') {
            for (let i = 0; i < questionList.length; i++) {
                if (value == 'true') {
                    if (questionList[i].toBeTested) {
                        // do nothing
                    } else {
                        newActiveTable.push(questionList[i]);           // add the object to a new array
                    }
                }
                if (value == 'false') {
                    if (questionList[i].toBeTested) {
                        newActiveTable.push(questionList[i]);           // add the object to a new array
                    }
                }
            }
        }
        if (field == 'id') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].id == value) {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'pageLocation') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].pageLocation == value) {
                    // do nothing
                } else {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'baseId') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].baseId == value) {
                    // do nothing
                } else {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'zipCode') {
            for (let i = 0; i < questionList.length; i++) {
                for (let n = 0; n < questionList[i].zipCode.length; n++) {
                    if (questionList[i].zipCode == value) {
                        // do nothing
                    } else {
                        newActiveTable.push(questionList[i]);           // add the object to a new array
                    }
                }
            }
        }
        if (field == 'lobs') {
            for (let i = 0; i < questionList.length; i++) {
                for (let n = 0; n < questionList[i].zipCode.length; n++) {
                    if (questionList[i].lobs == value) {
                        // do nothing
                    } else {
                        newActiveTable.push(questionList[i]);           // add the object to a new array
                    }
                }
            }
        }
        if (field == 'relationship') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].relationship == value) {
                    // do nothing
                } else {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'children') {
            for (let i = 0; i < questionList.length; i++) {
                for (let n = 0; n < questionList[i].zipCode.length; n++) {
                    if (questionList[i].children == value) {
                        // do nothing
                    } else {
                        newActiveTable.push(questionList[i]);           // add the object to a new array

                    }
                }
            }
        }
        if (field == 'questionType') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].questionType == value) {
                    // do nothing
                } else {
                    newActiveTable.push(questionList[i]);           // add the object to a new array
                }
            }
        }
        if (field == 'testValues') {
            for (let i = 0; i < questionList.length; i++) {
                if (questionList[i].testValues == value) {
                    // do nothing
                } else {
                    newActiveTable.push(questionList[i]);           // add the object to a new array

                }
            }
        }
        if (field == 'text') {
            for (let i = 0; i < questionList.length; i++) {
                for (let n = 0; n < questionList[i].text.length; n++) {
                    if (questionList[i].text == value) {
                        // do nothing
                    } else {
                        newActiveTable.push(questionList[i]);           // add the object to a new array
                    }
                }
            }
        }
        return newActiveTable;
    }
    // ---------------- Style Guide Validation -----------------------------
    checkStyleOfQuestions(questionId: any) {
        // validates display according to style guide.
        it('Checking question font style ', () => {
            // expect(questionId.getCssValue('font-family')).toContain('FontAwesome');
            expect(questionId.getCssValue('font-family')).toContain('Arial');
            expect(questionId.getCssValue('font-family')).toContain('Helvetica Neue');
            expect(questionId.getCssValue('font-family')).toContain('Helvetica');
            expect(questionId.getCssValue('font-family')).toContain('sans-serif');
        });
        // it('Checking question font size ', () => {
        //     expect(questionId.getCssValue('font-size')).toContain('15px');  // translated rem value: 1.5
        //  expect(questionId.getCssValue('font-size')).toContain('14px');  // translated rem value: 1.5
        // });
        it('Checking question font color ', () => {
            expect(questionId.getCssValue('color')).toContain('rgba(97, 98, 101, 1)'); // translated hex value: #616265
        });

        if (questionId.questionType == 'yesNo') {
            it('Checking question text page alignment ', () => {
                expect(questionId.getCssValue('text-align')).toContain('left');
            });
        }
    }

    checkStyleOfTerminateAlert(questionId: ProductFitField) {
        let message = element(by.css('#terminalRiskResponseDialog > div > div > p'));
        it('Checking terminal message(style): text', () => {
            this.waitForVisible(message);
            expect(message.isPresent()).toBe(true);
            // expect(terminateMessage.getAttribute('innerHTML')).toContain('The coverage you have selected is unavailable based on the information you have provided.');
            expect(message.getAttribute('innerHTML')).toContain(questionId.agentMessage);
        });
        it('Checking terminal message(style): font style ', () => {
            expect(message.getCssValue('font-family')).toContain('Arial');
            expect(message.getCssValue('font-family')).toContain('Helvetica Neue');
            expect(message.getCssValue('font-family')).toContain('Helvetica');
            expect(message.getCssValue('font-family')).toContain('sans-serif');
        });
        it('Checking terminal message(style): font size ', () => {
            expect(message.getCssValue('font-size')).toContain('15px');  // translated rem value: 1.5
        });

        it('Checking terminal message font color ', () => {
            // expect(message.getCssValue('color')).toContain('rgba(255, 255, 255, 1))'); // translated 'white'
        });
        it('Checking terminal message border color ', () => {
            // expect(terminateMessage.getCssValue('border-color')).toContain('rgba(201, 40, 45, 1)))'); // translated hex value: #c9282d (red)
            expect(message.getCssValue('border-color')).toContain('rgb(255, 255, 255)'); // translated hex value: #c9282d (red)

        });
        it('Checking terminal message background color ', () => {
            // expect(terminateMessage.getCssValue('background-color')).toContain('rgba(201, 40, 45, 1))'); // translated hex value: #c9282d (red)
            expect(message.getCssValue('background-color')).toContain('rgba(0, 0, 0, 0)'); // translated hex value: #c9282d (red)

        });

    }

    checkStyleOfWarningDialogue(questionId: ProductFitField) {
        let message = element(by.css('#eligibilityWarningDialog > div > div.dialog > p'));
        let messageText: string = 'The coverage you have selected is unavailable in NGI based on the information you have provided. You will be re-directed to eCLIQ. Please select a coverage other than BOP in eCLIQ';

        it('Checking terminal message(style): text', () => {
            this.waitForVisible(message);
            expect(message.isPresent()).toBe(true);
            expect(message.getAttribute('innerHTML')).toContain(messageText);
        });
        it('Checking terminal message(style): font style ', () => {
            expect(message.getCssValue('font-family')).toContain('Arial');
            expect(message.getCssValue('font-family')).toContain('Helvetica Neue');
            expect(message.getCssValue('font-family')).toContain('Helvetica');
            expect(message.getCssValue('font-family')).toContain('sans-serif');
        });
        it('Checking terminal message(style): font size ', () => {
            expect(message.getCssValue('font-size')).toContain('15px');  // translated rem value: 1.5
        });
        /*
         it('Checking message font color ', () => {
         expect(message.getCssValue('color')).toContain('rgba(201, 40, 45, 1))'); // translated 'white'
         });
         it('Checking message border color ', () => {
         // expect(message.getCssValue('border-color')).toContain('rgba(83, 129, 172, 1)))'); // translated hex value: #c9282d (red)
         });
         it('Checking message background color ', () => {
         expect(message.getCssValue('background-color')).toContain('rgba(255, 255, 255, 1)))'); // translated hex value: #c9282d (red)
         });
         */
    }
    /*
        checkLocation(activeTable:Array<ProductFitField>) {
            // validate the locaiton of a question on the UI
            for (let i:number = 0; i < activeTable.length; i++) {
                if (activeTable[i].ruleType == 'productFit') {
                    it('checking Product Fit question ' + activeTable[i].num + ' located on screen correctly', () => {
                        // expect...
                    });
                }
                if (activeTable[i].ruleType == 'terminate') {
                    it('checking Common UW question ' + activeTable[i].num + ' located on screen correctly', () => {
                        // expect...
                    });
                }
            }
        }
    */
    // --------------- Question Validation Functions -------------------------

    checkChildQuestions(activeTable: ProductFitField) {
        if (activeTable.questionType == 'yesNo') {
            let validQuestion = element(by.id(activeTable.id));
            let yesButton = element(by.id(activeTable.baseId + '_0Label'));
            let noButton = element(by.id(activeTable.baseId + '_1Label'));

            // validate question is displayed
            this.waitForVisible(validQuestion);
            // validation of the correct text which should appear
            for (let qNum: number = 0; qNum < activeTable.text.length; qNum++) {
                expect(validQuestion.getAttribute('innerHTML')).toContain(activeTable.text[qNum]);
            }
            // validate Yes button
            this.waitForVisible(yesButton);
            expect(yesButton.isPresent()).toBe(true);
            expect(yesButton.getAttribute('innerHTML')).toContain('Yes');
            // validate No button
            this.waitForVisible(noButton);
            expect(noButton.isPresent()).toBe(true);
            expect(noButton.getAttribute('innerHTML')).toContain('No');
        }

        if (activeTable.questionType == 'radio') {
            let validQuestion = element(by.id(activeTable.id));
            let radioButton = element(by.css('#' + activeTable.id + ' > span.radio-control'));
            // #uwqGENRL06Explanation0Label > span.radio-control
            // validate question is displayed
            this.waitForVisible(validQuestion);
            expect(validQuestion.isPresent()).toBe(true);
            expect(radioButton.isPresent()).toBe(true);

            // validation of the correct text which should appear
            for (let qNum: number = 0; qNum < activeTable.text.length; qNum++) {
                expect(validQuestion.getAttribute('innerHTML')).toContain(activeTable.text[qNum]);
            }
        }
    }

    checkValidQuestions(activeTable: ProductFitField) {
        // validation of questions which SHOULD appear for a 'yes/no' question
        if (activeTable.questionType == 'yesNo') {
            let validQuestion = element(by.id(activeTable.id));

            // validate question is displayed
            this.waitForVisible(validQuestion);
            expect(validQuestion.isPresent()).toBe(true);

            // validation of the correct text which should appear
            for (let qNum: number = 0; qNum < activeTable.text.length; qNum++) {
                expect(validQuestion.getAttribute('innerHTML')).toContain(activeTable.text[qNum]);
            }
        }
        // validation of questions which SHOULD appear for a 'checkbox' question
        if (activeTable.questionType == 'checkbox') {
            let validQuestion = element(by.css('#' + activeTable.id + '> span.checkbox-control'));
            let validQuestionText = element(by.css('#' + activeTable.id + '> span:nth-child(2)'));

            // validate question is displayed
            this.waitForVisible(validQuestion);
            expect(validQuestion.isPresent()).toBe(true);

            // validation of the correct text which should appear
            for (let qNum: number = 0; qNum < activeTable.text.length; qNum++) {
                expect(validQuestionText.getAttribute('innerHTML')).toContain(activeTable.text[qNum]);
            }
        }
        // validation of questions which SHOULD appear for a 'value' question
        if (activeTable.questionType == 'value') {
            let validQuestion = element(by.id(activeTable.baseId));
            let validQuestionText = element(by.id(activeTable.id));

            // validate question is displayed
            this.waitForVisible(validQuestion);
            expect(validQuestion.isPresent()).toBe(true);

            // validation of the correct text which should appear
            for (let qNum: number = 0; qNum < activeTable.text.length; qNum++) {
                expect(validQuestionText.getAttribute('innerHTML')).toContain(activeTable.text[qNum]);
            }
        }
    }

    checkInvalidQuestions(activeTable: ProductFitField) {
        // validation of questions which SHOULD appear for a 'yes/no' question
        if (activeTable.questionType == 'yesNo') {
            let validQuestion = element(by.id(activeTable.id));
            // validate question is displayed
            browser.sleep(3000);
            expect(validQuestion.isPresent()).toBe(false);
        }
        // validation of questions which SHOULD appear for a 'checkbox' question
        if (activeTable.questionType == 'checkbox') {
            let validQuestion = element(by.css('#' + activeTable.id + '> span.checkbox-control'));
            // validate question is displayed
            browser.sleep(3000);
            expect(validQuestion.isPresent()).toBe(false);
        }
        // validation of questions which SHOULD appear for a 'value' question
        if (activeTable.questionType == 'value') {
            let validQuestion = element(by.id(activeTable.baseId));
            // validate question is displayed
            browser.sleep(3000);
            expect(validQuestion.isPresent()).toBe(false);
        }
    }


    // ------------- Detailed Scoping Functions ---------------------------
    filterQuestionsByLob(validQuestions: Array<ProductFitField>, invalidQuestions: Array<ProductFitField>, selectedValues: any) {
        //removes questions from the validQuestions list based on LOB
        for (let i: number = 0; i < validQuestions.length; i++) {
            let result = this.findMatchingValue(validQuestions[i].lobs, selectedValues);
            if (result) {
                // do nothing  (using an else statement because !result isn't working, it is still goes into the statement)
            } else {
                invalidQuestions.push(validQuestions[i]);
                validQuestions.splice(i, 1);
            }
        }
    }

    filterQuestionsByZip(validQuestions: Array<ProductFitField>, invalidQuestions: Array<ProductFitField>, testableZipCodes: Array<ProductFitZipCode>) {
        //removes questions from the validQuestions list based on Zip Code
        let zipList: Array<string> = [];
        for (let i: number = 0; i < testableZipCodes.length; i++) {
            zipList.push(testableZipCodes[i].value);
        }

        for (let i: number = 0; i < validQuestions.length; i++) {
            let result = this.findMatchingValue(validQuestions[i].zipCode, zipList);
            if (result) {
                // do nothing  (using an else statement because !result isn't working, it is still goes into the statement)
            } else {
                invalidQuestions.push(validQuestions[i]);
                validQuestions.splice(i, 1);
            }
        }
    }

    findMatchingValue(array1: any, array2: any) {
        // looks for matching values within two arrays, regardless of position within the array
        let result: boolean = false;
        for (let i: number = 0; i < array1.length; i++) {
            for (let n: number = 0; n < array2.length; n++) {
                if (array1[i] == array2[n]) {
                    result = true;
                }
            }
        }
        return result;
    }

    toTestLob(lobsToBeTested: Array<ProductFitLob>, lobUnderTest: string) {
        // checks to see if the lob is turned on for testing
        let toBeTested: boolean = false;
        for (let i: number = 0; i < lobsToBeTested.length; i++) {
            if (lobsToBeTested[i].value == lobUnderTest && lobsToBeTested[i].toBeTested == true) {
                toBeTested = true;
            }
        }
        return toBeTested;
    }

    // ---------- Question Selection and Value entery ----------------------------------------------------

    selectYesNo(questionId: string, valueToSelect: string) {
        // select the Yes or No button
        let answerYes = element(by.id(questionId + '_0Label'));
        let answerNo = element(by.id(questionId + '_1Label'));

        if (valueToSelect == 'Yes') {
            this.waitForVisible(answerYes);
            answerYes.click();
            // expect(checkedValue).toBe('Yes');
        }
        if (valueToSelect == 'No') {
            this.waitForVisible(answerNo);
            answerNo.click();
            //  expect(checkedValue).toBe('No');
        }
    }

    selectCheckbox(questionId: ProductFitField) {
        // select or deselect a checkbox
        let checkbox = element(by.id(questionId.id));

        this.waitForVisible(checkbox);
        checkbox.click();
    }

    selectRadio(questionId: ProductFitField) {
        let radio = element(by.css('#' + questionId.id + ' > span.radio-control'));
        radio.click();                                    // #uwqGENRL06Explanation_0Label > span:nth-child(2)

    }

    enterTestValue(questionId: ProductFitField, testValueCnt: number) {
        // enter data into a value entry field
        let field = element(by.id(questionId.baseId));

        this.waitForVisible(field);
        field.click();
        this.clearField(field);
        this.sendKeys(field, questionId.testValues[testValueCnt]);
        // field.sendKeys(Key.ENTER);
    }

    enterDiscreteValue(fieldId: string, valueToEnter: string) {
        // enter data into a value entry field
        let field = element(by.id(fieldId));
        // console.log('fieldId: ' + fieldId);

        this.waitForVisible(field);
        field.click();
        this.clearField(field);
        this.sendKeys(field, valueToEnter);
        // field.sendKeys(Key.ENTER);
    }

    enterDefaultValueFieldData(classCode: string) {
        if (classCode == '80091') {
            this.enterDiscreteValue('firearmsSalesPercentage', '0');
            this.enterDiscreteValue('refurbishedMerchandiseSalesPercentage', '0');
        }
        if (classCode == '86111') {
            this.enterDiscreteValue('secondHandMerchandiseSalesPercentage', '0');
        }
    }

    getNewRuleType(questionId: ProductFitField, testValueCnt: number) {
        let newRuleType: string = '';

        // determine the message response type based on the test data provided
        if (parseInt(questionId.testValues[testValueCnt]) >= questionId.ruleResponseValue[0]) {  // first answer(>=) = terminal path,
            newRuleType = questionId.ruleResponseRuleType[0];
        } else if (parseInt(questionId.testValues[testValueCnt]) > questionId.ruleResponseValue[1]) {  // second answer(>) = decline liability/productFit
            newRuleType = questionId.ruleResponseRuleType[1];
        } else if (parseInt(questionId.testValues[testValueCnt]) <= questionId.ruleResponseValue[2]) {  // third answer(<=) = NGI path
            newRuleType = questionId.ruleResponseRuleType[2];
        }
        // console.log('newRuleType Inside: ' + newRuleType);
        return newRuleType;
    }

    clearValue(questionId: ProductFitField) {
        // clear the data from a value entry field
        let field = element(by.id(questionId.baseId));

        this.waitForVisible(field);
        this.clearField(field);
    }

    // ------- Message display validation --------------------
    isTerminalMessageDisplayed(questionId: ProductFitField) {
        // Validate the system response to the answer of a checkbox question
        let message = element(by.css('#' + questionId.baseId + 'TerminalEntries > div.dialog > p'));
        let declineLobs: Array<string> = questionId.declineLobs;
        let agentMessage: string = questionId.agentMessage;

        // console.log('agentMessage: ' + agentMessage);
        this.waitForVisible(message);
        expect(message.isPresent()).toBe(true);
        expect(message.getAttribute('innerHTML')).toContain(agentMessage);

        for (let i = 0; i < questionId.declineLobs.length; i++) {
            // console.log('declineLobs: ' + declineLobs[i]);
            expect(message.getAttribute('innerHTML')).toContain(declineLobs[i]);

        }
    }

    isNotTerminalMessageDisplayed(questionId: ProductFitField) {
        // Validate the system response to the answer of a checkbox question
        let message = element(by.css('#' + questionId.baseId + 'TerminalEntries > div.dialog > p'));

        browser.sleep(3000);
        expect(message.isPresent()).toBe(false);
    }

    isWarningDialogueDisplayed() {
        // Validate the system response to the answer of a checkbox question
        let message = element(by.css('#eligibilityFields > div > product-fit-kickout > seamless-guidance > div > div > div > p'));
        let messageText: string = 'Based on the information you provided this risk will not be eligible for the following product(s):';
        // Based on the information you provided this risk will not be eligible for the following product(s): Commercial Protector (BOP). You will be redirected to eCLIQ
        // console.log('Validating Warning Message');
        // #eligibilityFields > div > product-fit-kickout > seamless-guidance > div > div > div > p
        this.waitForVisible(message);
        expect(message.isPresent()).toBe(true);
        expect(message.getAttribute('innerHTML')).toContain(messageText);
    }

    isNotWarningDialogueDisplayed() {
        // Validate the system response to the answer of a checkbox question
        let message = element(by.css('#eligibilityFields > div > product-fit-kickout > seamless-guidance > div > div > div > p'));

        browser.sleep(3000);
        expect(message.isPresent()).toBe(false);
    }

    isReferralMessageDisplayed(questionId: ProductFitField) {
        // Validate the system response to the answer of a checkbox question
        let message = element(by.id(questionId.baseId + 'ReferEntries'));
        let messageText: string = 'You will be referred to underwriter based on the information you have provided';
        // console.log('Validating Warning Message');

        if (questionId.relationship == 'child' || questionId.questionType == 'yesNo') {
            if (questionId.questionType == 'radio') {
                let num: number = questionId.baseId.length - 2;
                let messageId: string = questionId.baseId.substring(0, num);
                // console.log('messageId: ' + messageId);
                message = element(by.id(messageId + 'ReferEntries'));
            }
        }

        this.waitForVisible(message);
        expect(message.isPresent()).toBe(true);
        expect(message.getAttribute('innerHTML')).toContain(messageText);
    }

    isNotReferralMessageDisplayed(questionId: ProductFitField) {
        // Validate the system response to the answer of a checkbox question
        let message = element(by.id(questionId.baseId + 'ReferEntries'));

        if (questionId.relationship == 'child' || questionId.questionType == 'yesNo') {
            if (questionId.questionType == 'radio') {
                let num: number = questionId.baseId.length - 2;
                let messageId: string = questionId.baseId.substring(0, num);
                // console.log('messageId: ' + messageId);
                message = element(by.id(messageId + 'ReferEntries'));
            }
        }

        // browser.sleep(5000);
        expect(message.isPresent()).toBe(false);
    }
    isRequiredFieldMessageDisplayed(questionId: ProductFitField) {
        // Validate the system response to the answer of a checkbox question
        let message = element(by.css('#' + questionId.baseId + 'Errorsreq > div.dialog > p'));
        let messageText: string = 'This field is required';
        // console.log('Validating Warning Message');
        /*
                if (questionId.relationship == 'child' || questionId.questionType == 'yesNo') {
                    if (questionId.questionType == 'radio') {
                        let num:number = questionId.baseId.length - 2;
                        let messageId:string = questionId.baseId.substring(0, num);
                        console.log('messageId: ' + messageId);
                        message = element(by.id(messageId + 'ReferEntries'));
                    }
                }
        */
        this.waitForVisible(message);
        expect(message.isPresent()).toBe(true);
        expect(message.getAttribute('innerHTML')).toContain(messageText);
    }
    isNotRequiredFieldMessageDisplayed(questionId: ProductFitField) {
        // Validate the system response to the answer of a checkbox question
        let message = element(by.css('#' + questionId.baseId + 'Errorsreq > div.dialog > p'));
        /*
                if (questionId.relationship == 'child' || questionId.questionType == 'yesNo') {
                    if (questionId.questionType == 'radio') {
                        let num:number = questionId.baseId.length - 2;
                        let messageId:string = questionId.baseId.substring(0, num);
                        console.log('messageId: ' + messageId);
                        message = element(by.id(messageId + 'ReferEntries'));
                    }
                }
        */
        // browser.sleep(5000);
        expect(message.isPresent()).toBe(false);
    }
    isInvalidAddressMessageDisplayed() {
        let message = element(by.css('#eligibilityFields > div > eligibility-hf > ngi-eligibility-address > div > div > div > p'));

        this.waitForVisible(message);
        expect(message.isPresent()).toBe(true);
        expect(message.getAttribute('innerHTML')).toContain('We are unable to verify the address entered. Modify the address if needed');
    }
    isNotInvalidAddressMessageDisplayed() {
        let message = element(by.css('#eligibilityFields > div > eligibility-hf > ngi-eligibility-address > div > div > div > p'));

        browser.sleep(3000);
        expect(message.isPresent()).toBe(false);
    }

    // ----- Other Actions -----
    setExistingAccounts() {
        let button = element(by.css('#existingAccounts > div > button'));
        this.waitForVisible(button);
        button.click();
    }

    setFinancials() {
        let button = element(by.css('#listOfSimilars > div > button'));

        browser.sleep(15000);
        button.isPresent().then(function (result) {
            if (result) {
                console.log('financials displayed');
                button.click();
            } else {
                console.log('financials not displayed');
            }
        });
    }

    // ----- utilities -----

    //getvalue(fieldName:protractor.ElementFinder): string {
    //    this.waitForVisible(fieldName);
    //    return fieldName.getAttribute('value');
    //    // return this.fieldName.getAttribute('value');
    //}
    //getValue(fieldName:protractor.ElementFinder): string {
    //    return browser.wait(function() {
    //        return element(by.css(fieldName)).getAttribute('value').then(function(value) {
    //            return value;
    //        });
    //    });
    //}


    // ----- Script Functions -----

    startPage(testLocation: string, testableZipCodes: ProductFitZipCode, testableClassCodes: ProductFitClassCode) {
        let EL: EligibilityPage = new EligibilityPage();

        it('Open NGI', () => {
            this.setLogin(testLocation);
        });
        it('Enter zip code', () => {
            this.selectPage('eligibility');
            this.enterZipCode(testableZipCodes.value);
        });
        it('Enter class code: ' + testableClassCodes.value + ' (' + testableClassCodes.description + ')', () => {
            this.enterClassCode(testableClassCodes);
            this.selectClassCodeDropdown(testableClassCodes);
        });
        it('Select Property & Liability', () => {
            EL.clickLiabilityLOB();
            browser.sleep(3000);
            EL.clickPropertyLOB();
            browser.sleep(3000);
            // this.removeUndesiredLobs();
        });
    }

    setLogin(testLocation: string) {
        let EL: EligibilityPage = new EligibilityPage();

        if (testLocation == 'sauce' || testLocation == 'refreshBrowser') {
            browser.get('/');
        }
        if (testLocation == 'local' || testLocation == 'external') {
            EL.getPage('N0164293', 'testing1');
        }
        if (testLocation == 'internal') {
            EL.getPage('N9968995', 'testing1');
        }
    }

    removeUndesiredLobs() {
        let auto = element(by.id('Automobile'));
        let workersComp = element(by.id('Workers Comp.'));
        let umbrella = element(by.id('Umbrella'));

        browser.sleep(5000);
        if (!auto.isSelected()) {
            console.log('found Auto selected');
            auto.click();
        }
        if (!workersComp.isSelected()) {
            console.log('found WorkersComp selected');
            workersComp.click();
        }
        if (!umbrella.isSelected()) {
            console.log('found Umbrella selected');
            umbrella.click();
        }
    }

    // ----- Common scripts -----
    enterDefaultData(classCode: string, testableZipCodes: ProductFitZipCode) {
        let EL: EligibilityPage = new EligibilityPage();

        // ----- Start enter other page data -----
        it('enter value field data', () => {
            this.enterDefaultValueFieldData(classCode);
        });
        it('set effective date', () => {
            let todaysDate: string = this.getCurrentDate();
            EL.getEffectiveDate();
            EL.setEffectiveDate(todaysDate);
        });
        //  it('set legal entity', () => {
        //      element(by.css('#listOther')).click();
        //      element(by.css('#legalEntityOption_\23 i > button')).click();
        //      // element(by.xpath('//*[@id="legalEntityOption_#i"]/button')).click();
        //     // EL.setLegalEntity();
        //  });
        it('set insured, address, and phone number', () => {
            EL.getFirstInsured();
            EL.setFirstInsured('test');
            EL.getLocationAddress1();
            EL.setLocationAddress1(testableZipCodes.address);
            EL.getPhoneNumber();
            EL.setPhoneNumber(testableZipCodes.phone);
        });
        // ----- END enter other page data -----
    }

    setAccountsFinancials() {
        let EL: EligibilityPage = new EligibilityPage();

        it('press continue button', () => {
            browser.sleep(5000);
            EL.continue();
        });
        it('select existing accounts', () => {
            this.setExistingAccounts();
        });
        it('select financials', () => {
            this.setFinancials();
        });
    }
}
