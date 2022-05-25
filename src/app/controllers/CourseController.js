const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then( course =>
                res.render('courses/show',{ course: mongooseToObject(course)})
            )
            .catch(next);
    }
    
    create(req, res) {
        res.render('courses/create');
    }

    store(req, res) {
        // res.json(req.body);
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => {
                res.redirect('/')
            })
            .catch(err => {

            })

       


    }
    edit(req, res, next){
        Course.findOne({_id: req.params.id})
        .then( course =>
            res.render('courses/edit',{ course: mongooseToObject(course)})
        )
        .catch(next);
    }
}

module.exports = new CourseController();
