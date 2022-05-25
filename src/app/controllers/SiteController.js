const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
    // [GET] /news
    index(req, res, next) {
        // Cách dùng function
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else { 
        //         res.next(err);
        //         res.status(400).json({ error: 'Error!' });
        //     }
        // });

        // Cách dùng promise
        Course.find({})
            .then((courses) => {
                // courses = courses.map((course) => course.toObject()),
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                })
            })
            .catch((error) => next(error));
        // res.render('home');
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
