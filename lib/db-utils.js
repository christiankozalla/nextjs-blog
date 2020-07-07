import fs from "fs";
import * as database from "./database.json";

export function updateViews(id) {
  let dataArray = database.data;
  const indexMatchingId = dataArray.findIndex((data) => {
    if (data.id === id) {
      return true;
    }
  });

  if (dataArray[indexMatchingId].views) {
    dataArray[indexMatchingId].views++;
    const databaseJson = JSON.stringify(database.default);
    const filePath = `${process.cwd()}/lib/database.json`;
    fs.writeFileSync(filePath, databaseJson);
  } else {
    console.log("Error!");
    return "Update failed!";
  }
}
