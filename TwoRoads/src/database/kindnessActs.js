export const insertActOfKindness = (db, firstKindAct, secondKindAct, thirdKindAct, date, onSuccess, onError) => {
  const insertQuery = `
    INSERT INTO ActsOfKindness (firstKindness, secondKindness, thirdKindness, date)
    VALUES (?, ?, ?, ?);
  `;

  db.transaction(
    tx => {
      tx.executeSql(
        insertQuery,
        [firstKindAct, secondKindAct, thirdKindAct, date],
        (_, resultSet) => onSuccess(resultSet),
        (_, error) => {
          onError(error);
          return false; // Returning false rolls back the transaction
        },
      );
    },
    error => onError(error),
    () => console.log("Insert act of kindness transaction successful."),
  );
};

/**
 * Retrieves all acts of kindness entries from the database.
 */
export const getAllActsOfKindness = (db, onSuccess, onError) => {
  const selectQuery = "SELECT * FROM ActsOfKindness;";

  db.transaction(
    tx => {
      tx.executeSql(
        selectQuery,
        [],
        (_, resultSet) => onSuccess(resultSet.rows._array),
        (_, error) => {
          onError(error);
          return false; // Returning false rolls back the transaction
        },
      );
    },
    error => onError(error),
    () => console.log("Get all acts of kindness transaction successful."),
  );
};