
/**
 * Class that includes info about a field that is tested in the Product Fit e2e tests
 */
export class ProductFitField {
    seq: string;              // field used for debugging purposes
    num: string;              // ETM question identifier // story number used for default rules
    ruleType: string;         // type of rule responce evoked by the question (productFit, terminal, referral, default, others...)
    pageLocation: string;     // page location of the question (eligibility, ratingInfo, underwriting)
    toBeTested: boolean;      // value used to turn on/off a question for testing
    id: string;               // field label on the UI
    baseId: string;           // ACORD ID
    zipCode: Array<string>;   // zipcodes applicable to the question
    lobs: Array<string>;      // LOBs the question pertains to
    relationship: string;     // identifies if the question is a parent, child, or single(standalone) question
    children: Array<string>;  // list of child questions by 'num' value
    questionType: string;     // identifies how the question is presented on the screen (checkbox, value entry, yes/no, radio button, default, others...)
    testValues: Array<string>;            // Used for value entry questions, contains the test data to be used in tests
    ruleResponseValue: Array<number>;     // Used for value entry questions, contains threshold values where a rule response is expected
    ruleResponseRuleType: Array<string>;  // Used for value entry questions, contsins the expected rule response based on the thresholds (terminal, productFit, or NGI path)
    declineLobs: Array<string>;      // list of LOBs declined based on rule response
    agentMessage: string;            // message displayed to an external customer
    uwMessage: string;               // message displayed to an internal customer
    approvedTextReviewDate: string;  // date the question text was validated against the team pringles spreadsheet
    approvedText: Array<string>;     // the approved text as it appeared in the team pringles spreadsheet // or the default rule name
    text: Array<string>;             // the question text used to test the UI. Where differences exist the 'logTestSummaryReport' function reports those differences

    public addSeq(seq: string): ProductFitField {
        this.seq = seq;
        return this;
    }

    public addNum(num: string): ProductFitField {
        this.num = num;
        return this;
    }

    public addRuleType(ruleType: string): ProductFitField {
        this.ruleType = ruleType;
        return this;
    }
    public addPageLocation(pageLocation: string): ProductFitField {
        this.pageLocation = pageLocation;
        return this;
    }
    public addToBeTested(toBeTested: boolean): ProductFitField {
        this.toBeTested = toBeTested;
        return this;
    }

    public addId(id: string): ProductFitField {
        this.id = id;
        return this;
    }

    public addBaseId(baseId: string): ProductFitField {
        this.baseId = baseId;
        return this;
    }

    public addZipCode(zipCode: Array<string>): ProductFitField {
        this.zipCode = zipCode;
        return this;
    }

    public addLobs(lobs: Array<string>): ProductFitField {
        this.lobs = lobs;
        return this;
    }

    public addRelationship(relationship: string): ProductFitField {
        this.relationship = relationship;
        return this;
    }
    public addChildren(children: Array<string>): ProductFitField {
        this.children = children;
        return this;
    }

    public addQuestionType(questionType: string): ProductFitField {
        this.questionType = questionType;
        return this;
    }

    public addTestValues(testValues: Array<string>): ProductFitField {
        this.testValues = testValues;
        return this;
    }

    public addRuleResponseValue(ruleResponseValue: Array<number>): ProductFitField {
        this.ruleResponseValue = ruleResponseValue;
        return this;
    }
    public addRuleResponseRuleType(ruleResponseRuleType: Array<string>): ProductFitField {
        this.ruleResponseRuleType = ruleResponseRuleType;
        return this;
    }

    public addDeclineLobs(declineLobs: Array<string>): ProductFitField {
        this.declineLobs = declineLobs;
        return this;
    }

    public addAgentMessage(agentMessage: string): ProductFitField {
        this.agentMessage = agentMessage;
        return this;
    }

    public addUwMessage(uwMessage: string): ProductFitField {
        this.uwMessage = uwMessage;
        return this;
    }

    public addApprovedTextReviewDate(approvedTextReviewDate: string): ProductFitField {
        this.approvedTextReviewDate = approvedTextReviewDate;
        return this;
    }

    public addApprovedText(approvedText: Array<string>): ProductFitField {
        this.approvedText = approvedText;
        return this;
    }

    public addText(text: Array<string>): ProductFitField {
        this.text = text;
        return this;
    }
}
