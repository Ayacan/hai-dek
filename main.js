const _0x5a4509=_0x2cec;(function(_0x34afac,_0x1eeda7){const _0x278fe4=_0x2cec,_0x1a091b=_0x34afac();while(!![]){try{const _0x4867e3=-parseInt(_0x278fe4(0x12a))/0x1*(parseInt(_0x278fe4(0x14b))/0x2)+-parseInt(_0x278fe4(0x157))/0x3+-parseInt(_0x278fe4(0x167))/0x4*(-parseInt(_0x278fe4(0x138))/0x5)+-parseInt(_0x278fe4(0x103))/0x6*(parseInt(_0x278fe4(0x155))/0x7)+parseInt(_0x278fe4(0x151))/0x8*(parseInt(_0x278fe4(0xfd))/0x9)+-parseInt(_0x278fe4(0x15c))/0xa+parseInt(_0x278fe4(0x134))/0xb*(parseInt(_0x278fe4(0x13e))/0xc);if(_0x4867e3===_0x1eeda7)break;else _0x1a091b['push'](_0x1a091b['shift']());}catch(_0x4fbe42){_0x1a091b['push'](_0x1a091b['shift']());}}}(_0x461d,0x9a241));const {WAConnection:_WAConnection,MessageType,Presence,Mimetype,GroupSettingChange}=require(_0x5a4509(0x10f)),simple=require('./lib/simple.js'),WAConnection=simple['WAConnection'](_WAConnection),fs=require('fs'),{banner,start,success,getGroupAdmins}=require('./lib/functions'),{color}=require('./lib/color'),fetch=require('node-fetch'),moment=require(_0x5a4509(0x162));blocked=[],require('./loli.js'),nocache(_0x5a4509(0x165),_0x3cc5f6=>console['log'](_0x3cc5f6+_0x5a4509(0x12b)));function _0x2cec(_0x5d1a2b,_0xa3c7a2){const _0x461d8c=_0x461d();return _0x2cec=function(_0x2cec6e,_0x3518a3){_0x2cec6e=_0x2cec6e-0xe9;let _0x5df9f1=_0x461d8c[_0x2cec6e];return _0x5df9f1;},_0x2cec(_0x5d1a2b,_0xa3c7a2);}const starts=async(_0x201de8=new WAConnection())=>{const _0x3d65fa=_0x5a4509;_0x201de8['logger']['level']=_0x3d65fa(0x125),_0x201de8[_0x3d65fa(0x142)]=[0x2,0x85e,0xc],_0x201de8['browserDescription']=['Lolibot',_0x3d65fa(0x11e),_0x3d65fa(0x115)],console[_0x3d65fa(0x148)](banner['string']),_0x201de8['on']('qr',()=>{const _0x2caa41=_0x3d65fa;console[_0x2caa41(0x148)](color('[',_0x2caa41(0xff)),color('!',_0x2caa41(0x15e)),color(']',_0x2caa41(0xff)),color(_0x2caa41(0xf4)));}),fs['existsSync'](_0x3d65fa(0x129))&&_0x201de8[_0x3d65fa(0x122)](_0x3d65fa(0x129)),_0x201de8['on'](_0x3d65fa(0x169),()=>{const _0x9213bc=_0x3d65fa;start('2',_0x9213bc(0x10c));}),_0x201de8['on']('open',()=>{const _0x13766a=_0x3d65fa;success('2',_0x13766a(0x106));}),await _0x201de8[_0x3d65fa(0xea)]({'timeoutMs':0x1e*0x3e8}),fs[_0x3d65fa(0x147)]('./lolibot.my.id.json',JSON[_0x3d65fa(0x118)](_0x201de8[_0x3d65fa(0x108)](),null,'\x09')),_0x201de8['on'](_0x3d65fa(0x102),async _0x3c19b0=>{const _0x379cea=_0x3d65fa;metdata=await _0x201de8[_0x379cea(0xf8)](_0x3c19b0[_0x379cea(0x163)]);if(_0x3c19b0[_0x379cea(0x130)]==_0x379cea(0xf6))teks=_0x379cea(0x101),_0x201de8['sendMessage'](metdata['id'],teks,MessageType[_0x379cea(0x11b)]),console[_0x379cea(0x148)](_0x379cea(0x12f)+metdata[_0x379cea(0x11f)]);else{if(_0x3c19b0['announce']=='true')teks=_0x379cea(0x10d),_0x201de8[_0x379cea(0x127)](metdata['id'],teks,MessageType['text']),console['log'](_0x379cea(0x16a)+metdata[_0x379cea(0x11f)]);else{if(!_0x3c19b0['desc']=='')tag=_0x3c19b0[_0x379cea(0x164)][_0x379cea(0x145)]('@')[0x0]+_0x379cea(0x146),teks=_0x379cea(0x123)+_0x3c19b0[_0x379cea(0x164)][_0x379cea(0x145)]('@')[0x0]+_0x379cea(0x10b)+_0x3c19b0['desc'],_0x201de8['sendMessage'](metdata['id'],teks,MessageType[_0x379cea(0x11b)],{'contextInfo':{'mentionedJid':[tag]}}),console[_0x379cea(0x148)]('-\x20[\x20Group\x20Description\x20Change\x20]\x20-\x20In\x20'+metdata[_0x379cea(0x11f)]);else{if(_0x3c19b0[_0x379cea(0x149)]==_0x379cea(0xf6))teks=_0x379cea(0xe9),_0x201de8[_0x379cea(0x127)](metdata['id'],teks,MessageType['text']),console[_0x379cea(0x148)](_0x379cea(0x12e)+metdata[_0x379cea(0x11f)]);else _0x3c19b0[_0x379cea(0x149)]==_0x379cea(0x15b)&&(teks='-\x20[\x20Group\x20Setting\x20Change\x20]\x20-\x0a\x0aEdit\x20Group\x20info\x20telah\x20ditutup\x20untuk\x20member\x0aSekarang\x20hanya\x20admin\x20group\x20yang\x20dapat\x20mengedit\x20info\x20Group\x20Ini',_0x201de8[_0x379cea(0x127)](metdata['id'],teks,MessageType[_0x379cea(0x11b)]),console[_0x379cea(0x148)](_0x379cea(0x12e)+metdata[_0x379cea(0x11f)]));}}}}),_0x201de8['on']('group-participants-update',async _0x1fd60b=>{const _0x51a5ce=_0x3d65fa;try{groupMet=await _0x201de8[_0x51a5ce(0xf8)](_0x1fd60b[_0x51a5ce(0x163)]),groupMembers=groupMet['participants'],groupAdmins=getGroupAdmins(groupMembers),mem=_0x1fd60b[_0x51a5ce(0x110)][0x0],console[_0x51a5ce(0x148)](_0x1fd60b);try{pp_user=await _0x201de8[_0x51a5ce(0x133)](mem);}catch(_0x2524d0){pp_user=_0x51a5ce(0x139);}try{pp_grup=await _0x201de8[_0x51a5ce(0x133)](_0x1fd60b['jid']);}catch(_0x2144a5){pp_grup='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60';}_0x1fd60b[_0x51a5ce(0x15d)]==_0x51a5ce(0x144)&&mem[_0x51a5ce(0x152)](_0x201de8[_0x51a5ce(0x12d)][_0x51a5ce(0x163)])&&_0x201de8[_0x51a5ce(0x127)](_0x1fd60b[_0x51a5ce(0x163)],_0x51a5ce(0x121),_0x51a5ce(0x140));if(_0x1fd60b[_0x51a5ce(0x15d)]==_0x51a5ce(0x144)&&!mem['includes'](_0x201de8[_0x51a5ce(0x12d)][_0x51a5ce(0x163)])){mdata=await _0x201de8[_0x51a5ce(0xf8)](_0x1fd60b[_0x51a5ce(0x163)]),memeg=mdata[_0x51a5ce(0x110)][_0x51a5ce(0x143)],num=_0x1fd60b[_0x51a5ce(0x110)][0x0];let _0x792f41=_0x201de8[_0x51a5ce(0x128)][num]||{'notify':num[_0x51a5ce(0x120)](/@.+/,'')};anu_user=_0x792f41[_0x51a5ce(0x15f)]||_0x792f41[_0x51a5ce(0xf5)]||num[_0x51a5ce(0x145)]('@')[0x0],time_wel=moment['tz'](_0x51a5ce(0x15a))[_0x51a5ce(0x141)](_0x51a5ce(0xfb)),teks=_0x51a5ce(0x124)+anu_user+'\x20\x0a\x0aNama\x20:\x20\x0aUmur\x20:\x0aGender\x20:\x20\x0aAsal\x20:\x0a\x0aSemoga\x20Betah\x20dan\x20jangan\x20lupa\x20isi\x0aAnd\x20Following\x20Rules\x20Group',buff=await getBuffer(_0x51a5ce(0x131)+anu_user+'&descriminator='+groupMembers['length']+'&memcount='+memeg+'&gcname='+encodeURI(mdata[_0x51a5ce(0x11f)])+'&pp='+pp_user+'&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg'),buttons=[{'buttonId':'y','buttonText':{'displayText':_0x51a5ce(0xfa)},'type':0x1}],imageMsg=(await _0x201de8['prepareMessageMedia'](buff,_0x51a5ce(0x158),{'thumbnail':buff}))[_0x51a5ce(0x158)],buttonsMessage={'contentText':''+teks,'footerText':'Semoga\x20betah\x20☕','imageMessage':imageMsg,'buttons':buttons,'headerType':0x4},prep=await _0x201de8[_0x51a5ce(0x168)](mdata['id'],{'buttonsMessage':buttonsMessage},{}),_0x201de8['relayWAMessage'](prep);}if(_0x1fd60b[_0x51a5ce(0x15d)]=='remove'&&!mem[_0x51a5ce(0x152)](_0x201de8[_0x51a5ce(0x12d)][_0x51a5ce(0x163)])){mdata=await _0x201de8['groupMetadata'](_0x1fd60b[_0x51a5ce(0x163)]),num=_0x1fd60b[_0x51a5ce(0x110)][0x0];let _0x2a8570=_0x201de8[_0x51a5ce(0x128)][num]||{'notify':num[_0x51a5ce(0x120)](/@.+/,'')};anu_user=_0x2a8570[_0x51a5ce(0x15f)]||_0x2a8570[_0x51a5ce(0xf5)]||num[_0x51a5ce(0x145)]('@')[0x0],time_wel=moment['tz'](_0x51a5ce(0x15a))[_0x51a5ce(0x141)]('HH:mm'),memeg=mdata[_0x51a5ce(0x110)][_0x51a5ce(0x143)],out='Kenapa\x20tuh?\x20kok\x20bisa\x20keluar?\x20\x0aSayonara\x20'+anu_user+_0x51a5ce(0x156),buff=await getBuffer(_0x51a5ce(0x119)+anu_user+_0x51a5ce(0x14f)+groupMembers[_0x51a5ce(0x143)]+_0x51a5ce(0xfe)+memeg+_0x51a5ce(0x136)+encodeURI(mdata[_0x51a5ce(0x11f)])+'&pp='+pp_user+_0x51a5ce(0x13b)),buttons=[{'buttonId':'y','buttonText':{'displayText':_0x51a5ce(0x135)},'type':0x1}],imageMsg=(await _0x201de8[_0x51a5ce(0xed)](buff,_0x51a5ce(0x158),{'thumbnail':buff}))[_0x51a5ce(0x158)],buttonsMessage={'contentText':''+out,'footerText':_0x51a5ce(0x112),'imageMessage':imageMsg,'buttons':buttons,'headerType':0x4},prep=await _0x201de8['prepareMessageFromContent'](mdata['id'],{'buttonsMessage':buttonsMessage},{}),_0x201de8[_0x51a5ce(0x14e)](prep);}if(_0x1fd60b['action']=='promote'){const _0x1f0ef1=await _0x201de8[_0x51a5ce(0xf8)](_0x1fd60b[_0x51a5ce(0x163)]);num=_0x1fd60b['participants'][0x0];let _0x1d4da6=_0x201de8[_0x51a5ce(0x128)][num]||{'notify':num['replace'](/@.+/,'')};anu_user=_0x1d4da6[_0x51a5ce(0x15f)]||_0x1d4da6['notify']||num[_0x51a5ce(0x145)]('@')[0x0];try{ppimg=await _0x201de8['getProfilePicture'](_0x1fd60b['participants'][0x0][_0x51a5ce(0x145)]('@')[0x0]+_0x51a5ce(0xf7));}catch{ppimg='https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg';}let _0x7cedc1=await getBuffer(_0x51a5ce(0x111)+anu_user+_0x51a5ce(0xeb)+groupAdmins[_0x51a5ce(0x143)]+_0x51a5ce(0x107)+ppimg+_0x51a5ce(0x11d));teks=anu_user+_0x51a5ce(0x109),_0x201de8[_0x51a5ce(0x127)](_0x1f0ef1['id'],_0x7cedc1,MessageType['image'],{'caption':teks});}if(_0x1fd60b[_0x51a5ce(0x15d)]==_0x51a5ce(0x154)){const _0x66f4e8=await _0x201de8[_0x51a5ce(0xf8)](_0x1fd60b[_0x51a5ce(0x163)]);num=_0x1fd60b['participants'][0x0];let _0x4fd1a0=_0x201de8[_0x51a5ce(0x128)][num]||{'notify':num[_0x51a5ce(0x120)](/@.+/,'')};anu_user=_0x4fd1a0['vname']||_0x4fd1a0[_0x51a5ce(0xf5)]||num[_0x51a5ce(0x145)]('@')[0x0];try{ppimg=await _0x201de8[_0x51a5ce(0x133)](_0x1fd60b[_0x51a5ce(0x110)][0x0][_0x51a5ce(0x145)]('@')[0x0]+_0x51a5ce(0xf7));}catch{ppimg=_0x51a5ce(0x137);}let _0x4295f6=await getBuffer(_0x51a5ce(0x14d)+anu_user+'&msg=yahahaha\x20didemote&mem='+groupAdmins[_0x51a5ce(0x143)]+'&picurl='+ppimg+_0x51a5ce(0x11d));teks=anu_user+'\x20Telah\x20didemote',_0x201de8[_0x51a5ce(0x127)](_0x66f4e8['id'],_0x4295f6,MessageType[_0x51a5ce(0x13f)],{'caption':teks});}}catch(_0x4808ea){console[_0x51a5ce(0x148)](_0x51a5ce(0x100),color(_0x4808ea,_0x51a5ce(0xee)));}}),_0x201de8['on']('message-delete',async _0x1320ad=>{const _0x172eca=_0x3d65fa;if(_0x1320ad['key'][_0x172eca(0xec)]=='status@broadcast')return;if(!_0x1320ad['key'][_0x172eca(0x11c)]&&_0x1320ad[_0x172eca(0x105)][_0x172eca(0x11c)])return;_0x1320ad[_0x172eca(0x10e)]=Object[_0x172eca(0x153)](_0x1320ad[_0x172eca(0x10e)])[0x0]===_0x172eca(0x14a)?_0x1320ad[_0x172eca(0x10e)]['ephemeralMessage'][_0x172eca(0x10e)]:_0x1320ad['message'];const _0x200512=moment['tz'](_0x172eca(0x15a))[_0x172eca(0x141)](_0x172eca(0xf2));let _0x486efc=new Date(),_0x22616e='id',_0x43866a=new Date(0x0)[_0x172eca(0x13a)]()-new Date(_0x172eca(0xf0))[_0x172eca(0x13a)](),_0x3ef59d=['Pahing',_0x172eca(0x159),_0x172eca(0xfc),_0x172eca(0x10a),'Legi'][Math[_0x172eca(0x150)]((_0x486efc*0x1+_0x43866a)/0x50ae4c0)%0x5],_0x4b70d9=_0x486efc[_0x172eca(0x161)](_0x22616e,{'weekday':_0x172eca(0x12c)}),_0x3d0ef5=_0x486efc[_0x172eca(0x161)](_0x22616e,{'day':_0x172eca(0xf1),'month':_0x172eca(0x12c),'year':'numeric'});const _0x1a4796=Object['keys'](_0x1320ad[_0x172eca(0x10e)])[0x0];_0x201de8['sendMessage'](_0x1320ad['key']['remoteJid'],_0x172eca(0x116)+_0x1320ad[_0x172eca(0xf9)][_0x172eca(0x145)]('@')[0x0]+_0x172eca(0x104)+_0x200512+'\x20'+_0x4b70d9+'\x20'+_0x3d0ef5+_0x172eca(0x13d)+_0x1a4796,MessageType[_0x172eca(0x11b)],{'quoted':_0x1320ad[_0x172eca(0x10e)],'contextInfo':{'mentionedJid':[_0x1320ad['participant']]}}),_0x201de8[_0x172eca(0x126)](_0x1320ad['key'][_0x172eca(0xec)],_0x1320ad[_0x172eca(0x10e)]);}),_0x201de8['on'](_0x3d65fa(0x113),async _0x373a75=>{require('./loli.js')(_0x201de8,_0x373a75);}),isBattre='Not\x20Detect',isCharge=_0x3d65fa(0xf3),_0x201de8['on'](_0x3d65fa(0x11a),_0x43009d=>{const _0x525a11=_0x3d65fa,_0x50bdca=_0x43009d[0x2][0x0][0x1][_0x525a11(0x16b)],_0x5928f2=parseInt(_0x50bdca);isBattre=_0x5928f2+'%',isCharge=_0x43009d[0x2][0x0][0x1]['live'];}),_0x201de8['on'](_0x3d65fa(0x114),_0x17ab72=>{const _0x2db27f=_0x3d65fa;if(blocked[_0x2db27f(0x143)]>0x2)return;for(let _0x19f161 of _0x17ab72[0x1]['blocklist']){blocked[_0x2db27f(0xef)](_0x19f161['replace']('c.us',_0x2db27f(0x13c)));}});};function nocache(_0x589ddc,_0x2daa1a=()=>{}){const _0x47e255=_0x5a4509;console[_0x47e255(0x148)](_0x47e255(0x166),'\x27'+_0x589ddc+'\x27',_0x47e255(0x117)),fs[_0x47e255(0x160)](require[_0x47e255(0x132)](_0x589ddc),async()=>{const _0x4d2efe=_0x47e255;await uncache(require[_0x4d2efe(0x132)](_0x589ddc)),_0x2daa1a(_0x589ddc);});}function uncache(_0x4026bc='.'){return new Promise((_0x2fe247,_0x1fc098)=>{const _0x461666=_0x2cec;try{delete require[_0x461666(0x14c)][require['resolve'](_0x4026bc)],_0x2fe247();}catch(_0x52b23a){_0x1fc098(_0x52b23a);}});}starts();function _0x461d(){const _0x134ce0=['Safari','subject','replace','Halo!','loadAuthInfo','-\x20[\x20Group\x20Description\x20Change\x20]\x20-\x0a\x0aDeskripsi\x20Group\x20telah\x20diubah\x20oleh\x20Admin\x20@','Halo\x20','warn','copyNForward','sendMessage','contacts','./lolibot.my.id.json','131xHjOnq','\x20is\x20now\x20updated!','long','user','-\x20[\x20Group\x20Setting\x20Change\x20]\x20-\x20In\x20','-\x20[\x20Group\x20Opened\x20]\x20-\x20In\x20','announce','http://hadi-api.herokuapp.com/api/card/welcome?nama=','resolve','getProfilePicture','22840477edjciL','Sayonara👋','&gcname=','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','140PqTKFQ','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','getTime','&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg','s.whatsapp.net','\x0a\x20\x20•>\x20Type\x20:\x20','12sOOijv','image','conversation','format','version','length','add','split','@s.whatsapp.net','writeFileSync','log','restrict','ephemeralMessage','14032FWlEhN','cache','https://api-yogipw.herokuapp.com/api/demote?name=','relayWAMessage','&descriminator=','floor','214344LOiKbL','includes','keys','demote','3883873ZCZmVQ','\x20we\x20will\x20miss\x20you','3055806yRNEOw','imageMessage','Pon','Asia/Jakarta','true','8071260DbMFnq','action','blue','vname','watchFile','toLocaleDateString','moment-timezone','jid','descOwner','./loli.js','Module','169256lWdsNr','prepareMessageFromContent','connecting','-\x20[\x20Group\x20Closed\x20]\x20-\x20In\x20','value','-\x20[\x20Group\x20Setting\x20Change\x20]\x20-\x0a\x0aEdit\x20Group\x20info\x20telah\x20dibuka\x20untuk\x20member\x0aSekarang\x20semua\x20member\x20dapat\x20mengedit\x20info\x20Group\x20Ini','connect','&msg=selamat%20menjadi%20admin&mem=','remoteJid','prepareMessageMedia','red','push','1\x20Januari\x202021','numeric','HH:mm:ss','Not\x20Detect','\x20Scan\x20bang','notify','false','@c.us','groupMetadata','participant','Welcome👋','HH:mm','Wage','225NsTcKQ','&memcount=','white','Error\x20:\x20%s','-\x20[\x20Group\x20Opened\x20]\x20-\x0a\x0a_Group\x20telah\x20dibuka\x20oleh\x20admin_\x0a_Sekarang\x20semua\x20member\x20bisa\x20mengirim\x20pesan_','group-update','6FOjwBT','\x0a\x20\x20•>\x20Waktu\x20:\x20','key','Connected','&picurl=','base64EncodedAuthInfo','\x20Telah\x20dipromote','Kliwon','\x0a�\x20Deskripsi\x20Baru\x20:\x20','Connecting...','-\x20[\x20Group\x20Closed\x20]\x20-\x0a\x0a_Group\x20telah\x20ditutup\x20oleh\x20admin_\x0a_Sekarang\x20hanya\x20admin\x20yang\x20dapat\x20mengirim\x20pesan_','message','@adiwajshing/baileys','participants','https://api-yogipw.herokuapp.com/api/promote?name=','Nitip\x20gorengan\x20ya','chat-update','CB:Blocklist','3.0','```「\x20Anti\x20Delete\x20」```\x0a\x20\x20•>\x20Nama\x20:\x20@','is\x20now\x20being\x20watched\x20for\x20changes','stringify','http://hadi-api.herokuapp.com/api/card/goodbye?nama=','CB:action,,battery','text','fromMe','&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg'];_0x461d=function(){return _0x134ce0;};return _0x461d();}