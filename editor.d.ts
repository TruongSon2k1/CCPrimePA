
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

interface GizmosUtils {

}

declare class Gizmo {
	constructor(t, e)
	get target();
	set target(t)
	layer(): string
	createRoot(): void;
	ensureController(): void;
	createController(): void;
	registerMoveSvg(t, e, i): void;

	createMoveCallbacks(t): void
	onCreateMoveCallbacks(): { start(t: any, e: any, i: any): void; update(t: any, e: any, i: any): void; end(t: any): void; }
	recordChanges(): void;
	commitChanges(): void;
	worldToPixel(t: cc.Vec2): any;
	pixelToWorld(t: cc.Vec2): any;
	sceneToPixel(t: cc.Vec2): any
  defaultMinDifference(): number

  registerAdjustValue(t, e): void
  _checkLockStatus(): boolean

  adjustValue(t, e, i): void;
  targetValid(): boolean
  visible(): boolean
  _viewDirty();
  _nodeDirty(t)
  dirty(): boolean
  update(): void 
  remove(): void 
  ensureRoot(): void 
  hide(): void 
  show(): void
  rectHitTest(t, e): boolean
  _registerEvent(): boolean
  get node(): cc.Node
  get nodes(): cc.Node[]
  get topNodes(): cc.Node
  get selecting(): boolean
  set selecting(t)
  get editing(): any
  set editing(t)
  get hovering(): any
  set hovering(t)
  screenToWorld(t): cc.Vec2;
  worldToScreen(t): cc.Vec2
  getWorldDelta(t): cc.Vec2
  getScreenDelta(t): cc.Vec2
  screenToNodeLocalDelta(t, e): cc.Vec2
  screenToNodeLocalPos(t, e): cc.Vec2
  getLocalAxisAlignDelta(t, e, i): cc.Vec2
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

	/**
	 * ```js
	 * function serialize(e, i) {
	 * 	var r , t =! ("stringify" in ( i = i || {}) ) || i.stringify, s = i.minify, n = s || i.nicify, a = new d(e, i).serializedList;
	 * 	return n && u(a), r = 1! == a.length || Array.isArray( a[0] ) ? a : a[0], !1 === t ? r : JSON.stringify(r, null, s ? 0 : 2)}
	 * ```
	 */
	serialize(e, i): any

	/**
	 * ```js
	 * function serializeCompiled(e, t) {
	 * 	return D(e, t = Object.assign({ exporting: !0, dontStripDefault: !1 }, t))
	 * }
	 * ```
	 */
	serializeCompiled(e, t): any

	/**
	 * ```js
	 * function logArgs() { console.log(arguments) }
	 * ```
	 *
	 */
	logArgs(): void

	/**
	 * ```js
   * function watchVariable(e, c, n) {
   *   n
   *     ? (Object.defineProperty(e, c, {
   *         value: e["_" + c],
   *         writable: !0,
   *         configurable: !0,
   *         enumerable: !0,
   *       }),
   *       (e["_" + c] = void 0))
   *     : ((e["_" + c] = e[c]),
   *       Object.defineProperty(e, c, {
   *         get: function () {
   *           return e["_" + c];
   *         },
   *         set: function (n) {
   *           (e["_" + c] = n),
   *             console.trace(
   *               'The watching variable "' + c + '" is changed to ' + n,
   *             );
   *         },
   *         configurable: !0,
   *         enumerable: !0,
   *       }));
   * }
	 * ```
	 *
	 */
	watchVariable(e: any, c: any, n: any): void

	/**
	 * ```js
	 * function createVariablesWatcher(e) { 
	 * 	return new Proxy(e, { set: (e, c, n) => (console.trace(`obj.${c} = ${n}`), e[c] = n, !0)})
	 * }
	 * ```
	 */
	createVariablesWatcher(e: any): ProxyConstructor | any

