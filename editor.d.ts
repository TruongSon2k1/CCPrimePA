
declare const Editor: IEditor;

interface IEEasing {

}

class IEIpcListener {

}

interface IEJS {

}

interface IEKeyCode {

}

interface IEMath {

}

interface IESelection {

}

interface IEUndo {

}

interface IEUtils {

}

interface IEAudio {

}

interface IEDialog {

}

interface IEIpc {

}

interface IEMainMenu {

}

interface IEMenu {
	
}

interface IEPackage {

}

interface IEProfile {

}

interface IEProtocol {

}

interface IEWindow {

}

interface IEi18n {

}

interface IEUI {

}

interface IERemote {

}

interface IEArgv {

}

interface IEDev {

}

interface IELang {

}

interface IEProject {

}

interface IEGlobalProfile {

}

interface IEGizmos {

}

interface IESceneScripts {

}

interface IEProjectInfo {

}

interface IEAssets {

}

interface IEMetas {

}

interface IEInspectors {

}

interface IEProperties {

}

interface IEAssetType2Name {

}

interface IEScene {

}

interface IEUser {

}

interface IECCAnalystics {

}

interface IEAssetDB {

}




interface IEditor {
	/**
	 * ```js
	 * function(r) { return require(e.url(r)) }
	 * ```
	 * + `r`: cc.Component || cc.Node
	 * + `e`: Editor
	 *
	 * >> cc.Node
	 */
	require(r: any): any
	/**
	 * ```js
	 * function(t) {
	 * 	let r = e.parse(t);
	 * 	if(!r.protocol) return t;
	 * 	if(-1 !== p.indexOf(r.protocol)) return t;
	 * 	return o ? o(r) : n.url(t)
	 * 	let o = u[r.protocol];
	 * }
	 * ```
	 * + `t`: string
	 *
	 * >> string
	 */
	url(path: string): any

	isNode: boolean
	isElectron: boolean
	isNative: boolean
	isPureWeb: boolean
	isRendererProcess: boolean
	isMainProcess: boolean
	isDarwin: boolean
	isWin32: boolean
	isRetina: boolean

	/**
	 * ```js
	 * function(e, t, ...l) {
	 * 	t = l.length ? o.format.apply(o,[t,...l]) : r(t) ,console.trace(t);
	 * 	let i = new Error("dummy").stack.split("\n");
	 * 	i.shift(), i[0]=t, t=i.join("\n"), n.sendToMain("editor:renderer-console-trace",e,t)
	 * }
	 *
	 * ```
	 * + `e`:
	 * + `t`:
	 * + `l`: ...any[]
	 *
	 * >> void
	 */
	trace(e: any, t: any, ...l: any[]): void

	/**
	 * ```js
	 * function(e,...t) {
	 * 	e = t.length ? o.format.apply(o,arguments) : r(e), console.log(e), n.sendToMain("editor:renderer-console-log", e)
	 * }
	 * ```
	 * + `e`: any
	 * + `t`: ...any[]
	 *
	 * >> void
	 */
	log(...args: any[]): void;
	success(...args: any[]): void;
	failed(...args: any[]): void;
	warn(...args: any[]): void;
	error(...args: any[]): void;

	T: (t, r) => any



	appPath: string;

	frameworkPath: string;
	libraryPath: string;
	importPath: string;

	isBuilder: boolean

	serialize(e, i)

}
