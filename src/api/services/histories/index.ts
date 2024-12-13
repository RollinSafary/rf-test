export const historiesBaseURL = '/api/v1/histories';

export interface IHistoryItem {
  id: string;
  date: string;
  propertyName: string;
  changeAuthor: string;
  valueBefore: string;
  valueAfter: string;
}

export type IProjectHistoryBody = null;

export interface IProjectHistoryParams {
  projectId: string;
  page: number;
}
export interface IProjectHistoryResponse {
  historyItems: IHistoryItem[];
}
