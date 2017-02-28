/*! v1.0.0 Build Tue, 28 Feb 2017 14:48:46 GMT */
!function(){var e={},t=function(){var t,n,r,o=Array.prototype.slice.call(arguments,0);"string"==typeof o[0]?(r=o[0],t=o[1],n=o[2]):Array.isArray(o[0])&&(t=o[0],n=o[1]);var i=t.reduce(function(e,t){return e.addDependency(t)},tau.mashups);return i=i.addDependency(r+"/config"),i=i.addMashup(function(){var o=Array.prototype.slice.call(arguments,0);if(t.length>0&&1===o.length)throw new Error("Can't properly load dependencies for mashup \""+r+'", mashup is stopped.');return e.variables=o[o.length-1],o.length-t.length===2?e.config=o[o.length-2]:e.config={},Object.freeze&&(Object.freeze(e.variables),Object.freeze(e.config),Object.freeze(e)),n.apply(null,o)})};t("CustomUnitQuickAddComment",["react","react-dom","jQuery","tau/configurator","tau/models/board.customize.units/const.entity.types.names","tau/models/board.customize.units/const.card.sizes","tau/models/board.customize.units/board.customize.units.interaction"],function(t,n,r,o,i,a,u){return function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="",n.p=e.variables?e.variables.mashupPath:n.p,n(0)}([function(e,t,n){n(1),n(23),n(24),e.exports=n(25)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(2),i=r(o),a=n(3),u=r(a),s=n(4),c=r(s),l=n(14),f=n(22),d=r(f);l.customUnits.add({id:"add_comment",name:"Add Comment",template:d["default"],sizes:[l.customUnits.sizes.LIST]}),u["default"].render(i["default"].createElement(c["default"],null),document.getElementById("RestUI_Board"))},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),c=r(s),l=n(5),f=r(l),d=n(6),p=r(d),m=n(7),h=r(m),b=p["default"].getApplicationPath(),y=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={isActive:!1},r.handleSubmit=function(e){return r.setState({isActive:!1}),f["default"].ajax({type:"post",url:b+"/api/v1/Comments/",contentType:"application/json; charset=utf-8",dataType:"json",data:JSON.stringify({general:{id:r.state.entityId},description:e})})},r.handleClose=function(){r.setState({isActive:!1})},a=n,i(r,a)}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;this.clickListener=function(t){t.stopPropagation();var n=(0,f["default"])(t.target).closest(".i-role-card").data("entityId");e.setState({entityId:n,isActive:n!==e.state.entityId||!e.state.isActive,target:t.target})},(0,f["default"])(document.body).on("click",".i-role-card .cu-quickaddcomment-trigger",this.clickListener)}},{key:"componentWillUnmount",value:function(){(0,f["default"])(document.body).off("click",".i-role-card .cu-quickaddcomment-trigger",this.clickListener)}},{key:"render",value:function(){return this.state.isActive?c["default"].createElement(h["default"],{key:this.state.entityId,target:this.state.target,onSubmit:this.handleSubmit,onClose:this.handleClose,onOuterClick:this.handleClose}):null}}]),t}(c["default"].Component);t["default"]=y},function(e,t){e.exports=r},function(e,t){e.exports=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),c=r(s),l=n(8),f=r(l),d=n(13),p=r(d),m=n(5),h=r(m),b=n(9),y=r(b),v=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.handleSubmit=function(e){e.preventDefault(),r.props.onSubmit(r.richTextEditor.getValue())},r.handleCancelClick=function(){r.props.onClose()},r.handleOuterClick=function(){r.props.onOuterClick()},a=n,i(r,a)}return a(t,e),u(t,[{key:"componentWillUnmount",value:function(){(0,h["default"])(this.props.target).css("visibility","")}},{key:"render",value:function(){var e=this,t=this.props.target;(0,h["default"])(t).css("visibility","visible");var n=c["default"].createElement("div",{className:y["default"].formContainer},c["default"].createElement("form",{onSubmit:this.handleSubmit},c["default"].createElement(f["default"],{ref:function(t){return e.richTextEditor=t}}),c["default"].createElement("div",{className:"controls-group"},c["default"].createElement("button",{type:"submit",className:"tau-btn tau-btn-green"},"Submit"),c["default"].createElement("button",{type:"button",onClick:this.handleCancelClick,className:"tau-btn"},"Cancel"))));return c["default"].createElement(p["default"],{target:t,overlay:n,onOuterClick:this.handleOuterClick})}}]),t}(c["default"].Component);v.propTypes={onClose:s.PropTypes.func.isRequired,onOuterClick:s.PropTypes.func.isRequired,onSubmit:s.PropTypes.func.isRequired,target:s.PropTypes.object.isRequired},t["default"]=v},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(2),c=r(s),l=n(9),f=r(l),d="<!--markdown-->",p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.textarea&&e.textarea.focus()},0)}},{key:"getValue",value:function(){return d+this.textarea.value}},{key:"render",value:function(){var e=this;return c["default"].createElement("div",{className:f["default"].textareaContainer},c["default"].createElement("textarea",{ref:function(t){return e.textarea=t},className:f["default"].textarea+" i-role-textarea",autoFocus:!0}))}}]),t}(c["default"].Component);t["default"]=p},function(e,t,n){var r=n(10);"string"==typeof r&&(r=[[e.id,r,""]]);n(12)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,n){t=e.exports=n(11)(),t.push([e.id,".cu-quickaddcomment-trigger{height:auto;padding-bottom:3px}.ZVG8fpmeYSDmhtG2E2P4m{background-color:#fff;border-radius:3px;display:-webkit-box;display:-ms-flexbox;display:flex;padding:5px}.NOrBUdde_ywpJBmx9gafR{margin-bottom:5px}._1pwpK59YIkXJLlPxnLMH0I{font-size:13px;height:200px;overflow:auto;width:300px}",""]),t.locals={formContainer:"ZVG8fpmeYSDmhtG2E2P4m",textareaContainer:"NOrBUdde_ywpJBmx9gafR",textarea:"_1pwpK59YIkXJLlPxnLMH0I"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(c(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(c(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],u=o[2],s=o[3],c={css:a,media:u,sourceMap:s};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function i(e,t){var n=b(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var i=v++;n=y||(y=u(t)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=d.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=f.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=O(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=m(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=m(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var u=n[a],s=p[u.id];s.refs--,i.push(s)}if(e){var c=o(e);r(c,t)}for(var a=0;a<i.length;a++){var s=i[a];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete p[s.id]}}}};var O=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){e.tauBubble("instance")&&e.tauBubble(t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),l=r(c),f=n(3),d=r(f),p=n(5),m=r(p),h=function(e){function t(){var e,n,r,a;o(this,t);for(var u=arguments.length,s=Array(u),c=0;c<u;c++)s[c]=arguments[c];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.handleDocumentClick=function(e){if(e.target!==r.bubble&&!r.bubble.contains(e.target)){var t=d["default"].findDOMNode(r.props.target);e.target===t||t.contains(e.target)||r.props.onOuterClick()}},a=n,i(r,a)}return a(t,e),s(t,[{key:"componentDidMount",value:function(){this.content=document.createElement("div"),this.renderBubble(this.props.target,this.props.overlay),this.documentListener=this.handleDocumentClick.bind(this),document.body.addEventListener("click",this.documentListener)}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.target,n=e.target;t!==n&&(u((0,m["default"])(t),"destroy"),this.renderBubble(n,e.overlay))}},{key:"componentWillUnmount",value:function(){u((0,m["default"])(this.props.target),"destroy"),document.body.removeEventListener("click",this.documentListener)}},{key:"renderBubble",value:function(e,t){this.bubble=d["default"].render(t,this.content);var n=(0,m["default"])(e);n.tauBubble({target:e,content:this.content,showOnCreation:!0,showEvent:"none",hideEvent:"none",documentMouseEvent:"none",stackName:"add_comment_bubble",zIndex:999}),setTimeout(function(){u(n,"adjustPosition")},50),setTimeout(function(){u(n,"adjustPosition")},100)}},{key:"render",value:function(){return null}}]),t}(l["default"].Component);h.propTypes={onOuterClick:c.PropTypes.func.isRequired,overlay:c.PropTypes.node.isRequired,target:c.PropTypes.object.isRequired},t["default"]=h},function(e,t,n){"use strict";var r=n(15),o=n(16),i=n(17),a=n(21);e.exports={addBusListener:o.addBusListener,addBusListenerOnce:o.addBusListenerOnce,getAppConfigurator:r.getAppConfigurator,configurator:r,events:o,customUnits:i,debug:a}},function(e,t,n){"use strict";var r=n(6),o=n(5),i=new o.Deferred;r.getGlobalBus().on("configurator.ready",function(e,t){t._id&&!t._id.match(/global/)&&i.resolve(t)});var a=function(){return i.promise()};e.exports={getAppConfigurator:a}},function(e,t,n){"use strict";var r=n(6),o=r.getBusRegistry(),i=function(e){return function(){e.apply(null,Array.prototype.slice.call(arguments).slice(1))}},a=function(e,t,n,r){var a=i(function(o){var i=o.bus;i.name===e&&i[r?"once":"on"](t,n)}),u=o.addEventListener("create",a);return o.addEventListener("destroy",i(function(r){var o=r.bus;o.name===e&&o.removeListener(t,n,u)})),{remove:function(){o.removeListener("create",a,u),o.getByName(e).then(function(e){e.removeListener(t,n,u)})}}},u=function(e,t,n){return a(e,t,n,!0)};e.exports={addBusListener:a,addBusListenerOnce:u}},function(e,t,n){"use strict";var r=n(18),o=n(19),i=n(20).openUnitEditor,a=n(15),u=function(e){return Object.keys(e||{}).reduce(function(t,n){return t[n]=e[n],t},{})},s=function(e){var t=u(e);return t.types=t.types||[r.ANY_TYPE],t.sizes=t.sizes||Object.keys(o).map(function(e){return o[e]}),a.getAppConfigurator().then(function(n){var r=n.getUnitsRegistry();if(!t.id)throw new Error('Field "id" is required for custom unit config');if(r.units[t.id])throw new Error('Custom unit with id "'+t.id+'" has been already registered');t.name=t.name||t.id,t.model=t.model||t.sampleData?t.model:{dummy:1},"string"!=typeof t.model&&"object"==typeof t.model&&(t.model=Object.keys(t.model).reduce(function(e,n){return e.concat(n+":"+t.model[n])},[]).join(", ")),t.sampleData=t.sampleData||{},t.template="object"==typeof e.template?u(t.template):t.template||{markup:['<div class="tau-board-unit__value">'+t.id+"</div>"]},"string"==typeof t.template&&(t.template={markup:[t.template]}),"string"==typeof t.template.markup&&(t.template.markup=[t.template.markup]),t.outerClassName&&(t.classId=t.outerClassName),t.priority&&(t.priority=Number(t.priority)),t.isEditable&&(t.interactionConfig={isEditable:t.isEditable},t.editorHandler?t.interactionConfig.handler=t.editorHandler:t.interactionConfig.handler=function(e,n){var r=e.cardDataForUnit,o=t.editorComponentName instanceof Function?t.editorComponentName(r):t.editorComponentName,a=i(o,{});if(t.editorData){var u={};Object.keys(t.editorData).forEach(function(e){var n=t.editorData[e];u[e]=n instanceof Function?n(r):r[n]}),e.cardDataForUnit=u}return a(e,n)}),r.units[t.id]=r.register([t])[t.id]})};e.exports={types:r,sizes:o,add:s}},function(e,t){e.exports=i},function(e,t){e.exports=a},function(e,t){e.exports=u},function(e,t,n){"use strict";var r=n(6),o=r.getBusRegistry(),i=function(){o.on("create",function(e,t){var n=t.bus;n.on("afterRender",function(e,t){t.element.attr("data-component-name",n.name)})})},a=function(e,t){var n=e;e?"string"==typeof e&&(n=function(t){return(t.name||t.id)===e}):n=function(){return!0},t||(t=function(e,t,n){console.log("LOG BUS",e,t,n)});var o=r.getGlobalBus(),i=o.fire.bind(o);o.fire=function(e,r,o){return o&&n(o,e,r)&&t(o.name||o.id,e,r),i(e,r,o)}};e.exports={showComponentsNames:i,logBus:a}},function(e,t){e.exports='<div class=tau-board-unit__value><span class="tau-btn tau-btn_hidden cu-quickaddcomment-trigger">Add</span></div>'},function(e,t){},function(e,t){},function(e,t,n){e.exports=n.p+"./chunks/mashup.ignore"}])})}();