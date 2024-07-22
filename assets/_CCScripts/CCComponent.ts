

//@ts-ignore
cc.Component.prototype.onChange = null;

//@ts-ignore
cc.Component.prototype._executeOnChange = function() {
    this.onChange && this.onChange();
}

cc.Component.prototype.getNonNullComponent = function<T extends cc.Component>(type: cc.ClassType<T> | string): T
{
    return this.node.getNonNullComponent(type);
}

cc.Component.prototype.countComponent = function<T extends cc.Component>(type: cc.ClassType<T> | string, count_type: CountComponentType = CountComponentType.Children): number
{
    return this.node.countComponent(type, count_type);
}

cc.Component.prototype.getRootNode = function(): cc.Node
{
    return this.node.getRootNode();
}

cc.Component.prototype.getPossibleComponent = function<T extends cc.Component>(...types: cc.ClassType<T>[] | string[]): T | null
{
    return this.node.getPossibleComponent(...types);
}

cc.Component.prototype.getComponentInParents = function<T extends cc.Component>(type: cc.ClassType<T> | string): T 
{
    return this.node.getComponentInParents(type)
}
