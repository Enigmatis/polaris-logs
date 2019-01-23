export interface DailyRotateFileConfiguration {
    directoryPath: string;
    fileNamePrefix: string;
    fileExtension: string;
    numberOfDaysToDeleteFile?: number;
}
