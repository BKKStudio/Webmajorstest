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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DocumentPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction DocumentPage() {\n    _s();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"https://testapiwebmajors.vercel.app/api/documents\", {\n                cache: \"no-store\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch data\");\n            }\n            const datas = await response.json();\n            setdata(datas);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const formatYears = (year)=>{\n        const academicYearDate = new Date(year, 0); // Month is 0 (January) to avoid offset issues\n        const academicYearOptions = {\n            year: \"numeric\",\n            timeZone: \"Asia/Bangkok\"\n        };\n        const thaiYearFormatter = new Intl.DateTimeFormat(\"th-TH\", academicYearOptions);\n        year = thaiYearFormatter.format(academicYearDate).replace(\"พ.ศ. \", \"\");\n        return year;\n    };\n    const [newDocument, setNewDocument] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        Year: \"\",\n        rsu36: \"\",\n        subjectRelation: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchPDF = async (fileName)=>{\n        try {\n            const response = await fetch(\"https://testapiwebmajors.vercel.app/send-pdf\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    fileName\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch PDF\");\n            }\n            const pdfBlob = await response.blob();\n            const pdfUrl = URL.createObjectURL(pdfBlob);\n            window.open(pdfUrl, \"_blank\");\n        } catch (error) {\n            console.error(\"Error fetching PDF:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"py-24 bg-gradient-to-b from-white to-[#991F23] w-full h-full flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            className: \"max-w-6xl w-full flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-6xl w-full text-[#991F23] flex flex-col gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-3xl\",\n                                children: \"ดาวน์โหลดเอกสาร\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-0.5 bg-[#991F23]\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex  pt-4 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full rounded-lg grid grid-cols-3 max-lg:grid-cols-2 gap-4 max-lg:px-4\",\n                            children: data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-white flex justify-between shadow-3xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-bold text-xl max-sm:text-base\",\n                                                children: [\n                                                    \"หลักสูตรปี \",\n                                                    formatYears(item.Year)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"list-disc pl-8\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        onClick: ()=>fetchPDF(item.rsu36),\n                                                        className: \"cursor-pointer  hover:underline\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-blue-500\",\n                                                            children: \"มรส.36\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                            lineNumber: 97,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        onClick: ()=>fetchPDF(item.subjectRelation),\n                                                        className: \"cursor-pointer hover:underline\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-blue-500\",\n                                                            children: [\n                                                                \" \",\n                                                                \"ความสัมพันธ์รายวิชา\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                            lineNumber: 103,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                        lineNumber: 99,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 19\n                                    }, this)\n                                }, item.ID, false, {\n                                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n            lineNumber: 73,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, this);\n}\n_s(DocumentPage, \"ieXddlhNlKC0Na2kPwtN2xw8DLk=\");\n_c = DocumentPage;\nvar _c;\n$RefreshReg$(_c, \"DocumentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9QYWdlcy9Eb3dsb2FkRG9jdW1lbnQvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzRDO0FBRTdCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUVuQyxNQUFNSyxZQUFZO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCLHFEQUNBO2dCQUNFQyxPQUFPO1lBQ1Q7WUFFRixJQUFJLENBQUNGLFNBQVNHLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBQ0EsTUFBTUMsUUFBUSxNQUFNTCxTQUFTTSxJQUFJO1lBQ2pDUixRQUFRTztRQUNWLEVBQUUsT0FBT0UsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtRQUN4QztJQUNGO0lBRUEsTUFBTUUsY0FBYyxDQUFDQztRQUNuQixNQUFNQyxtQkFBbUIsSUFBSUMsS0FBS0YsTUFBTSxJQUFJLDhDQUE4QztRQUMxRixNQUFNRyxzQkFBc0I7WUFBRUgsTUFBTTtZQUFXSSxVQUFVO1FBQWU7UUFDeEUsTUFBTUMsb0JBQW9CLElBQUlDLEtBQUtDLGNBQWMsQ0FDL0MsU0FDQUo7UUFFRkgsT0FBT0ssa0JBQWtCRyxNQUFNLENBQUNQLGtCQUFrQlEsT0FBTyxDQUFDLFNBQVM7UUFDbkUsT0FBT1Q7SUFDVDtJQUVBLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHM0IsK0NBQVFBLENBQUM7UUFDN0M0QixNQUFNO1FBQ05DLE9BQU87UUFDUEMsaUJBQWlCO0lBQ25CO0lBSUE3QixnREFBU0EsQ0FBQztRQUNSSTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU0wQixXQUFXLE9BQU9DO1FBQ3RCLElBQUk7WUFDRixNQUFNMUIsV0FBVyxNQUFNQyxNQUNyQixnREFDQTtnQkFDRTBCLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUFFTDtnQkFBUztZQUNsQztZQUVGLElBQUksQ0FBQzFCLFNBQVNHLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBQ0EsTUFBTTRCLFVBQVUsTUFBTWhDLFNBQVNpQyxJQUFJO1lBQ25DLE1BQU1DLFNBQVNDLElBQUlDLGVBQWUsQ0FBQ0o7WUFDbkNLLE9BQU9DLElBQUksQ0FBQ0osUUFBUTtRQUN0QixFQUFFLE9BQU8zQixPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx1QkFBdUJBO1FBQ3ZDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2dDO1FBQUtDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQVFELFdBQVU7OzhCQUNqQiw4REFBQ0U7b0JBQUlGLFdBQVU7OEJBQ2IsNEVBQUNFO3dCQUFJRixXQUFVOzswQ0FDYiw4REFBQ0c7Z0NBQUtILFdBQVU7MENBQVc7Ozs7OzswQ0FDM0IsOERBQUNFO2dDQUFJRixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHbkIsOERBQUNFO29CQUFJRixXQUFVOzhCQUNiLDRFQUFDRTt3QkFBSUYsV0FBVTtrQ0FDYiw0RUFBQ0U7NEJBQUlGLFdBQVU7c0NBQ1ozQyxLQUFLK0MsR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDSDtvQ0FFQ0YsV0FBVTs4Q0FFViw0RUFBQ0U7d0NBQUlGLFdBQVU7OzBEQUNiLDhEQUFDRTtnREFBSUYsV0FBVTs7b0RBQXFDO29EQUN0Qy9CLFlBQVlvQyxLQUFLdkIsSUFBSTs7Ozs7OzswREFFbkMsOERBQUN3QjtnREFBR04sV0FBVTs7a0VBQ1osOERBQUNPO3dEQUNDQyxTQUFTLElBQU12QixTQUFTb0IsS0FBS3RCLEtBQUs7d0RBQ2xDaUIsV0FBVTtrRUFFViw0RUFBQ0c7NERBQUtILFdBQVU7c0VBQWdCOzs7Ozs7Ozs7OztrRUFFbEMsOERBQUNPO3dEQUNDQyxTQUFTLElBQU12QixTQUFTb0IsS0FBS3JCLGVBQWU7d0RBQzVDZ0IsV0FBVTtrRUFFViw0RUFBQ0c7NERBQUtILFdBQVU7O2dFQUNiO2dFQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBbkJSSyxLQUFLSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUM5QjtHQWxId0JyRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvUGFnZXMvRG93bG9hZERvY3VtZW50L3BhZ2UuanN4Pzc5Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50UGFnZSgpIHtcclxuICBjb25zdCBbZGF0YSwgc2V0ZGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgXCJodHRwczovL3Rlc3RhcGl3ZWJtYWpvcnMudmVyY2VsLmFwcC9hcGkvZG9jdW1lbnRzXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgY2FjaGU6IFwibm8tc3RvcmVcIixcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggZGF0YVwiKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0ZGF0YShkYXRhcyk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZvcm1hdFllYXJzID0gKHllYXIpID0+IHtcclxuICAgIGNvbnN0IGFjYWRlbWljWWVhckRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCAwKTsgLy8gTW9udGggaXMgMCAoSmFudWFyeSkgdG8gYXZvaWQgb2Zmc2V0IGlzc3Vlc1xyXG4gICAgY29uc3QgYWNhZGVtaWNZZWFyT3B0aW9ucyA9IHsgeWVhcjogXCJudW1lcmljXCIsIHRpbWVab25lOiBcIkFzaWEvQmFuZ2tva1wiIH07XHJcbiAgICBjb25zdCB0aGFpWWVhckZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KFxyXG4gICAgICBcInRoLVRIXCIsXHJcbiAgICAgIGFjYWRlbWljWWVhck9wdGlvbnNcclxuICAgICk7XHJcbiAgICB5ZWFyID0gdGhhaVllYXJGb3JtYXR0ZXIuZm9ybWF0KGFjYWRlbWljWWVhckRhdGUpLnJlcGxhY2UoXCLguJ4u4LioLiBcIiwgXCJcIik7XHJcbiAgICByZXR1cm4geWVhcjtcclxuICB9O1xyXG5cclxuICBjb25zdCBbbmV3RG9jdW1lbnQsIHNldE5ld0RvY3VtZW50XSA9IHVzZVN0YXRlKHtcclxuICAgIFllYXI6IFwiXCIsXHJcbiAgICByc3UzNjogXCJcIixcclxuICAgIHN1YmplY3RSZWxhdGlvbjogXCJcIixcclxuICB9KTtcclxuXHJcblxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBmZXRjaFBERiA9IGFzeW5jIChmaWxlTmFtZSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcImh0dHBzOi8vdGVzdGFwaXdlYm1ham9ycy52ZXJjZWwuYXBwL3NlbmQtcGRmXCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBmaWxlTmFtZSB9KSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggUERGXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHBkZkJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XHJcbiAgICAgIGNvbnN0IHBkZlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocGRmQmxvYik7XHJcbiAgICAgIHdpbmRvdy5vcGVuKHBkZlVybCwgXCJfYmxhbmtcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgUERGOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cInB5LTI0IGJnLWdyYWRpZW50LXRvLWIgZnJvbS13aGl0ZSB0by1bIzk5MUYyM10gdy1mdWxsIGgtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1heC13LTZ4bCB3LWZ1bGwgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgdy1mdWxsIHRleHQtWyM5OTFGMjNdIGZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGxcIj7guJTguLLguKfguJnguYzguYLguKvguKXguJTguYDguK3guIHguKrguLLguKM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMC41IGJnLVsjOTkxRjIzXVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBwdC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBncmlkIGdyaWQtY29scy0zIG1heC1sZzpncmlkLWNvbHMtMiBnYXAtNCBtYXgtbGc6cHgtNFwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uSUR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGZsZXgganVzdGlmeS1iZXR3ZWVuIHNoYWRvdy0zeGxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbWF4LXNtOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4Lir4Lil4Lix4LiB4Liq4Li54LiV4Lij4Lib4Li1IHtmb3JtYXRZZWFycyhpdGVtLlllYXIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgcGwtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZldGNoUERGKGl0ZW0ucnN1MzYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciAgaG92ZXI6dW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPuC4oeC4o+C4qi4zNjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmV0Y2hQREYoaXRlbS5zdWJqZWN0UmVsYXRpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOC4hOC4p+C4suC4oeC4quC4seC4oeC4nuC4seC4meC4mOC5jOC4o+C4suC4ouC4p+C4tOC4iuC4slxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRvY3VtZW50UGFnZSIsImRhdGEiLCJzZXRkYXRhIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImNhY2hlIiwib2siLCJFcnJvciIsImRhdGFzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImZvcm1hdFllYXJzIiwieWVhciIsImFjYWRlbWljWWVhckRhdGUiLCJEYXRlIiwiYWNhZGVtaWNZZWFyT3B0aW9ucyIsInRpbWVab25lIiwidGhhaVllYXJGb3JtYXR0ZXIiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJmb3JtYXQiLCJyZXBsYWNlIiwibmV3RG9jdW1lbnQiLCJzZXROZXdEb2N1bWVudCIsIlllYXIiLCJyc3UzNiIsInN1YmplY3RSZWxhdGlvbiIsImZldGNoUERGIiwiZmlsZU5hbWUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwZGZCbG9iIiwiYmxvYiIsInBkZlVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIndpbmRvdyIsIm9wZW4iLCJtYWluIiwiY2xhc3NOYW1lIiwiYXJ0aWNsZSIsImRpdiIsInNwYW4iLCJtYXAiLCJpdGVtIiwidWwiLCJsaSIsIm9uQ2xpY2siLCJJRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Pages/DowloadDocument/page.jsx\n"));

/***/ })

});