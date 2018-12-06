export class ParserUtil {
    public static parseClassToObject(classToParse: any): object {
        return JSON.parse(JSON.stringify(classToParse));
    }
}
