(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/example/celSpan"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Boolean\\Documents\\HBuilderProjects\\demo1\\components\\example\\celSpan.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Boolean/Documents/HBuilderProjects/demo1/components/example/celSpan.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var vTable = function vTable() {return __webpack_require__.e(/*! import() | components/table */ "components/table").then(__webpack_require__.bind(null, /*! @/components/table.vue */ "C:\\Users\\Boolean\\Documents\\HBuilderProjects\\demo1\\components\\table.vue"));};var _default =








{
  components: {
    vTable: vTable },

  data: function data() {
    return {
      columns: [{
        title: "ID",
        key: "id" },

      {
        title: 'Name',
        key: 'name' },

      {
        title: 'Age',
        key: 'age' },

      {
        title: 'Address',
        key: 'address' }],


      //列合并数据
      dataColSpan: [{
        name: 'John Brown',
        age: 18,
        address: 'New York No. 1 Lake Park',
        id: "1",
        nameCols: 2 },

      {
        name: 'Jim Green',
        age: 25,
        address: 'London No. 1 Lake Park',
        id: "2",
        nameCols: 2 },

      {
        name: 'Joe Black',
        age: 30,
        address: 'Sydney No. 1 Lake Park',
        id: "3" },

      {
        name: 'Jon Snow',
        age: 26,
        address: 'Ottawa No. 2 Lake Park',
        id: "4" }] };




  },
  methods: {
    colsSpanMethod: function colsSpanMethod(row, column, rowIndex, columnIndex) {
      // console.log(column)
      if (column.key == 'name' && row.nameCols == 2) {
        return {
          rowspan: 1,
          colspan: 2 };

      } else if (row.nameCols == 2 && column.key == 'age') {
        return {
          rowspan: 1,
          colspan: 0 };

      } else {
        return {
          rowspan: 1,
          colspan: 1 };

      }
    } } };exports.default = _default;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Boolean\\Documents\\HBuilderProjects\\demo1\\components\\example\\celSpan.vue?vue&type=template&id=2e3d230a&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/Boolean/Documents/HBuilderProjects/demo1/components/example/celSpan.vue?vue&type=template&id=2e3d230a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "C:\\Users\\Boolean\\Documents\\HBuilderProjects\\demo1\\components\\example\\celSpan.vue":
/*!****************************************************************************************!*\
  !*** C:/Users/Boolean/Documents/HBuilderProjects/demo1/components/example/celSpan.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _celSpan_vue_vue_type_template_id_2e3d230a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./celSpan.vue?vue&type=template&id=2e3d230a& */ "C:\\Users\\Boolean\\Documents\\HBuilderProjects\\demo1\\components\\example\\celSpan.vue?vue&type=template&id=2e3d230a&");
/* harmony import */ var _celSpan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./celSpan.vue?vue&type=script&lang=js& */ "C:\\Users\\Boolean\\Documents\\HBuilderProjects\\demo1\\components\\example\\celSpan.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _celSpan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _celSpan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _celSpan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _celSpan_vue_vue_type_template_id_2e3d230a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _celSpan_vue_vue_type_template_id_2e3d230a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "C:/Users/Boolean/Documents/HBuilderProjects/demo1/components/example/celSpan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C:\\Users\\Boolean\\Documents\\HBuilderProjects\\demo1\\components\\example\\celSpan.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** C:/Users/Boolean/Documents/HBuilderProjects/demo1/components/example/celSpan.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_celSpan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./celSpan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Boolean\\Documents\\HBuilderProjects\\demo1\\components\\example\\celSpan.vue?vue&type=script&lang=js&");
/* harmony import */ var _E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_celSpan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_celSpan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_celSpan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_celSpan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_celSpan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "C:\\Users\\Boolean\\Documents\\HBuilderProjects\\demo1\\components\\example\\celSpan.vue?vue&type=template&id=2e3d230a&":
/*!***********************************************************************************************************************!*\
  !*** C:/Users/Boolean/Documents/HBuilderProjects/demo1/components/example/celSpan.vue?vue&type=template&id=2e3d230a& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_celSpan_vue_vue_type_template_id_2e3d230a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./celSpan.vue?vue&type=template&id=2e3d230a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!C:\\Users\\Boolean\\Documents\\HBuilderProjects\\demo1\\components\\example\\celSpan.vue?vue&type=template&id=2e3d230a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_celSpan_vue_vue_type_template_id_2e3d230a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_installed_HBuilderX_1_9_9_20190522_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_celSpan_vue_vue_type_template_id_2e3d230a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/example/celSpan-create-component',
    {
        'components/example/celSpan-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('./node_modules/@dcloudio/uni-app-plus/dist/index.js')['createComponent'](__webpack_require__("C:\\Users\\Boolean\\Documents\\HBuilderProjects\\demo1\\components\\example\\celSpan.vue"))
        })
    },
    [['components/example/celSpan-create-component']]
]);                
