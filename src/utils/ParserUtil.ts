import cleanDeep = require("clean-deep");

export class ParserUtil {
    public static parseClassToCleansedObject(classToParse: any): object {
        return cleanDeep(JSON.parse(JSON.stringify(classToParse)));
    }
}
