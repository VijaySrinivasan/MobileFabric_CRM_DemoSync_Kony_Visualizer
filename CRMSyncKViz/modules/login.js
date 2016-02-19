var identityObj,syncObj;

/**
****************************************************************
*	Name    : logout
*	Author  : Kony
*	Purpose : This function is to Logout and displays the login Screen.
****************************************************************
*/

function logout()
{
   showSyncLoadingScreen("Logging Out........");
   identityObj.logout(
   function ()//Logout Success CallBack
     {
       kony.application.dismissLoadingScreen();
       frmLogin.show();
       
     },
   function ()//LogOut Failure CallBack
     {
       alert("Logout Failed");
     }
   );
}

/**
****************************************************************
*	Name    : showDashboard
*	Author  : Kony
*	Purpose : This function is to Navigate to the DashBoard Form/Display the DashBoard.
****************************************************************
*/

function showDashboard()
{
  frmDashboard.show();
}


/**
****************************************************************
*	Name    : loginSuccessCallBack
*	Author  : Kony
*	Purpose : This function is the success call back of the login of the Client Object and called when the login is success.
****************************************************************
*/


function loginSuccessCallBack(response)
{
  function syncSuccessCallBack(res)
  {
   kony.print("in init success Callback");
  }
    function SyncFailureCallBack(error)
  {
   kony.print("in init failure Callback\n"+error);
  }
  
  syncObj=clientObj.getSyncService();
  try
    {
      syncObj.init(syncSuccessCallBack,SyncFailureCallBack);
      kony.application.dismissLoadingScreen();
      frmDashboard.show();
    }
  catch(exp)
    {
      kony.print("Sync init failed\n"+exp);
    } 
}


/**
****************************************************************
*	Name    : loginFailureCallBack
*	Author  : Kony
*	Purpose : This function is the failure call back of the login of the Client Object and called when the login fails.
****************************************************************
*/


function loginFailureCallBack(error)
{
  var basicCon={
    message : JSON.stringify(error)+"\n/n*********failed*********",
    alertType : constants.ALERT_TYPE_INFO,
    alertTitle : "Login Failure"
  };
  kony.ui.Alert(basicCon ,{});
  kony.application.dismissLoadingScreen();
  
}




/**
****************************************************************
*	Name    : login
*	Author  : Kony
*	Purpose : This function is to Login into sales force account.
****************************************************************
*/



function login()
{
  showSyncLoadingScreen(" Redirecting........");
  if( frmLogin.txtbxUsername.text === "" || frmLogin.txtbxUsername.text === null || frmLogin.txtbxPassword.text === "" || frmLogin.txtbxPassword.text === null )
    {
      alert("Username and Password should not empty");
    }
  else
    {      
      identityObj = clientObj.getIdentityService(MBaaSObj.IdentityService);
      identityObj.login({
        "userid" : frmLogin.txtbxUsername.text,
        "password" : frmLogin.txtbxPassword.text },
        loginSuccessCallBack,
        loginFailureCallBack
      );
    }
  
}
