import {getAllHedonicMoments,
  getHedonicMomentsForDate,
  insertHedonicMoment} from '../../database/hedonicMoments'

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

describe('Hedonic Moments DB Operations', () => {
  it('should insert a Hedonic Moment', () => {
    const onSuccessMock = jest.fn();
    const onErrorMock = jest.fn();
    const date = '2022-01-01';
    const moments = ['Reading', 'Walking', 'Cooking', 'Painting'];

    // Call the function with mock parameters
    insertHedonicMoment(
      mockDb,
      date,
      ...moments,
      onSuccessMock,
      onErrorMock,
    );

    const expectedSQL = `
    INSERT INTO HedonicMoments (date, firstMoment, secondMoment, thirdMoment, fourthMoment)
    VALUES (?, ?, ?, ?, ?);
  `.replace(/\s+/g, ' ').trim();

    // Check if the trimmed and space-normalized expected SQL matches the call
    expect(mockExecuteSql.mock.calls[0][0].replace(/\s+/g, ' ').trim()).toEqual(expectedSQL);
    expect(mockExecuteSql).toHaveBeenCalledWith(
      expect.any(String),
      [date, ...moments],
      expect.any(Function), // onSuccess callback
      expect.any(Function), // onError callback
    );
  });

  it('should attempt to fetch all Hedonic Moments from the database', () => {
    getAllHedonicMoments(mockDb);

    // Check if executeSql was called with the correct SQL command
    expect(mockExecuteSql).toHaveBeenCalledWith(
      "SELECT * FROM HedonicMoments",
      [],
      expect.any(Function), // Success callback
      expect.any(Function)  // Error callback
    );
  });

  it('should attempt to fetch Hedonic Moments for a given date', () => {
    const selectedDate = '2022-01-01';

    getHedonicMomentsForDate(mockDb, selectedDate);

    // Verify the SQL command and parameters
    expect(mockExecuteSql).toHaveBeenCalledWith(
      "SELECT * FROM HedonicMoments WHERE date = ?;",
      [selectedDate],
      expect.any(Function), // Success callback
      expect.any(Function)  // Error callback
    );
  });
});
