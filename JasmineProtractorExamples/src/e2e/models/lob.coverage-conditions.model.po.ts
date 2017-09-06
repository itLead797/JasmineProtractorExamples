/**
 * Class that includes lob data for use with testing the product fit fields
 */
export class ProductFitLob {
    toBeTested: boolean;  // value used to turn on/off a question for testing
    value: string;       // Name of hte LOB (Property, Liability, Automobile, ...)

    public addToBeTested(toBeTested: boolean): ProductFitLob {
        this.toBeTested = toBeTested;
        return this;
    }

    public addValue(value: string): ProductFitLob {
        this.value = value;
        return this;
    }
}
