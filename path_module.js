const path = require("path")

// console.log(__dirname);
// console.log(__filename);

const folderpath = path.join("folder","student","data.txt")
const parse = path.parse(folderpath)
const resolve = path.resolve(folderpath)
const extname = path.extname(folderpath)
const basename = path.basename(folderpath)
const dirname = path.dirname(folderpath)

console.log({folderpath,parse,resolve,basename,extname,dirname,seperator :path.sep});





