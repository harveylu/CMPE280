var mongoose = require('mongoose');

var Place = mongoose.model('Place', {
    name: String,
    keywords: ["San", "Francisco", "S", "Sa"],
    info: [{
        type: String
    }],
    website: String,
    description: String,
    images: [{
        type: String
    }],
    review: [
        {
            id: String,
            userId: String,
            content: String,
            createDate: {type: Date, default: Date.now()},
            updateDate: {type: Date, default: Date.now()}
        }
    ]
});

module.exports = Place;