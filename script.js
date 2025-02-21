const { execSync } = require("child_process");
const fs = require("fs");

const msgs = ["Procoder", "yoyo", "Insert Random Message here"];
const random = () => msgs[Math.random() * msgs.length | 0];

const generateRandomDate = () => {
    const d = new Date(1971, Math.random() * 12 | 0, Math.random() * 28 + 1, Math.random() * 24, Math.random() * 60, Math.random() * 60);
    return `${d.toDateString().split(" ").slice(0, 3).join(" ")} ${d.toTimeString().split(" ")[0]} ${d.getFullYear()} +0300`;
};

const Commit = i => {
    const f = `file-${i}.txt`;
    fs.writeFileSync(f, `${random()} - ${Date.now()}`);
    execSync(`git add ${f}`);
    execSync(`git commit --date="${generateRandomDate()}" -m "#geil"`);
};

const nonstopCommits = (start, end) => {
    let i = start;
    const interval = setInterval(() => {
        if (i > end) return clearInterval(interval);
        Commit(i++);
        console.log(`Commit ${i}`);
    }, 0);
};

nonstopCommits(1, 234);
