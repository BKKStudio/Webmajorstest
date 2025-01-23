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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DocumentPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction DocumentPage() {\n    _s();\n    var _s1 = $RefreshSig$();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const fetchData = async ()=>{\n        try {\n            const response = await fetch(\"https://testapiwebmajors.vercel.app/api/documents\", {\n                cache: \"no-store\"\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch data\");\n            }\n            const datas = await response.json();\n            setdata(datas);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const formatYears = (year)=>{\n        const academicYearDate = new Date(year, 0); // Month is 0 (January) to avoid offset issues\n        const academicYearOptions = {\n            year: \"numeric\",\n            timeZone: \"Asia/Bangkok\"\n        };\n        const thaiYearFormatter = new Intl.DateTimeFormat(\"th-TH\", academicYearOptions);\n        year = thaiYearFormatter.format(academicYearDate).replace(\"พ.ศ. \", \"\");\n        return year;\n    };\n    const [newDocument, setNewDocument] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        Year: \"\",\n        rsu36: \"\",\n        subjectRelation: \"\"\n    });\n    const fetchDataByID = async (id)=>{\n        try {\n            const response = await fetch(\"https://testapiwebmajors.vercel.app/api/documents/\".concat(id));\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch data\");\n            }\n            const datas = await response.json();\n            // แปลง Year ให้เป็น พ.ศ.\n            setNewDocument(datas);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    const ImagePreview = (param)=>{\n        let { fileName } = param;\n        _s1();\n        const [imageSrc1, setImageSrc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n        const fetchImage1 = async ()=>{\n            try {\n                const response = await fetch(\"http://localhost:5001/api/files/preview/\".concat(fileName));\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch image. Status: \".concat(response.status));\n                }\n                const imageBlob = await response.blob();\n                const imageUrl = URL.createObjectURL(imageBlob);\n                setImageSrc(imageUrl); // อัปเดต URL ใน state\n            } catch (error) {\n                console.error(\"Error fetching image:\", error);\n            }\n        };\n    };\n    _s1(ImagePreview, \"h6Trr+6Db2va8mSgVgdpTibA4J8=\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const fetchPDF = async (fileName)=>{\n        try {\n            const response = await fetch(\"https://testapiwebmajors.vercel.app/send-pdf\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    fileName\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch PDF\");\n            }\n            const pdfBlob = await response.blob();\n            const pdfUrl = URL.createObjectURL(pdfBlob);\n            window.open(pdfUrl, \"_blank\");\n        } catch (error) {\n            console.error(\"Error fetching PDF:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"py-24 bg-gradient-to-b from-white to-[#991F23] w-full h-full flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n            className: \"max-w-6xl w-full flex flex-col\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"max-w-6xl w-full text-[#991F23] flex flex-col gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-3xl\",\n                                children: \"ดาวน์โหลดเอกสาร\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                lineNumber: 114,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full h-0.5 bg-[#991F23]\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 112,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: fetchImage,\n                    children: \"Load Image\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this),\n                imageSrc && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imageSrc,\n                    alt: \"Preview\",\n                    style: {\n                        maxWidth: \"100%\",\n                        height: \"auto\"\n                    }\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 119,\n                    columnNumber: 22\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex  pt-4 w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full rounded-lg grid grid-cols-3 max-lg:grid-cols-2 gap-4 max-lg:px-4\",\n                            children: data.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"bg-white flex justify-between shadow-3xl\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"p-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-bold text-xl max-sm:text-base\",\n                                                children: [\n                                                    \"หลักสูตรปี \",\n                                                    formatYears(item.Year)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                lineNumber: 129,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                                className: \"list-disc pl-8\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        onClick: ()=>fetchPDF(item.rsu36),\n                                                        className: \"cursor-pointer  hover:underline\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-blue-500\",\n                                                            children: \"มรส.36\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                            lineNumber: 137,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                        lineNumber: 133,\n                                                        columnNumber: 23\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                                        onClick: ()=>fetchPDF(item.subjectRelation),\n                                                        className: \"cursor-pointer hover:underline\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                            className: \"text-blue-500\",\n                                                            children: [\n                                                                \" \",\n                                                                \"ความสัมพันธ์รายวิชา\"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                            lineNumber: 143,\n                                                            columnNumber: 25\n                                                        }, this)\n                                                    }, void 0, false, {\n                                                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                        lineNumber: 139,\n                                                        columnNumber: 23\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                                lineNumber: 132,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 19\n                                    }, this)\n                                }, item.ID, false, {\n                                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                                    lineNumber: 124,\n                                    columnNumber: 17\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\WebMajors (1)\\\\WebMajors\\\\Webmajorst\\\\app\\\\Pages\\\\DowloadDocument\\\\page.jsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_s(DocumentPage, \"ieXddlhNlKC0Na2kPwtN2xw8DLk=\");\n_c = DocumentPage;\nvar _c;\n$RefreshReg$(_c, \"DocumentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9QYWdlcy9Eb3dsb2FkRG9jdW1lbnQvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQzRDO0FBRTdCLFNBQVNFOzs7SUFDdEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFFbkMsTUFBTUssWUFBWTtRQUNoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQixxREFDQTtnQkFDRUMsT0FBTztZQUNUO1lBRUYsSUFBSSxDQUFDRixTQUFTRyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUNBLE1BQU1DLFFBQVEsTUFBTUwsU0FBU00sSUFBSTtZQUNqQ1IsUUFBUU87UUFDVixFQUFFLE9BQU9FLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBLE1BQU1FLGNBQWMsQ0FBQ0M7UUFDbkIsTUFBTUMsbUJBQW1CLElBQUlDLEtBQUtGLE1BQU0sSUFBSSw4Q0FBOEM7UUFDMUYsTUFBTUcsc0JBQXNCO1lBQUVILE1BQU07WUFBV0ksVUFBVTtRQUFlO1FBQ3hFLE1BQU1DLG9CQUFvQixJQUFJQyxLQUFLQyxjQUFjLENBQy9DLFNBQ0FKO1FBRUZILE9BQU9LLGtCQUFrQkcsTUFBTSxDQUFDUCxrQkFBa0JRLE9BQU8sQ0FBQyxTQUFTO1FBQ25FLE9BQU9UO0lBQ1Q7SUFFQSxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBRzNCLCtDQUFRQSxDQUFDO1FBQzdDNEIsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLGlCQUFpQjtJQUNuQjtJQUVBLE1BQU1DLGdCQUFnQixPQUFPQztRQUMzQixJQUFJO1lBQ0YsTUFBTTFCLFdBQVcsTUFBTUMsTUFDckIscURBQXdELE9BQUh5QjtZQUV2RCxJQUFJLENBQUMxQixTQUFTRyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUNBLE1BQU1DLFFBQVEs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQzlCO0dBMUp3QnJFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9QYWdlcy9Eb3dsb2FkRG9jdW1lbnQvcGFnZS5qc3g/NzljZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jdW1lbnRQYWdlKCkge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXRkYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBcImh0dHBzOi8vdGVzdGFwaXdlYm1ham9ycy52ZXJjZWwuYXBwL2FwaS9kb2N1bWVudHNcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjYWNoZTogXCJuby1zdG9yZVwiLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGRhdGFzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRkYXRhKGRhdGFzKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZm9ybWF0WWVhcnMgPSAoeWVhcikgPT4ge1xyXG4gICAgY29uc3QgYWNhZGVtaWNZZWFyRGF0ZSA9IG5ldyBEYXRlKHllYXIsIDApOyAvLyBNb250aCBpcyAwIChKYW51YXJ5KSB0byBhdm9pZCBvZmZzZXQgaXNzdWVzXHJcbiAgICBjb25zdCBhY2FkZW1pY1llYXJPcHRpb25zID0geyB5ZWFyOiBcIm51bWVyaWNcIiwgdGltZVpvbmU6IFwiQXNpYS9CYW5na29rXCIgfTtcclxuICAgIGNvbnN0IHRoYWlZZWFyRm9ybWF0dGVyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoXHJcbiAgICAgIFwidGgtVEhcIixcclxuICAgICAgYWNhZGVtaWNZZWFyT3B0aW9uc1xyXG4gICAgKTtcclxuICAgIHllYXIgPSB0aGFpWWVhckZvcm1hdHRlci5mb3JtYXQoYWNhZGVtaWNZZWFyRGF0ZSkucmVwbGFjZShcIuC4ni7guKguIFwiLCBcIlwiKTtcclxuICAgIHJldHVybiB5ZWFyO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtuZXdEb2N1bWVudCwgc2V0TmV3RG9jdW1lbnRdID0gdXNlU3RhdGUoe1xyXG4gICAgWWVhcjogXCJcIixcclxuICAgIHJzdTM2OiBcIlwiLFxyXG4gICAgc3ViamVjdFJlbGF0aW9uOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBmZXRjaERhdGFCeUlEID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL3Rlc3RhcGl3ZWJtYWpvcnMudmVyY2VsLmFwcC9hcGkvZG9jdW1lbnRzLyR7aWR9YFxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIGRhdGFcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIC8vIOC5geC4m+C4peC4hyBZZWFyIOC5g+C4q+C5ieC5gOC4m+C5h+C4mSDguJ4u4LioLlxyXG5cclxuICAgICAgc2V0TmV3RG9jdW1lbnQoZGF0YXMpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgSW1hZ2VQcmV2aWV3ID0gKHsgZmlsZU5hbWUgfSkgPT4ge1xyXG4gICAgY29uc3QgW2ltYWdlU3JjLCBzZXRJbWFnZVNyY10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBcclxuICAgIGNvbnN0IGZldGNoSW1hZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDEvYXBpL2ZpbGVzL3ByZXZpZXcvJHtmaWxlTmFtZX1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBmZXRjaCBpbWFnZS4gU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgY29uc3QgaW1hZ2VCbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgICAgIGNvbnN0IGltYWdlVXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpbWFnZUJsb2IpO1xyXG4gICAgICAgIHNldEltYWdlU3JjKGltYWdlVXJsKTsgLy8g4Lit4Lix4Lib4LmA4LiU4LiVIFVSTCDguYPguJkgc3RhdGVcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgaW1hZ2U6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hQREYgPSBhc3luYyAoZmlsZU5hbWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgXCJodHRwczovL3Rlc3RhcGl3ZWJtYWpvcnMudmVyY2VsLmFwcC9zZW5kLXBkZlwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZmlsZU5hbWUgfSksXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGZldGNoIFBERlwiKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwZGZCbG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgICBjb25zdCBwZGZVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHBkZkJsb2IpO1xyXG4gICAgICB3aW5kb3cub3BlbihwZGZVcmwsIFwiX2JsYW5rXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIFBERjpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPVwicHktMjQgYmctZ3JhZGllbnQtdG8tYiBmcm9tLXdoaXRlIHRvLVsjOTkxRjIzXSB3LWZ1bGwgaC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwibWF4LXctNnhsIHctZnVsbCBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCB3LWZ1bGwgdGV4dC1bIzk5MUYyM10gZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPuC4lOC4suC4p+C4meC5jOC5guC4q+C4peC4lOC5gOC4reC4geC4quC4suC4ozwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0wLjUgYmctWyM5OTFGMjNdXCI+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZldGNoSW1hZ2V9PkxvYWQgSW1hZ2U8L2J1dHRvbj5cclxuICAgICAgICB7aW1hZ2VTcmMgJiYgPGltZyBzcmM9e2ltYWdlU3JjfSBhbHQ9XCJQcmV2aWV3XCIgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnYXV0bycgfX0gLz59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBwdC00IHctZnVsbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcm91bmRlZC1sZyBncmlkIGdyaWQtY29scy0zIG1heC1sZzpncmlkLWNvbHMtMiBnYXAtNCBtYXgtbGc6cHgtNFwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uSUR9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGZsZXgganVzdGlmeS1iZXR3ZWVuIHNoYWRvdy0zeGxcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQteGwgbWF4LXNtOnRleHQtYmFzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAg4Lir4Lil4Lix4LiB4Liq4Li54LiV4Lij4Lib4Li1IHtmb3JtYXRZZWFycyhpdGVtLlllYXIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgcGwtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZldGNoUERGKGl0ZW0ucnN1MzYpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciAgaG92ZXI6dW5kZXJsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMFwiPuC4oeC4o+C4qi4zNjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmV0Y2hQREYoaXRlbS5zdWJqZWN0UmVsYXRpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBob3Zlcjp1bmRlcmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOC4hOC4p+C4suC4oeC4quC4seC4oeC4nuC4seC4meC4mOC5jOC4o+C4suC4ouC4p+C4tOC4iuC4slxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRvY3VtZW50UGFnZSIsImRhdGEiLCJzZXRkYXRhIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImNhY2hlIiwib2siLCJFcnJvciIsImRhdGFzIiwianNvbiIsImVycm9yIiwiY29uc29sZSIsImZvcm1hdFllYXJzIiwieWVhciIsImFjYWRlbWljWWVhckRhdGUiLCJEYXRlIiwiYWNhZGVtaWNZZWFyT3B0aW9ucyIsInRpbWVab25lIiwidGhhaVllYXJGb3JtYXR0ZXIiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJmb3JtYXQiLCJyZXBsYWNlIiwibmV3RG9jdW1lbnQiLCJzZXROZXdEb2N1bWVudCIsIlllYXIiLCJyc3UzNiIsInN1YmplY3RSZWxhdGlvbiIsImZldGNoRGF0YUJ5SUQiLCJpZCIsIkltYWdlUHJldmlldyIsImZpbGVOYW1lIiwiaW1hZ2VTcmMiLCJzZXRJbWFnZVNyYyIsImZldGNoSW1hZ2UiLCJzdGF0dXMiLCJpbWFnZUJsb2IiLCJibG9iIiwiaW1hZ2VVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJmZXRjaFBERiIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBkZkJsb2IiLCJwZGZVcmwiLCJ3aW5kb3ciLCJvcGVuIiwibWFpbiIsImNsYXNzTmFtZSIsImFydGljbGUiLCJkaXYiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayIsImltZyIsInNyYyIsImFsdCIsInN0eWxlIiwibWF4V2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJpdGVtIiwidWwiLCJsaSIsIklEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Pages/DowloadDocument/page.jsx\n"));

/***/ })

});