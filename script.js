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
    execSync("git push", { stdio: "inherit" });
}

try {
    for (let i = 1; i <= 78; i++) {
        Commit(i);
    }
    push();
    console.log("commited everything");
} catch(error) {
    console.log(error);
}
