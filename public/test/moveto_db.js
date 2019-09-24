var fs = require("fs");

const tableName = "downside_slide";
const target = [
  {
    url: "url('../images/slide/captain.png')",
    color: "blue",
    link: "https://www.google.com/search?q=captain+america"
  },
  {
    url: "url('../images/slide/ironman.png')",
    color: "gold",
    link: "https://www.google.com/search?q=iron+man"
  },
  {
    url: "url('../images/slide/spider.png')",
    color: "orange",
    link: "https://www.google.com/search?q=spider+man"
  },
  {
    url: "url('../images/slide/thor.png')",
    color: "gray",
    link: "https://www.google.com/search?q=thor"
  },
  {
    url: "url('../images/slide/venom.png')",
    color: "purple",
    link: "https://www.google.com/search?q=venom"
  }
];

let result = "";

target.forEach(e => {
  const keys = [];
  const values = [];
  for (key in e) {
    keys.push(key);
    values.push(e[key]);
  }
  let stringValues = JSON.stringify(values);
  stringValues = stringValues.slice(1, stringValues.length - 1);

  result += `INSERT INTO ${tableName} (${keys}) `;
  result += `VALUES (${stringValues});\n`;
});

fs.writeFile("result.txt", result, function(err) {
  if (err) throw err;
  console.log("Saved!");
});
