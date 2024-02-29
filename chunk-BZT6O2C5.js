import{a as J,b as ve,c as ye,f as _e,j as Ce}from"./chunk-AX5YBLAJ.js";import{$a as k,Ea as p,Ja as pe,L as O,La as P,M as D,Na as v,Pa as g,Q as b,Qa as y,R as ce,S as z,T as d,Va as A,X as Z,Xa as N,Z as he,Za as x,_ as X,_a as ge,a as u,aa as f,ab as G,b as h,cb as me,fa as S,ha as M,k as le,na as Y,oa as fe,p as ue,u as de,ua as m,va as a,ya as K}from"./chunk-TQKIZM3B.js";var Ie=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(K),a(Z))},e.\u0275dir=d({type:e});let t=e;return t})(),nt=(()=>{let e=class e extends Ie{};e.\u0275fac=(()=>{let i;return function(o){return(i||(i=fe(e)))(o||e)}})(),e.\u0275dir=d({type:e,features:[p]});let t=e;return t})(),Oe=new f("");var rt={provide:Oe,useExisting:S(()=>W),multi:!0};function ot(){let t=J()?J().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var st=new f(""),W=(()=>{let e=class e extends Ie{constructor(i,r,o){super(i,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ot())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(K),a(Z),a(st,8))},e.\u0275dir=d({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&A("input",function(l){return o._handleInput(l.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(l){return o._compositionEnd(l.target.value)})},features:[x([rt]),p]});let t=e;return t})();function c(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Se(t){return t!=null&&typeof t.length=="number"}var Pe=new f(""),Ne=new f(""),at=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,w=class{static min(e){return lt(e)}static max(e){return ut(e)}static required(e){return dt(e)}static requiredTrue(e){return ct(e)}static email(e){return ht(e)}static minLength(e){return ft(e)}static maxLength(e){return pt(e)}static pattern(e){return gt(e)}static nullValidator(e){return xe(e)}static compose(e){return Ue(e)}static composeAsync(e){return He(e)}};function lt(t){return e=>{if(c(e.value)||c(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function ut(t){return e=>{if(c(e.value)||c(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function dt(t){return c(t.value)?{required:!0}:null}function ct(t){return t.value===!0?null:{required:!0}}function ht(t){return c(t.value)||at.test(t.value)?null:{email:!0}}function ft(t){return e=>c(e.value)||!Se(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function pt(t){return e=>Se(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function gt(t){if(!t)return xe;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(c(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function xe(t){return null}function ke(t){return t!=null}function Ge(t){return me(t)?le(t):t}function Te(t){let e={};return t.forEach(n=>{e=n!=null?u(u({},e),n):e}),Object.keys(e).length===0?null:e}function je(t,e){return e.map(n=>n(t))}function mt(t){return!t.validate}function Be(t){return t.map(e=>mt(e)?e:n=>e.validate(n))}function Ue(t){if(!t)return null;let e=t.filter(ke);return e.length==0?null:function(n){return Te(je(n,e))}}function Re(t){return t!=null?Ue(Be(t)):null}function He(t){if(!t)return null;let e=t.filter(ke);return e.length==0?null:function(n){let i=je(n,e).map(Ge);return de(i).pipe(ue(Te))}}function Le(t){return t!=null?He(Be(t)):null}function Ve(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function $e(t){return t._rawValidators}function We(t){return t._rawAsyncValidators}function Q(t){return t?Array.isArray(t)?t:[t]:[]}function B(t,e){return Array.isArray(t)?t.includes(e):t===e}function De(t,e){let n=Q(e);return Q(t).forEach(r=>{B(n,r)||n.push(r)}),n}function be(t,e){return Q(e).filter(n=>!B(t,n))}var U=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Re(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Le(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},C=class extends U{get formDirective(){return null}get path(){return null}},I=class extends U{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},R=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},vt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ri=h(u({},vt),{"[class.ng-submitted]":"isSubmitted"}),qe=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(I,2))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&v("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[p]});let t=e;return t})(),ze=(()=>{let e=class e extends R{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(C,10))},e.\u0275dir=d({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&v("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[p]});let t=e;return t})();var E="VALID",T="INVALID",_="PENDING",F="DISABLED";function ie(t){return(q(t)?t.validators:t)||null}function yt(t){return Array.isArray(t)?Re(t):t||null}function ne(t,e){return(q(e)?e.asyncValidators:t)||null}function _t(t){return Array.isArray(t)?Le(t):t||null}function q(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ze(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new O(1e3,"");if(!i[n])throw new O(1001,"")}function Xe(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new O(1002,"")})}var V=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===E}get invalid(){return this.status===T}get pending(){return this.status==_}get disabled(){return this.status===F}get enabled(){return this.status!==F}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(De(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(De(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(be(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(be(e,this._rawAsyncValidators))}hasValidator(e){return B(this._rawValidators,e)}hasAsyncValidator(e){return B(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=_,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=F,this.errors=null,this._forEachChild(i=>{i.disable(h(u({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(u({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=E,this._forEachChild(i=>{i.enable(h(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(h(u({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===_)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=_,this._hasOwnPendingAsyncValidator=!0;let n=Ge(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(i=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(i,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new D,this.statusChanges=new D}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?T:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_)?_:this._anyControlsHaveStatus(T)?T:E}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=yt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=_t(this._rawAsyncValidators)}},H=class extends V{constructor(e,n,i){super(ie(n),ne(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Xe(this,!0,e),Object.keys(e).forEach(i=>{Ze(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,o)=>{i=n(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ee=class extends H{};var Ye=new f("CallSetDisabledState",{providedIn:"root",factory:()=>re}),re="always";function Ct(t,e){return[...e.path,t]}function Me(t,e,n=re){oe(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),Dt(t,e),Mt(t,e),bt(t,e),Vt(t,e)}function Ae(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),$(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function L(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Vt(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function oe(t,e){let n=$e(t);e.validator!==null?t.setValidators(Ve(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=We(t);e.asyncValidator!==null?t.setAsyncValidators(Ve(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();L(e._rawValidators,r),L(e._rawAsyncValidators,r)}function $(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=$e(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(n=!0,t.setValidators(o))}}if(e.asyncValidator!==null){let r=We(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(n=!0,t.setAsyncValidators(o))}}}let i=()=>{};return L(e._rawValidators,i),L(e._rawAsyncValidators,i),n}function Dt(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ke(t,e)})}function bt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ke(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ke(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Mt(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function At(t,e){t==null,oe(t,e)}function Et(t,e){return $(t,e)}function Ft(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function wt(t){return Object.getPrototypeOf(t.constructor)===nt}function It(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function Ot(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(o=>{o.constructor===W?n=o:wt(o)?i=o:r=o}),r||i||n||null}function St(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Ee(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function Fe(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var j=class extends V{constructor(e=null,n,i){super(ie(n),ne(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(n)&&(n.nonNullable||n.initialValueIsDefault)&&(Fe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ee(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ee(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Fe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Pt=t=>t instanceof j;var Je=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=d({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Qe=new f("");var Nt={provide:C,useExisting:S(()=>se)},se=(()=>{let e=class e extends C{constructor(i,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new D,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&($(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return Me(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){Ae(i.control||null,i,!1),St(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,It(this.form,this.directives),this.ngSubmit.emit(i),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,o=this.form.get(i.path);r!==o&&(Ae(r||null,i),Pt(o)&&(Me(o,i,this.callSetDisabledState),i.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);At(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&Et(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){oe(this.form,this),this._oldForm&&$(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(Pe,10),a(Ne,10),a(Ye,8))},e.\u0275dir=d({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&A("submit",function(l){return o.onSubmit(l)})("reset",function(){return o.onReset()})},inputs:{form:[b.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[x([Nt]),p,Y]});let t=e;return t})();var xt={provide:I,useExisting:S(()=>ae)},ae=(()=>{let e=class e extends I{set isDisabled(i){}constructor(i,r,o,s,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new D,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=Ot(this,s)}ngOnChanges(i){this._added||this._setUpControl(),Ft(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return Ct(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(C,13),a(Pe,10),a(Ne,10),a(Oe,10),a(Qe,8))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""]],inputs:{name:[b.None,"formControlName","name"],isDisabled:[b.None,"disabled","isDisabled"],model:[b.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[x([xt]),p,Y]});let t=e;return t})();var kt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=z({type:e}),e.\u0275inj=X({});let t=e;return t})(),te=class extends V{constructor(e,n,i){super(ie(n),ne(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){Xe(this,!1,e),e.forEach((i,r)=>{Ze(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function we(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var et=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let o=this._reduceControls(i),s={};return we(r)?s=r:r!==null&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new H(o,s)}record(i,r=null){let o=this._reduceControls(i);return new ee(o,r)}control(i,r,o){let s={};return this.useNonNullable?(we(r)?s=r:(s.validators=r,s.asyncValidators=o),new j(i,h(u({},s),{nonNullable:!0}))):new j(i,r,o)}array(i,r,o){let s=i.map(l=>this._createControl(l));return new te(s,r,o)}_reduceControls(i){let r={};return Object.keys(i).forEach(o=>{r[o]=this._createControl(i[o])}),r}_createControl(i){if(i instanceof j)return i;if(i instanceof V)return i;if(Array.isArray(i)){let r=i[0],o=i.length>1?i[1]:null,s=i.length>2?i[2]:null;return this.control(r,o,s)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=he({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var tt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Qe,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:Ye,useValue:i.callSetDisabledState??re}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=z({type:e}),e.\u0275inj=X({imports:[kt]});let t=e;return t})();function Tt(t,e){t&1&&(g(0,"div",8)(1,"p"),N(2,"\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C!"),y()())}var fi=(()=>{let e=class e{constructor(){this.authService=M(Ce),this.router=M(_e),this.authErrors$=this.authService.authErrors$,this.fb=M(et),this.loginForm=this.fb.group({login:["",w.required],password:["",w.required]})}login(){this.loginForm.valid&&this.loginForm.value.login&&this.loginForm.value.password&&this.authService.login(this.loginForm.value)&&this.router.navigate(["/profile"])}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=ce({type:e,selectors:[["app-login"]],standalone:!0,features:[ge],decls:14,vars:13,consts:[[1,"login"],[3,"formGroup","submit"],[1,"form-inputs"],["formControlName","login","type","text","placeholder","login"],["formControlName","password","type","password","placeholder","password"],["class","form-alert",4,"ngIf"],[1,"form-actions"],["type","submit",3,"disabled"],[1,"form-alert"]],template:function(r,o){r&1&&(g(0,"div",0)(1,"form",1),A("submit",function(){return o.login()}),g(2,"p"),N(3,"Login Form"),y(),g(4,"div",2)(5,"input",3),k(6,"async"),y(),g(7,"input",4),k(8,"async"),y()(),pe(9,Tt,3,0,"div",5),k(10,"async"),g(11,"div",6)(12,"button",7),N(13,"Login"),y()()()()),r&2&&(m(),P("formGroup",o.loginForm),m(4),v("invalid",G(6,7,o.authErrors$)),m(2),v("invalid",G(8,9,o.authErrors$)),m(2),P("ngIf",G(10,11,o.authErrors$)),m(3),P("disabled",!o.loginForm.valid))},dependencies:[tt,Je,W,qe,ze,se,ae,ye,ve],styles:[".login[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{min-width:300px;display:flex;flex-direction:column;align-items:center;padding:25px;background-color:#eee;border-radius:5px;box-shadow:0 0 5px #a6a6a6;box-sizing:border-box;row-gap:10px}.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:22px;font-weight:600;color:#312564}.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form-inputs[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:15px;width:100%}.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form-inputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{box-sizing:border-box;padding:10px;border-radius:5px;outline:none;border:1px solid rgba(128,128,128,.5)}.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form-inputs[_ngcontent-%COMP%]   input.invalid[_ngcontent-%COMP%]{border-color:red}.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form-alert[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:red;font-size:14px}.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px 25px;box-sizing:border-box;font-family:IBM PlexSans,sans-serif;font-weight:600;font-size:16px;color:#312564}.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:disabled){cursor:pointer}.login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   div.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{color:#9b9b9b}"]});let t=e;return t})();export{fi as LoginComponent};