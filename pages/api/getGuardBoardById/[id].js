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
    const guardBoard = guardBoards.find((item) => item.id === req?.query?.id);
    //
    if (!guardBoard) {
      return res.status(400).json({
        message: "این لوح وجود ندارد",
      });
    } else {
      res.status(200).json(guardBoard);
    }
  });
}
