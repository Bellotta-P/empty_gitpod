var replace = require('replace-in-file');
var APIurl = process.env.GITPOD_WORKSPACE_URL;
console.log(APIurl)
const options = {
  files: '/workspace/empty_gitpod/sitoweb/src/environments/environment.ts',
  from: /{APIURL}/g,
  to: APIurl,
  allowEmptyPaths: false,
};

try {
  let changedFiles = replace.sync(options);
  console.log('API url set: ' + APIurl);
}
catch (error) {
  console.error('Error occurred:', error);
}