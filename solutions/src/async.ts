import * as fs from "fs";
import * as path from "path";

async function readFile(path: string) {
  const buffer = await new Promise<Buffer>((succeed, fail) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        fail(err);
      } else {
        succeed(data);
      }
    });
  });

  return buffer.toString("utf-8");
}

const main = async () => {
  try {
    const content = await readFile(path.join(__dirname, "../data/names.txt"));

    console.log(content);
  } catch (err) {
    console.log("Got error:", err);
  }
};

main();
