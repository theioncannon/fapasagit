(function () {
    var a = {};
    function trans(c, d) {
        var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        a[e[0x0]] = e;
        return '';
    }
    function regTextVar(c, d) {
        var e = ![];
        d = d['toLowerCase']();
        var f = function () {
            var o = this['get']('data');
            o['updateText'](o['translateObjs'][c]);
        };
        var g = function (o) {
            var p = o['data']['nextSelectedIndex'];
            if (p >= 0x0) {
                var q = o['source']['get']('items')[p];
                var r = function () {
                    q['unbind']('start', r, this);
                    f['call'](this);
                };
                q['bind']('start', r, this);
            } else
                f['call'](this);
        };
        var h = function (o) {
            return function (p) {
                if (o in p) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var i = function (o, p) {
            return function (q, r) {
                if (o == q && p in r) {
                    f['call'](this);
                }
            }['bind'](this);
        };
        var j = function (o, p, q) {
            for (var r = 0x0; r < o['length']; ++r) {
                var s = o[r];
                var t = s['get']('selectedIndex');
                if (t >= 0x0) {
                    var u = p['split']('.');
                    var v = s['get']('items')[t];
                    if (q !== undefined && !q['call'](this, v))
                        continue;
                    for (var w = 0x0; w < u['length']; ++w) {
                        if (v == undefined)
                            return '';
                        v = 'get' in v ? v['get'](u[w]) : v[u[w]];
                    }
                    return v;
                }
            }
            return '';
        };
        var k = function (o) {
            var p = o['get']('player');
            return p !== undefined && p['get']('viewerArea') == this['getMainViewer']();
        };
        switch (d) {
        case 'title':
        case 'subtitle':
            var m = function () {
                switch (d) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (m) {
                return function () {
                    var o = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!e) {
                        for (var p = 0x0; p < o['length']; ++p) {
                            o[p]['bind']('changing', g, this);
                        }
                        e = !![];
                    }
                    return j['call'](this, o, m, k);
                };
            }
            break;
        default:
            if (d['startsWith']('quiz.') && 'Quiz' in TDV) {
                var n = undefined;
                var m = function () {
                    switch (d) {
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
                        var o = /quiz\.([\w_]+)\.(.+)/['exec'](d);
                        if (o) {
                            n = o[0x1];
                            switch ('quiz.' + o[0x2]) {
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
                if (m) {
                    return function () {
                        var o = this['get']('data')['quiz'];
                        if (o) {
                            if (!e) {
                                if (n != undefined)
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, s[u]['id'], m), this);
                                        }
                                    } else {
                                        o['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], i['call'](this, n, m), this);
                                    }
                                else
                                    o['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], h['call'](this, m), this);
                                e = !![];
                            }
                            try {
                                var x = 0x0;
                                if (n != undefined) {
                                    if (n == 'global') {
                                        var q = this['get']('data')['quizConfig'];
                                        var s = q['objectives'];
                                        for (var u = 0x0, w = s['length']; u < w; ++u) {
                                            x += o['getObjective'](s[u]['id'], m);
                                        }
                                    } else {
                                        x = o['getObjective'](n, m);
                                    }
                                } else {
                                    x = o['get'](m);
                                    if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        x += 0x1;
                                }
                                return x;
                            } catch (y) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, c) {
        var d = {};
        d['player'] = player;
        d['playList'] = c;
        function e(h) {
            for (var j = 0x0; j < h['length']; ++j) {
                var k = h[j];
                if ('id' in k)
                    player[k['id']] = k;
            }
        }
        if (d['questions']) {
            e(d['questions']);
            for (var f = 0x0; f < d['questions']['length']; ++f) {
                var g = d['questions'][f];
                e(g['options']);
            }
        }
        if (d['objectives']) {
            e(d['objectives']);
        }
        if (d['califications']) {
            e(d['califications']);
        }
        if (d['score']) {
            player[d['score']['id']] = d['score'];
        }
        if (d['question']) {
            player[d['question']['id']] = d['question'];
        }
        if (d['timeout']) {
            player[d['timeout']['id']] = d['timeout'];
        }
        player['get']('data')['translateObjs'] = a;
        return d;
    }
    var b = {"scrollBarWidth":10,"paddingBottom":0,"id":"rootPlayer","gap":10,"width":"100%","mediaActivationMode":"window","paddingLeft":0,"start":"this.init()","verticalAlign":"top","propagateClick":false,"children":["this.MainViewer","this.Container_70320AAC_7FB8_99B0_41C4_1D4E6A0CA184"],"left":577.55,"desktopMipmappingEnabled":false,"defaultVRPointer":"laser","vrPolyfillScale":0.75,"toolTipHorizontalAlign":"center","horizontalAlign":"left","borderSize":0,"paddingRight":0,"borderRadius":0,"mobileMipmappingEnabled":false,"layout":"absolute","scrollBarOpacity":0.5,"contentOpaque":false,"backgroundColor":["#FFFFFF"],"definitions": [{"aaEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","gyroscopeEnabled":true,"mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","buttonPlayRight":"this.IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2","buttonPlayLeft":"this.IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80","zoomEnabled":true,"buttonRestart":"this.IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380","buttonPause":"this.IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D"},{"scrollBarWidth":10,"children":["this.IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380","this.IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80","this.Container_70332AAB_7FB8_99B0_416B_28B9EBC281AC","this.IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2","this.IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC"],"paddingBottom":0,"id":"Container_70320AAC_7FB8_99B0_41C4_1D4E6A0CA184","gap":4,"width":252,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"right":"0%","paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"borderRadius":0,"layout":"horizontal","contentOpaque":false,"height":89,"scrollBarOpacity":0.5,"bottom":"0%","minHeight":20,"minWidth":20,"shadow":false,"overflow":"hidden","class":"Container","scrollBarColor":"#000000","scrollBarVisible":"rollOver","backgroundOpacity":0,"paddingTop":0,"scrollBarMargin":2,"data":{"name":"Container27661"}},{"paddingBottom":0,"id":"IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380","width":40,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"iconURL":"skin/IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380.png","paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380_rollover.png","borderRadius":0,"mode":"push","height":40,"minHeight":0,"minWidth":0,"shadow":false,"transparencyActive":true,"pressedIconURL":"skin/IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380_pressed.png","class":"IconButton","data":{"name":"Button27663"},"backgroundOpacity":0,"paddingTop":0,"cursor":"hand"},{"paddingBottom":0,"id":"IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2","width":40,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"iconURL":"skin/IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2.png","paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2_rollover.png","borderRadius":0,"mode":"push","height":40,"minHeight":0,"minWidth":0,"shadow":false,"transparencyActive":true,"pressedIconURL":"skin/IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2_pressed.png","class":"IconButton","data":{"name":"Button27671"},"backgroundOpacity":0,"paddingTop":0,"cursor":"hand"},{"initialPosition":{"hfov":120,"class":"RotationalCameraPosition","yaw":27.79,"pitch":21.07},"class":"RotationalCamera","hoverFactor":0,"manualRotationSpeed":1800,"automaticZoomSpeed":10,"id":"media_8CF5BE1D_802D_F104_41DD_C0791D325EFC_camera","automaticRotationSpeed":10,"manualZoomSpeed":2},{"children":["this.IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D"],"paddingBottom":0,"id":"Container_70332AAB_7FB8_99B0_416B_28B9EBC281AC","gap":4,"width":40,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"borderRadius":0,"layout":"vertical","scrollBarOpacity":0.5,"contentOpaque":false,"minHeight":20,"minWidth":20,"height":"100%","shadow":false,"scrollBarMargin":2,"overflow":"hidden","class":"Container","scrollBarVisible":"rollOver","scrollBarColor":"#000000","backgroundOpacity":0,"paddingTop":0,"scrollBarWidth":10,"data":{"name":"Container27666"}},{"paddingBottom":0,"id":"IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80","width":40,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"iconURL":"skin/IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80.png","paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80_rollover.png","borderRadius":0,"mode":"push","height":40,"minHeight":0,"minWidth":0,"shadow":false,"transparencyActive":true,"pressedIconURL":"skin/IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80_pressed.png","class":"IconButton","data":{"name":"Button27664"},"backgroundOpacity":0,"paddingTop":0,"cursor":"hand"},{"paddingBottom":0,"id":"IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC","width":40,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"iconURL":"skin/IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC.png","paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC_rollover.png","borderRadius":0,"mode":"toggle","height":40,"minHeight":0,"minWidth":0,"shadow":false,"transparencyActive":true,"pressedIconURL":"skin/IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC_pressed.png","class":"IconButton","data":{"name":"Button27672"},"backgroundOpacity":0,"paddingTop":0,"cursor":"hand"},{"paddingBottom":0,"id":"IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D","width":40,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"iconURL":"skin/IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D.png","paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D_rollover.png","borderRadius":0,"mode":"toggle","height":40,"minHeight":0,"minWidth":0,"shadow":false,"transparencyActive":true,"pressedIconURL":"skin/IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D_pressed.png","class":"IconButton","data":{"name":"Button27668"},"backgroundOpacity":0,"paddingTop":0,"cursor":"hand"},{"progressLeft":0,"subtitlesTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"id":"MainViewer","playbackBarHeadBorderRadius":0,"width":"100%","playbackBarProgressOpacity":1,"data":{"name":"Main Viewer"},"subtitlesFontSize":"3vmin","propagateClick":false,"subtitlesPaddingBottom":5,"vrPointerSelectionTime":2000,"vrPointerColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","toolTipShadowHorizontalLength":0,"playbackBarBorderSize":0,"playbackBarBackgroundOpacity":1,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","toolTipHorizontalAlign":"center","subtitlesTextDecoration":"none","toolTipFontStyle":"normal","borderSize":0,"toolTipBorderSize":1,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowColor":"#000000","subtitlesFontFamily":"Arial","toolTipPaddingTop":4,"subtitlesPaddingTop":5,"playbackBarLeft":0,"subtitlesShadow":false,"playbackBarHeadHeight":15,"playbackBarHeadShadowBlurRadius":3,"toolTipFontWeight":"normal","subtitlesOpacity":1,"displayTooltipInTouchScreens":true,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesGap":0,"height":"100%","playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"shadow":false,"playbackBarHeadShadow":true,"subtitlesHorizontalAlign":"center","subtitlesBackgroundColor":"#000000","playbackBarHeadOpacity":1,"toolTipBackgroundColor":"#F6F6F6","toolTipTextShadowOpacity":0,"paddingTop":0,"subtitlesTextShadowOpacity":1,"playbackBarOpacity":1,"subtitlesBorderSize":0,"subtitlesVerticalAlign":"bottom","surfaceReticleOpacity":0.6,"paddingBottom":0,"transitionMode":"blending","toolTipOpacity":1,"toolTipBorderColor":"#767676","progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontFamily":"Arial","doubleClickAction":"toggle_fullscreen","subtitlesFontColor":"#FFFFFF","toolTipPaddingBottom":4,"translationTransitionDuration":1000,"playbackBarBottom":5,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"progressOpacity":1,"progressRight":0,"paddingLeft":0,"progressBarBackgroundColorDirection":"vertical","playbackBarProgressBackgroundColorDirection":"vertical","toolTipPaddingRight":6,"progressBarBorderColor":"#000000","progressBackgroundOpacity":1,"subtitlesFontWeight":"normal","progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowHorizontalLength":0,"toolTipShadowBlurRadius":3,"paddingRight":0,"progressBackgroundColorDirection":"vertical","playbackBarHeight":10,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"subtitlesBottom":50,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesPaddingLeft":5,"toolTipShadowSpread":0,"subtitlesPaddingRight":5,"toolTipShadowVerticalLength":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","progressBorderColor":"#000000","playbackBarProgressBorderSize":0,"borderRadius":0,"toolTipFontSize":"1.11vmin","playbackBarHeadShadowVerticalLength":0,"toolTipDisplayTime":600,"toolTipShadowColor":"#333333","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderRadius":0,"progressBarOpacity":1,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"surfaceReticleSelectionOpacity":1,"playbackBarHeadShadowOpacity":0.7,"progressBottom":0,"vrPointerSelectionColor":"#FF6600","minHeight":50,"toolTipFontColor":"#606060","progressBorderSize":0,"minWidth":100,"toolTipPaddingLeft":6,"firstTransitionDuration":0,"transitionDuration":500,"subtitlesEnabled":true,"progressBarBorderSize":0,"progressHeight":10,"progressBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","toolTipBorderRadius":3,"class":"ViewerArea","playbackBarBorderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","toolTipShadowOpacity":1,"displayTooltipInSurfaceSelection":true,"progressBorderRadius":0,"subtitlesTop":0},{"overlays":["this.overlay_8CF5AE1D_802D_F104_41C7_4FF0A97B4397"],"hfovMin":60,"id":"media_8CF5BE1D_802D_F104_41DD_C0791D325EFC","label":trans('media_8CF5BE1D_802D_F104_41DD_C0791D325EFC.label'),"partial":false,"hfovMax":140,"vfov":180,"thumbnailUrl":"media/media_8CF5BE1D_802D_F104_41DD_C0791D325EFC_t.jpg","pitch":0,"class":"Video360","loop":true,"hfov":360,"data":{"label":"CONSIV 1"},"video":[{"width":3840,"posterURL":"media/media_8CF5BE1D_802D_F104_41DD_C0791D325EFC_poster.jpg","class":"Video360Resource","framerate":25,"type":"application/x-mpegurl","url":"media/media_8CF5BE1D_802D_F104_41DD_C0791D325EFC.m3u8","height":1920},{"width":3840,"posterURL":"media/media_8CF5BE1D_802D_F104_41DD_C0791D325EFC_poster.jpg","class":"Video360Resource","bitrate":4340,"framerate":25,"type":"video/mp4","url":"media/media_8CF5BE1D_802D_F104_41DD_C0791D325EFC.mp4","height":1920}]},{"items":[{"media":"this.media_8CF5BE1D_802D_F104_41DD_C0791D325EFC","end":"this.trigger('tourEnded')","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","camera":"this.media_8CF5BE1D_802D_F104_41DD_C0791D325EFC_camera","player":"this.MainViewerPanoramaPlayer","class":"Video360PlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_719337F2_7FBB_B790_41B6_FB658DE1FB4A"],"useHandCursor":true,"items":[{"playbackPositions":[{"roll":0,"class":"PanoramaOverlayPlaybackPosition","timestamp":0,"pitch":1.54,"hfov":10.98,"yaw":17.07,"opacity":0},{"roll":0,"class":"PanoramaOverlayPlaybackPosition","timestamp":102,"pitch":1.54,"hfov":10.98,"yaw":17.07,"opacity":0},{"roll":0,"class":"PanoramaOverlayPlaybackPosition","timestamp":102,"pitch":1.54,"hfov":10.98,"yaw":17.07,"opacity":0},{"roll":0,"class":"PanoramaOverlayPlaybackPosition","timestamp":103.2,"pitch":1.54,"hfov":10.98,"yaw":17.07,"opacity":1}],"verticalAlign":"middle","image":"this.AnimatedImageResource_8E4B8AC4_803C_1105_41B0_CF68F4F7062C","pitch":0,"yaw":0,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Info Red 02"},"distance":100}],"id":"overlay_8CF5AE1D_802D_F104_41C7_4FF0A97B4397","data":{"label":"Info Red 02"},"enabledInCardboard":true},{"rollOver":"this.MainViewerPanoramaPlayer.pause()","mapColor":"any","click":"this.openLink(this.translate('LinkBehaviour_6F4A7AA3_7FA9_99B0_41C4_5BEDCAD9BD58.source'), '_blank')","id":"HotspotPanoramaOverlayArea_719337F2_7FBB_B790_41B6_FB658DE1FB4A","rollOut":"this.MainViewerPanoramaPlayer.play()","class":"HotspotPanoramaOverlayArea"},{"class":"AnimatedImageResource","colCount":4,"frameDuration":41,"rowCount":6,"frameCount":24,"id":"AnimatedImageResource_8E4B8AC4_803C_1105_41B0_CF68F4F7062C","levels":[{"url":"media/res_724EEA94_7FB8_B990_41DF_A4C36AAE7D5D_0.png","width":468,"class":"ImageResourceLevel","height":702}]}],"minHeight":20,"backgroundColorDirection":"vertical","backgroundColorRatios":[0],"height":"100%","minWidth":20,"scripts":{"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaByName":TDV.Tour.Script.getMediaByName,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showWindow":TDV.Tour.Script.showWindow,"unregisterKey":TDV.Tour.Script.unregisterKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"clone":TDV.Tour.Script.clone,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setValue":TDV.Tour.Script.setValue,"initQuiz":TDV.Tour.Script.initQuiz,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getPixels":TDV.Tour.Script.getPixels,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"init":TDV.Tour.Script.init,"setLocale":TDV.Tour.Script.setLocale,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getKey":TDV.Tour.Script.getKey,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizStart":TDV.Tour.Script.quizStart,"existsKey":TDV.Tour.Script.existsKey,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"mixObject":TDV.Tour.Script.mixObject,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"quizFinish":TDV.Tour.Script.quizFinish,"historyGoBack":TDV.Tour.Script.historyGoBack,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"openLink":TDV.Tour.Script.openLink,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"cloneCamera":TDV.Tour.Script.cloneCamera,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"historyGoForward":TDV.Tour.Script.historyGoForward,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"registerKey":TDV.Tour.Script.registerKey,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"translate":TDV.Tour.Script.translate,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"showPopupImage":TDV.Tour.Script.showPopupImage,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getComponentByName":TDV.Tour.Script.getComponentByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio},"overflow":"hidden","shadow":false,"scrollBarColor":"#000000","buttonToggleMute":"this.IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC","scrollBarVisible":"rollOver","mouseWheelEnabled":true,"backgroundOpacity":1,"paddingTop":0,"class":"Player","backgroundPreloadEnabled":true,"scrollBarMargin":2,"data":{"textToSpeechConfig":{"speechOnQuizQuestion":false,"pitch":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1,"volume":1},"name":"Player520","defaultLocale":"en","locales":{"en":"locale/en.txt"}},"downloadEnabled":false};
    if (b['data'] == undefined)
        b['data'] = {};
    b['data']['translateObjs'] = a;
    b['data']['history'] = {};
    b['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](b);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.1.5.js.map
//Generated with v2021.1.5, Wed Aug 25 2021
//