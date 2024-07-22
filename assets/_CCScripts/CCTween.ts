cc.Tween.easingList = [ 'quadIn', 'quadOut', 'quadInOut',
                        'cubicIn', 'cubicOut', 'cubicInOut',
                        'quartIn', 'quartOut', 'quartInOut',
                        'quintIn', 'quintOut', 'quintInOut',
                        'sineIn', 'sineOut', 'sineInOut',
                        'expoIn', 'expoOut', 'expoInOut',
                        'circIn', 'circOut', 'circInOut',
                        'elasticIn', 'elasticOut', 'elasticInOut',
                        'backIn', 'backOut', 'backInOut',
                        'bounceIn', 'bounceOut', 'bounceInOut',
                        'smooth', 'fade', 'linear']


cc.Tween.prototype.getTarget = function() {
    return this._target;
}

