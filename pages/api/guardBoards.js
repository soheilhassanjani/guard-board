import path from "path";
import { promises as fs } from "fs";
import apiHandler from "utils/apiHandler";

export default async function handler(req, res) {
  apiHandler(req, "GET", async () => {
    // get all data
    const jsonDirectory = path.join(process.cwd(), "json");
    const allData = await fs.readFile(jsonDirectory + "/data.json", "utf8");
    const jsonAllData = JSON.parse(allData);
    const guardBoards = jsonAllData.guardBoards;
    //
    res.status(200).json(guardBoards);
  });
}
