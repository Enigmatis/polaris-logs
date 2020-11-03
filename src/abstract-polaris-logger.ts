import { ApplicationProperties } from '@enigmatis/polaris-common';
import { serializeError } from 'serialize-error';
import { v4 as uuidv4 } from 'uuid';
import { LoggerConfiguration } from './configurations/logger-configuration';
import { Logger } from './logger-with-custom-levels';
import { PolarisLogProperties } from './polaris-log-properties';
import { createLogger } from './winston-logger';
import { EventKindDescription } from './entities';

const cleanDeep = require('clean-deep');

export abstract class AbstractPolarisLogger {
    private static getAppPropertiesToAssign(applicationProperties?: ApplicationProperties) {
        if (applicationProperties) {
            return {
                systemId: applicationProperties.id,
                systemName: applicationProperties.name,
                version: applicationProperties.version,
                environment: applicationProperties.environment,
                component: applicationProperties.component,
            };
        }
    }

    protected logger: Logger;

    protected constructor(
        loggerConfiguration: LoggerConfiguration,
        readonly applicationLogProperties?: ApplicationProperties,
    ) {
        this.logger = createLogger(loggerConfiguration);
    }

    public abstract fatal(message: string, ...args: any[]): void;

    public abstract error(message: string, ...args: any[]): void;

    public abstract warn(message: string, ...args: any[]): void;

    public abstract info(message: string, ...args: any[]): void;

    public abstract debug(message: string, ...args: any[]): void;

    public abstract trace(message: string, ...args: any[]): void;

    protected buildLog(message: string, polarisLogProperties?: PolarisLogProperties): any {
        const eventKindDescription = this.getEventKindDescription(polarisLogProperties);
        this.setEntityOrEntities(polarisLogProperties);
        const recordId = polarisLogProperties?.recordId || uuidv4();

        const propertiesWithCustom = {
            message,
            ...polarisLogProperties?.customProperties,
            ...polarisLogProperties,
            customProperties: undefined, // in order for it to be removed, so it won't be a duplicate
            ...AbstractPolarisLogger.getAppPropertiesToAssign(this.applicationLogProperties),
            eventKindDescription,
            recordId,
            throwable:
                polarisLogProperties &&
                polarisLogProperties.throwable &&
                serializeError(polarisLogProperties.throwable),
        };
        this.serializeMapsOfProperties(propertiesWithCustom, polarisLogProperties);
        return cleanDeep(propertiesWithCustom);
    }

    private serializeMapsOfProperties(
        properties: any,
        polarisLogProperties?: PolarisLogProperties,
    ) {
        if (polarisLogProperties?.entity?.secondaryIds) {
            Object.assign(properties.entity, {
                secondaryIds: JSON.stringify(
                    Object.fromEntries(polarisLogProperties.entity.secondaryIds),
                ),
            });
        }
        if (polarisLogProperties?.entity?.operationalData) {
            Object.assign(properties.entity, {
                operationalData: JSON.stringify(
                    Object.fromEntries(polarisLogProperties.entity.operationalData),
                ),
            });
        }
        if (polarisLogProperties?.groupId?.secondaryIds) {
            Object.assign(properties.groupId, {
                secondaryIds: JSON.stringify(
                    Object.fromEntries(polarisLogProperties.groupId.secondaryIds),
                ),
            });
        }
        if (
            polarisLogProperties?.entity?.correlationIds &&
            polarisLogProperties?.entity?.correlationIds.length > 0
        ) {
            const correlationIdsStringified = polarisLogProperties?.entity?.correlationIds.map(
                (value) => {
                    if (value) {
                        return {
                            id: value.id,
                            name: value.name,
                            secondaryIds: JSON.stringify(Object.fromEntries(value.secondaryIds!)),
                        };
                    }
                },
            );
            Object.assign(polarisLogProperties.entity.correlationIds, correlationIdsStringified);
        }
        if (
            polarisLogProperties?.entity?.subEntities &&
            polarisLogProperties?.entity?.subEntities.length > 0
        ) {
            const subEntitiesStringified = polarisLogProperties.entity.subEntities.map((value) => {
                if (value) {
                    return {
                        id: value.id,
                        name: value.name,
                        centralPoint: value.centralPoint,
                        operationalData: JSON.stringify(Object.fromEntries(value.operationalData!)),
                        secondaryIds: JSON.stringify(Object.fromEntries(value.secondaryIds!)),
                    };
                }
            });
            Object.assign(polarisLogProperties.entity.subEntities, subEntitiesStringified);
        }
    }

    private setEntityOrEntities(polarisLogProperties?: PolarisLogProperties): void {
        if (polarisLogProperties?.entities && polarisLogProperties?.entity) {
            if (!polarisLogProperties.entities.includes(polarisLogProperties.entity)) {
                polarisLogProperties.entities.push(polarisLogProperties.entity);
            }
            polarisLogProperties.entity = undefined;
        }
    }

    private getEventKindDescription(
        polarisLogProperties?: PolarisLogProperties,
    ): EventKindDescription | undefined {
        return this.applicationLogProperties?.id ||
            polarisLogProperties?.request?.requestingSystem?.id
            ? {
                  systemId: this.applicationLogProperties?.id,
                  requestingSystemId: polarisLogProperties?.request?.requestingSystem?.id,
              }
            : undefined;
    }
}
