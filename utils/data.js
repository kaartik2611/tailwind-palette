import fs from "fs";
import path from "path";
export const createObject = () => {
  const directory = path.join(process.cwd(), "utils");
  const filePath = path.join(directory, "data.txt"); // data.txt contains the tailwind colors
  const data = fs.readFileSync(filePath, "utf8");
  const splitted = data.toString().toLowerCase().split("\r\n");
  const odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  var curr;
  const arr = [];
  splitted.forEach((item, i) => {
    if (i % 21 === 0) {
      arr.push({
        name: item,
        colors: [],
      });
      curr = item;
    } else if (odd.includes(i % 21)) {
      arr[arr.length - 1].colors.push({
        name: `${curr}-${item}`,
        hex: splitted[i + 1],
      });
    }
  });
  return arr;
};
