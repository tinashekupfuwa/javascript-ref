//try-catch
//Exception handling

const json = '{"brand":"AmigosCode"}';

try {
  console.log(JSON.parse(json).brand);
} catch (error) {
  console.log(`cannot parse ${json}`);
} finally {
  console.log("finally was invoked");
}
