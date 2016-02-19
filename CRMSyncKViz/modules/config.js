
/**
****************************************************************
*	Name    : MBaaSObj
*	Author  : Kony
*	Purpose : This is an Mbaas object which is used for logining into sales force account.
****************************************************************
*/


MBaaSObj ={

"Username" : "sreenivasn@gmail.com", 
"Password" : "SampleApps@1234W77q2WXmGPqQQE0jlWiiC5ho",    
"AppKey" : "271dcb39b037c68821e9cde4981659ea", 
"AppSecret" : "8f5fea41584def93422cef589bccdf8a", 
"IdentityService" : "SyncDemoIdService",
"AccountService":"AccountIntgService",
"LeadService":"LeadIntgService",
"ContactService":"ContactSyncIntg",
"OpportunitiesService":"OpportunityIntgService",
"ServiceURL" : "https://100003520.auth.konycloud.com/appconfig",
"KMSID":"sreenivasulu.reddy@kony.com",  
"getContactQuery":{ "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Contact"},
"getAccountQuery":{ "queryString":"SELECT name,type,BillingCity,BillingState,AnnualRevenue,website,Industry,phone,BillingStreet from Account where type!=null"},
"getLeadQuery":   { "queryString":"SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Lead"},
"getOpportunityQuery":{ "queryString":"SELECT name,Amount,CloseDate,Type,LeadSource,StageName,ExpectedRevenue,Probability from Opportunity"}

};
