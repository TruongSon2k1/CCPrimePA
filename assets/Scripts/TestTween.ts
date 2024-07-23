const {ccclass, property} = cc._decorator;

@ccclass
export default class TestTween extends cc.Component {

    @property()
    get x() { return false }
    set x(v) {
        if(v) {
            const k = Object.keys(Editor)
            const v = Object.values(Editor)
            for(let i = 0; i < v.length; i ++) {
                cc.log(k[i], ">>", v[i].toString(), "\n")
            }

        }
    }


}
