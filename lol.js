const { execSync } = require("child_process");
const fs = require("fs");

let year = 2006;

function random() {
    const msg = [
        "Hallo",
        "Hello",
        "Refactored function random()",
        "Optimized commit message generator",
        "Fixed bug in Commit function"
    ];
    return msg[Math.floor(Math.random() * msg.length)];
}

function generateFixedDate() {
    const date = `Tue Jan 2 23:00:00 ${year} +0300`;
    return date;
}

function generateCommitMessage(index) {
    return `${random()} - Refactored function to improve efficiency #${index}`;
}

function Commit(index) {
    const filename = `file-${index}.txt`;
    fs.writeFileSync(filename, `${random()} - Code refactored and updated, time ${Date.now()}`);
    const commitDate = generateFixedDate();
    execSync(`git add ${filename}`);
    execSync(`git commit --date="${commitDate}" -m "#geil"`);
    console.log(`Commit ${filename} at ${commitDate}`);
}

function push() {
    try {
        execSync("git push origin main", { stdio: "inherit" });
        console.log("Push successful");
    } catch (error) {
        console.log("Error pushing to remote repository:", error);
    }
}

try {
    for (let i = 1; i <= 100; i++) {
        Commit(i);
        if (year > 1970) {
            year--;
        } else {
            year = 2006;
        }
    }
    console.log("Committed everything");
    // push();
} catch (error) {
    console.log("Error during commit process:", error);
}
