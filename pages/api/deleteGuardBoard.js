import path from "path";
import { promises as fs, writeFile } from "fs";
import apiHandler from "utils/apiHandler";

export default async function handler(req, res) {
  apiHandler(req, "DELETE", async () => {
    // get all data
    const jsonDirectory = path.join(process.cwd(), "json");
    const allData = await fs.readFile(jsonDirectory + "/data.json", "utf8");
    const jsonAllData = JSON.parse(allData);
    const guardBoards = jsonAllData.guardBoards;
    //
    const isExist = guardBoards.find((item) => item.id === req?.body);
    //
    if (!isExist) {
      return res.status(400).json({
        message: "این شناسه وجود ندارد",
      });
    } else {
      // remove
      const finalData = {
        ...jsonAllData,
        guardBoards: guardBoards.filter((item) => item.id !== req?.body),
      };
      // write file
      writeFile(
        jsonDirectory + "/data.json",
        JSON.stringify(finalData, null, 2),
        (err) => {
          if (err) {
            return res.status(400).end("its NOT okay!");
          }
          return res.status(200).json({
            message: "با موفقیت حذف شد",
          });
        }
      );
    }
  });
}
