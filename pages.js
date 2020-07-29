const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://jimmysisenglath/jimmysisenglath.github.io/portfolio/public/index.html";

ghpages.publish(
  pathname,
  {
    branch: "master",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
