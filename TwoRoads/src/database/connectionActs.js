export const insertConnectionAct = (
  db,
  date,
  firstConnection,
  secondConnection,
  thirdConnection,
  onSuccess,
  onError,
) => {
  const insertQuery = `
      INSERT INTO ActsOfConnection (date, firstConnection, secondConnection, thirdConnection)
      VALUES (?, ?, ?, ?);
    `;

  db.transaction(
    (tx) => {
      tx.executeSql(
        insertQuery,
        [date, firstConnection, secondConnection, thirdConnection],
        (_, resultSet) => {
          if (onSuccess) {
            onSuccess(resultSet);
          }
        },
        (_, error) => {
          if (onError) {
            onError(error);
          }
          return false;
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

export const getAllActsOfConnection = (db) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM ActsOfConnection", 
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => {
          console.error("Failed to fetch all Acts of Connection:", error);
          reject(error);
        },
      );
    });
  });
};

export const getConnectionActsForDate = async (db, selectedDate) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM ActsOfConnection WHERE date = ?;",
        [selectedDate],
        (_, { rows: { _array } }) => {
          resolve(_array);
        },
        (_, error) => {
          reject(error);
          return true; 
        },
      );
    });
  });
};
