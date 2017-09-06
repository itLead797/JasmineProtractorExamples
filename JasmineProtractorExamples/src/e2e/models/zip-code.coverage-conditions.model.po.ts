/**
 * Class that includes zip code data for use with testing the product fit fields
 */
export class ProductFitZipCode {
    toBeTested: boolean;  // value used to turn on/off a question for testing
    value: string;        // zip code number
    state: string;        // state the zip code applies to
    address: string;      // valid address used for testing associated to the zip code
    phone: string;        // valid phone number associated to the address
    rampLogin: string;    // RAMP Agency Login used for in-family/out-of-family testing
    password: string;     // password associated to the login
    aiaAgency: string;    // AIA Agency Associated used for in-family/out-of-family testing
    agentName: string;    // Agent Name for state used for in-family/out-of-family testing
    npn: string;          // NPN used for in-family/out-of-family testing

    public addToBeTested(toBeTested: boolean): ProductFitZipCode {
        this.toBeTested = toBeTested;
        return this;
    }
    public addValue(value: string): ProductFitZipCode {
        this.value = value;
        return this;
    }
    public addState(state: string): ProductFitZipCode {
        this.state = state;
        return this;
    }
    public addAddress(address: string): ProductFitZipCode {
        this.address = address;
        return this;
    }
    public addPhone(phone: string): ProductFitZipCode {
        this.phone = phone;
        return this;
    }
    public addRampLogin(rampLogin: string): ProductFitZipCode {
        this.rampLogin = rampLogin;
        return this;
    }
    public addPassword(password: string): ProductFitZipCode {
        this.password = password;
        return this;
    }
    public addAiaAgency(aiaAgency: string): ProductFitZipCode {
        this.aiaAgency = aiaAgency;
        return this;
    }
    public addAgentName(agentName: string): ProductFitZipCode {
        this.agentName = agentName;
        return this;
    }
    public addNpn(npn: string): ProductFitZipCode {
        this.npn = npn;
        return this;
    }
}
