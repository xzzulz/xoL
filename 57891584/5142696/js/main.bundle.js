/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _gridModel = __webpack_require__(1);

	var _gridModel2 = _interopRequireDefault(_gridModel);

	var _sampleCodeModel = __webpack_require__(2);

	var _sampleCodeModel2 = _interopRequireDefault(_sampleCodeModel);

	var _view = __webpack_require__(4);

	var _view2 = _interopRequireDefault(_view);

	var _control = __webpack_require__(6);

	var _control2 = _interopRequireDefault(_control);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var gridModel = new _gridModel2.default();
	var codeModel = new _sampleCodeModel2.default();

	var view = new _view2.default(codeModel, gridModel);
	view.setCanvas('canvas', 1800, 960);
	var control = new _control2.default(view, gridModel, codeModel);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	// constructor

	exports.default = function () {
	  return {

	    // view status

	    posX: 0, // current x displacement
	    posY: 0, // current y displacement

	    // placement of this grid view on the canvas element

	    viewX: 0, // top x coordinate of the view area on the canvas element
	    viewY: 0, // top y coordinate of the view area on the canvas element
	    viewWidth: 1800, // view width on the canvas element
	    viewheight: 1000, // view height on the canvas element

	    /////////////////////////////////////////////////////

	    cellWidth: 54,
	    cellHeight: 54
	  };
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _codeModel = __webpack_require__(3);

	var scopes = [new _codeModel.Scope(0, 0, 34, 60, '#0d0f13'), new _codeModel.Scope(2, 4, 30, 42, '#14171c'), new _codeModel.Scope(8, 6, 28, 24, '#191d23'), new _codeModel.Scope(8, 30, 28, 36, '#191d23'), new _codeModel.Scope(6, 16, 7, 17, '#0d3139'), new _codeModel.Scope(8, 16, 9, 17, '#0d3139'), new _codeModel.Scope(10, 20, 11, 21, '#0d3139')];

	var line0 = {
	  rows: 1,
	  tokens: {
	    0: new _codeModel.Token(0, 'abcdefgh'),
	    1: new _codeModel.Token(3, 'abcdefgh'),
	    2: new _codeModel.Token(1, 'abcdefgh'),
	    3: new _codeModel.Token(2, 'abcdefgh'),
	    4: new _codeModel.Token(5, 'abcdefgh'),
	    5: new _codeModel.Token(1, 'abcdefgh'),
	    6: new _codeModel.Token(4, 'abcdefgh'),
	    7: new _codeModel.Token(0, 'abcdefgh'),
	    8: new _codeModel.Token(4, 'abcdefgh'),
	    9: new _codeModel.Token(3, 'abcdefgh'),
	    10: new _codeModel.Token(3, 'abcdefgh'),
	    11: new _codeModel.Token(2, 'abcdefgh')
	  },
	  chains: {
	    0: new _codeModel.Step('a'),
	    1: new _codeModel.Step('b'),
	    2: new _codeModel.Step('c'),
	    5: new _codeModel.Step('a'),
	    6: new _codeModel.Step('b'),
	    7: new _codeModel.Step('c')
	  }
	};

	var line1 = {
	  rows: 3,
	  tokens: {
	    0: new _codeModel.Token(0, 'abcdefgh'),
	    1: new _codeModel.Token(2, 'abcdefgh'),
	    2: new _codeModel.Token(5, 'abcdefgh'),
	    3: new _codeModel.Token(3, 'abcdefgh'),
	    4: new _codeModel.Token(3, 'abcdefgh'),
	    5: new _codeModel.Token(5, 'abcdefgh'),
	    6: new _codeModel.Token(0, 'abcdefgh')
	  },
	  chains: {
	    0: new _codeModel.Step('a'),
	    1: new _codeModel.Step('b'),
	    2: new _codeModel.Step('c')
	  }
	};

	var line11 = {
	  rows: 0,
	  tokens: {
	    2: new _codeModel.Token(3, 'abcdefgh')
	  },
	  chains: {
	    2: new _codeModel.Step('a')
	  }
	};

	var line12 = {
	  rows: 0,
	  tokens: {
	    2: new _codeModel.Token(0, 'abcdefgh'),
	    3: new _codeModel.Token(1, 'abcdefgh'),
	    4: new _codeModel.Token(5, 'abcdefgh'),
	    5: new _codeModel.Token(3, 'abcdefgh')
	  },
	  chains: {
	    2: new _codeModel.Step('b')
	  }
	};

	var line2 = {
	  rows: 3,
	  tokens: {
	    0: new _codeModel.Token(1, 'abcdefgh'),
	    1: new _codeModel.Token(0, 'abcdefgh'),
	    2: new _codeModel.Token(4, 'abcdefgh'),
	    3: new _codeModel.Token(5, 'abcdefgh'),
	    4: new _codeModel.Token(3, 'abcdefgh'),
	    5: new _codeModel.Token(3, 'abcdefgh'),
	    6: new _codeModel.Token(2, 'abcdefgh'),
	    7: new _codeModel.Token(4, 'abcdefgh'),
	    8: new _codeModel.Token(5, 'abcdefgh'),
	    9: new _codeModel.Token(0, 'abcdefgh')
	  },
	  chains: {
	    2: new _codeModel.Step('c'),
	    3: new _codeModel.Step('a'),
	    4: new _codeModel.Step('b'),
	    5: new _codeModel.Step('c')
	  }
	};

	var line21 = {
	  rows: 0,
	  tokens: {
	    1: new _codeModel.Token(1, 'abcdefgh'),
	    6: new _codeModel.Token(3, 'abcdefgh')
	  },
	  chains: {}
	};

	var line22 = {
	  rows: 3,
	  tokens: {
	    1: new _codeModel.Token(3, 'abcdefgh'),
	    2: new _codeModel.Token(3, 'abcdefgh'),
	    3: new _codeModel.Token(5, 'abcdefgh'),
	    6: new _codeModel.Token(2, 'abcdefgh'),
	    7: new _codeModel.Token(3, 'abcdefgh'),
	    8: new _codeModel.Token(5, 'abcdefgh'),
	    9: new _codeModel.Token(0, 'abcdefgh')
	  }
	};

	var lines = [line0, line1, line11, line12, line2, line21, line22, line0, line1, line11, line12, line0, line0, line1, line11, line12, line0, line2, line21, line22, line0, line1, line11, line12, line1, line0, line1, line0, line0, line0, line2, line21, line22, line2, line0, line1, line1, line11, line12, line0, line0, line0, line2, line0, line0, line1];

	//export var codeModel = new CodeModel( lines, scopes )

	exports.default = function () {
	  return new _codeModel.CodeModel(lines, scopes);
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	///////////////////////////////////////////////////////////

	// code model

	var CodeModel = exports.CodeModel = function CodeModel(lines, scopes) {

	  this.lines = lines;
	  this.scopes = scopes;
	  this.dragging = {
	    x: 0,
	    y: 0,
	    token: null
	  };

	  this.insertToken = function (token, line, col) {
	    lines[line].tokens[col] = token;
	  };

	  this.removeToken = function (line, col) {
	    var token = lines[line].tokens[col];
	    delete lines[line].tokens[col];
	    return token;
	  };

	  this.tokenToDragging = function (line, col) {
	    this.dragging.x = col;
	    this.dragging.y = line;
	    var token = this.removeToken(line, col);
	    this.dragging.token = token;
	  };
	};

	///////////////////////////////////////////////////////////

	// scopes

	// scope object creator
	//
	// A scope is represented by a box in the background.
	// Colored slightly lighter than its container scope.
	//
	// x0,y0: (integers) top left corner in col, subrows coordinates.
	// x1,y1: (integers) bottom right corner in col, subrows coordinates.
	// color: (string) hex color value
	var Scope = exports.Scope = function Scope(x0, y0, x1, y1, color) {
	  return { x0: x0, y0: y0, x1: x1, y1: y1, color: color };
	};

	///////////////////////////////////////////////////////////

	// lines

	// Line object
	// height: (integer) height of this line in cells
	// tokens: (object)
	// chains: (object)
	var Line = exports.Line = function Line(height, tokens, chains) {
	  return { height: height, tokens: tokens, chains: chains };
	};

	// Token object creator
	//
	// name: (string) text name
	var Token = exports.Token = function Token(id, name) {
	  return { id: id, name: name };
	};

	// Step object creator
	//
	// A step is each of the cells that make a chain.
	// name: (string) text name of this step.
	var Step = exports.Step = function Step(name) {
	  return { name: name };
	};

	////////////////////////////////////////////////////////////

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _tokensIndex = __webpack_require__(5);

	/////////////////////////////////////////////////////////

	var cellwidth = 54;
	var cellHeight = 54;

	/////////////////////////////////////////////////////////

	var ctx = null;

	/////////////////////////////////////////////////////////

	var drawScope = function drawScope(scope) {
	  ctx.fillStyle = scope.color;
	  ctx.fillRect(scope.x0 * cellwidth, scope.y0 * cellHeight, (scope.x1 - scope.x0) * cellwidth, (scope.y1 - scope.y0) * cellHeight);
	};

	var drawScopes = function drawScopes(scopes, gridModel) {
	  ctx.resetTransform();
	  ctx.clearRect(0, 0, 1800, 1000);
	  ctx.translate(-gridModel.posX, -gridModel.posY);
	  scopes.forEach(drawScope);
	};

	/////////////////////////////////////////////////////////

	var lineY = 0;

	var drawToken = function drawToken(token, col) {
	  var x = col * cellwidth;
	  var y = lineY;
	  ctx.fillStyle = '#82a6e6';
	  ctx.fillText(token.name, x + 27, y + 12);
	  var tokenDescrip = _tokensIndex.tokensIndex[token.id];
	  ctx.drawImage(_tokensIndex.tokensImg, tokenDescrip.loc.x * cellwidth, tokenDescrip.loc.y * cellHeight, tokenDescrip.size.w, tokenDescrip.size.h, x + tokenDescrip.padding.x, y + tokenDescrip.padding.y, tokenDescrip.size.w, tokenDescrip.size.h);
	};

	var drawStep = function drawStep(step, col) {
	  var x = col * cellwidth;
	  var y = lineY;
	  ctx.fillRect(x + 4, y + 3, 46, 47);
	};

	var drawLine = function drawLine(line) {
	  ctx.fillStyle = '#002340';
	  for (var col in line.chains) {
	    drawStep(line.chains[col], col);
	  }
	  ctx.fillStyle = '#002340';
	  for (var col in line.tokens) {
	    drawToken(line.tokens[col], col);
	  }
	};

	var drawLines = function drawLines(lines, gridModel, height) {

	  var firstLine = Math.floor(gridModel.posY / gridModel.cellHeight);
	  var lastLine = Math.ceil((gridModel.posY + height) / gridModel.cellHeight);
	  console.log('firstLine', firstLine);
	  console.log('lastLine', lastLine);
	  for (var i = firstLine; i < lastLine; i++) {
	    lineY = i * gridModel.cellHeight;
	    drawLine(lines[i]);
	  }
	  //lines.forEach( drawLine, ctx )
	};

	/////////////////////////////////////////////////////////

	var drawFloat = function drawFloat(float, gridModel) {
	  var x = float.x * gridModel.cellWidth;
	  var y = float.y * gridModel.cellHeight;

	  ctx.fillStyle = 'rgba(0,241,18,0.4)';
	  ctx.fillRect(x + 2, y + 2, 50, 50);

	  ctx.fillStyle = '#82a6e6';
	  ctx.fillText(float.token.name, x + 27, y + 12);
	  var tokenDescrip = _tokensIndex.tokensIndex[float.token.id];
	  ctx.drawImage(_tokensIndex.tokensImg, tokenDescrip.loc.x * cellwidth, tokenDescrip.loc.y * cellHeight, tokenDescrip.size.w, tokenDescrip.size.h, x + tokenDescrip.padding.x, y + tokenDescrip.padding.y, tokenDescrip.size.w, tokenDescrip.size.h);
	};

	/////////////////////////////////////////////////////////

	var setCanvasSize = function setCanvasSize(canvas, width, height) {
	  canvas.width = width;
	  canvas.height = height;
	};

	/////////////////////////////////////////////////////////

	// view constructor
	var View = function View(codeModel, gridModel) {
	  var _this = this;

	  this.codeModel = codeModel;
	  this.gridModel = gridModel;
	  this.canvasId = '';
	  this.ctx = null;
	  this.canvas = null;

	  this.draw = function () {
	    ctx = _this.ctx;
	    drawScopes(codeModel.scopes, gridModel);
	    drawLines(_this.codeModel.lines, gridModel, _this.canvas.height);
	    if (_this.codeModel.dragging.token) drawFloat(_this.codeModel.dragging, gridModel);
	  };

	  this.setCanvas = function (canvasId, width, height) {
	    _this.canvasId = canvasId;
	    _this.canvas = document.getElementById(canvasId);
	    setCanvasSize(_this.canvas, width, height);
	    _this.ctx = canvas.getContext('2d');
	    _this.ctx.textAlign = 'center';
	    //this.ctx.font = 'Ubuntu Mono'
	  };
	};

	exports.default = View;

	/////////////////////////////////////////////////////////

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var tokensImg = exports.tokensImg = new Image();
	tokensImg.src = 'img/tokens01.png';

	var tokensIndex = exports.tokensIndex = {

	  0: {
	    loc: { x: 0, y: 0 },
	    padding: { x: 14, y: 18 },
	    size: { w: 26, h: 24 },
	    tooltip: 'Boolean'
	  },

	  1: {
	    loc: { x: 1, y: 0 },
	    padding: { x: 14, y: 18 },
	    size: { w: 26, h: 24 },
	    tooltip: 'Number'
	  },

	  2: {
	    loc: { x: 2, y: 0 },
	    padding: { x: 14, y: 18 },
	    size: { w: 26, h: 24 },
	    tooltip: 'String'
	  },

	  3: {
	    loc: { x: 3, y: 0 },
	    padding: { x: 12, y: 16 },
	    size: { w: 30, h: 28 },
	    tooltip: 'Object'
	  },

	  4: {
	    loc: { x: 4, y: 0 },
	    padding: { x: 9, y: 19 },
	    size: { w: 35, h: 24 },
	    tooltip: 'Array'
	  },

	  5: {
	    loc: { x: 5, y: 0 },
	    padding: { x: 14, y: 18 },
	    size: { w: 25, h: 26 },
	    tooltip: 'Function'
	  }

	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _tokenUtils = __webpack_require__(7);

	var _drag = __webpack_require__(8);

	var _drag2 = _interopRequireDefault(_drag);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var noop = function noop() {};

	var Control = function Control(view, gridModel, codeModel) {

	  this.codeModel = codeModel;
	  this.gridModel = gridModel;
	  this.view = view;

	  var drag = new _drag2.default(view.canvas);

	  var scroll = function scroll(dx, dy) {
	    gridModel.posX -= dx;
	    gridModel.posY -= dy;
	    window.requestAnimationFrame(view.draw);
	  };

	  var dragToken = function dragToken(dx, dy) {

	    codeModel.dragging.x += dx / gridModel.cellWidth;
	    codeModel.dragging.y += dy / gridModel.cellHeight;
	    window.requestAnimationFrame(view.draw);
	  };

	  var dragTokenEnd = function dragTokenEnd() {
	    drag.end = noop;

	    var xInCells = codeModel.dragging.x;
	    var yInCells = codeModel.dragging.y;

	    var col = Math.round(xInCells);
	    var line = Math.round(yInCells);

	    var tokenAt = codeModel.lines[line].tokens[col];

	    // if there is no token at the spot, insert the dragging token there
	    if (!tokenAt) {
	      codeModel.insertToken(codeModel.dragging.token, line, col);
	      codeModel.dragging.token = null;
	    }
	    window.requestAnimationFrame(view.draw);
	  };

	  drag.mousedown = function (x, y) {
	    if ((0, _tokenUtils.getDraggingClick)(x, y, codeModel, gridModel)) {
	      drag.move = dragToken;
	      drag.end = dragTokenEnd;
	      return;
	    }
	    var tokenPos = (0, _tokenUtils.getTokenClick)(x, y, codeModel.lines, gridModel);
	    console.log('token clicked:', tokenPos);
	    if (tokenPos) {
	      codeModel.tokenToDragging(tokenPos.lineNumber, tokenPos.col);
	      drag.move = dragToken;
	      drag.end = dragTokenEnd;
	    } else {
	      drag.move = scroll;
	    }
	  };

	  drag.end = function () {
	    drag.move = noop;
	  };

	  view.draw();
	};

	exports.default = Control;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getDraggingClick = exports.getTokenClick = undefined;

	var _tokensIndex = __webpack_require__(5);

	// From x,y pixel coordinates, determines if a token has been
	// clicked
	var getTokenClick = exports.getTokenClick = function getTokenClick(x, y, lines, gridModel) {
	  x = x + gridModel.posX;
	  y = y + gridModel.posY;
	  var lineNumber = Math.floor(y / gridModel.cellHeight);
	  var boxY = y % gridModel.cellHeight;
	  var col = Math.floor(x / gridModel.cellWidth);
	  var boxX = x % gridModel.cellWidth;

	  var token = lines[lineNumber].tokens[col];

	  if (!token) return null;

	  var tokenDescrip = _tokensIndex.tokensIndex[token.id];

	  // get token box
	  var tokenTopX = tokenDescrip.padding.x;
	  var tokenTopY = tokenDescrip.padding.y;
	  var tokenWidth = tokenDescrip.size.w;
	  var tokenHeight = tokenDescrip.size.h;

	  if (boxX > tokenTopX && boxY > tokenTopY && tokenTopX + tokenWidth > boxX && tokenTopY + tokenHeight > boxY) return { lineNumber: lineNumber, col: col };else return null;
	};

	// From x,y pixel coordinates, determines if the dragging token
	// left floating, has been clicked
	var getDraggingClick = exports.getDraggingClick = function getDraggingClick(x, y, codeModel, gridModel) {
	  if (!codeModel.dragging.token) return false;
	  x = x + gridModel.posX;
	  y = y + gridModel.posY;

	  // get dragging bounds
	  var topX = codeModel.dragging.x * gridModel.cellWidth;
	  var bottomX = topX + gridModel.cellWidth;
	  var topY = codeModel.dragging.y * gridModel.cellHeight;
	  var bottomY = topY + gridModel.cellHeight;

	  if (x > topX && x < bottomX && y > topY && y < bottomY) return true;else return false;
	};

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	// drag module

	//

	// an empty function
	var noop = function noop() {};

	var Drag = function Drag(canvas) {
	    var _this = this;

	    this.mousedown = noop;
	    this.move = noop;
	    this.end = noop;

	    // on each mouse move step, remember the previous
	    // x,y to calculate the deltas: dx,dy
	    var prevX, prevY;

	    // mouse down event handler
	    var mouseDownStart = function mouseDownStart(ev) {

	        prevX = ev.clientX - ev.target.offsetLeft;
	        prevY = ev.clientY - ev.target.offsetTop;

	        _this.mousedown(prevX, prevY);
	        var thisEnd = _this.end;
	        canvas.onmousemove = dragging;
	        canvas.onmouseup = function () {
	            canvas.onmousemove = noop;
	            thisEnd();
	        };
	    };

	    var dragging = function dragging(ev) {

	        var buttons;
	        if ('buttons' in ev) {
	            buttons = ev.buttons;
	        } else if ('which' in ev) {
	            buttons = ev.which;
	        } else {
	            buttons = ev.button;
	        }

	        if (buttons != 1) {
	            canvas.onmousemove = noop;
	            _this.end();
	            return;
	        }

	        var mx = ev.clientX - ev.target.offsetLeft;
	        var my = ev.clientY - ev.target.offsetTop;
	        var dx = mx - prevX;
	        var dy = my - prevY;
	        prevX = mx;
	        prevY = my;

	        // do drag
	        _this.move(dx, dy);
	    };

	    canvas.onmousedown = mouseDownStart;
	};

	exports.default = Drag;

/***/ }
/******/ ]);