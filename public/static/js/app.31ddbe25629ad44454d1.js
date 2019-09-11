webpackJsonp([1],{40:function(n,e){},41:function(n,e,t){t(88);var r=t(14)(t(48),t(96),"data-v-647e008b",null);n.exports=r.exports},42:function(n,e,t){t(86);var r=t(14)(t(49),t(94),"data-v-35c047fd",null);n.exports=r.exports},43:function(n,e,t){t(85);var r=t(14)(t(46),t(93),"data-v-22ce9519",null);n.exports=r.exports},44:function(n,e,t){t(87);var r=t(14)(t(47),t(95),"data-v-53c8d54c",null);n.exports=r.exports},46:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),c=t.n(a),u=t(42),l=t.n(u),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:l.a,ResumeEditor:m.a},data:function(){return{interval:5,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 嗨，你好。我是刺猬先森。\n* 这是我的一份个人简历。\n* 源码地址: https://github.com/coldice945/anires\n* 该简历基于 anires 修改，地址: https://github.com/sitexa/anires\n*/\n\n/* 给所有元素加上过渡效果 */\n* {\n  transition: all .1s;\n}\n/* 设置背景颜色 */\nhtml {\n  color: rgb(222,222,222); background: rgb(0,64,64);\n}\n#content{\n  height:95vh;\n  margin:0;\n}\n#foot{\n  height:29vh;\n  margin:0;\n}\n\n/* 设置边框 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 50vw; height: 95vh;\n  background: rgb(20,20,20);\n}\n/* 代码高亮 */\n.token.selector{ color: rgb(130,150,0); }\n.token.property{ color: rgb(190,140,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(40,160,150); }\n\n/* 加3D效果 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n          transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 50vw; height: 95vh;\n  border: 1px solid;\n  background: rgb(200,200,200); color: #222;\n  overflow: auto;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(-10deg) translateZ(-100px) ;\n          transform: rotateY(-10deg) translateZ(-100px) ;\n}\n/* 开始写简历 */\n",'\n/*将Markdown格式翻译成HTML\n *再对HTML加点样式\n*/\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h1 {\n  margin: .5em 0 0;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n\n'],currentMarkdown:"",currentThankMarkdown:"",fullMarkdown:"崔寒冰\n====\n\n坐标：北京。\n\n前端工程师（ReactJS & ReactNative），Coco2d-X 游戏开发工程师。\n\n技能\n====\n\n前端开发\n----\n  - Web 前端开发\n  - 移动终端(React Native)\n\n手机游戏开发\n----\n  - Cocos2d 相关游戏开发\n\n项目经历\n----\n  - 乐学编程\n  - 文将语文云平台 (Web)\n  - 文将 (App)\n  - 文将后台管理系统\n  - SmartKids 乐儿钢琴\n  - 小倩传奇\n  - 基于展讯平台功能手机系统的开发\n\n技术及语言\n----\n  - JavaScript: ReactJS, ReactNative, Ant-Design\n  - C/C++: Cocos2d-X, QT\n  - OS: macOS, Windows, CentOS\n  - Others: git, Markdown, Xmind，Axure\n\n工作经历\n----\n\n  1. 北京乐教乐学教育科技有限公司\n  2. 北京元舟科技有限公司\n  3. 壹台（北京）科技有限公司\n  4. 北京罗兰盛世音乐教育科技有限公司\n\n教育经历\n----\n\n  - 山西大学商务学院 计算机科学与技术\n\n链接\n----\n  * [GitHub](https://github.com/coldice945)\n  * [技术博客](http://16bing.com)\n\n勾引方式\n----\n\n  * 微信: coldice945\n  * 邮箱: coldice945@hotmail.com\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=c()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:return n.next=12,this.progressivelyShowStyle(3);case 12:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=c()(s.a.mark(function e(){var r,a,c,u,l,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),c=a-r.length,this.currentStyle.length<a?(u=this.currentStyle.length-c,l=r.substring(u,u+1)||" ",this.currentStyle+=l,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},47:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(15),o=t.n(r),i=t(25),s=t.n(i),a=t(24),c=t.n(a),u=t(42),l=t.n(u),d=t(41),m=t.n(d),h=t(40);t.n(h);e.default={name:"app",components:{StyleEditor:l.a,ResumeEditor:m.a},data:function(){return{interval:5,currentStyle:"",enableHtml:!1,fullStyle:["/*\n* 嗨，你好。我是刺猬先森。\n* 这是我的一份个人简历。\n* 源码地址: https://github.com/coldice945/anires\n* 该简历基于 anires 修改，地址: https://github.com/sitexa/anires\n*/\n\n/* 给所有元素加上过渡效果 */\n* {\n  transition: all .2s;\n}\n/* 设置背景颜色 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54);\n}\n/* 设置边框 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  overflow: auto;\n  width: 90vw;\n  margin: 2.5vh 5vw;\n  height: 90vh;\n}\n/* 太高了 */\n.styleEditor {\n  height: 45vh;\n}\n/* 代码高亮 */\n.token.selector{\n  color: rgb(133,153,0);\n}\n.token.property{\n  color: rgb(187,137,0);\n}\n.token.punctuation{\n  color: yellow;\n}\n.token.function{\n  color: rgb(42,161,152);\n}\n\n/* 加3D效果 */\nhtml{\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  transform: rotateX(-10deg) translateZ(-50px) ;\n}\n\n/* 准备一个编辑器 */\n.resumeEditor{\n  position: fixed;\n  top: 50%; left: 0;\n  padding: .5em;  margin: 2.5vh;\n  width: 95vw; height: 45vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 开始写简历 */\n\n\n","\n/*将Markdown格式翻译成HTML\n *再对HTML加点样式\n*/\n",'\n.resumeEditor{\n  padding: 2em;\n}\n.resumeEditor h1 {\n  margin: .5em 0 0;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n'],currentMarkdown:"",fullMarkdown:"崔寒冰\n====\n\n坐标：北京。\n\n前端工程师（ReactJS & ReactNative），Coco2d-X 游戏开发工程师。\n\n技能\n====\n\n前端开发\n----\n  - Web 前端开发\n  - 移动终端(React Native)\n\n手机游戏开发\n----\n  - Cocos2d 相关游戏开发\n\n项目经历\n----\n  - 乐学编程\n  - 文将语文云平台 (Web)\n  - 文将 (App)\n  - 文将后台管理系统\n  - SmartKids 乐儿钢琴\n  - 小倩传奇\n  - 基于展讯平台功能手机系统的开发\n\n技术及语言\n----\n  - JavaScript: ReactJS, ReactNative, Ant-Design\n  - C/C++: Cocos2d-X, QT\n  - OS: macOS, Windows, CentOS\n  - Others: git, Markdown, Xmind，Axure\n\n工作经历\n----\n\n  1. 北京乐教乐学教育科技有限公司\n  2. 北京元舟科技有限公司\n  3. 壹台（北京）科技有限公司\n  4. 北京罗兰盛世音乐教育科技有限公司\n\n教育经历\n----\n\n  - 山西大学商务学院 计算机科学与技术\n\n链接\n----\n  * [GitHub](https://github.com/coldice945)\n  * [技术博客](http://16bing.com)\n\n勾引方式\n----\n\n  * 微信: coldice945\n  * 邮箱: coldice945@hotmail.com\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=c()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowStyle(0);case 2:return n.next=4,this.progressivelyShowResume();case 4:return n.next=6,this.progressivelyShowStyle(1);case 6:return n.next=8,this.showHtml();case 8:return n.next=10,this.progressivelyShowStyle(2);case 10:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,n.$nextTick(function(){n.$refs.resumeEditor.goTop()}),e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,i=c()(s.a.mark(function e(){var r,a,c,u,l,d=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.fullStyle[n]){e.next=3;break}return e.abrupt("return");case 3:a=this.fullStyle.filter(function(e,t){return t<=n}).map(function(n){return n.length}).reduce(function(n,e){return n+e},0),c=a-r.length,this.currentStyle.length<a?(u=this.currentStyle.length-c,l=r.substring(u,u+1)||" ",this.currentStyle+=l,"\n"===r.substring(u-1,u)&&this.$refs.styleEditor&&this.$nextTick(function(){d.$refs.styleEditor.goBottom()}),setTimeout(i,o)):t();case 6:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this;return new o.a(function(e,t){var r=n.fullMarkdown.length,o=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,o)}else e()}()})}}}},48:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(89),o=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5},goTop:function(){this.$refs.container.scrollTop=0}}}},49:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(90),o=t.n(r);e.default={name:"Editor",props:["code"],computed:{highlightedCode:function(){return o.a.highlight(this.code,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.code+"</style>"}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},50:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(45),o=t(43),i=t.n(o),s=t(44),a=t.n(s),c=document.documentElement.clientWidth;new r.a({el:"#app",render:function(n){return n(c>500?i.a:a.a)}})},85:function(n,e){},86:function(n,e){},87:function(n,e){},88:function(n,e){},93:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"content"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)])},staticRenderFns:[]}},94:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},95:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("StyleEditor",{ref:"styleEditor",attrs:{code:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}},96:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}}},[50]);
//# sourceMappingURL=app.31ddbe25629ad44454d1.js.map