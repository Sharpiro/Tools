(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/brain_freak.js":
/*!*****************************!*\
  !*** ../pkg/brain_freak.js ***!
  \*****************************/
/*! exports provided: set_panic_hook, ProgramIterator, __wbindgen_object_drop_ref, __wbindgen_string_new, __wbg_log_c180b836187d3c94, __wbg_new_59cb74e423758ede, __wbg_stack_558ba5917b466edd, __wbg_error_4bb6c2a97407129a, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"set_panic_hook\", function() { return set_panic_hook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProgramIterator\", function() { return ProgramIterator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_c180b836187d3c94\", function() { return __wbg_log_c180b836187d3c94; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_59cb74e423758ede\", function() { return __wbg_new_59cb74e423758ede; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_stack_558ba5917b466edd\", function() { return __wbg_stack_558ba5917b466edd; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_error_4bb6c2a97407129a\", function() { return __wbg_error_4bb6c2a97407129a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brain_freak_bg.wasm */ \"../pkg/brain_freak_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    heap[idx] = obj;\n    return idx;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ \"./node_modules/util/util.js\").TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nfunction passArray8ToWasm0(arg, malloc) {\n    const ptr = malloc(arg.length * 1);\n    getUint8Memory0().set(arg, ptr / 1);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n/**\n*/\nfunction set_panic_hook() {\n    _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"set_panic_hook\"]();\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n/**\n*/\nclass ProgramIterator {\n\n    static __wrap(ptr) {\n        const obj = Object.create(ProgramIterator.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_programiterator_free\"](ptr);\n    }\n    /**\n    * @param {string} program\n    * @param {number} memory_size\n    * @param {number} output_capacity\n    * @param {Uint8Array} input\n    * @param {boolean} extended_mode\n    * @returns {ProgramIterator}\n    */\n    static new(program, memory_size, output_capacity, input, extended_mode) {\n        var ptr0 = passStringToWasm0(program, _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        var ptr1 = passArray8ToWasm0(input, _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"]);\n        var len1 = WASM_VECTOR_LEN;\n        var ret = _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"programiterator_new\"](ptr0, len0, memory_size, output_capacity, ptr1, len1, extended_mode);\n        return ProgramIterator.__wrap(ret);\n    }\n    /**\n    * @returns {string | undefined}\n    */\n    next() {\n        var ret = _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"programiterator_next\"](this.ptr);\n        return ret === 0xFFFFFF ? undefined : String.fromCodePoint(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    get_input_len() {\n        var ret = _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"programiterator_get_input_len\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    get_output_len() {\n        var ret = _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"programiterator_get_output_len\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    get_memory_ptr() {\n        var ret = _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"programiterator_get_memory_ptr\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    get_input_ptr() {\n        var ret = _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"programiterator_get_input_ptr\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    get_output_ptr() {\n        var ret = _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"programiterator_get_output_ptr\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    get_command_index() {\n        var ret = _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"programiterator_get_command_index\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    get_ticks() {\n        var ret = _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"programiterator_get_ticks\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    get_program_counter() {\n        var ret = _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"programiterator_get_program_counter\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @returns {number}\n    */\n    get_the_pointer() {\n        var ret = _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"programiterator_get_the_pointer\"](this.ptr);\n        return ret >>> 0;\n    }\n}\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbg_log_c180b836187d3c94 = function(arg0) {\n    console.log(getObject(arg0));\n};\n\nconst __wbg_new_59cb74e423758ede = function() {\n    var ret = new Error();\n    return addHeapObject(ret);\n};\n\nconst __wbg_stack_558ba5917b466edd = function(arg0, arg1) {\n    var ret = getObject(arg1).stack;\n    var ptr0 = passStringToWasm0(ret, _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbg_error_4bb6c2a97407129a = function(arg0, arg1) {\n    try {\n        console.error(getStringFromWasm0(arg0, arg1));\n    } finally {\n        _brain_freak_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](arg0, arg1);\n    }\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../pkg/brain_freak.js?");

/***/ }),

/***/ "../pkg/brain_freak_bg.wasm":
/*!**********************************!*\
  !*** ../pkg/brain_freak_bg.wasm ***!
  \**********************************/
/*! exports provided: memory, __wbg_programiterator_free, programiterator_new, programiterator_next, programiterator_get_input_len, programiterator_get_output_len, programiterator_get_memory_ptr, programiterator_get_input_ptr, programiterator_get_output_ptr, programiterator_get_command_index, programiterator_get_ticks, programiterator_get_program_counter, programiterator_get_the_pointer, set_panic_hook, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./brain_freak.js */ \"../pkg/brain_freak.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/brain_freak_bg.wasm?");

