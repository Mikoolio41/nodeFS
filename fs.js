const fs = require("fs");

// fs.readFile("./zach", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// const txt = "maccabi haifa 4ever";
// const txt1 = "idk";

// fs.appendFile("./myFile3", txt1, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

fs.unlink("./myFile3", (err) => {
  if (err) {
    console.log(err);
  }
});
