// create database using expo-sqlite
import * as SQLite from "expo-sqlite";

export const connectToDatabase = () => {
  return SQLite.openDatabase("TwoRoadsV2.db");
};

// tables to be created here
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
      date TEXT,
      notificationsEnabled BOOLEAN,
      name TEXT,
      password TEXT,
      streaks INTEGER
    );
  `;

  const actsOfKindnessQuery = `
  CREATE TABLE IF NOT EXISTS ActsOfKindness (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date TEXT,
    firstKindness TEXT,
    secondKindness TEXT,
    thirdKindness TEXT
  );
`;

  const gratitudeDiaryQuery = `
    CREATE TABLE IF NOT EXISTS GratitudeDiary (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT,
      firstGrateful TEXT,
      secondGrateful TEXT,
      thirdGrateful TEXT,
      firstWhy TEXT,
      secondWhy TEXT,
      thirdWhy TEXT
    );
  `;

  const actsOfConnectionQuery = `
    CREATE TABLE IF NOT EXISTS ActsOfConnection (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT,
      firstConnection TEXT,
      secondConnection TEXT,
      thirdConnection TEXT
    );
  `;

  db.transaction(
    (tx) => {
      tx.executeSql(hedonicMomentsQuery);
      tx.executeSql(userPreferencesQuery);
      tx.executeSql(actsOfKindnessQuery);
      tx.executeSql(gratitudeDiaryQuery);
      tx.executeSql(actsOfConnectionQuery);
    },
    (error) => {
      console.error("Error creating tables: ", error);
    },
  );
};
