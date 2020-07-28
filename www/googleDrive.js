var exec = require('cordova/exec');


exports.signIn = function (successCallback, errorCallback) {
    return new Promise(function (resolve, reject) {
      exec(successCallback, errorCallback, "GoogleDrive", "signIn")
    })
}

exports.signOut = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "GoogleDrive", "signOut");
}


exports.fileList = function ( appfolder,successCallback, errorCallback) {
    return new Promise(function (resolve, reject) {
      exec(successCallback, errorCallback, "GoogleDrive", "fileList", [appfolder])
    })
}

exports.downloadFiles = function(downloadFiles,successCallback, errorCallback)
{
    exec(successCallback,errorCallback,"GoogleDrive", "downloadFiles",downloadFiles);
}
