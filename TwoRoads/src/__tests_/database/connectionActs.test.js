import {getAllActsOfConnection, getConnectionActsForDate, insertConnectionAct} from "../../database/connectionActs";

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

describe('Connection Acts DB Operations', () => {
  it('should attempt to insert a Connection Act', () => {
    const onSuccessMock = jest.fn();
    const onErrorMock = jest.fn();
    const date = '2022-03-20';
    const firstConnection = 'Alice';
    const secondConnection = 'Bob';
    const thirdConnection = 'Charlie';

    insertConnectionAct(
      mockDb,
      date,
      firstConnection,
      secondConnection,
      thirdConnection,
      onSuccessMock,
      onErrorMock,
    );

    // Check if executeSql was called correctly
    expect(mockExecuteSql).toHaveBeenCalledWith(
      `
      INSERT INTO ActsOfConnection (date, firstConnection, secondConnection, thirdConnection)
      VALUES (?, ?, ?, ?);
    `,
      [date, firstConnection, secondConnection, thirdConnection],
      expect.any(Function), // onSuccess callback
      expect.any(Function), // onError callback
    );
  });

  it('should attempt to fetch all Acts of Connection from the database', () => {
    getAllActsOfConnection(mockDb);

    // Verify that executeSql was called with the correct SQL command
    expect(mockExecuteSql).toHaveBeenCalledWith(
      "SELECT * FROM ActsOfConnection",
      [],
      expect.any(Function), // Success callback
      expect.any(Function)  // Error callback
    );
  });

  it('should attempt to fetch Connection Acts for a given date from the database', () => {
    const selectedDate = '2022-01-01';

    getConnectionActsForDate(mockDb, selectedDate);

    expect(mockExecuteSql).toHaveBeenCalledWith(
      "SELECT * FROM ActsOfConnection WHERE date = ?;",
      [selectedDate],
      expect.any(Function), // Success callback
      expect.any(Function)  // Error callback
    );
  });
});
