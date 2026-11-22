const {app,BrowserWindow}=require('electron');
app.whenReady().then(()=>{new BrowserWindow({width:1440,height:900,minWidth:1050,minHeight:660,backgroundColor:'#1c1c1c',title:'Subtitle Audio',icon:__dirname+'/icon.png',autoHideMenuBar:true}).loadFile('index.html')});
app.on('window-all-closed',()=>app.quit());
