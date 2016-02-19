var gblOpportunity;


/**
****************************************************************
*	Name    : updatePKOpportunity
*	Author  : Kony
*	Purpose : This function saves the data in the mobile Data Base.
****************************************************************
*/



function updatePKOpportunity()
{
  gblOpportunity=opportunityRes[curOpportunityIndex];
    function UpdatePKSuccessCallBack(res)
    {
      kony.print("in success callback");
      var basicCon={
        message :"Opportunity Updated Successfully",
        alertType:constants.ALERT_TYPE_INFO,
        alertTitle:"Opportunity Status"
      };
      kony.ui.Alert(basicCon,{});
      frmOppurtunityDetails.show();
    }
    function UpdatePKFailureCallBack(error)
    {
      kony.print("in failure callback");
      gblOpportunity=gblTempOpport;
      var basicCon={
            message :"Opportunity Update Failure\n"+error,
            alertType:constants.ALERT_TYPE_ERROR,
            alertTitle:"Opportunity Status"
           };
      kony.ui.Alert(basicCon,{});
    }
  kony.print("\n@@@@@@@@@@@@@@@@@@gblOpportunity@@@@@@@@@"+gblOpportunity);
  kony.print("\n@@@@@@@@@@@@@@@@@@gblOpportunity@@@@@@@@@"+opportunityRes[curOpportunityIndex]);
  //gblOpportunity=opportunityDetails[curOpportunityIndex];
  var gblTempOpport=kony.sync.CreateCopy(gblOpportunity);
  gblOpportunity.Amount=frmEditOppurtunityDetails.oppurtunityDetailAmmountTxtbx.text;
  gblOpportunity.CloseDate=frmEditOppurtunityDetails.oppurtunityDetailCloseDateTxtbx.text;
  gblOpportunity.ExpectedRevenue=frmEditOppurtunityDetails.oppurtunityDetailRevenueTxtbx.text;
  gblOpportunity.LeadSource=frmEditOppurtunityDetails.oppurtunityDetailLeadSourceTxtbx.text;
  gblOpportunity.updateByPK(UpdatePKSuccessCallBack,UpdatePKFailureCallBack);
}


/**
****************************************************************
*	Name    : saveOpportunity
*	Author  : Kony
*	Purpose : This function saves the modified data and sets it in the opportunities details form
****************************************************************
*/



function saveOpportunity()
{
  frmOppurtunityDetails.oppurtunityDetailAmmountLbl.text=frmEditOppurtunityDetails.oppurtunityDetailAmmountTxtbx.text;
  frmOppurtunityDetails.oppurtunityDetailCloseDateLbl.text=frmEditOppurtunityDetails.oppurtunityDetailCloseDateTxtbx.text;
  frmOppurtunityDetails.oppurtunityDetailRevenueLbl.text=frmEditOppurtunityDetails.oppurtunityDetailRevenueTxtbx.text;
  frmOppurtunityDetails.oppurtunityDetailLeadSourceLbl.text=frmEditOppurtunityDetails.oppurtunityDetailLeadSourceTxtbx.text;
  updatePKOpportunity();
}