/***/ }),

/***/ "./brain_freak.js":
/*!************************!*\
  !*** ./brain_freak.js ***!
  \************************/
/*! exports provided: LazyLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LazyLoader\", function() { return LazyLoader; });\n/* harmony import */ var brain_freak_brain_freak_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brain_freak/brain_freak_bg */ \"../pkg/brain_freak_bg.wasm\");\n/* harmony import */ var brain_freak__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! brain_freak */ \"../pkg/brain_freak.js\");\n\n\n\nclass LazyLoader {\n  get currentState() {\n    return this.states[this.stateIndex];\n  }\n\n  /**\n   * @param {string} program\n   * @param {number} memSize\n   * @param {number} outputCapacity\n   * @param {number[]} input\n   */\n  constructor(program, memSize, outputCapacity, input, extendedMode = false) {\n    this.program = program;\n    this.memSize = memSize;\n    this.outputCapacity = outputCapacity;\n    this.input = input;\n    this.cleansedProgram = getCleansedProgram(program);\n    const inputBuffer = new Uint8Array(input);\n    this.iterator = brain_freak__WEBPACK_IMPORTED_MODULE_1__[\"ProgramIterator\"].new(program, memSize, outputCapacity, inputBuffer, extendedMode);\n    this.stateIndex = 0;\n    this.lazyLoading = true;\n    this.outputPointer = this.iterator.get_output_ptr();\n    this.memory = new Uint8Array(brain_freak_brain_freak_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer, this.iterator.get_memory_ptr(), memSize);\n    this.ticks = 0;\n    this.states = /** @type {State[]} */ ([{\n      command: \"\",\n      memory: Array.from(this.memory),\n      input: this.input,\n      output: [],\n      thePointer: 0,\n      programCounter: this.iterator.get_program_counter(),\n      commandIndex: 0,\n      ticks: this.ticks\n    }]);\n  }\n\n  /** @returns {State | undefined} */\n  loadRight() {\n    let state;\n    // lazy load right\n    if (this.lazyLoading && this.stateIndex === this.states.length - 1) {\n      try {\n        const command = this.iterator.next();\n        if (command) {\n          state = this.addState(command);\n          this.stateIndex++;\n          // console.log(1, \"lazy\", state.command);\n        } else {\n          this.lazyLoading = false;\n          // console.log(1, \"lazy done\", \"kept same state\");\n        }\n      } catch (err) {\n        const pc = this.currentState.programCounter;\n        const command = this.program[pc];\n        alert(`An error occurred at command: '${command}' index: '${pc}', see console for details`);\n        return;\n      }\n    }\n    else if (this.lazyLoading && this.stateIndex < this.states.length - 1) {\n      ++this.stateIndex;\n      state = this.states[this.stateIndex];\n      // console.log(2, \"pre\", state.command);\n    }\n    else if (this.stateIndex < this.states.length - 1) {\n      ++this.stateIndex;\n      state = this.states[this.stateIndex];\n      // console.log(3, \"pre\", state.command);\n    }\n    else if (!this.lazyLoading && this.stateIndex === this.states.length - 1) {\n      // console.log(4, \"done\");\n    }\n    else {\n      throw new Error(\"unexpected path\");\n    }\n\n    if (state && state.command === \"?\") {\n      console.log(state);\n    }\n    return state;\n  }\n\n  /** @param {string} command */\n  addState(command) {\n    const inputPointer = this.iterator.get_input_ptr();\n    const inputLen = this.iterator.get_input_len();\n    const input = [...(new Uint8Array(brain_freak_brain_freak_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer, inputPointer, inputLen))];\n\n    const outputLen = this.iterator.get_output_len();\n    const output = [...(new Uint8Array(brain_freak_brain_freak_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer, this.outputPointer, outputLen))];\n\n    const state = {\n      command: command,\n      memory: Array.from(this.memory),\n      input: input,\n      output: output,\n      thePointer: this.iterator.get_the_pointer(),\n      programCounter: this.iterator.get_program_counter(),\n      commandIndex: this.iterator.get_command_index(),\n      ticks: this.iterator.get_ticks()\n    };\n    this.states.push(state);\n    return state;\n  }\n}\n\n/** @param {string} program */\nfunction getCleansedProgram(program) {\n  const lines = program.split(\"\\n\").filter(l => !(!l[0] || l[0] === \";\" || l[0] === \"\"));\n  const modProgram = lines.join(\"\");\n  const cleansePattern = /[.,<>+\\-[\\]]+/g;\n  const matches = modProgram.match(cleansePattern);\n  const cleansedProgram = matches ? matches.join(\"\") : \"\";\n  return cleansedProgram;\n}\n\n/**\n * @typedef {{\n  * command: string;\n  * memory: number[];\n  * input: number[];\n  * output: number[];\n  * thePointer: number\n  * programCounter: number\n  * commandIndex: number\n  * ticks: number\n  * }} State\n  */\n\n\n//# sourceURL=webpack:///./brain_freak.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var brain_freak__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brain_freak */ \"../pkg/brain_freak.js\");\n/* harmony import */ var _brain_freak__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brain_freak */ \"./brain_freak.js\");\n\n\n\nObject(brain_freak__WEBPACK_IMPORTED_MODULE_0__[\"set_panic_hook\"])(); // additional console info on wasm panic\n\nlet extendedMode = !!JSON.parse(localStorage.getItem(\"extendedMode\") || \"false\");\n/** @type {HTMLInputElement} */\nconst modeCheckbox = (document.getElementById(\"modeCheckbox\"));\nmodeCheckbox.checked = extendedMode;\n\nconst defaultProgram = \",[>+.<-]\";\nconst defaultInput = [2, 1];\nlet description = localStorage.getItem(\"description\") || \"\";\nconst programJson = localStorage.getItem(\"program\");\nlet program = programJson ? programJson : defaultProgram;\n\n/** @type {HTMLInputElement} */\nconst programInputEl = (document.getElementById(\"programInputEl\"));\nprogramInputEl.value = program;\n\nconst inputJson = localStorage.getItem(\"input\");\n/** @type {number[]} */\nlet input = inputJson ? JSON.parse(inputJson) : defaultInput;\nconst memSize = 10;\nconst outputCapacity = 10;\n\nlet lazyLoader = new _brain_freak__WEBPACK_IMPORTED_MODULE_1__[\"LazyLoader\"](program, memSize, outputCapacity, input, extendedMode);\n\nupdatePage(lazyLoader.currentState);\n\n/** @type {HTMLInputElement} */\nconst descriptionEl = (document.getElementById(\"descriptionEl\"));\ndescriptionEl.value = description ? description : \"\";\n/** @type {HTMLInputElement} */\nconst inputDataEl = (document.getElementById(\"inputDataEl\"));\ninputDataEl.value = input.join(\",\");\n\nmodeCheckbox.onclick = () => {\n  extendedMode = modeCheckbox.checked;\n  localStorage.setItem(\"extendedMode\", extendedMode.toString());\n  lazyLoader = new _brain_freak__WEBPACK_IMPORTED_MODULE_1__[\"LazyLoader\"](program, memSize, outputCapacity, input, extendedMode);\n  updatePage(lazyLoader.currentState);\n  //@ts-ignore\n  updateButton.focus();\n};\n\n/** @param {{key: string, target: any}} ev */\nwindow.onkeydown = ev => {\n  if (ev.target.localName === \"input\" || ev.target.localName === \"textarea\") return;\n\n  if (ev.key === \"ArrowLeft\") {\n    if (lazyLoader.stateIndex === 0) return;\n    const state = lazyLoader.states[--lazyLoader.stateIndex];\n    updatePage(state);\n  }\n  else if (ev.key === \"ArrowRight\") {\n    const state = lazyLoader.loadRight();\n    if (state) {\n      updatePage(state);\n    }\n  }\n  else if (ev.key === \"ArrowUp\") {\n    while (lazyLoader.stateIndex > 0) {\n      if (lazyLoader.currentState.command === \"!\") {\n        lazyLoader.stateIndex--;\n        break;\n      }\n      lazyLoader.stateIndex--;\n    }\n    updatePage(lazyLoader.currentState);\n  }\n  else if (ev.key === \"ArrowDown\") {\n    lazyLoader.loadRight();\n    for (let state; state = lazyLoader.loadRight();) {\n      if (state.command === \"!\") {\n        lazyLoader.stateIndex--;\n        break;\n      }\n    }\n    updatePage(lazyLoader.currentState);\n  }\n};\n\nupdateButton.onclick = () => {\n  description = descriptionEl.value;\n  input = inputDataEl.value.split(\",\").map(s => +s);\n  program = programInputEl.value;\n\n  localStorage.setItem(\"description\", description);\n  localStorage.setItem(\"input\", JSON.stringify(input));\n  localStorage.setItem(\"program\", program);\n\n  lazyLoader = new _brain_freak__WEBPACK_IMPORTED_MODULE_1__[\"LazyLoader\"](program, memSize, outputCapacity, input, extendedMode);\n  updatePage(lazyLoader.states[0]);\n  //@ts-ignore\n  updateButton.focus();\n};\n\nresetButton.onclick = () => {\n  extendedMode = false;\n  description = \"\";\n  input = defaultInput;\n  program = defaultProgram;\n\n  modeCheckbox.checked = false;\n  descriptionEl.value = \"\";\n  inputDataEl.value = input.join(\",\");\n  programInputEl.value = program;\n\n  localStorage.clear();\n\n  lazyLoader = new _brain_freak__WEBPACK_IMPORTED_MODULE_1__[\"LazyLoader\"](program, memSize, outputCapacity, input, extendedMode);\n  updatePage(lazyLoader.states[0]);\n};\n\nimportButton.onclick = () => {\n  const fullProgramJson = prompt(\"Input program json\");\n  if (fullProgramJson) {\n    /** @type { FullProgram } */\n    const fullProgram = JSON.parse(fullProgramJson);\n\n    localStorage.setItem(\"extendedMode\", fullProgram.extendedMode.toString());\n    localStorage.setItem(\"description\", fullProgram.description);\n    localStorage.setItem(\"input\", JSON.stringify(fullProgram.input));\n    localStorage.setItem(\"program\", fullProgram.program);\n\n    modeCheckbox.checked = fullProgram.extendedMode;\n    descriptionEl.value = fullProgram.description;\n    inputDataEl.value = fullProgram.input.join(\",\");\n    programInputEl.value = fullProgram.program;\n\n    extendedMode = fullProgram.extendedMode;\n    description = fullProgram.description;\n    input = fullProgram.input;\n    program = fullProgram.program;\n\n    lazyLoader = new _brain_freak__WEBPACK_IMPORTED_MODULE_1__[\"LazyLoader\"](program, memSize, outputCapacity, input, extendedMode);\n    updatePage(lazyLoader.states[0]);\n  }\n};\n\nexportButton.onclick = () => {\n  /** @type { FullProgram } */\n  const exportObj = { extendedMode, description, input, program };\n  const exportJson = JSON.stringify(exportObj);\n\n  const inputEl = document.createElement(\"input\");\n  inputEl.value = exportJson;\n  inputEl.style.left = \"-10000px\";\n  inputEl.style.position = \"absolute\";\n  document.body.appendChild(inputEl);\n  inputEl.select();\n  document.execCommand(\"copy\");\n  document.body.removeChild(inputEl);\n};\n\ndumpButton.onclick = () => {\n  console.log(lazyLoader.states);\n};\n\n/** @param {{key: string, shiftKey: boolean}} ev */\nprogramInputEl.onkeydown = ev => {\n  if (!ev.shiftKey && ev.key === \"Enter\") {\n    updateButton.onclick();\n    return false;\n  }\n};\n\n/** @param {State} state */\nfunction updatePage(state) {\n  updateMemoryEl(state);\n  updateProgramEl(state);\n  updateInputEl(state);\n  updateOutputEl(state);\n\n  const ticksEl = document.getElementById(\"ticksEl\");\n  if (!ticksEl) throw new Error();\n  ticksEl.innerHTML = state.ticks.toString();\n}\n\n/** @param {State} state */\nfunction updateMemoryEl(state) {\n  const arrDisplay = state.memory.join(\", \");\n  const spaces = 1 + state.thePointer * 3;\n  const thePtrDisplay = \" \".repeat(spaces) + \"^\";\n  const display = `[${arrDisplay}]\\n${thePtrDisplay}`;\n\n  const memoryEl = document.getElementById(\"memoryEl\");\n  if (!memoryEl) throw new Error();\n  memoryEl.innerHTML = display;\n}\n\n/** @param {State} state */\nfunction updateProgramEl(state) {\n  const programCodeEl = document.getElementById(\"programCodeEl\");\n  if (!programCodeEl) throw new Error();\n  programCodeEl.innerText = \"\";\n\n  const programDisplay = lazyLoader.program.trim() + \" \";\n  let lineDiv = document.createElement(\"div\");\n  for (let i = 0; i < programDisplay.length; i++) {\n    const char = programDisplay[i];\n    if (char === \"\\n\") {\n      programCodeEl.appendChild(lineDiv);\n      lineDiv = document.createElement(\"div\");\n      continue;\n    }\n    const charSpan = document.createElement(\"span\");\n    charSpan.innerText = char;\n    const highlightColor = \"cornflowerblue\";\n    if (i === state.programCounter) {\n      charSpan.style.backgroundColor = highlightColor;\n    }\n    else if (state.programCounter >= programDisplay.length && i === programDisplay.length - 1) {\n      charSpan.style.backgroundColor = highlightColor;\n    }\n    lineDiv.appendChild(charSpan);\n  }\n  programCodeEl.appendChild(lineDiv);\n}\n\n/** @param {State} state */\nfunction updateInputEl(state) {\n  const arrDisplay = state.input.join(\", \");\n  const display = `[${arrDisplay}]`;\n\n  const inputEl = document.getElementById(\"inputEl\");\n  if (!inputEl) throw new Error();\n  inputEl.innerHTML = display;\n}\n\n/** @param {State} state */\nfunction updateOutputEl(state) {\n  const arrDisplay = state.output.join(\", \");\n  const display = `[${arrDisplay}]`;\n\n  const outputEl = document.getElementById(\"outputEl\");\n  if (!outputEl) throw new Error();\n  outputEl.innerHTML = display;\n}\n\n/** @typedef {import(\"./brain_freak\").State} State */\n/** @typedef { {\n *  extendedMode: boolean\n *  description: string,\n *  input: number[],\n *  program: string\n*  } } FullProgram */\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);