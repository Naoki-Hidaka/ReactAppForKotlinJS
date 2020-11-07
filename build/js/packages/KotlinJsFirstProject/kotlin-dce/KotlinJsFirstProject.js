(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinJsFirstProject'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinJsFirstProject'.");
    }root.KotlinJsFirstProject = factory(typeof KotlinJsFirstProject === 'undefined' ? {} : KotlinJsFirstProject, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main() {
    println('Hello');
  }
  _.main = main;
  main();
  return _;
}));

//# sourceMappingURL=KotlinJsFirstProject.js.map
