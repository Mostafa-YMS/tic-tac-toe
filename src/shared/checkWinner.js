export const winnerChecker = (values, key) => {
  const rowsChecker = (rows) => {
    for (let i = 0; i < rows.length; i++) {
      if (
        values[rows[i][0]]?.value === values[rows[i][1]]?.value &&
        values[rows[i][0]]?.value === values[rows[i][2]]?.value
      ) {
        return rows[i];
      }
    }
    return false;
  };

  if (key === "1") {
    const res = rowsChecker([
      [1, 2, 3],
      [1, 4, 7],
      [1, 5, 9],
    ]);
    return res;
  } else if (key === "2") {
    const res = rowsChecker([
      [1, 2, 3],
      [2, 5, 8],
    ]);
    return res;
  } else if (key === "3") {
    const res = rowsChecker([
      [1, 2, 3],
      [3, 6, 9],
      [3, 5, 7],
    ]);
    return res;
  } else if (key === "4") {
    const res = rowsChecker([
      [4, 5, 6],
      [1, 4, 7],
    ]);
    return res;
  } else if (key === "5") {
    const res = rowsChecker([
      [1, 5, 9],
      [3, 5, 7],
      [2, 5, 8],
      [4, 5, 6],
    ]);
    return res;
  } else if (key === "6") {
    const res = rowsChecker([
      [4, 5, 6],
      [3, 6, 9],
    ]);
    return res;
  } else if (key === "7") {
    const res = rowsChecker([
      [1, 4, 7],
      [7, 5, 3],
      [7, 8, 9],
    ]);
    return res;
  } else if (key === "8") {
    const res = rowsChecker([
      [7, 8, 9],
      [8, 5, 2],
    ]);
    return res;
  } else if (key === "9") {
    const res = rowsChecker([
      [7, 8, 9],
      [9, 6, 3],
      [9, 5, 1],
    ]);
    return res;
  }
};
