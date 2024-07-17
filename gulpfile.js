import { src, dest, watch, series } from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';


//Gulp functions that'll be used later in the render function
import fs from 'fs'
import sharp from 'sharp'
import path from 'path'
import teser from 'gulp-terser'

const sass = gulpSass(dartSass);

export function css ( done ) {
    src( 'src/scss/app.scss', {sourcemaps: true} )
    .pipe( sass().on('error', sass.logError))
    .pipe( dest('dist/css', {sourcemaps: true}) );

    done();
}

export function js ( done ) {

    src( 'src/js/app.js' )
    .pipe( dest( 'dist/js' ) )

    done();
}

export function renderFunction () {
    watch( 'src/scss/**/*.scss', css )
}

export default series( js, css, renderFunction );
