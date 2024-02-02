// This file contains logic to interact with the HedonicMoments table in the database

/**
 * Inserts a new hedonic moment entry into the database.
 * @param {SQLite.WebSQLDatabase} db - The database connection object.
 * @param {string} date - The date of the hedonic moment entry.
 * @param {string} firstMoment - The text for the first hedonic moment.
 * @param {string} secondMoment - The text for the second hedonic moment.
 * @param {string} thirdMoment - The text for the third hedonic moment.
 * @param {string} fourthMoment - The text for the fourth hedonic moment.
 */
export const insertHedonicMoment = (
  db,
  date,
  firstMoment,
  secondMoment,
  thirdMoment,
  fourthMoment,
  onSuccess,
  onError,
) => {
  const insertQuery = `
    INSERT INTO HedonicMoments (date, firstMoment, secondMoment, thirdMoment, fourthMoment)
    VALUES (?, ?, ?, ?, ?);
  `;

  db.transaction(
    (tx) => {
      tx.executeSql(
        insertQuery,
        [date, firstMoment, secondMoment, thirdMoment, fourthMoment],
        (_, resultSet) => {
          if (onSuccess) onSuccess(resultSet);
        },
        (_, error) => {
          if (onError) onError(error);
          return false; // Returning false rolls back the transaction
        },
      );
    },
    (error) => {
      console.error("Transaction error: ", error);
      if (onError) onError(error);
    },
    () => {
      console.log("Transaction success");
    },
  );
};

/**
 * Retrieves all hedonic moment entries from the database.
 * @param {SQLite.WebSQLDatabase} db - The database connection object.
 * @param {function} onSuccess - Callback function that is called with the query results.
 * @param {function} onError - Callback function that is called in case of an error.
 */
export const getAllHedonicMoments = (db, onSuccess, onError) => {
  const selectQuery = `
    SELECT * FROM HedonicMoments;
  `;

  db.transaction(
    (tx) => {
      tx.executeSql(
        selectQuery,
        [],
        (_, resultSet) => {
          const moments = [];
          for (let i = 0; i < resultSet.rows.length; i++) {
            moments.push(resultSet.rows.item(i));
          }
          if (onSuccess) onSuccess(moments);
        },
        (_, error) => {
          if (onError) onError(error);
          return false; // Returning false rolls back the transaction
        },
      );
    },
    (error) => {
      console.error("Transaction error: ", error);
      if (onError) onError(error);
    },
    () => {
      console.log("Transaction success");
    },
  );
};
