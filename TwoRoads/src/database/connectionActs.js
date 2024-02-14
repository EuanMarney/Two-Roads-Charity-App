export const insertConnectionAct = (db, firstConnection, secondConnection, thirdConnection, date, onSuccess, onError) => {
    const insertQuery = `
      INSERT INTO ActsOfConnection (firstConnection, secondConnection, thirdConnection, date)
      VALUES (?, ?, ?, ?);
    `;
  
    db.transaction(
      tx => {
        tx.executeSql(
          insertQuery,
          [firstConnection, secondConnection, thirdConnection, date],
          (_, resultSet) => onSuccess(resultSet),
          (_, error) => {
            onError(error);
            return false;
          },
        );
      },
      error => onError(error),
      () => console.log("Connection act entry added successfully."),
    );
  };
  
  /**
   * Retrieves all acts of connection entries from the database.
   */
  export const getAllConnectionActs = (db, onSuccess, onError) => {
    const selectQuery = "SELECT * FROM ActsOfConnection;";
  
    db.transaction(
      tx => {
        tx.executeSql(
          selectQuery,
          [],
          (_, resultSet) => onSuccess(resultSet.rows._array),
          (_, error) => onError(error),
        );
      },
      error => onError(error),
      () => console.log("Connection acts retrieved successfully."),
    );
  };