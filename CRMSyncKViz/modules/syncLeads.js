var gblLead;


/**
****************************************************************
*	Name    : updatePKLeads
*	Author  : Kony
*	Purpose : This function saves the data in the mobile Data Base.
****************************************************************
*/



function updatePKLeads()
{
    function UpdatePKSuccessCallBack(res)
    {
      var basicCon={
        message :"Lead Updated Successfully",
        alertType:constants.ALERT_TYPE_INFO,
        alertTitle:"Lead Status"
      };
      kony.ui.Alert(basicCon,{});
      frmLeadDetails.show();
    }
    function UpdatePKFailureCallBack(error)
    {
      gblLead=gblTempLead;
      var basicCon={
            message :"Lead Update Failure\n"+error,
            alertType:constants.ALERT_TYPE_ERROR,
            alertTitle:"Lead Status"
           };
      kony.ui.Alert(basicCon,{});
    }
  gblLead=leadRes[curLeadIndex];
  var gblTempLead=kony.sync.CreateCopy(gblLead);
  gblLead.FirstName=frmEditLeadDetails.leadDetailFNameTxtbx.text;
  gblLead.LastName=frmEditLeadDetails.leadDetailLNameTxtbx.text;
  gblLead.Phone=frmEditLeadDetails.leadDetailPhoneTxtbx.text;
  gblLead.Email=frmEditLeadDetails.leadDetailEmailTxtbx.text;
  gblLead.updateByPK(UpdatePKSuccessCallBack,UpdatePKFailureCallBack);
}


/**
****************************************************************
*	Name    : saveLeads
*	Author  : Kony
*	Purpose : This function saves the modified data and sets it in the leads details form
****************************************************************
*/



function saveLeads()
{
  frmLeadDetails.leadDetailNameLbl.text=frmEditLeadDetails.leadDetailFNameTxtbx.text+" "+frmEditLeadDetails.leadDetailLNameTxtbx.text;
  frmLeadDetails.leadDetailTitleLbl.text=frmEditLeadDetails.leadDetailTitleLbl.text;
  frmLeadDetails.leadDetailFNameLbl.text=frmEditLeadDetails.leadDetailFNameTxtbx.text;
  frmLeadDetails.leadDetailLNameLbl.text=frmEditLeadDetails.leadDetailLNameTxtbx.text;
  frmLeadDetails.leadDetailPhoneLbl.text=frmEditLeadDetails.leadDetailPhoneTxtbx.text;
  frmLeadDetails.leadDetailEmailLbl.text=frmEditLeadDetails.leadDetailEmailTxtbx.text;
  updatePKLeads();
}
