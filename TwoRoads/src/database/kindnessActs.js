export const insertActOfKindness = (
  db,
  date,
  firstKindAct,
  secondKindAct,
  thirdKindAct,
  onSuccess,
  onError,
) => {
  const insertQuery = `
    INSERT INTO ActsOfKindness (date, firstKindness, secondKindness, thirdKindness)
    VALUES (?, ?, ?, ?);
  `;

  db.transaction(
    (tx) => {
      tx.executeSql(
        insertQuery,
        [date, firstKindAct, secondKindAct, thirdKindAct],
        (_, resultSet) => {
          if (onSuccess) {
            onSuccess(resultSet);
          }
        },
        (_, error) => {
          if (onError) {
            onError(error);
          }
          return false; // Returning false rolls back the transaction
        },
      );
    },
    (error) => {
      console.error("Transaction error: ", error);
      if (onError) {
        onError(error);
      }
    },
    () => {
    },
  );
};

export const getAllActsOfKindness = async (db) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM ActsOfKindness", 
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => {
          console.error("Failed to fetch all Kindness acts:", error);
          reject(error);
        },
      );
    });
  });
};

export const getKindnessActsForDate = async (db, selectedDate) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM ActsOfKindness WHERE date = ?;",
        [selectedDate],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
        (_, error) => {
          reject(error);
          return true; // To stop the propagation of the error
        },
      );
    });
  });
};
