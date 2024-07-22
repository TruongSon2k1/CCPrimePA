

cc.findComponent = function<T extends cc.Component>(type: cc.ClassType<T> | string): T {
    return cc.director.getScene().getComponentInChildren(type)
}

cc.IST = cc.instance = function<T>(obj: cc.ClassType<T>): T | null
{
    return obj['__get_pts_instance__']()
}

