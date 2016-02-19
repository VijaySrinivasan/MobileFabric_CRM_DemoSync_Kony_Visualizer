var gblContact;


/**
****************************************************************
*	Name    : updatePKContact
*	Author  : Kony
*	Purpose : This function saves the data in the mobile Data Base.
****************************************************************
*/



function updatePKContact()
  {
    function UpdatePKSuccessCallBack(res)
    {
      var basicCon={
        message :"Contact Updated Successfully",
        alertType:constants.ALERT_TYPE_INFO,
        alertTitle:"Update Status"
      };
      kony.ui.Alert(basicCon,{});
      frmContactDetails.show();
    }
    function UpdatePKFailureCallBack(error)
    {
      gblContact=gblTempContact;
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
    var gblTempContact=kony.sync.CreateCopy(gblContact);
    gblContact=contactDetails[curContactIndex];
    gblContact.FirstName=frmEditContactDetails.contactDetailFNameTxtbx.text;
    gblContact.LastName=frmEditContactDetails.contactDetailLNameTxtbx.text;
    gblContact.Phone=frmEditContactDetails.contactDetailPhoneTxtbx.text;
    gblContact.Email=frmEditContactDetails.contactDetailEmailTxtbx.text;
    gblContact.updateByPK(UpdatePKSuccessCallBack,UpdatePKFailureCallBack);
  }
  


/**
****************************************************************
*	Name    : saveContacts
*	Author  : Kony
*	Purpose : This function saves the modified data and sets it in the contacts details form
****************************************************************
*/


  
function saveContacts()
  {
    frmContactDetails.contactDetailNameLbl.text=frmEditContactDetails.contactDetailFNameTxtbx.text+" "+frmEditContactDetails.contactDetailLNameTxtbx.text;
    frmContactDetails.contactDetailTitleLbl.text=frmEditContactDetails.contactDetailTitleLbl.text;
    frmContactDetails.contactDetailFNameLbl.text=frmEditContactDetails.contactDetailFNameTxtbx.text;
    frmContactDetails.contactDetailLNameLbl.text=frmEditContactDetails.contactDetailLNameTxtbx.text;
    frmContactDetails.contactDetailPhoneLbl.text=frmEditContactDetails.contactDetailPhoneTxtbx.text;
    frmContactDetails.contactDetailEmailLbl.text=frmEditContactDetails.contactDetailEmailTxtbx.text;
    updatePKContact();
  }


