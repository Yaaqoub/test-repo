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
var script = {"class":"Player","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList]); this.syncPlaylists([this.mainPlayList,this.mainPlayList])","hash": "6c220c5008c147519a204b69609681a12727ef793fd5ad49145018460b05622f", "definitions": [{"arrowKeysAction":"translate","aaEnabled":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer"},{"id":"panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_camera","class":"PanoramaCamera","initialSequence":"this.sequence_955F721A_9FC9_A2B7_41D6_2BA73FDED581","enterPointingToHorizon":true,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"overlays":["this.overlay_91AFB082_9FC8_7F97_41B5_3A1B264776D6"],"class":"Panorama","thumbnailUrl":"media/panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_t.jpg","label":trans('panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5.label'),"data":{"label":"IMG_20241006_112718_00_003"},"hfovMax":130,"vfov":180,"hfov":360,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":48,"height":4096,"rowCount":8,"tags":"ondemand","width":24576},{"url":"media/panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":24,"height":2048,"rowCount":4,"tags":"ondemand","width":12288},{"url":"media/panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"height":1024,"rowCount":2,"tags":"ondemand","width":6144},{"url":"media/panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"height":512,"rowCount":1,"tags":["ondemand","preload"],"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_t.jpg"}],"adjacentPanoramas":[{"panorama":"this.panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F","class":"AdjacentPanorama","backwardYaw":-2.79,"yaw":175.69,"distance":2.61,"data":{"overlayID":"overlay_91AFB082_9FC8_7F97_41B5_3A1B264776D6"},"select":"this.overlay_91AFB082_9FC8_7F97_41B5_3A1B264776D6.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5"},{"overlays":["this.overlay_918A5A1C_9FC8_A2B3_41D7_F0CE998AF0C1"],"class":"Panorama","thumbnailUrl":"media/panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_t.jpg","label":trans('panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1.label'),"data":{"label":"IMG_20241006_112955_00_006"},"hfovMax":130,"vfov":180,"hfov":360,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":48,"height":4096,"rowCount":8,"tags":"ondemand","width":24576},{"url":"media/panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":24,"height":2048,"rowCount":4,"tags":"ondemand","width":12288},{"url":"media/panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"height":1024,"rowCount":2,"tags":"ondemand","width":6144},{"url":"media/panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"height":512,"rowCount":1,"tags":["ondemand","preload"],"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_t.jpg"}],"adjacentPanoramas":[{"panorama":"this.panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E","class":"AdjacentPanorama","backwardYaw":-14.31,"yaw":6.02,"distance":3.23,"data":{"overlayID":"overlay_918A5A1C_9FC8_A2B3_41D7_F0CE998AF0C1"},"select":"this.overlay_918A5A1C_9FC8_A2B3_41D7_F0CE998AF0C1.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1"},{"id":"panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_camera","class":"PanoramaCamera","initialSequence":"this.sequence_955F421B_9FC9_A2B5_41CA_5E6B1B2FA717","enterPointingToHorizon":true,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"vrPointerSelectionTime":2000,"class":"ViewerArea","playbackBarHeadBorderRadius":0,"propagateClick":false,"playbackBarHeadShadowOpacity":0.7,"data":{"name":"Main Viewer"},"toolTipPaddingBottom":4,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesTextShadowHorizontalLength":1,"subtitlesGap":0,"vrThumbstickRotationStep":20,"playbackBarBackgroundOpacity":1,"subtitlesBackgroundColor":"#000000","width":"100%","subtitlesTextShadowVerticalLength":1,"toolTipPaddingRight":6,"progressBackgroundColorRatios":[0],"vrPointerColor":"#FFFFFF","progressRight":"33%","height":"100%","toolTipFontFamily":"Arial","playbackBarHeadShadowBlurRadius":3,"toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","toolTipBackgroundColor":"#F6F6F6","progressBarBorderColor":"#000000","playbackBarLeft":0,"progressBarBackgroundColorRatios":[0],"progressOpacity":0.7,"playbackBarHeadHeight":15,"firstTransitionDuration":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","subtitlesTextShadowOpacity":1,"toolTipFontSize":"1.11vmin","subtitlesTop":0,"playbackBarHeadShadow":true,"toolTipTextShadowColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"subtitlesTextShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"surfaceReticleSelectionColor":"#FFFFFF","progressBorderColor":"#000000","subtitlesFontSize":"3vmin","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"surfaceReticleColor":"#FFFFFF","playbackBarBottom":5,"progressBottom":10,"subtitlesBackgroundOpacity":0.2,"toolTipPaddingTop":4,"progressHeight":2,"toolTipBorderColor":"#767676","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBorderRadius":2,"subtitlesBorderColor":"#FFFFFF","progressBorderSize":0,"toolTipShadowColor":"#333138","progressBarBorderSize":0,"playbackBarHeight":10,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"minWidth":100,"playbackBarHeadWidth":6,"minHeight":50,"progressBorderRadius":2,"progressLeft":"33%","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesFontFamily":"Arial","subtitlesBottom":50,"toolTipFontColor":"#606060","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"vrPointerSelectionColor":"#FF6600","playbackBarProgressBorderColor":"#000000"},{"items":[{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5","class":"PanoramaPlayListItem","camera":"this.panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F","class":"PanoramaPlayListItem","camera":"this.panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E","class":"PanoramaPlayListItem","camera":"this.panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewerPanoramaPlayer","media":"this.panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1","class":"PanoramaPlayListItem","camera":"this.panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_camera","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 0)"}],"id":"mainPlayList","class":"PlayList"},{"id":"panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5_camera","class":"PanoramaCamera","initialSequence":"this.sequence_9558A217_9FC9_A2BD_419F_F080B26B8CA3","enterPointingToHorizon":true,"initialPosition":{"yaw":-0.78,"pitch":-5.26,"class":"PanoramaCameraPosition"}},{"id":"panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1_camera","class":"PanoramaCamera","initialSequence":"this.sequence_955CA21B_9FC9_A2B5_41DC_2BD99F9A3976","enterPointingToHorizon":true,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"}},{"overlays":["this.overlay_91AB408A_9FC8_7F94_41E0_C50DD067A164","this.overlay_919C5DD6_9FC9_A1BF_41E2_A1F213DCE545"],"class":"Panorama","thumbnailUrl":"media/panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_t.jpg","label":trans('panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F.label'),"data":{"label":"IMG_20241006_112822_00_004"},"hfovMax":130,"vfov":180,"hfov":360,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":48,"height":4096,"rowCount":8,"tags":"ondemand","width":24576},{"url":"media/panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":24,"height":2048,"rowCount":4,"tags":"ondemand","width":12288},{"url":"media/panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"height":1024,"rowCount":2,"tags":"ondemand","width":6144},{"url":"media/panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"height":512,"rowCount":1,"tags":["ondemand","preload"],"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F_t.jpg"}],"adjacentPanoramas":[{"panorama":"this.panorama_9529CED4_9FCB_A3B3_41C0_97DB8F1FD3C5","class":"AdjacentPanorama","backwardYaw":175.69,"yaw":-2.79,"distance":3.21,"data":{"overlayID":"overlay_91AB408A_9FC8_7F94_41E0_C50DD067A164"},"select":"this.overlay_91AB408A_9FC8_7F94_41E0_C50DD067A164.get('areas').forEach(function(a){ a.trigger('click') })"},{"panorama":"this.panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E","class":"AdjacentPanorama","backwardYaw":90.3,"yaw":-93.12,"distance":2.63,"data":{"overlayID":"overlay_919C5DD6_9FC9_A1BF_41E2_A1F213DCE545"},"select":"this.overlay_919C5DD6_9FC9_A1BF_41E2_A1F213DCE545.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F"},{"overlays":["this.overlay_9199FDD7_9FC9_A1BD_41CE_E7E33A29D6FD","this.overlay_91F0FA1B_9FC8_A2B5_41D3_C13A0664F324"],"class":"Panorama","thumbnailUrl":"media/panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_t.jpg","label":trans('panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E.label'),"data":{"label":"IMG_20241006_112916_00_005"},"hfovMax":130,"vfov":180,"hfov":360,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":48,"height":4096,"rowCount":8,"tags":"ondemand","width":24576},{"url":"media/panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":24,"height":2048,"rowCount":4,"tags":"ondemand","width":12288},{"url":"media/panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"height":1024,"rowCount":2,"tags":"ondemand","width":6144},{"url":"media/panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_0/{face}/3/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"height":512,"rowCount":1,"tags":["ondemand","preload"],"width":3072}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E_t.jpg"}],"adjacentPanoramas":[{"panorama":"this.panorama_95B0E55C_9FC8_66B3_4194_8C40775A5D4F","class":"AdjacentPanorama","backwardYaw":-93.12,"yaw":90.3,"distance":2.55,"data":{"overlayID":"overlay_9199FDD7_9FC9_A1BD_41CE_E7E33A29D6FD"},"select":"this.overlay_9199FDD7_9FC9_A1BD_41CE_E7E33A29D6FD.get('areas').forEach(function(a){ a.trigger('click') })"},{"panorama":"this.panorama_95B3E991_9FC8_E1B4_41D5_8DB741E1B2F1","class":"AdjacentPanorama","backwardYaw":6.02,"yaw":-14.31,"distance":2.95,"data":{"overlayID":"overlay_91F0FA1B_9FC8_A2B5_41D3_C13A0664F324"},"select":"this.overlay_91F0FA1B_9FC8_A2B5_41D3_C13A0664F324.get('areas').forEach(function(a){ a.trigger('click') })"}],"id":"panorama_95B3BED0_9FC8_A3B3_41D8_4D23D4EA2A7E"},{"id":"sequence_955F721A_9FC9_A2B7_41D6_2BA73FDED581","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}]},{"areas":["this.HotspotPanoramaOverlayArea_908BAECB_9FC8_6395_4194_3FE3668870E0"],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoToImg_20241006_112822_00_004"},"useHandCursor":true,"items":[{"hfov":7.59,"class":"HotspotPanoramaOverlayImage","image":"this.AnimatedImageResource_8F00E8F1_9FD8_6F75_41D9_4F3A31305B5B","data":{"label":"GoToImg_20241006_112822_00_004"},"distance":100,"pitch":-33.05,"yaw":175.69,"scaleMode":"fit_inside","vfov":4.47}],"id":"overlay_91AFB082_9FC8_7F97_41B5_3A1B264776D6","maps":[],"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_90B4C6BD_9FD8_A3ED_41D0_EE6ED1F49183"],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoToImg_20241006_112916_00_005"},"useHandCursor":true,"items":[{"hfov":10.5,"class":"HotspotPanoramaOverlayImage","image":"this.AnimatedImageResource_8F03F8F2_9FD8_6F77_41D5_36F908A72779","data":{"label":"GoToImg_20241006_112916_00_005"},"distance":100,"pitch":-27.75,"yaw":6.02,"scaleMode":"fit_inside","vfov":5.73}],"id":"overlay_918A5A1C_9FC8_A2B3_41D7_F0CE998AF0C1","maps":[],"enabledInCardboard":true},{"id":"sequence_955F421B_9FC9_A2B5_41CA_5E6B1B2FA717","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}]},{"id":"sequence_9558A217_9FC9_A2BD_419F_F080B26B8CA3","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}]},{"id":"sequence_955CA21B_9FC9_A2B5_41DC_2BD99F9A3976","class":"PanoramaCameraSequence","movements":[{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"yawSpeed":7.96,"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement"}]},{"areas":["this.HotspotPanoramaOverlayArea_91B12F3A_9FC8_A2F7_41B2_33BA52F0D5F9"],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoToImg_20241006_112718_00_003"},"useHandCursor":true,"items":[{"hfov":8.68,"class":"HotspotPanoramaOverlayImage","image":"this.AnimatedImageResource_8F0018F1_9FD8_6F75_41D6_737BDC7374BD","data":{"label":"GoToImg_20241006_112718_00_003"},"distance":100,"pitch":-27.93,"yaw":-2.79,"scaleMode":"fit_inside","vfov":3.7}],"id":"overlay_91AB408A_9FC8_7F94_41E0_C50DD067A164","maps":[],"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_9150EDFD_9FC9_A16D_4180_2B1E0377CD88"],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoToImg_20241006_112916_00_005"},"useHandCursor":true,"items":[{"hfov":10.5,"class":"HotspotPanoramaOverlayImage","image":"this.AnimatedImageResource_8F0048F1_9FD8_6F75_41CC_A7268853880B","data":{"label":"GoToImg_20241006_112916_00_005"},"distance":100,"pitch":-32.87,"yaw":-93.12,"scaleMode":"fit_inside","vfov":5.73}],"id":"overlay_919C5DD6_9FC9_A1BF_41E2_A1F213DCE545","maps":[],"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_90B4D6BD_9FD8_A3ED_41C6_C7B51AE0BD9C"],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoToImg_20241006_112822_00_004"},"useHandCursor":true,"items":[{"hfov":10.5,"class":"HotspotPanoramaOverlayImage","image":"this.AnimatedImageResource_8F0388F1_9FD8_6F75_41DC_96CF2FF43533","data":{"label":"GoToImg_20241006_112822_00_004"},"distance":100,"pitch":-33.65,"yaw":90.3,"scaleMode":"fit_inside","vfov":5.73}],"id":"overlay_9199FDD7_9FC9_A1BD_41CE_E7E33A29D6FD","maps":[],"enabledInCardboard":true},{"areas":["this.HotspotPanoramaOverlayArea_919DAA27_9FC8_A29D_41CE_F3BF686B9488"],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"GoToImg_20241006_112955_00_006"},"useHandCursor":true,"items":[{"hfov":10.5,"class":"HotspotPanoramaOverlayImage","image":"this.AnimatedImageResource_8F03B8F2_9FD8_6F77_41D6_8AA370BD7CC6","data":{"label":"GoToImg_20241006_112955_00_006"},"distance":100,"pitch":-29.96,"yaw":-14.31,"scaleMode":"fit_inside","vfov":5.73}],"id":"overlay_91F0FA1B_9FC8_A2B5_41D3_C13A0664F324","maps":[],"enabledInCardboard":true},{"id":"HotspotPanoramaOverlayArea_908BAECB_9FC8_6395_4194_3FE3668870E0","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"},{"frameDuration":62,"rowCount":1,"finalFrame":"first","colCount":9,"class":"AnimatedImageResource","frameCount":9,"id":"AnimatedImageResource_8F00E8F1_9FD8_6F75_41D9_4F3A31305B5B","levels":[{"url":"media/res_90F1FE37_9FC9_E2FD_41C8_6280A340BFE2_0.png","class":"ImageResourceLevel","height":60,"width":990}]},{"id":"HotspotPanoramaOverlayArea_90B4C6BD_9FD8_A3ED_41D0_EE6ED1F49183","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any"},{"frameDuration":62,"rowCount":1,"finalFrame":"first","colCount":9,"class":"AnimatedImageResource","frameCount":9,"id":"AnimatedImageResource_8F03F8F2_9FD8_6F77_41D5_36F908A72779","levels":[{"url":"media/res_90F1FE37_9FC9_E2FD_41C8_6280A340BFE2_0.png","class":"ImageResourceLevel","height":60,"width":990}]},{"id":"HotspotPanoramaOverlayArea_91B12F3A_9FC8_A2F7_41B2_33BA52F0D5F9","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0)","mapColor":"any"},{"frameDuration":62,"rowCount":1,"finalFrame":"first","colCount":9,"class":"AnimatedImageResource","frameCount":9,"id":"AnimatedImageResource_8F0018F1_9FD8_6F75_41D6_737BDC7374BD","levels":[{"url":"media/res_90F1FE37_9FC9_E2FD_41C8_6280A340BFE2_0.png","class":"ImageResourceLevel","height":60,"width":990}]},{"id":"HotspotPanoramaOverlayArea_9150EDFD_9FC9_A16D_4180_2B1E0377CD88","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","mapColor":"any"},{"frameDuration":62,"rowCount":1,"finalFrame":"first","colCount":9,"class":"AnimatedImageResource","frameCount":9,"id":"AnimatedImageResource_8F0048F1_9FD8_6F75_41CC_A7268853880B","levels":[{"url":"media/res_90F1FE37_9FC9_E2FD_41C8_6280A340BFE2_0.png","class":"ImageResourceLevel","height":60,"width":990}]},{"id":"HotspotPanoramaOverlayArea_90B4D6BD_9FD8_A3ED_41C6_C7B51AE0BD9C","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","mapColor":"any"},{"frameDuration":62,"rowCount":1,"finalFrame":"first","colCount":9,"class":"AnimatedImageResource","frameCount":9,"id":"AnimatedImageResource_8F0388F1_9FD8_6F75_41DC_96CF2FF43533","levels":[{"url":"media/res_90F1FE37_9FC9_E2FD_41C8_6280A340BFE2_0.png","class":"ImageResourceLevel","height":60,"width":990}]},{"id":"HotspotPanoramaOverlayArea_919DAA27_9FC8_A29D_41CE_F3BF686B9488","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)","mapColor":"any"},{"frameDuration":62,"rowCount":1,"finalFrame":"first","colCount":9,"class":"AnimatedImageResource","frameCount":9,"id":"AnimatedImageResource_8F03B8F2_9FD8_6F77_41D6_8AA370BD7CC6","levels":[{"url":"media/res_90F1FE37_9FC9_E2FD_41C8_6280A340BFE2_0.png","class":"ImageResourceLevel","height":60,"width":990}]}],"data":{"history":{},"textToSpeechConfig":{"speechOnInfoWindow":false,"pitch":1,"volume":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"rate":1},"locales":{"en":"locale/en.txt"},"name":"Player485","defaultLocale":"en"},"propagateClick":false,"width":"100%","scrollBarColor":"#000000","children":["this.MainViewer"],"scripts":{"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"showPopupImage":TDV.Tour.Script.showPopupImage,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"toggleVR":TDV.Tour.Script.toggleVR,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"translate":TDV.Tour.Script.translate,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"historyGoBack":TDV.Tour.Script.historyGoBack,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"downloadFile":TDV.Tour.Script.downloadFile,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"clone":TDV.Tour.Script.clone,"resumePlayers":TDV.Tour.Script.resumePlayers,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaByName":TDV.Tour.Script.getMediaByName,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"init":TDV.Tour.Script.init,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getKey":TDV.Tour.Script.getKey,"enableVR":TDV.Tour.Script.enableVR,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getOverlays":TDV.Tour.Script.getOverlays,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"disableVR":TDV.Tour.Script.disableVR,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setLocale":TDV.Tour.Script.setLocale,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"createTween":TDV.Tour.Script.createTween,"quizStart":TDV.Tour.Script.quizStart,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"registerKey":TDV.Tour.Script.registerKey,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startMeasurement":TDV.Tour.Script.startMeasurement,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"isPanorama":TDV.Tour.Script.isPanorama,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getComponentByName":TDV.Tour.Script.getComponentByName,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"cloneBindings":TDV.Tour.Script.cloneBindings,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizFinish":TDV.Tour.Script.quizFinish,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"existsKey":TDV.Tour.Script.existsKey,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"executeJS":TDV.Tour.Script.executeJS,"textToSpeech":TDV.Tour.Script.textToSpeech,"showWindow":TDV.Tour.Script.showWindow,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"mixObject":TDV.Tour.Script.mixObject,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"openLink":TDV.Tour.Script.openLink,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setValue":TDV.Tour.Script.setValue,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPixels":TDV.Tour.Script.getPixels,"playAudioList":TDV.Tour.Script.playAudioList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively},"backgroundColorRatios":[0],"scrollBarMargin":2,"minHeight":0,"defaultMenu":["fullscreen","mute","rotation"],"minWidth":0,"height":"100%","layout":"absolute","backgroundColor":["#FFFFFF"],"gap":10,"id":"rootPlayer"};
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
//Generated with v2024.0.4, Fri Oct 18 2024