import {RealityLogProperty} from "./entities/RealityLogProperty";
import {SystemLogProperty} from "./entities/SystemLogProperty";
import {RequestLogProperty} from "./entities/RequestLogProperty";
import {EventKindDescriptionLogProperty} from "./entities/EventKindDescriptionLogProperty";

export class PolarisLogProperties {

    //#region Data members

    private message: string;
    private throwable: object;
    private elapsedTime: number;
    private logId: string;
    private customProperties: object;
    private requestId: string;
    private upn: string;
    private eventKind: string;
    private response: object;
    private applicationId: string;
    private applicationName: string;
    private repositoryVersion: string;
    private environment: string;
    private isTraceable: boolean;
    private component: string;
    private requestingSystemId: string;
    private requestingSystemName: string;
    private requestIp: string;
    private recordId: string;
    private eventKindDescription: EventKindDescriptionLogProperty;
    private request: RequestLogProperty;
    private reality: RealityLogProperty;

    //#endregion

    //#region Constructor

    constructor(message: string) {
        this.message = message;
        this.reality = new RealityLogProperty();
        this.request = new RequestLogProperty();
        this.request.setRequestingSystem(new SystemLogProperty());
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

    getUpn() {
        return this.upn;
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

    getIsTraceable() {
        return this.isTraceable;
    }

    getRecordId() {
        return this.recordId;
    }

    getEventKind() {
        return this.eventKind;
    }

    getEventKindDescription() {
        return this.eventKindDescription;
    }

    getRequestId() {
        return this.requestId;
    }

    getRequestIp() {
        return this.requestIp;
    }

    getRequestingSystemName() {
        return this.request.getRequestingSystem().getName();
    }

    getRequestingSystemId() {
        return this.request.getRequestingSystem().getId();
    }

    getRealityType() {
        return this.reality.getType();
    }

    getRealityId() {
        return this.reality.getId();
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

    setEventKindDescription(eventKindDescription: EventKindDescriptionLogProperty): PolarisLogProperties {
        this.eventKindDescription = eventKindDescription;
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

    setTraceable(isTraceable: boolean): PolarisLogProperties {
        this.isTraceable = isTraceable;
        return this;
    }

    setRequestIp(requestIp: string): PolarisLogProperties {
        this.requestIp = requestIp;
        return this;
    }

    setRequestingSystemName(requestingSystemName: string): PolarisLogProperties {
        this.request.getRequestingSystem().setName(requestingSystemName);
        return this;
    }

    setRequestingSystemId(requestingSystemId: string): PolarisLogProperties {
        this.request.getRequestingSystem().setId(requestingSystemId);
        return this;
    }

    setRealityType(reality: string): PolarisLogProperties {
        this.reality.setType(reality);
        return this;
    }

    setRealityId(realityId: string): PolarisLogProperties {
        this.reality.setId(realityId);
        return this;
    }

    //#endregion
}
