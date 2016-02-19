

//**********************************Start DDL Commands************************
konysyncSQLLiteDDLCommands = [
 	"create table \"Account_HISTORY\" (\"AccountNumber\" nvarchar(4000),\"AccountSource\" nvarchar(4000),\"Active__c\" nvarchar(4000),\"AnnualRevenue\" nvarchar(4000),\"BATCH_SIZE\" nvarchar(4000),\"BillingAddress\" nvarchar(4000),\"BillingCity\" nvarchar(4000),\"BillingCountry\" nvarchar(4000),\"BillingLatitude\" nvarchar(4000),\"BillingLongitude\" nvarchar(4000),\"BillingPostalCode\" nvarchar(4000),\"BillingState\" nvarchar(4000),\"BillingStreet\" nvarchar(4000),\"CleanStatus\" nvarchar(4000),\"CreatedById\" nvarchar(4000),\"CreatedDate\" nvarchar(4000),\"CustomerPriority__c\" nvarchar(4000),\"DandbCompanyId\" nvarchar(4000),\"Description\" nvarchar(4000),\"DunsNumber\" nvarchar(4000),\"Fax\" nvarchar(4000),\"Id\" nvarchar(4000) not null,\"Industry\" nvarchar(4000),\"Jigsaw\" nvarchar(4000),\"JigsawCompanyId\" nvarchar(4000),\"LastActivityDate\" nvarchar(4000),\"LastModifiedById\" nvarchar(4000),\"LastReferencedDate\" nvarchar(4000),\"LastViewedDate\" nvarchar(4000),\"MasterRecordId\" nvarchar(4000),\"NaicsCode\" nvarchar(4000),\"NaicsDesc\" nvarchar(4000),\"Name\" nvarchar(4000),\"NumberOfEmployees\" nvarchar(4000),\"NumberofLocations__c\" nvarchar(4000),\"OwnerId\" nvarchar(4000),\"Ownership\" nvarchar(4000),\"ParentId\" nvarchar(4000),\"Phone\" nvarchar(4000),\"PhotoUrl\" nvarchar(4000),\"Rating\" nvarchar(4000),\"SLAExpirationDate__c\" nvarchar(4000),\"SLASerialNumber__c\" nvarchar(4000),\"SLA__c\" nvarchar(4000),\"START_TIME\" nvarchar(4000),\"ShippingAddress\" nvarchar(4000),\"ShippingCity\" nvarchar(4000),\"ShippingCountry\" nvarchar(4000),\"ShippingLatitude\" nvarchar(4000),\"ShippingLongitude\" nvarchar(4000),\"ShippingPostalCode\" nvarchar(4000),\"ShippingState\" nvarchar(4000),\"ShippingStreet\" nvarchar(4000),\"Sic\" nvarchar(4000),\"SicDesc\" nvarchar(4000),\"Site\" nvarchar(4000),\"SystemModstamp\" nvarchar(4000),\"TickerSymbol\" nvarchar(4000),\"Tradestyle\" nvarchar(4000),\"Type\" nvarchar(4000),\"UpsellOpportunity__c\" nvarchar(4000),\"Website\" nvarchar(4000),\"YearStarted\" nvarchar(4000),\"errorCode\" nvarchar(4000),\"message\" nvarchar(4000),\"moreRecordsAvailable\" nvarchar(4000),\"queryIdentifier\" nvarchar(4000),\"queryString\" nvarchar(4000),\"konysyncversionnumber\" integer,\"konysyncchangetype\" integer,\"konysyncreplaysequence\" integer,\"konysyncchangetime\" timestamp,\"konysynchashsum\" nvarchar(4000))",
 	"create table \"Account_ORIGINAL\" (\"Id\" nvarchar(4000) not null,\"AccountNumber\" nvarchar(4000),\"AccountSource\" nvarchar(4000),\"Active__c\" nvarchar(4000),\"AnnualRevenue\" nvarchar(4000),\"BATCH_SIZE\" nvarchar(4000),\"BillingAddress\" nvarchar(4000),\"BillingCity\" nvarchar(4000),\"BillingCountry\" nvarchar(4000),\"BillingLatitude\" nvarchar(4000),\"BillingLongitude\" nvarchar(4000),\"BillingPostalCode\" nvarchar(4000),\"BillingState\" nvarchar(4000),\"BillingStreet\" nvarchar(4000),\"CleanStatus\" nvarchar(4000),\"CreatedById\" nvarchar(4000),\"CreatedDate\" nvarchar(4000),\"CustomerPriority__c\" nvarchar(4000),\"DandbCompanyId\" nvarchar(4000),\"Description\" nvarchar(4000),\"DunsNumber\" nvarchar(4000),\"Fax\" nvarchar(4000),\"Industry\" nvarchar(4000),\"Jigsaw\" nvarchar(4000),\"JigsawCompanyId\" nvarchar(4000),\"LastActivityDate\" nvarchar(4000),\"LastModifiedById\" nvarchar(4000),\"LastReferencedDate\" nvarchar(4000),\"LastViewedDate\" nvarchar(4000),\"MasterRecordId\" nvarchar(4000),\"NaicsCode\" nvarchar(4000),\"NaicsDesc\" nvarchar(4000),\"Name\" nvarchar(4000),\"NumberOfEmployees\" nvarchar(4000),\"NumberofLocations__c\" nvarchar(4000),\"OwnerId\" nvarchar(4000),\"Ownership\" nvarchar(4000),\"ParentId\" nvarchar(4000),\"Phone\" nvarchar(4000),\"PhotoUrl\" nvarchar(4000),\"Rating\" nvarchar(4000),\"SLAExpirationDate__c\" nvarchar(4000),\"SLASerialNumber__c\" nvarchar(4000),\"SLA__c\" nvarchar(4000),\"START_TIME\" nvarchar(4000),\"ShippingAddress\" nvarchar(4000),\"ShippingCity\" nvarchar(4000),\"ShippingCountry\" nvarchar(4000),\"ShippingLatitude\" nvarchar(4000),\"ShippingLongitude\" nvarchar(4000),\"ShippingPostalCode\" nvarchar(4000),\"ShippingState\" nvarchar(4000),\"ShippingStreet\" nvarchar(4000),\"Sic\" nvarchar(4000),\"SicDesc\" nvarchar(4000),\"Site\" nvarchar(4000),\"SystemModstamp\" nvarchar(4000),\"TickerSymbol\" nvarchar(4000),\"Tradestyle\" nvarchar(4000),\"Type\" nvarchar(4000),\"UpsellOpportunity__c\" nvarchar(4000),\"Website\" nvarchar(4000),\"YearStarted\" nvarchar(4000),\"errorCode\" nvarchar(4000),\"message\" nvarchar(4000),\"moreRecordsAvailable\" nvarchar(4000),\"queryIdentifier\" nvarchar(4000),\"queryString\" nvarchar(4000),\"konysyncoriginalchangetype\" integer,\"konysyncoriginalversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"Id\"))",
 	"create table \"Account\" (\"Id\" nvarchar(4000) not null,\"AccountNumber\" nvarchar(4000),\"AccountSource\" nvarchar(4000),\"Active__c\" nvarchar(4000),\"AnnualRevenue\" nvarchar(4000),\"BATCH_SIZE\" nvarchar(4000),\"BillingAddress\" nvarchar(4000),\"BillingCity\" nvarchar(4000),\"BillingCountry\" nvarchar(4000),\"BillingLatitude\" nvarchar(4000),\"BillingLongitude\" nvarchar(4000),\"BillingPostalCode\" nvarchar(4000),\"BillingState\" nvarchar(4000),\"BillingStreet\" nvarchar(4000),\"CleanStatus\" nvarchar(4000),\"CreatedById\" nvarchar(4000),\"CreatedDate\" nvarchar(4000),\"CustomerPriority__c\" nvarchar(4000),\"DandbCompanyId\" nvarchar(4000),\"Description\" nvarchar(4000),\"DunsNumber\" nvarchar(4000),\"Fax\" nvarchar(4000),\"Industry\" nvarchar(4000),\"Jigsaw\" nvarchar(4000),\"JigsawCompanyId\" nvarchar(4000),\"LastActivityDate\" nvarchar(4000),\"LastModifiedById\" nvarchar(4000),\"LastReferencedDate\" nvarchar(4000),\"LastViewedDate\" nvarchar(4000),\"MasterRecordId\" nvarchar(4000),\"NaicsCode\" nvarchar(4000),\"NaicsDesc\" nvarchar(4000),\"Name\" nvarchar(4000),\"NumberOfEmployees\" nvarchar(4000),\"NumberofLocations__c\" nvarchar(4000),\"OwnerId\" nvarchar(4000),\"Ownership\" nvarchar(4000),\"ParentId\" nvarchar(4000),\"Phone\" nvarchar(4000),\"PhotoUrl\" nvarchar(4000),\"Rating\" nvarchar(4000),\"SLAExpirationDate__c\" nvarchar(4000),\"SLASerialNumber__c\" nvarchar(4000),\"SLA__c\" nvarchar(4000),\"START_TIME\" nvarchar(4000),\"ShippingAddress\" nvarchar(4000),\"ShippingCity\" nvarchar(4000),\"ShippingCountry\" nvarchar(4000),\"ShippingLatitude\" nvarchar(4000),\"ShippingLongitude\" nvarchar(4000),\"ShippingPostalCode\" nvarchar(4000),\"ShippingState\" nvarchar(4000),\"ShippingStreet\" nvarchar(4000),\"Sic\" nvarchar(4000),\"SicDesc\" nvarchar(4000),\"Site\" nvarchar(4000),\"SystemModstamp\" nvarchar(4000),\"TickerSymbol\" nvarchar(4000),\"Tradestyle\" nvarchar(4000),\"Type\" nvarchar(4000),\"UpsellOpportunity__c\" nvarchar(4000),\"Website\" nvarchar(4000),\"YearStarted\" nvarchar(4000),\"errorCode\" nvarchar(4000),\"message\" nvarchar(4000),\"moreRecordsAvailable\" nvarchar(4000),\"queryIdentifier\" nvarchar(4000),\"queryString\" nvarchar(4000),\"konysyncchangetype\" integer,\"konysyncversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"Id\"))",
 	"create table \"Contact_HISTORY\" (\"AccountId\" nvarchar(4000),\"AssistantName\" nvarchar(4000),\"AssistantPhone\" nvarchar(4000),\"Birthdate\" nvarchar(4000),\"CleanStatus\" nvarchar(4000),\"CreatedById\" nvarchar(4000),\"CreatedDate\" nvarchar(4000),\"Department\" nvarchar(4000),\"Description\" nvarchar(4000),\"Email\" nvarchar(4000),\"EmailBouncedDate\" nvarchar(4000),\"EmailBouncedReason\" nvarchar(4000),\"Fax\" nvarchar(4000),\"FirstName\" nvarchar(4000),\"HomePhone\" nvarchar(4000),\"Id\" nvarchar(4000) not null,\"IsEmailBounced\" integer,\"Jigsaw\" nvarchar(4000),\"JigsawContactId\" nvarchar(4000),\"Languages__c\" nvarchar(4000),\"LastActivityDate\" nvarchar(4000),\"LastCURequestDate\" nvarchar(4000),\"LastCUUpdateDate\" nvarchar(4000),\"LastModifiedById\" nvarchar(4000),\"LastName\" nvarchar(4000),\"LastReferencedDate\" nvarchar(4000),\"LastViewedDate\" nvarchar(4000),\"LeadSource\" nvarchar(4000),\"Level__c\" nvarchar(4000),\"MailingAddress\" nvarchar(4000),\"MailingCity\" nvarchar(4000),\"MailingCountry\" nvarchar(4000),\"MailingLatitude\" nvarchar(4000),\"MailingLongitude\" nvarchar(4000),\"MailingPostalCode\" nvarchar(4000),\"MailingState\" nvarchar(4000),\"MailingStreet\" nvarchar(4000),\"MasterRecordId\" nvarchar(4000),\"MobilePhone\" nvarchar(4000),\"Name\" nvarchar(4000),\"OtherAddress\" nvarchar(4000),\"OtherCity\" nvarchar(4000),\"OtherCountry\" nvarchar(4000),\"OtherLatitude\" nvarchar(4000),\"OtherLongitude\" nvarchar(4000),\"OtherPhone\" nvarchar(4000),\"OtherPostalCode\" nvarchar(4000),\"OtherState\" nvarchar(4000),\"OtherStreet\" nvarchar(4000),\"OwnerId\" nvarchar(4000),\"Phone\" nvarchar(4000),\"PhotoUrl\" nvarchar(4000),\"ReportsToId\" nvarchar(4000),\"Salutation\" nvarchar(4000),\"SystemModstamp\" nvarchar(4000),\"Title\" nvarchar(4000),\"errorCode\" nvarchar(4000),\"message\" nvarchar(4000),\"moreRecordsAvailable\" nvarchar(4000),\"queryIdentifier\" nvarchar(4000),\"queryString\" nvarchar(4000),\"konysyncversionnumber\" integer,\"konysyncchangetype\" integer,\"konysyncreplaysequence\" integer,\"konysyncchangetime\" timestamp,\"konysynchashsum\" nvarchar(4000))",
 	"create table \"Contact_ORIGINAL\" (\"Id\" nvarchar(4000) not null,\"AccountId\" nvarchar(4000),\"AssistantName\" nvarchar(4000),\"AssistantPhone\" nvarchar(4000),\"Birthdate\" nvarchar(4000),\"CleanStatus\" nvarchar(4000),\"CreatedById\" nvarchar(4000),\"CreatedDate\" nvarchar(4000),\"Department\" nvarchar(4000),\"Description\" nvarchar(4000),\"Email\" nvarchar(4000),\"EmailBouncedDate\" nvarchar(4000),\"EmailBouncedReason\" nvarchar(4000),\"Fax\" nvarchar(4000),\"FirstName\" nvarchar(4000),\"HomePhone\" nvarchar(4000),\"IsEmailBounced\" integer,\"Jigsaw\" nvarchar(4000),\"JigsawContactId\" nvarchar(4000),\"Languages__c\" nvarchar(4000),\"LastActivityDate\" nvarchar(4000),\"LastCURequestDate\" nvarchar(4000),\"LastCUUpdateDate\" nvarchar(4000),\"LastModifiedById\" nvarchar(4000),\"LastName\" nvarchar(4000),\"LastReferencedDate\" nvarchar(4000),\"LastViewedDate\" nvarchar(4000),\"LeadSource\" nvarchar(4000),\"Level__c\" nvarchar(4000),\"MailingAddress\" nvarchar(4000),\"MailingCity\" nvarchar(4000),\"MailingCountry\" nvarchar(4000),\"MailingLatitude\" nvarchar(4000),\"MailingLongitude\" nvarchar(4000),\"MailingPostalCode\" nvarchar(4000),\"MailingState\" nvarchar(4000),\"MailingStreet\" nvarchar(4000),\"MasterRecordId\" nvarchar(4000),\"MobilePhone\" nvarchar(4000),\"Name\" nvarchar(4000),\"OtherAddress\" nvarchar(4000),\"OtherCity\" nvarchar(4000),\"OtherCountry\" nvarchar(4000),\"OtherLatitude\" nvarchar(4000),\"OtherLongitude\" nvarchar(4000),\"OtherPhone\" nvarchar(4000),\"OtherPostalCode\" nvarchar(4000),\"OtherState\" nvarchar(4000),\"OtherStreet\" nvarchar(4000),\"OwnerId\" nvarchar(4000),\"Phone\" nvarchar(4000),\"PhotoUrl\" nvarchar(4000),\"ReportsToId\" nvarchar(4000),\"Salutation\" nvarchar(4000),\"SystemModstamp\" nvarchar(4000),\"Title\" nvarchar(4000),\"errorCode\" nvarchar(4000),\"message\" nvarchar(4000),\"moreRecordsAvailable\" nvarchar(4000),\"queryIdentifier\" nvarchar(4000),\"queryString\" nvarchar(4000),\"konysyncoriginalchangetype\" integer,\"konysyncoriginalversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"Id\"))",
 	"create table \"Contact\" (\"Id\" nvarchar(4000) not null,\"AccountId\" nvarchar(4000),\"AssistantName\" nvarchar(4000),\"AssistantPhone\" nvarchar(4000),\"Birthdate\" nvarchar(4000),\"CleanStatus\" nvarchar(4000),\"CreatedById\" nvarchar(4000),\"CreatedDate\" nvarchar(4000),\"Department\" nvarchar(4000),\"Description\" nvarchar(4000),\"Email\" nvarchar(4000),\"EmailBouncedDate\" nvarchar(4000),\"EmailBouncedReason\" nvarchar(4000),\"Fax\" nvarchar(4000),\"FirstName\" nvarchar(4000),\"HomePhone\" nvarchar(4000),\"IsEmailBounced\" integer,\"Jigsaw\" nvarchar(4000),\"JigsawContactId\" nvarchar(4000),\"Languages__c\" nvarchar(4000),\"LastActivityDate\" nvarchar(4000),\"LastCURequestDate\" nvarchar(4000),\"LastCUUpdateDate\" nvarchar(4000),\"LastModifiedById\" nvarchar(4000),\"LastName\" nvarchar(4000),\"LastReferencedDate\" nvarchar(4000),\"LastViewedDate\" nvarchar(4000),\"LeadSource\" nvarchar(4000),\"Level__c\" nvarchar(4000),\"MailingAddress\" nvarchar(4000),\"MailingCity\" nvarchar(4000),\"MailingCountry\" nvarchar(4000),\"MailingLatitude\" nvarchar(4000),\"MailingLongitude\" nvarchar(4000),\"MailingPostalCode\" nvarchar(4000),\"MailingState\" nvarchar(4000),\"MailingStreet\" nvarchar(4000),\"MasterRecordId\" nvarchar(4000),\"MobilePhone\" nvarchar(4000),\"Name\" nvarchar(4000),\"OtherAddress\" nvarchar(4000),\"OtherCity\" nvarchar(4000),\"OtherCountry\" nvarchar(4000),\"OtherLatitude\" nvarchar(4000),\"OtherLongitude\" nvarchar(4000),\"OtherPhone\" nvarchar(4000),\"OtherPostalCode\" nvarchar(4000),\"OtherState\" nvarchar(4000),\"OtherStreet\" nvarchar(4000),\"OwnerId\" nvarchar(4000),\"Phone\" nvarchar(4000),\"PhotoUrl\" nvarchar(4000),\"ReportsToId\" nvarchar(4000),\"Salutation\" nvarchar(4000),\"SystemModstamp\" nvarchar(4000),\"Title\" nvarchar(4000),\"errorCode\" nvarchar(4000),\"message\" nvarchar(4000),\"moreRecordsAvailable\" nvarchar(4000),\"queryIdentifier\" nvarchar(4000),\"queryString\" nvarchar(4000),\"konysyncchangetype\" integer,\"konysyncversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"Id\"))",
 	"create table \"Lead_HISTORY\" (\"Address\" nvarchar(4000),\"AnnualRevenue\" nvarchar(4000),\"BATCH_SIZE\" nvarchar(4000),\"City\" nvarchar(4000),\"CleanStatus\" nvarchar(4000),\"Company\" nvarchar(4000),\"CompanyDunsNumber\" nvarchar(4000),\"ConvertedAccountId\" nvarchar(4000),\"ConvertedContactId\" nvarchar(4000),\"ConvertedDate\" nvarchar(4000),\"ConvertedOpportunityId\" nvarchar(4000),\"Country\" nvarchar(4000),\"CreatedById\" nvarchar(4000),\"CreatedDate\" nvarchar(4000),\"CurrentGenerators__c\" nvarchar(4000),\"DandbCompanyId\" nvarchar(4000),\"Description\" nvarchar(4000),\"Email\" nvarchar(4000),\"EmailBouncedDate\" nvarchar(4000),\"EmailBouncedReason\" nvarchar(4000),\"Fax\" nvarchar(4000),\"FirstName\" nvarchar(4000),\"Id\" nvarchar(4000) not null,\"Industry\" nvarchar(4000),\"IsConverted\" integer,\"IsUnreadByOwner\" integer,\"Jigsaw\" nvarchar(4000),\"JigsawContactId\" nvarchar(4000),\"LastActivityDate\" nvarchar(4000),\"LastModifiedById\" nvarchar(4000),\"LastName\" nvarchar(4000),\"LastReferencedDate\" nvarchar(4000),\"LastViewedDate\" nvarchar(4000),\"Latitude\" nvarchar(4000),\"LeadSource\" nvarchar(4000),\"Longitude\" nvarchar(4000),\"MasterRecordId\" nvarchar(4000),\"MobilePhone\" nvarchar(4000),\"Name\" nvarchar(4000),\"NumberOfEmployees\" nvarchar(4000),\"NumberofLocations__c\" nvarchar(4000),\"OwnerId\" nvarchar(4000),\"Phone\" nvarchar(4000),\"PhotoUrl\" nvarchar(4000),\"PostalCode\" nvarchar(4000),\"Primary__c\" nvarchar(4000),\"ProductInterest__c\" nvarchar(4000),\"Rating\" nvarchar(4000),\"SICCode__c\" nvarchar(4000),\"START_TIME\" nvarchar(4000),\"Salutation\" nvarchar(4000),\"State\" nvarchar(4000),\"Status\" nvarchar(4000),\"Street\" nvarchar(4000),\"SystemModstamp\" nvarchar(4000),\"Title\" nvarchar(4000),\"Website\" nvarchar(4000),\"errorCode\" nvarchar(4000),\"message\" nvarchar(4000),\"moreRecordsAvailable\" nvarchar(4000),\"queryIdentifier\" nvarchar(4000),\"queryString\" nvarchar(4000),\"konysyncversionnumber\" integer,\"konysyncchangetype\" integer,\"konysyncreplaysequence\" integer,\"konysyncchangetime\" timestamp,\"konysynchashsum\" nvarchar(4000))",
 	"create table \"Lead_ORIGINAL\" (\"Id\" nvarchar(4000) not null,\"Address\" nvarchar(4000),\"AnnualRevenue\" nvarchar(4000),\"BATCH_SIZE\" nvarchar(4000),\"City\" nvarchar(4000),\"CleanStatus\" nvarchar(4000),\"Company\" nvarchar(4000),\"CompanyDunsNumber\" nvarchar(4000),\"ConvertedAccountId\" nvarchar(4000),\"ConvertedContactId\" nvarchar(4000),\"ConvertedDate\" nvarchar(4000),\"ConvertedOpportunityId\" nvarchar(4000),\"Country\" nvarchar(4000),\"CreatedById\" nvarchar(4000),\"CreatedDate\" nvarchar(4000),\"CurrentGenerators__c\" nvarchar(4000),\"DandbCompanyId\" nvarchar(4000),\"Description\" nvarchar(4000),\"Email\" nvarchar(4000),\"EmailBouncedDate\" nvarchar(4000),\"EmailBouncedReason\" nvarchar(4000),\"Fax\" nvarchar(4000),\"FirstName\" nvarchar(4000),\"Industry\" nvarchar(4000),\"IsConverted\" integer,\"IsUnreadByOwner\" integer,\"Jigsaw\" nvarchar(4000),\"JigsawContactId\" nvarchar(4000),\"LastActivityDate\" nvarchar(4000),\"LastModifiedById\" nvarchar(4000),\"LastName\" nvarchar(4000),\"LastReferencedDate\" nvarchar(4000),\"LastViewedDate\" nvarchar(4000),\"Latitude\" nvarchar(4000),\"LeadSource\" nvarchar(4000),\"Longitude\" nvarchar(4000),\"MasterRecordId\" nvarchar(4000),\"MobilePhone\" nvarchar(4000),\"Name\" nvarchar(4000),\"NumberOfEmployees\" nvarchar(4000),\"NumberofLocations__c\" nvarchar(4000),\"OwnerId\" nvarchar(4000),\"Phone\" nvarchar(4000),\"PhotoUrl\" nvarchar(4000),\"PostalCode\" nvarchar(4000),\"Primary__c\" nvarchar(4000),\"ProductInterest__c\" nvarchar(4000),\"Rating\" nvarchar(4000),\"SICCode__c\" nvarchar(4000),\"START_TIME\" nvarchar(4000),\"Salutation\" nvarchar(4000),\"State\" nvarchar(4000),\"Status\" nvarchar(4000),\"Street\" nvarchar(4000),\"SystemModstamp\" nvarchar(4000),\"Title\" nvarchar(4000),\"Website\" nvarchar(4000),\"errorCode\" nvarchar(4000),\"message\" nvarchar(4000),\"moreRecordsAvailable\" nvarchar(4000),\"queryIdentifier\" nvarchar(4000),\"queryString\" nvarchar(4000),\"konysyncoriginalchangetype\" integer,\"konysyncoriginalversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"Id\"))",
 	"create table \"Lead\" (\"Id\" nvarchar(4000) not null,\"Address\" nvarchar(4000),\"AnnualRevenue\" nvarchar(4000),\"BATCH_SIZE\" nvarchar(4000),\"City\" nvarchar(4000),\"CleanStatus\" nvarchar(4000),\"Company\" nvarchar(4000),\"CompanyDunsNumber\" nvarchar(4000),\"ConvertedAccountId\" nvarchar(4000),\"ConvertedContactId\" nvarchar(4000),\"ConvertedDate\" nvarchar(4000),\"ConvertedOpportunityId\" nvarchar(4000),\"Country\" nvarchar(4000),\"CreatedById\" nvarchar(4000),\"CreatedDate\" nvarchar(4000),\"CurrentGenerators__c\" nvarchar(4000),\"DandbCompanyId\" nvarchar(4000),\"Description\" nvarchar(4000),\"Email\" nvarchar(4000),\"EmailBouncedDate\" nvarchar(4000),\"EmailBouncedReason\" nvarchar(4000),\"Fax\" nvarchar(4000),\"FirstName\" nvarchar(4000),\"Industry\" nvarchar(4000),\"IsConverted\" integer,\"IsUnreadByOwner\" integer,\"Jigsaw\" nvarchar(4000),\"JigsawContactId\" nvarchar(4000),\"LastActivityDate\" nvarchar(4000),\"LastModifiedById\" nvarchar(4000),\"LastName\" nvarchar(4000),\"LastReferencedDate\" nvarchar(4000),\"LastViewedDate\" nvarchar(4000),\"Latitude\" nvarchar(4000),\"LeadSource\" nvarchar(4000),\"Longitude\" nvarchar(4000),\"MasterRecordId\" nvarchar(4000),\"MobilePhone\" nvarchar(4000),\"Name\" nvarchar(4000),\"NumberOfEmployees\" nvarchar(4000),\"NumberofLocations__c\" nvarchar(4000),\"OwnerId\" nvarchar(4000),\"Phone\" nvarchar(4000),\"PhotoUrl\" nvarchar(4000),\"PostalCode\" nvarchar(4000),\"Primary__c\" nvarchar(4000),\"ProductInterest__c\" nvarchar(4000),\"Rating\" nvarchar(4000),\"SICCode__c\" nvarchar(4000),\"START_TIME\" nvarchar(4000),\"Salutation\" nvarchar(4000),\"State\" nvarchar(4000),\"Status\" nvarchar(4000),\"Street\" nvarchar(4000),\"SystemModstamp\" nvarchar(4000),\"Title\" nvarchar(4000),\"Website\" nvarchar(4000),\"errorCode\" nvarchar(4000),\"message\" nvarchar(4000),\"moreRecordsAvailable\" nvarchar(4000),\"queryIdentifier\" nvarchar(4000),\"queryString\" nvarchar(4000),\"konysyncchangetype\" integer,\"konysyncversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"Id\"))",
 	"create table \"Opportunity_HISTORY\" (\"AccountId\" nvarchar(4000),\"Amount\" nvarchar(4000),\"BATCH_SIZE\" nvarchar(4000),\"CampaignId\" nvarchar(4000),\"CloseDate\" nvarchar(4000),\"CreatedById\" nvarchar(4000),\"CreatedDate\" nvarchar(4000),\"CurrentGenerators__c\" nvarchar(4000),\"DeliveryInstallationStatus__c\" nvarchar(4000),\"Description\" nvarchar(4000),\"ExpectedRevenue\" nvarchar(4000),\"Fiscal\" nvarchar(4000),\"FiscalQuarter\" nvarchar(4000),\"FiscalYear\" nvarchar(4000),\"ForecastCategory\" nvarchar(4000),\"ForecastCategoryName\" nvarchar(4000),\"HasOpportunityLineItem\" integer,\"Id\" nvarchar(4000) not null,\"IsClosed\" integer,\"IsPrivate\" integer,\"IsWon\" integer,\"LastActivityDate\" nvarchar(4000),\"LastModifiedById\" nvarchar(4000),\"LastReferencedDate\" nvarchar(4000),\"LastViewedDate\" nvarchar(4000),\"LeadSource\" nvarchar(4000),\"MainCompetitors__c\" nvarchar(4000),\"Name\" nvarchar(4000),\"NextStep\" nvarchar(4000),\"OrderNumber__c\" nvarchar(4000),\"OwnerId\" nvarchar(4000),\"Pricebook2Id\" nvarchar(4000),\"Probability\" nvarchar(4000),\"START_TIME\" nvarchar(4000),\"StageName\" nvarchar(4000),\"SystemModstamp\" nvarchar(4000),\"TotalOpportunityQuantity\" nvarchar(4000),\"TrackingNumber__c\" nvarchar(4000),\"Type\" nvarchar(4000),\"errorCode\" nvarchar(4000),\"message\" nvarchar(4000),\"moreRecordsAvailable\" nvarchar(4000),\"queryIdentifier\" nvarchar(4000),\"queryString\" nvarchar(4000),\"konysyncversionnumber\" integer,\"konysyncchangetype\" integer,\"konysyncreplaysequence\" integer,\"konysyncchangetime\" timestamp,\"konysynchashsum\" nvarchar(4000))",
 	"create table \"Opportunity_ORIGINAL\" (\"Id\" nvarchar(4000) not null,\"AccountId\" nvarchar(4000),\"Amount\" nvarchar(4000),\"BATCH_SIZE\" nvarchar(4000),\"CampaignId\" nvarchar(4000),\"CloseDate\" nvarchar(4000),\"CreatedById\" nvarchar(4000),\"CreatedDate\" nvarchar(4000),\"CurrentGenerators__c\" nvarchar(4000),\"DeliveryInstallationStatus__c\" nvarchar(4000),\"Description\" nvarchar(4000),\"ExpectedRevenue\" nvarchar(4000),\"Fiscal\" nvarchar(4000),\"FiscalQuarter\" nvarchar(4000),\"FiscalYear\" nvarchar(4000),\"ForecastCategory\" nvarchar(4000),\"ForecastCategoryName\" nvarchar(4000),\"HasOpportunityLineItem\" integer,\"IsClosed\" integer,\"IsPrivate\" integer,\"IsWon\" integer,\"LastActivityDate\" nvarchar(4000),\"LastModifiedById\" nvarchar(4000),\"LastReferencedDate\" nvarchar(4000),\"LastViewedDate\" nvarchar(4000),\"LeadSource\" nvarchar(4000),\"MainCompetitors__c\" nvarchar(4000),\"Name\" nvarchar(4000),\"NextStep\" nvarchar(4000),\"OrderNumber__c\" nvarchar(4000),\"OwnerId\" nvarchar(4000),\"Pricebook2Id\" nvarchar(4000),\"Probability\" nvarchar(4000),\"START_TIME\" nvarchar(4000),\"StageName\" nvarchar(4000),\"SystemModstamp\" nvarchar(4000),\"TotalOpportunityQuantity\" nvarchar(4000),\"TrackingNumber__c\" nvarchar(4000),\"Type\" nvarchar(4000),\"errorCode\" nvarchar(4000),\"message\" nvarchar(4000),\"moreRecordsAvailable\" nvarchar(4000),\"queryIdentifier\" nvarchar(4000),\"queryString\" nvarchar(4000),\"konysyncoriginalchangetype\" integer,\"konysyncoriginalversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"Id\"))",
 	"create table \"Opportunity\" (\"Id\" nvarchar(4000) not null,\"AccountId\" nvarchar(4000),\"Amount\" nvarchar(4000),\"BATCH_SIZE\" nvarchar(4000),\"CampaignId\" nvarchar(4000),\"CloseDate\" nvarchar(4000),\"CreatedById\" nvarchar(4000),\"CreatedDate\" nvarchar(4000),\"CurrentGenerators__c\" nvarchar(4000),\"DeliveryInstallationStatus__c\" nvarchar(4000),\"Description\" nvarchar(4000),\"ExpectedRevenue\" nvarchar(4000),\"Fiscal\" nvarchar(4000),\"FiscalQuarter\" nvarchar(4000),\"FiscalYear\" nvarchar(4000),\"ForecastCategory\" nvarchar(4000),\"ForecastCategoryName\" nvarchar(4000),\"HasOpportunityLineItem\" integer,\"IsClosed\" integer,\"IsPrivate\" integer,\"IsWon\" integer,\"LastActivityDate\" nvarchar(4000),\"LastModifiedById\" nvarchar(4000),\"LastReferencedDate\" nvarchar(4000),\"LastViewedDate\" nvarchar(4000),\"LeadSource\" nvarchar(4000),\"MainCompetitors__c\" nvarchar(4000),\"Name\" nvarchar(4000),\"NextStep\" nvarchar(4000),\"OrderNumber__c\" nvarchar(4000),\"OwnerId\" nvarchar(4000),\"Pricebook2Id\" nvarchar(4000),\"Probability\" nvarchar(4000),\"START_TIME\" nvarchar(4000),\"StageName\" nvarchar(4000),\"SystemModstamp\" nvarchar(4000),\"TotalOpportunityQuantity\" nvarchar(4000),\"TrackingNumber__c\" nvarchar(4000),\"Type\" nvarchar(4000),\"errorCode\" nvarchar(4000),\"message\" nvarchar(4000),\"moreRecordsAvailable\" nvarchar(4000),\"queryIdentifier\" nvarchar(4000),\"queryString\" nvarchar(4000),\"konysyncchangetype\" integer,\"konysyncversionnumber\" integer,\"konysynchashsum\" nvarchar(4000),primary key (\"Id\"))",
 	"create table \"konysyncCHUNKDATA\" (\"chunkid\" int not null,\"payloadid\" nvarchar(50) not null,\"scopename\" nvarchar(100) not null,\"chunkdata\" text,\"timestamp\" nvarchar(50),primary key (\"chunkid\", \"payloadid\", \"scopename\"))",
 	"create table \"konysyncCHUNKMETAINFO\" (\"payloadid\" nvarchar(50) not null,\"scopename\" nvarchar(100) not null,\"chunkacknowledged\" int,\"chunksize\" int,\"chunkcount\" int,\"chunkhashsum\" nvarchar(35),\"chunkdiscarded\" int,primary key (\"payloadid\", \"scopename\"))",
 	"create table \"konysyncDIAGNOSTICS\" (\"id\" bigint not null,\"action\" nvarchar(100),\"details\" nvarchar(2000),\"timestamp\" timestamp,primary key (\"id\"))",
 	"create table \"konysyncMETAINFO\" (\"id\" bigint not null,\"versionnumber\" int,\"lastserversynccontext\" nvarchar(1000),\"lastserveruploadsynccontext\" nvarchar(1000),\"lastschemaupgradesynccontext\" nvarchar(1000),\"filtervalue\" nvarchar(1000),\"replaysequencenumber\" integer,\"lastgeneratedid\" integer,\"scopename\" nvarchar(100),primary key (\"id\"))",
 	"create table \"konysyncPENDINGUPLOADREQUESTINFO\" (\"scopename\" nvarchar(100) not null,\"uploadrequest\" text,\"objectlevelinfo\" text,\"insertcount\" int,\"updatecount\" int,\"deletecount\" int,\"batchinsertcount\" int,\"batchupdatecount\" int,\"batchdeletecount\" int,\"uploadlimit\" int,primary key (\"scopename\"))"
]
//**********************************End DDL Commands************************