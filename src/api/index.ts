import { createEndpoint, DB_Imitator } from './helper';
import {
  historiesBaseURL,
  IProjectHistoryBody,
  IProjectHistoryParams,
  IProjectHistoryResponse,
} from './services/histories';
import { getVideoHistoryItemsReponseGenerator } from './services/histories/videos';

DB_Imitator.getInstance();

export const API = {
  history: {
    getVideoProjectHistory: createEndpoint<
      IProjectHistoryBody,
      IProjectHistoryResponse,
      IProjectHistoryParams
    >(
      'GET',
      `${historiesBaseURL}/videos`,
      getVideoHistoryItemsReponseGenerator
    ),
  },
};
