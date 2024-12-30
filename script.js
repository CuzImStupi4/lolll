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
    fs.writeFileSync(filename, `random file #${index}, time ${Date.now()}`);
    execSync(`git add ${filename}`);
    execSync(`git commit -m "Add ${random()}"`);
    console.log(`Commit ${filename}`);
}

function push() {
    try {
        execSync("git push", { stdio: "inherit" });
        console.log("Push successful");
    } catch (error) {
        console.log("Error pushing to remote repository:", error);
    }
}

try {
    for (let i = 1; i <= 5; i++) {
        Commit(i);
        // Adding a small delay (e.g., 1 second) between commits to avoid overwhelming Git
        if (i % 10 === 0) {
            console.log(`Committed ${i} files, waiting before next commit...`);
            setTimeout(() => {}, 1000); // Delay between commits
        }
    }
    push();
    console.log("Committed everything");
} catch(error) {
    console.log("Error during commit process:", error);
}
