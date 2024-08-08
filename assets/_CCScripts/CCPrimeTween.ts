
class CCPrimeTween<T> extends cc.Tween<T> {

    private _is_executing: boolean = false

    start(): CCPrimeTween<T> {
        super.start();
        this._is_executing = true;
        return this;
    }
}

cc.PrimeTween = CCPrimeTween
