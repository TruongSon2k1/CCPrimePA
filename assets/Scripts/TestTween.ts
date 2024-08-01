const {ccclass, property} = cc._decorator;



@ccclass
export default class TestTween extends cc.Component {

    @property(cc.Node)
    v: cc.Node = null
    @property()
    get s() { return false }
    set s(v) {
        if(v) {
            this.node.setPosition(this.v)
        }
    }
    private _node: cc.Node = null

    protected onLoad(): void {
        console.log(this.node.getWorldPosition().toString())
        console.log(this.node.getWorldPosition(cc.v2()).toString())
        console.log(this.node.getWorldPosition(cc.v3()).toString())

    }
}

