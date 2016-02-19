var gblAccount;


/**
****************************************************************
*	Name    : updatePKAccount
*	Author  : Kony
*	Purpose : This function saves the data in the mobile Data Base.
****************************************************************
*/



function updatePKAccount()
{
    function UpdatePKSuccessCallBack(res)
    {
      var basicCon={
        message :"Account Updated Successfully",
        alertType:constants.ALERT_TYPE_INFO,
        alertTitle:"Update Status"
      };
      kony.ui.Alert(basicCon,{});
      frmAccountDetails.show();
    }
    function UpdatePKFailureCallBack(error)
    {
      gblAccount=gblTempAccount;
      var basicCon;
      if(error!=null||error["errorMessage"]!=null)
        {
          basicCon={
            message :"Update Failure\n"+error,
            alertType:constants.ALERT_TYPE_ERROR,
            alertTitle:"Update Status"
           };
        }
      else
        {
          basicCon={
            message :"Update Failure\nGeneral Error",
            alertType:constants.ALERT_TYPE_ERROR,
            alertTitle:"Update Status"
           };
        }
      kony.ui.Alert(basicCon,{});
    }
  var gblTempAccount=kony.sync.CreateCopy(gblAccount);
  gblAccount=accountRes[curAccountIndex];
  gblAccount.Website=frmEditAccountDetails.accountDetailWebsiteTxtbx.text;
  gblAccount.AnnualRevenue=frmEditAccountDetails.accountDetailRevenueTxtbx.text;
  gblAccount.Phone=frmEditAccountDetails.accountDetailPhoneTxtbx.text;
  gblAccount.BillingCity=frmEditAccountDetails.accountDetailBillingAddrTxtbx.text;
  gblAccount.updateByPK(UpdatePKSuccessCallBack,UpdatePKFailureCallBack);
}


/**
****************************************************************
*	Name    : saveAccounts
*	Author  : Kony
*	Purpose : This function saves the modified data and sets it in the accounts details form
****************************************************************
*/



function saveAccounts()
{
  frmAccountDetails.accountDetailWebsiteLbl.text=frmEditAccountDetails.accountDetailWebsiteTxtbx.text;
  frmAccountDetails.accountDetailRevenueLbl.text=frmEditAccountDetails.accountDetailRevenueTxtbx.text
  frmAccountDetails.accountDetailPhoneLbl.text=frmEditAccountDetails.accountDetailPhoneTxtbx.text;
  frmAccountDetails.accountDetailBillingAddrLbl.text=frmEditAccountDetails.accountDetailBillingAddrTxtbx.text;
  updatePKAccount();
}
