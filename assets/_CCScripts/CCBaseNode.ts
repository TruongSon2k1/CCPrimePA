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


cc._BaseNode.prototype.countComponent = function<T extends cc.Component>(type: cc.ClassType<T> | string, count_type: CountComponentType = CountComponentType.Children): number {
    let num: number = 0;

    num += this.getComponents(type).length;

    switch(count_type) {
        case CountComponentType.Children:
            for(const ret of this._children) {
                num += ret.countComponent(type, count_type);  
            }
            break;
        case CountComponentType.Parents:
            if (!!this._parent) {
                num += this._parent.countComponent(type, count_type);
            }
            break;
        case CountComponentType.Both:
            return cc.director.getScene().countComponent(type);
    }

    return num;
}

cc._BaseNode.prototype.getRootNode = function() {
    const parent = this._parent;
    return (!!this._parent && !(this._parent instanceof cc.Scene)) ? parent.getRootNode() : this;
}

cc._BaseNode.prototype.getPossibleComponent = function<T extends cc.Component>(...types: cc.ClassType<T>[] | string[]): T | null {
    for(const ret of types) {
        const comp = this.getComponent(ret);
        if(!!comp) return comp;
    }
    return null
}

cc._BaseNode.prototype.getComponentInParents = function<T extends cc.Component>(type: cc.ClassType<T> | string): T {
    let comp: T = null;

    let parent: cc.Node | cc.Scene = this._parent;

    while(!!parent && !comp && !(parent instanceof cc.Scene)) {
        comp = parent.getComponent(type);
        //@ts-ignore
        parent = parent._parent;
    }

    return comp;
}

