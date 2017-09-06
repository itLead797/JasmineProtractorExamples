import ProductFitData = require('./pageObjects/coverage-conditions.data.po');
import {EligibilityPage} from '../eligibility.po';
//import {by, element} from 'protractor';
let EL = new EligibilityPage();


export const SCENARIO: any = {
    //public zipCodeElement = element(by.id('zipCode'));

    'Scenario': [
        {
            'userId': '0548840',
            'password': 'helpdesk',
            'zipCode': '98002',
            'classCode': {
                'value': '80091',
                'dropDown': 1
                },
            'effectiveDate':  EL.getCurrentDate(),
            'coverageQuestions': [
                {
                    'id': 'UWQ5332',
                    'value': '0'
                },
                {
                    'id': 'BOP85',
                    'value': '0'
                }],
            'losses': false,
            'eligibilityAcknowledgement': true,
            'agency': '0',
            //'producer': null,
            //'cashCode': null,
            'legalEntity': 1,
            'firstNamedInsured': 'Joe Insured',
            'primaryAddress': '123 Main Street',
            'phoneNumber': '3433456787',
            'addressAccept': false,
            //'eligibilityContinue': true, // **this prob isn't needed. call continue button press every time**
            'territory': '001',
            //'ppc': null,
            'numberOfEmployees': '10',
            'annualRevenue': '1000000',
            'yearBusinessStarted': '2010',
            'buildingInsuranceNeeded': 'YES',
            'buildingLimit': '500000',
            'bpp': '500000',
            'constructionType': 1,
            //'sprinklered': false,
            'yearBuilt': '2010',
            'alarmType': 1,
            'numberOfStories': '1',
            'buildingSize': '3000',
            'itv': 'keep', // overwrite, keep, ok
            'occupiedByApplicant': '100',
            'occupiedByOthers': '2000',
            'percentageResidentialPurposes': '0',
            'retailTenants50percent': false,
            'otherTenantOperations': 'no',
            'tenantOperations': [
                {
                    'id': 'hospitals',
                    'value': false
                },
                {
                    'id': 'hospitals',
                    'value': false
                },
                {
                    'id': 'otherTenantOperations',
                    'value': false
                },
                {
                    'id': 'restaurantsCookingOperations',
                    'value': false
                },
                {
                    'id': 'marajuanaOperations',
                    'value': false
                }
            ],
            'ratingInfoContinue': true,
            'fiftyPercentOwnership': false,
            'subsidaries': false,
            'nonRenewal': false,
            'employmentRelatedClaims': false,
            'additionalInsured': 'yes',
            'uwContinue': true,
            'saveAndContinue': true
        }
    ]
};
