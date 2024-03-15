import { createTables } from '../../database/db';

// mock database to collect sql calls
const mockDb = {
  transaction: jest.fn((callback, errorCallback) => {
    callback({
      executeSql: jest.fn((query) => {
        console.log("Query:", query);
      }),
    });
  }),
};

describe("Database", () => {
  beforeEach(() => {
    console.log = jest.fn();
    mockDb.transaction.mockClear();
    createTables(mockDb);
  });

  function expectTableCreationQueryExists(tableName, executedQueries, checkAutoIncrement = true) {
    const pattern = new RegExp(`CREATE TABLE IF NOT EXISTS ${tableName}\\s+\\(`, 'i');
    const idColumnPattern = checkAutoIncrement
      ? /id\s+INTEGER\s+PRIMARY KEY\s+AUTOINCREMENT/i
      : /id\s+INTEGER\s+PRIMARY KEY/i;
    const dateColumnPattern = /date\s+TEXT/i;

    const hasTableCreationQuery = executedQueries.some(query =>
      pattern.test(query) && idColumnPattern.test(query) && dateColumnPattern.test(query)
    );

    expect(hasTableCreationQuery).toBeTruthy();
  }

  it("should create required tables with essential columns", () => {
    // Normalize and collect all executed queries
    const executedQueries = console.log.mock.calls.map(call => normalizeQuery(call[1]));

    // Test for each table's creation query, excluding UserPreferences
    const tables = ["ActsOfKindness", "HedonicMoments", "GratitudeDiary", "ActsOfConnection"];
    tables.forEach(tableName => expectTableCreationQueryExists(tableName, executedQueries));

    // Special handling for UserPreferences (no autoincrement)
    expectTableCreationQueryExists("UserPreferences", executedQueries, false);
  });

  const normalizeQuery = (query) => query.trim().replace(/\s+/g, ' ');
});
