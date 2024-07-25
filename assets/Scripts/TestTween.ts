const {ccclass, property} = cc._decorator;

@ccclass('X')
class X extends Editor.Gizmo {
    
}

@ccclass
export default class TestTween extends cc.Component {
    @property(X)
    protected f: X = null

    @property()
    get x() { return false }
    set x(v) {
        if(v) {
        }
    }
}

