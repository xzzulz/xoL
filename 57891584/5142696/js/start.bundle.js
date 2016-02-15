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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _load = __webpack_require__(9);

	// start app once everything has loaded
	_load.resources.onReady = function () {
	  var mainScript = document.createElement('script');
	  mainScript.setAttribute('src', 'js/main.bundle.js');
	  document.head.appendChild(mainScript);
	}; ///////////////////////////////////////////////////////////////
	//
	// App starting point
	//
	// preload resources and start main module
	//
	///////////////////////////////////////////////////////////////

/***/ },

/***/ 9:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	// Very basic preloader module.
	// todo: improve this.
	//

	console.log('loading resources');

	var resources = exports.resources = {};

	resources.onReady = function () {};

	///////////////////////////////////////////

	// number of resources to load
	var res = 1;
	var loading = function loading() {
	  if (--res == 0) resources.onReady();
	};

	///////////////////////////////////////////

	resources.tokens = preloadImage('img/tokens01.png', loading);

	///////////////////////////////////////////

	function loadFile(fileName) {
	  var promise = new Promise(function (resolve, reject) {
	    var request = new XMLHttpRequest();
	    request.onreadystatechange = function () {
	      if (request.readyState === 4 && request.status !== 404) {
	        resolve(request.responseText);
	      }
	    };
	    request.open('GET', fileName, true);
	    request.send();
	  });
	  return promise;
	}

	function preloadImage(src, done) {
	  var img = document.createElement('img');
	  img.src = src;
	  img.onload = done;
	}

/***/ }

/******/ });