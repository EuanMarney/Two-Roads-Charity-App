// create database using expo-sqlite
import * as SQLite from "expo-sqlite";

export const connectToDatabase = () => {
  return SQLite.openDatabase("TwoRoads.db");
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
      streaks INTEGER
    );
  `;

  const actsOfKindness = `
    CREATE TABLE IF NOT EXISTS HedonicMoments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstKindness TEXT
      secondKindness TEXT
      thirdKindness TEXT
    );
  `;

  const gradtitudeDiary = `
    CREATE TABLE IF NOT EXISTS HedonicMoments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstGrateful TEXT
      secondGrateful TEXT
      thirdGrateful TEXT
      firstWhy TEXT
      secondWhy TEXT
      thirdWhy TEXT
    );
  `;

  db.transaction(
    (tx) => {
      tx.executeSql(hedonicMomentsQuery);
      tx.executeSql(userPreferencesQuery);
      tx.executeSql(actsOfKindness);
    },
    (error) => {
      console.error("Error creating tables: ", error);
    },
  );
};
