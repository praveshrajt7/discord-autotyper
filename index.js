const dc = require('./discord');
const { sig } = require("./utils/sig");

(async () => {
    sig();

    await dc.initialize();
    // here is where you enter your email and password
    await dc.login('praveshrajt25087@gmail.com', 'bunnylucky4')

    await dc.likeChannelProcess('3juzcAdz', '856978624967606332', 1) // 1 = 1 minute

    debugger;

})();
