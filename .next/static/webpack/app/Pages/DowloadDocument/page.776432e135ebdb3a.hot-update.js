"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Pages/DowloadDocument/page",{

/***/ "(app-pages-browser)/./app/Pages/DowloadDocument/page.jsx":
/*!********************************************!*\
  !*** ./app/Pages/DowloadDocument/page.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DocumentPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction DocumentPage() {\n    _s();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const Domain = process.env.Domain;\n    const fetchData = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(Domain, \"api/Documents/getall-documents\"));\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch data\");\n            }\n            const AllDocument = await response.json();\n            setdata(datas);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const formatYears = (year)=>{\n        const academicYearDate = new Date(year, 0); // Month is 0 (January) to avoid offset issues\n        const academicYearOptions = {\n            year: \"numeric\",\n            timeZone: \"Asia/Bangkok\"\n        };\n        const thaiYearFormatter = new Intl.DateTimeFormat(\"th-TH\", academicYearOptions);\n        year = thaiYearFormatter.format(academicYearDate).replace(\"พ.ศ. \", \"\");\n        return year;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchPDF = async (fileName)=>{\n        try {\n            const response = await fetch(\"\".concat(Domain, \"api/files/download/\").concat(fileName));\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch PDF\");\n            }\n            const pdfBlob = await response.blob();\n            const pdfUrl = URL.createObjectURL(pdfBlob);\n            window.open(pdfUrl, \"_blank\");\n        } catch (error) {\n            console.error(\"Error fetching PDF:\", error);\n        }\n    };\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full flex flex-col justify-center items-center py-12 h-screen bg-gradient-to-b from-white to-[#991F23] \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"spinner-border text-black\",\n                    role: \"status\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"visually-hidden\",\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"py-24 bg-gradient-to-b from-white to-[#991F23] w-full h-full flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            className: \"max-w-6xl w-full flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-6xl w-full text-[#991F23] flex flex-col gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-3xl\",\n                                children: \"ดาวน์โหลดเอกสาร\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-0.5 bg-[black]\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex  pt-4 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full rounded-lg grid grid-cols-3 max-lg:grid-cols-2 gap-4 max-lg:px-4\",\n                            children: data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-white flex justify-between shadow-3xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-bold text-xl max-sm:text-base\",\n                                                children: [\n                                                    \"หลักสูตรปี \",\n                                                    formatYears(item.Year)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"list-disc pl-8\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        onClick: ()=>fetchPDF(item.rsu36),\n                                                        className: \"cursor-pointer  hover:underline\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-blue-500\",\n                                                            children: \"มรส.36\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                            lineNumber: 85,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                        lineNumber: 81,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        onClick: ()=>fetchPDF(item.subjectRelation),\n                                                        className: \"cursor-pointer hover:underline\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-blue-500\",\n                                                            children: [\n                                                                \" \",\n                                                                \"ความสัมพันธ์รายวิชา\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                lineNumber: 80,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, this)\n                                }, item.ID, false, {\n                                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(DocumentPage, \"qLEflTOmXrzTZJfh2c5W/ZOvfY8=\");\n_c = DocumentPage;\nvar _c;\n$RefreshReg$(_c, \"DocumentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9QYWdlcy9Eb3dsb2FkRG9jdW1lbnQvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDNEM7QUFDbEI7QUFDWCxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTU0sU0FBU0MsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDRixNQUFNO0lBRWpDLE1BQU1HLFlBQVk7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTVIsNkNBQUtBLENBQUNTLEdBQUcsQ0FBQyxHQUFVLE9BQVBMLFFBQU87WUFDM0MsSUFBSSxDQUFDSSxTQUFTRSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUNBLE1BQU1DLGNBQWMsTUFBTUosU0FBU0ssSUFBSTtZQUN2Q1YsUUFBUVc7UUFDVixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUNBLE1BQU1FLGNBQWMsQ0FBQ0M7UUFDbkIsTUFBTUMsbUJBQW1CLElBQUlDLEtBQUtGLE1BQU0sSUFBSSw4Q0FBOEM7UUFDMUYsTUFBTUcsc0JBQXNCO1lBQUVILE1BQU07WUFBV0ksVUFBVTtRQUFlO1FBQ3hFLE1BQU1DLG9CQUFvQixJQUFJQyxLQUFLQyxjQUFjLENBQy9DLFNBQ0FKO1FBRUZILE9BQU9LLGtCQUFrQkcsTUFBTSxDQUFDUCxrQkFBa0JRLE9BQU8sQ0FBQyxTQUFTO1FBQ25FLE9BQU9UO0lBQ1Q7SUFFQW5CLGdEQUFTQSxDQUFDO1FBQ1JRO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTXFCLFdBQVcsT0FBT0M7UUFDdEIsSUFBSTtZQUNGLE1BQU1yQixXQUFXLE1BQU1zQixNQUFNLEdBQStCRCxPQUE1QnpCLFFBQU8sdUJBQThCLE9BQVR5QjtZQUM1RCxJQUFJLENBQUNyQixTQUFTRSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUNBLE1BQU1vQixVQUFVLE1BQU12QixTQUFTd0IsSUFBSTtZQUNuQyxNQUFNQyxTQUFTQyxJQUFJQyxlQUFlLENBQUNKO1lBQ25DSyxPQUFPQyxJQUFJLENBQUNKLFFBQVE7UUFDdEIsRUFBRSxPQUFPbEIsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsdUJBQXVCQTtRQUN2QztJQUNGO0lBRUEsSUFBSSxDQUFDYixNQUFNO1FBQ1QscUJBQ0UsOERBQUNvQztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7b0JBQTRCQyxNQUFLOzhCQUM5Qyw0RUFBQ0M7d0JBQUtGLFdBQVU7a0NBQWtCOzs7Ozs7Ozs7Ozs4QkFFcEMsOERBQUNEOzhCQUFJOzs7Ozs7Ozs7Ozs7SUFHWDtJQUNBLHFCQUNFLDhEQUFDSTtRQUFLSCxXQUFVO2tCQUNkLDRFQUFDSTtZQUFRSixXQUFVOzs4QkFDakIsOERBQUNEO29CQUFJQyxXQUFVOzhCQUNiLDRFQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFLRixXQUFVOzBDQUFXOzs7Ozs7MENBQzNCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR25CLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNackMsS0FBSzBDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ1A7b0NBRUNDLFdBQVU7OENBRVYsNEVBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ0Q7Z0RBQUlDLFdBQVU7O29EQUFxQztvREFDdEN0QixZQUFZNEIsS0FBS0MsSUFBSTs7Ozs7OzswREFFbkMsOERBQUNDO2dEQUFHUixXQUFVOztrRUFDWiw4REFBQ1M7d0RBQ0NDLFNBQVMsSUFBTXJCLFNBQVNpQixLQUFLSyxLQUFLO3dEQUNsQ1gsV0FBVTtrRUFFViw0RUFBQ0U7NERBQUtGLFdBQVU7c0VBQWdCOzs7Ozs7Ozs7OztrRUFFbEMsOERBQUNTO3dEQUNDQyxTQUFTLElBQU1yQixTQUFTaUIsS0FBS00sZUFBZTt3REFDNUNaLFdBQVU7a0VBRVYsNEVBQUNFOzREQUFLRixXQUFVOztnRUFDYjtnRUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQW5CUk0sS0FBS08sRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlDOUI7R0F0R3dCbkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL1BhZ2VzL0Rvd2xvYWREb2N1bWVudC9wYWdlLmpzeD83OWNlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jdW1lbnRQYWdlKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXRkYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBEb21haW4gPSBwcm9jZXNzLmVudi5Eb21haW47XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0RvbWFpbn1hcGkvRG9jdW1lbnRzL2dldGFsbC1kb2N1bWVudHNgKTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IEFsbERvY3VtZW50ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRkYXRhKGRhdGFzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBmb3JtYXRZZWFycyA9ICh5ZWFyKSA9PiB7XHJcbiAgICBjb25zdCBhY2FkZW1pY1llYXJEYXRlID0gbmV3IERhdGUoeWVhciwgMCk7IC8vIE1vbnRoIGlzIDAgKEphbnVhcnkpIHRvIGF2b2lkIG9mZnNldCBpc3N1ZXNcclxuICAgIGNvbnN0IGFjYWRlbWljWWVhck9wdGlvbnMgPSB7IHllYXI6IFwibnVtZXJpY1wiLCB0aW1lWm9uZTogXCJBc2lhL0Jhbmdrb2tcIiB9O1xyXG4gICAgY29uc3QgdGhhaVllYXJGb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcclxuICAgICAgXCJ0aC1USFwiLFxyXG4gICAgICBhY2FkZW1pY1llYXJPcHRpb25zXHJcbiAgICApO1xyXG4gICAgeWVhciA9IHRoYWlZZWFyRm9ybWF0dGVyLmZvcm1hdChhY2FkZW1pY1llYXJEYXRlKS5yZXBsYWNlKFwi4LieLuC4qC4gXCIsIFwiXCIpO1xyXG4gICAgcmV0dXJuIHllYXI7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQREYgPSBhc3luYyAoZmlsZU5hbWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7RG9tYWlufWFwaS9maWxlcy9kb3dubG9hZC8ke2ZpbGVOYW1lfWApO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIFBERlwiKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwZGZCbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgICBjb25zdCBwZGZVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHBkZkJsb2IpO1xyXG4gICAgICB3aW5kb3cub3BlbihwZGZVcmwsIFwiX2JsYW5rXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIFBERjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmICghZGF0YSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHktMTIgaC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tYiBmcm9tLXdoaXRlIHRvLVsjOTkxRjIzXSBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtYmxhY2tcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2aXN1YWxseS1oaWRkZW5cIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJweS0yNCBiZy1ncmFkaWVudC10by1iIGZyb20td2hpdGUgdG8tWyM5OTFGMjNdIHctZnVsbCBoLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJtYXgtdy02eGwgdy1mdWxsIGZsZXggZmxleC1jb2xcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIHctZnVsbCB0ZXh0LVsjOTkxRjIzXSBmbGV4IGZsZXgtY29sIGdhcC00XCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtM3hsXCI+4LiU4Liy4Lin4LiZ4LmM4LmC4Lir4Lil4LiU4LmA4Lit4LiB4Liq4Liy4LijPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLTAuNSBiZy1bYmxhY2tdXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIHB0LTQgdy1mdWxsXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCByb3VuZGVkLWxnIGdyaWQgZ3JpZC1jb2xzLTMgbWF4LWxnOmdyaWQtY29scy0yIGdhcC00IG1heC1sZzpweC00XCI+XHJcbiAgICAgICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5JRH1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgZmxleCBqdXN0aWZ5LWJldHdlZW4gc2hhZG93LTN4bFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYXgtc206dGV4dC1iYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICDguKvguKXguLHguIHguKrguLnguJXguKPguJvguLUge2Zvcm1hdFllYXJzKGl0ZW0uWWVhcil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZGlzYyBwbC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmV0Y2hQREYoaXRlbS5yc3UzNil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyICBob3Zlcjp1bmRlcmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+4Lih4Lij4LiqLjM2PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmZXRjaFBERihpdGVtLnN1YmplY3RSZWxhdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGhvdmVyOnVuZGVybGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg4LiE4Lin4Liy4Lih4Liq4Lix4Lih4Lie4Lix4LiZ4LiY4LmM4Lij4Liy4Lii4Lin4Li04LiK4LiyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJEb2N1bWVudFBhZ2UiLCJkYXRhIiwic2V0ZGF0YSIsIkRvbWFpbiIsInByb2Nlc3MiLCJlbnYiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImdldCIsIm9rIiwiRXJyb3IiLCJBbGxEb2N1bWVudCIsImpzb24iLCJkYXRhcyIsImVycm9yIiwiY29uc29sZSIsImZvcm1hdFllYXJzIiwieWVhciIsImFjYWRlbWljWWVhckRhdGUiLCJEYXRlIiwiYWNhZGVtaWNZZWFyT3B0aW9ucyIsInRpbWVab25lIiwidGhhaVllYXJGb3JtYXR0ZXIiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJmb3JtYXQiLCJyZXBsYWNlIiwiZmV0Y2hQREYiLCJmaWxlTmFtZSIsImZldGNoIiwicGRmQmxvYiIsImJsb2IiLCJwZGZVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aW5kb3ciLCJvcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwicm9sZSIsInNwYW4iLCJtYWluIiwiYXJ0aWNsZSIsIm1hcCIsIml0ZW0iLCJZZWFyIiwidWwiLCJsaSIsIm9uQ2xpY2siLCJyc3UzNiIsInN1YmplY3RSZWxhdGlvbiIsIklEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Pages/DowloadDocument/page.jsx\n"));

/***/ })

});