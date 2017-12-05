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
window.zsphelper = {
    GetFileExt:GetFileExt,
    GetFileNameNoExt:GetFileNameNoExt,
    showmsg:showmsg
}
