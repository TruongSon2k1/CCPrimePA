enum CountComponentType {
    Children,
    Parents,
    Both
}

//@ts-ignore
cc.CountComponentType = module.exports = CountComponentType;

cc._BaseNode.prototype.getNonNullComponent = function<T extends cc.Component>(type: cc.ClassType<T> | string) {
    let comp = this.getComponent(type);
    if(!comp) comp = this.addComponent(type);

    return comp;
}
