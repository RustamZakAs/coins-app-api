var express = require("express");
var app = express();
var cors = require("cors");
const mysql = require("mysql");

app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "comtekbm",
  database: "coins",
});

app.get("/", function (req, res) {
  try {
    let data = [
      { link: "/", method: "get", description: "api map" },
      { link: "/catalog", method: "get", description: "coins" },
      { link: "/catalog/:id", method: "get", description: "coin by id" },
      { link: "/image/:id", method: "get", description: "coin by id" },
      {
        link: "/image?catalogId={}&image={}",
        method: "post",
        description: "insert image with (coin id, base64 string)",
      },
      { link: "/images", method: "get", description: "images" },
      { link: "/categories", method: "get", description: "categories" },
      { link: "/typesofquality", method: "get", description: "typesofquality" },
      { link: "/countries", method: "get", description: "countries" },
      { link: "/compositions", method: "get", description: "compositions" },
    ];
    let json = JSON.stringify(data);
    res.send(json);
  } catch (error) {
    res.send(error);
  }
});

app.get("/catalog", function (req, res) {
  try {
    con.query("SELECT * FROM `catalog`", function (err, result, fields) {
      if (err) res.send(err);
      let json = JSON.stringify(result);
      res.send(json);
    });
  } catch (error) {
    res.send(error);
  }
});

app.get("/catalog/:id", function (req, res) {
  const id = parseInt(req.params.id);
  try {
    con.query(
      `SELECT * FROM catalog WHERE id = ${id}`,
      function (err, result, fields) {
        if (err) res.send(err);
        let json = JSON.stringify(result);
        res.send(json);
      }
    );
  } catch (error) {
    res.send(error);
  }
});

app.get("/categories", function (req, res) {
  try {
    con.query("SELECT * FROM `categories`", function (err, result, fields) {
      if (err) res.send(err);
      let json = JSON.stringify(result);
      res.send(json);
    });
  } catch (error) {
    res.send(error);
  }
});

app.get("/typesofquality", function (req, res) {
  try {
    con.query("SELECT * FROM `typesofquality`", function (err, result, fields) {
      if (err) res.send(err);
      let json = JSON.stringify(result);
      res.send(json);
    });
  } catch (error) {
    res.send(error);
  }
});

app.get("/countries", function (req, res) {
  try {
    con.query("SELECT * FROM `countries`", function (err, result, fields) {
      if (err) res.send(err);
      let json = JSON.stringify(result);
      res.send(json);
    });
  } catch (error) {
    res.send(error);
  }
});

app.get("/compositions", function (req, res) {
  try {
    con.query("SELECT * FROM `compositions`", function (err, result, fields) {
      if (err) res.send(err);
      let json = JSON.stringify(result);
      res.send(json);
    });
  } catch (error) {
    res.send(error);
  }
});

app.get("/images", function (req, res) {
  try {
    con.query("SELECT * FROM `images`", function (err, result, fields) {
      if (err) res.send(err);
      let json = JSON.stringify(result);
      res.send(json);
    });
  } catch (error) {
    res.send(error);
  }
});

app.get("/login", function (req, res) {
  const login = req.query.login;
  const password = req.query.password;
  try {
    if (!password) {
      var sql = `SELECT * FROM users WHERE login='${login}'`;
      con.query(sql, function (err, result) {
        if (err) res.send(err);
        let json = JSON.stringify(result);
        res.send(json);
      });
    } else {
      var sql = `SELECT * FROM users WHERE login='${login}' AND password='${password}'`;
      con.query(sql, function (err, result) {
        if (err) res.send(err);
        let json = JSON.stringify(result);
        res.send(json);
      });
    }
  } catch (error) {
    res.send(error);
  }
});

app.post("/login", function (req, res) {
  const login = req.query.login;
  const password = req.query.password;
  try {
    var sql = `INSERT INTO users(login, password) VALUES ('${login}', '${password}')`;
    con.query(sql, function (err, result) {
      if (err) res.send(err);
      let json = JSON.stringify(result);
      res.send(json);
    });
  } catch (error) {
    res.send(error);
  }
});

app.post("/image", function (req, res) {
  const catalogId = parseInt(req.query.catalogId);
  const image = req.query.image;
  try {
    if (catalogId) {
      //var base64str = base64_encode('C:\\Desktop.jpg');
      var sql = `INSERT INTO images(catalogId, image) VALUES (${catalogId}, '${image}')`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        res.send("1 record inserted");
      });
    }
    res.send(`${catalogId}-${req.query.catalogId}`);
  } catch (error) {
    res.send(error);
  }
});

app.get("/image/:id", function (req, res) {
  const id = parseInt(req.params.id);
  try {
    con.query(
      `SELECT * FROM images WHERE id = ${id}`,
      function (err, result, fields) {
        if (err) res.send(err);
        let json = JSON.stringify(result);
        res.send(json);
      }
    );
  } catch (error) {
    res.send(error);
  }
});

app.get("/catalogbycategory/:id", function (req, res) {
  const id = parseInt(req.params.id);
  try {
    con.query(
      `SELECT * FROM catalog WHERE id IN (SELECT c.coinId FROM coinscategories c WHERE c.categoryId = ${id})`,
      function (err, result, fields) {
        if (err) res.send(err);
        let json = JSON.stringify(result);
        res.send(json);
      }
    );
  } catch (error) {
    res.send(error);
  }
});
/***********************/
function base64_encode(file) {
  var fs = require("fs");
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString("base64");
}

app.post("/loadimagefromdesktop", function (req, res) {
  const catalogId = 0;
  try {
    if (catalogId) {
      var base64str = base64_encode("C:\\Desktop.jpg");
      var sql = `INSERT INTO images (catalogId, image) VALUES (${catalogId}, '${base64str}')`;
      con.query(sql, function (err, result) {
        if (err) res.status(400).send(err.toString());
        res.status(200).send("1 record inserted");
      });
    }
    //res.status(200).send(`${catalogId}`);
  } catch (error) {
    res.status(400).send(error);
  }
});
/***********************/
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});
