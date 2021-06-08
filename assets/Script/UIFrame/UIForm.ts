import CocosHelper from "./CocosHelper";
import { FormType } from "./config/SysDefine";
import SceneMgr from "./SceneMgr";
import { IFormData, ModalType } from "./Struct";
import UIBase from "./UIBase";
import WindowMgr from "./WindowMgr";

export class UIScreen extends UIBase {
    formType = FormType.Screen;
    willDestory = true;

    /** 打开UIScreen */
    public static async openView(parmas?: any, formData?: IFormData): Promise<UIBase> {
        return await SceneMgr.open(this.prefabPath, parmas, formData);
    }
    public static async closeView(): Promise<boolean> {
        return await SceneMgr.close(this.prefabPath);
    }

    public async closeSelf(): Promise<boolean> {
        return await SceneMgr.close(this.fid);
    }
}

export class UIWindow extends UIBase {
    formType = FormType.Window;    
    modalType = new ModalType();                // 阴影类型
    willDestory = true;

    /** 显示效果 */
    public async showEffect() {
        this.node.scale = 0;
        await CocosHelper.runTweenSync(this.node, cc.tween().to(0.3, {scale: 1}, cc.easeBackOut()));
    }

    /** 打开UIWindow */
    public static async openView(parmas?: any, formData?: IFormData): Promise<UIBase> {
        return await WindowMgr.open(this.prefabPath, parmas, formData);
    }
    public static async closeView(): Promise<boolean> {
        return await WindowMgr.close(this.prefabPath);
    }

    public async closeSelf(): Promise<boolean> {
        return await WindowMgr.close(this.fid);
    }

}

export class UIFixed extends UIBase {
    formType = FormType.Fixed;
    willDestory = true;
    
}

export class UITips extends UIBase {
    formType = FormType.Tips;
}

