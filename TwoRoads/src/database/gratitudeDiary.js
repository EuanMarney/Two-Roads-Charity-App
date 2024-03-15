// Function to insert a new gratitude diary entry
export const insertGratitudeDiaryEntry = (
  db,
  date,
  firstGrateful,
  secondGrateful,
  thirdGrateful,
  firstWhy,
  secondWhy,
  thirdWhy,
  onSuccess,
  onError,
) => {
  const insertQuery = `
    INSERT INTO GratitudeDiary (date,firstGrateful, secondGrateful, thirdGrateful, firstWhy, secondWhy, thirdWhy)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `;

  db.transaction(
    (tx) => {
      tx.executeSql(
        insertQuery,
        [
          date,
          firstGrateful,
          secondGrateful,
          thirdGrateful,
          firstWhy,
          secondWhy,
          thirdWhy,
        ],
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

// Function to retrieve all gratitude diary entries
export const getAllGratitudeDiaryEntries = async (db) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM GratitudeDiary",
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => {
          console.error("Failed to fetch Grat Diary:", error);
          reject(error);
        },
      );
    });
  });
};

export const getGratitudeDiaryForDate = async (db, selectedDate) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM GratitudeDiary WHERE date = ?;",
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
