userID = "syncadmin";
password = "SyncAdmin123";
appID = "42ea0e3f-0016-46df-a180-90c6a106e763";
serverHost = "localhost";
serverPort = "8080";
batchSize = "500";


var gblModules;


/**
****************************************************************
*	Name    : startSync
*	Author  : Kony
*	Purpose : This function is called when sync is required it contains the all the call backs for onsyncstart, onscopestart, onscopeerror, onscopesuccess, onuploadstart, ondownloadstart, ondownloadsuccess, onbatchstored, onbatchprocessingstart, onbatchprocessingsuccess, onsyncsuccess, onsyncerror.
****************************************************************
*/


function startSync()
{
  kony.print("in Start sync function");
  var configObj={};
  configObj.userid=userID;
  configObj.password=password;
  configObj.appid=appID;
  configObj.batchsize=batchSize;
  configObj.serverhost=serverHost;
  configObj.serverport=serverPort;
  configObj.onsyncstart=syncStartCallBack;
  configObj.onscopestart=scopeStartCallBack;
  configObj.onscopeerror=scopeErrorCallBack;
  configObj.onscopesuccess=scopeSuccessCallBack;
  configObj.onuploadstart=uploadStartCallBack;
  configObj.onuploadsuccess=uploadSuccessCallBack;
  configObj.ondownloadstart=downloadStartCallBack;
  configObj.ondownloadsuccess=downloadSuccessCallBack;
  configObj.onbatchstored=batchStoredCallBack;
  configObj.onbatchprocessingstart=batchPorcessingStartCallBack;
  configObj.onbatchprocessingsuccess=batchProcessingSuccessCallBack;
  configObj.onsyncsuccess=syncSuccessCallBack;
  configObj.onsyncerror=syncErrorCallBack;
  showSyncLoadingScreen("Starting Sync Session");
  syncObj.startSession(configObj);
  
  
}
function syncStartCallBack(opParams)
{
  kony.print("in on sync start Call back");
  showSyncLoadingScreen("sync started");
}
function scopeStartCallBack(opParams)
{
  kony.print("in on scope start Call back");
  showSyncLoadingScreen("scope started");
}
function scopeErrorCallBack(opParams)
{
  kony.print("in on scope error Call back");
  showSyncLoadingScreen("scope Error");
}
function scopeSuccessCallBack(opParams)
{
  kony.print("in on scope success Call back");
  showSyncLoadingScreen("scope successful");
}
function uploadStartCallBack(opParams)
{
  kony.print("in on upload start Call back");
  showSyncLoadingScreen("upload started");
}
function uploadSuccessCallBack(opParams)
{
  kony.print("in on upload success Call back");
  showSyncLoadingScreen("upload successful");
}
function downloadStartCallBack(opParams)
{
  kony.print("in on download start Call back");
  showSyncLoadingScreen("download started");
}
function downloadSuccessCallBack(opParams)
{
  kony.print("in on download success Call back");
  showSyncLoadingScreen("download successful");
}
function batchStoredCallBack(opParams)
{
  kony.print("in on batch stored Call back");
  showSyncLoadingScreen("Batch Stored successful");
}
function batchPorcessingStartCallBack(opParams)
{
  kony.print("in on batch processing start Call back");
  showSyncLoadingScreen("Batch processing started");
}
function batchProcessingSuccessCallBack(opParams)
{
  kony.print("in on batch processing success Call back");
  showSyncLoadingScreen("Batch processing done successfully");
}
function syncSuccessCallBack(opParams)
{
  kony.print("in on sync Success Call back");
  var basicCon={
    message:"Sync Success",
    alertType:constants.ALERT_TYPE_INFO,
    alertTitle:"sync status"
  };
  kony.ui.Alert(basicCon,{});
  kony.application.dismissLoadingScreen();
 // showSyncLoadingScreen("session sync done successfully");
  //getData();
}
function syncErrorCallBack(opParams)
{
  kony.print("in on sync Error Call back");
  var basicCon={
    message:"Sync Error Occured\n"+opParams,
    alertType:constants.ALERT_TYPE_ERROR,
    alertTitle:"sync status"
  };
  kony.ui.Alert(basicCon,{});
  //showSyncLoadingScreen("Session Sync Error");
}



/*

function getData()
{
  switch(gblModules)
    {
      case "contacts":
        getContacts();
        break;
      case "accounts":
        getAccounts();
        break;
      case "opportunity":
        getOppurtunity();
        break;
      case "leads":
        getLeads();
        break;
    }
}*/


/**
****************************************************************
*	Name    : showSyncLoadingScreen
*	Author  : Kony
*	Purpose : This function is used for displaying different text in the loading screen, here the text is passed as a parameter to this function.
****************************************************************
*/



function showSyncLoadingScreen(text){
	text = " " + text + " \n"; 
	kony.application.showLoadingScreen(loadingSkin, text,constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null)
}