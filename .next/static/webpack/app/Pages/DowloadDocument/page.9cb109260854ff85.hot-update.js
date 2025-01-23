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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DocumentPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction DocumentPage() {\n    _s();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"\".concat(Domain, \"api/Documents/getall-documents\"), {\n                cache: \"no-store\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch data\");\n            }\n            const datas = await response.json();\n            setdata(datas);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const Domain = \"http://localhost:5001/\";\n    const formatYears = (year)=>{\n        const academicYearDate = new Date(year, 0); // Month is 0 (January) to avoid offset issues\n        const academicYearOptions = {\n            year: \"numeric\",\n            timeZone: \"Asia/Bangkok\"\n        };\n        const thaiYearFormatter = new Intl.DateTimeFormat(\"th-TH\", academicYearOptions);\n        year = thaiYearFormatter.format(academicYearDate).replace(\"พ.ศ. \", \"\");\n        return year;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchPDF = async (fileName)=>{\n        try {\n            const response = await fetch(\"\".concat(Domain, \"api/files/download/\").concat(fileName));\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch PDF\");\n            }\n            const pdfBlob = await response.blob();\n            const pdfUrl = URL.createObjectURL(pdfBlob);\n            window.open(pdfUrl, \"_blank\");\n        } catch (error) {\n            console.error(\"Error fetching PDF:\", error);\n        }\n    };\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full flex flex-col justify-center items-center py-12 h-screen bg-gradient-to-b from-white to-[#991F23] \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"spinner-border text-black\",\n                    role: \"status\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"visually-hidden\",\n                        children: \"Loading...\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: \"Loading...\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"py-24 bg-gradient-to-b from-white to-[#991F23] w-full h-full flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            className: \"max-w-6xl w-full flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-6xl w-full text-[#991F23] flex flex-col gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-3xl\",\n                                children: \"ดาวน์โหลดเอกสาร\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-0.5 bg-[black]\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex  pt-4 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full rounded-lg grid grid-cols-3 max-lg:grid-cols-2 gap-4 max-lg:px-4\",\n                            children: data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-white flex justify-between shadow-3xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-bold text-xl max-sm:text-base\",\n                                                children: [\n                                                    \"หลักสูตรปี \",\n                                                    formatYears(item.Year)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"list-disc pl-8\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        onClick: ()=>fetchPDF(item.rsu36),\n                                                        className: \"cursor-pointer  hover:underline\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-blue-500\",\n                                                            children: \"มรส.36\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                            lineNumber: 90,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        onClick: ()=>fetchPDF(item.subjectRelation),\n                                                        className: \"cursor-pointer hover:underline\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-blue-500\",\n                                                            children: [\n                                                                \" \",\n                                                                \"ความสัมพันธ์รายวิชา\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                            lineNumber: 96,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                lineNumber: 85,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, this)\n                                }, item.ID, false, {\n                                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n            lineNumber: 66,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(DocumentPage, \"qLEflTOmXrzTZJfh2c5W/ZOvfY8=\");\n_c = DocumentPage;\nvar _c;\n$RefreshReg$(_c, \"DocumentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9QYWdlcy9Eb3dsb2FkRG9jdW1lbnQvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzRDO0FBRTdCLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUVuQyxNQUFNSyxZQUFZO1FBQ2hCLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3RCLEdBQVUsT0FBUEMsUUFBTyxtQ0FDVDtnQkFDRUMsT0FBTztZQUNUO1lBRUYsSUFBSSxDQUFDSCxTQUFTSSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUNBLE1BQU1DLFFBQVEsTUFBTU4sU0FBU08sSUFBSTtZQUNqQ1QsUUFBUVE7UUFDVixFQUFFLE9BQU9FLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUNBLE1BQU1OLFNBQVNRLHdCQUFrQjtJQUNqQyxNQUFNRyxjQUFjLENBQUNDO1FBQ25CLE1BQU1DLG1CQUFtQixJQUFJQyxLQUFLRixNQUFNLElBQUksOENBQThDO1FBQzFGLE1BQU1HLHNCQUFzQjtZQUFFSCxNQUFNO1lBQVdJLFVBQVU7UUFBZTtRQUN4RSxNQUFNQyxvQkFBb0IsSUFBSUMsS0FBS0MsY0FBYyxDQUMvQyxTQUNBSjtRQUVGSCxPQUFPSyxrQkFBa0JHLE1BQU0sQ0FBQ1Asa0JBQWtCUSxPQUFPLENBQUMsU0FBUztRQUNuRSxPQUFPVDtJQUNUO0lBRUFuQixnREFBU0EsQ0FBQztRQUNSSTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU15QixXQUFXLE9BQU9DO1FBQ3RCLElBQUk7WUFDRixNQUFNekIsV0FBVyxNQUFNQyxNQUFNLEdBQStCd0IsT0FBNUJ2QixRQUFPLHVCQUE4QixPQUFUdUI7WUFDNUQsSUFBSSxDQUFDekIsU0FBU0ksRUFBRSxFQUFFO2dCQUNoQixNQUFNLElBQUlDLE1BQU07WUFDbEI7WUFDQSxNQUFNcUIsVUFBVSxNQUFNMUIsU0FBUzJCLElBQUk7WUFDbkMsTUFBTUMsU0FBU0MsSUFBSUMsZUFBZSxDQUFDSjtZQUNuQ0ssT0FBT0MsSUFBSSxDQUFDSixRQUFRO1FBQ3RCLEVBQUUsT0FBT3BCLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHVCQUF1QkE7UUFDdkM7SUFDRjtJQUVBLElBQUksQ0FBQ1gsTUFBTTtRQUNULHFCQUNFLDhEQUFDb0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNEO29CQUFJQyxXQUFVO29CQUE0QkMsTUFBSzs4QkFDOUMsNEVBQUNDO3dCQUFLRixXQUFVO2tDQUFrQjs7Ozs7Ozs7Ozs7OEJBRXBDLDhEQUFDRDs4QkFBSTs7Ozs7Ozs7Ozs7O0lBR1g7SUFDQSxxQkFDRSw4REFBQ0k7UUFBS0gsV0FBVTtrQkFDZCw0RUFBQ0k7WUFBUUosV0FBVTs7OEJBQ2pCLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBS0YsV0FBVTswQ0FBVzs7Ozs7OzBDQUMzQiw4REFBQ0Q7Z0NBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUduQiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ2IsNEVBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWnJDLEtBQUswQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1QsOERBQUNQO29DQUVDQyxXQUFVOzhDQUVWLDRFQUFDRDt3Q0FBSUMsV0FBVTs7MERBQ2IsOERBQUNEO2dEQUFJQyxXQUFVOztvREFBcUM7b0RBQ3RDckIsWUFBWTJCLEtBQUtDLElBQUk7Ozs7Ozs7MERBRW5DLDhEQUFDQztnREFBR1IsV0FBVTs7a0VBQ1osOERBQUNTO3dEQUNDQyxTQUFTLElBQU1wQixTQUFTZ0IsS0FBS0ssS0FBSzt3REFDbENYLFdBQVU7a0VBRVYsNEVBQUNFOzREQUFLRixXQUFVO3NFQUFnQjs7Ozs7Ozs7Ozs7a0VBRWxDLDhEQUFDUzt3REFDQ0MsU0FBUyxJQUFNcEIsU0FBU2dCLEtBQUtNLGVBQWU7d0RBQzVDWixXQUFVO2tFQUVWLDRFQUFDRTs0REFBS0YsV0FBVTs7Z0VBQ2I7Z0VBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FuQlJNLEtBQUtPLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQzlCO0dBM0d3Qm5EO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9QYWdlcy9Eb3dsb2FkRG9jdW1lbnQvcGFnZS5qc3g/NzljZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jdW1lbnRQYWdlKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXRkYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgIGAke0RvbWFpbn1hcGkvRG9jdW1lbnRzL2dldGFsbC1kb2N1bWVudHNgLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNhY2hlOiBcIm5vLXN0b3JlXCIsXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGFcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIHNldGRhdGEoZGF0YXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IERvbWFpbiA9IHByb2Nlc3MuZW52LkRPTUFJTjtcclxuICBjb25zdCBmb3JtYXRZZWFycyA9ICh5ZWFyKSA9PiB7XHJcbiAgICBjb25zdCBhY2FkZW1pY1llYXJEYXRlID0gbmV3IERhdGUoeWVhciwgMCk7IC8vIE1vbnRoIGlzIDAgKEphbnVhcnkpIHRvIGF2b2lkIG9mZnNldCBpc3N1ZXNcclxuICAgIGNvbnN0IGFjYWRlbWljWWVhck9wdGlvbnMgPSB7IHllYXI6IFwibnVtZXJpY1wiLCB0aW1lWm9uZTogXCJBc2lhL0Jhbmdrb2tcIiB9O1xyXG4gICAgY29uc3QgdGhhaVllYXJGb3JtYXR0ZXIgPSBuZXcgSW50bC5EYXRlVGltZUZvcm1hdChcclxuICAgICAgXCJ0aC1USFwiLFxyXG4gICAgICBhY2FkZW1pY1llYXJPcHRpb25zXHJcbiAgICApO1xyXG4gICAgeWVhciA9IHRoYWlZZWFyRm9ybWF0dGVyLmZvcm1hdChhY2FkZW1pY1llYXJEYXRlKS5yZXBsYWNlKFwi4LieLuC4qC4gXCIsIFwiXCIpO1xyXG4gICAgcmV0dXJuIHllYXI7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQREYgPSBhc3luYyAoZmlsZU5hbWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7RG9tYWlufWFwaS9maWxlcy9kb3dubG9hZC8ke2ZpbGVOYW1lfWApXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWlsZWQgdG8gZmV0Y2ggUERGXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHBkZkJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XHJcbiAgICAgIGNvbnN0IHBkZlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocGRmQmxvYik7XHJcbiAgICAgIHdpbmRvdy5vcGVuKHBkZlVybCwgXCJfYmxhbmtcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgUERGOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFkYXRhKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweS0xMiBoLXNjcmVlbiBiZy1ncmFkaWVudC10by1iIGZyb20td2hpdGUgdG8tWyM5OTFGMjNdIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3Bpbm5lci1ib3JkZXIgdGV4dC1ibGFja1wiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT1cInB5LTI0IGJnLWdyYWRpZW50LXRvLWIgZnJvbS13aGl0ZSB0by1bIzk5MUYyM10gdy1mdWxsIGgtZnVsbCBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1heC13LTZ4bCB3LWZ1bGwgZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgdy1mdWxsIHRleHQtWyM5OTFGMjNdIGZsZXggZmxleC1jb2wgZ2FwLTRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGxcIj7guJTguLLguKfguJnguYzguYLguKvguKXguJTguYDguK3guIHguKrguLLguKM8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtMC41IGJnLVtibGFja11cIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgcHQtNCB3LWZ1bGxcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHJvdW5kZWQtbGcgZ3JpZCBncmlkLWNvbHMtMyBtYXgtbGc6Z3JpZC1jb2xzLTIgZ2FwLTQgbWF4LWxnOnB4LTRcIj5cclxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLklEfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy13aGl0ZSBmbGV4IGp1c3RpZnktYmV0d2VlbiBzaGFkb3ctM3hsXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1heC1zbTp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOC4q+C4peC4seC4geC4quC4ueC4leC4o+C4m+C4tSB7Zm9ybWF0WWVhcnMoaXRlbS5ZZWFyKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1kaXNjIHBsLThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmZXRjaFBERihpdGVtLnJzdTM2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgIGhvdmVyOnVuZGVybGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtYmx1ZS01MDBcIj7guKHguKPguKouMzY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZldGNoUERGKGl0ZW0uc3ViamVjdFJlbGF0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6dW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDguITguKfguLLguKHguKrguLHguKHguJ7guLHguJnguJjguYzguKPguLLguKLguKfguLTguIrguLJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEb2N1bWVudFBhZ2UiLCJkYXRhIiwic2V0ZGF0YSIsImZldGNoRGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJEb21haW4iLCJjYWNoZSIsIm9rIiwiRXJyb3IiLCJkYXRhcyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJwcm9jZXNzIiwiZW52IiwiRE9NQUlOIiwiZm9ybWF0WWVhcnMiLCJ5ZWFyIiwiYWNhZGVtaWNZZWFyRGF0ZSIsIkRhdGUiLCJhY2FkZW1pY1llYXJPcHRpb25zIiwidGltZVpvbmUiLCJ0aGFpWWVhckZvcm1hdHRlciIsIkludGwiLCJEYXRlVGltZUZvcm1hdCIsImZvcm1hdCIsInJlcGxhY2UiLCJmZXRjaFBERiIsImZpbGVOYW1lIiwicGRmQmxvYiIsImJsb2IiLCJwZGZVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJ3aW5kb3ciLCJvcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwicm9sZSIsInNwYW4iLCJtYWluIiwiYXJ0aWNsZSIsIm1hcCIsIml0ZW0iLCJZZWFyIiwidWwiLCJsaSIsIm9uQ2xpY2siLCJyc3UzNiIsInN1YmplY3RSZWxhdGlvbiIsIklEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Pages/DowloadDocument/page.jsx\n"));

/***/ })

});