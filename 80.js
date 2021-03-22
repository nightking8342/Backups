function SYYJ(){
var d = [];
var conts = parseDomForArray(getResCode(), 'body&&.mo-cols-lays:has(ul)');
for (var i in conts) {
if(conts.length>1){
  d.push({
       title: parseDomForHtml(conts[i], 'h2&&Text'),
       url: $(parseDom(conts[i], 'a&&href').replace('.html','-fypage.html')).rule(()=>{
var d=[];
var list = parseDomForArray(getResCode(), '.mo-cols-lays:has(ul)&&ul,1&&li');
for (var j in list) {
   var img = parseDom(list[j], 'a&&data-original');
  d.push({
       title: parseDomForHtml(list[j], '.mo-situ-name&&Text'),
       desc: parseDomForHtml(list[j], '.mo-situ-rema&&Text'),
       img: img+'@Referer='+img,
       url: $(parseDom(list[j], 'a&&href')).rule(()=>{
       var fftq = getVar('fftq');eval(fftq);EJ()
       })
  });
 }
setResult(d)
}),
       col_type: 'text_1'
  });
}
var list = parseDomForArray(conts[i], 'ul,1&&li');
for (var j in list) {
   var img = parseDom(list[j], 'a&&data-original');
  d.push({
       title: parseDomForHtml(list[j], '.mo-situ-name&&Text'),
       desc: parseDomForHtml(list[j], '.mo-situ-rema&&Text'),
       img: img+'@Referer='+img,
       url: parseDom(list[j],'a&&href')
  });
 }
}
setResult(d)}
function EJ(){
var d = [];
d.push({
   desc:'240&&float',
		col_type: 'x5_webview_single'
});
var html = getResCode();
var arts = parseDomForArray(html, 'body&&.mo-movs-btns');
var tabs = [];
for (var i in arts) {
    tabs.push(parseDomForHtml(arts[i], 'Text'))
}
var conts = parseDomForArray(html, 'body&&.mo-movs-item');
var lists =[];
for (var i in conts) {
    lists.push(parseDomForArray(conts[i], 'ul&&li'))
}

d.push({
	title: '分类：'+ parseDomForHtml(html, 'li,47&&a&&Text')+' | '+parseDomForHtml(html, 'li,48&&a&&Text')+' | '+parseDomForHtml(html, 'li,49&&a&&Text')+'\n'+parseDomForHtml(html, 'li,45&&li&&Text').substring(0, 15)+'\n'+parseDomForHtml(html, 'li,46&&li&&Text').substring(0, 15),
	desc:'更新时间：'+parseDomForHtml(html,'li,50&&li&&Text').substring(0, 15),
	pic_url: parseDom(html, '.mo-situ-pics&&data-original'),
	url: MY_URL,
	col_type: 'movie_1_vertical_pic'
});

var des_desc = parseDomForHtml(html, '.mo-lhxl-24px&&Text');
    if (des_desc.length > 60) {
            des_desc = des_desc.replace(des_desc, des_desc.substring(0, 60) + "......");
      }

d.push({
          title: des_desc,
          col_type: 'long_text'
});

var lazy = `@lazyRule=.js:try{var H = request(input);var U = base64Decode(parseDomForHtml(H, '.mo-play-load&&data-play').slice(3));var jx = parseDomForHtml(H, '.mo-play-load&&data-parse');if(U.indexOf('m3u8')!=-1){U}else if(U.indexOf('http')==-1){eval(parseDomForHtml(request(jx+U),'body&&script&&Html').replace(/YZM(.*)/,''));config.url}else{let res = request('https://jx.bofangya.com/player/analysis.php?v='+U,{});var html = res;eval(getCryptoJS());var config = {url: parseDomForHtml(html,'body&&script&&Html').match(/"url": "(.*)"/)[1]};var PAR = {secret(word,code,isDecrypt){code=CryptoJS.MD5(code).toString();var iv = CryptoJS.enc.Utf8.parse(code.substring(0x0,0x10));var key=CryptoJS.enc.Utf8.parse(code.substring(0x10));if(isDecrypt){return CryptoJS.AES.decrypt(word,key,{iv:iv,padding:CryptoJS.pad.Pkcs7}).toString(CryptoJS.enc.Utf8)}return CryptoJS.AES.encrypt(word,key,{iv:iv,mode:CryptoJS.mode.CBC,padding:CryptoJS.pad.Pkcs7}).toString()},compare(key){return function(a,b){return a[key]-b[key]}},};var _pr=parseDomForHtml(html,'meta[name="viewport"]&&id').replace('vod_','');var _pu=parseDomForHtml(html,'meta[charset="UTF-8"]&&id').replace('vod_','');var _puArr=[];var _newArr=[];var _code='';for(var i=0;i<_pu.length;i++){_puArr.push({id:_pu[i],text:_pr[i]})}_newArr=_puArr.sort(PAR.compare("id"));for(var i=0;i<_newArr.length;i++){_code+=_newArr[i].text}config.url=PAR.secret(config.url,_code,true);var play = config.url;play.indexOf('upos')!=-1?play+';{User-Agent@Mozilla/5.0＆＆＆＆Referer@'+U+'}':play}}catch(e){input}`;

function setTabs(tabs, vari) {
    d.push({
        title: '‘‘线路’’',
        col_type: 'text_center_1'
    })
    var title = '';
    for (var i = 0; i < tabs.length; i++) {
        var url = "hiker://empty@lazyRule=.js:putVar('"+vari+"', '"+i+"');refreshPage();'toast://切换成功！'";
        d.push({
            title: tabs[i] + (getVar(vari, '0')==i?'✅':''),
            url: url,
            col_type: tabs.length>2?'text_3':'text_2'
        })
    }
    d.push({
        col_type: 'line_blank'
    })
}

function setLists(lists, index) {
    d.push({
        title: '‘‘选集’’',
        col_type: 'text_center_1'
    })
    var list = lists[index];
    for (var j in list) {
        d.push({
            title: parseDomForHtml(list[j], 'Text'),
            url: parseDom(list[j],'a&&href') + lazy,
            col_type: list.length >3?'text_3':'text_2'
        });
    }
}

setTabs(tabs, MY_URL);
setLists(lists, getVar(MY_URL, '0'));
setResult(d);
}
function SSYJ(){
var d = [];
var list = parseDomForArray(getResCode(),'body&&dl:has(dd)');
for (var j in list) {
  d.push({
       title: parseDomForHtml(list[j], 'h1&&Text'),
       desc: parseDomForHtml(list[j], '.mo-coxs-center&&Text'),
       content:parseDomForHtml(list[j], '.mo-cols-lg10--h1&&Text'),
       img: parseDom(list[j], 'a&&data-original'),
       url: parseDom(list[j], 'a&&href')
  });
}
setResult(d)
}