	/**
	 * ```js
	 * function getNodeDump(e) {
	 *   if (!e) return { types: {}, value: null };
	 *   var n = {};
	 *   return {
	 *     types: n,
	 *     value: (function (e, n) {
	 *       var r,
	 *         i,
	 *         o = ["name", "opacity", "active", "angle", "group", "is3DNode"],
	 *         c = o.concat(["position", "color"]),
	 *         f = {},
	 *         d = s(n);
	 *       if (d) {
	 *         f.__type__ = d;
	 *         var y = { name: "Node", extends: u(cc.Node) };
	 *         e[d] = y;
	 *         var v = {};
	 *         for (r = 0; r < c.length; r++) {
	 *           i = c[r];
	 *           var b = {},
	 *             g = cc.Class.attr(cc.Node, i);
	 *           g && l(e, b, g), (v[i] = b);
	 *         }
	 *         (v.angle.readonly = t._hasFlagInComponents(n, a.IsRotationLocked)),
	 *           (v.position.readonly = t._hasFlagInComponents(n, a.IsPositionLocked)),
	 *           (v.anchor = {
	 *             readonly: t._hasFlagInComponents(n, a.IsAnchorLocked),
	 *           }),
	 *           p(e, cc.Vec2, "cc.Vec2"),
	 *           p(e, cc.Vec3, "cc.Vec3"),
	 *           (v.size = { readonly: t._hasFlagInComponents(n, a.IsSizeLocked) }),
	 *           p(e, cc.Size, "cc.Size"),
	 *           (v.scale = { readonly: t._hasFlagInComponents(n, a.IsScaleLocked) }),
	 *           (v.skew = {}),
	 *           p(e, cc.Color, "cc.Color"),
	 *           (y.properties = v);
	 *       }
	 *       for (r = 0; r < o.length; r++) f[(i = o[r])] = m(e, n[i], cc.Node, i, n);
	 *       if (
	 *         ((f.uuid = n.uuid),
	 *         (f.anchor = _(e, new cc.Vec2(n.anchorX, n.anchorY))),
	 *         (f.size = _(e, new cc.Size(n.width, n.height))),
	 *         (f.skew = _(e, new cc.Vec2(n.skewX, n.skewY))),
	 *         (f.color = _(e, n.color.setA(n.opacity))),
	 *         (f.eulerAngles = _(e, n.eulerAngles)),
	 *         n.is3DNode
	 *           ? (f.position = _(e, n.getPosition(cc.v3())))
	 *           : (f.position = _(e, n.getPosition(cc.v2()))),
	 *         (f.scale = _(e, n.getScale(cc.v3()))),
	 *         n._prefab)
	 *       ) {
	 *         let e = n._prefab.root,
	 *           t = e && e._prefab.asset,
	 *           r = (function (e) {
	 *             let t = [];
	 *             return (
	 *               (function e(n, r) {
	 *                 let i = (function (e, n) {
	 *                   if (e._prefab && e._prefab.root.uuid === e.uuid) {
	 *                     let r = {
	 *                       name: e._name,
	 *                       path: n ? n.path + "/" + e._name : e._name,
	 *                       uuid: e.uuid,
	 *                     };
	 *                     return t.push(r), r;
	 *                   }
	 *                 })(n, r);
	 *                 n.children.forEach((t) => {
	 *                   e(t, i);
	 *                 });
	 *               })(e),
	 *               t
	 *             );
	 *           })(n),
	 *           i = e && e.parent && e.parent._prefab;
	 *         f.__prefab__ = {
	 *           hasSubPrefab: r.length > 1,
	 *           subNode: e && e.uuid !== n.uuid,
	 *           subPrefab: !!i,
	 *           uuid: t && t._uuid,
	 *           rootName: e && e.name,
	 *           rootUuid: e && e.uuid,
	 *           handPrefabUuid: i && i.asset && i.asset._uuid,
	 *           sync: e && e._prefab.sync,
	 *           assetReadonly: t && t.readonly,
	 *           nestedInfo: r,
	 *         };
	 *       }
	 *       var C = n._components;
	 *       if (C) {
	 *         f.__comps__ = [];
	 *         for (var O = 0; O < C.length; O++) {
	 *           var E = C[O],
	 *             N = E.constructor;
	 *           if ((d = s(N))) {
	 *             var j = p(e, E, d),
	 *               w =
	 *                 "function" == typeof E.start ||
	 *                 "function" == typeof E.update ||
	 *                 "function" == typeof E.lateUpdate ||
	 *                 "function" == typeof E.onEnable ||
	 *                 "function" == typeof E.onDisable;
	 *             j.editor = {
	 *               inspector: N.hasOwnProperty("_inspector") && N._inspector,
	 *               icon: N.hasOwnProperty("_icon") && N._icon,
	 *               help: N._help,
	 *               _showTick: w,
	 *             };
	 *             var I = { type: d };
	 *             h(e, I, E, N),
	 *               (I.value._id = { type: "string", value: E._id }),
	 *               f.__comps__.push(I);
	 *             var A,
	 *               P = j.properties.__scriptAsset;
	 *             if (E instanceof cc._MissingScript) {
	 *               let e = E._$erialized;
	 *               (A =
	 *                 (A = e && e.__type__) &&
	 *                 Editor.Utils.UuidUtils.decompressUuid(A)),
	 *                 (P.visible = !(!A || !Editor.Utils.UuidUtils.isUuid(A)));
	 *             } else (A = E.__scriptUuid), (P.visible = !!A);
	 *             I.value.__scriptAsset.value = { uuid: A };
	 *           }
	 *         }
	 *       }
	 *       return f;
	 *     })(n, e),
	 *   };
	 * }
	 * ```
	 */
	getNodeDump(node: cc.Node): any

