(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[c[0x0]] = c;
    return '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var n = function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (n) {
                return function () {
                    var s, t;
                    var u = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        s = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (w) {
                            var x = w['get']('player');
                            return x && x['get']('viewerArea') == u;
                        })['map'](function (w) {
                            return w['get']('media')['get']('playList');
                        });
                    else {
                        s = this['_getPlayListsWithViewer'](u);
                        t = j['bind'](this, u);
                    }
                    if (!c) {
                        for (var v = 0x0; v < s['length']; ++v) {
                            s[v]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, s, n, t);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var o = k['split']('.');
                var p = o[0x1];
                if (p) {
                    var q = o['slice'](0x2)['join']('.');
                    return d(q, { 'viewerName': p });
                }
            } else if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var r = undefined;
                var n = function () {
                    switch (k['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                        if (s) {
                            r = s[0x1];
                            switch ('quiz.' + s[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (n) {
                    return function () {
                        var s = this['get']('data')['quiz'];
                        if (s) {
                            if (!c) {
                                if (r != undefined)
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, w[y]['id'], n), this);
                                        }
                                    } else {
                                        s['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, r, n), this);
                                    }
                                else
                                    s['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, n), this);
                                c = !![];
                            }
                            try {
                                var B = 0x0;
                                if (r != undefined) {
                                    if (r == 'global') {
                                        var u = this['get']('data')['quizConfig'];
                                        var w = u['objectives'];
                                        for (var y = 0x0, A = w['length']; y < A; ++y) {
                                            B += s['getObjective'](w[y]['id'], n);
                                        }
                                    } else {
                                        B = s['getObjective'](r, n);
                                    }
                                } else {
                                    B = s['get'](n);
                                    if (n == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        B += 0x1;
                                }
                                return B;
                            } catch (C) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l];
            var n = function () {
                m['unbind']('begin', n, this);
                e['call'](this);
            };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            if (k in l) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            if (k == m && l in n) {
                e['call'](this);
            }
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n];
            var p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.');
                var r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"hash": "2091647de8726c44be04b714c73ae3fa73e6b96aa417a3b92bc6b00281e4a814", "definitions": [{"touchControlMode":"drag_rotation","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","viewerArea":"this.MainViewer","aaEnabled":true},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_955F721A_9FC9_A2B7_41D6_2BA73FDED581","id":"panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_camera","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5","camera":"this.panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F","camera":"this.panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E","camera":"this.panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_camera","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1","camera":"this.panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_camera","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)"}],"id":"mainPlayList"},{"subtitlesBottom":50,"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"subtitlesTextShadowVerticalLength":1,"toolTipPaddingTop":4,"data":{"name":"Main Viewer"},"vrPointerColor":"#FFFFFF","subtitlesTop":0,"playbackBarHeadHeight":15,"toolTipTextShadowColor":"#000000","playbackBarHeadShadowColor":"#000000","subtitlesTextShadowColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","propagateClick":false,"subtitlesBackgroundOpacity":0.2,"surfaceReticleColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","subtitlesFontSize":"3vmin","progressOpacity":0.7,"progressRight":"33%","progressBarBackgroundColorRatios":[0],"progressBarBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"firstTransitionDuration":0,"playbackBarHeadBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontColor":"#606060","progressBorderColor":"#000000","playbackBarHeight":10,"progressBackgroundColorRatios":[0],"toolTipShadowColor":"#333138","vrPointerSelectionColor":"#FF6600","progressBarBackgroundColor":["#3399FF"],"toolTipFontSize":"1.11vmin","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarProgressBorderSize":0,"progressBackgroundColor":["#000000"],"progressBottom":10,"progressHeight":2,"surfaceReticleSelectionColor":"#FFFFFF","progressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","progressBarBorderRadius":2,"playbackBarRight":0,"toolTipPaddingBottom":4,"playbackBarBackgroundOpacity":1,"toolTipPaddingRight":6,"toolTipBackgroundColor":"#F6F6F6","progressBarBorderSize":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingLeft":6,"subtitlesGap":0,"progressBorderRadius":2,"subtitlesBackgroundColor":"#000000","toolTipFontFamily":"Arial","progressLeft":"33%","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"subtitlesTextShadowOpacity":1,"vrThumbstickRotationStep":20,"playbackBarProgressBorderColor":"#000000","subtitlesFontColor":"#FFFFFF","height":"100%","playbackBarHeadBorderRadius":0,"width":"100%","class":"ViewerArea","vrPointerSelectionTime":2000,"subtitlesTextShadowHorizontalLength":1,"minHeight":50,"minWidth":100},{"adjacentPanoramas":[{"distance":2.55,"panorama":"this.panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F","yaw":90.3,"class":"AdjacentPanorama","backwardYaw":-93.12,"data":{"overlayID":"overlay_9199FDD7_9FC9_A1BD_41CE_E7E33A29D6FD"},"select":"this.overlay_9199FDD7_9FC9_A1BD_41CE_E7E33A29D6FD.get('areas').forEach(function(a){ a.trigger('click') })"},{"distance":2.95,"panorama":"this.panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1","yaw":-14.31,"class":"AdjacentPanorama","backwardYaw":6.02,"data":{"overlayID":"overlay_91F0FA1B_9FC8_A2B5_41D3_C13A0664F324"},"select":"this.overlay_91F0FA1B_9FC8_A2B5_41D3_C13A0664F324.get('areas').forEach(function(a){ a.trigger('click') })"}],"label":trans('panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E.label'),"data":{"label":"IMG_20241006_112916_00_005"},"frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":8,"height":4096,"colCount":48,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_0/{face}/0/{row}_{column}.jpg","width":24576},{"rowCount":4,"height":2048,"colCount":24,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_0/{face}/1/{row}_{column}.jpg","width":12288},{"rowCount":2,"height":1024,"colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_0/{face}/2/{row}_{column}.jpg","width":6144},{"rowCount":1,"height":512,"colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"url":"media/panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_0/{face}/3/{row}_{column}.jpg","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_t.jpg"}],"class":"Panorama","hfov":360,"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_t.jpg","overlays":["this.overlay_9199FDD7_9FC9_A1BD_41CE_E7E33A29D6FD","this.overlay_91F0FA1B_9FC8_A2B5_41D3_C13A0664F324"],"id":"panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_955F421B_9FC9_A2B5_41CA_5E6B1B2FA717","id":"panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_camera","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"adjacentPanoramas":[{"distance":3.23,"panorama":"this.panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E","yaw":6.02,"class":"AdjacentPanorama","backwardYaw":-14.31,"data":{"overlayID":"overlay_918A5A1C_9FC8_A2B3_41D7_F0CE998AF0C1"},"select":"this.overlay_918A5A1C_9FC8_A2B3_41D7_F0CE998AF0C1.get('areas').forEach(function(a){ a.trigger('click') })"}],"label":trans('panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1.label'),"data":{"label":"IMG_20241006_112955_00_006"},"frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":8,"height":4096,"colCount":48,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_0/{face}/0/{row}_{column}.jpg","width":24576},{"rowCount":4,"height":2048,"colCount":24,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_0/{face}/1/{row}_{column}.jpg","width":12288},{"rowCount":2,"height":1024,"colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_0/{face}/2/{row}_{column}.jpg","width":6144},{"rowCount":1,"height":512,"colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"url":"media/panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_0/{face}/3/{row}_{column}.jpg","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_t.jpg"}],"class":"Panorama","hfov":360,"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_t.jpg","overlays":["this.overlay_918A5A1C_9FC8_A2B3_41D7_F0CE998AF0C1"],"id":"panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1"},{"adjacentPanoramas":[{"distance":2.61,"panorama":"this.panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F","yaw":175.69,"class":"AdjacentPanorama","backwardYaw":-2.79,"data":{"overlayID":"overlay_91AFB082_9FC8_7F97_41B5_3A1B264776D6"},"select":"this.overlay_91AFB082_9FC8_7F97_41B5_3A1B264776D6.get('areas').forEach(function(a){ a.trigger('click') })"}],"label":trans('panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5.label'),"data":{"label":"IMG_20241006_112718_00_003"},"frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":8,"height":4096,"colCount":48,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_0/{face}/0/{row}_{column}.jpg","width":24576},{"rowCount":4,"height":2048,"colCount":24,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_0/{face}/1/{row}_{column}.jpg","width":12288},{"rowCount":2,"height":1024,"colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_0/{face}/2/{row}_{column}.jpg","width":6144},{"rowCount":1,"height":512,"colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"url":"media/panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_0/{face}/3/{row}_{column}.jpg","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_t.jpg"}],"class":"Panorama","hfov":360,"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_t.jpg","overlays":["this.overlay_91AFB082_9FC8_7F97_41B5_3A1B264776D6"],"id":"panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5"},{"adjacentPanoramas":[{"distance":3.21,"panorama":"this.panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5","yaw":-2.79,"class":"AdjacentPanorama","backwardYaw":175.69,"data":{"overlayID":"overlay_91AB408A_9FC8_7F94_41E0_C50DD067A164"},"select":"this.overlay_91AB408A_9FC8_7F94_41E0_C50DD067A164.get('areas').forEach(function(a){ a.trigger('click') })"},{"distance":2.63,"panorama":"this.panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E","yaw":-93.12,"class":"AdjacentPanorama","backwardYaw":90.3,"data":{"overlayID":"overlay_919C5DD6_9FC9_A1BF_41E2_A1F213DCE545"},"select":"this.overlay_919C5DD6_9FC9_A1BF_41E2_A1F213DCE545.get('areas').forEach(function(a){ a.trigger('click') })"}],"label":trans('panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F.label'),"data":{"label":"IMG_20241006_112822_00_004"},"frames":[{"cube":{"class":"ImageResource","levels":[{"rowCount":8,"height":4096,"colCount":48,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_0/{face}/0/{row}_{column}.jpg","width":24576},{"rowCount":4,"height":2048,"colCount":24,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_0/{face}/1/{row}_{column}.jpg","width":12288},{"rowCount":2,"height":1024,"colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand","url":"media/panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_0/{face}/2/{row}_{column}.jpg","width":6144},{"rowCount":1,"height":512,"colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"url":"media/panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_0/{face}/3/{row}_{column}.jpg","width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_t.jpg"}],"class":"Panorama","hfov":360,"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_t.jpg","overlays":["this.overlay_91AB408A_9FC8_7F94_41E0_C50DD067A164","this.overlay_919C5DD6_9FC9_A1BF_41E2_A1F213DCE545"],"id":"panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_9558A217_9FC9_A2BD_419F_F080B26B8CA3","id":"panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_camera","class":"PanoramaCamera","initialPosition":{"yaw":-0.78,"class":"PanoramaCameraPosition","pitch":-5.26}},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_955CA21B_9FC9_A2B5_41DC_2BD99F9A3976","id":"panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_camera","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"id":"sequence_955F721A_9FC9_A2B7_41D6_2BA73FDED581","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"areas":["this.HotspotPanoramaOverlayArea_90B4D6BD_9FD8_A3ED_41C6_C7B51AE0BD9C"],"maps":[],"data":{"hasPanoramaAction":true,"label":"GoToImg_20241006_112822_00_004"},"useHandCursor":true,"items":[{"vfov":5.73,"image":"this.AnimatedImageResource_ADBD6698_A1BE_452F_41C9_2795DAF58CAC","distance":100,"scaleMode":"fit_inside","pitch":-33.65,"data":{"label":"GoToImg_20241006_112822_00_004"},"yaw":90.3,"class":"HotspotPanoramaOverlayImage","hfov":10.5}],"enabledInCardboard":true,"id":"overlay_9199FDD7_9FC9_A1BD_41CE_E7E33A29D6FD","class":"HotspotPanoramaOverlay"},{"areas":["this.HotspotPanoramaOverlayArea_919DAA27_9FC8_A29D_41CE_F3BF686B9488"],"maps":[],"data":{"hasPanoramaAction":true,"label":"GoToImg_20241006_112955_00_006"},"useHandCursor":true,"items":[{"vfov":5.73,"image":"this.AnimatedImageResource_ADBD8699_A1BE_4521_41E1_A09B9F462B46","distance":100,"scaleMode":"fit_inside","pitch":-29.96,"data":{"label":"GoToImg_20241006_112955_00_006"},"yaw":-14.31,"class":"HotspotPanoramaOverlayImage","hfov":10.5}],"enabledInCardboard":true,"id":"overlay_91F0FA1B_9FC8_A2B5_41D3_C13A0664F324","class":"HotspotPanoramaOverlay"},{"id":"sequence_955F421B_9FC9_A2B5_41CA_5E6B1B2FA717","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"areas":["this.HotspotPanoramaOverlayArea_90B4C6BD_9FD8_A3ED_41D0_EE6ED1F49183"],"maps":[],"data":{"hasPanoramaAction":true,"label":"GoToImg_20241006_112916_00_005"},"useHandCursor":true,"items":[{"vfov":5.73,"image":"this.AnimatedImageResource_ADBDC699_A1BE_4521_41CF_3DF4EBA90917","distance":100,"scaleMode":"fit_inside","pitch":-27.75,"data":{"label":"GoToImg_20241006_112916_00_005"},"yaw":6.02,"class":"HotspotPanoramaOverlayImage","hfov":10.5}],"enabledInCardboard":true,"id":"overlay_918A5A1C_9FC8_A2B3_41D7_F0CE998AF0C1","class":"HotspotPanoramaOverlay"},{"areas":["this.HotspotPanoramaOverlayArea_908BAECB_9FC8_6395_4194_3FE3668870E0"],"maps":[],"data":{"hasPanoramaAction":true,"label":"GoToImg_20241006_112822_00_004"},"useHandCursor":true,"items":[{"vfov":4.47,"image":"this.AnimatedImageResource_AA42D695_A1BE_4521_41DA_146282ED1EBA","distance":100,"scaleMode":"fit_inside","pitch":-33.05,"data":{"label":"GoToImg_20241006_112822_00_004"},"yaw":175.69,"class":"HotspotPanoramaOverlayImage","hfov":7.59}],"enabledInCardboard":true,"id":"overlay_91AFB082_9FC8_7F97_41B5_3A1B264776D6","class":"HotspotPanoramaOverlay"},{"areas":["this.HotspotPanoramaOverlayArea_91B12F3A_9FC8_A2F7_41B2_33BA52F0D5F9"],"maps":[],"data":{"hasPanoramaAction":true,"label":"GoToImg_20241006_112718_00_003"},"useHandCursor":true,"items":[{"vfov":3.7,"image":"this.AnimatedImageResource_ADBD1698_A1BE_452F_41E3_569CE4FE6673","distance":100,"scaleMode":"fit_inside","pitch":-27.93,"data":{"label":"GoToImg_20241006_112718_00_003"},"yaw":-2.79,"class":"HotspotPanoramaOverlayImage","hfov":8.68}],"enabledInCardboard":true,"id":"overlay_91AB408A_9FC8_7F94_41E0_C50DD067A164","class":"HotspotPanoramaOverlay"},{"areas":["this.HotspotPanoramaOverlayArea_9150EDFD_9FC9_A16D_4180_2B1E0377CD88"],"maps":[],"data":{"hasPanoramaAction":true,"label":"GoToImg_20241006_112916_00_005"},"useHandCursor":true,"items":[{"vfov":5.73,"image":"this.AnimatedImageResource_ADBD2698_A1BE_452F_41C4_3F08A2527B4C","distance":100,"scaleMode":"fit_inside","pitch":-32.87,"data":{"label":"GoToImg_20241006_112916_00_005"},"yaw":-93.12,"class":"HotspotPanoramaOverlayImage","hfov":10.5}],"enabledInCardboard":true,"id":"overlay_919C5DD6_9FC9_A1BF_41E2_A1F213DCE545","class":"HotspotPanoramaOverlay"},{"id":"sequence_9558A217_9FC9_A2BD_419F_F080B26B8CA3","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"id":"sequence_955CA21B_9FC9_A2B5_41DC_2BD99F9A3976","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_90B4D6BD_9FD8_A3ED_41C6_C7B51AE0BD9C","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true},{"rowCount":1,"levels":[{"height":60,"class":"ImageResourceLevel","url":"media/res_90F1FE37_9FC9_E2FD_41C8_6280A340BFE2_0.png","width":990}],"frameDuration":62,"finalFrame":"first","frameCount":9,"id":"AnimatedImageResource_ADBD6698_A1BE_452F_41C9_2795DAF58CAC","colCount":9,"class":"AnimatedImageResource"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_919DAA27_9FC8_A29D_41CE_F3BF686B9488","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)","displayTooltipInTouchScreens":true},{"rowCount":1,"levels":[{"height":60,"class":"ImageResourceLevel","url":"media/res_90F1FE37_9FC9_E2FD_41C8_6280A340BFE2_0.png","width":990}],"frameDuration":62,"finalFrame":"first","frameCount":9,"id":"AnimatedImageResource_ADBD8699_A1BE_4521_41E1_A09B9F462B46","colCount":9,"class":"AnimatedImageResource"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_90B4C6BD_9FD8_A3ED_41D0_EE6ED1F49183","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","displayTooltipInTouchScreens":true},{"rowCount":1,"levels":[{"height":60,"class":"ImageResourceLevel","url":"media/res_90F1FE37_9FC9_E2FD_41C8_6280A340BFE2_0.png","width":990}],"frameDuration":62,"finalFrame":"first","frameCount":9,"id":"AnimatedImageResource_ADBDC699_A1BE_4521_41CF_3DF4EBA90917","colCount":9,"class":"AnimatedImageResource"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_908BAECB_9FC8_6395_4194_3FE3668870E0","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true},{"rowCount":1,"levels":[{"height":60,"class":"ImageResourceLevel","url":"media/res_90F1FE37_9FC9_E2FD_41C8_6280A340BFE2_0.png","width":990}],"frameDuration":62,"finalFrame":"first","frameCount":9,"id":"AnimatedImageResource_AA42D695_A1BE_4521_41DA_146282ED1EBA","colCount":9,"class":"AnimatedImageResource"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_91B12F3A_9FC8_A2F7_41B2_33BA52F0D5F9","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","displayTooltipInTouchScreens":true},{"rowCount":1,"levels":[{"height":60,"class":"ImageResourceLevel","url":"media/res_90F1FE37_9FC9_E2FD_41C8_6280A340BFE2_0.png","width":990}],"frameDuration":62,"finalFrame":"first","frameCount":9,"id":"AnimatedImageResource_ADBD1698_A1BE_452F_41E3_569CE4FE6673","colCount":9,"class":"AnimatedImageResource"},{"class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_9150EDFD_9FC9_A16D_4180_2B1E0377CD88","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","displayTooltipInTouchScreens":true},{"rowCount":1,"levels":[{"height":60,"class":"ImageResourceLevel","url":"media/res_90F1FE37_9FC9_E2FD_41C8_6280A340BFE2_0.png","width":990}],"frameDuration":62,"finalFrame":"first","frameCount":9,"id":"AnimatedImageResource_ADBD2698_A1BE_452F_41C4_3F08A2527B4C","colCount":9,"class":"AnimatedImageResource"}],"scripts":{"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"initQuiz":TDV.Tour.Script.initQuiz,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMediaByName":TDV.Tour.Script.getMediaByName,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"executeJS":TDV.Tour.Script.executeJS,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setValue":TDV.Tour.Script.setValue,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPixels":TDV.Tour.Script.getPixels,"cloneBindings":TDV.Tour.Script.cloneBindings,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"translate":TDV.Tour.Script.translate,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"initAnalytics":TDV.Tour.Script.initAnalytics,"getKey":TDV.Tour.Script.getKey,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"resumePlayers":TDV.Tour.Script.resumePlayers,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"downloadFile":TDV.Tour.Script.downloadFile,"init":TDV.Tour.Script.init,"setMapLocation":TDV.Tour.Script.setMapLocation,"isPanorama":TDV.Tour.Script.isPanorama,"getComponentByName":TDV.Tour.Script.getComponentByName,"shareSocial":TDV.Tour.Script.shareSocial,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"clone":TDV.Tour.Script.clone,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"setLocale":TDV.Tour.Script.setLocale,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"toggleVR":TDV.Tour.Script.toggleVR,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"unregisterKey":TDV.Tour.Script.unregisterKey,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"quizFinish":TDV.Tour.Script.quizFinish,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"registerKey":TDV.Tour.Script.registerKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"existsKey":TDV.Tour.Script.existsKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizStart":TDV.Tour.Script.quizStart,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"playAudioList":TDV.Tour.Script.playAudioList,"createTween":TDV.Tour.Script.createTween,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"mixObject":TDV.Tour.Script.mixObject,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showWindow":TDV.Tour.Script.showWindow,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"enableVR":TDV.Tour.Script.enableVR,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"startMeasurement":TDV.Tour.Script.startMeasurement,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"openLink":TDV.Tour.Script.openLink,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"disableVR":TDV.Tour.Script.disableVR,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getOverlays":TDV.Tour.Script.getOverlays,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound},"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList])","data":{"textToSpeechConfig":{"speechOnInfoWindow":false,"pitch":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"volume":1,"speechOnTooltip":false,"rate":1},"locales":{"en":"locale/en.txt"},"defaultLocale":"en","history":{},"name":"Player485"},"width":"100%","propagateClick":false,"layout":"absolute","scrollBarColor":"#000000","children":["this.MainViewer"],"scrollBarMargin":2,"class":"Player","height":"100%","backgroundColor":["#FFFFFF"],"gap":10,"minHeight":0,"id":"rootPlayer","minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var a = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return a;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.4.js.map
})();
//Generated with v2024.0.4, Sat Oct 19 2024