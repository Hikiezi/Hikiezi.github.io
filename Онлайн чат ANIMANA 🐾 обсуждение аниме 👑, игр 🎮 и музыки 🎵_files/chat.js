usr_online=false; mobile=0; ohash=''; dbid=0; ajnm=0; sound=0; // usr_online[id]=[ext.id,group,name]
dragypos=0; dragdown=false; allowselect=0; autoscroll=1; globx=0; globy=0; attach_type=false; chatflow=0; mva_glo=new Object();mva_cnt=0;
hoop_on=1; obj2hoop=false; poststamp=0; current_status=1; fmedia_load=0; freeaudio=1; usrinteaction=0;last_panel=0
ignored_users=new Array('0'); pmnotifications=new Array('0'); user_stickers=new Array('0'); check=new Array(); phistorycached=new Array(); phistoryhidebtn=new Array(); mdc=0; offmsgok=1; msg2rem=[];
srv_usr_id=0; ext_usr_id=0; active_usrname=''; active_grpname=''; avatars_loaded=0; div_roomhistory=false; div_userhistory=false; blockroomchange=0; blockuserchange=0;
ax_intv=false; rmatch=false;nmatch=false;pmarrnotify=[];uxtra_avatars={};all_users = {};uxtra_data={};uxtra_expire=[];load_history=0;avpms_nope=0; dmore_allow=1; layout_frs=1;
extpro2preview=''; lastsavedtstamp=Math.floor(Date.now()/1000); var usr_status="";var usr_visit="";var usr_gender="";
sign1_reply=''
sign2_reply=''
sign_delete='✖'
notice_volume=1
uo_rooms = {};

arr_rmb_rooms=new Array();
arr_rmb_users=new Array();

zone=new Date();zone=-zone.getTimezoneOffset();

try{dtitle=top.document.title.toString()}catch(e){dtitle=false}
if(typeof window.orientation !== 'undefined' && 'ontouchstart' in document.documentElement){mobile=1;usrinteaction=1}

function de(x){return document.getElementById(x)}

// ----------

function acntx(){usrinteaction=1;rcntx()}

function rcntx(){
window.removeEventListener('click',acntx)
window.removeEventListener('wheel',acntx)
window.removeEventListener('keypress',acntx)
window.removeEventListener('touchstart',acntx)}

// ----------

audf=document.createElement('audio')
if(window.parent && typeof mobileapp!='undefined' && mobileapp>1){
function play_s(x){if(sound_on==1 && x>0 && sound_options[x]>0){parent.postMessage(x,'*')}}}
else{
function play_s(x){
if(sound_on<1 || usrinteaction<1 || x<1 || freeaudio<1 ||  sound_options[x]<1){return}
switch(x){
case 1: y=enter_mp3;break
case 2: y=messg_mp3;break
case 3: y=pmntf_mp3;break
case 4: y=bgmsg_mp3;break
case 5: y=pmmsg_mp3;break
case 6: y=online_yu_mp3;break
default:y=false}
freeaudio=0; if(y && y.length>20){audf.src=y;audf.play()}; setTimeout('freeaudio=1',100)
}}

// ----------

function verti_pos(){
ph=de('middps').offsetHeight
dh=document.documentElement.clientHeight
offset=parseInt((dh-ph)/2)
if(offset>0){de('middps').style.marginTop=offset+'px'}}

// ----------

function shoop(x,y,z){
// z = time; y = scaleFactor: 1,2,3 etc
obj2unhoop=x; y=1-y*0.1
obj2unhoop.style.transform='scale('+y+','+y+')'
setTimeout("obj2unhoop.style.transform='scale(1,1)';obj2unhoop.style.transform='rotate(0deg)'",z)}

// ----------

function cdispl(a){return a.currentStyle?a.currentStyle.display:getComputedStyle(a,null).display}

function clear_hoop(){
if(typeof opad1 == 'number'){clearTimeout(opad1)}
if(typeof opad2 == 'number'){clearTimeout(opad2)}
if(obj2hoop){
if(hoop_direction==1){obj2hoop.style.display='block';obj2hoop.style.opacity=1;}
if(hoop_direction==2){obj2hoop.style.display='none';obj2hoop.style.opacity=0;}
}}

function hoop(a,b){

if(typeof a!='object'){a=de(a)}

if(hoop_on<1){
if(b>0){a.style.display='block'}else{a.style.display='none'}
return}

clear_hoop()

if(b==1 && cdispl(a)=='none'){
	if(typeof mpr !== 'undefined' && a==mpr){
		 var element = document.getElementById("media_close");
		 var element3 = document.getElementById("media_hide");
		 var element2 = document.getElementById("media");
		 element.classList.toggle("block");
		 element2.classList.toggle("block");
		 element3.classList.toggle("block");
	}	
	if(typeof mpp !== 'undefined' && a==mpp){
		 var element = document.getElementById("music_close");
		 var element3 = document.getElementById("music_hide");
		 var element2 = document.getElementById("music");
		 element.classList.toggle("block");
		 element2.classList.toggle("block");
		 element3.classList.toggle("block");
	}	
hoop_direction=1
a.style.display='block'; a.style.opacity=0
a.className=a.className.replace(' sfade0','')
obj2hoop=a
opad1=setTimeout("obj2hoop.style.opacity=1;obj2hoop.className+=' sfade1'",50)
opad2=setTimeout("obj2hoop=false",500)}

if(b==0 && cdispl(a)=='block'){
	if(typeof mpr !== 'undefined' && a==mpr){
		 var element = document.getElementById("media_close");
		 var element3 = document.getElementById("media_hide");
		 var element2 = document.getElementById("media");
		 element.classList.toggle("block");
		 element2.classList.toggle("block");
		 element3.classList.toggle("block");
		 hoop(hst,0);
		 mpr.innerHTML='';
	}	
	if(typeof mpp !== 'undefined' && a==mpp){
		 var element = document.getElementById("music_close");
		 var element3 = document.getElementById("music_hide");
		 var element2 = document.getElementById("music");
		 element.classList.toggle("block");
		 element2.classList.toggle("block");
		 element3.classList.toggle("block");
		 hoop(hst,0);
		 mpp.innerHTML='';
	}	
hoop_direction=2; a.style.opacity=0
a.className=a.className.replace(' sfade1','')
a.className+=' sfade0'; obj2hoop=a
opad1=setTimeout("obj2hoop.style.display='none'",400)
opad2=setTimeout("obj2hoop=false",500)}
}

// ----------

function init(){
display_layout_rsz(1); window.onresize=display_layout_rsz; ax_ping(0); ax_status(welcome_msg);
// display sound option onload and on mobile only
// if(mobile==1 && mobileapp<2 && sound_on>0){swap_panel(1);hst.style.display='block';pab.style.display='block';hoop(pan,1)}
}

// ----------

function disconnectonunload(){
currenttstamp=Math.floor(Date.now()/1000)
if(currenttstamp-lastsavedtstamp>unl_timeout){
if(typeof ax_intv == 'number'){clearInterval(ax_intv)}
hso.style.display='block';sys.innerHTML=lang['connection_closed'];hoop(sys,1);return true}
else{lastsavedtstamp=currenttstamp; return false}}

// ----------

function ax_ping(msg){
if(disconnectonunload()){return}

if(typeof ax_intv == 'number'){clearInterval(ax_intv)}
rq='mtoken='+encodeURIComponent(mtoken)+'&rtoken='+encodeURIComponent(rtoken)+'&msg='+encodeURIComponent(msg)+'&tousername='+encodeURIComponent(active_usrname)+'&status='+current_status+'&ohash='+ohash+'&dbid='+dbid+'&zone='+zone+'&ampm='+time_ampm+'&ajnm='+ajnm+'&mobile='+mobile+'&room='+current_room
ax_pulse=new XMLHttpRequest()
ax_pulse.open('post','ax_ping.php')
ax_pulse.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
ax_pulse.onreadystatechange=ax_ansr; ax_pulse.send(rq)
ax_intv=setInterval('ax_ping(0)',ping_period*1000)}

function ax_ansr(){
if(ax_pulse.readyState==4 && ax_pulse.status==200){
rcv=ax_pulse.responseText.toString()
if(rcv=='idehic'){gourl('./info.php?q=rem');return}

try{
rcv=JSON.parse(rcv); if(!rcv[4]){return}
if(rcv[4]<=ajnm){return}else{ajnm=rcv[4]}
ohash=rcv[2]; dbid=rcv[3]; sound=0
if(rcv[5]){console.log(rcv[5])}
if(rcv[0]){usr_online=rcv[0];online_construct();// sound=1
}

rmsg=rcv[1];for(m in rmsg){msg_display(rmsg[m])}
play_s(sound)
}

catch(e){console.log(e)}
}}

// ----------

function ax_status(x){onl.innerHTML=''; log.innerHTML=x; if(load_history>0){load_hist_init()}}

// ----------

function tsnipsend(x){
if(typeof tsniptm=='number'){clearTimeout(tsniptm)}
inp.value=x;cb2msg();msg_send();shoop(sms,1,100);hoop(tsnipdiv,0)}

function tsnipshow(){
if(typeof tsniptm=='number'){clearTimeout(tsniptm)}
if(lof.style.display=='block'){lof.style.display='none';hsp.style.display='none'}
if(de('tsnipdiv').style.display=='block'){
hoop('tsnipdiv',0);inp_focus()}else{
lstorentries='';entrarr=store_msg.split("\n")
for(i=0;i<entrarr.length;i++){
if(entrarr[i].trim().length>0){
lstorentries+='<div class="svg_star" onclick="tsnipsend(this.innerHTML)">'+entrarr[i].trim()+'</div>'
}} de('tsnipmsg').innerHTML=lstorentries
hoop('tsnipdiv',1)
tsniptm=setTimeout('tsniphide()',4000)}}

function tsniphide(){
if(de('tsnipdiv').style.display=='block'){
hoop('tsnipdiv',0)}}

function tsnipedit(){
preview(store_msg.trim(),32)
de('tsnipdiv').style.display='none'}

function tsnipsave(){
close_dialog('#media_test');
store_msg=de('tsnedit').value.trim()
store_msg=store_msg.replace(/</g,'[').replace(/>/g,']')
localStorage.setItem(storkey_msg,store_msg)
// manage_esc()
}

// ----------

function msg_send(){
if(inp.value.trim().length<1){tsnipshow();return}

if(inp.readOnly==true){inp.value='';return}

currentt=Math.floor(Date.now()/1000)
if(currentt-poststamp<postint || blockuserchange>0 || blockroomchange>0){
if(currentt-poststamp<postint){tmpspammsg=lang['no_spam']}else{tmpspammsg=lang['pwait']}
usrmsg=''; // usrmsg=inp.value
inp.value=tmpspammsg
inp.disabled=true
setTimeout('inp.disabled=false;inp.value=usrmsg;inp_focus()',1000)
return}

if(isNaN(inp.value) && attach_type==false){
rmatch=false; nmatch=false; gmatch=false;

rmatch=runrbox(inp.value);tx=inp.value
if(rmatch){setTimeout('rbx_snd(rmatch,tx)',300)}

if(rmatch==false){nmatch=runnbox(inp.value)
if(nmatch){setTimeout('nbx_snd(nmatch)',300)}}

if(rmatch==false && nmatch==false){gmatch=rungbox(inp.value)
if(gmatch){setTimeout('gbx_snd(gmatch)',300)}}

}

// removing swords
if(swords.length>0){ for(fx in swords){
if(inp.value.indexOf(swords[fx])>-1){inp.value='';
return}}}

inpu=inp.value.replace(emojirms,'$1«$2»')

msg={}
msg['to']=ext_usr_id
msg['color']=current_color
msg['text']=inpu
msg['room']=current_room
if(!isNaN(attach_type)){msg['attach']=attach_type}
msg=JSON.stringify(msg)

if(lof.style.display=='block'){if(srv_usr_id==0){hsp.style.display='none'} obj2hoop=false; lof.style.display='none'}

if(chatflow<1){ax_ping(msg)
if(ext_usr_id>0 && pm_reg>0){pm_reorder(ext_usr_id,active_usrname)}
}

inp.value=''
attach_type=false
cb2clear()
inp_focus()
ascroll()
scrolllog()
poststamp=currentt}

// ----------

function change_room(x){
if(typeof rooms[x]=='object' && x!=current_room && blockroomchange<1){
rmb_txt('r_hide')
current_room=x;log.innerHTML=split_room_content(x)
for(i in msg2rem){if(de(msg2rem[i])){de(msg2rem[i]).style.display='none'}}
scrolllog();  ascroll(); recalc_msg()
btl.style.backgroundImage='linear-gradient(to right,'+btlcolor+','+btlcolor+',#'+rooms[current_room][0]+')';;
//bta.style.backgroundImage='linear-gradient(to right,transparent,transparent,#'+rooms[current_room][0]+')'
log.className='bgbwsp rr'+x; rmb_txt('r_show')
ax_ping(0)
online_construct()
}}

function split_room_content(x){
if(rooms[x][4]<=msgs2keep){return rooms[x][3]+rooms[x][1]}
else{
splitpoint=rooms[x][4]-msgs2keep+1
allmsg=rooms[x][3]+rooms[x][1]
allmsg=allmsg.split('<!--'+splitpoint+'-->')
if(allmsg[1]){rooms[x][1]=allmsg[1];return allmsg[1]}
else{return allmsg[0]}
}}

// ----------

function key_changer(e){
// e=parseInt(e);troom=e-48
// if(rcodes[troom]){change_room(rcodes[troom]);return}

// if(e==39){
// stpp=0;index=rcodes.indexOf(current_room)
// for(i=1;i<rcodes.length;i++){
// if(stpp==1){change_room(rcodes[i]);return}
// if(i==index){stpp=1}} change_room(1)}

// if(e==37){
// stpp=0;index=rcodes.indexOf(current_room)
// for(i=rcodes.length;i>0;i--){
// if(stpp==1){change_room(rcodes[i]);return}
// if(i==index){stpp=1}} change_room(rcodes[rcodes.length-1])}

}

// ----------

function change_status(s,t){
if(s!=current_status){
current_status=s
active_status=s
ax_ping(0)
de('curr_status_ico').className='pchat_notify status'+s
} hst.style.display='none'; hoop(ons,0); inp_focus(); de('ostt').title=t}

// ----------

function display_layout_rsz(o_init){
dw=parseInt(window.innerWidth)
pc=parseInt(dw/35)
if(dw<400){
onl.className='online_users2 x_bcolor_x'
log.style.width='98%'
if(o_init==1){onl.style.display='none';layout_frs=0}
}  else{
onl.className='online_users1 x_bcolor_x'
log.style.width=(dw-(onl.clientWidth+pc))+'px'
}scrolllog()}

// ----------

function display_online_usr(){
if(ext_usr_id){return}
dw=parseInt(window.innerWidth)
pc=parseInt(dw/35)
if(layout_frs>0){
hoop(onl,0);layout_frs=0
log.style.width='98%'
} else{
hoop(onl,1);layout_frs=1
de('global_notify').className='pchat_notify'
if(dw>400){log.style.width=(dw-(onl.clientWidth+pc))+'px'}
}scrolllog()}

// ----------

function swap_minput(x){
if(!obj2hoop){
de('extmedia').style.display='none'
de('googlemp').style.display='none'
de('rolldice').style.display='none'
de('extscode').style.display='none'
de('etextstr').style.display='none'
de('extspoll').style.display='none'
switch(x){
case 1:hoop('extmedia',1);ph_rotate();break
case 2:hoop('googlemp',1);break
case 3:hoop('rolldice',1);break
case 4:hoop('extscode',1);break
case 5:hoop('extspoll',1);break
case 6:hoop('etextstr',1);break
}}}

mediasources=Array(' ',' YouTube URL ',' Vimeo URL ',' DailyMotion URL ',' Twitch URL: Channel/Video ',' SoundCloud URL ',' MixCloud URL ')
mdsid=0

function ph_rotate(){
if(typeof phintervl == 'number'){clearInterval(phintervl);mdsid=0}
ph_action();phintervl=setInterval('ph_action()',1000)}

function ph_action(){
mdp=de('mediainp')
if(mediasources[mdsid]){mdp.placeholder=mediasources[mdsid];mdsid+=1}
else{mdp.placeholder=mediasources[0];mdsid=0
if(typeof phintervl == 'number'){clearInterval(phintervl)}}
}

// ----------

function val_extmedia(x){

if(x.indexOf('youtu.be/')!=-1 || x.indexOf('youtube.com/watch?v=')!=-1){
if(x.indexOf('youtu.be/')!=-1){x=x.split('youtu.be/')}
if(x.indexOf('youtube.com/watch?v=')!=-1){x=x.split('youtube.com/watch?v=')}
if(typeof x[1] == 'string' && x[1].length>10){youtubeid=x[1].substr(0,11)
return [youtubeid,6]}}

if(x.indexOf('vimeo.com/')!=-1){
x=x.split('vimeo.com/')
if(typeof x[1] == 'string' && x[1].length>2){
vimeoid=parseInt(x[1]); return [vimeoid,8]}}

if(x.indexOf('.mp3')!=-1){
if(typeof x == 'string' && x.length>2){
mp3oid=x; return [mp3oid,34]}}

if(x.indexOf('soundcloud.com/')!=-1){
x=x.split('soundcloud.com/')
if(typeof x[1] == 'string' && x[1].length>2){x=x[1].split('?')
soundloudid=x[0].substr(0,99);return [soundloudid,7]}}

if(x.indexOf('dailymotion.com/video/')!=-1){
x=x.split('video/')
if(typeof x[1] == 'string' && x[1].length>2){
dmid=x[1].split('?'); dmid=dmid[0]; return [dmid,26]}}

if(x.indexOf('mixcloud.com')!=-1){
x=x.split('mixcloud.com')
if(typeof x[1] == 'string' && x[1].length>2){
mixcloudid=x[1].replace('/','.');return [mixcloudid,9]}}

if(x.indexOf('twitch.tv/')!=-1){
if(x.indexOf('twitch.tv/videos/')!=-1){
x=x.split('twitch.tv/videos/')
if(typeof x[1] == 'string' && !isNaN(x[1])){
ttv=parseInt(x[1]);return [ttv,28]}}
x=x.split('twitch.tv/')
if(typeof x[1] == 'string'){
ttv=x[1];return [ttv,29]}}

return false}

