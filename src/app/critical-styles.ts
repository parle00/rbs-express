export const criticalStyles = String.raw`
*,::after,::before{box-sizing:border-box;border:0 solid #e5e7eb}
html{line-height:1.5;-webkit-text-size-adjust:100%;scroll-behavior:smooth}
body{margin:0;line-height:inherit;color:#fff;background:#171717;font-family:Arial,Helvetica,sans-serif}
h1,h2,h3,h4,h5,h6,p{margin:0;font-size:inherit;font-weight:inherit}
a{color:inherit;text-decoration:inherit}
button{font:inherit;color:inherit;margin:0;padding:0;text-transform:none;-webkit-appearance:button;background:transparent;cursor:pointer}
ul{list-style:none;margin:0;padding:0}
img,svg{display:block;vertical-align:middle}img{max-width:100%;height:auto}
.container,.container-with-padding{width:100%;max-width:1200px;color:#fff}
.container-with-padding{padding:10px 20px}
.fixed{position:fixed}.sticky{position:sticky}.bottom-\[10px\]{bottom:10px}.left-0{left:0}.left-\[-150\%\]{left:-150%}.right-\[-150\%\]{right:-150%}.right-\[10px\]{right:10px}.top-0{top:0}.top-\[5px\]{top:5px}.z-\[1300\]{z-index:1300}.z-\[1301\]{z-index:1301}
.my-\[20px\]{margin-top:20px;margin-bottom:20px}.my-\[30px\]{margin-top:30px;margin-bottom:30px}.mt-2{margin-top:.5rem}.mt-5{margin-top:1.25rem}
.line-clamp-2{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}
.block{display:block}.flex{display:flex}.hidden{display:none}.h-\[100vh\]{height:100vh}.h-\[1px\]{height:1px}.max-h-\[48px\]{max-height:48px}.w-\[100vw\]{width:100vw}.w-\[250px\]{width:250px}.w-full{width:100%}.max-w-\[640px\]{max-width:640px}
.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-\[10px\]{gap:10px}.gap-\[15px\]{gap:15px}.gap-\[30px\]{gap:30px}.self-center{align-self:center}
.rounded-\[50\%\]{border-radius:50%}.rounded-\[8px\]{border-radius:8px}.border{border-width:1px}.border-b-\[1px\]{border-bottom-width:1px}.border-l-\[0px\]{border-left-width:0}.border-r-\[0px\]{border-right-width:0}.border-gray-700{border-color:#374151}.border-gray-800{border-color:#1f2937}
.bg-\[\#000000cc\]{background-color:#000000cc}.bg-\[\#171717\]{background-color:#171717}.bg-gray-800{background-color:#1f2937}.bg-white{background-color:#fff}
.px-\[20px\]{padding-left:20px;padding-right:20px}.py-\[10px\]{padding-top:10px;padding-bottom:10px}.py-\[15px\]{padding-top:15px;padding-bottom:15px}.pb-\[15px\]{padding-bottom:15px}.pb-\[30px\]{padding-bottom:30px}.pl-\[15px\]{padding-left:15px}.pl-\[25px\]{padding-left:25px}.pr-\[10px\]{padding-right:10px}
.text-\[12px\]{font-size:12px}.text-\[24px\]{font-size:24px}.text-\[32px\]{font-size:32px}.text-\[36px\]{font-size:36px}.text-\[48px\]{font-size:48px}.text-\[\#171717\]{color:#171717}.text-blue-500{color:#3b82f6}.text-gray-500{color:#6b7280}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-\[150ms\]{transition-duration:.15s}
.header-container{display:flex;flex-direction:row;align-items:center;justify-content:space-between}
.drawer-content{display:flex;flex-direction:column}.drawer-content>li,.main-layout-links>li{width:100%;border-top-left-radius:8px;border-bottom-left-radius:8px;text-align:end}.drawer-content>li>a,.main-layout-links>li>a{display:flex;flex:1 1 0%;flex-direction:row;justify-content:flex-start;gap:10px;padding:10px 0 10px 15px}.drawer-active,.main-layout-active{background-color:#ffffff1a}
.main-layout-container{display:flex;flex-direction:row}.main-layout-content{width:100%;max-width:800px;padding:20px 20px 0}.main-layout-side{display:none;width:100%;max-width:200px}.main-layout-links{display:flex;flex-direction:column}
@media (min-width:768px){.md\:relative{position:relative}.md\:block{display:block}.md\:hidden{display:none}.md\:border-l-\[1px\]{border-left-width:1px}.md\:border-r-\[1px\]{border-right-width:1px}.main-layout-content{min-width:500px}.main-layout-side{display:block}}
`;
