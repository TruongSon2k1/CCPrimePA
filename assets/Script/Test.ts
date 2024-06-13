const {ccclass, property} = cc._decorator;

@ccclass
export class Test extends cc.Component {


    protected onEnable(): void {
      const action = cc.cardinalSplineTo(1, [10], 0); 
        cc.log(action)
    }


}