	/**
	 *
	 * ```js
   * function getNodeFuntions(n) {
   *   if (!n) return {};
   *   var e = {};
   *   return (
   *     n._components.forEach(function (n) {
   *       for (
   *         var o = [],
   *           r = (function (t) {
   *             var n, e;
   *             "object" == typeof t
   *               ? ((n = Object.getOwnPropertyNames(t)), (e = t.constructor))
   *               : ((n = []), (e = t));
   *             for (
   *               var o = [e].concat(cc.Class.getInheritanceChain(e)), r = 0;
   *               r < o.length;
   *               r++
   *             )
   *               for (
   *                 var s = Object.getOwnPropertyNames(o[r].prototype), c = 0;
   *                 c < s.length;
   *                 c++
   *               ) {
   *                 var a = s[c];
   *                 n.includes(a) || n.push(a);
   *               }
   *             return n;
   *           })(n.constructor),
   *           s = 0;
   *         s < r.length;
   *         ++s
   *       ) {
   *         var c = r[s];
   *         c &&
   *           -1 === t.indexOf(c) &&
   *           (cc.js.getPropertyDescriptor(n, c).get ||
   *             ("function" == typeof n[c] && "_" !== c[0] && o.push(c)));
   *       }
   *       e[cc.js.getClassName(n)] = o;
   *     }),
   *     e
   *   );
   * }
	 * ```
	 */
	getNodeFunctions(node: cc.Node): any

	/**
	 * ```js
	 *
	 * async function i(e, t, a, r) {
	 *  return a
	 *    ? ((e.__asyncStates = e.__asyncStates || {}),
	 *      (e.__asyncStates[t] = { state: "start", uuid: a }),
	 *      r
	 *        ? await o(e, t, a, r)
	 *        : (await new Promise((s) => {
	 *            cc.assetManager.editorExtend.queryAssetInfo(
	 *              a,
	 *              async function (c, i) {
	 *                return await o(e, t, a, r), s();
	 *              },
	 *            );
	 *          }),
	 *          void 0))
	 *    : ((e[t] = r ? null : ""), void 0);
	 * }
	 * ```
	 *
	 */
	setAsset(e, t, a, r): any

	/**
	 *
	 * ```js
   * function getPropertyByPath(e, t) {
   *   if (-1 === t.indexOf(".")) return { obj: e, propName: t, value: e[t] };
   *   for (var a, r, s, c = t.split("."), o = e, i = 0; i < c.length; i++) {
   *     if (null == o)
   *       return cc.warn('Failed to parse "%s", %s is nil', t, c[i]), null;
   *     o = s = (a = o)[(r = c[i])];
   *   }
   *   return { obj: a, propName: r, value: s };
   * }
   * ```
	 *
	 */
	getPropertyByPath(e, t): { obj: any, propName: string; value: any }

	/**
	 * ```js
	 * function setPropertyByPath(e, t) {
   *   cc.Node.isNode(e)
   *     ? d(e, t.path, t.value, t.type)
   *     : y(e, t.path, t.value, t.type, t.isSubProp);
   * }
	 * ```
	 *
	 */
	setPropertyByPath(e: cc.Node | cc.Component, t: any): void

