export class LoggerConfiguration {

    //#region Data Members

    private readonly _loggerLevel: string;
    private readonly _logstashHost: string;
    private readonly _logstashPort: number;

    //#endregion

    //#region Constructor

    constructor(loggerLevel: string, logstashHost: string, logstashPort: number) {
        this._loggerLevel = loggerLevel;
        this._logstashHost = logstashHost;
        this._logstashPort = logstashPort;
    }

    //#endregion

    //#region Getters

    public get loggerLevel(): string {
        return this._loggerLevel;
    }

    public get logstashHost(): string {
        return this._logstashHost;
    }

    public get logstashPort(): number {
        return this._logstashPort;
    }

    //#endregion
}
