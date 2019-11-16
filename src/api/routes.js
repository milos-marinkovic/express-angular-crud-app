const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = '';

  // Routes are defined here
  router.get('/api/login', (req, res, next) => {
    db.query(
      'SELECT * FROM users WHERE username=? AND password=?;',
      [req.query.username, req.query.password],
      (error, data) => {
        if (error) {
          console.error("There has been an error: ", error);
          res.status(500).json({status: 'error', msg: error});
        } else {
          res.status(200).json({status: 'ok', data: data});
        }
      }
    )
  });

  // router.post('/api/', (req, res, next) => {
  //   db.query(
  //     'INSERT INTO students(id,name,surname,academy_id) VALUES (?,?,?,?)',
  //     [req.body.id, req.body.name, req.body.surname, req.body.academy_id],
  //     (error) => {
  //       if (error) {
  //         console.error("There was an error writting data: ", error);
  //         res.status(500).json({status: 'Error'});
  //       } else {
  //         res.status(200).json({status: 'Ok'});
  //       }
  //     }
  //   )
  // });

  return router;
}

module.exports = createRouter;
