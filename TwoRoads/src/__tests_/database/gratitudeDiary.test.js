import {getAllGratitudeDiaryEntries,
  getGratitudeDiaryForDate,
  insertGratitudeDiaryEntry} from '../../database/gratitudeDiary'

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

describe('Gratitude Diary DB Operations', () => {
  it('should insert a new gratitude diary entry', () => {
    const onSuccessMock = jest.fn();
    const onErrorMock = jest.fn();
    const date = '2022-01-01';
    const gratefuls = ['Being healthy', 'Family support', 'Sunny weather'];
    const whys = ['It allows me to do what I love', 'They provide me with strength', 'It brightens my day'];

    insertGratitudeDiaryEntry(
      mockDb,
      date,
      ...gratefuls,
      ...whys,
      onSuccessMock,
      onErrorMock,
    );

    // Verify that executeSql was called with the correct SQL command and parameters
    expect(mockExecuteSql).toHaveBeenCalledWith(
      `
    INSERT INTO GratitudeDiary (date,firstGrateful, secondGrateful, thirdGrateful, firstWhy, secondWhy, thirdWhy)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `,
      [date, ...gratefuls, ...whys],
      expect.any(Function), // onSuccess callback
      expect.any(Function), // onError callback
    );
  });

  it('should attempt to fetch all gratitude diary entries from the database', () => {
    getAllGratitudeDiaryEntries(mockDb);

    // Verify that executeSql was called with the correct SQL command
    expect(mockExecuteSql).toHaveBeenCalledWith(
      "SELECT * FROM GratitudeDiary",
      [],
      expect.any(Function), // Success callback
      expect.any(Function)  // Error callback
    );
  });

  it('should attempt to fetch gratitude diary entries for a given date from the database', () => {
    const selectedDate = '2022-01-01';

    getGratitudeDiaryForDate(mockDb, selectedDate);

    // Verify that executeSql was called with the correct SQL command and parameters
    expect(mockExecuteSql).toHaveBeenCalledWith(
      "SELECT * FROM GratitudeDiary WHERE date = ?;",
      [selectedDate],
      expect.any(Function), // Success callback
      expect.any(Function)  // Error callback
    );
  });
});
