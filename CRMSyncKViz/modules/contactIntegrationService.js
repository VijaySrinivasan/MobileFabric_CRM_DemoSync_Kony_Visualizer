var contactDetails=[],curContactIndex,contactRes;


/**
****************************************************************
*	Name    : showContactDetails
*	Author  : Kony
*	Purpose : This function sets the data into the labels of the Contacts form and contact details and index are passed parameters to this function.
****************************************************************
*/

function showContactDetails(contactDetails,listIndex)
{
  showSyncLoadingScreen("Loading...");
  curContactIndex=listIndex;
  frmContactDetails.contactDetailNameLbl.text=contactDetails[listIndex].FirstName+" "+contactDetails[listIndex].LastName;
  if(contactDetails[listIndex].Title==null||contactDetails[listIndex].Title==""||contactDetails[listIndex].Title=="null")  
    {
      frmContactDetails.contactDetailTitleLbl.text="No Title";
    }
  else
    {
      frmContactDetails.contactDetailTitleLbl.text=contactDetails[listIndex].Title;
    }
  frmContactDetails.contactDetailFNameLbl.text=contactDetails[listIndex].FirstName;
  frmContactDetails.contactDetailLNameLbl.text=contactDetails[listIndex].LastName;
  if(contactDetails[listIndex].Phone==null||contactDetails[listIndex].Phone==""||contactDetails[listIndex].Phone=="null")
    {
      frmContactDetails.contactDetailPhoneLbl.text="No Details";
    }
  else
    {
      frmContactDetails.contactDetailPhoneLbl.text=contactDetails[listIndex].Phone;
    }
  if(contactDetails[listIndex].Email==null||contactDetails[listIndex].Email==""||contactDetails[listIndex].Email=="null")
    {
      frmContactDetails.contactDetailEmailLbl.text=contactDetails[listIndex].Email;
    }
  else
    {
      frmContactDetails.contactDetailEmailLbl.text=contactDetails[listIndex].Email;
    }
  frmEditContactDetails.contactDetailFNameTxtbx.text=frmContactDetails.contactDetailFNameLbl.text;
  frmEditContactDetails.contactDetailNameLbl.text=frmContactDetails.contactDetailNameLbl.text;
  frmEditContactDetails.contactDetailTitleLbl.text=frmContactDetails.contactDetailTitleLbl.text;
  frmEditContactDetails.contactDetailLNameTxtbx.text=frmContactDetails.contactDetailLNameLbl.text;
  frmEditContactDetails.contactDetailPhoneTxtbx.text=frmContactDetails.contactDetailPhoneLbl.text;
  frmEditContactDetails.contactDetailEmailTxtbx.text=frmContactDetails.contactDetailEmailLbl.text;
  kony.application.dismissLoadingScreen();
  frmContactDetails.show();
}
   

/**
****************************************************************
*	Name    : getContacts
*	Author  : Kony
*	Purpose : This function gets the data and sets the data of the contacts into the segement of the Contacts form segement.
****************************************************************
*/



function getContacts()
{ 
  function contactServiceSuccessCallBack(res)
  {
    gblModules="contacts";
    kony.print("in contact successcallback");	
    var contactNameLbl,contactTitleLbl,contactImg;
    var contactList=[];
    var tempContact={};
    kony.print(res);
    kony.print(JSON.stringify(res.Contact));
    kony.print(JSON.stringify(res));
        if(res.length<=0)
          {
            //startSync();
            alert("no records available \nPlease Sync");
            //alert("no records available");
            kony.application.dismissLoadingScreen();
            return;
          }
        else
          {
            contactRes=res;
            contactDetails=res;
            for(var i=0;i<res.length;i++)
              {
                tempContact={};
                tempContact.contactNameLbl=res[i].FirstName+" "+res[i].LastName;
                if(res[i].Title==null||res[i].Title==""||res[i].Title=="null")
                  tempContact.contactTitleLbl="No Title";
                else
                  tempContact.contactTitleLbl=res[i].Title;
                tempContact.contactImg="contact.png";
                contactList.push(tempContact);
              }
            frmContacts.contactsSeg.setData(contactList);
            frmContacts.show();  
            kony.application.dismissLoadingScreen();
           }
  }
  function contactServiceFailureCallBack(error)
  {
    kony.print("contact service failed");
    var basicCon={
      message:"Contact Integration Service Failed",//JSON.stringify(error)
      alertType: constants.ALERT_TYPE_INFO,
      alertTitle:"Service Failure"
    };
    kony.ui.Alert(basicCon,{});
    
  }
  kony.print("in contacts");
  /*var contact = clientObj.getIntegrationService(MBaaSObj.ContactService);
  contact.invokeOperation("getContact",{},
                          MBaaSObj.getContactQuery,
                          contactServiceSuccessCallBack,
                          contactServiceFailureCallBack
                         ); */
  showSyncLoadingScreen("Loading...");
  Contact.getAll(contactServiceSuccessCallBack,contactServiceFailureCallBack);
  kony.print("after invoke");

  
}
