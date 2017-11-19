gulp    = require 'gulp'
replace = require 'gulp-replace'
coffee  = require 'gulp-coffee'
concat  = require 'gulp-concat'
uglify  = require 'gulp-uglify'
rename  = require 'gulp-rename'
mocha   = require 'gulp-mocha'
gf      = require 'gulp-if'

gulp.task 'tests', ->
	gulp.src 'test.js', read: false
		.pipe mocha()

gulp.task 'pack', ->
	gulp.src 'src/main.coffee'

		.pipe gf('*.coffee', (replace /\#\s*REMOVE\s*\n[\s\S]*?\#\s*END/gi, ''))
		.pipe gf('*.coffee', (replace /\#\s*REPLACE\s*\n[\s\S]*?\#\s*TO\n([\s\S]*?)\#\s*END/gi, '$1'))
		.pipe gf('*.coffee', (coffee bare: true))

		.pipe concat 'main.js'

		.pipe rename 'build.js'
		.pipe gulp.dest 'build'

		.pipe rename 'build.min.js'
		.pipe uglify()
		.pipe gulp.dest 'build'

gulp.task 'build', ['tests', 'pack']
gulp.task 'default', ['build']