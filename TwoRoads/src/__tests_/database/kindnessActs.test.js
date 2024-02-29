import {getAllActsOfKindness,
  getKindnessActsForDate,
  insertActOfKindness} from '../../database/kindnessActs';

const mockExecuteSql = jest.fn();

const mockDb = {
  transaction: jest.fn((transactionCallback, errorCallback, successCallback) => {
    try {
      transactionCallback({
        executeSql: mockExecuteSql,
      });
      if (successCallback) successCallback();
    } catch (error) {
      if (errorCallback) errorCallback(error);
    }
  }),
};

beforeEach(() => {
  mockExecuteSql.mockClear();
  mockDb.transaction.mockClear();
});

describe('Acts Of Kindness DB Operations', () => {
  it('should insert an Act of Kindness', () => {
    const onSuccessMock = jest.fn();
    const onErrorMock = jest.fn();
    const date = '2022-02-02';
    const kindnessActs = ['Helping an elderly neighbor', 'Donating clothes', 'Volunteering'];

    insertActOfKindness(
      mockDb,
      date,
      ...kindnessActs,
      onSuccessMock,
      onErrorMock,
    );

    // Check if executeSql was called correctly
    expect(mockExecuteSql).toHaveBeenCalledWith(
      expect.stringContaining("INSERT INTO ActsOfKindness"),
      [date, ...kindnessActs],
      expect.any(Function),
      expect.any(Function)
    );
  });

  it('should attempt to fetch all Kindness Acts from the database', () => {
    getAllActsOfKindness(mockDb);

    // Check if executeSql was called with the correct SQL command
    expect(mockExecuteSql).toHaveBeenCalledWith(
      "SELECT * FROM ActsOfKindness",
      [],
      expect.any(Function), // Success callback
      expect.any(Function)  // Error callback
    );
  });

  it('should attempt to fetch Kindness Acts for a given date', () => {
    const selectedDate = '2022-01-01';

    getKindnessActsForDate(mockDb, selectedDate);

    // Verify the SQL command and parameters
    expect(mockExecuteSql).toHaveBeenCalledWith(
      "SELECT * FROM ActsOfKindness WHERE date = ?;",
      [selectedDate],
      expect.any(Function), // Success callback
      expect.any(Function)  // Error callback
    );
  });
});
