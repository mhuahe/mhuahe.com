"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6477],{2081:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>C,contentTitle:()=>S,default:()=>E,frontMatter:()=>k,metadata:()=>v,toc:()=>w});var n=s(4848),l=s(8453),a=s(6540),o=s(7422);const r="1.0";var i=s(3554),h=s.n(i);function d(e){let{className:t,seconds:s}=e;return(0,n.jsx)("time",{dateTime:`P${Math.round(s)}S`,className:t,children:c(s)})}function c(e){const t=new Date(1e3*e),s=t.getUTCHours(),n=t.getUTCMinutes(),l=u(t.getUTCSeconds());return s?`${s}:${u(n)}:${l}`:`${n}:${l}`}function u(e){return("0"+e).slice(-2)}const p="playerContainer_fO3X",x="playerWrapper_w4Ar",j="playerSectionVideo_sbFG",g="playerSectionControl_QQg8",m="playerSectionState_Kve2",y="playerFooter_LrDK";class b extends a.Component{state={url:null,pip:!1,playing:!0,controls:!0,light:!1,volume:.8,muted:!1,played:0,loaded:0,duration:0,playbackRate:1,loop:!1};load=e=>{this.setState({url:e,played:0,loaded:0,pip:!1})};handlePlayPause=()=>{this.setState({playing:!this.state.playing})};handleStop=()=>{this.setState({url:null,playing:!1})};handleToggleControls=()=>{const e=this.state.url;this.setState({controls:!this.state.controls,url:null},(()=>this.load(e)))};handleToggleLoop=()=>{this.setState({loop:!this.state.loop})};handleVolumeChange=e=>{this.setState({volume:parseFloat(e.target.value)})};handleToggleMuted=()=>{this.setState({muted:!this.state.muted})};handleSetPlaybackRate=e=>{this.setState({playbackRate:parseFloat(e.target.value)})};handleOnPlaybackRateChange=e=>{this.setState({playbackRate:parseFloat(e)})};handleTogglePIP=()=>{this.setState({pip:!this.state.pip})};handlePlay=()=>{console.log("onPlay"),this.setState({playing:!0})};handleEnablePIP=()=>{console.log("onEnablePIP"),this.setState({pip:!0})};handleDisablePIP=()=>{console.log("onDisablePIP"),this.setState({pip:!1})};handlePause=()=>{console.log("onPause"),this.setState({playing:!1})};handleSeekMouseDown=e=>{this.setState({seeking:!0})};handleSeekChange=e=>{this.setState({played:parseFloat(e.target.value)})};handleSeekMouseUp=e=>{this.setState({seeking:!1}),this.player.seekTo(parseFloat(e.target.value))};handleProgress=e=>{console.log("onProgress",e),this.state.seeking||this.setState(e)};handleEnded=()=>{console.log("onEnded"),this.setState({playing:this.state.loop})};handleDuration=e=>{console.log("onDuration",e),this.setState({duration:e})};handleClickFullscreen=()=>{o.A.request(document.querySelector(".reactPlayer")).then((e=>{console.log(e)}))};renderLoadButton=(e,t)=>(0,n.jsx)("button",{onClick:()=>this.load(e),children:t});ref=e=>{this.player=e};render(){const{url:e,playing:t,controls:s,light:l,volume:a,muted:o,loop:i,played:c,loaded:u,duration:b,playbackRate:P,pip:k}=this.state,S=r;return(0,n.jsxs)("div",{className:p,children:[(0,n.jsx)("div",{className:x,children:(0,n.jsx)(h(),{ref:this.ref,className:"reactPlayer",url:e,pip:k,playing:t,controls:s,light:l,loop:i,playbackRate:P,volume:a,muted:o,onReady:()=>console.log("onReady"),onStart:()=>console.log("onStart"),onPlay:this.handlePlay,onEnablePIP:this.handleEnablePIP,onDisablePIP:this.handleDisablePIP,onPause:this.handlePause,onBuffer:()=>console.log("onBuffer"),onPlaybackRateChange:this.handleOnPlaybackRateChange,onSeek:e=>console.log("onSeek",e),onEnded:this.handleEnded,onError:e=>console.log("onError",e),onProgress:this.handleProgress,onDuration:this.handleDuration,onPlaybackQualityChange:e=>console.log("onPlaybackQualityChange",e)})}),(0,n.jsx)("div",{className:j,children:(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"YouTube"}),(0,n.jsxs)("td",{children:[this.renderLoadButton("https://www.youtube.com/watch?v=oUFJJNQGwhk","Test A"),this.renderLoadButton("https://www.youtube.com/watch?v=jNgP6d9HraI","Test B"),this.renderLoadButton("https://www.youtube.com/playlist?list=PLogRWNZ498ETeQNYrOlqikEML3bKJcdcx","Playlist")]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u6587\u4ef6"}),(0,n.jsxs)("td",{children:[this.renderLoadButton("https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4","mp4"),this.renderLoadButton("https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/360/Big_Buck_Bunny_360_10s_1MB.webm","webm"),this.renderLoadButton("https://filesamples.com/samples/video/ogv/sample_640x360.ogv","ogv"),this.renderLoadButton("https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3","mp3"),(0,n.jsx)("br",{}),this.renderLoadButton("https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8","HLS (m3u8)"),this.renderLoadButton("https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps_640x360_800k.mpd","DASH (mpd)")]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u81ea\u5b9a\u4e49"}),(0,n.jsxs)("td",{children:[(0,n.jsx)("input",{ref:e=>{this.urlInput=e},type:"text",placeholder:"Enter URL"}),(0,n.jsx)("button",{onClick:()=>this.setState({url:this.urlInput.value}),children:"Load"})]})]})]})})}),(0,n.jsx)("div",{className:`${g}`,children:(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u64ad\u653e"}),(0,n.jsxs)("td",{children:[(0,n.jsx)("button",{onClick:this.handleStop,children:"\u505c\u6b62"}),(0,n.jsx)("button",{onClick:this.handlePlayPause,children:t?"\u6682\u505c":"\u64ad\u653e"}),(0,n.jsx)("button",{onClick:this.handleClickFullscreen,children:"\u5168\u5c4f"}),l&&(0,n.jsx)("button",{onClick:()=>this.player.showPreview(),children:"Show preview"}),h().canEnablePIP(e)&&(0,n.jsx)("button",{onClick:this.handleTogglePIP,children:k?"Disable PiP":"Enable PiP"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u500d\u901f"}),(0,n.jsxs)("td",{children:[(0,n.jsx)("button",{onClick:this.handleSetPlaybackRate,value:1,children:"1x"}),(0,n.jsx)("button",{onClick:this.handleSetPlaybackRate,value:1.5,children:"1.5x"}),(0,n.jsx)("button",{onClick:this.handleSetPlaybackRate,value:2,children:"2x"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)("label",{htmlFor:"muted",children:"\u9759\u97f3"})}),(0,n.jsx)("td",{children:(0,n.jsx)("input",{id:"muted",type:"checkbox",checked:o,onChange:this.handleToggleMuted})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u58f0\u97f3"}),(0,n.jsx)("td",{children:(0,n.jsx)("input",{type:"range",min:0,max:1,step:"any",value:a,onChange:this.handleVolumeChange})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u8fdb\u5ea6\u6761"}),(0,n.jsx)("td",{children:(0,n.jsx)("input",{type:"range",min:0,max:.999999,step:"any",value:c,onMouseDown:this.handleSeekMouseDown,onChange:this.handleSeekChange,onMouseUp:this.handleSeekMouseUp})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)("label",{htmlFor:"controls",children:"\u64ad\u653e\u63a7\u4ef6"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)("input",{id:"controls",type:"checkbox",checked:s,onChange:this.handleToggleControls}),(0,n.jsx)("em",{children:"\xa0 \u6ce8\uff1a\u5c06\u4f1a\u91cd\u65b0\u52a0\u8f7d"})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)("label",{htmlFor:"loop",children:"\u5faa\u73af\u64ad\u653e"})}),(0,n.jsx)("td",{children:(0,n.jsx)("input",{id:"loop",type:"checkbox",checked:i,onChange:this.handleToggleLoop})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u64ad\u653e\u8fdb\u5ea6"}),(0,n.jsx)("td",{children:(0,n.jsx)("progress",{max:1,value:c})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u52a0\u8f7d\u8fdb\u5ea6"}),(0,n.jsx)("td",{children:(0,n.jsx)("progress",{max:1,value:u})})]})]})})}),(0,n.jsx)("div",{className:`${m}`,children:(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"url"}),(0,n.jsx)("td",{children:(e instanceof Array?"Multiple":e)||""})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u72b6\u6001"}),(0,n.jsx)("td",{children:t?"true":"false"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u58f0\u97f3"}),(0,n.jsxs)("td",{children:[(100*a).toFixed(0),"%"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u500d\u901f"}),(0,n.jsx)("td",{children:P})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u64ad\u653e\u8fdb\u5ea6"}),(0,n.jsxs)("td",{children:[(100*c).toFixed(1),"%"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u52a0\u8f7d\u8fdb\u5ea6"}),(0,n.jsxs)("td",{children:[(100*u).toFixed(1),"%"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u603b\u65f6\u957f"}),(0,n.jsx)("td",{children:(0,n.jsx)(d,{seconds:b})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u64ad\u653e\u65f6\u957f"}),(0,n.jsx)("td",{children:(0,n.jsx)(d,{seconds:b*c})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"\u5269\u4f59\u65f6\u957f"}),(0,n.jsx)("td",{children:(0,n.jsx)(d,{seconds:b*(1-c)})})]})]})})}),(0,n.jsxs)("div",{className:y,children:["Version ",(0,n.jsx)("strong",{children:S})," \xb7 ",(0,n.jsx)("a",{href:"https://github.com/CookPete/react-player",children:"GitHub"})," \xb7 ",(0,n.jsx)("a",{href:"https://www.npmjs.com/package/react-player",children:"npm"})]})]})}}function P(){return(0,n.jsx)(b,{})}const k={},S="\u97f3\u9891\u89c6\u9891",v={id:"example/EXAMPLE-Video",title:"\u97f3\u9891\u89c6\u9891",description:"react-player\u6587\u6863",source:"@site/docs/example/EXAMPLE-Video.md",sourceDirName:"example",slug:"/example/EXAMPLE-Video",permalink:"/mhuahe.com/docs/example/EXAMPLE-Video",draft:!1,unlisted:!1,editUrl:"https://github.dev/mhuahe/mhuahe.com/blob/master-ts/docs/example/EXAMPLE-Video.md",tags:[],version:"current",lastUpdatedBy:"heminhua",lastUpdatedAt:1729094642e3,frontMatter:{},sidebar:"example",next:{title:"DocCardList\u793a\u4f8b",permalink:"/mhuahe.com/docs/category/doccardlist\u793a\u4f8b"}},C={},w=[{value:"ReactPlayer\u793a\u4f8b",id:"reactplayer\u793a\u4f8b",level:2}];function f(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"\u97f3\u9891\u89c6\u9891",children:"\u97f3\u9891\u89c6\u9891"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.npmjs.com/package/react-player",children:"react-player\u6587\u6863"})}),"\n",(0,n.jsx)(t.h2,{id:"reactplayer\u793a\u4f8b",children:"ReactPlayer\u793a\u4f8b"}),"\n","\n",(0,n.jsx)(P,{})]})}function E(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}}}]);