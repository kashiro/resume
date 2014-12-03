module.exports = {
    dist: {
        src: ['dist/index.html'],
        dest: 'dist/index.html',
        replacements: [{
            from: '/scripts/vendor.js',
            to  : 'scripts/vendor.js?__inline=true'
        },{
            from: '/scripts/main.js',
            to  : 'scripts/main.js?__inline=true'
        },{
            from: '/styles/main.css',
            to  : 'styles/main.css?__inline=true'
        }]
    }
};
