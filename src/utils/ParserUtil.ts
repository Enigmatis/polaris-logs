export class ParserUtil {
    static parseClassToObject(classToParse: any): object {
        return JSON.parse(JSON.stringify(classToParse));
    }
}
