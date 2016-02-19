var leadDetails=[],curLeadIndex,leadRes=[];

/**
****************************************************************
*	Name    : showLeadDetails
*	Author  : Kony
*	Purpose : This function sets the data into the labels of the Leads form and Lead details and index are passed parameters to this function.
****************************************************************
*/


function showLeadDetails(leadDetails,listIndex)
{
  showSyncLoadingScreen("Loading...");
  curLeadIndex=listIndex;
  frmLeadDetails.leadDetailNameLbl.text=leadDetails[listIndex].FirstName+" "+leadDetails[listIndex].LastName;
  if(leadDetails[listIndex].Title==null||leadDetails[listIndex].Title==""||leadDetails[listIndex].Title=="null")
    {
      frmLeadDetails.leadDetailTitleLbl.text="No Title";
    }
  else
    {
      frmLeadDetails.leadDetailTitleLbl.text=leadDetails[listIndex].Title;
    }
  frmLeadDetails.leadDetailFNameLbl.text=leadDetails[listIndex].FirstName;
  frmLeadDetails.leadDetailLNameLbl.text=leadDetails[listIndex].LastName;
  if(leadDetails[listIndex].Phone==null||leadDetails[listIndex].Phone==""||leadDetails[listIndex].Phone=="null")
    {
      frmLeadDetails.leadDetailPhoneLbl.text="No Details";
    }
  else
    {
      frmLeadDetails.leadDetailPhoneLbl.text=leadDetails[listIndex].Phone;
    }
  if(leadDetails[listIndex].Email==null||leadDetails[listIndex].Email==""||leadDetails[listIndex].Email=="null")
    {
      frmLeadDetails.leadDetailEmailLbl.text="No Details";      
    }
  else
    {
      frmLeadDetails.leadDetailEmailLbl.text=leadDetails[listIndex].Email;
    }
  frmEditLeadDetails.leadDetailTitleLbl.text=frmLeadDetails.leadDetailTitleLbl.text;
  frmEditLeadDetails.leadDetailNameLbl.text=frmLeadDetails.leadDetailNameLbl.text;
  frmEditLeadDetails.leadDetailFNameTxtbx.text=frmLeadDetails.leadDetailFNameLbl.text;
  frmEditLeadDetails.leadDetailLNameTxtbx.text=frmLeadDetails.leadDetailLNameLbl.text;
  frmEditLeadDetails.leadDetailPhoneTxtbx.text=frmLeadDetails.leadDetailPhoneLbl.text;
  frmEditLeadDetails.leadDetailEmailTxtbx.text=frmLeadDetails.leadDetailEmailLbl.text;
  kony.application.dismissLoadingScreen();
  frmLeadDetails.show();
}


/**
****************************************************************
*	Name    : getLeads
*	Author  : Kony
*	Purpose : This function gets the data and sets the data of the Leads into the segement of the Leads form segement.
****************************************************************
*/




function getLeads()
{
  function leadServiceSuccessCallBack(res)
  {
    gblModules="leads";
    kony.print("in Lead successcallback");	
    var leadNameLbl,leadTitleLbl,leadImg;
    var leadList=[];
    var tempLead={};
    kony.print(JSON.stringify(res));
    kony.print(JSON.stringify(res.Lead));          
        if(res.length<=0)
          {
            //startSync();
            alert("no records available \nPlease Sync");
           // alert("no records available");
            kony.application.dismissLoadingScreen();
            return;
          }   
        else
          {            
            leadDetails=res;
            leadRes=res;
            for(var i=0;i<res.length;i++)
              {
                tempLead={};
                tempLead.leadNameLbl=res[i].FirstName+" "+res[i].LastName;
                if(res[i].Title==null||res[i].Title==""||res[i].Title=="null")
                  tempLead.leadTitleLbl="No Title";
                else
                  tempLead.leadTitleLbl=res[i].Title;
                tempLead.leadImg="leads.png";
                leadList.push(tempLead);
              }
            frmLeads.leadsSeg.setData(leadList);
            frmLeads.show();            
            kony.application.dismissLoadingScreen();
          }
  }
    
 
  
  
  
  
  function leadServiceFailureCallBack(error)
  {
    var basicCon={
      message:"Lead Integration Service Failed\n"+JSON.stringify(error),
      alertType: constants.ALERT_TYPE_INFO,
      alertTitle:"Service Failure"
    };
    kony.ui.Alert(basicCon,{});
  }
 /* var lead=clientObj.getIntegrationService(MBaaSObj.LeadService);
  lead.invokeOperation("getLead",{},
                       MBaaSObj.getLeadQuery,
                       leadServiceSuccessCallBack,
                       leadServiceFailureCallBack
                      );*/
  showSyncLoadingScreen("Loading...");
  Lead.getAll(leadServiceSuccessCallBack,leadServiceFailureCallBack);
  kony.print("After Invoke");
}
