const Course = require('../models/Course');

class SiteController {
  // [GET] /
  // index(req, res) {
  //   Course.find({}, function (err, courses) {
  //     if (!err) {
  //       res.json(courses);
  //     } else {
  //       res.status(400).json({ error: 'ERROR !!!' });
  //     }
  //   });

  //   res.render('home');
  // }
  async index(req, res) {
    try {
      const courses = await Course.find({});
      res.json(courses);
    } catch (err) {
      res.status(400).json({ error: 'ERROR !!!' });
    }
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
