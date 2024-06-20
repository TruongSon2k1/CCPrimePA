
const {ccclass, property} = cc._decorator;

@ccclass
export default class QuickContact extends cc.Component {
    protected onLoad(): void {
        cc.director.getPhysicsManager().enabled = true
    }
     onCollisionEnter(o, s) {
        console.log('---------------')
        const x = this.calculateContactPoint(o,s)
        console.log(x.toString())

    }
    calculateContactPoint(other, self) {
        // Get the bounding boxes of both colliders
        let otherAABB = other.world.aabb;
        let selfAABB = self.world.aabb;

        // Check if they are intersecting
        if (otherAABB.intersects(selfAABB)) {
            // Calculate the intersection area
            let intersectX = Math.max(otherAABB.xMin, selfAABB.xMin);
            let intersectY = Math.max(otherAABB.yMin, selfAABB.yMin);
            let intersectWidth = Math.min(otherAABB.xMax, selfAABB.xMax) - intersectX;
            let intersectHeight = Math.min(otherAABB.yMax, selfAABB.yMax) - intersectY;

            // Calculate the center of the intersection area
            let contactX = intersectX + intersectWidth / 2;
            let contactY = intersectY + intersectHeight / 2;

            return cc.v2(contactX, contactY);
        }
        return null;
    }
}
