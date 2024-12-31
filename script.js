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
    const randomDay = Math.floor(Math.random() * 31) + 1; // Random day in December (1-31)
    const randomHour = Math.floor(Math.random() * 24);  // Random hour (0-23)
    const randomMinute = Math.floor(Math.random() * 60); // Random minute (0-59)
    const randomSecond = Math.floor(Math.random() * 60); // Random second (0-59)

    const date = new Date(2023, 11, randomDay, randomHour, randomMinute, randomSecond); // December is month 11 (0-indexed)
    
    // Format it to "Tue Dec 31 23:00:00 2023 +0300"
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });  // e.g., 'Tue'
    const month = date.toLocaleString('en-US', { month: 'short' });  // e.g., 'Dec'
    const dayOfMonth = date.getDate();  // e.g., 31
    const year = date.getFullYear();  // 2023
    const hours = String(date.getHours()).padStart(2, '0');  // e.g., '23'
    const minutes = String(date.getMinutes()).padStart(2, '0');  // e.g., '00'
    const seconds = String(date.getSeconds()).padStart(2, '0');  // e.g., '00'
    
    const timezoneOffset = "+0300"; // Fixed timezone offset (+0300 for your specified time)

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
    for (let i = 1; i <= 600; i++) {
        Commit(i);
    }
    // push();
    console.log("Committed everything");
} catch(error) {
    console.log("Error during commit process:", error);
}
