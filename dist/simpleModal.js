function _classPrivateFieldGet(t, e) { return _classApplyDescriptorGet(t, _classExtractFieldDescriptor(t, e, "get")) } function _classApplyDescriptorGet(t, e) { return e.get ? e.get.call(t) : e.value } function _classPrivateMethodGet(t, e, a) { if (!e.has(t)) throw new TypeError("attempted to get private field on non-instance"); return a } function _classPrivateFieldSet(t, e, a) { return _classApplyDescriptorSet(t, _classExtractFieldDescriptor(t, e, "set"), a), a } function _classExtractFieldDescriptor(t, e, a) { if (!e.has(t)) throw new TypeError("attempted to " + a + " private field on non-instance"); return e.get(t) } function _classApplyDescriptorSet(t, e, a) { if (e.set) e.set.call(t, a); else { if (!e.writable) throw new TypeError("attempted to set read only private field"); e.value = a } } var _modal = new WeakMap, _targetBtn = new WeakMap, _init = new WeakSet, _actionFactory = new WeakSet; class SimpleModal { constructor(t = "") { _actionFactory.add(this), _init.add(this), _modal.set(this, { writable: !0, value: void 0 }), _targetBtn.set(this, { writable: !0, value: void 0 }), _classPrivateFieldSet(this, _modal, t.id), _classPrivateFieldSet(this, _targetBtn, `.open-modal[data-target="#${t.id}"]`), _classPrivateMethodGet(this, _init, _init2).call(this, t), _classPrivateMethodGet(this, _actionFactory, _actionFactory2).call(this) } show() { try { if (null === _classPrivateFieldGet(this, _modal)) throw new Error("Modal not found"); const t = document.querySelector("body"), e = document.querySelector(".modals_container"); if (null === e) { const e = document.createElement("div"); e.classList.add("modals_container"), e.appendChild(_classPrivateFieldGet(this, _modal)); const a = t.firstChild; t.insertBefore(e, a) } else e.appendChild(_classPrivateFieldGet(this, _modal)); _classPrivateFieldGet(this, _modal).style = "display: block" } catch (t) { console.warn(t) } } hide() { try { if (null === _classPrivateFieldGet(this, _modal)) throw new Error("Modal not found"); _classPrivateFieldGet(this, _modal).style = "display: none" } catch (t) { console.warn(t) } } getModal() { return _classPrivateFieldGet(this, _modal) } setModal(t) { _classPrivateFieldSet(this, _modal, t) } } function _init2(t) { try { if (null === _classPrivateFieldGet(this, _modal)) throw new Error("Modal not found"); _classPrivateFieldSet(this, _modal, document.getElementById(t.id)), _classPrivateFieldSet(this, _targetBtn, document.querySelectorAll(_classPrivateFieldGet(this, _targetBtn))) } catch (t) { console.warn(t) } } function _actionFactory2() { _classPrivateFieldGet(this, _modal).addEventListener("click", t => { t.target.closest("[data-close]") && this.hide(), "modal-content" === t.target.className && this.hide() }); for (let t = 0; t < _classPrivateFieldGet(this, _targetBtn).length; t++)_classPrivateFieldGet(this, _targetBtn)[t].addEventListener("click", t => { this.show() }) }