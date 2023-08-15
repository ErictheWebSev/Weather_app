const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

// Get a list of all .jsx files in the jsx directory and its subdirectories
const jsxFiles = getAllJsxFiles('./jsx');

// Build each .jsx file
jsxFiles.forEach(filePath => {
  const outputPath = filePath.replace('jsx', 'js').replace(/\.jsx$/, '.js');
  esbuild.build({
    entryPoints: [filePath],
    bundle: true,
    outfile: outputPath,
    loader: {
      '.jsx': 'jsx'
    },
    minify: true,
    format:'esm'
  }).then(() => {
    console.log('Done!');
    console.log('Transpiled', jsxFiles.length, 'files');
    process.exit(0);
  }).catch(() => process.exit(1));
});

function getAllJsxFiles(directory) {
  const jsxFiles = [];
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      jsxFiles.push(...getAllJsxFiles(filePath));
    } else if (stat.isFile() && path.extname(filePath) === '.jsx') {
      jsxFiles.push(filePath);
    }
  });
  
  return jsxFiles;
}