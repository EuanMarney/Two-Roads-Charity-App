// dataRemovalUtils.js
import * as SecureStore from 'expo-secure-store';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase("TwoRoadsV2.db");

// SQLite data removal
export const dropAllTables = async () => {
  const tables = [
    "HedonicMoments",
    "UserPreferences",
    "ActsOfKindness",
    "GratitudeDiary",
  ];

  tables.forEach((table) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DROP TABLE IF EXISTS ${table};`,
        [],
        (_, { rows }) => {},
        (t, error) => {
          console.log(
            `Error occurred while dropping the table ${table}: `,
            error,
          );
          return true; // to stop the transaction
        },
      );
    });
  });
};

// Secure Store data removal
export const clearSecureStore = async () => {
  const keys = ["username", "pin"];
  for (const key of keys) {
    await SecureStore.deleteItemAsync(key);
  }
};
// Combined data removal
export const removeAllUserData = async () => {
  await clearSecureStore();
  await dropAllTables(); // Adjust based on your choice
};
