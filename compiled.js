"use strict";
"use strict";

var data = _interopRequireWildcard(require("./data.js"));

var _model = require("./model.js");

var _view = require("./view.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var _step$value = _slicedToArray(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];

    key.addEventListener('click', function () {
      data.main.innerHTML = ' ';
      (0, _model.getFeed)(value).then(function (articlesArr) {
        return (0, _view.renderNews)(articlesArr);
      });
    });
  };

  for (var _iterator = data.channelsUrlArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.channelsUrlArr = exports.natgeo = exports.reuters = exports.lenta = exports.cnn = exports.bbc = exports.main = void 0;
var main = document.getElementsByTagName('main')[0];
exports.main = main;
var bbc = document.getElementById('bbc');
exports.bbc = bbc;
var cnn = document.getElementById('cnn');
exports.cnn = cnn;
var lenta = document.getElementById('lenta');
exports.lenta = lenta;
var reuters = document.getElementById('reuters');
exports.reuters = reuters;
var natgeo = document.getElementById('natgeo');
exports.natgeo = natgeo;
var channelsUrlArr = new Map([[bbc, 'bbc-news'], [cnn, 'cnn'], [lenta, 'lenta'], [reuters, 'reuters'], [natgeo, 'national-geographic']]);
exports.channelsUrlArr = channelsUrlArr;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFeed = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var getFeed =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url) {
    var response, jsonResponse, articlesArr;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://newsapi.org/v2/top-headlines?sources=".concat(url, "&apiKey=d334361b10a84149a9c274432a7ad999"));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            jsonResponse = _context.sent;
            articlesArr = jsonResponse.articles;
            return _context.abrupt("return", articlesArr);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getFeed(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getFeed = getFeed;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderNews = void 0;

var _data = require("./data.js");

var renderNews = function renderNews(articles) {
  articles.map(function (article) {
    var articleCell = "<div class=\"articlecell\" style=\"background: url('".concat(article.urlToImage, "') no-repeat center; background-color: rgba(0,0,0,.5); background-blend-mode: darken;\">\n        <div class=\"titleblock\"><h2 class=\"title\">'").concat(article.title, "'</h2></div>\n        <div class=\"descriptionblock\"><p>'").concat(article.description, "'</p></div>\n       </div>");
    _data.main.innerHTML += articleCell;
  });
};

exports.renderNews = renderNews;
"use strict";

var data = _interopRequireWildcard(require("./data.js"));

var _model = require("./model.js");

var _view = require("./view.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var _step$value = _slicedToArray(_step.value, 2),
        key = _step$value[0],
        value = _step$value[1];

    key.addEventListener('click', function () {
      data.main.innerHTML = ' ';
      (0, _model.getFeed)(value).then(function (articlesArr) {
        return (0, _view.renderNews)(articlesArr);
      });
    });
  };

  for (var _iterator = data.channelsUrlArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.channelsUrlArr = exports.natgeo = exports.reuters = exports.lenta = exports.cnn = exports.bbc = exports.main = void 0;
var main = document.getElementsByTagName('main')[0];
exports.main = main;
var bbc = document.getElementById('bbc');
exports.bbc = bbc;
var cnn = document.getElementById('cnn');
exports.cnn = cnn;
var lenta = document.getElementById('lenta');
exports.lenta = lenta;
var reuters = document.getElementById('reuters');
exports.reuters = reuters;
var natgeo = document.getElementById('natgeo');
exports.natgeo = natgeo;
var channelsUrlArr = new Map([[bbc, 'bbc-news'], [cnn, 'cnn'], [lenta, 'lenta'], [reuters, 'reuters'], [natgeo, 'national-geographic']]);
exports.channelsUrlArr = channelsUrlArr;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFeed = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getFeed =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url) {
    var response, jsonResponse, articlesArr;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://newsapi.org/v2/top-headlines?sources=".concat(url, "&apiKey=d334361b10a84149a9c274432a7ad999"));

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            jsonResponse = _context.sent;
            articlesArr = jsonResponse.articles;
            return _context.abrupt("return", articlesArr);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getFeed(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getFeed = getFeed;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderNews = void 0;

var _data = require("./data.js");

var renderNews = function renderNews(articles) {
  articles.map(function (article) {
    var articleCell = "<div class=\"articlecell\" style=\"background: url('".concat(article.urlToImage, "') no-repeat center; background-color: rgba(0,0,0,.5); background-blend-mode: darken;\">\n        <div class=\"titleblock\"><h2 class=\"title\">'").concat(article.title, "'</h2></div>\n        <div class=\"descriptionblock\"><p>'").concat(article.description, "'</p></div>\n       </div>");
    _data.main.innerHTML += articleCell;
  });
};

exports.renderNews = renderNews;
