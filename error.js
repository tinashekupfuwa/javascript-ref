//Error Object
const json = '{"brand""AmigosCode"}';

try {
  console.log(JSON.parse(json).brand);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
