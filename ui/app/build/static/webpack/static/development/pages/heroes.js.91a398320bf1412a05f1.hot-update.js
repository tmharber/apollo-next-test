webpackHotUpdate("static/development/pages/heroes.js",{

/***/ "./components/RoleDetails.js":
/*!***********************************!*\
  !*** ./components/RoleDetails.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RoleDetails; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "../node_modules/react-apollo/react-apollo.esm.js");




function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query getHeroes($role: String!) {\n        heroes(role: $role) {\n            id\n            name\n            role\n            damage\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var heroesDetailsQuery = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
function RoleDetails(props) {
  console.log(props.role);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["Query"], {
    query: heroesDetailsQuery,
    variables: {
      role: props.role
    }
  }, function (_ref) {
    var loading = _ref.loading,
        error = _ref.error,
        heroes = _ref.data.heroes;
    if (error) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Error fetching ", props.heroId);
    if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading");
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, heroes.map(function (hero) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "margin",
        key: hero.name
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Name: ", hero.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Damage: ", hero.damage), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Role: ", hero.role));
    }));
  });
}

/***/ })

})
//# sourceMappingURL=heroes.js.91a398320bf1412a05f1.hot-update.js.map