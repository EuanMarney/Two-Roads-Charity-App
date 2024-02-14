// create database using expo-sqlite
import * as SQLite from "expo-sqlite";

export const connectToDatabase = () => {
  return SQLite.openDatabase("TwoRoadsV2.db");
};

//tables to be created here
export const createTables = (db) => {
  const hedonicMomentsQuery = `
    CREATE TABLE IF NOT EXISTS HedonicMoments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT,
      firstMoment TEXT,
      secondMoment TEXT,
      thirdMoment TEXT,
      fourthMoment TEXT
    );
  `;

  const userPreferencesQuery = `
    CREATE TABLE IF NOT EXISTS UserPreferences (
      id INTEGER PRIMARY KEY,
      notificationsEnabled BOOLEAN,
      name TEXT,
      password TEXT,
      streaks INTEGER,
      date TEXT
    );
  `;

  const actsOfKindnessQuery = `
  CREATE TABLE IF NOT EXISTS ActsOfKindness (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstKindness TEXT,
    secondKindness TEXT,
    thirdKindness TEXT,
    date TEXT
  );
`;

  const gratitudeDiaryQuery = `
    CREATE TABLE IF NOT EXISTS GratitudeDiary (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstGrateful TEXT,
      secondGrateful TEXT,
      thirdGrateful TEXT,
      firstWhy TEXT,
      secondWhy TEXT,
      thirdWhy TEXT,
      date TEXT
    );
  `;

  const actsOfConnectionQuery = `
    CREATE TABLE IF NOT EXISTS ActsOfConnection (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstConnection TEXT,
      secondConnection TEXT,
      thirdConnection TEXT,
      date TEXT
    );
  `;
  
  db.transaction(tx => {
    tx.executeSql(hedonicMomentsQuery);
    tx.executeSql(userPreferencesQuery);
    tx.executeSql(actsOfKindnessQuery);
    tx.executeSql(gratitudeDiaryQuery);
    tx.executeSql(actsOfConnectionQuery);
  }, (error) => {
    console.error("Error creating tables: ", error);
  });
};

export const getHedonicMoments = async (db) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM HedonicMoments;',
        [],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
        (_, error) => {
          reject(error);
          return true; // To stop the propagation of the error
        }
      );
    });
  });
};


export const getHedonicMomentsForDate = async (db, selectedDate) => {
  // Assuming selectedDate is in the correct format (YYYY-M-D) as stored in your database
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM HedonicMoments WHERE date = ?;',
        [selectedDate],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
        (_, error) => {
          reject(error);
          return true; // To stop the propagation of the error
        }
      );
    });
  });
};


