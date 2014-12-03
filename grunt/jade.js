var appSettings = require('../settings/app.json'),
    networkSettings = require('../settings/network.json'),
    scriptsSettings = require('../settings/scripts.json'),
    basicinfo = require('../settings/basicinfo.json');

module.exports = {
    options: {
        pretty: true,
        data: {
            resourcePath: '/',
            appSettings: appSettings,
            network: networkSettings,
            scripts: scriptsSettings,
            basicinfo: basicinfo
        },
        basedir: appSettings.dir.app + '/jade'
    },
    server: {
        files: [{
            expand: true,
            cwd: appSettings.dir.app + '/jade',
            src: '**/!(_)*.jade',
            dest: '.tmp',
            ext: '.html'
        }]
    },
    stg: {
        options: {
            data: {
                resourcePath: '/',
                appSettings: appSettings,
                network: networkSettings,
                scripts: scriptsSettings,
                basicinfo: basicinfo
            }
        },
        files: [{
            expand: true,
            cwd: appSettings.dir.app + '/jade',
            src: '**/!(_)*.jade',
            dest: appSettings.dir.dist,
            ext: '.html'
        }]
    },
    dist: {
        options: {
            data: {
                resourcePath: '/',
                appSettings: appSettings,
                network: networkSettings,
                scripts: scriptsSettings,
                basicinfo: basicinfo
            }
        },
        files: [{
            expand: true,
            cwd: appSettings.dir.app + '/jade',
            src: '**/!(_)*.jade',
            dest: appSettings.dir.dist,
            ext: '.html'
        }]
    }
};
