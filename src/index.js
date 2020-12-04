
const {extractMetadata}  = require('./lib/video');
const {parseToJson}  = require('./lib/parser');

(async () => {
    const result = await extractMetadata('https://video.twimg.com/amplify_video/1334626258852999175/vid/1280x720/icRDPJhMvYeql9dU.mp4?tag=13')
   parseToJson(result)

})()