(()=>{"use strict";function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const e=function(){function e(t,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.model=t,this.view=o}var o,n,i;return o=e,(n=[{key:"keyboardHandler",value:function(){var t=this;window.addEventListener("keydown",(function(e){"ArrowUp"!==e.code&&"ArrowDown"!==e.code&&"ArrowLeft"!==e.code&&"ArrowRight"!==e.code||t.model.head.changeDirection(e.code)}))}},{key:"game",value:function(){var t=this;this.keyboardHandler(),requestAnimationFrame((function e(){t.model.tail.move(t.model.head.coordinates),t.model.head.move(),t.model.head.teleport(t.model.field.canvas),t.model.tail.damage(t.model.head.coordinates),t.model.head.eat(t.model.apple,t.model.tail),t.view.renderField(t.model.field.canvas,t.model.field.context,t.model.field.color),t.view.renderHead(t.model.field.context,t.model.head.coordinates,t.model.head.size,t.model.head.color),t.view.renderTail(t.model.field.context,t.model.tail.tailArr,t.model.tail.size,t.model.tail.color),t.view.renderApple(t.model.field.context,t.model.apple.coordinates,t.model.apple.size,t.model.apple.color),requestAnimationFrame(e)}))}}])&&t(o.prototype,n),i&&t(o,i),e}();const o=function t(e,o,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.field=new e,this.head=new o,this.tail=new n,this.apple=new i};function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const i=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,o,i;return e=t,(o=[{key:"renderField",value:function(t,e,o){e.fillStyle=o,e.fillRect(0,0,t.width,t.height)}},{key:"renderHead",value:function(t,e,o,n){t.fillStyle=n,t.fillRect(e.coordinatesX,e.coordinatesY,o,o)}},{key:"renderTail",value:function(t,e,o,n){t.fillStyle=n,e.forEach((function(e){t.fillRect(e.coordinatesX,e.coordinatesY,o,o)}))}},{key:"renderApple",value:function(t,e,o,n){t.fillStyle=n,t.fillRect(e.coordinatesX,e.coordinatesY,o,o)}}])&&n(e.prototype,o),i&&n(e,i),t}();const r=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.size=20,this.color="rgba(30, 132, 73, 1)"};function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=f(t);if(e){var i=f(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return u(this,o)}}function u(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=m(t);if(e){var i=m(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return v(this,o)}}function v(t,e){return!e||"object"!==d(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}new e(new o((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=document.getElementById("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=500,this.canvas.height=500,this.color="rgba(50, 50, 50, 1)"}),function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(r,t);var e,o,n,i=l(r);function r(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(t=i.call(this)).speed=5,t.velocity={velocityX:0,velocityY:1},t.coordinates={coordinatesX:20,coordinatesY:0},t.direction="Down",t}return e=r,(o=[{key:"changeDirection",value:function(t){"ArrowUp"===t&&"Down"!==this.direction&&(this.velocity.velocityX=0,this.velocity.velocityY=-1,this.direction="Up"),"ArrowDown"===t&&"Up"!==this.direction&&(this.velocity.velocityX=0,this.velocity.velocityY=1,this.direction="Down"),"ArrowLeft"===t&&"Right"!==this.direction&&(this.velocity.velocityX=-1,this.velocity.velocityY=0,this.direction="Left"),"ArrowRight"===t&&"Left"!==this.direction&&(this.velocity.velocityX=1,this.velocity.velocityY=0,this.direction="Right")}},{key:"move",value:function(){this.coordinates.coordinatesX+=this.speed*this.velocity.velocityX,this.coordinates.coordinatesY+=this.speed*this.velocity.velocityY}},{key:"teleport",value:function(t){this.coordinates.coordinatesX>t.width&&(this.coordinates.coordinatesX=0),this.coordinates.coordinatesX<0&&(this.coordinates.coordinatesX=t.width),this.coordinates.coordinatesY<0&&(this.coordinates.coordinatesY=t.height),this.coordinates.coordinatesY>t.height&&(this.coordinates.coordinatesY=0)}},{key:"eat",value:function(t,e){(this.coordinates.coordinatesX===t.coordinates.coordinatesX&&this.coordinates.coordinatesY===t.coordinates.coordinatesY||this.coordinates.coordinatesX<t.coordinates.coordinatesX+this.size&&this.coordinates.coordinatesX+this.size>t.coordinates.coordinatesX&&this.coordinates.coordinatesY<t.coordinates.coordinatesY+this.size&&this.coordinates.coordinatesY+this.size>t.coordinates.coordinatesY)&&(t.spawn(),e.add())}}])&&a(e.prototype,o),n&&a(e,n),r}(r),function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(r,t);var e,o,n,i=p(r);function r(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(t=i.call(this)).count=5,t.tailArr=[],t}return e=r,(o=[{key:"move",value:function(t){for(this.tailArr.push({coordinatesX:t.coordinatesX,coordinatesY:t.coordinatesY});this.tailArr.length>this.count;)this.tailArr.shift()}},{key:"damage",value:function(t){var e=this;this.tailArr.forEach((function(o){o.coordinatesX===t.coordinatesX&&o.coordinatesY===t.coordinatesY&&(e.count=5)}))}},{key:"add",value:function(){this.count+=5}}])&&h(e.prototype,o),n&&h(e,n),r}(r),function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.color="rgba(187, 41, 68, 1)",this.size=20,this.coordinates={coordinatesX:100,coordinatesY:100}}var e,o,n;return e=t,(o=[{key:"spawn",value:function(){this.coordinates.coordinatesX=480*Math.random()+0,this.coordinates.coordinatesY=480*Math.random()+0}}])&&b(e.prototype,o),n&&b(e,n),t}()),new i).game()})();