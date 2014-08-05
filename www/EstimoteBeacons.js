/* global module, require */

'use strict';

var exec = require('cordova/exec');

// ======================
// Constants
// ======================

var PLUGIN_NAME = 'EstimoteBeacons',
    ERROR_CALLBACK = function(error) {
        logError(error);
    };

// ======================
// Helper Functions
// ======================

/**
 * Returns true if passed Object is a Function, otherwise false.
 * @param {Object} o Object to be verified
 * @returns {boolean} True if passed Object is a Function, otherwise false
 */
function isFunction(o) {
    return (typeof o === 'function');
}

/**
 * Returns true if passed Object is equal to null or is empty, otherwise false.
 * @param {Object} o Object to be verified
 * @returns {boolean} True if passed Object is equal to null or is empty, otherwise false
 */
function isNullOrEmpty(o) {
    return (!o || o.length === 0);
}

/**
 * Logs error message.
 * @param {String} errorMessage Error message
 * @param {String} [methodName] Name of the method in which the error occurred
 */
function logError(errorMessage, methodName) {
    if(!isNullOrEmpty(methodName)) errorMessage = PLUGIN_NAME + '.' + methodName + ' error: ' + errorMessage;
    console.error(errorMessage);
}

/**
 * Provides methods to interact with Estimote iBeacons.
 * @constructor
 */
var EstimoteBeacons = function() {
}

/**
 * Starts monitoring beacons in region.
 * @param {Function} successCallback
 */
EstimoteBeacons.prototype.startMonitoringBeaconsInRegion = function(successCallback) {
    var METHOD_NAME = 'startMonitoringBeaconsInRegion';

    if(!isFunction(successCallback)) {
        logError('successCallback parameter must be a function', METHOD_NAME);
        return;
    }

    exec(
        successCallback,
        ERROR_CALLBACK,
        PLUGIN_NAME,
        METHOD_NAME,
        []
    );
};

/**
 * Stops monitoring beacons in region.
 * @param {Function} successCallback
 */
EstimoteBeacons.prototype.stopMonitoringBeaconsInRegion = function(successCallback) {
    var METHOD_NAME = 'stopMonitoringBeaconsInRegion';

    if(!isFunction(successCallback)) {
        logError('successCallback parameter must be a function', METHOD_NAME);
        return;
    }

    exec(
        successCallback,
        ERROR_CALLBACK,
        PLUGIN_NAME,
        METHOD_NAME,
        []
    );
};

/**
 * Starts ranging beacons in region.
 * @param {Function} successCallback
 */
EstimoteBeacons.prototype.startRangingBeaconsInRegion = function(successCallback) {
    var METHOD_NAME = 'startRangingBeaconsInRegion';

    if(!isFunction(successCallback)) {
        logError('successCallback parameter must be a function', METHOD_NAME);
        return;
    }

    exec(
        successCallback,
        ERROR_CALLBACK,
        PLUGIN_NAME,
        METHOD_NAME,
        []
    );
};

/**
 * Stops ranging beacons in region.
 * @param {Function} successCallback
 */
EstimoteBeacons.prototype.stopRangingBeaconsInRegion = function(successCallback) {
    var METHOD_NAME = 'stopRangingBeaconsInRegion';

    if(!isFunction(successCallback)) {
        logError('successCallback parameter must be a function', METHOD_NAME);
        return;
    }

    exec(
        successCallback,
        ERROR_CALLBACK,
        PLUGIN_NAME,
        METHOD_NAME,
        []
    );
};

/**
 * Gets beacons.
 * @param {Function} successCallback
 */
EstimoteBeacons.prototype.getBeacons = function(successCallback) {
    var METHOD_NAME = 'getBeacons';

    if(!isFunction(successCallback)) {
        logError('successCallback parameter must be a function', METHOD_NAME);
        return;
    }

    exec(
        successCallback,
        ERROR_CALLBACK,
        PLUGIN_NAME,
        METHOD_NAME,
        []
    );
};

/**
 * Determines whether Bluetooth is enabled or not.
 * @param {Function} successCallback
 * @param {Function} [errorCallback]
 */
EstimoteBeacons.prototype.isBluetoothEnabled = function(successCallback, errorCallback) {
    var METHOD_NAME = 'isBluetoothEnabled';

    if(!isFunction(successCallback)) {
        logError('successCallback parameter must be a function', METHOD_NAME);
        return;
    }

    exec(
        successCallback,
        errorCallback,
        PLUGIN_NAME,
        METHOD_NAME,
        []
    );
};

/**
 * Determines whether BLE is supported or not.
 * @param {Function} successCallback
 * @param {Function} [errorCallback]
 */
EstimoteBeacons.prototype.isBleSupported = function(successCallback, errorCallback) {
    var METHOD_NAME = 'isBleSupported';

    if(!isFunction(successCallback)) {
        logError('successCallback parameter must be a function', METHOD_NAME);
        return;
    }

    exec(
        successCallback,
        errorCallback,
        PLUGIN_NAME,
        METHOD_NAME,
        []
    );
};



if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.EstimoteBeacons) {
    window.plugins.EstimoteBeacons = new EstimoteBeacons();
}


if( module.exports )
{
    module.exports = EstimoteBeacons;
}
