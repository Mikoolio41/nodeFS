const fs = require("fs");

const txt = "zach said to create a txt";

fs.appendFile("./zach", txt, (err) => {
  if (err) {
    console.log(err);
  }
});
