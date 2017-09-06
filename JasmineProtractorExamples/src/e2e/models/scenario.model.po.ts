/**
 * Created by n0215998 on 6/22/2017.
 */

import ProductFitData = require('../pageObjects/coverage-conditions.data.po');


export class Scenario extends ProductFitData {
    scenario: Array<ScenarioData>;

    public addScenario(scenario: Array<ScenarioData>): Scenario {
        this.scenario = scenario;
        return this;
    }
}

export class ScenarioData {
    userId: string;
    password: string;
    zip: string;
    classCode: string;
    date: string;
    coverageQuestions: Array<any>;
    losses: boolean;
    eligibilityAcknowledgement: boolean;
    agency: string;
    producer: string;
    cashCode: string;
    legalEntity: number;
    namedInsured: string;
    primaryAddress: string;
    phone: string;
    addressAccept: boolean;
    eligibilityContinue: boolean;
    territory: string;
    ppc: string;
    numberOfEmployees: string;
    annualRevenue: string;
    yearBusinessStarted: string;
    insuranceNeeded: string;
    buildingLimit: string;
    bpp: string;
    constructionType: number;
    sprinklered: boolean;
    yearBuilt: string;
    alarmType: number;
    numberOfStories: string;
    buildingSize: string;
    itv: string;
    occupiedByApplicant: string;
    occupiedByOthers: string;
    percentageResidentialPurposes: string;
    retailTenants50percent: string;
    otherTenantOperations: string;
    tenantOperations: CoverageQuestions;
    ratingInfoContinue: boolean;
    fiftyPercentOwnership: boolean;
    subsidaries: boolean;
    nonRenewal: boolean;
    employmentRelatedClaims: boolean;
    additionalInsured: string;
    uwContinue:boolean;
    saveAndContinue: boolean;

    public addUserId(userId: string): ScenarioData {
        this.userId = userId;
        return this;
    }
    public addPassword(password: string): ScenarioData {
        this.password = password;
        return this;
    }
    public addZip(zip: string): ScenarioData {
        this.zip = zip;
        return this;
    }
    public addClassCode(classCode: string): ScenarioData {
        this.classCode = classCode;
        return this;
    }
    public addDate(date: string): ScenarioData {
        this.date = date;
        return this;
    }
    public addCoverageQuestions(coverageQuestions: Array<any>): ScenarioData {
        this.coverageQuestions = coverageQuestions;
        return this;
    }
    public addLosses(losses: boolean): ScenarioData {
        this.losses = losses;
        return this;
    }
    public addEligibilityAcknowledgement(eligibilityAcknowledgement: boolean): ScenarioData {
        this.eligibilityAcknowledgement = eligibilityAcknowledgement;
        return this;
    }
    public addAgency(agency: string): ScenarioData {
        this.agency = agency;
        return this;
    }
}

export class CoverageQuestions {
    question: ProductFitData;

    public addQuestion(toBeTested: boolean, question: ProductFitData): CoverageQuestions {
        this.question = question;
        return this;
    }
}
