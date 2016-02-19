var clientObj;

/**
****************************************************************
*	Name    : MbaasInit
*	Author  : Kony
*	Purpose : This function is used for the initialization of the Mbaas client so that we can use the Mbaas services.
****************************************************************
*/


function MbaasInit()
{
  
  
/**
****************************************************************
*	Name    : successInitCallBack
*	Author  : Kony
*	Purpose : This function is success callback function for the initialization of the Mbaas client instance.
****************************************************************
*/


  function successInitCallBack(response)//response is a JSON object which is passed as a parameter when the initialization of the Mbaas Object is successful through the success callback of the mbaas object.
  {
    kony.print("success");    
    kony.application.dismissLoadingScreen();    
  }
  
  
/**
****************************************************************
*	Name    : failureInitCallBack
*	Author  : Kony
*	Purpose : This function is the failure callback function for the initialization of the Mbaas client instance.
****************************************************************
*/


  
  
  function failureInitCallBack(error)
  {
    var basicCon= {
      message:"Initialization Failure",
      alertType:constants.ALERT_TYPE_INFO,
      alertTitle:"Init Error"
    };
    kony.ui.Alert(basicCon,{});
    kony.print("\nin init failure");
    kony.application.dismissLoadingScreen();
  }
  
  
  

  //creating new client instance
  clientObj= new kony.sdk();

  //setting the username and password in login page to the default ones from the Mbaas object 
  frmLogin.txtbxUsername.text=MBaaSObj.Username;
  frmLogin.txtbxPassword.text=MBaaSObj.Password;
 
  //initialization of the client instance
  var appKey=MBaaSObj.AppKey;
  var appSecret=MBaaSObj.AppSecret;
  kony.print("appKey:-"+appKey);
  kony.print("appSecret:-"+appSecret);
  kony.print("service url:-"+ MBaaSObj.ServiceURL);
  clientObj.init(MBaaSObj.AppKey,MBaaSObj.AppSecret,
    MBaaSObj.ServiceURL,
    successInitCallBack,
    failureInitCallBack
  );  
  
}


/**
****************************************************************
*	Name    : showLoginForm
*	Author  : Kony
*	Purpose : This function is used for Displaying the Login Screen.
****************************************************************
*/


function showLoginForm()
{
  frmLogin.show();
  showSyncLoadingScreen("Loading.....       ");
}