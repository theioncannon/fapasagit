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
    var b = {"scrollBarWidth":10,"paddingBottom":0,"id":"rootPlayer","gap":10,"width":"100%","mediaActivationMode":"window","paddingLeft":0,"start":"this.init()","propagateClick":false,"children":["this.MainViewer","this.Container_70320AAC_7FB8_99B0_41C4_1D4E6A0CA184"],"left":577.55,"verticalAlign":"top","defaultVRPointer":"laser","vrPolyfillScale":0.75,"toolTipHorizontalAlign":"center","horizontalAlign":"left","borderSize":0,"desktopMipmappingEnabled":false,"paddingRight":0,"mobileMipmappingEnabled":false,"height":"100%","layout":"absolute","scrollBarOpacity":0.5,"contentOpaque":false,"borderRadius":0,"definitions": [{"paddingBottom":0,"id":"IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80","width":40,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"iconURL":"skin/IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80.png","paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80_rollover.png","borderRadius":0,"mode":"push","height":40,"minHeight":0,"minWidth":0,"shadow":false,"transparencyActive":true,"pressedIconURL":"skin/IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80_pressed.png","class":"IconButton","data":{"name":"Button27664"},"backgroundOpacity":0,"paddingTop":0,"cursor":"hand"},{"initialPosition":{"hfov":120,"class":"RotationalCameraPosition","yaw":27.79,"pitch":21.07},"class":"RotationalCamera","hoverFactor":0,"manualRotationSpeed":1800,"automaticZoomSpeed":10,"id":"media_928BDA59_806B_7890_41D8_CDDBFB0FAF08_camera","automaticRotationSpeed":10,"manualZoomSpeed":2},{"overlays":["this.overlay_928BBA59_806B_7890_41D6_2C86C544E0E1"],"hfovMin":60,"id":"media_928BDA59_806B_7890_41D8_CDDBFB0FAF08","label":trans('media_928BDA59_806B_7890_41D8_CDDBFB0FAF08.label'),"partial":false,"hfovMax":140,"vfov":180,"thumbnailUrl":"media/media_928BDA59_806B_7890_41D8_CDDBFB0FAF08_t.jpg","pitch":0,"class":"Video360","loop":false,"hfov":360,"data":{"label":"CONSIV 1"},"video":[{"width":3840,"posterURL":"media/media_928BDA59_806B_7890_41D8_CDDBFB0FAF08_poster.jpg","class":"Video360Resource","bitrate":7982,"framerate":25,"type":"application/x-mpegurl","url":"media/media_928BDA59_806B_7890_41D8_CDDBFB0FAF08.m3u8","height":1920},{"width":3840,"posterURL":"media/media_928BDA59_806B_7890_41D8_CDDBFB0FAF08_poster.jpg","class":"Video360Resource","bitrate":7982,"framerate":25,"type":"video/mp4","url":"media/media_928BDA59_806B_7890_41D8_CDDBFB0FAF08.mp4","height":1920}]},{"paddingBottom":0,"id":"IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380","width":40,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"iconURL":"skin/IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380.png","paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380_rollover.png","borderRadius":0,"mode":"push","height":40,"minHeight":0,"minWidth":0,"shadow":false,"transparencyActive":true,"pressedIconURL":"skin/IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380_pressed.png","class":"IconButton","data":{"name":"Button27663"},"backgroundOpacity":0,"paddingTop":0,"cursor":"hand"},{"paddingBottom":0,"id":"IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2","width":40,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"iconURL":"skin/IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2.png","paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2_rollover.png","borderRadius":0,"mode":"push","height":40,"minHeight":0,"minWidth":0,"shadow":false,"transparencyActive":true,"pressedIconURL":"skin/IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2_pressed.png","class":"IconButton","data":{"name":"Button27671"},"backgroundOpacity":0,"paddingTop":0,"cursor":"hand"},{"paddingBottom":0,"id":"IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D","width":40,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"iconURL":"skin/IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D.png","paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D_rollover.png","borderRadius":0,"mode":"toggle","height":40,"minHeight":0,"minWidth":0,"shadow":false,"transparencyActive":true,"pressedIconURL":"skin/IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D_pressed.png","class":"IconButton","data":{"name":"Button27668"},"backgroundOpacity":0,"paddingTop":0,"cursor":"hand"},{"children":["this.IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D"],"paddingBottom":0,"id":"Container_70332AAB_7FB8_99B0_416B_28B9EBC281AC","gap":4,"width":40,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"borderRadius":0,"layout":"vertical","scrollBarOpacity":0.5,"contentOpaque":false,"minHeight":20,"minWidth":20,"height":"100%","shadow":false,"scrollBarMargin":2,"overflow":"hidden","class":"Container","scrollBarVisible":"rollOver","scrollBarColor":"#000000","backgroundOpacity":0,"paddingTop":0,"scrollBarWidth":10,"data":{"name":"Container27666"}},{"aaEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","surfaceSelectionEnabled":false,"gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","buttonPlayRight":"this.IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2","buttonPlayLeft":"this.IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80","zoomEnabled":true,"buttonRestart":"this.IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380","buttonPause":"this.IconButton_7033FAAB_7FB8_99B0_41C7_FE166791A51D"},{"progressLeft":0,"subtitlesTextShadowColor":"#000000","id":"MainViewer","playbackBarHeadBorderRadius":0,"width":"100%","playbackBarProgressOpacity":1,"data":{"name":"Main Viewer"},"subtitlesFontSize":"3vmin","propagateClick":false,"subtitlesPaddingBottom":5,"vrPointerSelectionTime":2000,"subtitlesTextShadowVerticalLength":1,"vrPointerColor":"#FFFFFF","playbackBarHeadBorderColor":"#000000","toolTipShadowHorizontalLength":0,"playbackBarBorderSize":0,"playbackBarBackgroundOpacity":1,"subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","toolTipHorizontalAlign":"center","subtitlesTextDecoration":"none","toolTipFontStyle":"normal","borderSize":0,"toolTipBorderSize":1,"subtitlesTextShadowBlurRadius":0,"toolTipTextShadowColor":"#000000","subtitlesFontFamily":"Arial","toolTipPaddingTop":4,"subtitlesPaddingTop":5,"playbackBarLeft":0,"subtitlesShadow":false,"playbackBarHeadHeight":15,"playbackBarHeadShadowBlurRadius":3,"toolTipFontWeight":"normal","subtitlesOpacity":1,"displayTooltipInTouchScreens":true,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesGap":0,"height":"100%","playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"shadow":false,"playbackBarHeadShadow":true,"subtitlesHorizontalAlign":"center","subtitlesBackgroundColor":"#000000","playbackBarHeadOpacity":1,"toolTipBackgroundColor":"#F6F6F6","toolTipTextShadowOpacity":0,"paddingTop":0,"subtitlesTextShadowOpacity":1,"playbackBarOpacity":1,"subtitlesBorderSize":0,"subtitlesVerticalAlign":"bottom","surfaceReticleOpacity":0.6,"paddingBottom":0,"transitionMode":"blending","toolTipOpacity":1,"toolTipBorderColor":"#767676","progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipFontFamily":"Arial","doubleClickAction":"toggle_fullscreen","subtitlesFontColor":"#FFFFFF","toolTipPaddingBottom":4,"translationTransitionDuration":1000,"playbackBarBottom":5,"surfaceReticleColor":"#FFFFFF","toolTipTextShadowBlurRadius":3,"progressOpacity":1,"progressRight":0,"paddingLeft":0,"progressBarBackgroundColorDirection":"vertical","playbackBarProgressBackgroundColorDirection":"vertical","toolTipPaddingRight":6,"progressBarBorderColor":"#000000","progressBackgroundOpacity":1,"subtitlesFontWeight":"normal","progressBarBackgroundColorRatios":[0],"toolTipShadowBlurRadius":3,"subtitlesTextShadowHorizontalLength":1,"paddingRight":0,"progressBackgroundColorDirection":"vertical","playbackBarHeight":10,"playbackBarHeadWidth":6,"subtitlesBottom":50,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesPaddingLeft":5,"toolTipShadowSpread":0,"subtitlesPaddingRight":5,"toolTipShadowVerticalLength":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarBackgroundColorDirection":"vertical","progressBorderColor":"#000000","playbackBarProgressBorderSize":0,"borderRadius":0,"toolTipFontSize":"1.11vmin","toolTipDisplayTime":600,"toolTipShadowColor":"#333333","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"playbackBarProgressBorderRadius":0,"progressBarOpacity":1,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"surfaceReticleSelectionOpacity":1,"playbackBarHeadShadowOpacity":0.7,"progressBottom":0,"playbackBarHeadShadowHorizontalLength":0,"vrPointerSelectionColor":"#FF6600","minHeight":50,"toolTipFontColor":"#606060","progressBorderSize":0,"minWidth":100,"toolTipPaddingLeft":6,"firstTransitionDuration":0,"transitionDuration":500,"subtitlesEnabled":true,"progressBarBorderSize":0,"progressHeight":10,"progressBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","toolTipBorderRadius":3,"class":"ViewerArea","playbackBarBorderRadius":0,"playbackBarHeadShadowVerticalLength":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","toolTipShadowOpacity":1,"displayTooltipInSurfaceSelection":true,"progressBorderRadius":0,"subtitlesTop":0},{"scrollBarWidth":10,"children":["this.IconButton_70336AAB_7FB8_99B0_41DA_A6CD1E6E5380","this.IconButton_70334AAB_7FB8_99B0_41C7_7BFFABB0FE80","this.Container_70332AAB_7FB8_99B0_416B_28B9EBC281AC","this.IconButton_70325AAB_7FB8_99B0_41D4_AFC76AADF9C2","this.IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC"],"paddingBottom":0,"id":"Container_70320AAC_7FB8_99B0_41C4_1D4E6A0CA184","gap":4,"width":252,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"right":"0%","paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"borderRadius":0,"layout":"horizontal","contentOpaque":false,"height":89,"scrollBarOpacity":0.5,"bottom":"0%","minHeight":20,"minWidth":20,"shadow":false,"overflow":"hidden","class":"Container","scrollBarColor":"#000000","scrollBarVisible":"rollOver","backgroundOpacity":0,"paddingTop":0,"scrollBarMargin":2,"data":{"name":"Container27661"}},{"paddingBottom":0,"id":"IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC","width":40,"paddingLeft":0,"verticalAlign":"middle","propagateClick":false,"iconURL":"skin/IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC.png","paddingRight":0,"toolTipHorizontalAlign":"center","horizontalAlign":"center","borderSize":0,"rollOverIconURL":"skin/IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC_rollover.png","borderRadius":0,"mode":"toggle","height":40,"minHeight":0,"minWidth":0,"shadow":false,"transparencyActive":true,"pressedIconURL":"skin/IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC_pressed.png","class":"IconButton","data":{"name":"Button27672"},"backgroundOpacity":0,"paddingTop":0,"cursor":"hand"},{"items":[{"media":"this.media_928BDA59_806B_7890_41D8_CDDBFB0FAF08","end":"this.trigger('tourEnded')","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","camera":"this.media_928BDA59_806B_7890_41D8_CDDBFB0FAF08_camera","player":"this.MainViewerPanoramaPlayer","class":"Video360PlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"maps":[],"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_719337F2_7FBB_B790_41B6_FB658DE1FB4A"],"useHandCursor":true,"items":[{"playbackPositions":[{"roll":0,"class":"PanoramaOverlayPlaybackPosition","timestamp":0,"pitch":1.54,"hfov":10.98,"yaw":17.07,"opacity":0},{"roll":0,"class":"PanoramaOverlayPlaybackPosition","timestamp":102,"pitch":1.54,"hfov":10.98,"yaw":17.07,"opacity":0},{"roll":0,"class":"PanoramaOverlayPlaybackPosition","timestamp":102,"pitch":1.54,"hfov":10.98,"yaw":17.07,"opacity":0},{"roll":0,"class":"PanoramaOverlayPlaybackPosition","timestamp":103.2,"pitch":1.54,"hfov":10.98,"yaw":17.07,"opacity":1}],"verticalAlign":"middle","image":"this.AnimatedImageResource_91BF42C4_8078_89F0_41AE_6CE32A1A1B2F","pitch":0,"yaw":0,"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Info Red 02"},"distance":100}],"id":"overlay_928BBA59_806B_7890_41D6_2C86C544E0E1","data":{"label":"Info Red 02"},"enabledInCardboard":true},{"rollOver":"this.MainViewerPanoramaPlayer.pause()","mapColor":"any","click":"this.openLink(this.translate('LinkBehaviour_6F4A7AA3_7FA9_99B0_41C4_5BEDCAD9BD58.source'), '_blank')","id":"HotspotPanoramaOverlayArea_719337F2_7FBB_B790_41B6_FB658DE1FB4A","rollOut":"this.MainViewerPanoramaPlayer.play()","class":"HotspotPanoramaOverlayArea"},{"class":"AnimatedImageResource","colCount":4,"frameDuration":41,"rowCount":6,"frameCount":24,"id":"AnimatedImageResource_91BF42C4_8078_89F0_41AE_6CE32A1A1B2F","levels":[{"url":"media/res_724EEA94_7FB8_B990_41DF_A4C36AAE7D5D_0.png","width":468,"class":"ImageResourceLevel","height":702}]}],"minHeight":20,"backgroundColorDirection":"vertical","backgroundColorRatios":[0],"backgroundColor":["#FFFFFF"],"minWidth":20,"scripts":{"copyToClipboard":TDV.Tour.Script.copyToClipboard,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"historyGoForward":TDV.Tour.Script.historyGoForward,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playAudioList":TDV.Tour.Script.playAudioList,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"clone":TDV.Tour.Script.clone,"getMediaByName":TDV.Tour.Script.getMediaByName,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"shareSocial":TDV.Tour.Script.shareSocial,"initAnalytics":TDV.Tour.Script.initAnalytics,"getPixels":TDV.Tour.Script.getPixels,"setValue":TDV.Tour.Script.setValue,"cloneCamera":TDV.Tour.Script.cloneCamera,"init":TDV.Tour.Script.init,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"initQuiz":TDV.Tour.Script.initQuiz,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"registerKey":TDV.Tour.Script.registerKey,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizShowScore":TDV.Tour.Script.quizShowScore,"getKey":TDV.Tour.Script.getKey,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"mixObject":TDV.Tour.Script.mixObject,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"existsKey":TDV.Tour.Script.existsKey,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizStart":TDV.Tour.Script.quizStart,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"isPanorama":TDV.Tour.Script.isPanorama,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"openLink":TDV.Tour.Script.openLink,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showWindow":TDV.Tour.Script.showWindow,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"textToSpeech":TDV.Tour.Script.textToSpeech,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizFinish":TDV.Tour.Script.quizFinish,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getOverlays":TDV.Tour.Script.getOverlays,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setMapLocation":TDV.Tour.Script.setMapLocation,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"translate":TDV.Tour.Script.translate,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"resumePlayers":TDV.Tour.Script.resumePlayers,"historyGoBack":TDV.Tour.Script.historyGoBack,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios},"overflow":"hidden","class":"Player","shadow":false,"scrollBarColor":"#000000","buttonToggleMute":"this.IconButton_70322AAB_7FB8_99B0_41C2_B3649873BAAC","scrollBarVisible":"rollOver","mouseWheelEnabled":true,"backgroundOpacity":1,"paddingTop":0,"backgroundPreloadEnabled":true,"scrollBarMargin":2,"data":{"textToSpeechConfig":{"speechOnQuizQuestion":false,"pitch":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1,"volume":1},"name":"Player520","defaultLocale":"en","locales":{"en":"locale/en.txt"}},"downloadEnabled":false};
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