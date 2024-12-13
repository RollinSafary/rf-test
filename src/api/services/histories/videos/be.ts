import { DB_Imitator } from 'api/helper';
import { IHistoryItem } from '..';

const tableName = 'videosHistory';
const itemPrefix = 'video';

const generateMockHistoryItem = (index: number): IHistoryItem => {
  const randomDate = new Date(
    Date.now() - Math.floor(Math.random() * 10000000000) // Random past dates
  ).toISOString();

  return {
    id: `${itemPrefix}-item-${index + 1}`,
    date: randomDate,
    propertyName: `${itemPrefix}-Property-${(index % 5) + 1}`,
    changeAuthor: `${itemPrefix}-User-${(index % 3) + 1}`,
    valueBefore: `${itemPrefix}-ValueBefore-${index + 1}`,
    valueAfter: `${itemPrefix}-ValueAfter-${index + 1}`,
  };
};

export const getHistoryItemsFromDB = (projectId: string, page: number = 0) => {
  const db = DB_Imitator.getInstance();
  if (!db.hasTable(tableName)) {
    db.createTable(tableName);
  }

  if (!db.getData(tableName, projectId)) {
    const historyItems: IHistoryItem[] = Array.from(
      { length: 30 },
      (_, index) => generateMockHistoryItem(index)
    );
    db.setData(tableName, projectId, historyItems);
  }

  const items: IHistoryItem[] = db.getData<IHistoryItem[]>(
    tableName,
    projectId
  )!;
  const startIndex = page * 10;
  return items.splice(startIndex, 10);
};
