/**
 * Created by n0215998 on 6/20/2016.
 */

import {ProductFitField} from '../models/field.coverage-conditions.model.po';
import {ProductFitClassCode} from '../models/class-code.coverage-conditions.model.po';
import {ProductFitLob} from '../models/lob.coverage-conditions.model.po';
import {ProductFitZipCode} from '../models/zip-code.coverage-conditions.model.po';
/**
 * Created by n0215998 on 4/28/2016.
 * Last Modified: 5/12/2016
 */
class ProductFitData {
    productFitQuestion = new Array<ProductFitField>();
    classCodeData = new Array<ProductFitClassCode>();
    LOBs = new Array<ProductFitLob>();
    zipCodes = new Array<ProductFitZipCode>();

    constructor() {
        // Add all Product Fit Fields
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('0')
                .addNum('UWQ5312')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqBOP02-label')
                //coverageConditionsQuestions-uwqBOP02-label
                .addBaseId('uwqBOP02')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability'])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Manufacturing, mixing, relabeling or repackaging of products'])
                .addText(['Manufacturing, mixing, relabeling or repackaging of products'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('1')
                .addNum('BOP59')
                .addRuleType('terminal')
                .addPageLocation('eligibility')
                .addToBeTested(false)
                .addId('coverageConditionsQuestions-uwqBOP39-label')
                .addBaseId('uwqBOP39')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability'])
                .addAgentMessage('The following coverage is unavailable based on the information you have provided:')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Any 24-hour operations'])
                .addText(['Any 24-hour operations'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('2')
                .addNum('BOP85')
                .addRuleType('terminal')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-refurbishedMerchandiseSalesPercentage')
                .addBaseId('refurbishedMerchandiseSalesPercentage')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('value')
                .addTestValues(['1', '0'])  // position 0 = GNI, position 1 = terminal liability, positions 2 = terminal liability
                .addRuleResponseValue([1, 0, 0])
                .addRuleResponseRuleType(['terminal', 'terminal', 'OFF'])  // first answer(>=) = terminal for liability, second answer(>) = terminal for liability, third answer(<=) = NGI path
                .addDeclineLobs(['Liability'])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Percentage of sales from used/refurbished goods/equipment'])
                .addText(['Percentage of sales from used/refurbished goods/equipment'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('3')
                .addNum('BOP66')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-secondHandMerchandiseSalesPercentage-label')
                .addBaseId('secondHandMerchandiseSalesPercentage')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('value')
                .addTestValues(['21', '20', '1', '0'])  // position 0 = terminal, position 1-4 NGI
                .addRuleResponseValue([100, 20, 20])
                .addRuleResponseRuleType(['productFit', 'productFit', 'OFF'])  // first answer(>=) = terminal edit, second answer(>) = decline liability, third answer(<=) = NGI path
                .addDeclineLobs(['Liability'])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('03-8-2017')
                .addApprovedText(['Percentage of sales from second-hand (used) merchandise'])
                .addText(['Percentage of sales from second-hand (used) merchandise'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('4')
                .addNum('UWQ5332')
                .addRuleType('variable')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-firearmsSalesPercentage')
                .addBaseId('firearmsSalesPercentage')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('value')
                .addTestValues(['0', '1', '10', '11'])  // position 0 = NGI, position 1-2 = decline liability, positions 3 = terminal path
                .addRuleResponseValue([11, 0, 0])
                .addRuleResponseRuleType(['terminal', 'productFit', 'OFF'])  // first answer(>=) = terminal path, second answer(>) = decline liability, third answer(<=) = NGI path
                .addDeclineLobs(['Liability'])
                .addAgentMessage('The following coverage is unavailable based on the information you have provided:')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Percentage of sales from firearms and ammunition'])
                .addText(['Percentage of sales from firearms and ammunition'])
        );

        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('5')
                .addNum('GLO223')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqCGL25-label')
                .addBaseId('uwqCGL25')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability'])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Equipment rented or leased to others (other than floor/upholstery cleaning machines)'])
                .addText(['Equipment rented or leased to others (other than floor/upholstery cleaning machines)'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('6')
                .addNum('UWQ5042')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqLMGENRL59-label')
                .addBaseId('uwqLMGENRL59')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability'])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Sale of merchandise directly imported, manufactured or distributed outside of the United States.'])
                .addText(['Sale of merchandise directly imported, manufactured or distributed outside of the United States.'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('7')
                .addNum('UWQ5052')
                .addRuleType('terminal')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqLMBOP32-label')
                //coverageConditionsQuestions-uwqLMBOP32-label
                .addBaseId('uwqLMBOP32')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability'])
                .addAgentMessage('The following coverage is unavailable based on the information you have provided:')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Repair/rental of ladders or scaffolding'])
                .addText(['Repair/rental of ladders or scaffolding'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('8')
                .addNum('UWQ6903')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqLMGENRL16-label')
                .addBaseId('LMGENRL16')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability'])
                .addAgentMessage('The coverage you have selected is unavailable based on the information you have provided.')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Sale of Liquefied Petroleum Gas (LPG) - other than in pre-filled containers'])
                .addText(['Sale of Liquefied Petroleum Gas (LPG) - other than in pre-filled containers'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('9')
                .addNum('UWQ5322')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqLMBOP28-label')
                .addBaseId('uwqLMBOP28')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('parent')
                .addChildren(['UWQ5322a', 'UWQ5322b', 'UWQ5322c'])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability'])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Donut fryer at any location'])
                .addText(['Donut fryer at any location'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('10')
                .addNum('UWQ5322a')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqLMBOP29-label')
                .addBaseId('uwqLMBOP29')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('child')
                .addChildren([])
                .addQuestionType('yesNo')
                .addTestValues([])
                .addRuleResponseValue([1, 0, 0])
                .addRuleResponseRuleType(['productFit', 'productFit', 'OFF'])  // 0 = Yes, 1 = No
                .addDeclineLobs(['Liability'])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['UL-approved self-contained unit or fully protected by a UL 300 chemical extinguishing system'])
                .addText(['UL-approved self-contained unit or fully protected by a UL 300 chemical extinguishing system'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('11')
                .addNum('UWQ5322b')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqLMGENRL61-label')
                .addBaseId('uwqLMGENRL61')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('child')
                .addChildren([])
                .addQuestionType('yesNo')
                .addTestValues([])
                .addRuleResponseValue([1, 0, 0])
                .addRuleResponseRuleType(['productFit', 'productFit', 'OFF'])  // 0 = Yes, 1 = No
                .addDeclineLobs(['Liability'])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Ventilating system (including hood and ductwork) cleaned quarterly by independent contractor'])
                .addText(['Ventilating system (including hood and ductwork) cleaned quarterly by independent contractor'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('12')
                .addNum('UWQ5322c')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqLMBOP23-label')
                .addBaseId('uwqLMBOP23')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('child')
                .addChildren([])
                .addQuestionType('yesNo')
                .addTestValues([])
                .addRuleResponseValue([1, 0, 0])
                .addRuleResponseRuleType(['productFit', 'productFit', 'OFF'])  // 0 = Yes, 1 = No
                .addDeclineLobs(['Liability'])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Extinguishing system inspected and maintained semi-annually by an independent contractor'])
                .addText(['Extinguishing system inspected and maintained semi-annually by an independent contractor'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('13')
                .addNum('UWQ97')
                .addRuleType('terminal')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqLMBOP66-label')
                .addBaseId('uwqLMBOP66')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Property', 'Liability'])  //  Property & Liability
                .addAgentMessage('The following coverages are unavailable based on the information you have provided:')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Board of health closure(s) within past three years'])
                .addText(['Board of health closure(s) within past three years'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('14')
                .addNum('UWQ5333')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqLMGENRL58-label')
                .addBaseId('uwqLMGENRL58')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability'])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Internet sales greater than 50% of total'])
                .addText(['Internet sales greater than 50% of total'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('15')
                .addNum('UWQ5308')
                .addRuleType('terminal')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqLMGENRL57-label')
                .addBaseId('uwqLMGENRL57')
                .addZipCode(['99501'])
                .addLobs(['Liability'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability'])
                .addAgentMessage('The following coverage is unavailable based on the information you have provided:')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Sale of adult materials greater than 10% of total'])
                .addText(['Sale of adult materials greater than 10% of total'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('16')
                .addNum('BOP5')
                .addRuleType('terminal')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqGENRL14-label')
                .addBaseId('uwqGENRL14')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('The coverage you have selected is unavailable based on the information you have provided.')
                .addUwMessage('')
                .addApprovedTextReviewDate('07-08-2016')
                .addApprovedText(['Bankruptcies, tax, or credit liens against the applicant within the past five years'])
                .addText(['Bankruptcies, tax, or credit liens against the applicant within the past five years'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('17')
                .addNum('UWQ95')
                .addRuleType('terminal')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqGENRL08-label')
                .addBaseId('uwqGENRL08')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([''])
                .addAgentMessage('The coverage you have selected is unavailable based on the information you have provided.')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Convictions for fraud, bribery, arson, or any other arson related crime within the past five years'])
                .addText(['Convictions for fraud, bribery, arson, or any other arson related crime within the past five years'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('18')
                .addNum('BOP145')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqCGL18-label')
                .addBaseId('CGL18')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability'])
                .addAgentMessage('The coverage you have selected is unavailable based on the information you have provided.')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Sale of products under own name/label'])
                .addText(['Sale of products under own name/label'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('19')
                .addNum('UWQ5011')
                .addRuleType('referral')
                .addPageLocation('underwriting')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqLMGENRL60-label')
                .addBaseId('uwqLMGENRL60')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('You will be referred to underwriter based on the information you have provided')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-30-2016')
                .addApprovedText(['50% or more ownership interest in any other business or property'])
                .addText(['50% or more ownership interest in any other business or property'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('20')
                .addNum('GLB3')
                .addRuleType('referral')
                .addPageLocation('underwriting')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqGENRL34-label')
                .addBaseId('uwqGENRL34')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('You will be referred to underwriter based on the information you have provided')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-30-2016')
                .addApprovedText(['Subsidiaries or subsidiary of another entity'])
                .addText(['Subsidiaries or subsidiary of another entity'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('21')
                .addNum('UWQ1')
                .addRuleType('parent') // referral based on child questions
                .addPageLocation('underwriting')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqGENRL06-label')
                .addBaseId('uwqGENRL06')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addRelationship('parent')
                .addChildren(['UWQ1a', 'UWQ1b', 'UWQ1c', 'UWQ1d', 'UWQ1e'])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Non-renewal or cancellation during the past three years'])
                .addText(['Non-renewal or cancellation during the past three years'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('22')
                .addNum('UWQ1a')
                .addRuleType('referral')
                .addPageLocation('underwriting')
                .addToBeTested(true)
                .addId('uwqGENRL06Explanation_0Label')
                .addBaseId('uwqGENRL06Explanation_0')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addRelationship('child')
                .addChildren([])
                .addQuestionType('radio')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addAgentMessage('You will be referred to underwriter based on the information you have provided')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Non-Payment'])
                .addText(['Non-Payment'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('23')
                .addNum('UWQ1b')
                .addRuleType('ngi')
                .addPageLocation('underwriting')
                .addToBeTested(true)
                .addId('uwqGENRL06Explanation_1Label')
                .addBaseId('uwqGENRL06Explanation_1')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addRelationship('child')
                .addChildren([])
                .addQuestionType('radio')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Carrier withdrawal from class or line of business'])
                .addText(['Carrier withdrawal from class or line of business'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('24')
                .addNum('UWQ1c')
                .addRuleType('ngi')
                .addPageLocation('underwriting')
                .addToBeTested(true)
                .addId('uwqGENRL06Explanation_2Label')
                .addBaseId('uwqGENRL06Explanation_2')
                .addZipCode(['99501'])
                .addLobs([])
                .addRelationship('child')
                .addChildren([])
                .addQuestionType('radio')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Carrier withdrawal from state'])
                .addText(['Carrier withdrawal from state'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('25')
                .addNum('UWQ1d')
                .addRuleType('ngi')
                .addPageLocation('underwriting')
                .addToBeTested(true)
                .addId('uwqGENRL06Explanation_3Label')
                .addBaseId('uwqGENRL06Explanation_3')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addRelationship('child')
                .addChildren([])
                .addQuestionType('radio')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Carrier-agency relationship terminated'])
                .addText(['Carrier-agency relationship terminated'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('26')
                .addNum('UWQ1e')
                .addRuleType('referral')
                .addPageLocation('underwriting')
                .addToBeTested(true)
                .addId('uwqGENRL06Explanation_4Label')
                .addBaseId('uwqGENRL06Explanation_4')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addRelationship('child')
                .addChildren([])
                .addQuestionType('radio')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addAgentMessage('You will be referred to underwriter based on the information you have provided')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Other'])
                .addText(['Other'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('27')
                .addNum('BOP401')
                .addRuleType('referral')
                .addPageLocation('ratingInfo')
                .addToBeTested(true)
                .addId('uwqLMGENRL11Label')
                .addBaseId('uwqLMGENRL11')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('yesNo')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addAgentMessage('You will be referred to underwriter based on the information you have provided')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Applicant included as an additional insured on the tenant\'s general liability policy'])
                .addText(['Applicant included as an additional insured on the tenant\'s general liability policy'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('28')
                .addNum('UWQ5330')
                .addRuleType('referral')
                .addPageLocation('ratingInfo')
                .addToBeTested(true)
                .addId('uwqLMBOP17Label')
                .addBaseId('uwqLMBOP17')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addAgentMessage('You will be referred to underwriter based on the information you have provided')
                .addUwMessage('')
                .addApprovedTextReviewDate('06-22-2016')
                .addApprovedText(['Other tenant operations that have significant fire hazard (e.g., commercial cooking, spray painting, woodworking, welding or heavy manufacturing'])
                .addText(['Other tenant operations that have significant fire hazard (e.g., commercial cooking, spray painting, woodworking, welding or heavy manufacturing'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('29')
                .addNum('UWQ67')
                .addRuleType('productFit')
                .addPageLocation('ratingInfo')
                .addToBeTested(true)
                .addId('uwqLMBOP65Label')
                .addBaseId('uwqLMBOP65')
                .addZipCode(['99501', '59101', '97209', '98002'])
                .addLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('yesNo')
                .addTestValues(['Yes', 'No'])
                .addRuleResponseValue([])
                .addRuleResponseRuleType(['productFit', 'OFF'])  // 0 = Yes, 1 = No
                .addDeclineLobs([''])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('09-16-2016')
                .addApprovedText(['Tenant operations have significant fire hazard risk (e.g., manufacturing, metal working or welding, ' +
                'restaurants or commercial cooking operations, spray painting, auto body work, woodworking, storage/manufacturing of ' +
                'flammables, or growing, processing, storing or dispensing marijuana)'])
                .addText(['Tenant operations have significant fire hazard risk (e.g., manufacturing, metal working or welding, ' +
                'restaurants or commercial cooking operations, spray painting, auto body work, woodworking, storage/manufacturing of ' +
                'flammables, or growing, processing, storing or dispensing marijuana)'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('30')
                .addNum('BOP19')
                .addRuleType('productFit')
                .addPageLocation('ratingInfo')
                .addToBeTested(true)
                .addId('uwqLMBOP07Label')
                .addBaseId('uwqLMBOP07')
                .addZipCode(['83701'])
                .addLobs(['Liability', 'Property', 'Automobile', 'Workers Comp.'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('yesNo')
                .addTestValues([])
                .addTestValues(['Yes', 'No'])
                .addRuleResponseValue([])
                .addRuleResponseRuleType(['productFit', 'OFF'])  // 0 = Yes, 1 = No
                .addDeclineLobs([''])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('09-16-2016')
                .addApprovedText(['Other tenant operations have significant fire hazard risk (e.g., manufacturing, metal working or welding, ' +
                'restaurants or commercial cooking operations, spray painting, autobody work, woodworking, storage/manufacturing of flammables)'])
                .addText(['Other tenant operations have significant fire hazard risk (e.g., manufacturing, metal working or welding, ' +
                'restaurants or commercial cooking operations, spray painting, autobody work, woodworking, storage/manufacturing of flammables)'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('31')
                .addNum('UWQ5325')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqLMGENRL77Label')
                .addBaseId('uwqLMGENRL77')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('yesNo')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('03-20-2017')
                .addApprovedText(['Professional liability coverage currently in force with another carrier'])
                .addText(['Professional liability coverage currently in force with another carrier'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('32')
                .addNum('UWQ5331')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-uwqLMBOP09-label')
                .addBaseId('uwqLMBOP09')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('03-20-2017')
                .addApprovedText(['Cooking operations include frying, grilling, broiling, barbecuing or other cooking process that produces grease laden vapors'])
                .addText(['Frying, grilling, broiling, barbequing or other cooking that produces grease-laden vapors'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('33')
                .addNum('UWQ57')
                .addRuleType('terminal')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-marijuanaProvider-label')
                .addBaseId('marijuanaProvider')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('03-20-2017')
                .addApprovedText(['Growing, storing, selling, dispensing, manufacturing/processing, or otherwise providing access to medically-prescribed or recreational marijuana'])
                .addText(['Growing, storing, selling, dispensing, manufacturing/processing, or otherwise providing access to medically-prescribed or recreational marijuana'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('33')
                .addNum('UWQ5310')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('coverageConditionsQuestions-involveJobsiteManagement-label')
                .addBaseId('involveJobsiteManagement')
                .addZipCode(['99501'])
                .addLobs(['Liability', 'Property'])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('03-20-2017')
                .addApprovedText(['Operations include jobsite or project management'])
                .addText(['Operations include jobsite or project management'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('34')
                .addNum('GENRL53')
                .addRuleType('referral')
                .addPageLocation('underwriting')
                .addToBeTested(true)
                .addId('underwritingReferralQuestions-uwqLMGENRL60-label')
                .addBaseId('uwqLMGENRL60')
                .addZipCode(['99501'])
                .addLobs([])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('04-22-2017')
                .addApprovedText(['50% or more ownership interest in any other business or property'])
                .addText(['50% or more ownership interest in any other business or property'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('35')
                .addNum('GENRL34')  // need to change to ETM ID
                .addRuleType('referral')
                .addPageLocation('underwriting')
                .addToBeTested(true)
                .addId('underwritingReferralQuestions-uwqGENRL34-label')
                .addBaseId('uwqGENRL34')
                .addZipCode(['99501'])
                .addLobs([])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('04-22-2017')
                .addApprovedText(['Subsidiaries or subsidiary of another entity'])
                .addText(['Subsidiaries or subsidiary of another entity'])
        );


        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('36')
                .addNum('EPL03')
                .addRuleType('referral')
                .addPageLocation('underwriting')
                .addToBeTested(true)
                .addId('UWQ6405Label')
                .addBaseId('UWQ6405')
                .addZipCode(['99501'])
                .addLobs([])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('yesNo')
                .addTestValues(['no'])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('04-22-2017')
                .addApprovedText(['Knowledge of any employment-related practices claims or situations that could result in a related claim'])
                .addText(['Knowledge of any employment-related practices claims or situations that could result in a related claim'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('37')
                .addNum('LMGENRL11')
                .addRuleType('referral')
                .addPageLocation('underwriting')
                .addToBeTested(true)
                .addId('uwqLMGENRL11Label')
                .addBaseId('LMGENRL11')
                .addZipCode(['99501'])
                .addLobs([])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('yesNo')
                .addTestValues(['no'])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('04-22-2017')
                .addApprovedText(['Applicant included as an additional insured on the tenant\'s general liability policy'])
                .addText(['Applicant included as an additional insured on the tenant\'s general liability policy'])
        );
        this.productFitQuestion.push(
            new ProductFitField()
                .addSeq('38')
                .addNum('UWQ5309 ')
                .addRuleType('productFit')
                .addPageLocation('eligibility')
                .addToBeTested(true)
                .addId('uwqLMGENRL11Label')
                .addBaseId('LMGENRL11')
                .addZipCode(['99501'])
                .addLobs([])
                .addRelationship('single')
                .addChildren([])
                .addQuestionType('checkbox')
                .addTestValues([])
                .addRuleResponseValue([])
                .addRuleResponseRuleType([])
                .addDeclineLobs([])
                .addAgentMessage('')
                .addUwMessage('')
                .addApprovedTextReviewDate('04-22-2017')
                .addApprovedText(['All instruments and equipment are cleaned and disinfected according to the manufacturer\'s instructions'])
                .addText(['All instruments and equipment are cleaned and disinfected according to the manufacturer\'s instructions'])
        );


        // Add All Class Code Data
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88593')
                .addDescription('Edible Bouquet Stores (Baked Goods, Fresh Fruits or Vegetables)')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5')]) // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88594')
                .addDescription('Fruit or Vegetable Dealers')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),  // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('GLB165')]) // Seasonal operations
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88597')
                .addDescription('Hat Stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),  // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ5333')])  // Internet sales greater than 50% of total
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88598')
                .addDescription('Health Food Stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),  // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ5312'),  // Manufacturing, mixing, relabeling or repackaging of products
                    this.findLabel('UWQ5333')])  // Internet sales greater than 50% of total
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88602')
                .addDescription('Ice Cream or Yogurt Stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),  // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ97'), // Board of health closure(s) within past three years.
                    this.findLabel('uwqBOP39'), // Hours extend beyond midnight
                    this.findLabel('GLB165')])  // Seasonal operations
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88603')
                .addDescription('Janitorial Supplies - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),  // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ5312'),  // Manufacturing, mixing, relabeling or repackaging of products
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('UWQ5042')])  // Sale of merchandise directly imported, manufactured or distributed outside of the United States
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88604')
                .addDescription('Juice Bar')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),  // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('uwqBOP39')]) // Hours extend beyond midnight
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88606')
                .addDescription('Clothing: Lingerie Stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),  // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('uwqLMGENRL57'), // Sale of adult materials greater than 10% of total
                    this.findLabel('uwqLMGENRL58'), // Internet sales greater than 50% of total
                    this.findLabel('uwqCGL18')]) // Sale of products under own name/label
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88608')
                .addDescription('Meal Preparation Stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5')])  // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88613')
                .addDescription('Monuments and Tombstones – Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'), // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('uwqLMGENRL58'), // Internet sales greater than 50% of total
                    this.findLabel('uwqCGL18')]) // Sale of products under own name/label
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88614')
                .addDescription('Nail Salons')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'), // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ5312'),  // Manufacturing, mixing, relabeling or repackaging of products
                    this.findLabel('instrumentsAndEquipmentCleaned')]) // Instruments and equipment are NOT disinfected according to manufacturer's instructions
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88623')
                .addDescription('Party Supply Stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'), // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('uwqLMGENRL58'), // Internet sales greater than 50% of total
                    this.findLabel('UWQ5042'),  // Sale of merchandise directly imported, manufactured or distributed outside of the United States
                    this.findLabel('uwqCGL18')]) // Sale of products under own name/label
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88629')
                .addDescription('Pizza Carryout')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'), // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('uwqLMBOP66'), // Board of health closure(s) within past three years.
                    this.findLabel('uwqBOP39'), // Hours extend beyond midnight
                    this.findLabel('uwqLMBOP09')]) // Frying, grilling, broiling, barbecuing or other cooking that produces grease-laden
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88636')
                .addDescription('Precision and Scientific Tools and Instruments – Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'), // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('uwqLMGENRL58'), // Internet sales greater than 50% of total
                    this.findLabel('UWQ5042'),  // Sale of merchandise directly imported, manufactured or distributed outside of the United States
                    this.findLabel('uwqCGL18'), // Sale of products under own name/label
                    this.findLabel('BOP85')])   // Percentage of sales from used/refurbished goods/equipment
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88637')
                .addDescription('Pretzel Shop')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'), // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ97'), // Board of health closure(s) within past three years.
                    this.findLabel('uwqLMBOP09')]) // Frying, grilling, broiling, barbecuing or other cooking that produces grease-laden
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88638')
                .addDescription('Printer Cartridge Sales and Service')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'), // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('uwqCGL18')]) // Sale of products under own name/label
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88649')
                .addDescription('Telephone, Pagers & Beepers - Wholesale')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'), // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('uwqLMGENRL58'), // Internet sales greater than 50% of total
                    this.findLabel('uwqCGL18')]) // Sale of products under own name/label
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88651')
                .addDescription('Office: Title Insurance Services')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5')]) // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88701')
                .addDescription('Bagel Shops')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'), // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ97'), // Board of health closure(s) within past three years.
                    this.findLabel('uwqLMBOP09')]) // Frying, grilling, broiling, barbecuing or other cooking that produces grease-laden
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('89111')
                .addDescription('LRO: Mercantile - Without Restaurant')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5')]) // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('89112')
                .addDescription('LRO: Mercantile - With < 25% Restaurant')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'), // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('uwqLMBOP09')]) // Frying, grilling, broiling, barbecuing or other cooking that produces grease-laden
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('89113')
                .addDescription('LRO: Services')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5')]) // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('89134')
                .addDescription('LRO: Services')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'), // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5')]) // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80091')
                .addDescription('Hardware Stores - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ5052'),  // Repair/rental of ladders or scaffolding
                    this.findLabel('UWQ5312'),  // Manufacturing, mixing, relabeling or repackaging of products
                    this.findLabel('GLO223'),   // Equipment rented or leased to others (other than floor/upholstery cleaning machines)
                    this.findLabel('UWQ5042'),  // Sale of merchandise directly imported, manufactured or distributed outside of the United States
                    this.findLabel('UWQ6903'),  // Sale of Liquefied Petroleum Gas (LPG) - other than in pre-filled containers
                    this.findLabel('UWQ5332'),  // Percentage of sales from firearms and ammunition.
                    this.findLabel('BOP85')])   // Percentage of sales from used/refurbished goods/equipment
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88551')
                .addDescription('Bakeries-Baking on Premises')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ97'),    // Board of health closure(s) within past three years.
                    //this.findLabel('BOP59'),    // Any 24-hour operations
                    this.findLabel('UWQ5322')]) // Is there a donut fryer at this location?  (plus a, b, & c)
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86111')
                .addDescription('All Other Clothing - Excluding Furs - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('BOP66')])   // Percentage of sales from second-hand (used) merchandise
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80031')
                .addDescription('Books, Magazines, Stationary, Cards, or Paper Products - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ5308'),  // Sale of adult materials greater than 10% of total
                    this.findLabel('UWQ5333')]) // Internet sales greater than 50% of total
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82181')
                .addDescription('Commercial Artist & Graphic Designer Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5')])    // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80441')
                .addDescription('Florists - No Greenhouses or Roadside Stands - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5')])    // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80121')
                .addDescription('Locksmiths - No Alarm Installation - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5')])    // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81171')
                .addDescription('Tailoring Establishments - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5')])    // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('83211')
                .addDescription('Clothing - Women\'s and Girl\'s - Excluding Furs - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('BOP66')])   // Percentage of sales from second-hand (used) merchandise
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88615')
                .addDescription('Naturopathic Specialist Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     //Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325'),  // Professional liability coverage currently in force with another carrier
                    this.findLabel('UWQ57')])   // Growing, storing, selling, dispensing, manufacturing/processing, or otherwise providing access to medically-prescribed or recreational marijuana
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88616')
                .addDescription('Nutritionists Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88618')
                .addDescription('Ophthalmologists Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88621')
                .addDescription('Oral Surgeons Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88622')
                .addDescription('Osteopaths Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88625') // nothing appears when selected
                .addDescription('Photo Finishing Labs')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88627')
                .addDescription('Physical Therapists Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88628')
                .addDescription('Physicians Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325'),  // Professional liability coverage currently in force with another carrier
                    this.findLabel('UWQ57')])   // Growing, storing, selling, dispensing, manufacturing/processing, or otherwise providing access to medically-prescribed or recreational marijuana
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88632')
                .addDescription('Plastic Surgeons Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88634')
                .addDescription('Podiatrists Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88639')
                .addDescription('Psychologists Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88641')
                .addDescription('Radio, TV, & Audio Equipment - Wholesale')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('BOP85')])   // Percentage of sales from used/refurbished goods/equipment
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy

    );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88643')
                .addDescription('Riding - Western Shops and Apparel Distributor')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('UWQ5332'),  // Percentage of sales from firearms and ammunition.
                    this.findLabel('BOP85')])   // Percentage of sales from used/refurbished goods/equipment
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88644')
                .addDescription('Clothing: Western Riding Apparel - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('UWQ5332'),  // Percentage of sales from firearms and ammunition
                    this.findLabel('BOP85')])   // Percentage of sales from used/refurbished goods/equipment
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88645')
                .addDescription('Ship Chandler Stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('BOP85')])   // Percentage of sales from used/refurbished goods/equipment
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88646')
                .addDescription('Speech Therapists Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88648')
                .addDescription('Surgeons Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88652')  // nothing appears when selected
                .addDescription('Wedding Consultants')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88653')  // nothing appears when selected
                .addDescription('Weight Counseling Facilities - Franchise')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88657')
                .addDescription('X-Ray, MRI, Imaging Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88659')  // nothing appears when selected
                .addDescription('Meat, Poultry, or Seafood Stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP145'),   // Sale of products under own name/label (e.g. condiments, barbecue sauces, spices)
                    this.findLabel('UWQ5331')]) // Frying, grilling, broiling, barbequing or other cooking that produces grease-laden vapors
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85691')
                .addDescription('Plumbing Fixtures - Wholesale')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')    // Sale of products under own name/label
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85821')
                .addDescription('Heating or Combined Heating and Air Conditioning Equipment - Wholesale')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('BOP85')     // Percentage of sales from used/refurbished goods/equipment
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85851')
                .addDescription('Refrigeration Equipment Distributor - Commercial - Wholesale')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('BOP85')     // Percentage of sales from used/refurbished goods/equipment
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86841')
                .addDescription('Pool Tables and Billiards Supplies - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('BOP85')     // Percentage of sales from used/refurbished goods/equipment
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86851')
                .addDescription('Pool Tables and Billiards Supplies - Wholesale')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('BOP85')     // Percentage of sales from used/refurbished goods/equipment
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86491')
                .addDescription('Vacuum Stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('BOP85')     // Percentage of sales from used/refurbished goods/equipment
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86671')
                .addDescription('Electrical Supplies - Wholesale')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('BOP85')     // Percentage of sales from used/refurbished goods/equipment
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86871')
                .addDescription('Television, Radio or Phonographs - Sales, Service or Repair - Wholesale')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP145'),    // Sale of products under own name/label
                    this.findLabel('BOP85')     // Percentage of sales from used/refurbished goods/equipment
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88543')
                .addDescription('Acupuncture Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')   // Professional liability coverage currently in force with another carrier
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88544')
                .addDescription('Allergists Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')   // Professional liability coverage currently in force with another carrier
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88545')
                .addDescription('Answering Services Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')     // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88546')
                .addDescription('Antique stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')    // Sale of products under own name/label
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88547')
                .addDescription('Architects Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')   // Professional liability coverage currently in force with another carrier
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88548')
                .addDescription('Art Galleries - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333')   // Internet sales greater than 50% of total
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88566')
                .addDescription('Chiropractors Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')   // Professional liability coverage currently in force with another carrier
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88575')
                .addDescription('Dermatologists Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')   // Professional liability coverage currently in force with another carrier
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88582')
                .addDescription('Engineers Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5310'),  // Operations include jobsite or project management
                    this.findLabel('UWQ5325')   // Professional liability coverage currently in force with another carrier
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88583')
                .addDescription('Escrow Agents Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')     // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88589')
                .addDescription('Food Stores - Miscellaneous Specialty Stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP59'),    // Any 24-hour operations
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')    // Sale of products under own name/label
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82021')
                .addDescription('Law Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82031')
                .addDescription('Accounting/Bookkeeping Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82041')
                .addDescription('Secretarial/Stenographic Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82051')
                .addDescription('Real Estate Offices – No Property Management')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82061')
                .addDescription('Travel Agency Offices – No Tours')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82081')
                .addDescription('Insurance Agency Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82161')
                .addDescription('Adjuster Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82171')
                .addDescription('Auditor Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82191') // nothing appears when selected
                .addDescription('Court Reporting Service Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82201')
                .addDescription('Financial Planner Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82211')
                .addDescription('Inspection and Appraisal Service Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82221')
                .addDescription('Market Research Firm Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82231')
                .addDescription('Mortgage Brokers Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82241')
                .addDescription('Religious Reading Rooms Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82251')
                .addDescription('Tax Preparer Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82271')
                .addDescription('Business Management Consulting Office')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82391')
                .addDescription('Dentists')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('83021')
                .addDescription('Sewing Machines - Sales, Service or Repair - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('BOP85')])   // Percentage of sales from used/refurbished goods/equipment
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('83031')
                .addDescription('Musical Instrument Sales, Service and/or Repair - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
    );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('83051')
                .addDescription('Television, Radio or Phonographs - Sales, Service or Repair - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('BOP85')])   // Percentage of sales from used/refurbished goods/equipment
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
    );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85131')
                .addDescription('Office Machines, Equipment or Supplies - Wholesale')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),   // Sale of products under own name/label
                    this.findLabel('BOP85')])   // Percentage of sales from used/refurbished goods/equipment
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
    );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85191')
                .addDescription('Camera and Photographic Equipment - Wholesale')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ5333'),   // Internet sales greater than 50% of total
                    this.findLabel('BOP145')   // Sale of products under own name/label
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80051')
                .addDescription('Dry Goods Dealers – including Fabrics/Yarn/Piece Goods - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ5333'),   // Internet sales greater than 50% of total
                    this.findLabel('BOP145')   // Sale of products under own name/label
                ])
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80071')
                .addDescription('Fabric Stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333')]) // Internet sales greater than 50% of total
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80191')
                .addDescription('Camera and Photographic Equipment Stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145'),  // Sale of products under own name/label
                    this.findLabel('BOP85')])   // Percentage of sales from used/refurbished goods/equipment
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
    );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80201')
                .addDescription('Candy, Nut or Confectionery Stores')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333')]) // Internet sales greater than 50% of total
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80311')
                .addDescription('Shoes – Ladies, Men’s and Children’s - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80361')
                .addDescription('Hobby, Model Maker or Artists’ Supply - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80381')
                .addDescription('Paint, Wallpaper or Wallcovering - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80871')
                .addDescription('Phone Stores – No Auto Installation')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333')]) // Internet sales greater than 50% of total
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81041')  // nothing appears when selected
                .addDescription('Mailing or Addressing Companies – Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81051')  // nothing appears when selected
                .addDescription('Watch, Clock or Jewelry Repair')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81071')  // nothing appears when selected
                .addDescription('Photocopy Services Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81111')
                .addDescription('Dental Labs')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81131')  // nothing appears when selected
                .addDescription('Engraving – Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81141')  // nothing appears when selected
                .addDescription('Lithographing - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81151')  // nothing appears when selected
                .addDescription('Photographers - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81161')  // nothing appears when selected
                .addDescription('Shoe Repair Shops - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81181')  // nothing appears when selected
                .addDescription('Taxidermists - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])   // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81191')
                .addDescription('Interior Decorators')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333')]) // Internet sales greater than 50% of total
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81201')
                .addDescription('Television or Radio Receiving Set Installation or Repair')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP85')])   // Percentage of sales from used/refurbished goods/equipment
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82011')
                .addDescription('Medical Offices')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ57'),    // Growing, storing, selling, dispensing, manufacturing/processing, or otherwise providing access to medically-prescribed or recreational marijuana
                    this.findLabel('UWQ5325')]) // Professional liability coverage currently in force with another carrier
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80111')
                .addDescription('Leather Products or Hide Stores - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80151')
                .addDescription('Painting, Picture or Frame Stores - No Bulk Solvents - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80161')
                .addDescription('Religious Articles - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80181')
                .addDescription('Stationery or Paper Products Stores - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80321')
                .addDescription('Wigs - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80371')
                .addDescription('Musical Instrument Stores - Not Secondhand - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80561')
                .addDescription('Dry Goods - Linens, Curtains or Draperies - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80881')
                .addDescription('Dairy Products - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81121')
                .addDescription('Dressmaking Shops - Custom - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333')]) // Internet sales greater than 50% of total
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81381')
                .addDescription('Jewelers - Imitation and Novelty - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81021')
                .addDescription('Beauty Parlor and Hair Styling Salons')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95'),    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                    this.findLabel('UWQ5333'),  // Internet sales greater than 50% of total
                    this.findLabel('BOP145')])  // Sale of products under own name/label
                .addUwQuestion([
                    this.findLabel('GENRL53'),      // 50% or more ownership interest in any other business or property
                    this.findLabel('GENRL34'),      // Subsidiaries or subsidiary of another entity
                    this.findLabel('UWQ1'),         // Non-renewal or cancellation during the past three years
                    this.findLabel('EPL03'),        // Knowledge of any employment-related practices claims or situations that could result in a related claim
                    this.findLabel('LMGENRL11')])   // Applicant included as an additional insured on the tenant\'s general liability policy
        );

        // partial adds for checking existing of class code only
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80171')
                .addDescription('Sewing Machines - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80311')
                .addDescription('Shoes - Ladies\', Men\'s and Children\'s - Retail')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80331')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80341')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80401')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80411')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80801')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80831')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('80871')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('81011')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82091')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82140')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82150')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('82261')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('83151')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('83161')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('83221')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('83241')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('83751')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85011')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85031')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85071')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85091')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85111')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85131')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85141')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85311')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85341')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85351')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85361')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85391')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85401')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85521')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85601')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85621')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85661')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85701')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85741')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85801')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85861')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85871')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('85901')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86021')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86311')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86371')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86381')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86391')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86411')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86431')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86481')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86511')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86521')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86531')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86391')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86411')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86431')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86481')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86511')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86521')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86531')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86541')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86591')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86641')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86681')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86751')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86891')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('86941')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88552')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88553')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88555')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88556')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88557')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88564')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88567')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88568')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88573')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88577')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88584')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );
        this.classCodeData.push(
            new ProductFitClassCode()
                .addToBeTested(true)
                .addValue('88591')
                .addDescription('')
                .addState(['all'])
                .addBopFitQuestion([
                    this.findLabel('BOP5'),     // Gen: Bankruptcies, tax, or credit liens against the applicant within the past five years
                    this.findLabel('UWQ95')])    // Gen: Convictions for fraud, bribery, arson, or any other arson related crime within the past five years
                .addUwQuestion([])
        );



        // Add all LOBs
        this.LOBs.push(
            new ProductFitLob()
                .addToBeTested(false)
                .addValue('Automobile')
        );
        this.LOBs.push(
            new ProductFitLob()
                .addToBeTested(true)
                .addValue('Liability')
        );
        this.LOBs.push(
            new ProductFitLob()
                .addToBeTested(true)
                .addValue('Property')
        );
        this.LOBs.push(
            new ProductFitLob()
                .addToBeTested(false)
                .addValue('Workers Comp.')
        );
        this.LOBs.push(
            new ProductFitLob()
                .addToBeTested(false)
                .addValue('Umbrella')
        );

        // Add all zip codes
        this.zipCodes.push(
            new ProductFitZipCode()
                .addToBeTested(false)
                .addValue('99501')
                .addState('AK')
                .addAddress('301 W Northern Lights Blvd')
                .addPhone('9072724444')
                .addRampLogin('0795170')
                .addPassword('helpdesk')
                .addAiaAgency('540001')
                .addAgentName('Josh Tyndell')
                .addNpn('5768306')
        );
        this.zipCodes.push(
            new ProductFitZipCode()
                .addToBeTested(false)
                .addValue('85017')
                .addState('AZ')
                .addAddress('2734 W Thomas Rd')
                .addPhone('6234550403')
                .addRampLogin('4293017')
                .addPassword('helpdesk')
                .addAiaAgency('040052')
                .addAgentName('Brent Wasson')
                .addNpn('8481533')
        );
        this.zipCodes.push(
            new ProductFitZipCode()
                .addToBeTested(false)
                .addValue('90210')
                .addState('CA')
                .addAddress('9735 Wilshire Blvd #110')
                .addPhone('3107772000')
                .addRampLogin('4293017')
                .addPassword('helpdesk')
                .addAiaAgency('040052')
                .addAgentName('Brent Wasson')
                .addNpn('8481533')
        );
        this.zipCodes.push(
            new ProductFitZipCode()
                .addToBeTested(false)
                .addValue('80219')
                .addState('CO')
                .addAddress('3131 W Alameda Ave')
                .addPhone('3032847224')
                .addRampLogin('0548840')
                .addPassword('helpdesk')
                .addAiaAgency('460018')
                .addAgentName('David Wheat')
                .addNpn('682572')
        );
        this.zipCodes.push(
            new ProductFitZipCode()
                .addToBeTested(false)
                .addValue('83701')
                .addState('ID')
                .addAddress('801 E Parkcenter Blvd')
                .addPhone('2089551113')
                .addRampLogin('0548840')
                .addPassword('helpdesk')
                .addAiaAgency('110011')
                .addAgentName('Michelle Winter')
                .addNpn('8740309')
        );
        this.zipCodes.push(
            new ProductFitZipCode()
                .addToBeTested(false)
                .addValue('59101')
                .addState('MT')
                .addAddress('5000 Southgate Dr')
                .addPhone('4068399082')
                .addRampLogin('0781760')
                .addPassword('helpdesk')
                .addAiaAgency('250102')
                .addAgentName('John Leaf')
                .addNpn('2951359')
        );
        this.zipCodes.push(
            new ProductFitZipCode()
                .addToBeTested(false)
                .addValue('87121')
                .addState('NM')
                .addAddress('9400 Central Ave SW')
                .addPhone('5058331883')
                .addRampLogin('0548840')
                .addPassword('helpdesk')
                .addAiaAgency('460018')
                .addAgentName('David Wheat')
                .addNpn('682572')
        );
        this.zipCodes.push(
            new ProductFitZipCode()
                .addToBeTested(false)
                .addValue('89030')
                .addState('NV')
                .addAddress('3320 Las Vegas Blvd N')
                .addPhone('7026431641')
                .addRampLogin('0548840')
                .addPassword('helpdesk')
                .addAiaAgency('460018')
                .addAgentName('David Wheat')
                .addNpn('682572')
        );
        this.zipCodes.push(
            new ProductFitZipCode()
                .addToBeTested(false)
                .addValue('97209')
                .addState('OR')
                .addAddress('1105 NW Marshall St')
                .addPhone('5032259300')
                .addRampLogin('0105230')
                .addPassword('helpdesk')
                .addAiaAgency('360004')
                .addAgentName('Debbie Kruger')
                .addNpn('668405')
        );
        this.zipCodes.push(
            new ProductFitZipCode()
                .addToBeTested(false)
                .addValue('84101')
                .addState('UT')
                .addAddress('2050 E 6200 S')
                .addPhone('8012721212')
                .addRampLogin('0548840')
                .addPassword('helpdesk')
                .addAiaAgency('460018')
                .addAgentName('David Wheat')
                .addNpn('682572')
        );
        this.zipCodes.push(
            new ProductFitZipCode()
                .addToBeTested(false)
                .addValue('98002')
                .addState('WA')
                .addAddress('620 M St NE')
                .addPhone('2537352718')
                .addRampLogin('0548840')
                .addPassword('helpdesk')
                .addAiaAgency('460018')
                .addAgentName('David Wheat')
                .addNpn('682572')
        );
        this.zipCodes.push(
            new ProductFitZipCode()
                .addToBeTested(true)
                .addValue('82001')
                .addState('WY')
                .addAddress('510 W 29th St')
                .addPhone('3076329362')
                .addRampLogin('0548840')
                .addPassword('helpdesk')
                .addAiaAgency('460018')
                .addAgentName('David Wheat')
                .addNpn('682572')
        );
    }

    findLabel(idNum: string): string {
        // find question label from question ID in the source document
        let label = '';
        let questions = this.productFitQuestion.slice();

        for (let idCnt = 0; idCnt < questions.length; idCnt++) {
            if (idNum == questions[idCnt].num) {
                label = questions[idCnt].id;
            }
        }
        return label;
    }
}

export = ProductFitData;
