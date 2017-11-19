var express = require('express');
var router = express.Router();
var Place = require('../models/place');


router.get('/seattle', function(req, res, next) {

   var palces = {
       "_id": {
           "$oid": "5a0f5a08734d1d40318aadaa"
       },
       "name": "Seattle",
       "keywords": [
           "Seattle",
           "Sea",
           "S",
           "s"
       ],
       "info": [
           "Wahionton State",
           "100-100-1000"
       ],
       "website": "http://www.seattle.gov/",
       "description": "Seattle, a city on Puget Sound in the Pacific Northwest, is surrounded by water, mountains and evergreen forests, and contains thousands of acres of parkland. Washington State\u2019s largest city, it\u2019s home to a large tech industry, with Microsoft and Amazon headquartered in its metropolitan area. The futuristic Space Needle, a 1962 World\u2019s Fair legacy, is its most iconic landmark.",
       "images": [
           "http://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/landmark-images/golden-gate_web.jpg",
           "http://www.bsic.it/wp-content/uploads/2016/11/Cover7.jpg"
       ],
       "review": [
           {
               "id": "r1",
               "userId": "u1",
               "content": "very good",
               "createDate": "2017-07-09",
               "updateDate": "2017-09-09"
           },
           {
               "id": "r2",
               "userId": "u2",
               "content": "Not so good",
               "createDate": "2017-08-09",
               "updateDate": "2017-11-09"
           }
       ]
   };



});


/* router.post('/insert', function(req, res, next) {
    var item = {
        name: req.body.name,
        content: req.body.content
    };

    var data = new UserReview(item);
    data.save();

    res.redirect('/display');
});

router.post('/update', function(req, res, next) {
    var id = req.body.id;

    UserReview.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no entry found');
        }
        doc.name = req.body.name;
        doc.content = req.body.content;
        doc.save();
    });
    res.redirect('/display');
});

router.post('/delete', function(req, res, next) {
    //console.log(JSON.stringify(req));
    var id = req.body.id;
    UserReview.findByIdAndRemove(id).exec();
    res.redirect('/display');
}); */

module.exports = router;
