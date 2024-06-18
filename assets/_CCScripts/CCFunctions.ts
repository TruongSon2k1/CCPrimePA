

cc.findComponent = function<T extends cc.Component>(type: cc.ClassType<T> | string): T {
    return cc.director.getScene().getComponentInChildren(type)
}

