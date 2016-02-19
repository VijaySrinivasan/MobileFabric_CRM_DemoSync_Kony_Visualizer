var opportunityDetails=[],curOpportunityIndex,opportunityRes=[];


/**
****************************************************************
*	Name    : showOpportunityDetails
*	Author  : Kony
*	Purpose : This function sets the data into the labels of the opportunity form and opportunity details and index are passed parameters to this function.
****************************************************************
*/



function showOpportunityDetails(opportunityDetails,listIndex)
{
  showSyncLoadingScreen("Loading...");
  curOpportunityIndex=listIndex;
  frmOppurtunityDetails.oppurtunityDetailNameLbl.text=opportunityDetails[listIndex].Name;
  if(opportunityDetails[listIndex].Type==null||opportunityDetails[listIndex].Type==""||opportunityDetails[listIndex].Type=="null")
    {
      frmOppurtunityDetails.contactDetailOppurtunityTypeLbl.text="Type not found";      
    }
  else
    {
      frmOppurtunityDetails.contactDetailOppurtunityTypeLbl.text=opportunityDetails[listIndex].Type;
    }
  frmOppurtunityDetails.oppurtunityAccountNameLbl.text=opportunityDetails[listIndex].Name;
  if(opportunityDetails[listIndex].Amount==null||opportunityDetails[listIndex].Amount==""||opportunityDetails[listIndex].Amount=="null")
    {
      frmOppurtunityDetails.oppurtunityDetailAmmountLbl.text="No Details";      
    }
  else
    {
      frmOppurtunityDetails.oppurtunityDetailAmmountLbl.text=opportunityDetails[listIndex].Amount;
    }
  frmOppurtunityDetails.oppurtunityDetailCloseDateLbl.text=opportunityDetails[listIndex].CloseDate;
  if(opportunityDetails[listIndex].LeadSource==null||opportunityDetails[listIndex].LeadSource==""||opportunityDetails[listIndex].LeadSource=="null")
    {
      frmOppurtunityDetails.oppurtunityDetailLeadSourceLbl.text="No Details";      
    }
  else
    {
      frmOppurtunityDetails.oppurtunityDetailLeadSourceLbl.text=opportunityDetails[listIndex].LeadSource;
    }
   if(opportunityDetails[listIndex].ExpectedRevenue==null||opportunityDetails[listIndex].ExpectedRevenue==""||opportunityDetails[listIndex].ExpectedRevenue=="null")
    {
      frmOppurtunityDetails.oppurtunityDetailRevenueLbl.text="No Details";      
    }
  else
    {
      frmOppurtunityDetails.oppurtunityDetailRevenueLbl.text=opportunityDetails[listIndex].ExpectedRevenue;
    }
  frmOppurtunityDetails.oppurtunityDetailImg.src="p"+opportunityDetails[listIndex].Probability.split(".")[0]+".png";
  
  
  
  frmEditOppurtunityDetails.oppurtunityDetailNameLbl.text=frmOppurtunityDetails.oppurtunityDetailNameLbl.text;
  frmEditOppurtunityDetails.contactDetailOppurtunityTypeLbl.text=frmOppurtunityDetails.contactDetailOppurtunityTypeLbl.text;
  frmEditOppurtunityDetails.oppurtunityAccountNameLbl.text=frmOppurtunityDetails.oppurtunityAccountNameLbl.text;
  frmEditOppurtunityDetails.oppurtunityDetailImg.src=frmOppurtunityDetails.oppurtunityDetailImg.src;

  frmEditOppurtunityDetails.oppurtunityDetailAmmountTxtbx.text=frmOppurtunityDetails.oppurtunityDetailAmmountLbl.text;
  frmEditOppurtunityDetails.oppurtunityDetailLeadSourceTxtbx.text=frmOppurtunityDetails.oppurtunityDetailLeadSourceLbl.text;
  frmEditOppurtunityDetails.oppurtunityDetailCloseDateTxtbx.text=frmOppurtunityDetails.oppurtunityDetailCloseDateLbl.text;  
  frmEditOppurtunityDetails.oppurtunityDetailRevenueTxtbx.text=frmOppurtunityDetails.oppurtunityDetailRevenueLbl.text;
  
  
  kony.application.dismissLoadingScreen();
  frmOppurtunityDetails.show();
}


/**
****************************************************************
*	Name    : getOppurtunity
*	Author  : Kony
*	Purpose : This function gets the data and sets the data of the Oppurtunities into the segement of the Oppurtunity form segement.
****************************************************************
*/




function getOppurtunity()
{
  function oppurtunityServiceSuccessCallBack(res)
  {
    gblModules="opportunity";
    kony.print("in Opportunity Success CallBack");
    var oppurtNameLbl,oppurtStageLbl,oppurtTypeLbl,oppurtinitiesImg;
    var opportunityList=[];
    var tempOpportunity={};
    kony.print(JSON.stringify(res.Opportunity));
    kony.print(JSON.stringify(res));
   
        if(res.length<=0)
          {
            //startSync();
            alert("no records available \nPlease Sync");
            //alert("No Records Available");
            kony.application.dismissLoadingScreen();
            return;
          }
        else
          {
            opportunityDetails=res;
            opportunityRes=res;
            kony.print("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@opportunityRes@@@@@@@@@\n"+opportunityRes[curOpportunityIndex]);
            for(var i=0;i<res.length;i++)
              {
                tempOpportunity={};
                tempOpportunity.oppurtNameLbl=res[i].Name;
                tempOpportunity.oppurtStageLbl=res[i].StageName;
                if(res[i].Type==null||res[i].Type==""||res[i].Type=="null")
                  {
                    tempOpportunity.oppurtTypeLbl="Cannot Find Customer Type";
                  }
                else
                  {
                    tempOpportunity.oppurtTypeLbl=res[i].Type;
                  }
                tempOpportunity.oppurtinitiesImg="p"+res[i].Probability.split(".")[0]+".png";
                opportunityList.push(tempOpportunity);
                
              }
            frmOppurtunities.oppurtinitiesSeg.setData(opportunityList);
            frmOppurtunities.show();
            kony.application.dismissLoadingScreen();

            
          }
     
               
  }
  
  function oppurtunityServiceFailureCallBack(error)
  {
    var basicCon={
      message:"Opportunity Integration Service Failed\n"+JSON.stringify(error),
      alertType: constants.ALERT_TYPE_INFO,
      alertTitle:"Service Failure"
      };
    kony.ui.Alert(basicCon,{});
  }

 /* var oppurtunity=clientObj.getIntegrationService(MBaaSObj.OpportunitiesService);
  oppurtunity.invokeOperation("getOpportunity",{},
                              MBaaSObj.getOpportunityQuery,
                              oppurtunityServiceSuccessCallBack,
                              oppurtunityServiceFailureCallBack                             
                             );*/
  showSyncLoadingScreen("Loading...");
  Opportunity.getAll(oppurtunityServiceSuccessCallBack,oppurtunityServiceFailureCallBack);
  kony.print("after Invoking");
}