import {
  IProjectHistoryBody,
  IProjectHistoryParams,
  IProjectHistoryResponse,
} from '..';
import { IApiResponseGeneratorArguments } from '../../../helper';
import { getHistoryItemsFromDB } from './be';

export const getLogoHistoryItemsReponseGenerator = (
  args: IApiResponseGeneratorArguments<
    IProjectHistoryBody,
    IProjectHistoryParams
  >
): IProjectHistoryResponse => {
  const historyItems = args.params?.projectId
    ? getHistoryItemsFromDB(args.params.projectId, args.params.page)
    : [];

  return { historyItems };
};
