var accountDetails=[],curAccountIndex,accountRes;

/**
****************************************************************
*	Name    : showAccountDetails
*	Author  : Kony
*	Purpose : This function sets the data into the labels of the Accounts form and account details and index are passed parameters to this function.
****************************************************************
*/


function showAccountDetails(accountDetails,listIndex)
{
  showSyncLoadingScreen("Loading...");
  curAccountIndex=listIndex;
  frmAccountDetails.accountDetailNameLbl.text=accountDetails[listIndex].Name;
  if(accountDetails[listIndex].Type==null||accountDetails[listIndex].Type==""||accountDetails[listIndex].Typa=="null")  
    {
      frmAccountDetails.accountDetailTitleLbl.text="No Title";
    }
  else
    {
      frmAccountDetails.accountDetailTitleLbl.text=accountDetails[listIndex].Type;      
    }
  if(accountDetails[listIndex].Website==null||accountDetails[listIndex].Website==""||accountDetails[listIndex].Website=="null")
    {
      frmAccountDetails.accountDetailWebsiteLbl.text="No Details";
    }
  else
    {
      frmAccountDetails.accountDetailWebsiteLbl.text=accountDetails[listIndex].Website;
    }
  if(accountDetails[listIndex].Phone==null||accountDetails[listIndex].Phone==""||accountDetails[listIndex].Phone=="null")
    {
      frmAccountDetails.accountDetailPhoneLbl.text="No Details";
    }
  else
    {
      frmAccountDetails.accountDetailPhoneLbl.text=accountDetails[listIndex].Phone;
    }
  if(accountDetails[listIndex].AnnualRevenue==null||accountDetails[listIndex].AnnualRevenue==""||accountDetails[listIndex].AnnualRevenue=="null")
    {
      frmAccountDetails.accountDetailRevenueLbl.text="No Details";
    }
  else
    {
      frmAccountDetails.accountDetailRevenueLbl.text=accountDetails[listIndex].AnnualRevenue;
    }
  if(accountDetails[listIndex].BillingStreet=="null"||accountDetails[listIndex].BillingCity=="null"||accountDetails[listIndex].BillingState=="null")
    {
      frmAccountDetails.accountDetailBillingAddrLbl.text="No Details";
    }
  else
    {
      frmAccountDetails.accountDetailBillingAddrLbl.text=accountDetails[listIndex].BillingStreet+" "+accountDetails[listIndex].BillingCity+" "+accountDetails[listIndex].BillingState;
    }
  kony.application.dismissLoadingScreen();
  frmAccountDetails.show();

  frmEditAccountDetails.accountDetailWebsiteTxtbx.text=frmAccountDetails.accountDetailWebsiteLbl.text;
  frmEditAccountDetails.accountDetailNameLbl.text=frmAccountDetails.accountDetailNameLbl.text;
  frmEditAccountDetails.accountDetailTitleLbl.text=frmAccountDetails.accountDetailTitleLbl.text;
  frmEditAccountDetails.accountDetailRevenueTxtbx.text=frmAccountDetails.accountDetailRevenueLbl.text;
  frmEditAccountDetails.accountDetailPhoneTxtbx.text=frmAccountDetails.accountDetailPhoneLbl.text;
  frmEditAccountDetails.accountDetailBillingAddrTxtbx.text=frmAccountDetails.accountDetailBillingAddrLbl.text;
 
}




/**
****************************************************************
*	Name    : getAccounts
*	Author  : Kony
*	Purpose : This function gets the data and sets the data of the accounts into the segement of the Accounts form segement.
****************************************************************
*/



function getAccounts()
{ 
  function accountServiceSuccessCallBack(res)
  {
    gblModules="accounts";
     kony.print(JSON.stringify(res));
    kony.print("in account successcallback");	
    var accountNameLbl,accountTitleLbl,accountImg;
    var accountList=[];
    var tempAccount={};
    kony.print(res);
    kony.print(JSON.stringify(res.Account));
    kony.print(JSON.stringify(res));
        if(res.length<=0)
          {
            //startSync();
            alert("no records available \nPlease Sync");
            kony.application.dismissLoadingScreen();
            return;
          }
        else
          {
            accountDetails=res;
            accountRes=res
            for(var i=0;i<res.length;i++)
              {
                tempAccount={};
                tempAccount.accountNameLbl=res[i].Name;      
                if(res[i].Type==null||res[i].Type==""||res[i].Type=="null")
                  tempAccount.accountTitleLbl="No Title";
                else
                  tempAccount.accountTitleLbl=res[i].Type;
                tempAccount.accountImg="account.png";
                accountList.push(tempAccount);
              }
            frmAccounts.accountsSeg.setData(accountList);            
            frmAccounts.show();
            kony.application.dismissLoadingScreen();
          }
  }
  function accountServiceFailureCallBack(error)
  {
    kony.print("account service failed");
    var basicCon={
      message:"account Integration Service Failed",//JSON.stringify(error)
      alertType: constants.ALERT_TYPE_INFO,
      alertTitle:"Service Failure"
    };
    kony.ui.Alert(basicCon,{});
    
  }
  /*var account = clientObj.getIntegrationService(MBaaSObj.AccountService);
  account.invokeOperation("getAccount",{},
                          MBaaSObj.getAccountQuery,
                          accountServiceSuccessCallBack,
                          accountServiceFailureCallBack
                         ); */
  showSyncLoadingScreen("Loading...");
  Account.getAll(accountServiceSuccessCallBack,accountServiceFailureCallBack);
  kony.print("after invoke");

  
}
