export class PolarisLogProperties {

    //#region Data members

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

    //#endregion

    //#region Constructor

    constructor(message: string) {
        this.message = message;
    }

    //#endregion

    //#region Getters

    getMessage() {
        return this.message;
    }

    getThrowable() {
        return this.throwable;
    }

    getElapsedTime() {
        return this.elapsedTime;
    }

    getLogId() {
        return this.logId;
    }

    getCustomProperties() {
        return this.customProperties;
    }

    getRealityId() {
        return this.realityId;
    }

    getRequestId() {
        return this.requestId;
    }

    getUpn() {
        return this.upn;
    }

    getEventKind() {
        return this.eventKind;
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

    //#endregion

    //#region Setters

    setMessage(message: string): PolarisLogProperties {
        this.message = message;
        return this;
    }

    setThrowable(throwable: object): PolarisLogProperties {
        this.throwable = throwable;
        return this;
    }

    setElapsedTime(elapsedTime: number): PolarisLogProperties {
        this.elapsedTime = elapsedTime;
        return this;
    }

    setLogId(logId: string): PolarisLogProperties {
        this.logId = logId;
        return this;
    }

    setCustomProperties(customProperties: object): PolarisLogProperties {
        this.customProperties = customProperties;
        return this;
    }

    setRealityId(realityId: string): PolarisLogProperties {
        this.realityId = realityId;
        return this;
    }

    setRequestId(requestId: string): PolarisLogProperties {
        this.requestId = requestId;
        return this;
    }

    setRecordId(recordId: string): PolarisLogProperties {
        this.recordId = recordId;
        return this;
    }

    setUpn(upn: string): PolarisLogProperties {
        this.upn = upn;
        return this;
    }

    setEventKind(eventKind: string): PolarisLogProperties {
        this.eventKind = eventKind;
        return this;
    }

    setEventKindDescription(eventKindDescription: string): PolarisLogProperties {
        this.eventKindDescription = eventKindDescription;
        return this;
    }

    setRequest(request: object): PolarisLogProperties {
        this.request = request;
        return this;
    }

    setResponse(response: object): PolarisLogProperties {
        this.response = response;
        return this;
    }

    setApplicationId(applicationId: string): PolarisLogProperties {
        this.applicationId = applicationId;
        return this;
    }

    setApplicationName(applicationName: string): PolarisLogProperties {
        this.applicationName = applicationName;
        return this;
    }

    setRepositoryVersion(repositoryVersion: string): PolarisLogProperties {
        this.repositoryVersion = repositoryVersion;
        return this;
    }

    setEnvironment(environment: string): PolarisLogProperties {
        this.environment = environment;
        return this;
    }

    setComponent(component: string): PolarisLogProperties {
        this.component = component;
        return this;
    }

    setReality(reality: string): PolarisLogProperties {
        this.reality = reality;
        return this;
    }

    setRequestingSystemId(requestingSystemId: string): PolarisLogProperties {
        this.requestingSystemId = requestingSystemId;
        return this;
    }

    setRequestingSystemName(requestingSystemName: string): PolarisLogProperties {
        this.requestingSystemName = requestingSystemName;
        return this;
    }

    setRequestIp(requestIp: string): PolarisLogProperties {
        this.requestIp = requestIp;
        return this;
    }

    setTraceable(isTraceable: boolean): PolarisLogProperties {
        this.isTraceable = isTraceable;
        return this;
    }

    //#endregion
}
