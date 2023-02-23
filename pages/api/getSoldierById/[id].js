import path from "path";
import { promises as fs } from "fs";
import apiHandler from "utils/apiHandler";

export default async function handler(req, res) {
  apiHandler(req, "GET", async () => {
    // get all data
    const jsonDirectory = path.join(process.cwd(), "json");
    const allData = await fs.readFile(jsonDirectory + "/data.json", "utf8");
    const jsonAllData = JSON.parse(allData);
    const soldiers = jsonAllData.soldiers;
    //
    const soldier = soldiers.find((item) => item.id === req?.query?.id);
    //
    if (!soldier) {
      return res.status(400).json({
        message: "این سرباز وجود ندارد",
      });
    } else {
      return res.status(200).json(soldier);
    }
  });
}
