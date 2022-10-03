async function  crawler(){
    var  url = 'http://www.google.com';
    var  request = require('request'); 
    var  cheerio = require('cheerio');
    request(url, async function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var  $ = cheerio.load(body);
            $("a").map((i, link) => {
                console.log(link.attribs.href);
            });
        }
    }); 
}
crawler();