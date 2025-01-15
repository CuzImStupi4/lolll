// const { execSync } = require("child_process");
// const fs = require("fs");

// function random() {
//     const msg = [
//         "Hallo",
//         "Hello",
//         "I watch BastiGHG",
//         "787"
//     ];
//     return msg[Math.floor(Math.random() * msg.length)];
// }

// function Commit(index) {
//     const filename = `file-${index}.txt`;
//     fs.writeFileSync(filename, `${random()}git push origin master #${index}, time ${Date.now()}`);
//     execSync(`git add ${filename}`);
//     execSync(`git commit -m "Add ${random()}"`);
//     console.log(`Commit ${filename}`);
// }

// function push() {
//     try {
//         execSync("git push origin main", { stdio: "inherit" });
//         console.log("Push successful");
//     } catch (error) {
//         console.log("Error pushing to remote repository:", error);
//     }
// }

// try {
//     for (let i = 1; i <= 303; i++) {
//         Commit(i);
//     }
//     // push();
//     console.log("Committed everything");
// } catch(error) {
//     console.log("Error during commit process:", error);
// }

const { execSync } = require("child_process");
const fs = require("fs");

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

function generateRandomDate() {
    const randomMonth = Math.floor(Math.random() * 12);
    const randomDay = Math.floor(Math.random() * 31) + 1;
    const randomHour = Math.floor(Math.random() * 24);
    const randomMinute = Math.floor(Math.random() * 60);
    const randomSecond = Math.floor(Math.random() * 60);

    const daysInMonth = new Date(2022, randomMonth + 1, 0).getDate();
    const validDay = randomDay <= daysInMonth ? randomDay : daysInMonth;
    
    const Datee = 2022

    const date = new Date(2022, randomMonth, validDay, randomHour, randomMinute, randomSecond);

    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });
    const month = date.toLocaleString('en-US', { month: 'short' });
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    const timezoneOffset = "+0300";

    return `${dayOfWeek} ${month} ${dayOfMonth} ${hours}:${minutes}:${seconds} ${year} ${timezoneOffset}`;
}

function generateCommitMessage(index) {
    return `${random()} - Refactored function to improve efficiency #${index}`;
}

function Commit(index) {
    const filename = `file-${index}.txt`;
    fs.writeFileSync(filename, `${random()} - Code refactored and updated, time ${Date.now()}`);
    const commitDate = generateRandomDate();
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
    for (let i = 1; i <= 336; i++) {
        Commit(i);
    }
    // push();
    console.log("Committed everything");
} catch(error) {
    console.log("Error during commit process:", error);
}
