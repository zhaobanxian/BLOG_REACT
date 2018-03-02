//取文件后缀名
function GetFileExt(filepath) {
    if (filepath) {
        if(filepath.indexOf("/")>0){
           return filepath.substring(filepath.lastIndexOf("/")+1);
        }else{
           return filepath;
        }
    }
}
//取文件名不带后缀
function GetFileNameNoExt(filepath) {
    var fp= GetFileExt(filepath);
    return fp.substring(0,fp.lastIndexOf("."));
}
function showmsg(){
    console.log("i am zsphelper");
}
function getCookie(c_name)
{
    if (document.cookie.length>0)
    {
    c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1)
        { 
        c_start=c_start + c_name.length+1 
        c_end=document.cookie.indexOf(";",c_start)
        if (c_end==-1) c_end=document.cookie.length
        return unescape(document.cookie.substring(c_start,c_end))
        } 
    }
    return ""
}

function setCookie(c_name,value,expiredays)
{
    var exdate=new Date()
    exdate.setDate(exdate.getDate()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

window.zsphelper = {
    GetFileExt:GetFileExt,
    GetFileNameNoExt:GetFileNameNoExt,
    showmsg:showmsg,
    innerHeight:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,
    innerWidth:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,
    getCookie:getCookie,
    setCookie:setCookie
}