	/**
	 * ```js
	 * function resetPropertyBypath(e, t, a) {
   *  var s = p(e, t);
   *  if (s) {
   *    if (Array.isArray(s.obj)) {
   *      var c = s.obj,
   *        o = parseInt(s.propName);
   *      return (
   *        (s = p(e, t.slice(0, -s.propName.length - 1))),
   *        cc.Class._isCCClass(s.obj.constructor)
   *          ? l(cc.Class.attr(s.obj, s.propName), c, o, o + 1)
   *          : cc.error(
   *              "Can't reset property by path, the object should be CCClass",
   *            ),
   *        void 0
   *      );
   *    }
   *    e = s.obj;
   *    var i = s.propName;
   *    if (cc.Class._isCCClass(e.constructor)) {
   *      var n = cc.Class.attr(e, i);
   *      if (
   *        ("notifyFor" in n && (n = cc.Class.attr(e, n.notifyFor)),
   *        n && "default" in n)
   *      ) {
   *        var u = r(n.default);
   *        "object" == typeof u &&
   *          u &&
   *          (u =
   *            "function" == typeof u.clone
   *              ? u.clone()
   *              : Array.isArray(u)
   *                ? []
   *                : {}),
   *          (e[i] = u);
   *      } else cc.error("Unknown default value to reset");
   *    } else
   *      cc.error("Can't reset property by path, the object should be CCClass");
   *  }
   * }
	 * ```
	 */
	resetPropertyBypath(e, t, a): void

	/**
	 *   
	 * function setDeepPropertyByPath(e, t, a, r, s) {
	 *  if ("" === t) {
	 *    if (e)
	 *      for (var c in a) {
	 *        y(e, c, a[c]);
	 *      }
	 *    return;
	 *  }
	 *  s &&
	 *    (r = (function (e, t) {
	 *      for (
	 *        var a = t.split("."), r = null, s = 0;
	 *        s < a.length && null != e;
	 *        s++
	 *      ) {
	 *        var c = a[s],
	 *          o = cc.Class.attr(e, c);
	 *        if (!o) break;
	 *        (r = o), (e = e[c]);
	 *      }
	 *      return r
	 *        ? "Object" === r.type && r.ctor
	 *          ? cc.js.getClassName(r.ctor)
	 *          : r.type
	 *        : "";
	 *    })(e, t));
	 *  let o = f(t, a, r);
	 *  if (((a = o.value), (t = o.path), !o.isPrimitiveValue)) {
	 *    let r = p(e, t),
	 *      s = r && r.value;
	 *    if (s) {
	 *      if (Array.isArray(s)) {
	 *        var i = s.length,
	 *          n = Object.keys(a).length;
	 *        if (((s.length = n), i < n))
	 *          l(cc.Class.attr(r.obj, r.propName), s, i, n);
	 *      }
	 *      for (let e in a) {
	 *        y(s, e, a[e]);
	 *      }
	 *      return u(e, t, s), void 0;
	 *    }
	 *  }
	 *  u(e, t, a, r);
	 * }
	 *
	 */
	setDeepPropertyByPath(e, t, a, r, s): any

	/**
	 * 
	 * function fillDefaultValue(e, t, r, s) {
	 *   var c,
	 *     o = { Boolean: !1, String: "", Float: 0, Integer: 0 }[e.type];
	 *   if (void 0 === o)
	 *     switch (e.type) {
	 *       case "Enum":
	 *         var i = e.enumList;
	 *         for (o = (i[0] && i[0].value) || 0, c = r; c < s; c++) t[c] = o;
	 *         break;
	 *       case "Object":
	 *         var n = e.ctor;
	 *         if (a.isAnyChildClassOf(n, cc.Asset, cc.Node, cc.Component)) {
	 *           for (c = r; c < s; c++) t[c] = null;
	 *           break;
	 *         }
	 *         for (c = r; c < s; c++)
	 *           try {
	 *             t[c] = new n();
	 *           } catch (e) {
	 *             t[c] = null;
	 *           }
	 *     }
	 *   else for (c = r; c < s; c++) t[c] = o;
	 * }
	 */
	fillDefaultValue(e, t, r, s)
 
