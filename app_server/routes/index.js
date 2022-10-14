var express = require("express");
var router = express.Router();
var ctrlMekanlar = require("../controllers/mekanlar.js");
var ctrlDigerleri = require("../controllers/digerleri.js");

/* GET home page. */
router.get("/", ctrlMekanlar.anasayfa);
router.get("/mekan", ctrlMekanlar.mekanbilgisi);
router.get("/mekan/yorum/yeni", ctrlMekanlar.yorumekle);
router.get("/hakkinda", ctrlDigerleri.hakkinda);

module.exports = router;
