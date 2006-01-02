const { exec } = require('child_process');

let year = 2006;

const commitWithDate = () => {
    // exec error: Error: Command failed: git commit --date="Tue Jan 2 23:00:00 2004 +0300" -m "#geil"
  const date = `Tue Jan 2 23:00:00 ${year} +0300`;
  const commitMessage = 'Refactored function to improve efficiency #1';
  exec(`git commit --date="${date}" -m "${commitMessage}"`, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });

  if (year > 1970) {
    year--;
  } else {
    year = 2006;
  }
};

setInterval(commitWithDate, 500);
