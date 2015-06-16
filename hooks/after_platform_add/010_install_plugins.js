#!/usr/bin/env node

//this hook installs all your plugins

// add your plugins to this list--either the identifier, the filesystem location or the URL
var pluginlist = [
    'cordova-plugin-splashscreen',
    'phonegap-plugin-barcodescanner'
];

var localpluginlist = [
    "cn.plugins.extrainfo"
];

// no need to configure below

var fs = require('fs');
var path = require('path');
var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
    sys.puts(stdout)
}

pluginlist.forEach(function(plug) {
    exec("cordova plugin add " + plug, puts);
});

var localPluginsDir = path.resolve(__dirname, '../../localplugins');
localpluginlist.forEach(function(plug) {
    exec("cordova plugin add " + localPluginsDir + '\\' + plug, puts);
});
