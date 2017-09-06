/**
 * Created by n0215998 on 3/6/2017.
 */
import ProductFitData = require('./uat/pageObjects/coverage-conditions.data.po');
import {ProductFitPage} from './uat/pageObjects/coverage-conditions.po';
import {ProductFitClassCode} from './uat/models/class-code.coverage-conditions.model.po';
import {ProductFitField} from './uat/models/field.coverage-conditions.model.po';
import {HappyPath} from './happypath.uat.po';
import {ProductFitZipCode} from './uat/models/zip-code.coverage-conditions.model.po';

let PF: ProductFitPage = new ProductFitPage();
let PFD: ProductFitData = new ProductFitData();
let HP: HappyPath = new HappyPath();
let testableZipCodes: Array<ProductFitZipCode> = PF.buildAllTestableZipCodes(PFD.zipCodes);
let testableClassCodes: Array<ProductFitClassCode> = PF.buildTestableClassCodes('all', PFD.classCodeData);  // scopes the test to half the class codes (pt1 or pt2)
let allTestableQuestions: Array<ProductFitField> = PF.buildAllTestableQuestionsTable(PFD.productFitQuestion);

let testType = 'short';

if (testType == 'short') {
    for (let i = 0; i < testableZipCodes.length; i++) {
        HP.openPage(testableZipCodes[i].value);

        for (let classCodeCnt: number = 0; classCodeCnt < testableClassCodes.length; classCodeCnt++) {
            let activeQuestions: Array<ProductFitField> = PF.buildActiveQuestionTableByClassCode(testableClassCodes[classCodeCnt].bopFitQuestion, allTestableQuestions);

            describe('Starting test ' + (classCodeCnt + 1) + ' of ' + (testableClassCodes.length), () => {
                if (classCodeCnt > 0) {
                    HP.changeClassCode(testableClassCodes[classCodeCnt]);
                } else {
                    HP.enterClassCode(testableClassCodes[classCodeCnt]);
                }
                for (let n = 0; n < activeQuestions.length; n++) {
                    HP.checkQuestions(activeQuestions[n], testableClassCodes[classCodeCnt]);
                }
            });
        }
    }

}

if (testType == 'full') {

    for (let classCodeCnt: number = 0; classCodeCnt < testableClassCodes.length; classCodeCnt++) {
        let activeQuestions: Array<ProductFitField> = PF.buildActiveQuestionTableByClassCode(testableClassCodes[classCodeCnt].bopFitQuestion, allTestableQuestions);

        describe('Starting test ' + classCodeCnt + ' of ' + activeQuestions.length, () => {
            for (let i = 0; i < testableZipCodes.length; i++) {
                HP.openPage(testableZipCodes[i].value);
                HP.enterClassCode(testableClassCodes[classCodeCnt]);

                for (let n = 0; n < activeQuestions.length; n++) {
                    HP.checkQuestions(activeQuestions[n], testableClassCodes[classCodeCnt]);
                    HP.answerQuestions(activeQuestions[n]);
                }
                HP.fullPath();
            }
        });

    }
}


