var ObjectID = require("mongodb").ObjectID;

module.exports = function(app, db) {
  // post
  app.post("/notes", (req, res) => {
    console.log(req.body);
    db.collection("notes").insert(req.body, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send(result.ops[0]);
      }
    });
  });

  // app.post('/api/courses', (request, response) => {
  //   response.json(request.body);
  // });
};
