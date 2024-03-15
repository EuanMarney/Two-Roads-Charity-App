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

describe('Connection Acts DB Operations', () => {
  beforeEach(() => {
    console.log('Clearing mock functions before each test');
    mockExecuteSql.mockClear();
    mockDb.transaction.mockClear();
  });

  it('should attempt to insert a Connection Act', () => {
    console.log('Starting test for insertConnectionAct');

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

    console.log('Verifying executeSql was called with the correct parameters');
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
    console.log('Starting test for getAllActsOfConnection');

    getAllActsOfConnection(mockDb);

    console.log('Verifying executeSql was called for fetching all Acts of Connection');
    expect(mockExecuteSql).toHaveBeenCalledWith(
      "SELECT * FROM ActsOfConnection",
      [],
      expect.any(Function), // Success callback
      expect.any(Function)  // Error callback
    );
  });

  it('should attempt to fetch Connection Acts for a given date from the database', () => {
    console.log('Starting test for getConnectionActsForDate');

    const selectedDate = '2022-01-01';

    getConnectionActsForDate(mockDb, selectedDate);

    console.log('Verifying executeSql was called for fetching Connection Acts for a date');
    expect(mockExecuteSql).toHaveBeenCalledWith(
      "SELECT * FROM ActsOfConnection WHERE date = ?;",
      [selectedDate],
      expect.any(Function), // Success callback
      expect.any(Function)  // Error callback
    );
  });
});
