
const {exec} = require('child_process')

const extractMetadata = function (source)  {
    return new Promise((resolve,reject) => {
        exec(`ffmpeg -i ${source} -af "volumedetect" -vn -sn -dn -f null /dev/null`, (err, stdout, stderr) => {
            if (err) {
                reject(err)
            }

            resolve(stderr)
          });
    })

}



module.exports = {extractMetadata}
