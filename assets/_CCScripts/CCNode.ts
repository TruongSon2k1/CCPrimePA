
const CCSetPosition = cc.Node.prototype.setPosition


cc.Node.prototype.getWorldPosition = function(out?: cc.Vec3 | cc.Vec2): any  {
    const wpos = this.convertToWorldSpaceAR(cc.v3());
    if(out !== undefined) {
        out.set(wpos);
        return out;
    }

    return wpos;

}

cc.Node.prototype.setPosition = function(target: any, y?: any, z?: any) {

    if(target instanceof cc.Node) {
        if(target === this) return;
        const wpos = target.getWorldPosition();
        CCSetPosition.call(this, wpos, true);

    } else {
        if(y == true) {
            if(!this._parent) return;
            const lpos = this._parent.convertToNodeSpaceAR(target);
            CCSetPosition.call(this, lpos)
            return;
        }
        CCSetPosition.call(this, target, y, z)
    }
}
