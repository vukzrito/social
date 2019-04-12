var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var request = require('request');
var _ = require('lodash');
const util = require('util');

const headers = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36' }

const url = `https://www.autotrader.co.za/cars-for-sale?sort=date%7Cdesc&perpage=60`;
/* GET home page. */
router.get('/', function (req, res, next) {
  let options = {
    url,
    headers
  }
  request(options, (err, resp, body) => {
    $ = cheerio.load(resp.body);
    let x = [];
    $('.list-item').each((i, item) => {

      let link = $(this).find("a").text();
      x.push({
        title: $('.title', item).text(), mileage: toNumber($('.mileage', item).text()), year: Number($('.reg-year', item).text()),
        type: $('.body-type', item).text(),
        price: toNumber($('.list-item-title span', item).text()), link
      });


    })
    console.log(x)
    res.send(x);
  });

});


module.exports = router;
function toNumber(value, removeChar = ',') {
  return Number(value.replace(/\D/g, '').split(removeChar).join(""));
}

function parsePage(url) {
  let v = [];
  v.push({
    id: '', price: 0, year: 2019, mileage: 100, type: 'coupe', title: ''
  })
}


