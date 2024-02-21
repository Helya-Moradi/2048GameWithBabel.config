const {execSync} = require('child_process');
const fs = require('fs');

if (fs.existsSync('./dist')) {
    fs.rmSync('./dist', { recursive: true });
}

fs.mkdirSync('./dist');

execSync('babel src -d dist -x ".js,.ts"');
execSync('sass src/index.sass dist/style.css');

fs.cpSync('./src/index.html', './dist/index.html');