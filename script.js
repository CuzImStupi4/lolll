const { execSync } = require("child_process");
const fs = require("fs");

function random() {
    const msg = [
        "Hallo",
        "Hello",
        "I watch BastiGHG",
        "787"
    ];
    return msg[Math.floor(Math.random() * msg.length)];
}

function Commit(index) {
    const filename = `file-${index}.txt`;
    fs.writeFileSync(filename, `${random()}git push origin master #${index}, time ${Date.now()}`);
    execSync(`git add ${filename}`);
    execSync(`git commit -m "Add ${random()}"`);
    console.log(`Commit ${filename}`);
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
    for (let i = 1; i <= 45; i++) {
        Commit(i);
    }
    // push();
    console.log("Committed everything");
} catch(error) {
    console.log("Error during commit process:", error);
}
