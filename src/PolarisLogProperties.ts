import {RealityLogProperty} from "./entities/RealityLogProperty";
import {SystemLogProperty} from "./entities/SystemLogProperty";
import {RequestLogProperty} from "./entities/RequestLogProperty";
import {EventKindDescriptionLogProperty} from "./entities/EventKindDescriptionLogProperty";
import {ApplicationLogProperties} from "./entities/ApplicationLogProperties";

export class PolarisLogProperties {

    //#region Data members

    private message: string;
    private throwable: object;
    private elapsedTime: number;
    private logId: string;
    private customProperties: object;
    private requestId: string;
    private upn: string;
    private response: object;
    private repositoryVersion: string;
    private environment: string;
    private component: string;
    private isTraceable: boolean;
    private recordId: string;
    private eventKind: string;
    private eventKindDescription: EventKindDescriptionLogProperty;
    private reality: RealityLogProperty;
    private request: RequestLogProperty;
    private system: SystemLogProperty;

    //#endregion

    //#region Constructor

    constructor(message: string) {
        this.message = message;
        this.eventKindDescription = new EventKindDescriptionLogProperty();
        this.reality = new RealityLogProperty();
        this.request = new RequestLogProperty();
        this.system = new SystemLogProperty();
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

    getRequestId() {
        return this.requestId;
    }

    getUpn() {
        return this.upn;
    }

    getResponse() {
        return this.response;
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

    getEventKindDescriptionSystemId() {
        return this.eventKindDescription.getSystemId();
    }

    getEventKindDescriptionRequestingSystemId() {
        return this.eventKindDescription.getRequestingSystemId();
    }

    getRealityId() {
        return this.reality.getId();
    }

    getRealityType() {
        return this.reality.getType();
    }

    getRequestingIp() {
        return this.request.getRequestingIp();
    }

    getRequestingSystemName() {
        return this.request.getRequestingSystem().getName();
    }

    getRequestingSystemId() {
        return this.request.getRequestingSystem().getId();
    }

    getSystemName() {
        return this.system.getName();
    }

    getSystemId() {
        return this.system.getId();
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

    setUpn(upn: string): PolarisLogProperties {
        this.upn = upn;
        return this;
    }

    setResponse(response: object): PolarisLogProperties {
        this.response = response;
        return this;
    }

    private setRepositoryVersion(repositoryVersion: string): PolarisLogProperties {
        this.repositoryVersion = repositoryVersion;
        return this;
    }

    private setEnvironment(environment: string): PolarisLogProperties {
        this.environment = environment;
        return this;
    }

    private setComponent(component: string): PolarisLogProperties {
        this.component = component;
        return this;
    }

    setIsTraceable(isTraceable: boolean): PolarisLogProperties {
        this.isTraceable = isTraceable;
        return this;
    }

    setRecordId(recordId: string): PolarisLogProperties {
        this.recordId = recordId;
        return this;
    }

    setEventKind(eventKind: string): PolarisLogProperties {
        this.eventKind = eventKind;
        return this;
    }

    private setEventKindDescriptionSystemId(eventKindDescriptionSystemId: string): PolarisLogProperties {
        this.eventKindDescription.setSystemId(eventKindDescriptionSystemId);
        return this;
    }

    private setEventKindDescriptionRequestingSystemId(eventKindDescriptionRequestingSystemId: string): PolarisLogProperties {
        this.eventKindDescription.setRequestingSystemId(eventKindDescriptionRequestingSystemId);
        return this;
    }

    setRealityId(realityId: string): PolarisLogProperties {
        this.reality.setId(realityId);
        return this;
    }

    setRealityType(realityType: string): PolarisLogProperties {
        this.reality.setType(realityType);
        return this;
    }

    private setRequestingIp(requestingIp: string): PolarisLogProperties {
        this.request.setRequestingIp(requestingIp);
        return this;
    }

    private setRequestingSystemName(requestingSystemName: string): PolarisLogProperties {
        this.request.getRequestingSystem().setName(requestingSystemName);
        return this;
    }

    private setRequestingSystemId(requestingSystemId: string): PolarisLogProperties {
        this.request.getRequestingSystem().setId(requestingSystemId);
        return this;
    }

    private setSystemName(systemName: string): PolarisLogProperties {
        this.system.setName(systemName);
        return this;
    }

    private setSystemId(systemId: string): PolarisLogProperties {
        this.system.setId(systemId);
        return this;
    }

    setApplicationProperties(appProps: ApplicationLogProperties): PolarisLogProperties {
        this.setSystemId(appProps.getId());
        this.setEventKindDescriptionSystemId(appProps.getId());
        this.setSystemName(appProps.getName());
        this.setRepositoryVersion(appProps.getRepositoryVersion());
        this.setEnvironment(appProps.getEnvironment());
        this.setComponent(appProps.getComponent());
        return this;
    }

    //#endregion
}
