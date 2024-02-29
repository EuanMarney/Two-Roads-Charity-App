import * as dataRemovalUtils from '../../database/dataRemovalUtil';
import * as SecureStore from 'expo-secure-store';
import { connectToDatabase } from '../../database/db';

jest.mock('expo-secure-store', () => ({
  deleteItemAsync: jest.fn(),
}));

jest.mock('../../database/db', () => ({
  connectToDatabase: jest.fn(),
}));

const mockExecuteSql = jest.fn();

const mockDb = {
  transaction: jest.fn((callback) => {
    callback({
      executeSql: mockExecuteSql,
    });
  }),
};

beforeEach(() => {
  SecureStore.deleteItemAsync.mockClear();
  connectToDatabase.mockResolvedValue(mockDb);
  mockExecuteSql.mockClear();
  mockDb.transaction.mockClear();
});

describe('Data Removal Utilities', () => {
  it('should clear SecureStore keys', async () => {
    await dataRemovalUtils.clearSecureStore();
    expect(SecureStore.deleteItemAsync).toHaveBeenCalledWith('username');
    expect(SecureStore.deleteItemAsync).toHaveBeenCalledWith('pin');
  });

  it('should drop all specified tables', async () => {
    await dataRemovalUtils.dropAllTables(mockDb);
    const expectedTables = ['HedonicMoments', 'UserPreferences', 'ActsOfKindness', 'GratitudeDiary'];
    expectedTables.forEach(table => {
      expect(mockExecuteSql).toHaveBeenCalledWith(`DROP TABLE IF EXISTS ${table};`, [], expect.any(Function), expect.any(Function));
    });
    expect(mockDb.transaction).toHaveBeenCalledTimes(expectedTables.length);
  });

  it('should remove all user data', async () => {
    await dataRemovalUtils.removeAllUserData();
    expect(SecureStore.deleteItemAsync).toHaveBeenCalledTimes(2); // For 'username' and 'pin'
    expect(connectToDatabase).toHaveBeenCalled();
    const expectedTables = ['HedonicMoments', 'UserPreferences', 'ActsOfKindness', 'GratitudeDiary'];
    expectedTables.forEach(table => {
      expect(mockExecuteSql).toHaveBeenCalledWith(`DROP TABLE IF EXISTS ${table};`, [], expect.any(Function), expect.any(Function));
    });
  });
});
