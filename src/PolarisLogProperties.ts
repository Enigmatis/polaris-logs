export class PolarisLogProperties {

    private readonly message: string;
    private readonly throwable: object;
    private readonly elapsedTime: number;
    private readonly logId: string;
    private readonly customProperties: object;
    private readonly realityId: string;
    private readonly requestId: string;
    private readonly upn: string;
    private readonly eventKind: string;
    private readonly request: string;
    private readonly response: string;
    private readonly applicationId: string;
    private readonly applicationName: string;
    private readonly repositoryVersion: string;
    private readonly environment: string;
    private readonly isTraceable: string;
    private readonly eventKindDescription: string;
    private readonly component: string;
    private readonly reality: string;
    private readonly requestingSystemId: string;
    private readonly requestingSystemName: string;
    private readonly requestIp: string;
    private readonly recordId: string;

    constructor(message, throwable, elapsedTime, logId,
                customProperties, realityId, requestId, upn,
                eventKind, request, response, applicationId,
                applicationName, repositoryVersion, environment, component,
                reality, requestingSystemId, requestingSystemName, requestIp,
                eventKindDescription, isTraceable, recordId) {
        this.message = message;
        this.throwable = throwable;
        this.elapsedTime = elapsedTime;
        this.logId = logId;
        this.customProperties = customProperties;
        this.realityId = realityId;
        this.requestId = requestId;
        this.upn = upn;
        this.eventKind = eventKind;
        this.request = request;
        this.response = response;
        this.applicationId = applicationId;
        this.applicationName = applicationName;
        this.repositoryVersion = repositoryVersion;
        this.environment = environment;
        this.isTraceable = isTraceable;
        this.eventKindDescription = eventKindDescription;
        this.component = component;
        this.reality = reality;
        this.requestingSystemId = requestingSystemId;
        this.requestingSystemName = requestingSystemName;
        this.requestIp = requestIp;
        this.recordId = recordId;
    }

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
        return this.getRecordId;
    }
}
