/**
 * Class that includes class code data for use with testing the product fit fields
 */
export class ProductFitClassCode {
    toBeTested: boolean;            // value used to turn on/off a question for testing
    value: string;                  // class code number
    description: string;            // description of the class code which appears in the search results
    state: Array<string>;           // states where class code is valid. Can use Keyword 'all' in element 0
    bopFitQuestion: Array<string>;  // list of terminal and product fit questions associated to the class code
    uwQuestion: Array<string>;      // list of UW questions associated to the class code

    public addToBeTested(toBeTested: boolean): ProductFitClassCode {
        this.toBeTested = toBeTested;
        return this;
    }
    public addValue(value:string) : ProductFitClassCode {
        this.value = value;
        return this;
    }

    public addDescription(description: string): ProductFitClassCode {
        this.description = description;
        return this;
    }
    public addState(state: Array<string>): ProductFitClassCode {
        this.state = state;
        return this;
    }
    public addBopFitQuestion(bopFitQuestion: Array<string>): ProductFitClassCode {
        this.bopFitQuestion = bopFitQuestion;
        return this;
    }
    public addUwQuestion(uwQuestion: Array<string>): ProductFitClassCode {
        this.uwQuestion = uwQuestion;
        return this;
    }

}

