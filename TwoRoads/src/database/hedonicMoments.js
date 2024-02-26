
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
      console.log("Transaction success, hedonicMoments.js line 36");
    },
  );
};

// Inside your db.js or a similar database utility file
export const getAllHedonicMoments = async (db) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM HedonicMoments`, // Replace tableName with your actual table name
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => {
          console.error('Failed to fetch all hedonic moments:', error);
          reject(error);
        }
      );
    });
  });
};

export const getHedonicMomentsForDate = async (db, selectedDate) => {
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