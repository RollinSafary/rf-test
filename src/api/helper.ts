import { logCall, logDebug, logError, logResponse } from 'helpers/logger';
export interface IApiResponseGeneratorArguments<B, P> {
  body?: B | null;
  params?: P;
}
interface IApiArguments<B, P> extends IApiResponseGeneratorArguments<B, P> {
  shouldFail?: boolean;
}

export const createEndpoint = <B, R, P, E = any>(
  method: RequestMethod,
  url: string,
  responseGenerator: (args: IApiResponseGeneratorArguments<B, P>) => R,
  errorGenerator?: (args: IApiResponseGeneratorArguments<B, P>) => E
): ((config: IApiArguments<B, P>) => Promise<R>) => {
  const endpoint = async ({
    body,
    params,
    shouldFail,
  }: IApiArguments<B, P>): Promise<R> => {
    logCall(`${method?.toUpperCase()}: ${url}`, {
      body,
      params,
    });
    return new Promise<R>((resolve, reject) => {
      setTimeout(() => {
        if (shouldFail) {
          const error =
            errorGenerator?.({ body, params }) ??
            new Error('Default Rejection');
          reject(error);
          logError(`${method}: ${url}`, {
            body,
            params,
            error,
          });
        } else {
          const response = responseGenerator({ body, params });
          resolve(response);
          logResponse(`${method?.toUpperCase()}: ${url}`, {
            body,
            params,
            response,
          });
        }
        logDebug('DB', DB_Imitator.getInstance());
      }, 1000);
    });
  };
  return endpoint;
};

export class DB_Imitator {
  private static instance: DB_Imitator;

  public static getInstance(): DB_Imitator {
    if (!this.instance) {
      this.instance = new this();
    }

    return this.instance;
  }

  private tables: Map<string, Map<string, unknown>> = new Map();

  private constructor() {}

  private getTable<D>(tableName: string): Map<string, D> {
    if (!this.hasTable(tableName)) {
      throw new Error('Table was not found');
    }
    return this.tables.get(tableName)! as Map<string, D>;
  }

  public hasTable(tableName: string): boolean {
    return this.tables.has(tableName);
  }

  public createTable<D>(tableName: string): void {
    this.tables.set(tableName, new Map<string, D>());
  }

  public getData<D>(tableName: string, id: string): D | null {
    const table = this.getTable(tableName);
    const data = table.get(id);
    return data ? (JSON.parse(JSON.stringify(data)) as D) : null;
  }

  public setData<D>(tableName: string, id: string, data: D): void {
    const table = this.getTable(tableName);
    table.set(id, data);
  }
}
