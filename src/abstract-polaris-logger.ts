export abstract class AbstractPolarisLogger {
    public abstract fatal(message: string, ...args: any[]): void;
    public abstract error(message: string, ...args: any[]): void;
    public abstract warn(message: string, ...args: any[]): void;
    public abstract info(message: string, ...args: any[]): void;
    public abstract debug(message: string, ...args: any[]): void;
    public abstract trace(message: string, ...args: any[]): void;
}
