const fs = require('fs').promises;
const path = require('path');

async function reddir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    await walk(files, rootDir);
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat(fileFullPath);

        if (/\.git/.test(fileFullPath)) continue;
        if (/node_modules/.test(fileFullPath)) continue;

        if (stats.isDirectory()) {
            const innerFiles = await fs.readdir(fileFullPath);
            await walk(innerFiles, fileFullPath);
            continue;
        }

        if (!/\.html$/i.test(fileFullPath)) continue;

        console.log(fileFullPath);
    }
}

reddir('C:\\Users\\rafae\\OneDrive\\Área de Trabalho\\CursoJS');
