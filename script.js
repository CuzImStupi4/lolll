const { execSync } = require("child_process");
const fs = require("fs");

const msgs = ["Procoder", "yoyo", "Insert Random Message here"];
const random = () => msgs[Math.random() * msgs.length | 0];

const generateRandomDate = () => {
    const d = new Date(2006, Math.random() * 12 | 0, Math.random() * 28 + 1, Math.random() * 24, Math.random() * 60, Math.random() * 60);
    return `${d.toDateString().split(" ").slice(0, 3).join(" ")} ${d.toTimeString().split(" ")[0]} ${d.getFullYear()} +0300`;
};

const Commit = i => {
    const f = `file-${i}.txt`;
    fs.writeFileSync(f, `${random()} - ${Date.now()}`);
    execSync(`git add ${f}`);
    execSync(`git commit --date="${generateRandomDate()}" -m "#geil"`);
};

const parallelCommits = async (start, end, batchSize = 10) => {
    for (let i = start; i <= end; i += batchSize) {
        await Promise.all(Array.from({ length: batchSize }, (_, j) => i + j <= end && Commit(i + j)));
        console.log(`Committed ${Math.min(batchSize, end - i + 1)} commits`);
    }
};

parallelCommits(1, 206).then(() => console.log("Committed everything")).catch(e => console.log("Error:", e));