// ----------

function parse_attach(a,b){
if(b == 34) mp3 = a
a=a.replace('//','')
a=a.replace(/[^a-zA-Z0-9\/\.\,\(\)\:\_\-\?\= ]+/g,'')
c=a.split('.'); c=c.sort(function(u,t){return t.length-u.length})
c=b64e(c[0]); c=c.substr(-8,4)
//if(b==1){a.split(';');tmp_msg_a=a; console.log(a);}
if(b>99){b-=100}
if((b<4 || b==17 || b==18) && a.search(attach_path)!=0){return 'WRONG ATTACH DIRECTORY: '+a}

switch(b){
case 1  : if(thmb>0 && a.search('.php')<0){text='<a href="'+a+'" data-lightbox="'+a+'" class="thumb_ipict x_bcolor_y bshadow pointer" style="background-image:url('+a+'.jpg)"><span class="svg_pict x_circle"></span></a>'}else{text='<span class="svg_pict chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">'+lang['image']+' '+c+'</span>'};break
//case 1  : if(thmb>0 && a.search('.php')<0){text='<div class="thumb_ipict x_bcolor_y bshadow pointer" style="background-image:url('+a+'.jpg)" onclick="preview(\''+a+'\','+b+')"><span class="svg_pict x_circle"></span></div>'}else{text='<span class="svg_pict chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">'+lang['image']+' '+c+'</span>'};break
case 2  : if(fftb>0 && a.search('.php')<0){text='<div class="thumb_a_msg x_bcolor_y bshadow pointer" style="background-image:url('+a+'.webp)" onclick="preview(\''+a+'\','+b+')"><span class="svg_audi x_circle"></span></div>'}else{text='<span class="svg_audi chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">'+lang['audio']+' '+c+'</span>'};break
case 3  : if(fftb>0 && a.search('.php')<0){text='<div class="thumb_v_msg x_bcolor_y bshadow pointer" style="background-image:url('+a+'.webp)" onclick="preview(\''+a+'\','+b+')"><span class="svg_vide x_circle"></span></div>'}else{text='<span class="svg_vide chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">'+lang['video']+' '+c+'</span>'};break
case 4  : text='<span class="svg_dice chat_attach bshadow pointer">'+a+'</span>';break
case 5  : text='<span class="svg_gmap chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">GoogleMap '+c+'</span>';break
case 6  : if(thmb>2){yth='https://img.youtube.com/vi/'+a+'/mqdefault.jpg';text='<div class="thumb_ytgph svg_vide bshadow pointer" style="background-image:url('+yth+')" onclick="preview(\''+a+'\','+b+')"><span class="x_accent_bg youtube_bg">YOUTUBE</span></div>'}else{text='<span class="svg_vide chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">YouTube '+c+'</span>'};break
case 7  : text='<span class="svg_audi chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">SoundCloud '+c+'</span>';break
case 8  : text='<span class="svg_vide chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">Vimeo '+c+'</span>';break
case 9  : text='<span class="svg_audi chat_attach bshadow pointer" onclick="preview(\''+a.toString().replace('.','%2F')+'\','+b+')">MixCloud '+c+'</span>';break
case 10 : text='';break // delete message (AX Pro)
case 11 : text='<span class="svg_code chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">code± '+c+'</span>';break
case 12 : text='';break; // QR code - direct preview
case 13 : text='';break; // empty to match with the next switch
case 14 : if(dood>0 && thmb>1){text='<div class="thumb_ipict x_bcolor_y bshadow pointer" style="background-image:url('+attach_path+'/dood_'+a+'.png)" onclick="preview(\''+a+'\','+b+')"><span class="svg_dodl x_circle"></span></div>'}else{text='<span class="svg_dodl chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">'+lang['doodle']+' '+c+'</span>'};break

case 15 : a=a.split(' '); text='<img src="https://media.tenor.com/'+a[0]+'" class="tenor_inchat svg_pict bshadow pointer" alt="" onclick="preview(\'https://media.tenor.com/'+a[1]+'\','+b+')" />';break
case 16 : text='<img src="'+stimoji_dir+'/'+a+'.svg" class="stimoji_inchat" alt="" />';break

case 17 : if(fftb>0 && a.search('.php')<0){text='<div class="thumb_a_msg x_bcolor_y bshadow pointer" style="background-image:url('+a+'.webp)" onclick="preview(\''+a+'\','+b+')"><span class="svg_voic x_circle"></span></div>';}else{text='<span class="svg_voic chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">'+lang['vomsg']+' '+c+'</span>'};break
case 18 : if(fftb>0 && a.search('.php')<0){text='<div class="thumb_v_msg x_bcolor_y bshadow pointer" style="background-image:url('+a+'.webp)" onclick="preview(\''+a+'\','+b+')"><span class="svg_vmsg x_circle"></span></div>';}else{text='<span class="svg_vmsg chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">'+lang['vomsg']+' '+c+'</span>'};break

case 19 : text='<span class="svg_news chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">'+lang['lnews']+'</span>';break
case 20 : text='';break; // random news in jbox
case 21 : a=a.split(' '); text='<img src="https://media.tenor.com/'+a[0]+'" class="tenor_inchat svg_pict bshadow pointer" alt="" onclick="preview(\'https://media.tenor.com/'+a[1]+'\','+b+')" />';break
case 24 : break; // extended profile
case 25 : text='<span class="svg_poll chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">'+lang['poll']+' '+c+'</span>';break
case 26 : text='<span class="svg_vide chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">DailyMotion '+c+'</span>';break
case 27 : text='<span class="svg_tstr chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">'+lang['tstream']+' '+c+'</span>';break
case 28 : text='<span class="svg_vide chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">TwitchTV/Vd '+c+'</span>';break
case 29 : text='<span class="svg_vide chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">TwitchTV/Ch '+c+'</span>';break
case 31 : text='<span class="svg_quiz chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">'+'🆀🆄🅸🆉'+' '+c+'</span>';break
case 34 : text='<span class="svg_audi chat_attach bshadow pointer" onclick="preview(\''+mp3+'\','+b+')">.mp3 music '+c+'</span>';break

default : text='<span class="svg_file chat_attach bshadow pointer" onclick="preview(\''+a+'\','+b+')">'+lang['file']+' '+c+'</span>';break
} return text }

// ----------

