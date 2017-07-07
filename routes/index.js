var express = require('express'),
    path = require('path'),
    async = require('async'),
    fs = require('fs'),
    mime = require('mime'),
    fse = require('fs-extra'),
    router = express.Router();


router.get('/*', require('./../controllers/layout'));


module.exports = router;