		/**
		 * ```js
		 *
		 * function setNodePropertyByPath(e, t, a) {
		 *   switch (t) {
		 *     case "name":
		 *       e.name = a;
		 *       break;
		 *     case "active":
		 *       e.active = a;
		 *       break;
		 *     case "opacity":
		 *       e.opacity = a;
		 *       break;
		 *     case "color":
		 *       (e.color = new cc.Color(a.r, a.g, a.b, 255)), (e.opacity = a.a);
		 *       break;
		 *     case "color.r":
		 *       e.color = e.color.setR(a);
		 *       break;
		 *     case "color.g":
		 *       e.color = e.color.setG(a);
		 *       break;
		 *     case "color.b":
		 *       e.color = e.color.setB(a);
		 *       break;
		 *     case "color.a":
		 *       e.opacity = a;
		 *       break;
		 *     case "anchor":
		 *       e.setAnchorPoint(a);
		 *       break;
		 *     case "anchor.x":
		 *       e.anchorX = a;
		 *       break;
		 *     case "anchor.y":
		 *       e.anchorY = a;
		 *       break;
		 *     case "size":
		 *       (a.width = a.width < 0 ? 0 : a.width),
		 *         (a.height = a.height < 0 ? 0 : a.height),
		 *         e.setContentSize(a);
		 *       break;
		 *     case "size.width":
		 *       e.width = a;
		 *       break;
		 *     case "size.height":
		 *       e.height = a;
		 *       break;
		 *     case "scale":
		 *       e.setScale(a);
		 *       break;
		 *     case "scale.x":
		 *       e.scaleX = a;
		 *       break;
		 *     case "scale.y":
		 *       e.scaleY = a;
		 *       break;
		 *     case "scale.z":
		 *       e.scaleZ = a;
		 *       break;
		 *     case "position":
		 *       e.setPosition(a);
		 *       break;
		 *     case "position.x":
		 *       e.x = a;
		 *       break;
		 *     case "position.y":
		 *       e.y = a;
		 *       break;
		 *     case "position.z":
		 *       e.z = a;
		 *       break;
		 *     case "angle":
		 *       e.angle = a;
		 *       break;
		 *     case "eulerAngles":
		 *       e.eulerAngles = a;
		 *       break;
		 *     case "skew":
		 *       (e.skewX = a.x), (e.skewY = a.y);
		 *       break;
		 *     case "skew.x":
		 *       e.skewX = a;
		 *       break;
		 *     case "skew.y":
		 *       e.skewY = a;
		 *       break;
		 *     case "group":
		 *       s && (cc.game.groupList = s.get("group-list")), (e.group = a);
		 *       break;
		 *     case "is3DNode":
		 *       e.is3DNode = a;
		 *   }
		 * }
		 * ```
		 * 
		 */
	setNodePropertyByPath(e, t, a)

	/**
	 * ```js
	 * function preprocessForSetProperty(t, a, r) {
	 *   var s = "object" == typeof a && !Array.isArray(a),
	 *     c = a.constructor !== Object && !(a instanceof cc.ValueType),
	 *     o = r && e._getClassById(r),
	 *     i = o && cc.js.isChildClassOf(o, cc.Asset);
	 *   i &&
	 *     ("string" == typeof a
	 *       ? ((a = { uuid: a }), (t = t.slice(0, -".uuid".length)))
	 *       : "string" != typeof a.uuid && (i = !1));
	 *   var n =
	 *     (o && cc.js.isChildClassOf(o, cc.Node)) ||
	 *     cc.js.isChildClassOf(o, cc.Component);
	 *   if (
	 *     (n &&
	 *       "string" == typeof a &&
	 *       ((a = { uuid: a }), (t = t.slice(0, -".uuid".length))),
	 *     o)
	 *   )
	 *     "object" != typeof a &&
	 *       Editor.warn(
	 *         'Expecting object type of value for "%s", but got "%s" type.',
	 *         t,
	 *         typeof a,
	 *       );
	 *   else
	 *     switch (r) {
	 *       case "Enum":
	 *         "number" != typeof a &&
	 *           Editor.warn(
	 *             'Expecting number type of value for "%s", but got "%s" type.',
	 *             t,
	 *             typeof a,
	 *           );
	 *     }
	 *   return { path: t, value: a, isPrimitiveValue: !s || i || n || c };
	 * }
	 *
	 * ```
	 *
	 */
	preprocessForSetProperty(t, a, r): { path: string, value: any, isPrimitiveValue: boolean }
	
  Gizmo: new () => Gizmo
}