function preview(a,b){

//img='<div class="svg_pict preview_image pointer" style="background-image:url('+a+')"><span onclick="if(ptoken.length>5){preview(\''+a+'\',13)}else{this.style.opacity=\'0.7\'} event.stopPropagation()" class="preview_paint pointer x_circle svg_dodl"></span></div>'
img='<div class="preview_image pointer"><span onclick="if(ptoken.length>5){preview(\''+a+'\',13)}else{this.style.opacity=\'0.7\'} event.stopPropagation()" class="preview_paint pointer x_circle svg_dodl"></span><img src="'+a+'" /></div>'
aud='<audio id="audioplayer" src="'+a+'" controls="controls"></audio>'
mp3='<audio id="audioplayer" src="'+a+'" controls="controls"></audio>'
vid='<video id="videoplayer" src="'+a+'" style="width:100%;height:100%" controls="controls"></video>'
tnr='<video id="tenorplayer" src="'+a+'" style="width:100%;height:100%" controls="controls" loop="loop"></video>'
map='<iframe class="ifrsrc" src="map.php?q='+a+'"></iframe>'
ytb='<iframe class="ifrsrc" allowfullscreen="allowfullscreen" src="https://www.youtube.com/embed/'+a+'"></iframe>'
snc='<iframe class="ifrsrc" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/'+a+'"></iframe>'
vim='<iframe class="ifrsrc" allowfullscreen="allowfullscreen" src="https://player.vimeo.com/video/'+a+'"></iframe>'
dym='<iframe class="ifrsrc" allowfullscreen="allowfullscreen" src="https://www.dailymotion.com/embed/video/'+a+'"></iframe>'
mxc='<iframe class="ifrsrc" style="background-color:#222" src="https://www.mixcloud.com/widget/iframe/?feed='+a.toString().replace('.','%2F')+'"></iframe>'
cdd='<iframe class="ifrsrc" src="codepreview.php?q='+a+'"></iframe>'
pll='<iframe class="ifrsrc" src="poll.php?q='+a+'"></iframe>'
tsr='<iframe class="ifrsrc" src="txtstream.php?q='+a+'"></iframe>'
qui='<iframe class="ifrsrc" src="quizinit.php?q='+a+'"></iframe>'
qrc='<iframe class="ifrsrc" src="qrcode.php?q='+a+'"></iframe>'
pnt='<iframe class="ifrpnt" src="paint.php?bgi='+a+'&ptoken='+encodeURIComponent(ptoken)+'" id="pframe"></iframe>'
ppr='<iframe class="ifrpnt" src="paint_play.php?q='+a+'" id="dframe"></iframe>'
nwq='<iframe class="ifrsrc" src="news.php?q='+a+'"></iframe>'
nwt='<iframe class="ifrsrc" src="news.php?t='+a+'"></iframe>'
tn1='<iframe src="" class="ifrsrc" name="transcriptbox"></iframe><form id="transcriptform" action="transcript.php" method="post" target="transcriptbox"><input type="hidden" name="zone" value="'+zone+'" /><input type="hidden" name="ampm" value="'+time_ampm+'" /><input type="hidden" name="mtoken" value="'+mtoken+'" /><input type="hidden" name="rtoken" value="'+rtoken+'" /><input type="hidden" name="tuid" value="'+a+'" /></form>'
tn2='<iframe src="" class="ifrsrc" name="transcriptbox"></iframe><form id="transcriptform" action="transcript.php" method="post" target="transcriptbox"><input type="hidden" name="zone" value="'+zone+'" /><input type="hidden" name="ampm" value="'+time_ampm+'" /><input type="hidden" name="mtoken" value="'+mtoken+'" /><input type="hidden" name="rtoken" value="'+rtoken+'" /><input type="hidden" name="room" value="'+a+'" /></form>'
tt1='<iframe class="ifrsrc" src="https://player.twitch.tv/?video='+a+'&parent='+window.location.hostname+'"></iframe>'
tt2='<iframe class="ifrsrc" src="https://player.twitch.tv/?channel='+a+'&parent='+window.location.hostname+'"></iframe>'
pif='<iframe class="ifrsrc" src="'+a+'"></iframe>'
tsn='<textarea id="tsnedit" class="x_bcolor_y x_all_rounded" placeholder="'+lang['snips']+'" style="resize:none;width:100%;padding:5%;height:300px;overflow:auto;line-height:140%"></textarea><input type="button" class="x_bcolor_z x_all_rounded" style="width:100%;height:50px;font-weight:bold" onclick="tsnipsave()" value="Ок" />'
if(uxtra_avatars[ext_usr_id]){gbbg='background-image:url('+atob(uxtra_avatars[ext_usr_id])+')'}else{gbbg=''}
kbn='<div style="padding:20px" class="x_bcolor_y x_all_rounded"><div class="kickban_div" style="'+gbbg+'">'+lang['rstr'].replace('%USER%','<b>'+active_usrname+'</b>')+'<br /><small class="svg_uoff x_bcolor_z">1m-24h</small>&nbsp;<small class="svg_kick x_bcolor_z">1h-365d</small></div><input id="kickban_num" type="text" maxlength="3" placeholder="'+lang['period']+'" class="x_bcolor_y x_accent_bb" style="float:left;width:45%" /><select id="kickban_unt" style="float:right;width:45%" class="x_bcolor_y x_accent_bb"><option value="60">'+lang['minutes']+'</option><option value="3600">'+lang['hours']+'</option><option value="86400">'+lang['days']+'</option></select><br style="clear:both" /><textarea id="kickban_res" class="x_overal x_all_rounded kickban_txtrea" maxlength="250" placeholder="'+lang['reason']+'"></textarea><div style="display:flex;justify-content:space-between"><input type="button" class="x_all_rounded kickban_button svg_uoff x_bcolor_z pointer" style="background-size:18px" onclick="ban_user(0,de(\'kickban_num\').value,de(\'kickban_unt\').value,de(\'kickban_res\').value);close_dialog(\'#media_test\');" value="'+lang['gag']+'" /><input type="button" class="x_all_rounded kickban_button svg_kick x_bcolor_z pointer" onclick="ban_user(1,de(\'kickban_num\').value,de(\'kickban_unt\').value,de(\'kickban_res\').value);close_dialog(\'#media_test\');" value="'+lang['ban']+'" /><input type="button" class="x_all_rounded kickban_button svg_kick x_bcolor_z pointer" onclick="ban_user(2,de(\'kickban_num\').value,de(\'kickban_unt\').value,de(\'kickban_res\').value);close_dialog(\'#media_test\');" value="'+lang['ban']+' IP" /></div></div>';

var winW = '800px';
if($(window).width() < 980){winW = '94vw'}
switch(b){
case 1  : mpt.innerHTML=img;$( "#media_test" ).dialog({title: "Изображение", resizable: false, position: { my: "center", at: "top" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:winW, close: function(){mpt.innerHTML=''}}).resizable({aspectRatio: true,minWidth: 100, containment: "#chat_area", maxHeight:'100%', maxWidth:'100%',resize: function (evt, ui) {ui.element.parent().css({width:'',height:''});}});;break
case 2  : mmt.innerHTML=aud;$( "#music_test" ).dialog({title: "Аудио-плеер", position: {my: "center top", at: "center top"}, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', close: function(){mmt.innerHTML=''}  }); de('audioplayer').play();break
case 3  : mmt.innerHTML=vid;$( "#music_test" ).dialog({title: "Видео", position: {my: "center top", at: "center top"}, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', close: function(){mmt.innerHTML=''}  });de('videoplayer').play();break
case 4  : break; // roll dice, unused...
case 5  : mpt.innerHTML=map;$( "#media_test" ).dialog({title: "", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 6  : mmt.innerHTML=ytb; $( "#music_test" ).dialog({title: "Youtube", position: {my: "center top", at: "center top"}, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', close: function(){mmt.innerHTML=''}  }); mmt.className='svg_vide';mmt.style.zIndex='9999';break
case 7  : mmt.innerHTML=snc;$( "#music_test" ).dialog({title: "SoundCloud", position: {my: "center top", at: "center top"}, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', close: function(){mmt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 8  : mmt.innerHTML=vim;$( "#music_test" ).dialog({title: "Vimeo", position: {my: "center top", at: "center top"}, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', close: function(){mmt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 9  : mmt.innerHTML=mxc;$( "#music_test" ).dialog({title: "Mixcloud", position: {my: "center top", at: "center top"}, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', close: function(){mmt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 10 : break // delete message (AX Pro)
case 11 : mpt.innerHTML=cdd;$( "#media_test" ).dialog({title: "Предпросмотр", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 12 : mpt.innerHTML=qrc;$( "#media_test" ).dialog({title: "QR", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';break

case 13 : mpt.innerHTML=pnt;$( "#media_test" ).dialog({title: "Рисунок", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999'
if(window.innerWidth<380){
froml=parseInt((window.innerWidth-384)/2); mpt.className=''
pfm=de('pframe');pfm.style.position='fixed'
pfm.style.border='12px solid #FFB300';pfm.style.right=froml+'px';pfm.style.bottom=0
} break

case 14 : mpt.innerHTML=ppr;$( "#media_test" ).dialog({title: "Рисунок", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999'
if(window.innerWidth<380){
froml=parseInt((window.innerWidth-384)/2); mpt.className=''
dfm=de('dframe');dfm.style.position='fixed'
dfm.style.border='12px solid #FFB300';dfm.style.right=froml+'px';dfm.style.bottom=0
} break

case 15 : mmt.innerHTML=tnr;$( "#music_test" ).dialog({title: "Тенор", position: {my: "center top", at: "center top"}, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', close: function(){mmt.innerHTML=''}  }); de('tenorplayer').play();break
case 17 : mmt.innerHTML=aud;$( "#music_test" ).dialog({title: "Аудио", position: {my: "center top", at: "center top"}, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', close: function(){mmt.innerHTML=''}  }); de('audioplayer').play();break
case 18 : mmt.innerHTML=vid; $( "#music_test" ).dialog({title: "Видео", position: {my: "center top", at: "center top"}, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', close: function(){mmt.innerHTML=''}  }); ;de('videoplayer').play();break
case 19 : mpt.innerHTML=nwq; $( "#media_test" ).dialog({title: "Новости", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 20 : mpt.innerHTML=nwt; $( "#media_test" ).dialog({title: "Новости", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 21 : mpt.innerHTML=tnr; $( "#media_test" ).dialog({title: "Тенор Плеер", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });de('tenorplayer').play();break // gbox
case 22 : mpt.innerHTML=tn1; $( "#media_test" ).dialog({title: "Транскрипт", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';de('transcriptform').submit();break // transcript pm
case 23 : mpt.innerHTML=tn2; $( "#media_test" ).dialog({title: "Транкскрипт", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';de('transcriptform').submit();break // transcript room
//case 24 : mpr.innerHTML=extpro2preview; mpr.className='svg_nobg svg_avtr';mpr.style.zIndex='9999';break;
case 24 : mppr.innerHTML=extpro2preview; $( "#media_profile" ).dialog({title: "Профиль: "+active_usrname, position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mppr.innerHTML=''}  });mppr.style.zIndex='9999';break
case 25 : mpt.innerHTML=pll; $( "#media_test" ).dialog({title: "Голосование", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 26 : mpt.innerHTML=dym; $( "#media_test" ).dialog({title: "Daily Motion", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 27 : mpt.innerHTML=tsr; $( "#media_test" ).dialog({title: "tsr", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 28 : mpt.innerHTML=tt1; $( "#media_test" ).dialog({title: "Twich.TV", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 29 : mpt.innerHTML=tt2; $( "#media_test" ).dialog({title: "Twich.TV", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 31 : mpt.innerHTML=qui; $( "#media_test" ).dialog({title: "quiz", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 32 : mpt.innerHTML=tsn; $( "#media_test" ).dialog({title: "Быстрые сообщения", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';de('tsnedit').value=a;break
case 33 : mpt.innerHTML=kbn;$( "#media_test" ).dialog({title: "Бан/кик", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });break
case 34 : mpp.innerHTML=mp3; $( "#media_test" ).dialog({title: "mp3", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });de('audioplayer').play();break
case 35 : mpt.innerHTML=pif; $( "#media_test" ).dialog({title: "Загрузчик стикеров", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';break
case 36 : mpt.innerHTML=pif; $( "#media_test" ).dialog({title: "Список пользователей", position: { my: "center", at: "center" }, show: {effect: "fade",duration: 500}, hide: { effect: "fade", duration: 300 }, height:'auto', width:'auto', minHeight: 280,  minWidth: 320,close: function(){mpt.innerHTML=''}  });mpt.style.zIndex='9999';break

default: wopen('download.php?d='+a,0);break;}
}

var obj_stickers;

// ----------
function usr_stickers(){
	
	widget_url='widget.php?q=usr_stickers';
	widget_str=new XMLHttpRequest();
	widget_str.open('get',widget_url);
	widget_str.setRequestHeader('Cache-Control', 'no-cache');
	widget_str.onreadystatechange=usr_stickers_rec; 
	widget_str.send()
	return obj_stickers;
}

function ext_usr_stickers(){
	widget_url='widget.php?q=usr_stickers';
	ext_widget_str=new XMLHttpRequest();
	ext_widget_str.open('get',widget_url,false);
	ext_widget_str.setRequestHeader('Cache-Control', 'no-cache');
	ext_widget_str.onreadystatechange=ext_usr_stickers_rec; 
	ext_widget_str.send()
	return obj_stickers;
}

function usr_stickers_rec(){
	if(widget_str.readyState==4 && widget_str.status==200){
		obj_stickers=JSON.parse(widget_str.responseText);
	return obj_stickers;
	}
}
function ext_usr_stickers_rec(){
	if(ext_widget_str.readyState==4 && ext_widget_str.status==200){
		obj_stickers=JSON.parse(ext_widget_str.responseText);
	return obj_stickers;
	}
}

usr_stickers();

// ----------
anime_msg=[];
function msg_format(x,y){
msgsticker=false
for(i in stickers){if(x.includes(stickers[i])){x=replace_all(x,stickers[i],'<img src="'+stickers[i]+'" class="chat_area_sticker" alt="" />');}}
for(i in obj_stickers){if(x.includes(i)){x=replace_all(x,i,'<img src="'+obj_stickers[i]+'" class="chat_area_sticker" alt="" />');}}
if(x.includes('TORU_SAY_A ')) {x=replace_all(x,'TORU_SAY_A ','');anime_msg=x.split(';');x='Предлагаю, человечишка:<br><br><a target="_blank" class="pointer x_accent_fg anime_sub" href="'+anime_msg[0]+'"><b>'+anime_msg[1]+'</b><img style="width: 200px;" src="'+anime_msg[2]+'" alt="" /></a><br><b class="pointer x_accent_fg more_anime" onclick="inp.value=\'Тору подскажи аниме\';msg_send()" >Еще</b>';msgsticker=1}
if(x.includes('TORU_SAY_M ')) {x=replace_all(x,'TORU_SAY_M ','');anime_msg=x.split(';');x='Предлагаю, человечишка:<br><br><a target="_blank" class="pointer x_accent_fg anime_sub" href="'+anime_msg[0]+'"><b>'+anime_msg[1]+'</b><img style="width: 200px;" src="'+anime_msg[2]+'" alt="" /></a><br><b class="pointer x_accent_fg more_anime" onclick="inp.value=\'Тору подскажи мангу\';msg_send()" >Еще</b>';msgsticker=1}
if(msgsticker){return x}

if(y>0 && y!=100){x=parse_attach(x,y)}

else{x=bbcode(x); x=repl_emoticons(x);  x=repl_links(x)}

return x}

// ----------
function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


function msg_display(x){
msg2add=''; mdd='m'+mdc; mdc+=1;
ext_usr_stickers();
time=x['time']
clas=x['color'].toString()
name=escape_str(x['name'])

text=escape_str(x['text'])
pbox=parseInt(x['pbox'])
from=parseInt(x['fromid'])
msid=parseInt(x['msgid'])
gclr=parseInt(x['group'])
room=parseInt(x['room']); if(room>999998){room=current_room}
attach=parseInt(x['attach'])

if(attach==10){msg_delete(from,text);return}
if(room>0 && typeof rooms[room]!='object'){return}
if(text==scsstr && room>0){if(room==current_room){log.innerHTML='<div class="msg"><div class="msg_avatar"><img class="avt x_circle" src="attachments/bot_2.gif" alt="Аватар Тору" /><span onclick="inp.value=\'\'+this.innerHTML+\', \'+inp.value" class="pointer chat_area_user g5">Тору</span></div><div class="msg_body"><div class="msg_text" style="word-break:break-word">Довели вы меня, человечешки! Пеняйте на себя, жалкие людишки!</div></div></div><div class="msg"><div class="msg_avatar"><img class="avt x_circle" src="attachments/bot.gif" alt="Аватар Тору" /><span onclick="inp.value=\'\'+this.innerHTML+\', \'+inp.value" class="pointer chat_area_user g5">Тору</span></div><div class="msg_body"><div class="msg_text" style="word-break:break-word">Так.. Что- то я погорячилась...😥 Хозяин будет ругаться. <br>Уважаемые, вы ничего не слышали и не видели. Давайте начнем всё по новой.<br><br><span class="x_accent_bg x_all_rounded" style="display:inline-block;padding:2px 5px 2px 5px"><b>Модератор почистил чат. Чтобы увидеть предыдущие сообщения, обновите страницу.</b></span><br><br><img src="attachments/bot_3.gif" width="200px" /></div></div></div>';} rooms[room][1]='';return}

if(attach>99  && rbox_sender.length==3){from=rbox_sender[0];gclr=rbox_sender[1];name=b64d(rbox_sender[2]);clas=0;}
if(attach==19 && nbox_sender.length==3){from=nbox_sender[0];gclr=nbox_sender[1];name=b64d(nbox_sender[2]);clas=0;}
if(attach==21 && gbox_sender.length==3){from=gbox_sender[0];gclr=gbox_sender[1];name=b64d(gbox_sender[2]);clas=0;}

for(i in ignored_users){if(ignored_users[i]==name){return}}

if(bbox[text]){showbling(text,room,name);return}

if(typeof bwlst!=='undefined' && bwlst.length>0 && typeof rwlst!=='undefined' && rwlst.length>0){
for(i in bwlst){regex=new RegExp('('+bwlst[i]+')','gi'); text=text.replace(regex,rwlst[i])}}

text=msg_format(text,attach)

if(uxtra_avatars[from]){avsrc=atob(uxtra_avatars[from])}else{avsrc='avatar.php?q='+from}
if(from==0){avsrc='img/000.svg'}
var who_i = '';
if(getCookie('UID') == from) {
who_i = 'your_msg';
}

//var gend=usr_gender_get(from);
style='';
if(name == 'ひきえじ'){style='style=\'font-family: ABG;letter-spacing:-2px;color: #8e24aa;\'';tp_class=' glich'}else{style='';tp_class=''}
htmlmsg=msg_template.replace(/{AVATAR}/g,avsrc, 'g').replace(/{TIME}/g,time).replace(/{STYLE}/g,style).replace(/{GROUP}/g,gclr).replace(/{C_CLASS}/g,tp_class).replace(/{NAME}/g,name).replace(/{RSIGN}/g,sign1_reply).replace(/{WHO_I}/g,who_i).replace(/{UID}/g,from).replace(/{MID}/g,msid).replace(/{COLOR}/g,clas).replace(/{TEXT}/g,text)

if(myuuid==from){htmlmsg=htmlmsg.replace(/{DEL}/g,' <small class="pointer x_circle x_bcolor_z sign_txticon" style="color:#fff" onclick="del_msg('+msid+')">&nbsp;'+sign_delete+'&nbsp;</small> ')}
else{htmlmsg=htmlmsg.replace(/{DEL}/g,'')}

if(from<1 || myuuid==from){htmlmsg=htmlmsg.replace(sign1_reply,'')}

if(from<1 || room>0){
	if(current_room == 1){limit=limit+1;}
rooms[room][4]++;
htmlmsg='<!--'+rooms[room][4]+'-->'+htmlmsg;
if(typeof rooms[room]=='object'){rooms[room][1]+=htmlmsg; rooms[room][2]++; if(bg_sound>0 && sound<1){sound=4}}
if(current_room==room){msg2add=htmlmsg;check=text+""; if(check.includes(myname) || check.includes('Всем</span>,')){sound=6}else if(sound<2 || sound==4){sound=2}}
recalc_msg()}

// check = JSON.parse(msg);
// str = check["text"]+"";
// sound = 0;
// if(str.includes(myname)){sound = 3}	
	
else{

notify_now=0; if(pbox!=ext_usr_id){
if(layout_frs<1){de('global_notify').className='x_accent_bg pchat_notify_on'}

notify_now=1; for(i in pmnotifications){if(pmnotifications[i]==pbox){notify_now=0}}
if(notify_now>0){
if(dtitle){top.document.title='☺ ⊶ ☺ '+name}
msg2add=msg_template.replace(/{AVATAR}/g,'img/000.svg').replace(/{RSIGN}/g,'').replace(/{TIME}/g,'').replace(/{GROUP}/g,0).replace(/{DEL}/g,'').replace(/{NAME}/g,lang['system']).replace(/{UID}/g,0).replace(/{COLOR}/g,0).replace(/{TEXT}/g,lang['pmmsg']+' <b class="pointer x_accent_fg" onclick="show2user('+pbox+',this)">'+name+'</b>')

// if(de('panel_pmlog').style.display!='block' || pan.style.display!='block'){
// pmarrnotify_add(from); de('top2unread').style.display='block';}
sound=3;;pmnotifications.splice(1,0,pbox)}

//tcss=de('e'+pbox).className
tcss_pm=de('e_pm'+pbox).className
//tcss=tcss.replace('pchat_notify_on','').replace('pchat_notify','').trim()
//de('e'+pbox).className=tcss+' pchat_notify_on';de('i'+pbox).className='x_circle pchat_ntfimg_on'}
de('e_pm'+pbox).className=tcss_pm+' user_ntfimg_on'}

pmlog=de('p'+pbox)
if(from!=myuuid){pm_reorder(from,name)}

htmlmsg='<div id="'+mdd+'">'+htmlmsg+'</div>'
pmlog.innerHTML =pmlog.innerHTML+htmlmsg
pmlog.scrollTop=pmlog.scrollHeight
de(mdd).className='pmsgon';
setTimeout("de('"+mdd+"').className=''",300)
if(notify_now<1){sound=5} mdd='m'+mdc; mdc+=1 }

// reduce msg
splitpoint=rooms[current_room][4]-msgs2keep+1
allmsg=log.innerHTML.split('<!--'+splitpoint+'-->')
msg2add='<div id="'+mdd+'">'+msg2add+'</div>'
//if(allmsg[1]){msg2add=allmsg[1]+msg2add}else{msg2add=allmsg[0]+msg2add}
$( "#chat_area" ).append( msg2add );
//log.innerHTML=msg2add

de(mdd).className='msgoff'
setTimeout("de('"+mdd+"').className='msgonn'",10)
setTimeout("de('"+mdd+"').className=''",300)

scrolllog()}

//-----------

function show2user(x,y){tmpo=true;
hide_user();hsp.style.display='none';
if(lof.style.display=='block'){lof.style.display='none'}
for(i in usr_online){if(usr_online[i][0]==x){show_user(i,parseInt(usr_online[i][0]),usr_online[i][1],usr_online[i][2]);tmpo=false;break}}
if(tmpo && typeof y=='object'){if(y.children.length>0){shoop(y,1,200)}else{y.style.filter='grayscale(100%)'}}return tmpo}

// ----------

function check_user(x){
usrst=false
for(i in usr_online){if(usr_online[i][0]==x){usrst=true;break}}
return usrst}

// ----------

function pm_reorder(x,y){z=get_time();
if(uxtra_avatars[x]){pmavatr=atob(uxtra_avatars[x])}else{pmavatr='avatar.php?q='+x}
pmele='<div id="pmd'+x+'">'
pmele+='<div style="float:right;margin-top:20px" class="fmedia_switch x_circle x_bcolor_z pointer svg_offm panel_offpmm" onclick="show_offmsg('+x+',\''+y+'\',\''+pmavatr+'\')" title="'+lang['offpm']+'"></div>';
pmele+='<div onmouseover="if(check_user('+x+')){this.children[1].className=\'x_accent_fg shorten\'}" onmouseout="this.children[1].className=\'shorten\'" class="pointer panel_pmitem" onclick="if(!show2user('+x+',this)){setTimeout(\'manage_esc()\',100)}">';
pmele+='<img class="panel_pmavtr x_circle" src="'+pmavatr+'" alt="" />';
pmele+='<div style="font-weight:bold;text-align:left" class="shorten">'+y+'</div>';
pmele+='<small class="panel_pmtrns x_all_rounded x_bcolor_z pointer" onclick="manage_esc();preview('+x+',22);event.stopPropagation()" title="'+lang['transcript']+'">···</small>';
pmele+='<small>'+z+'</small><br style="clear:both" /></div><div class="x_accent_bb"></div></div>';
if(de('pmd'+x)){de('pmd'+x).parentNode.removeChild(de('pmd'+x))}
// s=de('pmlog_container').innerHTML;de('pmlog_container').innerHTML=pmele+s
}

// ----------

function recalc_msg(){
u=0; rooms[current_room][2]=0
for(i in rooms){if(typeof rooms[i]=='object'){u+=rooms[i][2]; de('unr'+i).innerHTML=rooms[i][2]}}
if(u>0){de('top_unread').style.display='block';de('bot_unread').style.opacity=1.0}else{de('top_unread').style.display='none';de('bot_unread').style.opacity=0.0}
de('unr'+current_room).innerHTML='&#9733;'
}

// ----------

function online_construct(){

if(typeof Object.assign!='function'){uo=usr_online}
else{uo=Object.assign(usr_online,fls_online)}

usr_length=0
gst_length=0
onl_str=new Array(); 
bot_str=new Array(); 
onl_gst=new Array(); 
onl_str_line = ''
onl_gst_line = ''

uinonlinebg='x_accent_bg x_top_rounded'
for(i in uo){
if(uo[i][6]){
uo_room_id = uo[i][6];
uo_rooms[uo_room_id] = {size: 0};
}
}

for(i in uo){
if(uo[i][6]){
uo_room_id = uo[i][6];
uo_rooms[uo_room_id].size++;
}
if(uo[i][6] == current_room || uo[i][0] == 3) {
all_users[i] = uo[i]
// bg pchat online/offline
if(ext_usr_id==uo[i][0]){uinonlinebg='x_bcolor_x x_top_rounded'}
ntfy='status'+uo[i][3]
ntfi='x_circle'
//console.log(current_room)
// avatars obj
uxtra_avatars[uo[i][0]]=uo[i][4];

// preserve notifications
ntsg=de('e'+uo[i][0])
if(ntsg && ntsg.className.indexOf('pchat_notify_on')>-1){ntfy+=' pchat_notify_on';ntfi='x_circle pchat_ntfimg_on'}
else{ntfy+=' pchat_notify'}

linethrough=''; // strike ignored users
for(j in ignored_users){if(uo[i][2]==ignored_users[j]){linethrough=' style="text-decoration:line-through;opacity:0.2"';}}

// order by group if enabled
if(ousr_by_group==0){obg=''}
if(ousr_by_group==1){obg=usr_online[i][1].toString();for(j=obg.length;j<4;j++){obg='0'+obg}}
if(ousr_by_group==2){obg=(9999-usr_online[i][1]).toString();for(j=obg.length;j<4;j++){obg='0'+obg}}
var status_ico = '<i id="e'+uo[i][0]+'" class="'+ntfy+'"></i>';
if(uo[i][5] == 1){status_ico = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 48 48"><path class="'+ntfy+' mobile_'+uo[i][5]+'" d="M32 2h-16c-3.31 0-6 2.69-6 6v32c0 3.31 2.69 6 6 6h16c3.31 0 6-2.69 6-6v-32c0-3.31-2.69-6-6-6zm-4 40h-8v-2h8v2zm6.5-6h-21v-28h21v28z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'}

sortorder=obg+usr_online[i][2].replace(uniregex,'').toLowerCase();
if(uo[i][1] != 1 && uo[i][2] != 'Тору') {
color = usr_gender_get(usr_online[i][0])
if(color == null){color = ""}
motto_user=usr_status_get(usr_online[i][0])
if(motto_user == null){motto_user = ""}
//border:1px solid '+color+' .getAttribute(data-name)    onclick="inp.value=\'\'+this.innerHTML+\', \'+inp.value;inp_focus()"
if(uo[i][2] == 'ひきえじ'){tmp_style='style=\'font-family: ABG;letter-spacing:-2px;color: #8e24aa;\'';tmp_class=' glich'}else{tmp_style='';tmp_class=''}

if(uo[i][0] == 604 || uo[i][0] == 737 || myuuid == 737 || uo[i][0] == 545 || myuuid == 604 || mygrou == 1 || myuuid == 545){no_ls=''}else{no_ls='<span id="e_pm'+uo[i][0]+'" class="show_user" alt="Написать в ЛС" onclick="show_user('+i+','+uo[i][0]+','+uo[i][1]+',\''+uo[i][2]+'\')">лс</span>'}

onl_str.push('<!-- '+sortorder+' --><div class="single_online_user shorten"><img style="border-radius:50%;" onclick="setTimeout(ext_user_show, 100, '+i+','+uo[i][1]+')"  onmousedown="uxtra_room_snd('+i+')" id="i'+usr_online[i][0]+'" src="'+atob(uo[i][4])+'" class="x_circle pointer" alt="" /><b class="x_bcolor_x">		'+status_ico+'		</b><span onclick="inp.value=\'\'+this.getAttribute(\'data-name\')+\', \'+inp.value;inp_focus()" data-name="'+uo[i][2]+'" ><span'+linethrough+'   '+tmp_style+' class="g'+uo[i][1]+tmp_class+'">'+uo[i][2]+'</span> '+color+'<br><span class="motto_user">'+ motto_user +'</span></span>'+no_ls+'</div>')
usr_length+=1
color ='';
} else if(usr_online[i][0] == 3) {
bot_str.push('<!-- '+sortorder+' --><div class="single_online_user shorten"><img style="border-radius:50%;" onclick="setTimeout(ext_user_show, 100, 3,5)"  onmousedown="active_usrname=\'Тору\';uxtra_room_snd(3)" id="i'+usr_online[i][0]+'"  id="i'+usr_online[i][0]+'" src="'+atob(uo[i][4])+'" class="x_circle pointer" alt="" /><b class="x_bcolor_x"><i id="e'+uo[i][0]+'" class="'+ntfy+'" style="background:linear-gradient(45deg, #fbff00, #ff0000);"></i></b><span'+linethrough+' style="cursor:default;" class="g'+uo[i][1]+'">'+uo[i][2]+'</span><span id="e_pm'+uo[i][0]+'" class="show_user" alt="Написать в ЛС" onclick="show_user('+i+','+uo[i][0]+','+uo[i][1]+',\''+uo[i][2]+'\')">лс</span></div>')

} else {
onl_gst.push('<!-- '+sortorder+' --><div class="single_online_user shorten"><img style="border-radius:50%;" onclick="setTimeout(ext_user_show, 100, '+i+','+uo[i][1]+')"  onmousedown="uxtra_room_snd('+i+')" id="i'+usr_online[i][0]+'" src="'+atob(uo[i][4])+'" class="x_circle pointer" alt="" /><b class="x_bcolor_x">	'+status_ico+'	</b><span'+linethrough+' onclick="inp.value=\'\'+this.innerHTML+\', \'+inp.value;inp_focus()" class="g'+uo[i][1]+'">'+uo[i][2]+'</span> '+color+'</div>')
gst_length+=1
}
// append pchat div
p=document.createElement('div')
pu='p'+uo[i][0]
if(!de(pu)){
p.id=pu; p.className='one2chat x_bcolor_x svg_pmpm'
pch.appendChild(p)}
}

}

uin.className=uinonlinebg
onl_str.sort()
onl_str=onl_str.join(' ')
bot_str.sort()
bot_str=bot_str.join(' ')
onl_gst.sort()
onl_gst=onl_gst.join(' ')
//


if(onl_str.length != 0 || bot_str.length != 0) {
	onl_str_line = '<h4 class="online_title1 x_bcolor_z">Пользователи <span>'+ usr_length +'</span></h4><div id="onl_users"></div>'
} 
if(onl_gst.length != 0) {
	onl_gst_line = '<h4 class="online_title1 x_bcolor_z">Гости <span>'+ gst_length +'</span></h4><div id="onl_guests"></div>'
}
onl.innerHTML=onl_str_line+onl_gst_line

//

if(onl_str.length != 0) {
	de('onl_users').innerHTML=onl_str+bot_str
} 
if(onl_gst.length != 0) {
	de('onl_guests').innerHTML=onl_gst
}

oall=gst_length+usr_length;oall=String(oall);for(j=oall.length;j<3;j++){oall='0'+oall}
de('online_all').innerHTML='👥 '+oall

for (i in uo_rooms)
de('usr_in_room'+i).innerHTML=uo_rooms[i]['size']

}

// ----------

function show_ext_user(a,b,c,d){
uxtra_room_snd(b);	
pmarrnotify_rem(b);
if(pmarrnotify.length<1)(hidepm_notify())
de('global_notify').className='pchat_notify'
de('ousr').style.visibility='hidden'

if(dtitle){top.document.title=dtitle}
hsp.style.display='block'
uin.style.display='block'
de('user_buttons').style.display='flex'

$("#private_chats").append("<div id='p"+a+"' class='one2chat x_bcolor_x svg_pmpm'></div>");

m=de('p'+b)
m.style.display='block'; m.scrollTop=m.scrollHeight
srv_usr_id=a; ext_usr_id=b; active_usrname=d
ignore_init()
inp.placeholder=' @'+d
unn.innerHTML=d
unn.className='g'+c
if(gnames[c]){unn.title=lang['group']+': '+gnames[c]; active_grpname='<b style="display:inline-block;padding:0 5px 0 5px" class="x_all_rounded g'+c+'">'+gnames[c]+'</b>'}else{unn.title='';active_grpname=''}
uin.className='x_bcolor_x'
b2a.style.display='block'
ascroll()

if(typeof uxtra_expire[ext_usr_id]=='number' && uxtra_expire[ext_usr_id]>Math.floor(Date.now()/1000)){setTimeout(uxtra_ext_init, 100, b);}
else{
de('user_avatar').style.backgroundImage='none'
de('user_motto').innerHTML=''
if(de('user_iphash')){de('user_iphash').innerHTML=''}
de('user_country').innerHTML=''
de('user_country').title=''
uxtra_room_snd(b)}
if(phistoryhidebtn.indexOf(ext_usr_id)==-1){phistoryhidebtn.push(ext_usr_id);m.innerHTML=privhistbutton+m.innerHTML;}

rmb_txt('u_show'); inp_focus()

de('blngbox2').style.display='none'
de('blngbox1').style.display='block'

}

// ----------

function uxtra_ext_init(x){
if(uxtra_data[x]){

de('user_motto').innerText=uxtra_data[x][0]
de('user_motto').title=uxtra_data[x][0]
de('user_avatar').style.backgroundImage='url("avatar.php?q='+x+'")'
if(de('user_iphash')){de('user_iphash').innerHTML=uxtra_data[x][4]}

if(uxtra_data[x][2].length<1){de('user_country').style.display='none';return}

de('user_country').innerHTML=uxtra_data[x][2]
de('user_country').title=uxtra_data[x][3]
de('user_country').style.display='block'
de('user_country').style.backgroundColor=pastel(uxtra_data[x][2])

}}

// ----------

function show_user(a,b,c,d){
// if(pab.style.left != '0px'){pab.style.left='0px';}

pmarrnotify_rem(b);
if(pmarrnotify.length<1)(hidepm_notify())
de('global_notify').className='pchat_notify'
de('ousr').style.visibility='hidden'

if(dtitle){top.document.title=dtitle}
hsp.style.display='block'
uin.style.display='block'
de('user_buttons').style.display='flex'

//tcss=de('e'+b).className
//tcss=tcss.replace('pchat_notify_on','').replace('pchat_notify','').trim()
tcss_pm=de('e_pm'+b).className
tcss_pm=tcss_pm.replace('user_ntfimg_on','').trim()
de('e_pm'+b).className=tcss_pm
//de('e'+b).className=tcss+' pchat_notify'
//de('i'+b).className='x_circle'

m=de('p'+b)

m.style.display='block'; m.scrollTop=m.scrollHeight
srv_usr_id=a; ext_usr_id=b; active_usrname=d
ignore_init()
inp.placeholder=' @'+d
unn.innerHTML=d
unn.className='g'+c
if(gnames[c]){unn.title=lang['group']+': '+gnames[c]; active_grpname='<b style="display:inline-block;padding:0 5px 0 5px" class="x_all_rounded g'+c+'">'+gnames[c]+'</b>'}else{unn.title='';active_grpname=''}
uin.className='x_bcolor_x'
b2a.style.display='block'
ascroll()

if(typeof uxtra_expire[ext_usr_id]=='number' && uxtra_expire[ext_usr_id]>Math.floor(Date.now()/1000)){uxtra_init(ext_usr_id)}
else{
de('user_avatar').style.backgroundImage='none'
de('user_motto').innerHTML=''
if(de('user_iphash')){de('user_iphash').innerHTML=''}
de('user_country').innerHTML=''
de('user_country').title=''
uxtra_snd()}

if(phistoryhidebtn.indexOf(ext_usr_id)==-1){phistoryhidebtn.push(ext_usr_id);m.innerHTML=privhistbutton+m.innerHTML;}
if(usr_online[a][3]>4 || current_status>4){inp.placeholder=' '+lang['fnopm'];inp.value='';inp.readOnly=true;}
if(stealth>0){inp.placeholder=' '+lang['stlth'];inp.value='';inp.readOnly=true}
rmb_txt('u_show'); inp_focus()

de('blngbox2').style.display='none'
de('blngbox1').style.display='block'

}

// ----------

function uxtra_room_snd(x){
ajax_uxt_ext=new XMLHttpRequest()
ajax_uxt_ext.open('get','user.php?id='+x,false)
ajax_uxt_ext.setRequestHeader('Cache-Control', 'no-cache');
ajax_uxt_ext.onreadystatechange=uxtra_room_ans
ajax_uxt_ext.send()
}

function uxtra_room_ans(){
if(ajax_uxt_ext.readyState==4 && ajax_uxt_ext.status==200){
res=ajax_uxt_ext.responseText.toString()
res=JSON.parse(res)
if(typeof res[16]!='undefined'){
uxtra_data[res[0]]=[res[1],res[2],res[3],res[4],res[5],res[6],res[7],res[8],res[9],res[10],res[11],res[12],res[13],res[14],res[15],res[16]]
uxtra_expire[res[0]]=Math.floor(Date.now()/1000)+1200}}
}

// ----------

function uxtra_snd(){
ajax_uxt=new XMLHttpRequest()
ajax_uxt.open('get','user.php?id='+ext_usr_id)
ajax_uxt.setRequestHeader('Cache-Control', 'no-cache');
ajax_uxt.onreadystatechange=uxtra_ans
ajax_uxt.send()}

function uxtra_ans(){
if(ajax_uxt.readyState==4 && ajax_uxt.status==200){
res=ajax_uxt.responseText.toString()
res=JSON.parse(res)
if(typeof res[16]!='undefined'){
uxtra_data[res[0]]=[res[1],res[2],res[3],res[4],res[5],res[6],res[7],res[8],res[9],res[10],res[11],res[12],res[13],res[14],res[15],res[16]]
uxtra_expire[res[0]]=Math.floor(Date.now()/1000)+1200
uxtra_init(res[0])}}}

// ----------

function uxtra_init(x){
if(uxtra_data[x]){

de('user_motto').innerText=uxtra_data[x][0]
de('user_motto').title=uxtra_data[x][0]
de('user_avatar').style.backgroundImage='url('+atob(uxtra_avatars[x])+')'
if(de('user_iphash')){de('user_iphash').innerHTML=uxtra_data[x][4]}

if(uxtra_data[x][2].length<1){de('user_country').style.display='none';return}

de('user_country').innerHTML=uxtra_data[x][2]
de('user_country').title=uxtra_data[x][3]
de('user_country').style.display='block'
de('user_country').style.backgroundColor=pastel(uxtra_data[x][2])

}}

// ----------

function seed_rand(x){
y=Math.floor(Math.random()*x+2415582)
return y;}

// ----------

function hide_user(){
cb2clear()
b2a.style.display='none'
de('ousr').style.visibility='visible'
if(!ext_usr_id){return}
pu='p'+ext_usr_id;rmb_txt('u_hide')
de('user_buttons').style.display='none'
de(pu).style.display='none'
uin.style.display='none'
for(i in pmnotifications){if(pmnotifications[i]==ext_usr_id){pmnotifications.splice(i,1)}}
srv_usr_id=0; ext_usr_id=0; active_usrname=''
pholder();if(chatflow<1){inp.readOnly=false} inp_focus()

if(blinginuse<1){
de('blngbox2').style.display='block'
de('blngbox1').style.display='none'}

}

// ----------

function pholder(){
if(ext_usr_id>0){return}
newhint=b64d(placeholders[Math.floor(Math.random()*placeholders.length)])
inp.placeholder=' '+newhint}

// ----------

function ignore_init(){
emute='x_circle x_bcolor_z pointer svg_mute'
dmute='x_circle x_bcolor_z pointer svg_unmt'
tmp=emute
for(i in ignored_users){if(ignored_users[i]==active_usrname){tmp=dmute}}
de('ig_unig').className=tmp
}

// ----------

function ignore_set(){
emute='x_circle x_bcolor_z pointer svg_mute'
dmute='x_circle x_bcolor_z pointer svg_unmt'
pss=false; p=de('ig_unig')
for(i in ignored_users){if(ignored_users[i]==active_usrname){pss=i}}
if(!pss){ignored_users.splice(1,0,active_usrname);p.className=dmute}
else{ignored_users.splice(pss,1);p.className=emute}
online_construct();localStorage.setItem(storkey_ign,JSON.stringify(ignored_users))}

// ----------

function ban_user(b,ppd,ppm,ppr){
btime=0
if(!isNaN(ppd) && !isNaN(ppm)){btime=ppd*ppm}
bres=encodeURIComponent(ppr)

ajax_bus=new XMLHttpRequest()
x='id='+ext_usr_id+'&mode='+b+'&btime='+btime+'&bres='+bres
ajax_bus.open('post','ban.php')
ajax_bus.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
ajax_bus.onreadystatechange=ban_ans;ajax_bus.send(x)
if(lof.style.display!='block'){hsp.style.display='none'}
setTimeout('ax_ping(0)',500);/*manage_esc();*/hide_user()}

function ban_ans(){
if(ajax_bus.readyState==4 && ajax_bus.status==200){
response=ajax_bus.responseText.toString()
//console.log(response)
}}

// ----------

function load_avatars(){
if(avatars_loaded<1){
ajax_avt=new XMLHttpRequest()
ajax_avt.open('get','mavatar.php?list=1')
ajax_avt.onreadystatechange=avatars_ans
ajax_avt.send()}}

function avatars_ans(){
if(ajax_avt.readyState==4 && ajax_avt.status==200){
response=ajax_avt.responseText.toString()
de('avatar_list').innerHTML=response
avatars_loaded=1}}

// ----------

function load_multiavatars(){
if(mva_cnt>0){return}
ajax_avt=new XMLHttpRequest()
ajax_avt.open('get','multiavatar.php?getjson=23&r='+Math.random())
ajax_avt.onreadystatechange=multivatars_ans
ajax_avt.send()}

function multivatars_ans(){
if(ajax_avt.readyState==4 && ajax_avt.status==200){
mva_ftw=ajax_avt.responseText.toString()
mva_glo=JSON.parse(mva_ftw)
mva_cng=setInterval('showmavatars()',50)
}}

function showmavatars(){
if(mva_cnt>22){clearInterval(mva_cng);mva_cnt=0;return}
de('mavpic'+mva_cnt).src='data:image/svg+xml;base64,'+mva_glo[mva_cnt][1]
de('mavpic'+mva_cnt).title=mva_glo[mva_cnt][0]
mva_cnt+=1}

function sel_multiav(rnn,srr,obb){
if(rnn.length<1){return}
pan.scrollTop=0;de('avupload').value=''
de('avatar').value=rnn
de('my_avatar_pic').className='x_circle'
shoop(obb,1,100)
setTimeout("de('my_avatar_pic').className='x_circle mfa_anime'",200)
setTimeout("shoop(de('avmottosbutton'),2,200);de('avmottosbutton').className='x_all_rounded x_accent_bg panel_button'",500)
}

// ----------

function gourl(x){self.location.href=x}

function wopen(x,isurl){if(mobileapp<1){nw=window.open();nw.opener=null;nw.location.href=x}else if(isurl>0){prompt('URL',x);}}

// ----------

function hidepm_notify(){
pmarrnotify=[]; if(dtitle){top.document.title=dtitle}
de('top2unread').style.display='none'}

function pmarrnotify_add(x){x=parseInt(x);
if(pmarrnotify.indexOf(x)<0){pmarrnotify.push(x)}}

function pmarrnotify_rem(x){x=parseInt(x);
if(pmarrnotify.indexOf(x)>-1){pmarrnotify.splice(pmarrnotify.indexOf(x),1)}}

// ----------

function manage_esc(){

if(blockuserchange>0){return}

if(srv_usr_id!=0){hide_user(); hsp.style.display='none'
if(mobile<1 && lof.style.display=='block'){hoop(lof,0)}
if(mobile>0 && lof.style.display=='block'){lof.style.display='none'}
inp_focus();return}

else if(lof.style.display=='block'){
if(mobile<1){hoop(lof,0)}else{lof.style.display='none'}
hsp.style.display='none';inp_focus();return}

if(autoscroll<1){ascroll();inp_focus();return}


if(pab.style.left != '0px'){pab.style.left='0px';return}else{pab_width=pab.offsetWidth; pab.style.left='-'+pab_width+'px';return}


}

// ----------

function manage_wfocus(x){ if(mobile<1){
if(x>0){de('hidescreen_blur').style.display='none'}
else{de('hidescreen_blur').style.display='block'}}}

// ----------
//inp.value+';'+
function send_attach(a,b){attach_type=b; inp.value=a; msg_send(); /* if(b!=15 && b!=16 && b!=19 && b!=21 && b<100){manage_esc()}*/}

// ----------

function swap_panel(x){
panels=new Array('panel_rooms','panel_settings','panel_profile','panel_avatar','panel_fmedia','panel_ctab');

for(i=0;i<panels.length;i++){de(panels[i]).style.display='none'}
last_panel=x;de(panels[x]).style.display='block'

}

// ----------

function sound_opt_init(){
stonn='pointer x_bcolor_z x_left_rounded svg_sndd'
stoff='pointer x_overal x_left_rounded svg_soff'
for(i=0;i<10;i++){acti='snd'+i+'oo'
if(de(acti)){
if(typeof sound_options[i] != null && sound_options[i]>0){de(acti).className=stonn;co=1}
else{de(acti).className=stoff;;co=0}
sound_options[i]=co}}}

function sound_opt(opt){
stonn='pointer x_bcolor_z x_left_rounded svg_sndd'
stoff='pointer x_overal x_left_rounded svg_soff'
acti='snd'+opt+'oo';
if(sound_options[opt]>0){sound_options[opt]=0;de(acti).className=stoff}
else{if(sound_on<1){swap_sound(1)};sound_options[opt]=1;de(acti).className=stonn;play_s(opt)}
localStorage.setItem(storkey_snd,JSON.stringify(sound_options))}

// ----------

function swap_ampm(u){
x=de('ampm')
if(time_ampm==2){x.value='am/pm';time_ampm=1;if(u>0){settings_save('ampm',time_ampm)} return}
if(time_ampm==1){x.value='···';  time_ampm=0;if(u>0){settings_save('ampm',time_ampm)} return}
if(time_ampm==0){x.value=' 24H ';  time_ampm=2;if(u>0){settings_save('ampm',time_ampm)} return}
}

function swap_sound(u){ x=de('sndd');
if(sound_on==1){x.className='pointer x_overal x_left_rounded svg_soff';sound_on=0;if(u>0){settings_save('sound',sound_on)} return}
if(sound_on==0){x.className='pointer x_bcolor_z x_left_rounded svg_sndd';sound_on=1;if(u>0){settings_save('sound',sound_on)} return}
}

function swap_pmreg(u,l_on,l_off){
x=de('pmreg')
if(pm_reg==1){pm_reg=0; x.value=l_off; if(u>0){settings_save('pmreg',pm_reg)} return}
if(pm_reg==0){pm_reg=1; x.value=l_on;  if(u>0){settings_save('pmreg',pm_reg)} return}
}

function swap_color(x,y,u){
current_color=x; inp.style.color=y
if(u>0){settings_save('color',x); settings_save('colva',y)
pab.style.left='-360px';inp_focus()}}

// ----------

function settings_save(x,y){
switch(x){
case 'ampm'   : settings['ampm']=y  ;break
case 'sound'  : settings['sound']=y ;break
case 'pmreg'  : settings['pmreg']=y ;break
case 'color'  : settings['color']=y ;break
case 'colva'  : settings['colva']=y ;break}
localStorage.setItem(storkey_opt,JSON.stringify(settings))}

// ----------

function escape_str(x){
x=x.replace(/&/g,'&amp;').replace(/</g,'‹').replace(/>/g,'›').replace(/'/g,'❛').replace(/"/g,'❝')
return x}
// ----------

function replace_all(s, f, r) {return s.replace(new RegExp(f, 'g'), r);}

// ----------

function repl_emoticons(x){
for(key in emos){if (typeof emos[key] !== 'function') {
x=replace_all(x,key,'<span class="'+emos[key]+' chat_area_emoticon"></span>')
}}return x}


// ----------

function repl_links(x){

//Изменил
if(val_extmedia(x)){
	var tube = val_extmedia(x)
	
	pat = /(?:https:\/\/)?w{0,3}\.?youtu\.?be(?:(?:[^' '\n\r]+v=)|(?:[^' '\n\r&#]*\/))([^' '\n\r&#]+)(?:&[^' '\n\r]+)?/gim
	//pat = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gim
	msg_tube = x.replace(pat,'');
	
	
	x = msg_tube + parse_attach(String(tube[0]),tube[1])
} else {

pattern = /(\b(https?):\/\/([-A-Z0-9+&@#%?=~_|!:,.;]*)([-A-Z0-9+&@#%?\/=~_|!:,.;]*))/gim

externalUrl = x;
x = x.replace(pattern,'<a href="$1" target="_blank" style="text-decoration:underline" title="$1" class="pointer x_accent_fg">$3</a>')
x = x.replace(/‹/g,'&lt;').replace(/›/g,'&gt;').replace(/❛/g,'&#39;').replace(/❝/g,'&#34;')
var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
externalUrl.replace(urlRegex, function(externalUrl) {
	var proxyurl = "widget.php?q=get_url&url=" + externalUrl;
	$.ajax({
	url: proxyurl,
	async: false,
	success: function(response) {
		x =	x + '<div class="pointer prev_url" onclick="wopen(\''+ response.url + '\',1)"> <div class="prev_title">'+ response.title + '</div> <div class="prev_description">'+ response.description + '</div>  <div class="prev_img"><img src="'+ response.img + '" / alt=""></div> </div>';
	},   
    error: function(e) {
		console.log("error! " + e);
    }
	});	
});
}
return x}


// END Изменил

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

// ----------

function bbcode(x){
x = x.replace(/\[br\]/g, '<br />');
x = x.replace(/\[([i])\]↪(.+?)\[\/\1\]/g,'<div class="answer">$2</div>')
x = x.replace(/\[([bi])\](.+?)\[\/\1\]/g,'<$1>$2</$1>')
x = x.replace(/\[([s])\](.+?)\[\/\1\]/g,'<spoiler>$2</spoiler>')
x = replaceAll(x, '[q]','<q>')
x = replaceAll(x, '[/q]','</q>')

x = x.replace(myname+',','<span class="x_accent_bg x_all_rounded" style="display:inline-block;padding:2px 5px 2px 5px">'+myname+'</span>,')
x = x.replace('Всем,','<span class="x_accent_bg x_all_rounded" style="background-color:#d42bc4;display:inline-block;padding:2px 5px 2px 5px">Всем</span>,')
x = x.replace('answer_about_this_chat','<div id="features_text" style="margin:10px"><div class="help_allp help_esck">Кнопка ESC твой друг! Она открывает меню с основными возможностями чата</div><div class="help_allp help_cycl">Комбинации клавиш для смены комнат: Ctrl+Shift+Левая стрелка/Правая стрелка</div><div class="help_allp help_ctrl">Также комнаты можно менять с помощью кнопок Ctrl+Shift+1 Ctrl+Shift+2 ...</div><div class="help_allp help_swip">Свайп на мобильном телефоне позволит открыть меню</div></div>')
x = x.replace(emojirbb,'<span style="font-size:'+emojisze+'%">$1</span>')
return x}

// ----------

function emo2input(x){
inp.value=inp.value+' '+x+' '
inp_focus()
}

// ----------

//function add_sti(x){inp.value=x; msg_send(); inp_focus();}
function add_sti(x){inp.value=inp.value+x;  inp_focus();}
// ----------

function add_self_sti(x){inp.value=inp.value+x; inp_focus();}

// ----------

function inp_focus(){
swap_send()
if(mobile<1 && chatflow<1 && inp.readOnly==false){inp.focus()}}

function swap_send(){
if(inp.value.trim().length>0){sms.className='x_bcolor_z x_right_rounded svg_send'}
else{sms.className='x_bcolor_z x_right_rounded svg_pmsg'}}

// ----------

function user_check_form(){
f=document.forms[6]; f.room.value=current_room
s='x_accent_bg x_accent_bb panel_input'

if(f.newpass.value.trim().length<3){
f.newpass.value='';f.retype.value='';f.oldpass.value=''
de('rt').style.display='none'}
else{hoop('rt',1)}

if(f.email.value.trim()==f.dbmail.value){
f.email.value=f.dbmail.value; f.answer.value=''
de('qa').style.display='none'}
else{hoop('qa',1)}

if(f.namelog.value.trim().length<4){
	return false
}

if(f.newpass.value.trim().length>2){
if(f.newpass.value!=f.retype.value){f.retype.className=s;shoop(de('prosubbutton'),2,200);return false}
if(f.oldpass.value.trim().length<3){f.oldpass.className=s;shoop(de('prosubbutton'),2,200);return false}}

if(f.email.value.trim()!=f.dbmail.value){
if(f.email.value.trim().length<7) {f.email.className=s;shoop(de('prosubbutton'),2,200);return false}
if(f.email.value.indexOf('@')==-1){f.email.className=s;shoop(de('prosubbutton'),2,200);return false}
if(f.email.value.indexOf('.')==-1){f.email.className=s;shoop(de('prosubbutton'),2,200);return false}
if(f.email.value.indexOf(' ')!=-1){f.email.className=s;shoop(de('prosubbutton'),2,200);return false}
if(f.answer.value.trim().length<1){f.answer.className=s;shoop(de('prosubbutton'),2,200);return false}}

return true}

// ----------

function guest_check_form(){
f=document.forms[1]; f.room.value=current_room
s='x_accent_bg x_accent_bb panel_input'

if(f.password.value.trim().length<3){f.password.className=s;shoop(de('prosubbutton'),2,200);return false}
if(f.password.value!=f.retype.value){f.retype.className=s;shoop(de('prosubbutton'),2,200);return false}

if(f.email.value.trim().length<7) {f.email.className=s;shoop(de('prosubbutton'),2,200);return false}
if(f.email.value.indexOf('@')==-1){f.email.className=s;shoop(de('prosubbutton'),2,200);return false}
if(f.email.value.indexOf('.')==-1){f.email.className=s;shoop(de('prosubbutton'),2,200);return false}
if(f.email.value.indexOf(' ')!=-1){f.email.className=s;shoop(de('prosubbutton'),2,200);return false}

if(f.question.value.trim().length<1){f.question.className=s;shoop(de('prosubbutton'),2,200);return false}
if(f.answer.value.trim().length<1){f.answer.className=s;shoop(de('prosubbutton'),2,200);return false}
return true}

// ----------

function panput_style_back(x,y){x.className='x_bcolor_y x_accent_bb panel_input '+y}


// ---------- scrolling

function nselect(x){
if(allowselect<1 && x>0){
allowselect=1;log.style.cursor='auto'}
else{allowselect=0;log.style.cursor='ns-resize'
if(document.selection){document.selection.empty()}
if(window.getSelection){window.getSelection().removeAllRanges()}}}

function scrolllog(){if(autoscroll>0){
	setTimeout(log.scrollTop=log.scrollHeight+10000, 1500)
	}}

function ascroll(){if(autoscroll<1){hoop(aus,0);autoscroll=1;scrolllog();inp_focus()}}

function mdown(x){if(allowselect<1 && typeof x.preventDefault=='function'){
x.preventDefault()}dragdown=true;dragypos=x.pageY}

function mmove(x,y){
if(dragdown==true && allowselect<1 && dragypos){
x.scrollTop+=((dragypos-y.pageY)/6)
if(autoscroll<1 && rbotto() && dragdown==true){hoop(aus,0);autoscroll=1;return}
if(autoscroll>0 && !rbotto() && dragdown==true){hoop(aus,1);autoscroll=0}}}

function wmove(e){
if(parseInt(e.deltaY)>0){z=15}else{z=-15} log.scrollTop+=z
if(autoscroll<1 && rbotto()){hoop(aus,0);autoscroll=1;return}
if(autoscroll>0 && !rbotto()){hoop(aus,1);autoscroll=0}}

function keyscroll(m){
if(m!=38 && m!=40){return}
if(m==38){log.scrollTop-=15} if(m==40){log.scrollTop+=15}
if(autoscroll<1 && rbotto()){hoop(aus,0);autoscroll=1;return}
if(autoscroll>0 && !rbotto()){hoop(aus,1);autoscroll=0}}

function m2down(x){if(typeof x.preventDefault=='function'){x.preventDefault();dragdown=true;dragypos=x.pageY}}
function m2move(x,y){if(dragdown==true && dragypos){x.scrollTop+=((dragypos-y.pageY)/6);}}
function w2move(e){if(parseInt(e.deltaY)>0){z=15}else{z=-15} onl.scrollTop+=z}

function rbotto(){
if(parseInt(log.scrollHeight-log.scrollTop)<=log.clientHeight){return true}
else{return false}}

// ---------- touches

function ttouch1(e){
tj = e.changedTouches[0]
globx = parseInt(tj.clientX)
globy = parseInt(tj.clientY)
}

// ----------

function ttouch2(e){
tj = e.changedTouches[0]; currx = parseInt(tj.clientX); curry = parseInt(tj.clientY)

if(globx<50 && (currx-globx)>50){/*if(de('panel_pmlog').style.display=='block'){
hidepm_notify()} hst.style.display='block';pab.style.display='block';hoop(pan,1);*/pab.style.left='0';return}

if((curry-globy)>50 || (globy-curry)>50){console.log('1') //pab_width=pab.offsetWidth;pab.style.left='-'+pab_width+'px'
if(autoscroll>0 && !rbotto()){autoscroll=0;hoop(aus,1);}
setTimeout('if(autoscroll<1 && rbotto()){hoop(aus,0);autoscroll=1}',100)}
}


function ttouch3(e){
tj = e.changedTouches[0]
globx = parseInt(tj.clientX)
globy = parseInt(tj.clientY)
}

// ----------

function ttouch4(e){
tj = e.changedTouches[0]; currx = parseInt(tj.clientX); curry = parseInt(tj.clientY)

if(globx>200 && (currx-globx)<50){/*if(de('panel_pmlog').style.display=='block'){
hidepm_notify()} hst.style.display='block';pab.style.display='block';hoop(pan,1);*/pab_width=pab.offsetWidth;pab.style.left='-'+pab_width+'px';return}

}

// ----------

rangs_string='<p>Ранг 1: Молчаливый наблюдатель, 0 сообщений в чате</p><p>Ранг 2: Новичок, от 1 сообщения в чате</p><p>Ранг 3: Осваивающийся, от 100 сообщений в чате</p><p>Ранг 4: Постоялец, от 500 сообщений в чате</p><p>Ранг 5: Опытный, от 1000 сообщений в чате</p><p>Ранг 6: Местный житель, от 1500 сообщений в чате</p><p>Ранг 7: Почетный гражданин, от 3000 сообщений в чате</p><p>Ранг 8: Свой в доску, от 5000 сообщений в чате</p><p>Ранг 9: Легенда, от 10000 сообщений в чате</p>';

function ext_profile(){
if(ext_profile_url.trim().length>5 && ext_usr_id>500000000){
realid=ext_usr_id-500000000
lnk_profile_url=ext_profile_url.replace('EXTID',realid)
ext_usr_name=active_usrname.replace(uniregex,'').trim()
lnk_profile_url=lnk_profile_url.replace('EXTNAME',ext_usr_name)
wopen(lnk_profile_url,1)}
else{ext_uxtra(ext_usr_id)}}

function ext_uxtra(x){
suchemptiness=0

if((uxtra_data[x][0] == null) || (uxtra_data[x][0] == undefined) || (uxtra_data[x][0] == '')) {var motto_status=''}else{var motto_status=uxtra_data[x][0]}

extpro2preview=extprotemplate.replace('%IMAGE%',atob(uxtra_avatars[x])).replace('%NAME%',active_usrname).replace('%GROUP%','<span style="opacity:.6">'+lang['group']+':</span> '+active_grpname+'<br><span style="opacity:.6">Статус: </span>'+ motto_status)

if((uxtra_data[x][5] == null) || (uxtra_data[x][5] == undefined) || (uxtra_data[x][5] == '')) {tmp2repl=''}
else if(uxtra_data[x][5].length>0){tmp2repl='<span style="opacity:.6">Город:</span> '+'📌 '+uxtra_data[x][5]+'<br />'}else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%LOCATION%',tmp2repl)

tmp2LS = '';

extpro2preview=extpro2preview.replace('%LS_PM%',tmp2LS)

if(uxtra_data[x] && uxtra_data[x][6]!=0 && x!=3){tmp2repl='<span style="opacity:.6">Возраст:</span> '+uxtra_data[x][6]}else if(x == 3){tmp2repl='<span style="opacity:.6">Возраст:</span> около 20000 лет' }else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%AGE%',tmp2repl)

if(uxtra_data[x][7].length>0){tmp2repl='<br /><span style="opacity:.6">Пол:</span> '+uxtra_data[x][7]+'<br />'}else{tmp2repl='<br />'}
extpro2preview=extpro2preview.replace('%GENDER%',tmp2repl)

if(uxtra_data[x][8].length>0){tmp2repl='<span style="opacity:.6">★ '+lang['pro_edu']+':</span> '+uxtra_data[x][8]+'<br />';suchemptiness+=1}else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%EDUCATION%',tmp2repl)

if(uxtra_data[x][9].length>0){tmp2repl='<span style="opacity:.6">★ '+lang['pro_ocu']+':</span> '+uxtra_data[x][9]+'<br />';suchemptiness+=1}else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%OCCUPATION%',tmp2repl)

if(uxtra_data[x][10].length>0){tmp2repl='<span style="opacity:.6">★ '+lang['pro_int']+':</span> '+uxtra_data[x][10]+'<br />';suchemptiness+=1}else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%INTERESTS%',tmp2repl)

tmpLastSeen='';
if(check_user(x) === false) {
	tmpLastSeen = '<span style="opacity:.6">Последний вход:</span> ' + usr_last_visit_get(x);
}
extpro2preview=extpro2preview.replace('%Last_Seen%',tmpLastSeen)

if(uxtra_data[x][13] == null || uxtra_data[x][13] == undefined) {tmp2repl=''}
else if(uxtra_data[x][13].length>0){tmp2repl='<span style="opacity:.6">Дата регистрации:</span> '+uxtra_data[x][13]+'<br />';suchemptiness+=1}else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%DATE_REG%',tmp2repl)



if(uxtra_data[x][14] == null || uxtra_data[x][14] == undefined) {tmp2repl=''}
else if(uxtra_data[x][14].length>0){tmp2repl='<span style="opacity:.6">Сообщений в чате:</span> '+uxtra_data[x][14]+'<br /><span style="opacity:.6">Ранг:</span> '+uxtra_data[x][15]+'<br />';suchemptiness+=1}else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%MSG_COUNT%',tmp2repl)

if(uxtra_data[x][11].length>0){tmp2repl=uxtra_data[x][11]}else{tmp2repl='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PC9zdmc+'}
extpro2preview=extpro2preview.replace('%COVER%',tmp2repl)



if(uxtra_data[x][12].length>0 && x!=3){tmp2repl=uxtra_data[x][12]}else if(x==3){tmp2repl='<span style="opacity:.6">Что умеет бот:</span><br><br>★ <b class="pointer x_accent_fg" style="text-decoration:underline" onclick="inp.value=\'Тору подскажи аниме\';msg_send()">Посоветовать аниме</b><br><br>★ <b class="pointer x_accent_fg" style="text-decoration:underline" onclick="inp.value=\'Тору подскажи мангу\';msg_send()">Посоветовать мангу</b>'}else{if(suchemptiness<1){tmp2repl='<div style="text-align:center;font-size:120%">'+lang['pro_emp']+'</div>'}else{if(uxtra_data[x][12].length>0){tmp2repl=uxtra_data[x][12]}else{if(suchemptiness<1){tmp2repl='<div style="text-align:center;font-size:120%">'+lang['pro_emp']+'</div>'}else{tmp2repl=''}}}}

extpro2preview=extpro2preview.replace('%ABOUT%',tmp2repl)

preview(0,24)}


// ----------

function usr_last_visit_get(x){
	widget_url='widget.php?q=usr_last_visit&uid=' + x;
	widget_ulv=new XMLHttpRequest();
	widget_ulv.open('get',widget_url, false);
	widget_ulv.setRequestHeader('Cache-Control', 'no-cache');
	widget_ulv.onreadystatechange=usr_last_visit_rec; 
	widget_ulv.send()
	return usr_visit;
}

function usr_last_visit_rec(x){
	if(widget_ulv.readyState==4 && widget_ulv.status==200){
		usr_visit=JSON.parse(widget_ulv.responseText);
	return usr_visit;
	}
}

function usr_status_get(x){
	
	widget_url='widget.php?q=usr_status&uid=' + x;
	widget_usg=new XMLHttpRequest();
	widget_usg.open('get',widget_url, false);
	widget_usg.setRequestHeader('Cache-Control', 'no-cache');
	widget_usg.onreadystatechange=usr_status_rec; 
	widget_usg.send()
	return usr_status;
}

function usr_status_rec(x){
	if(widget_usg.readyState==4 && widget_usg.status==200){
		usr_status=JSON.parse(widget_usg.responseText);
	return usr_status;
	}
}
// ----------

function usr_gender_get(x){
	widget_url='widget.php?q=usr_gender&uid=' + x;
	widget_ugg=new XMLHttpRequest();
	widget_ugg.open('get',widget_url, false);
	//widget_ult.setRequestHeader('Cache-Control', 'no-cache');
	widget_ugg.onreadystatechange=usr_gender_rec; 
	widget_ugg.send()
	return usr_gender;
}

function usr_gender_rec(x){
	if(widget_ugg.readyState==4 && widget_ugg.status==200){
		usr_gender=JSON.parse(widget_ugg.responseText);
	return usr_gender;
	}
}

// ----------

function ext_user_show(x,y){
suchemptiness=0
if (typeof all_users[x] != "undefined") {active_usrname = all_users[x][2]}

user_avatar = 'avatar.php?q='+x;

if(!uxtra_data[x] || (uxtra_data[x][0] == null) || (uxtra_data[x][0] == undefined) || (uxtra_data[x][0] == '') || (uxtra_data[x][0] == '0')) {var motto_status=''}else{var motto_status=uxtra_data[x][0]}

active_grpname='<b style="display:inline-block;padding:0 5px 0 5px" class="x_all_rounded g'+y+'">'+gnames[y]+'</b>';
extpro2preview=extprotemplate.replace('%IMAGE%',user_avatar).replace('%NAME%',active_usrname).replace('%GROUP%','<span style="opacity:.6">'+lang['group']+':</span> '+active_grpname+'<br><span style="opacity:.6">Статус: </span>'+ motto_status)


if(!uxtra_data[x] || (uxtra_data[x][5] == null) || (uxtra_data[x][5] == undefined) || (uxtra_data[x][5] == '')) {tmp2repl=''}
else if(uxtra_data[x][5].length>0){tmp2repl='<span style="opacity:.6">Город:</span> '+'📌 '+uxtra_data[x][5]+'<br />'}else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%LOCATION%',tmp2repl)

if (x == 604 || x == 737 || myuuid == 737 || x == 545 || myuuid == 545 || mygrou == 1 || myuuid == 604){
	tmp2LS='';
}
else if(check_user(x) === false || x == 3) {
	tmp2LS='<span id="e_pm'+ x +'" class="show_user" alt="Написать в ЛС" onclick="$( \'#media_profile\' ).dialog( \'close\' );show_ext_user('+ x +','+ x +','+ y +',\''+ active_usrname +'\')">лс</span>';
	//show_ext_user(18,18,4,'TrustMe')

	
} else if (check_user(x) === true){
	tmp2LS='<span id="e_pm'+ x +'" class="show_user" alt="Написать в ЛС" onclick="$( \'#media_profile\' ).dialog( \'close\' );show_user('+ x +','+ x +','+ y +',\''+ active_usrname +'\')">лс</span>';
	
}
extpro2preview=extpro2preview.replace('%LS_PM%',tmp2LS)

if(uxtra_data[x] && uxtra_data[x][6]!=0 && x!=3){tmp2repl='<span style="opacity:.6">Возраст:</span> '+uxtra_data[x][6]}else if(x == 3){tmp2repl='<span style="opacity:.6">Возраст:</span> около 20000 лет' }else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%AGE%',tmp2repl)

if(uxtra_data[x] && uxtra_data[x][7].length>0){tmp2repl='<br /><span style="opacity:.6">Пол:</span> '+uxtra_data[x][7]+'<br />'}else{tmp2repl='<br />'}
extpro2preview=extpro2preview.replace('%GENDER%',tmp2repl)

if(uxtra_data[x] && uxtra_data[x][8].length>0){tmp2repl='<span style="opacity:.6">★ '+lang['pro_edu']+':</span> '+uxtra_data[x][8]+'<br />';suchemptiness+=1}else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%EDUCATION%',tmp2repl)

if(uxtra_data[x] && uxtra_data[x][9].length>0){tmp2repl='<span style="opacity:.6">★ '+lang['pro_ocu']+':</span> '+uxtra_data[x][9]+'<br />';suchemptiness+=1}else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%OCCUPATION%',tmp2repl)

if(uxtra_data[x] && uxtra_data[x][10].length>0){tmp2repl='<span style="opacity:.6">★ '+lang['pro_int']+':</span> '+uxtra_data[x][10]+'<br />';suchemptiness+=1}else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%INTERESTS%',tmp2repl)

tmpLastSeen='';
if(check_user(x) === false) {
	tmpLastSeen = '<span style="opacity:.6">Последний вход:</span> ' + usr_last_visit_get(x);
}
extpro2preview=extpro2preview.replace('%Last_Seen%',tmpLastSeen)

if(uxtra_data[x][13] == null || uxtra_data[x][13] == undefined) {tmp2repl=''}
else if(uxtra_data[x][13].length>0){tmp2repl='<span style="opacity:.6">Дата регистрации:</span> '+uxtra_data[x][13]+'<br />';suchemptiness+=1}else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%DATE_REG%',tmp2repl)



if(uxtra_data[x][14] == null || uxtra_data[x][14] == undefined) {tmp2repl=''}
else if(uxtra_data[x][14].length>0){tmp2repl='<span style="opacity:.6">Сообщений в чате:</span> '+uxtra_data[x][14]+'<br /><span style="opacity:.6">Ранг:</span> '+uxtra_data[x][15]+'<br />';suchemptiness+=1}else{tmp2repl=''}
extpro2preview=extpro2preview.replace('%MSG_COUNT%',tmp2repl)

if(uxtra_data[x][11].length>0){tmp2repl=uxtra_data[x][11]}else{tmp2repl='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PC9zdmc+'}
extpro2preview=extpro2preview.replace('%COVER%',tmp2repl)

if(uxtra_data[x][12].length>0 && x!=3){tmp2repl=uxtra_data[x][12]}else if(x==3){tmp2repl='<span style="opacity:.6">Что умеет бот:</span><br><br>★ <b class="pointer x_accent_fg" style="text-decoration:underline" onclick="inp.value=\'Тору подскажи аниме\';msg_send()">Посоветовать аниме</b><br><br>★ <b class="pointer x_accent_fg" style="text-decoration:underline" onclick="inp.value=\'Тору подскажи мангу\';msg_send()">Посоветовать мангу</b>'}else{if(suchemptiness<1){tmp2repl='<div style="text-align:center;font-size:120%">'+lang['pro_emp']+'</div>'}else{tmp2repl=''}}
extpro2preview=extpro2preview.replace('%ABOUT%',tmp2repl)



preview(0,24)}

// ----------
function get_gifs(k,n){
qbox=de('gifquery')
if(mobile>0){qbox.blur()}
ajax_get_gifs=new XMLHttpRequest()

if(qbox.value.trim().length>0){gifquery=qbox.value.trim()}
else{gifquery=tenor_rnd[Math.floor(Math.random()*tenor_rnd.length)].trim()}

if(gifquery.length<1){gifquery='excited'}

theurl='https://api.tenor.com/v1/search?key='+k+'&media_filter=basic&limit='+n+'&q='+encodeURIComponent(gifquery)

ajax_get_gifs.open('get',theurl)
ajax_get_gifs.onreadystatechange=show_gifs
ajax_get_gifs.send()
return false}


// ----------

function show_gifs(){
listofgifs=''
if(ajax_get_gifs.readyState==4 && ajax_get_gifs.status==200){
rcv=ajax_get_gifs.responseText.toString()
try{rcv=JSON.parse(rcv)
if(typeof rcv['results'] =='object'){
for (i in rcv['results']){

nanogif=rcv['results'][i]['media'][0]['nanogif']['url'].replace('https://media.tenor.com/','')
basegif=rcv['results'][i]['media'][0]['gif']['url'].replace('https://media.tenor.com/','')
basemp4=rcv['results'][i]['media'][0]['mp4']['url'].replace('https://media.tenor.com/','')

listofgifs+='<img class="tenor_inlist pointer" src="https://media.tenor.com/'+nanogif+'" alt="" onclick="send_attach(\''+nanogif+' '+basemp4+'\',15)" onmouseover="this.style.borderColor=\'#000\'" onmouseout="this.style.borderColor=\'#fff\'" /> '
}
de('listgifs').innerHTML=listofgifs
}}
catch(e){/* console.log(e) */}
}}

// ----------

function get_stimoji(){
stisrc=0; qbox=de('stimojisrc')
if(mobile>0){qbox.blur()}
ajax_get_stimoji=new XMLHttpRequest()

if(qbox.value.trim().length>2){stisrc=qbox.value.trim()}

theurl='stimoji.php?q='+encodeURIComponent(stisrc)

ajax_get_stimoji.open('get',theurl)
ajax_get_stimoji.onreadystatechange=show_stimoji
ajax_get_stimoji.send()
return false}

function show_stimoji(){
listofsti=''
if(ajax_get_stimoji.readyState==4 && ajax_get_stimoji.status==200){
rcv=ajax_get_stimoji.responseText.toString()
if(rcv.length>0){ arcv=rcv.trim().split(' ')
for(i in arcv){
listofsti+='<img class="stimoji_inlist x_overal pointer" src="'+stimoji_dir+'/'+arcv[i]+'.svg" alt="" onclick="send_attach(\''+arcv[i]+'\',16)" onmouseover="this.style.borderColor=\'#000\'" onmouseout="this.style.borderColor=\'#fff\'" /> '
}} de('liststimoji').innerHTML=listofsti }}

// ----------

function show_r_history(x){
if(rooms[current_room][3].length>0){return}
blockroomchange=1
div_roomhistory=x;x.className='';x.innerHTML=lang['pwait']
ajax_get_rmsg=new XMLHttpRequest()
theurl='msgfetch.php?room='+current_room+'&mtoken='+encodeURIComponent(mtoken)+'&rtoken='+rtoken+'&tpoi='+tpoint+'&zone='+zone+'&ampm='+time_ampm
ajax_get_rmsg.open('get',theurl)
ajax_get_rmsg.onreadystatechange=rcv_r_history
ascroll()
ajax_get_rmsg.send()}

// ----------

function show_rlim_history(x,y){

blockroomchange=1
div_roomhistory=x;
ajax_get_rmsg=new XMLHttpRequest()
theurl='msgfetch.php?room='+current_room+'&mtoken='+encodeURIComponent(mtoken)+'&rtoken='+rtoken+'&tpoi='+$.now()+'&zone='+zone+'&ampm='+time_ampm+'&limit='+y
ajax_get_rmsg.open('get',theurl,false)
ajax_get_rmsg.setRequestHeader('Cache-Control', 'no-cache');
ajax_get_rmsg.onreadystatechange=rcv_rlim_history
ajax_get_rmsg.send()}

// ----------


function rcv_rlim_history(){

if(ajax_get_rmsg.readyState==4 && ajax_get_rmsg.status==200){
rcv=ajax_get_rmsg.responseText.toString()
msgfromdb=multimsg_prepare(rcv)
var msgs = div_roomhistory.getElementsByTagName("div");
var num = msgs.length;
plus = document.createElement('div');
hr = document.createElement('hr');
msgs[0].parentNode.insertBefore(hr,msgs[0]);
msgs[0].parentNode.insertBefore(plus,hr);
plus.innerHTML = msgfromdb;
console.log(plus.offsetHeight);
plus.scrollIntoView(false);
blockroomchange=0;
}}

// ----------

function show_ref_history(){
ajax_get_rmsg=new XMLHttpRequest()
theurl='msgfetch.php?room='+current_room+'&user='+myname+'&mtoken='+encodeURIComponent(mtoken)+'&rtoken='+rtoken+'&tpoi='+$.now()+'&zone='+zone+'&ampm='+time_ampm+'&randt='+$.now()
ajax_get_rmsg.open('get',theurl)
ajax_get_rmsg.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate, max-age=0");
ajax_get_rmsg.setRequestHeader("Pragma", "no-cache"); 
ajax_get_rmsg.setRequestHeader( "Expires", 0 );
ajax_get_rmsg.onreadystatechange=rcv_ref_history
ajax_get_rmsg.send()}


// ----------


function rcv_ref_history(){

if(ajax_get_rmsg.readyState==4 && ajax_get_rmsg.status==200){
rcv=ajax_get_rmsg.responseText.toString()
msgfromdb=multimsg_prepare(rcv)
var refmsgs = document.getElementById("panel_ref");
refmsgs.innerHTML=msgfromdb
pab_width=pab.offsetWidth;
pab.style.left='-'+pab_width+'px';
$('#panel_ref').dialog({resizable: false,width:'auto',height:'600',title:'Упоминания', show: { effect: 'fade', duration: 300 }});
refmsgsH = document.getElementById('panel_ref').scrollHeight; 
document.getElementById('panel_ref').scroll(0, refmsgsH);
msgfromdb = '';
rcv = '';

}}

// ----------




function rcv_r_history(){
if(ajax_get_rmsg.readyState==4){blockroomchange=0; div_roomhistory.innerHTML=''}
if(ajax_get_rmsg.readyState==4 && ajax_get_rmsg.status==200){
rcv=ajax_get_rmsg.responseText.toString()
msgfromdb=multimsg_prepare(rcv)
rooms[current_room][1]=rooms[current_room][1].replace(roomhistbutton,'')
rooms[current_room][3]=msgfromdb
div_roomhistory.innerHTML=msgfromdb
}}

// ----------

function show_p_history(x){
if(phistorycached.indexOf(ext_usr_id)!=-1){return}
blockuserchange=1
phistorycached.push(ext_usr_id)
div_userhistory=x;x.className='';x.innerHTML=lang['pwait']
ajax_get_pmsg=new XMLHttpRequest()
theurl='msgfetch.php?tuid='+ext_usr_id+'&mtoken='+encodeURIComponent(mtoken)+'&rtoken='+rtoken+'&tpoi='+tpoint+'&zone='+zone+'&ampm='+time_ampm
ajax_get_pmsg.open('get',theurl)
ajax_get_pmsg.onreadystatechange=rcv_p_history
ajax_get_pmsg.send()}

// ----------

function rcv_p_history(){
if(ajax_get_pmsg.readyState==4){blockuserchange=0; div_userhistory.innerHTML=''}
if(ajax_get_pmsg.readyState==4 && ajax_get_pmsg.status==200){
rcv=ajax_get_pmsg.responseText.toString()
msgfromdb=multimsg_prepare(rcv)
div_userhistory.innerHTML=msgfromdb
console.log(ext_usr_id)
console.log(div_userhistory.scrollHeight)
setTimeout( $( '#p'+ext_usr_id ).scrollTop( div_userhistory.scrollHeight + 1000 ), 1000);
}}


// ----------

function multimsg_prepare(r){
try{
var tmp_num;
r=JSON.parse(r)
msgfromdb=new Array()
for(w in r){

if (!isNaN(parseFloat(r[w]['id'])) && isFinite(r[w]['id'])) {tmp_num=r[w]['id']}
if(r[w]['id'] == 'notifity_pm'){h_id=tmp_num+120;} else {h_id=parseInt(r[w]['id'])}
h_color=parseInt(r[w]['color'])
h_group=parseInt(r[w]['group'])
h_attch=parseInt(r[w]['attach'])
h_usrid=parseInt(r[w]['uid'])
h_time=escape_str(r[w]['time'])
h_uname=escape_str(r[w]['name'])
h_avat=escape_str(r[w]['avatar'])
h_text=escape_str(r[w]['text'])
h_text=msg_format(h_text,h_attch)

if(h_attch>99  && rbox_sender.length==3){h_usrid=rbox_sender[0];h_group=rbox_sender[1];h_uname=b64d(rbox_sender[2]);h_color=0}
if(h_attch==19 && nbox_sender.length==3){h_usrid=nbox_sender[0];h_group=nbox_sender[1];h_uname=b64d(nbox_sender[2])}
if(h_attch==21 && gbox_sender.length==3){h_usrid=gbox_sender[0];h_group=gbox_sender[1];h_uname=b64d(gbox_sender[2])}

if(typeof bwlst!=='undefined' && bwlst.length>0 && typeof rwlst!=='undefined' && rwlst.length>0){
for(i in bwlst){regex=new RegExp('('+bwlst[i]+')','gi'); h_text=h_text.replace(regex,rwlst[i])}}


var who_i = '';
if(getCookie('UID') == h_usrid) {
who_i = 'your_msg';
}
//var gend=usr_gender_get(h_usrid);

if(h_uname == 'ひきえじ'){h_style='style=\'font-family: ABG;letter-spacing:-2px;color: #8e24aa;\'';h_class=' glich'}else{h_style='';h_class=''}
msgft=msg_template.replace(/{AVATAR}/g,h_avat).replace(/{RSIGN}/g,'').replace(/{TIME}/g,h_time).replace(/{STYLE}/g,h_style).replace(/{GROUP}/g,h_group).replace(/{C_CLASS}/g,h_class).replace(/{DEL}/g,'').replace(/{NAME}/g,h_uname).replace(/{WHO_I}/g,who_i).replace(/{UID}/g,h_usrid).replace(/{COLOR}/g,h_color).replace(/{TEXT}/g,h_text)
msgfromdb[h_id]=msgft
}

msgfromdb=msgfromdb.join(' ');
if(msgfromdb.length<1){msgfromdb=lang['nomsg'];}
return msgfromdb

}catch(e){console.log(e)}}

// ----------

function get_time(){
if(time_ampm==0){return ''}
d=new Date
if(time_ampm==2){h=d.getHours()} // 24h
if(time_ampm==1){h = d.getHours()%12||12} // 12h
h=('0'+h).slice(-2)
m=('0'+d.getMinutes()).slice(-2)
s=('0'+d.getSeconds()).slice(-2)
return h+':'+m+':'+s}

// ----------

function disbl_rec(dsbl){
if(dsbl<1){if(typeof navigator.mediaDevices!='object' || typeof MediaRecorder!='function'){dsbl=1}}
if(dsbl>0){
de('bottom_start_arec').style.display='none'
de('bottom_start_vrec').style.display='none'
}}

function start_a_rec(){
de('hidescreen_consent').style.display='block'
init_av_elements(); btn_a_rec.style.opacity=1.0
navigator.mediaDevices.getUserMedia({audio: true})
.then(function(stream){
de('hidescreen_consent').style.display='none'
de('bottom_dmore').style.display='none'
arecorder = new MediaRecorder(stream,aopt)
arecorder.addEventListener('dataavailable',addchunks)
counter=timearecount;avrecu_type=1;chunks=[];
inf_a_cnt.innerHTML='<b>'+counter+'</b>';
cvr_a_rec.style.display='block';avupload_abort=0
avrectimer=setInterval('timr_a_rec()',1000)
arecorder.start()},function(){de('hidescreen_consent').style.display='none';toff_avm()})}

function stop_a_rec(x){
avrecu_type=x;
cvr_avprc.style.display='block';cvr_a_rec.style.display='none'
if(typeof avrectimer=='number'){clearInterval(avrectimer)}
arecorder.stop(); arecorder.stream.getTracks().forEach(function(item){item.stop()})
delete arecorder;setTimeout('upld_a_rec()',500)}

function upld_a_rec(e){
if(avrecu_type<1){cvr_avprc.style.display='none';return}
blob=new Blob(chunks);
fd=new FormData()
fd.append('vdata',blob)
fd.append('wh2go',avrecu_type)
fd.append('vtime',lang['vomsg']+' '+get_time())
fd.append('vtoken',vtoken)
a_msg=new XMLHttpRequest()
a_msg.open('POST','upamsg.php',true)
a_msg.onreadystatechange=upld_a_res
a_msg.send(fd)}

function upld_a_res(){
if(a_msg.readyState==4 && a_msg.status==200){
cvr_avprc.style.display='none';
rs=a_msg.responseText.toString();
//console.log(rs)
if(avupload_abort>0){return}
if(rs=='panel'){ swap_panel(4);
de('hidescreen_blur').style.display='none'
hst.style.display='block';pab.style.display='block';hoop(pan,1);
fmd.src='fmedia.php?stoken='+stoken+'&rnd='+Math.random();return}
if(rs.search('voice_')>0){attach_type=17; inp.value=rs; msg_send();
fmd.src='fmedia.php?stoken='+stoken+'&rnd='+Math.random()}
}}

function timr_a_rec(){counter-=1; inf_a_cnt.innerHTML='<b>'+counter+'</b>'; if(counter<1){stop_a_rec()}}

function start_v_rec(){
de('hidescreen_consent').style.display='block'
init_av_elements(); btn_v_rec.style.opacity=1.0
navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream){
de('hidescreen_consent').style.display='none'
de('bottom_dmore').style.display='none'
vrecorder = new MediaRecorder(stream,vopt)
vidrecprv=de('vrec_prv'); vidrecprv.srcObject=stream;
vrecorder.addEventListener('dataavailable',addchunks)
counter=timevrecount;avrecu_type=1;chunks=[];
inf_v_cnt.innerHTML='<b>'+counter+'</b>';
cvr_v_rec.style.display='block';avupload_abort=0
avrectimer=setInterval('timr_v_rec()',1000)
vrecorder.start();vidrecprv.play()},function(){de('hidescreen_consent').style.display='none';toff_avm()})}

function addchunks(e){chunks.push(e.data)}

function stop_v_rec(x) {
avrecu_type=x;vidrecprv.pause();
cvr_avprc.style.display='block';cvr_v_rec.style.display='none'
if(typeof avrectimer=='number'){clearInterval(avrectimer)}
vrecorder.stop(); vrecorder.stream.getTracks().forEach(function(item){item.stop()})
delete vrecorder; setTimeout('upld_v_rec()',1000)}

function upld_v_rec(){
if(avrecu_type<1){cvr_avprc.style.display='none';return}
blob=new Blob(chunks);
fd=new FormData()
fd.append('vdata',blob)
fd.append('wh2go',avrecu_type)
fd.append('vtime',lang['vomsg']+' '+get_time())
fd.append('vtoken',vtoken)
v_msg=new XMLHttpRequest()
v_msg.open('POST','upvmsg.php',true)
v_msg.onreadystatechange=upld_v_res
v_msg.send(fd)}

function upld_v_res(){
if(v_msg.readyState==4 && v_msg.status==200){
cvr_avprc.style.display='none';
rs=v_msg.responseText.toString();
//console.log(rs)
if(avupload_abort>0){return}
if(rs=='panel'){swap_panel(4);
de('hidescreen_blur').style.display='none'
hst.style.display='block';pab.style.display='block';hoop(pan,1);
fmd.src='fmedia.php?stoken='+stoken+'&rnd='+Math.random();return}
if(rs.search('vmsg_')>0){attach_type=18; inp.value=rs; msg_send();
fmd.src='fmedia.php?stoken='+stoken+'&rnd='+Math.random()}
}}

function timr_v_rec(){counter-=1; inf_v_cnt.innerHTML='<b>'+counter+'</b>'; if(counter<1){stop_v_rec()}}

function init_av_elements(){
btn_a_rec=de('bottom_start_arec')
cvr_a_rec=de('hidescreen_arec')
inf_a_cnt=de('arec_cnt')
btn_v_rec=de('bottom_start_vrec')
cvr_v_rec=de('hidescreen_vrec')
inf_v_cnt=de('vrec_cnt')
cvr_avprc=de('hidescreen_avupl')}

function toff_avm(){
de('bottom_start_arec').style.opacity=0.3
de('bottom_start_vrec').style.opacity=0.3
avpms_nope=1}

// ----------

function rmb_txt(w){
if(!rmb_unsent){return}
t=inp.value;

if(w=='u_hide'){arr_rmb_users[ext_usr_id]=t
if(arr_rmb_rooms[current_room]){inp.value=arr_rmb_rooms[current_room]}
else{inp.value=''}}

if(w=='u_show'){
arr_rmb_rooms[current_room]=t
if(arr_rmb_users[ext_usr_id]){
inp.value=arr_rmb_users[ext_usr_id]}
else{inp.value=''}}

if(w=='r_hide' && ext_usr_id==0){arr_rmb_rooms[current_room]=t}

if(w=='r_show' && ext_usr_id==0){
if(arr_rmb_rooms[current_room]){inp.value=arr_rmb_rooms[current_room]}
else{inp.value=''}}
}

// ----------

function runjbox(a){
if(jbox[a][1]==1 && jbox[a][2]==jbox[a][4].length){jbox[a][2]=0}
if(jbox[a][2]>=jbox[a][4].length){return}

time=get_time();
offset=jbox[a][2];jbox[a][2]+=1;
jtemplate=b64d(jbox[a][5]);
jentry=b64d(jbox[a][4][offset])
if(jentry.length<2){return}
jmsg=jtemplate.replace(/{TEXT}/g,jentry).replace(/{TIME}/g,time).replace(/{NAME}/g,'<b>'+myname+'</b>')

mdd='m'+mdc; mdc+=1;
jmsg='<div id="'+mdd+'">'+jmsg+'</div>'

jroom=jbox[a][0];

if(jroom==0){
if(jbox[a][6]>0){rooms[current_room][1]+=jmsg;}
log.innerHTML+=jmsg; scrolllog()
de(mdd).className='msgoff'
setTimeout("de('"+mdd+"').className='msgonn'",10)
setTimeout("de('"+mdd+"').className=''",300)
play_s(2);return}

rooms[jroom][1]+=jmsg;

if(current_room==jroom){
log.innerHTML+=jmsg; scrolllog()
de(mdd).className='msgoff'
setTimeout("de('"+mdd+"').className='msgonn'",10)
setTimeout("de('"+mdd+"').className=''",300)
play_s(2)}
else{
rooms[jroom][2]++; recalc_msg();
if(bg_sound>0){play_s(4);}
}}

// ----------

function runrbox(m){
dance: for (i in rbox){ for (j in rbox[i][3]){
regex=new RegExp('('+b64d(rbox[i][3][j])+')','i');
if(m.search(regex)>-1 && ((rbox[i][1]==ext_usr_id) || (srv_usr_id==0 && (rbox[i][2]==current_room || rbox[i][2]<1)))){
return rbox[i][0];break dance}}} return false}

function rbx_snd(m,tx){
tx=encodeURIComponent(tx)
us=encodeURIComponent(myname)
ajax_rbx=new XMLHttpRequest()
ajax_rbx.open('get','rbox.php?q='+m+'&tx='+tx+'&us='+us)
ajax_rbx.onreadystatechange=rbx_ans
ajax_rbx.send()}


function rbx_ans(){rsp=false
if(ajax_rbx.readyState==4 && ajax_rbx.status==200){
rsp=ajax_rbx.responseText.toString()}
if(rsp && rsp.length>0){
try{rjson=JSON.parse(rsp);
if(!isNaN(rjson[1])){poststamp=0; inp.disabled=false; attype=rjson[1]+100; send_attach(rjson[0],attype)}}
catch(e){poststamp=0;inp.disabled=false;send_attach(rsp,100)};
return}}


// ----------

function runnbox(m){
dance: for (i in nbox){ for (j in nbox[i][2]){
regex=new RegExp('('+b64d(nbox[i][2][j])+')','i')
if(m.search(regex)>-1 && (srv_usr_id==0 && (nbox[i][1]==current_room || nbox[i][1]<1))){
return nbox[i][0];break dance}}} return false}

function nbx_snd(m){
ajax_nbx=new XMLHttpRequest()
ajax_nbx.open('get','news.php?a='+m)
ajax_nbx.onreadystatechange=nbx_ans
ajax_nbx.send()}

function nbx_ans(){rsp=false
if(ajax_nbx.readyState==4 && ajax_nbx.status==200){
rsp=parseInt(ajax_nbx.responseText)}
if(rsp && !isNaN(rsp) && rsp>0){poststamp=0;inp.disabled=false;send_attach(rsp,19);return}
}

// ----------

function rungbox(m){
dance: for (i in gbox){ for (j in gbox[i][2]){
regex=new RegExp('('+b64d(gbox[i][2][j])+')','i')
if(m.search(regex)>-1 && (srv_usr_id==0 && (gbox[i][1]==current_room || gbox[i][1]<1))){
return gbox[i][0];break dance}}}
return false}

function gbx_snd(m){
ajax_gbx=new XMLHttpRequest()
ajax_gbx.open('get','gifs.php?q='+m)
ajax_gbx.onreadystatechange=gbx_ans
ajax_gbx.send()
}

function gbx_ans(){rsp=false
if(ajax_gbx.readyState==4 && ajax_gbx.status==200){
rsp=ajax_gbx.responseText}
if(rsp && rsp.length>8){poststamp=0;inp.disabled=false;send_attach(rsp,21);return}
}

// ----------

function b64e(str) {
return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,function(match, p1){
return String.fromCharCode(parseInt(p1,16))}))}

function b64d(str){
return decodeURIComponent(Array.prototype.map.call(atob(str),function(c){
return '%'+('00'+c.charCodeAt(0).toString(16)).slice(-2)}).join(''))}

// ----------

function radio_set_volume(x){
x=Math.round(x)/100;de('radio_player').volume=x}

function notice_set_volume(x){
x=Math.round(x)/10;audf.volume=x
document.cookie = "notice_volume="+x*10+"; max-age=31536000"
}

function radio_station_change(x){
radio_playstate=0;
de('radio_pp').className='radio_pp_play x_bcolor_z x_all_rounded';
de('radio_pp').innerHTML='<span style="margin-left:30px">'+stations[x][0]+'</span>'
de('radio_player').src=stations[x][1]}

function radio_state_change(){
if(radio_playstate==0){
de('radio_player').load(); de('radio_player').play();
de('radio_pp').className='x_accent_bb radio_pp_pause x_bcolor_z x_all_rounded';
radio_playstate=1;
if(mobile==1 && mobileapp>0 && sound_on==1){swap_sound(0)}
}
else{de('radio_player').pause();
de('radio_pp').className='radio_pp_play x_bcolor_z x_all_rounded';
radio_playstate=0}}

// ----------

function pastel(x) {
br=128; bg=128; bb=128
sd=x.charCodeAt(0)^x.charCodeAt(1)
r1=Math.abs((Math.sin(sd++)*1200))%256
r2=Math.abs((Math.sin(sd++)*1200))%256
r3=Math.abs((Math.sin(sd++)*1200))%256
fr=Math.round((r1+br)/2)
fg=Math.round((r2+bg)/2)
fb=Math.round((r3+bb)/2)
ee='rgb('+fr+','+fg+','+fb+')'
return ee}

// ----------

function load_hist_init(){
blockroomchange=1
setTimeout("show_r_history(de('welcome_msg'))",600)
setTimeout("scrolllog()",800);setTimeout("scrolllog()",1200);setTimeout("scrolllog()",2200)}

// ----------

function val_poll(x){
x=x.split('\n');y=[]
for(i in x){z=x[i].trim(); z=z.substr(0,99); if(z.length>0){y.push(z)}}
if(y.length<3){return false} y=y.join('\n')
if(y.length<5 || y.length>999){return false}
return y}

// ----------

function get_ou(){ou=new Array()
for(i in usr_online){ou.push(usr_online[i][0])}
return encodeURIComponent(btoa(ou.join('-')))}

// ----------

function sel_avatar(ax){
pan.scrollTop=0
de('my_avatar_pic').className=''; de('avupload').value=''
de('avatar').value=ax; de('my_avatar_pic').src=ax
setTimeout("shoop(de('avmottosbutton'),2,200);de('avmottosbutton').className='x_all_rounded x_accent_bg panel_button'",500)
setTimeout("de('my_avatar_pic').className='mfa_anime'",200)}

function avformcheck(ai,sz){
tav=de('my_avatar_pic');tav.className=''
if(typeof ai.files[0]=='object' && ai.files[0].size<sz){
setTimeout("shoop(de('avmottosbutton'),2,200);de('avmottosbutton').className='x_all_rounded x_accent_bg panel_button'",500)
} else{ai.value=''
de('avatar').value=de('avinit').value;tav.src=de('avinit').value
de('avmaxsizedesc').className='x_accent_bg x_all_rounded nope'
de('avmottosbutton').className='x_all_rounded x_bcolor_z panel_button'
de('lblforup').style.opacity=0
setTimeout("de('lblforup').style.opacity=1;de('avmaxsizedesc').className='x_overal x_right_rounded'",950)};return}

// ----------

audb=document.createElement('audio')
blinginuse=0; blingtimeout=10; // sec

function blinginit(c){
de('blingdv').className=''
de('blingdv').innerHTML=''
de('blingdv').style.display='block'
de('blingdv').style.backgroundColor=c
de('blingdv').className='asho'
setTimeout("de('blingdv').className=''",900)
}

function showbling(x,r,u){
if(!bbox[x] || blinginuse>0 || r<1 || (ext_usr_id>0 && bbox[x][0]<1) || (r!=current_room && bbox[x][0]<1)){return}
de('blngbox1').style.display='block';de('blngbox2').style.display='none'
blinginuse=1; blinginit(b64d(bbox[x][2]))
de('blingdv').innerHTML=b64d(bbox[x][4]).replace('%SENDER%',u)
if(bbox[x][3].length>3 && usrinteaction>0 && sound_options[8]>0){audb.src=b64d(bbox[x][3]);audb.play()}
blingtmout=setTimeout('hidebling()',bbox[x][1])}

function hidebling(){de('blingdv').className='ahid';
if(typeof blingtmout=='number'){clearTimeout(blingtmout)}
if(audb.paused!=true){audb.pause()}
setTimeout("de('blingdv').style.display='none';de('blingdv').innerHTML=''",800)
setTimeout("blinginuse=0;de('blngbox2').style.display='block';de('blngbox1').style.display='none'",blingtimeout*1000)}

function postbling(x){if(bbox[x]){inp.value=x; msg_send(); inp_focus()}}

// ----------

function show_offmsg(u,n,a){
$('#content_offmsg').dialog({width:'auto',title:'Сообщение'});
de('content_offmsg').innerHTML=spinner;offmsg_init(u)
oi=de('offmsg_inp');jp=de('panel_offbot');oi.value='';
if(offmsgok<1){jp.style.display='none';return}
if(check_user(u)){jp.style.opacity=0.5;oi.readOnly=true;oi.placeholder=n+' '+lang['usron']}
else{jp.style.opacity=1;oi.readOnly=false;oi.placeholder='@'+n;if(mobile<1){oi.focus()}}}

tempoffmsgid=0; offcnt=0; mrp=false;

function offmsg_init(u){
tempoffmsgid=u; ajax_ofm=new XMLHttpRequest()
ajax_ofm.open('get','offmsgs.php?toid='+u+'&zone='+zone+'&ampm='+time_ampm+'&stoken='+encodeURIComponent(stoken))
ajax_ofm.onreadystatechange=offmsg_recv; ajax_ofm.send()}

function offmsg_recv(){
if(ajax_ofm.readyState==4 && ajax_ofm.status==200){
res=ajax_ofm.responseText.toString()
de('content_offmsg').innerHTML=res
pan.scrollTop=pan.scrollHeight}}

function offmsg_snd(m,d){
m=m.toString()
if(m.trim().length<1 && d==0){return}
d=parseInt(d)
amr='offmsg='+encodeURIComponent(m)+'&del='+d+'&mtoken='+encodeURIComponent(mtoken)+'&toid='+parseInt(tempoffmsgid)+'&zone='+zone+'&ampm='+time_ampm
ajax_ofn=new XMLHttpRequest()
ajax_ofn.open('post','offmsgn.php')
ajax_ofn.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
ajax_ofn.onreadystatechange=offmsg_ans
ajax_ofn.send(amr);de('offmsg_inp').value='';if(mobile<1){de('offmsg_inp').focus()}}

function offmsg_ans(){
if(ajax_ofn.readyState==4 && ajax_ofn.status==200){
res=ajax_ofn.responseText.toString(); if(res.length<1){return}
if(!isNaN(res)){hoop('offm'+res,0);return}
offcnt+=1;mrp='mro'+offcnt
newmsg='<div id="'+mrp+'" class="msgoff">'+res+'</div>'
de('content_offmsg').innerHTML+=newmsg
setTimeout("de('"+mrp+"').className='msgonn'",10)
setTimeout("de('"+mrp+"').className=''",300)
pan.scrollTop=pan.scrollHeight}}

// ----------

function cboard(m,n){
pattern=/<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|^'">\s+))?)+\s*|\s*)\/?>/gim
$('.msg_body').removeClass('msg_selected');
m = replaceAll(m, '<q>','[q]')
m = replaceAll(m, '<q class>','[q]')
m = replaceAll(m, '<q class="open">','[q]')
m = replaceAll(m, '</q>','[/q]')
m = replaceAll(m, '<spoiler>','[s]')
m = replaceAll(m, '</spoiler>','[/s]')
m=m.replace(sign2_reply,'').replace(sign1_reply,'').replace('\n',' ').replace('\r','').replace(pattern,'').trim()
n.parentElement.parentElement.classList.add("msg_selected");
if(m.length<1){n.style.display='none';cb2clear();return}
de('cboard').innerText=sign2_reply+' '+m; inp_focus()
}

function cb2msg(){
if(de('cboard').innerText.trim().length<1 || inp.value.trim().length<1){return}
inp.value='[q]'+de('cboard').innerText.trim()+'[/q] '+inp.value
}

function cb2clear(){
$('.msg_body').removeClass('msg_selected');
de('cboard').style.display='none'
de('cboard').innerHTML=''
}

// ----------

function del_msg(x){
cnf=confirm(lang['confirm'])
if(!cnf){return}
console.log('no deleting '+x)
msg={}
msg['del']=x
msg=JSON.stringify(msg)
ax_ping(msg)}


function msg_delete(u,m){
constr_msgdel='m'+u.toString()+m.toString()
msg2rem.push(constr_msgdel)
if(de(constr_msgdel)){
de(constr_msgdel).style.display='none'
}}

// ----------

function vipcodeadd(){
vipcode=de('vipcodetext').value.trim()

if(vipcode.length<70 || vipcode.search(/[^A-z0-9]+/gi)>-1){
de('vipcodeapply').className='x_all_rounded x_bcolor_z panel_button nope'
setTimeout("de('vipcodeapply').className='x_all_rounded x_bcolor_z panel_button'",950)
return}

ajax_vip=new XMLHttpRequest()
ajax_vip.open('get','vipadd.php?uid='+myuuid+'&user='+encodeURIComponent(myname)+'&vip='+encodeURIComponent(vipcode))
ajax_vip.onreadystatechange=vipcoderec; ajax_vip.send()}

function vipcoderec(){
if(ajax_vip.readyState==4 && ajax_vip.status==200){
res=ajax_vip.responseText.toString()
if(res!='success'){
console.log(res)
de('vipcodeapply').className='x_all_rounded x_bcolor_z panel_button nope'
setTimeout("de('vipcodeapply').className='x_all_rounded x_bcolor_z panel_button'",950)
return}
self.location.href='./?room='+current_room}}

// ----------

emojimenu=''; emojistore=new Object();
emojistore[0]='😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😢 😭 😤 😠 😡 🤬 🤯 😳 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 😴 🤤 😪 😵 🤐 🤢 🤮 🤧 😷 🤒 🤕 🤑';
emojistore[1]='🤠 😈 👿 👹 👺 🤡 💩 👻 💀 👽 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 🤲 👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 🤟 🤘 👌 👈 👉 👆 👇 ✋ 🤚 🖖 👋 🤙 💪 🖕 🙏 💍 💄 💋 👄 👅 👂 👃 👣 👀 🧠 👤 👥 👶 👧 🧒 👦 👩 🧑 👨 🧔 👵 🧓 👴 👲 🧕 👰 🤵 👸 🤴 🤶 🎅 👼 🤰 🤱 💅 🤳 💃 🕺 👫 👭 👬 💑 💏 👪 🧥 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 🧦 🧤 🧣 🎩 🧢 👒 🎓 👑 👝 👛 👜 💼 🎒 👓 🌂';
emojistore[2]='⚽ 🏀 🏈 ⚾ 🎾 🏐 🏉 🎱 🏓 🏸 🥅 🏒 🏑 🏏 ⛳ 🏹 🎣 🥊 🥋 🎽 🥌 🛷 🎿 🏂 🤺 🏇 🏆 🥇 🥈 🥉 🏅 🎫 🎪 🎭 🎨 🎬 🎤 🎧 🎼 🎹 🥁 🎷 🎺 🎸 🎻 🎲 🎯 🎳 🎮 🎰 ';
emojistore[3]='🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐚 🐞 🐜 🦗 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🐘 🦏 🐪 🐫 🦒 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🐐 🦌 🐕 🐩 🐈 🐓 🦃 🐇 🐁 🐀 🦔 🐾 🐉 🐲';
emojistore[4]='🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 💫 ⭐ 🌟 ✨ ⚡ 💥 🔥 🌈 ⛅ ⛄ 💨 💧 💦 ☔ 🌊';
emojistore[5]='🍎 🍏 🍐 🍊 🍋 🍌 🍉 🍇 🍓 🍈 🍒 🍑 🍍 🥥 🥝 🍅 🍆 🥑 🥦 🥒 🌽 🥕 🥔 🍠 🥐 🍞 🥖 🥨 🧀 🥚 🍳 🥞 🥓 🥩 🍗 🍖 🌭 🍔 🍟 🍕 🥪 🥙 🌮 🌯 🥗 🥘 🥫 🍝 🍜 🍲 🍛 🍣 🍱 🍤 🍙 🍚 🍘 🍥 🥠 🍢 🍡 🍧 🍨 🍦 🥧 🍰 🎂 🍮 🍭 🍬 🍫 🍿 🍩 🥟 🍪 🌰 🥜 🍯 🥛 🍼 ☕ 🍵 🥤 🍶 🍺 🍻 🥂 🍷 🥃 🍸 🍹 🍾 🥄 🍴 🥣 🥡 🥢';
emojistore[6]='📱 📲 💻 💽 💾 💿 📀 📼 📷 📸 📹 🎥 📞 📟 📠 📺 📻 ⏳ 📡 🔋 🔌 💡 🔦 💸 💵 💴 💶 💷 💰 💳 💎 🔧 🔨 🔩 🔫 💣 🔪 🚬 🏺 🔮 📿 💈 ⚗️ 🔭 🔬 💊 💉 🚽 🚿 🛁 🛀 🔑 🚪 🛌 🛒 🎁 🎈 🎏 🎀 🎊 🎉 🎎 🏮 🎐 📩 📨 📧 💌 📥 📤 📦 📪 📫 📬 📭 📮 📯 📜 📃 📄 📑 📊 📈 📉 📆 📅 📇 📋 📁 📂 📰 📓 📔 📒 📕 📗 📘 📙 📚 📖 🔖 🔗 📎 📐 📏 📌 📍 📝 🔍 🔎 🔏 🔐 🔒 🔓';
emojistore[7]='🚀 🛸 🚗 🚕 🚙 🚓 🚑 🚒 🚐 🚚 🚛 🚜 🚌 🚎 🛴 🚲 🛵 🚨 🚔 🚍 🚘 🚖 🚡 🚠 🚟 🚃 🚋 🚞 🚝 🚄 🚅 🚈 🚂 🚆 🚇 🚊 🚉 🛫 🛬 💺 🚁 🛶 ⛵ 🚤 🚢 ⚓ ⛽ 🚧 🚦 🚥 🚏 🗿 🗽 🗼 🏰 🏯 🎡 🎢 🎠 ⛲ 🌋 🗻 ⛺ 🏠 🏡 🏭 🏢 🏬 🏣 🏤 🏥 🏦 🏨 🏪 🏫 🏩 💒 ⛪ 🕌 🕍 🕋 🗾 🎑 🌅 🌄 🌠 🎇 🎆 🌇 🌆 🌃 🌌 🌉 🌁';
// emojistore[8]='🏁 🚩 🇦🇫 🇦🇽 🇦🇱 🇩🇿 🇦🇸 🇦🇩 🇦🇴 🇦🇮 🇦🇶 🇦🇬 🇦🇷 🇦🇲 🇦🇼 🇦🇺 🇦🇹 🇦🇿 🇧🇸 🇧🇭 🇧🇩 🇧🇧 🇧🇾 🇧🇪 🇧🇿 🇧🇯 🇧🇲 🇧🇹 🇧🇴 🇧🇦 🇧🇼 🇧🇷 🇮🇴 🇻🇬 🇧🇳 🇧🇬 🇧🇫 🇧🇮 🇰🇭 🇨🇲 🇨🇦 🇮🇨 🇨🇻 🇧🇶 🇰🇾 🇨🇫 🇹🇩 🇨🇱 🇨🇳 🇨🇽 🇨🇨 🇨🇴 🇰🇲 🇨🇬 🇨🇩 🇨🇰 🇨🇷 🇨🇮 🇭🇷 🇨🇺 🇨🇼 🇨🇾 🇨🇿 🇩🇰 🇩🇯 🇩🇲 🇩🇴 🇪🇨 🇪🇬 🇸🇻 🇬🇶 🇪🇷 🇪🇪 🇪🇹 🇪🇺 🇫🇰 🇫🇴 🇫🇯 🇫🇮 🇫🇷 🇬🇫 🇵🇫 🇹🇫 🇬🇦 🇬🇲 🇬🇪 🇩🇪 🇬🇭 🇬🇮 🇬🇷 🇬🇱 🇬🇩 🇬🇵 🇬🇺 🇬🇹 🇬🇬 🇬🇳 🇬🇼 🇬🇾 🇭🇹 🇭🇳 🇭🇰 🇭🇺 🇮🇸 🇮🇳 🇮🇩 🇮🇷 🇮🇶 🇮🇪 🇮🇲 🇮🇱 🇮🇹 🇯🇲 🇯🇵 🎌 🇯🇪 🇯🇴 🇰🇿 🇰🇪 🇰🇮 🇽🇰 🇰🇼 🇰🇬 🇱🇦 🇱🇻 🇱🇧 🇱🇸 🇱🇷 🇱🇾 🇱🇮 🇱🇹 🇱🇺 🇲🇴 🇲🇰 🇲🇬 🇲🇼 🇲🇾 🇲🇻 🇲🇱 🇲🇹 🇲🇭 🇲🇶 🇲🇷 🇲🇺 🇾🇹 🇲🇽 🇫🇲 🇲🇩 🇲🇨 🇲🇳 🇲🇪 🇲🇸 🇲🇦 🇲🇿 🇲🇲 🇳🇦 🇳🇷 🇳🇵 🇳🇱 🇳🇨 🇳🇿 🇳🇮 🇳🇪 🇳🇬 🇳🇺 🇳🇫 🇰🇵 🇲🇵 🇳🇴 🇴🇲 🇵🇰 🇵🇼 🇵🇸 🇵🇦 🇵🇬 🇵🇾 🇵🇪 🇵🇭 🇵🇳 🇵🇱 🇵🇹 🇵🇷 🇶🇦 🇷🇪 🇷🇴 🇷🇺 🇷🇼 🇼🇸 🇸🇲 🇸🇹 🇸🇦 🇸🇳 🇷🇸 🇸🇨 🇸🇱 🇸🇬 🇸🇽 🇸🇰 🇸🇮 🇬🇸 🇸🇧 🇸🇴 🇿🇦 🇰🇷 🇸🇸 🇪🇸 🇱🇰 🇧🇱 🇸🇭 🇰🇳 🇱🇨 🇵🇲 🇻🇨 🇸🇩 🇸🇷 🇸🇿 🇸🇪 🇨🇭 🇸🇾 🇹🇯 🇹🇿 🇹🇭 🇹🇱 🇹🇬 🇹🇰 🇹🇴 🇹🇹 🇹🇳 🇹🇷 🇹🇲 🇹🇨 🇹🇻 🇻🇮 🇺🇬 🇺🇦 🇦🇪 🇬🇧 🇺🇸 🇺🇾 🇺🇿 🇻🇺 🇻🇦 🇻🇪 🇻🇳 🇼🇫 🇪🇭 🇾🇪 🇿🇲 🇿🇼';

function createemojimenu(){
for(emostoreentry in emojistore){emojistore[emostoreentry]=emojistore[emostoreentry].split(' ');
if(emojistore[emostoreentry].length>1){
emojimenu+='<b class="pointer x_all_rounded x_bcolor_z" style="width:40px;font-size:20px;padding:0 4px 0 4px;margin-right:3px" onclick="showemojistore('+emostoreentry+')">'+emojistore[emostoreentry][0]+'</b>';
}} emojimenu='<div style="margin-bottom:5px">'+emojimenu+'</div>'}

function showemojistore(n){
lie.innerHTML='';singleemo=0; prepemostr='';
for(singleemo in emojistore[n]){prepemostr+='<em onclick="emo2input(this.innerHTML)">'+emojistore[n][singleemo]+'</em>'}
lie.style.padding='15px 0 5px 0';lie.innerHTML=emojimenu+prepemostr
}

// ----------