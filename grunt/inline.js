module.exports = {
    dist: {
        options:{
            inlineTagAttributes: {
                js: 'async'
            }
        },
        src: ['dist/index.html'],
        dest: ['dist/']
    }
};
