// Function to insert a new gratitude diary entry
export const insertGratitudeDiaryEntry = (db, firstGrateful, secondGrateful, thirdGrateful, firstWhy, secondWhy, thirdWhy, date, onSuccess, onError) => {
  const insertQuery = `
    INSERT INTO GratitudeDiary (firstGrateful, secondGrateful, thirdGrateful, firstWhy, secondWhy, thirdWhy, date)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `;

  db.transaction(
    tx => {
      tx.executeSql(
        insertQuery,
        [firstGrateful, secondGrateful, thirdGrateful, firstWhy, secondWhy, thirdWhy, date],
        (_, resultSet) => onSuccess(resultSet),
        (_, error) => {
          onError(error);
          return false; // This prevents the transaction from being committed automatically.
        },
      );
    },
    error => onError(error),
    () => console.log("Gratitude diary entry added successfully."),
  );
};

// Function to retrieve all gratitude diary entries
export const getAllGratitudeDiaryEntries = (db, onSuccess, onError) => {
  const selectQuery = "SELECT * FROM GratitudeDiary;";

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
    () => console.log("Gratitude diary entries retrieved successfully."),
  );
};
