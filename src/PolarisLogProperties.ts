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

    public constructor(message: string) {
        this.message = message;
        this.eventKindDescription = new EventKindDescriptionLogProperty();
        this.reality = new RealityLogProperty();
        this.request = new RequestLogProperty();
        this.system = new SystemLogProperty();
    }

    //#endregion

    //#region Getters

    public getMessage(): string {
        return this.message;
    }

    public getThrowable(): object {
        return this.throwable;
    }

    public getElapsedTime(): number {
        return this.elapsedTime;
    }

    public getLogId(): string {
        return this.logId;
    }

    public getCustomProperties(): object {
        return this.customProperties;
    }

    public getRequestId(): string {
        return this.requestId;
    }

    public getUpn(): string {
        return this.upn;
    }

    public getResponse(): object {
        return this.response;
    }

    public getRepositoryVersion(): string {
        return this.repositoryVersion;
    }

    public getEnvironment(): string {
        return this.environment;
    }

    public getComponent(): string {
        return this.component;
    }

    public getIsTraceable(): boolean {
        return this.isTraceable;
    }

    public getRecordId(): string {
        return this.recordId;
    }

    public getEventKind(): string {
        return this.eventKind;
    }

    public getEventKindDescriptionSystemId(): string {
        return this.eventKindDescription.getSystemId();
    }

    public getEventKindDescriptionRequestingSystemId(): string {
        return this.eventKindDescription.getRequestingSystemId();
    }

    public getRealityId(): string {
        return this.reality.getId();
    }

    public getRealityType(): string {
        return this.reality.getType();
    }

    public getRequestingIp(): string {
        return this.request.getRequestingIp();
    }

    public getRequestingSystemName(): string {
        return this.request.getRequestingSystem().getName();
    }

    public getRequestingSystemId(): string {
        return this.request.getRequestingSystem().getId();
    }

    public getSystemName(): string {
        return this.system.getName();
    }

    public getSystemId(): string {
        return this.system.getId();
    }

    //#endregion

    //#region Setters

    public setMessage(message: string): PolarisLogProperties {
        this.message = message;
        return this;
    }

    public setThrowable(throwable: object): PolarisLogProperties {
        this.throwable = throwable;
        return this;
    }

    public setElapsedTime(elapsedTime: number): PolarisLogProperties {
        this.elapsedTime = elapsedTime;
        return this;
    }

    public setLogId(logId: string): PolarisLogProperties {
        this.logId = logId;
        return this;
    }

    public setCustomProperties(customProperties: object): PolarisLogProperties {
        this.customProperties = customProperties;
        return this;
    }

    public setRequestId(requestId: string): PolarisLogProperties {
        this.requestId = requestId;
        return this;
    }

    public setUpn(upn: string): PolarisLogProperties {
        this.upn = upn;
        return this;
    }

    public setResponse(response: object): PolarisLogProperties {
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

    public setIsTraceable(isTraceable: boolean): PolarisLogProperties {
        this.isTraceable = isTraceable;
        return this;
    }

    public setRecordId(recordId: string): PolarisLogProperties {
        this.recordId = recordId;
        return this;
    }

    public setEventKind(eventKind: string): PolarisLogProperties {
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

    public setRealityId(realityId: string): PolarisLogProperties {
        this.reality.setId(realityId);
        return this;
    }

    public setRealityType(realityType: string): PolarisLogProperties {
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

    public setApplicationProperties(appProps: ApplicationLogProperties): PolarisLogProperties {
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
