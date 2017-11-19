var express = require('express');
var router = express.Router();
var Place = require('../models/place');


router.get('/seattle', function(req, res, next) {

    Place.findOne({'name': 'Seattle'}, function(err, doc){
        res.render('cities', {items: doc, user:req.user});
    });
});

router.get('/sanfrancisco', function(req, res, next) {

    Place.find({}, function(err, doc){
        res.render('cities', {items: doc, user:req.user});
    });
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
