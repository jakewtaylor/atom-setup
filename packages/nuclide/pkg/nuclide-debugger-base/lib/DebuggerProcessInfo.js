'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _asyncToGenerator = _interopRequireDefault(require('async-to-generator'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 * @format
 */

class DebuggerProcessInfo {

  constructor(serviceName, targetUri) {
    this._serviceName = serviceName;
    this._targetUri = targetUri;
  }

  getServiceName() {
    return this._serviceName;
  }

  getTargetUri() {
    return this._targetUri;
  }

  getDebuggerCapabilities() {
    return {
      conditionalBreakpoints: false,
      continueToLocation: false,
      customSourcePaths: false,
      disassembly: false,
      readOnlyTarget: false,
      registers: false,
      setVariable: false,
      singleThreadStepping: false,
      threads: false,
      completionsRequest: false
    };
  }

  getDebuggerProps() {
    return {
      customControlButtons: [],
      targetDescription: () => null,
      threadColumns: null,
      threadsComponentTitle: 'Threads'
    };
  }

  configureSourceFilePaths() {
    // Debuggers that support this will override this routine.
    throw new Error('Not supported');
  }

  clone() {
    throw new Error('abstract method');
  }

  shouldFilterBreak(pausedEvent) {
    // Gives an individual debugger front-end the option to auto-resume
    // from a break if it should be filtered so that the user doesn't see it.
    return false;
  }

  debug() {
    return (0, _asyncToGenerator.default)(function* () {
      throw new Error('abstract method');
    })();
  }

  dispose() {}
}
exports.default = DebuggerProcessInfo;