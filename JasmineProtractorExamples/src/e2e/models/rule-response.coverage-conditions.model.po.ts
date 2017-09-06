/**
 * Class that includes info about a rule responses for Product Fit fields
 */
export class ProductFitRuleResponse {
    value: number;
    ruleType: string;

    public addValue(value: number): ProductFitRuleResponse {
        this.value = value;
        return this;
    }

    public addRuleType(ruleType: string): ProductFitRuleResponse {
        this.ruleType = ruleType;
        return this;
    }
}
