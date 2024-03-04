const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', '..', 'build');

if (!fs.existsSync(buildDir)) {
    console.log('Build folder does not exist. Running build...');
    const { exec } = require('child_process');
    exec('npm run build', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
} else {
    console.log('Build folder exists. Skipping build...');
}
