(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlin-wrappers-kotlin-react-dom-jsLegacy', 'kotlin-wrappers-kotlin-react-jsLegacy', 'kotlinx-html-js', 'kotlin-css', 'kotlin-wrappers-kotlin-styled-jsLegacy'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-react-dom-jsLegacy'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlinx-html-js'), require('kotlin-css'), require('kotlin-wrappers-kotlin-styled-jsLegacy'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KotlinJsFirstProject'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KotlinJsFirstProject'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-dom-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJsFirstProject'. Its dependency 'kotlin-wrappers-kotlin-react-dom-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-jsLegacy' is loaded prior to 'KotlinJsFirstProject'.");
    }if (typeof this['kotlin-wrappers-kotlin-react-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJsFirstProject'. Its dependency 'kotlin-wrappers-kotlin-react-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-jsLegacy' is loaded prior to 'KotlinJsFirstProject'.");
    }if (typeof this['kotlinx-html-js'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJsFirstProject'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'KotlinJsFirstProject'.");
    }if (typeof this['kotlin-css'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJsFirstProject'. Its dependency 'kotlin-css' was not found. Please, check whether 'kotlin-css' is loaded prior to 'KotlinJsFirstProject'.");
    }if (typeof this['kotlin-wrappers-kotlin-styled-jsLegacy'] === 'undefined') {
      throw new Error("Error loading module 'KotlinJsFirstProject'. Its dependency 'kotlin-wrappers-kotlin-styled-jsLegacy' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-jsLegacy' is loaded prior to 'KotlinJsFirstProject'.");
    }root.KotlinJsFirstProject = factory(typeof KotlinJsFirstProject === 'undefined' ? {} : KotlinJsFirstProject, kotlin, this['kotlin-wrappers-kotlin-react-dom-jsLegacy'], this['kotlin-wrappers-kotlin-react-jsLegacy'], this['kotlinx-html-js'], this['kotlin-css'], this['kotlin-wrappers-kotlin-styled-jsLegacy']);
  }
}(this, function (_, Kotlin, $module$kotlin_wrappers_kotlin_react_dom_jsLegacy, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlinx_html_js, $module$kotlin_css, $module$kotlin_wrappers_kotlin_styled_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var getKClass = Kotlin.getKClass;
  var Unit = Kotlin.kotlin.Unit;
  var render = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.render_2955dm$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var setState = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.setState_kpl3tw$;
  var minus = Kotlin.kotlin.collections.minus_2ws7j4$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var RComponent_init = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent_init_lqgejo$;
  var RComponent = $module$kotlin_wrappers_kotlin_react_jsLegacy.react.RComponent;
  var attributesMapOf = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var H3_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var RDOMBuilder_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.react.dom.RDOMBuilder;
  var H1_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var DIV_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var equals = Kotlin.equals;
  var P_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var Position = $module$kotlin_css.kotlinx.css.Position;
  var set_position = $module$kotlin_css.kotlinx.css.set_position_mvtmy5$;
  var get_px = $module$kotlin_css.kotlinx.css.get_px_rcaex3$;
  var set_top = $module$kotlin_css.kotlinx.css.set_top_n8chyh$;
  var set_right = $module$kotlin_css.kotlinx.css.set_right_n8chyh$;
  var Display = $module$kotlin_css.kotlinx.css.Display;
  var set_display = $module$kotlin_css.kotlinx.css.set_display_qidz4o$;
  var Color = $module$kotlin_css.kotlinx.css.Color;
  var set_backgroundColor = $module$kotlin_css.kotlinx.css.set_backgroundColor_ommczd$;
  var enumEncode = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var BUTTON_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var StyledDOMBuilder_init = $module$kotlin_wrappers_kotlin_styled_jsLegacy.styled.StyledDOMBuilder;
  var attributesMapOf_1 = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var IMG_init = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.IMG;
  var html = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html;
  var DIV_init_0 = $module$kotlin_wrappers_kotlin_styled_jsLegacy.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  App.prototype = Object.create(RComponent.prototype);
  App.prototype.constructor = App;
  VideoList.prototype = Object.create(RComponent.prototype);
  VideoList.prototype.constructor = VideoList;
  VideoPlayer.prototype = Object.create(RComponent.prototype);
  VideoPlayer.prototype.constructor = VideoPlayer;
  function main$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda($receiver) {
    $receiver.child_ssazr1$(getKClass(App), main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function Video(id, title, speaker, videoUrl) {
    this.id = id;
    this.title = title;
    this.speaker = speaker;
    this.videoUrl = videoUrl;
  }
  Video.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Video',
    interfaces: []
  };
  Video.prototype.component1 = function () {
    return this.id;
  };
  Video.prototype.component2 = function () {
    return this.title;
  };
  Video.prototype.component3 = function () {
    return this.speaker;
  };
  Video.prototype.component4 = function () {
    return this.videoUrl;
  };
  Video.prototype.copy_cgs6fs$ = function (id, title, speaker, videoUrl) {
    return new Video(id === void 0 ? this.id : id, title === void 0 ? this.title : title, speaker === void 0 ? this.speaker : speaker, videoUrl === void 0 ? this.videoUrl : videoUrl);
  };
  Video.prototype.toString = function () {
    return 'Video(id=' + Kotlin.toString(this.id) + (', title=' + Kotlin.toString(this.title)) + (', speaker=' + Kotlin.toString(this.speaker)) + (', videoUrl=' + Kotlin.toString(this.videoUrl)) + ')';
  };
  Video.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.speaker) | 0;
    result = result * 31 + Kotlin.hashCode(this.videoUrl) | 0;
    return result;
  };
  Video.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.speaker, other.speaker) && Kotlin.equals(this.videoUrl, other.videoUrl)))));
  };
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function App() {
    RComponent_init(this);
  }
  App.prototype.init_bc6fkx$ = function ($receiver) {
    $receiver.unwatchedVideos = listOf([new Video(1, 'Building and breaking things', 'John Doe', 'https://youtu.be/PsaFVLr8t4E'), new Video(2, 'The development process', 'Jane Smith', 'https://youtu.be/PsaFVLr8t4E'), new Video(3, 'The Web 7.0', 'Matt Miller', 'https://youtu.be/PsaFVLr8t4E')]);
    $receiver.watchedVideos = listOf_0(new Video(4, 'Mouseless development', 'Tom Jerry', 'https://youtu.be/PsaFVLr8t4E'));
  };
  function App$render$lambda$lambda$lambda$lambda(closure$it) {
    return function ($receiver) {
      $receiver.currentVideo = closure$it;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda(this$App) {
    return function (it) {
      setState(this$App, App$render$lambda$lambda$lambda$lambda(it));
      return Unit;
    };
  }
  function App$render$lambda$lambda(this$App) {
    return function ($receiver) {
      $receiver.videos = this$App.state.unwatchedVideos;
      $receiver.selectedVideo = this$App.state.currentVideo;
      $receiver.onSelectVideo = App$render$lambda$lambda$lambda(this$App);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_0(closure$it) {
    return function ($receiver) {
      $receiver.currentVideo = closure$it;
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_0(this$App) {
    return function (it) {
      setState(this$App, App$render$lambda$lambda$lambda$lambda_0(it));
      return Unit;
    };
  }
  function App$render$lambda$lambda_0(this$App) {
    return function ($receiver) {
      $receiver.videos = this$App.state.watchedVideos;
      $receiver.selectedVideo = this$App.state.currentVideo;
      $receiver.onSelectVideo = App$render$lambda$lambda$lambda_0(this$App);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_1(this$) {
    return function ($receiver) {
      $receiver.unwatchedVideos = minus($receiver.unwatchedVideos, this$.video);
      $receiver.watchedVideos = plus($receiver.watchedVideos, this$.video);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda$lambda_2(this$) {
    return function ($receiver) {
      $receiver.watchedVideos = minus($receiver.watchedVideos, this$.video);
      $receiver.unwatchedVideos = plus($receiver.unwatchedVideos, this$.video);
      return Unit;
    };
  }
  function App$render$lambda$lambda$lambda_1(this$App, this$) {
    return function (it) {
      if (this$App.state.unwatchedVideos.contains_11rb$(this$.video)) {
        setState(this$App, App$render$lambda$lambda$lambda$lambda_1(this$));
      } else {
        setState(this$App, App$render$lambda$lambda$lambda$lambda_2(this$));
      }
      return Unit;
    };
  }
  function App$render$lambda$lambda_1(closure$currentVideo, this$App) {
    return function ($receiver) {
      $receiver.video = closure$currentVideo;
      $receiver.unwatchedVideo = this$App.state.unwatchedVideos.contains_11rb$(closure$currentVideo);
      $receiver.onWatchedButtonPressed = App$render$lambda$lambda$lambda_1(this$App, $receiver);
      return Unit;
    };
  }
  App.prototype.render_ss14n$ = function ($receiver) {
    var tmp$;
    var $receiver_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0.unaryPlus_pdl1vz$('KotlinConf Explorer');
    $receiver.child_52psg1$($receiver_0.create());
    var $receiver_0_0 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_1 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_1.unaryPlus_pdl1vz$('Videos to watch');
    $receiver_0_0.child_52psg1$($receiver_0_1.create());
    videoList($receiver_0_0, App$render$lambda$lambda(this));
    $receiver.child_52psg1$($receiver_0_0.create());
    var $receiver_0_2 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_3 = new RDOMBuilder_init(h3$lambda(null));
    $receiver_0_3.unaryPlus_pdl1vz$('Videos watched');
    $receiver_0_2.child_52psg1$($receiver_0_3.create());
    videoList($receiver_0_2, App$render$lambda$lambda_0(this));
    $receiver.child_52psg1$($receiver_0_2.create());
    if ((tmp$ = this.state.currentVideo) != null) {
      videoPlayer($receiver, App$render$lambda$lambda_1(tmp$, this));
    }};
  App.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'App',
    interfaces: [RComponent]
  };
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function VideoList() {
    RComponent_init(this);
  }
  function VideoList$render$lambda$lambda$lambda(this$VideoList, closure$video) {
    return function (it) {
      this$VideoList.props.onSelectVideo(closure$video);
      return Unit;
    };
  }
  VideoList.prototype.render_ss14n$ = function ($receiver) {
    var tmp$;
    tmp$ = this.props.videos.iterator();
    while (tmp$.hasNext()) {
      var video = tmp$.next();
      var $receiver_0 = new RDOMBuilder_init(p$lambda(null));
      $receiver_0.key = video.id.toString();
      set_onClickFunction($receiver_0.attrs, VideoList$render$lambda$lambda$lambda(this, video));
      if (equals(video, this.props.selectedVideo)) {
        $receiver_0.unaryPlus_pdl1vz$('\u25B6\uFE0E');
      }$receiver_0.unaryPlus_pdl1vz$(video.speaker + ': ' + video.title);
      $receiver.child_52psg1$($receiver_0.create());
    }
  };
  VideoList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoList',
    interfaces: [RComponent]
  };
  function videoList$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function videoList($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(VideoList), videoList$lambda(handler));
  }
  function h3$lambda_0(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function styledButton$lambda(closure$formEncType, closure$formMethod, closure$type) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null]), it);
    };
  }
  function img$lambda(closure$alt, closure$src, closure$classes) {
    return function (it) {
      return new IMG_init(attributesMapOf_1(['alt', closure$alt, 'src', closure$src, 'class', closure$classes]), it);
    };
  }
  function styledDiv$lambda(it) {
    return new DIV_init_0(html.emptyMap, it);
  }
  function VideoPlayer() {
    RComponent_init(this);
  }
  function VideoPlayer$render$lambda$lambda$lambda$lambda(this$VideoPlayer) {
    return function (it) {
      this$VideoPlayer.props.onWatchedButtonPressed(this$VideoPlayer.props.video);
      return Unit;
    };
  }
  VideoPlayer.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new StyledDOMBuilder_init(styledDiv$lambda);
    var $receiver_1 = $receiver_0.css;
    set_position($receiver_1, Position.absolute);
    set_top($receiver_1, get_px(10));
    set_right($receiver_1, get_px(10));
    var $receiver_0_0 = new RDOMBuilder_init(h3$lambda_0(null));
    $receiver_0_0.unaryPlus_pdl1vz$(this.props.video.speaker + ': ' + this.props.video.title);
    $receiver_0.child_52psg1$($receiver_0_0.create());
    var $receiver_0_1 = new StyledDOMBuilder_init(styledButton$lambda(null, null, null));
    var $receiver_2 = $receiver_0_1.css;
    set_display($receiver_2, Display.block);
    set_backgroundColor($receiver_2, this.props.unwatchedVideo ? Color.Companion.lightGreen : Color.Companion.red);
    set_onClickFunction($receiver_0_1.attrs, VideoPlayer$render$lambda$lambda$lambda$lambda(this));
    if (this.props.unwatchedVideo) {
      $receiver_0_1.unaryPlus_pdl1vz$('Mark as watched');
    } else {
      $receiver_0_1.unaryPlus_pdl1vz$('Mark as unwatched');
    }
    $receiver_0.child_52psg1$($receiver_0_1.create());
    var $receiver_0_2 = new RDOMBuilder_init(img$lambda(null, null, null));
    $receiver_0_2.attrs.src = 'https://via.placeholder.com/640x360.png?text=Video+Player+Placeholder';
    $receiver_0.child_52psg1$($receiver_0_2.create());
    $receiver.child_52psg1$($receiver_0.create());
  };
  VideoPlayer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VideoPlayer',
    interfaces: [RComponent]
  };
  function videoPlayer$lambda(closure$handler) {
    return function ($receiver) {
      $receiver.attrs_slhiwc$(closure$handler);
      return Unit;
    };
  }
  function videoPlayer($receiver, handler) {
    return $receiver.child_ssazr1$(getKClass(VideoPlayer), videoPlayer$lambda(handler));
  }
  _.main = main;
  var package$model = _.model || (_.model = {});
  package$model.Video = Video;
  $$importsForInline$$['kotlin-wrappers-kotlin-react-dom-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_dom_jsLegacy;
  var package$view = _.view || (_.view = {});
  package$view.App = App;
  var package$component = package$view.component || (package$view.component = {});
  package$component.videoList_2nmcvr$ = videoList;
  $$importsForInline$$['kotlin-wrappers-kotlin-styled-jsLegacy'] = $module$kotlin_wrappers_kotlin_styled_jsLegacy;
  package$component.VideoPlayer = VideoPlayer;
  package$component.videoPlayer_ptoska$ = videoPlayer;
  main();
  Kotlin.defineModule('KotlinJsFirstProject', _);
  return _;
}));

//# sourceMappingURL=KotlinJsFirstProject.js.map
