// dataRemovalUtils.js
import * as SecureStore from "expo-secure-store";
import {connectToDatabase} from "./db";

// SQLite data removal
export const dropAllTables = async (db) => {
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
  const db = await connectToDatabase();
  await dropAllTables(db); 
};
