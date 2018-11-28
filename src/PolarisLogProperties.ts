export class PolarisLogProperties {

    private message: string;
    private throwable: object;
    private elapsedTime: number;
    private logId: string;
    private customProperties: object;
    private realityId: string;
    private requestId: string;
    private upn: string;
    private eventKind: string;
    private request: object;
    private response: object;
    private applicationId: string;
    private applicationName: string;
    private repositoryVersion: string;
    private environment: string;
    private isTraceable: boolean;
    private eventKindDescription: string;
    private component: string;
    private reality: string;
    private requestingSystemId: string;
    private requestingSystemName: string;
    private requestIp: string;
    private recordId: string;

    constructor() {
    }

    getMessage() {
        return this.message;
    }

    setMessage(message: string): PolarisLogProperties {
        this.message = message;
        return this;
    }

    getThrowable() {
        return this.throwable;
    }

    setThrowable(throwable: object): PolarisLogProperties {
        this.throwable = throwable;
        return this;
    }

    getElapsedTime() {
        return this.elapsedTime;
    }

    setElapsedTime(elapsedTime: number): PolarisLogProperties {
        this.elapsedTime = elapsedTime;
        return this;
    }

    getLogId() {
        return this.logId;
    }

    setLogId(logId: string): PolarisLogProperties {
        this.logId = logId;
        return this;
    }

    getCustomProperties() {
        return this.customProperties;
    }

    setCustomProperties(customProperties: object): PolarisLogProperties {
        this.customProperties = customProperties;
        return this;
    }

    getRealityId() {
        return this.realityId;
    }

    setRealityId(realityId: string): PolarisLogProperties {
        this.realityId = realityId;
        return this;
    }

    getRequestId() {
        return this.requestId;
    }

    setRequestId(requestId: string): PolarisLogProperties {
        this.requestId = requestId;
        return this;
    }

    getUpn() {
        return this.upn;
    }

    setUpn(upn: string): PolarisLogProperties {
        this.upn = upn;
        return this;
    }

    getEventKind() {
        return this.eventKind;
    }

    setEventKind(eventKind: string): PolarisLogProperties {
        this.eventKind = eventKind;
        return this;
    }

    getEventKindDescription() {
        return this.eventKindDescription;
    }

    getRequest() {
        return this.request;
    }

    getResponse() {
        return this.response;
    }

    getApplicationId() {
        return this.applicationId;
    }

    getApplicationName() {
        return this.applicationName;
    }

    getRepositoryVersion() {
        return this.repositoryVersion;
    }

    getEnvironment() {
        return this.environment;
    }

    getComponent() {
        return this.component;
    }

    getReality() {
        return this.reality;
    }

    getRequestingSystemId() {
        return this.requestingSystemId;
    }

    getRequestingSystemName() {
        return this.requestingSystemName;
    }

    getRequestIp() {
        return this.requestIp;
    }

    getIsTraceable() {
        return this.isTraceable;
    }

    getRecordId() {
        return this.recordId;
    }
}
