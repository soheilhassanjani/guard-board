import path from "path";
import { promises as fs, writeFile } from "fs";
import { v4 as uuidv4 } from "uuid";
import apiHandler from "utils/apiHandler";
import isEqual from "lodash.isequal";

export default async function handler(req, res) {
  apiHandler(req, "POST", async () => {
    // get all data
    const jsonDirectory = path.join(process.cwd(), "json");
    const allData = await fs.readFile(jsonDirectory + "/data.json", "utf8");
    const jsonAllData = JSON.parse(allData);
    const guardBoards = jsonAllData.guardBoards;
    //
    const isSameGuardBoardDate = guardBoards.find((item) =>
      isEqual(item.guardBoardDate, req?.body?.guardBoardDate)
    );
    //
    if (isSameGuardBoardDate) {
      return res.status(400).json({
        message: "لوح در این تاریخ ثبت شده است .",
      });
    } else {
      // checkId
      const checkId = () => {
        const uniqueId = uuidv4();
        const isExist = guardBoards.find((item) => item.id === uniqueId);
        if (isExist) checkId();
        else return uniqueId;
      };
      // add
      const finalData = {
        ...jsonAllData,
        guardBoards: [...guardBoards, { ...req?.body, id: checkId() }],
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
            message: "با موفقیت اضافه شد",
          });
        }
      );
    }
  });
}
