//****************Sync Version:Sync-GA-6.5.2_v201508271357*******************
// ****************Generated On Thu Jan 21 11:36:09 UTC 2016Opportunity*******************
// **********************************Start Opportunity's helper methods************************
if (typeof(kony) === "undefined") {
	kony = {};
}

if (typeof(kony.sync) === "undefined") {
	kony.sync = {};
}

if (typeof(kony.sync.log) === "undefined") {
	kony.sync.log = {};
}

if (typeof(sync) === "undefined") {
	sync = {};
}

if (typeof(sync.log) === "undefined") {
	sync.log = {};
}




/************************************************************************************
* Creates new Opportunity
*************************************************************************************/
Opportunity = function(){
	this.AccountId = null;
	this.Amount = null;
	this.BATCH_SIZE = null;
	this.CampaignId = null;
	this.CloseDate = null;
	this.CreatedById = null;
	this.CreatedDate = null;
	this.CurrentGenerators__c = null;
	this.DeliveryInstallationStatus__c = null;
	this.Description = null;
	this.ExpectedRevenue = null;
	this.Fiscal = null;
	this.FiscalQuarter = null;
	this.FiscalYear = null;
	this.ForecastCategory = null;
	this.ForecastCategoryName = null;
	this.HasOpportunityLineItem = null;
	this.Id = null;
	this.IsClosed = null;
	this.IsDeleted = null;
	this.IsPrivate = null;
	this.IsWon = null;
	this.LastActivityDate = null;
	this.LastModifiedById = null;
	this.LastModifiedDate = null;
	this.LastReferencedDate = null;
	this.LastViewedDate = null;
	this.LeadSource = null;
	this.MainCompetitors__c = null;
	this.Name = null;
	this.NextStep = null;
	this.OrderNumber__c = null;
	this.OwnerId = null;
	this.Pricebook2Id = null;
	this.Probability = null;
	this.START_TIME = null;
	this.StageName = null;
	this.SystemModstamp = null;
	this.TotalOpportunityQuantity = null;
	this.TrackingNumber__c = null;
	this.Type = null;
	this.errorCode = null;
	this.message = null;
	this.moreRecordsAvailable = null;
	this.queryIdentifier = null;
	this.queryString = null;
	this.markForUpload = true;
};

Opportunity.prototype = {
	get AccountId(){
		return this._AccountId;
	},
	set AccountId(val){
		this._AccountId = val;
	},
	get Amount(){
		return this._Amount;
	},
	set Amount(val){
		this._Amount = val;
	},
	get BATCH_SIZE(){
		return this._BATCH_SIZE;
	},
	set BATCH_SIZE(val){
		this._BATCH_SIZE = val;
	},
	get CampaignId(){
		return this._CampaignId;
	},
	set CampaignId(val){
		this._CampaignId = val;
	},
	get CloseDate(){
		return this._CloseDate;
	},
	set CloseDate(val){
		this._CloseDate = val;
	},
	get CreatedById(){
		return this._CreatedById;
	},
	set CreatedById(val){
		this._CreatedById = val;
	},
	get CreatedDate(){
		return this._CreatedDate;
	},
	set CreatedDate(val){
		this._CreatedDate = val;
	},
	get CurrentGenerators__c(){
		return this._CurrentGenerators__c;
	},
	set CurrentGenerators__c(val){
		this._CurrentGenerators__c = val;
	},
	get DeliveryInstallationStatus__c(){
		return this._DeliveryInstallationStatus__c;
	},
	set DeliveryInstallationStatus__c(val){
		this._DeliveryInstallationStatus__c = val;
	},
	get Description(){
		return this._Description;
	},
	set Description(val){
		this._Description = val;
	},
	get ExpectedRevenue(){
		return this._ExpectedRevenue;
	},
	set ExpectedRevenue(val){
		this._ExpectedRevenue = val;
	},
	get Fiscal(){
		return this._Fiscal;
	},
	set Fiscal(val){
		this._Fiscal = val;
	},
	get FiscalQuarter(){
		return this._FiscalQuarter;
	},
	set FiscalQuarter(val){
		this._FiscalQuarter = val;
	},
	get FiscalYear(){
		return this._FiscalYear;
	},
	set FiscalYear(val){
		this._FiscalYear = val;
	},
	get ForecastCategory(){
		return this._ForecastCategory;
	},
	set ForecastCategory(val){
		this._ForecastCategory = val;
	},
	get ForecastCategoryName(){
		return this._ForecastCategoryName;
	},
	set ForecastCategoryName(val){
		this._ForecastCategoryName = val;
	},
	get HasOpportunityLineItem(){
		return kony.sync.getBoolean(this._HasOpportunityLineItem);
	},
	set HasOpportunityLineItem(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute HasOpportunityLineItem in Opportunity.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._HasOpportunityLineItem = val;
	},
	get Id(){
		return this._Id;
	},
	set Id(val){
		this._Id = val;
	},
	get IsClosed(){
		return kony.sync.getBoolean(this._IsClosed);
	},
	set IsClosed(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsClosed in Opportunity.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsClosed = val;
	},
	get IsDeleted(){
		return kony.sync.getBoolean(this._IsDeleted);
	},
	set IsDeleted(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsDeleted in Opportunity.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsDeleted = val;
	},
	get IsPrivate(){
		return kony.sync.getBoolean(this._IsPrivate);
	},
	set IsPrivate(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsPrivate in Opportunity.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsPrivate = val;
	},
	get IsWon(){
		return kony.sync.getBoolean(this._IsWon);
	},
	set IsWon(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsWon in Opportunity.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsWon = val;
	},
	get LastActivityDate(){
		return this._LastActivityDate;
	},
	set LastActivityDate(val){
		this._LastActivityDate = val;
	},
	get LastModifiedById(){
		return this._LastModifiedById;
	},
	set LastModifiedById(val){
		this._LastModifiedById = val;
	},
	get LastModifiedDate(){
		return this._LastModifiedDate;
	},
	set LastModifiedDate(val){
		this._LastModifiedDate = val;
	},
	get LastReferencedDate(){
		return this._LastReferencedDate;
	},
	set LastReferencedDate(val){
		this._LastReferencedDate = val;
	},
	get LastViewedDate(){
		return this._LastViewedDate;
	},
	set LastViewedDate(val){
		this._LastViewedDate = val;
	},
	get LeadSource(){
		return this._LeadSource;
	},
	set LeadSource(val){
		this._LeadSource = val;
	},
	get MainCompetitors__c(){
		return this._MainCompetitors__c;
	},
	set MainCompetitors__c(val){
		this._MainCompetitors__c = val;
	},
	get Name(){
		return this._Name;
	},
	set Name(val){
		this._Name = val;
	},
	get NextStep(){
		return this._NextStep;
	},
	set NextStep(val){
		this._NextStep = val;
	},
	get OrderNumber__c(){
		return this._OrderNumber__c;
	},
	set OrderNumber__c(val){
		this._OrderNumber__c = val;
	},
	get OwnerId(){
		return this._OwnerId;
	},
	set OwnerId(val){
		this._OwnerId = val;
	},
	get Pricebook2Id(){
		return this._Pricebook2Id;
	},
	set Pricebook2Id(val){
		this._Pricebook2Id = val;
	},
	get Probability(){
		return this._Probability;
	},
	set Probability(val){
		this._Probability = val;
	},
	get START_TIME(){
		return this._START_TIME;
	},
	set START_TIME(val){
		this._START_TIME = val;
	},
	get StageName(){
		return this._StageName;
	},
	set StageName(val){
		this._StageName = val;
	},
	get SystemModstamp(){
		return this._SystemModstamp;
	},
	set SystemModstamp(val){
		this._SystemModstamp = val;
	},
	get TotalOpportunityQuantity(){
		return this._TotalOpportunityQuantity;
	},
	set TotalOpportunityQuantity(val){
		this._TotalOpportunityQuantity = val;
	},
	get TrackingNumber__c(){
		return this._TrackingNumber__c;
	},
	set TrackingNumber__c(val){
		this._TrackingNumber__c = val;
	},
	get Type(){
		return this._Type;
	},
	set Type(val){
		this._Type = val;
	},
	get errorCode(){
		return this._errorCode;
	},
	set errorCode(val){
		this._errorCode = val;
	},
	get message(){
		return this._message;
	},
	set message(val){
		this._message = val;
	},
	get moreRecordsAvailable(){
		return this._moreRecordsAvailable;
	},
	set moreRecordsAvailable(val){
		this._moreRecordsAvailable = val;
	},
	get queryIdentifier(){
		return this._queryIdentifier;
	},
	set queryIdentifier(val){
		this._queryIdentifier = val;
	},
	get queryString(){
		return this._queryString;
	},
	set queryString(val){
		this._queryString = val;
	},
};

/************************************************************************************
* Retrieves all instances of Opportunity SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "AccountId";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "Amount";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* Opportunity.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
Opportunity.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering Opportunity.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	orderByMap = kony.sync.formOrderByClause("Opportunity",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering Opportunity.getAll->successcallback");
		successcallback(Opportunity.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of Opportunity present in local database.
*************************************************************************************/
Opportunity.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering Opportunity.getAllCount function");
	Opportunity.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of Opportunity using where clause in the local Database
*************************************************************************************/
Opportunity.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering Opportunity.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering Opportunity.getCount->successcallback");
		if(null!==res){
			var count = null;
			count = res["count(*)"];
			kony.sync.verifyAndCallClosure(successcallback, {count:count});
		}
		else{
			sync.log.error("Some error occured while getting the count");
		}
	}
};

/************************************************************************************
* Creates a new instance of Opportunity in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Opportunity.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  Opportunity.prototype.create function");
	var valuestable = this.getValuesTable(true);
	Opportunity.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
Opportunity.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  Opportunity.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "Opportunity.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"Opportunity",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  Opportunity.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = Opportunity.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of Opportunity in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].AccountId = "AccountId_0";
*		valuesArray[0].Amount = "Amount_0";
*		valuesArray[0].BATCH_SIZE = "BATCH_SIZE_0";
*		valuesArray[0].CampaignId = "CampaignId_0";
*		valuesArray[0].CloseDate = "CloseDate_0";
*		valuesArray[0].CreatedById = "CreatedById_0";
*		valuesArray[0].CreatedDate = "CreatedDate_0";
*		valuesArray[0].CurrentGenerators__c = "CurrentGenerators__c_0";
*		valuesArray[0].DeliveryInstallationStatus__c = "DeliveryInstallationStatus__c_0";
*		valuesArray[0].Description = "Description_0";
*		valuesArray[0].ExpectedRevenue = "ExpectedRevenue_0";
*		valuesArray[0].Fiscal = "Fiscal_0";
*		valuesArray[0].FiscalQuarter = "FiscalQuarter_0";
*		valuesArray[0].FiscalYear = "FiscalYear_0";
*		valuesArray[0].ForecastCategory = "ForecastCategory_0";
*		valuesArray[0].ForecastCategoryName = "ForecastCategoryName_0";
*		valuesArray[0].HasOpportunityLineItem = true;
*		valuesArray[0].IsClosed = true;
*		valuesArray[0].IsPrivate = true;
*		valuesArray[0].IsWon = true;
*		valuesArray[0].LastActivityDate = "LastActivityDate_0";
*		valuesArray[0].LastModifiedById = "LastModifiedById_0";
*		valuesArray[0].LastReferencedDate = "LastReferencedDate_0";
*		valuesArray[0].LastViewedDate = "LastViewedDate_0";
*		valuesArray[0].LeadSource = "LeadSource_0";
*		valuesArray[0].MainCompetitors__c = "MainCompetitors__c_0";
*		valuesArray[0].Name = "Name_0";
*		valuesArray[0].NextStep = "NextStep_0";
*		valuesArray[0].OrderNumber__c = "OrderNumber__c_0";
*		valuesArray[0].OwnerId = "OwnerId_0";
*		valuesArray[0].Pricebook2Id = "Pricebook2Id_0";
*		valuesArray[0].Probability = "Probability_0";
*		valuesArray[0].START_TIME = "START_TIME_0";
*		valuesArray[0].StageName = "StageName_0";
*		valuesArray[0].SystemModstamp = "SystemModstamp_0";
*		valuesArray[0].TotalOpportunityQuantity = "TotalOpportunityQuantity_0";
*		valuesArray[0].TrackingNumber__c = "TrackingNumber__c_0";
*		valuesArray[0].Type = "Type_0";
*		valuesArray[0].errorCode = "errorCode_0";
*		valuesArray[0].message = "message_0";
*		valuesArray[0].moreRecordsAvailable = "moreRecordsAvailable_0";
*		valuesArray[0].queryIdentifier = "queryIdentifier_0";
*		valuesArray[0].queryString = "queryString_0";
*		valuesArray[1] = {};
*		valuesArray[1].AccountId = "AccountId_1";
*		valuesArray[1].Amount = "Amount_1";
*		valuesArray[1].BATCH_SIZE = "BATCH_SIZE_1";
*		valuesArray[1].CampaignId = "CampaignId_1";
*		valuesArray[1].CloseDate = "CloseDate_1";
*		valuesArray[1].CreatedById = "CreatedById_1";
*		valuesArray[1].CreatedDate = "CreatedDate_1";
*		valuesArray[1].CurrentGenerators__c = "CurrentGenerators__c_1";
*		valuesArray[1].DeliveryInstallationStatus__c = "DeliveryInstallationStatus__c_1";
*		valuesArray[1].Description = "Description_1";
*		valuesArray[1].ExpectedRevenue = "ExpectedRevenue_1";
*		valuesArray[1].Fiscal = "Fiscal_1";
*		valuesArray[1].FiscalQuarter = "FiscalQuarter_1";
*		valuesArray[1].FiscalYear = "FiscalYear_1";
*		valuesArray[1].ForecastCategory = "ForecastCategory_1";
*		valuesArray[1].ForecastCategoryName = "ForecastCategoryName_1";
*		valuesArray[1].HasOpportunityLineItem = true;
*		valuesArray[1].IsClosed = true;
*		valuesArray[1].IsPrivate = true;
*		valuesArray[1].IsWon = true;
*		valuesArray[1].LastActivityDate = "LastActivityDate_1";
*		valuesArray[1].LastModifiedById = "LastModifiedById_1";
*		valuesArray[1].LastReferencedDate = "LastReferencedDate_1";
*		valuesArray[1].LastViewedDate = "LastViewedDate_1";
*		valuesArray[1].LeadSource = "LeadSource_1";
*		valuesArray[1].MainCompetitors__c = "MainCompetitors__c_1";
*		valuesArray[1].Name = "Name_1";
*		valuesArray[1].NextStep = "NextStep_1";
*		valuesArray[1].OrderNumber__c = "OrderNumber__c_1";
*		valuesArray[1].OwnerId = "OwnerId_1";
*		valuesArray[1].Pricebook2Id = "Pricebook2Id_1";
*		valuesArray[1].Probability = "Probability_1";
*		valuesArray[1].START_TIME = "START_TIME_1";
*		valuesArray[1].StageName = "StageName_1";
*		valuesArray[1].SystemModstamp = "SystemModstamp_1";
*		valuesArray[1].TotalOpportunityQuantity = "TotalOpportunityQuantity_1";
*		valuesArray[1].TrackingNumber__c = "TrackingNumber__c_1";
*		valuesArray[1].Type = "Type_1";
*		valuesArray[1].errorCode = "errorCode_1";
*		valuesArray[1].message = "message_1";
*		valuesArray[1].moreRecordsAvailable = "moreRecordsAvailable_1";
*		valuesArray[1].queryIdentifier = "queryIdentifier_1";
*		valuesArray[1].queryString = "queryString_1";
*		valuesArray[2] = {};
*		valuesArray[2].AccountId = "AccountId_2";
*		valuesArray[2].Amount = "Amount_2";
*		valuesArray[2].BATCH_SIZE = "BATCH_SIZE_2";
*		valuesArray[2].CampaignId = "CampaignId_2";
*		valuesArray[2].CloseDate = "CloseDate_2";
*		valuesArray[2].CreatedById = "CreatedById_2";
*		valuesArray[2].CreatedDate = "CreatedDate_2";
*		valuesArray[2].CurrentGenerators__c = "CurrentGenerators__c_2";
*		valuesArray[2].DeliveryInstallationStatus__c = "DeliveryInstallationStatus__c_2";
*		valuesArray[2].Description = "Description_2";
*		valuesArray[2].ExpectedRevenue = "ExpectedRevenue_2";
*		valuesArray[2].Fiscal = "Fiscal_2";
*		valuesArray[2].FiscalQuarter = "FiscalQuarter_2";
*		valuesArray[2].FiscalYear = "FiscalYear_2";
*		valuesArray[2].ForecastCategory = "ForecastCategory_2";
*		valuesArray[2].ForecastCategoryName = "ForecastCategoryName_2";
*		valuesArray[2].HasOpportunityLineItem = true;
*		valuesArray[2].IsClosed = true;
*		valuesArray[2].IsPrivate = true;
*		valuesArray[2].IsWon = true;
*		valuesArray[2].LastActivityDate = "LastActivityDate_2";
*		valuesArray[2].LastModifiedById = "LastModifiedById_2";
*		valuesArray[2].LastReferencedDate = "LastReferencedDate_2";
*		valuesArray[2].LastViewedDate = "LastViewedDate_2";
*		valuesArray[2].LeadSource = "LeadSource_2";
*		valuesArray[2].MainCompetitors__c = "MainCompetitors__c_2";
*		valuesArray[2].Name = "Name_2";
*		valuesArray[2].NextStep = "NextStep_2";
*		valuesArray[2].OrderNumber__c = "OrderNumber__c_2";
*		valuesArray[2].OwnerId = "OwnerId_2";
*		valuesArray[2].Pricebook2Id = "Pricebook2Id_2";
*		valuesArray[2].Probability = "Probability_2";
*		valuesArray[2].START_TIME = "START_TIME_2";
*		valuesArray[2].StageName = "StageName_2";
*		valuesArray[2].SystemModstamp = "SystemModstamp_2";
*		valuesArray[2].TotalOpportunityQuantity = "TotalOpportunityQuantity_2";
*		valuesArray[2].TrackingNumber__c = "TrackingNumber__c_2";
*		valuesArray[2].Type = "Type_2";
*		valuesArray[2].errorCode = "errorCode_2";
*		valuesArray[2].message = "message_2";
*		valuesArray[2].moreRecordsAvailable = "moreRecordsAvailable_2";
*		valuesArray[2].queryIdentifier = "queryIdentifier_2";
*		valuesArray[2].queryString = "queryString_2";
*		Opportunity.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
Opportunity.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering Opportunity.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var isProperData = true;
	var arrayLen = 0;
	var errorInfo = [];
	var arrayLength = valuesArray.length;
	var errObject = null;
	var isReferentialIntegrityFailure = false;
	var errMsg = null;
	if(kony.sync.enableORMValidations){
		var newValuesArray = [];

		//column level validations
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var valuestable = valuesArray[i];
			if(kony.sync.attributeValidation(valuestable,"Opportunity",errorcallback,true)===false){
				return;
			}

			newValuesArray[i] = valuestable;
		}
		valuesArray = newValuesArray;
		var connection = kony.sync.getConnectionOnly(dbname, dbname);
		kony.sync.startTransaction(connection, checkIntegrity, transactionSuccessCallback, transactionErrorCallback);
		var isError = false;
	}
	else{
		//copying by value
		var newValuesArray = [];
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			newValuesArray[i] = kony.sync.CreateCopy(valuesArray[i]);
		}
		valuesArray = newValuesArray;
		kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
	}

	function transactionErrorCallback(){
		if(isError==true){
			//Statement error has occurred
				kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
		}
		else{
			//Transaction error has occurred
				kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
		}
	}

	function transactionSuccessCallback(){
		sync.log.trace("Entering  Opportunity.createAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massInsert(dbname, tbname, valuesArray, successcallback, errorcallback, markForUpload);
		}
		else{
			if(isReferentialIntegrityFailure){
				kony.sync.verifyAndCallClosure(errorcallback, errObject);
			}
		}
	}
	
	//foreign key constraints validations
	function checkIntegrity(tx){
		sync.log.trace("Entering  Opportunity.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = Opportunity.getRelationshipMap(relationshipMap,valuesArray[i]);
			errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
			if(errObject===false){
				isError = true;
				return; 
			}
			if(errObject!==true){
				isError = true;
				isReferentialIntegrityFailure = true;
				return;
			}
		}
	}
};
/************************************************************************************
* Updates Opportunity using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Opportunity.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  Opportunity.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	Opportunity.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
Opportunity.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  Opportunity.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(Opportunity.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"Opportunity",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = Opportunity.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates Opportunity(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Opportunity.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering Opportunity.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"Opportunity",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  Opportunity.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, Opportunity.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = Opportunity.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, Opportunity.getPKTable());
	}
};

/************************************************************************************
* Updates Opportunity(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.AccountId = "AccountId_updated0";
*		inputArray[0].changeSet.Amount = "Amount_updated0";
*		inputArray[0].changeSet.BATCH_SIZE = "BATCH_SIZE_updated0";
*		inputArray[0].changeSet.CampaignId = "CampaignId_updated0";
*		inputArray[0].whereClause = "where Id = '0'";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.AccountId = "AccountId_updated1";
*		inputArray[1].changeSet.Amount = "Amount_updated1";
*		inputArray[1].changeSet.BATCH_SIZE = "BATCH_SIZE_updated1";
*		inputArray[1].changeSet.CampaignId = "CampaignId_updated1";
*		inputArray[1].whereClause = "where Id = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.AccountId = "AccountId_updated2";
*		inputArray[2].changeSet.Amount = "Amount_updated2";
*		inputArray[2].changeSet.BATCH_SIZE = "BATCH_SIZE_updated2";
*		inputArray[2].changeSet.CampaignId = "CampaignId_updated2";
*		inputArray[2].whereClause = "where Id = '2'";
*		Opportunity.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
Opportunity.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering Opportunity.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "b972d075-dd15-4910-ac1c-9edda03ea089";
	var tbname = "Opportunity";
	var isError = false;
	var errObject = null;
	if(markForUpload == false || markForUpload == "false"){
		markForUpload="false"
	}
	else{
		markForUpload="true"
	}
	if((kony.sync.enableORMValidations)){

		var newInputArray = [];
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var v = inputArray[i];
			var valuestable = v.changeSet;
			var isEmpty = true;
			for(var key in valuestable){
				isEmpty = false;
				break;
			}
			if(isEmpty){
				errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeNullValue,kony.sync.getErrorMessage(kony.sync.errorCodeNullValue)));
				return;
			}
			var wcs = v.whereClause;
			var twcs = wcs;
			if(kony.sync.attributeValidation(valuestable,"Opportunity",errorcallback,false)===false){
				return;
			}

			newInputArray[i] = [];
			newInputArray[i].changeSet = valuestable;
			newInputArray[i].whereClause = wcs;
		}
		inputArray = newInputArray;
		var connection = kony.sync.getConnectionOnly(dbname, dbname);
		kony.sync.startTransaction(connection, checkIntegrity, transactionSuccessCallback, transactionErrorCallback);

	}
	else{
		//copying by value
		var newInputArray = [];
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
		    var v = inputArray[i];
		    newInputArray[i] = kony.sync.CreateCopy(v);
		}
		inputArray = newInputArray;
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, Opportunity.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  Opportunity.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, Opportunity.getPKTable());
		}
	}

	function transactionErrorCallback(){
		if(errObject===false){
			//Sql statement error has occcurred
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
			
		}
		else if(errObject!==null){
			// Referential integrity error has occurred
			kony.sync.verifyAndCallClosure(errorcallback, errObject);
		}
		else{
			//Transaction error has occurred
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodeTransaction, kony.sync.getErrorMessage(kony.sync.errorCodeTransaction), null));
		}
	}
	//foreign key constraints validations
	function checkIntegrity(tx){
		sync.log.trace("Entering  Opportunity.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = Opportunity.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
			sync.log.debug("Relationship Map for Integrity check created:", relationshipMap);
			errObject = kony.sync.checkIntegrityinTransaction(tx, relationshipMap, null);
			if(errObject===false){
				isError = true;
				return; 
			}
			if(errObject!==true){
				isError = true;
				kony.sync.rollbackTransaction(tx);
				return;
			}
		}
	}


}
/************************************************************************************
* Deletes Opportunity using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
Opportunity.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Opportunity.prototype.deleteByPK function");
	var pks = this.getPKTable();
	Opportunity.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Opportunity.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering Opportunity.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(Opportunity.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function OpportunityTransactionCallback(tx){
		sync.log.trace("Entering Opportunity.deleteByPK->Opportunity_PKPresent successcallback");
		record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(record===false){
			isError = true;
			return;
		}
		if (null !== record) {
		}else{
			pkNotFound = true;
		}
		var deletedRows = kony.sync.remove(tx, tbname, wcs, false, markForUpload, null);
			if(deletedRows === false){
				isError = true;
			}
	}
	
	function OpportunityErrorCallback(){
		sync.log.error("Entering Opportunity.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function OpportunitySuccessCallback(){
		sync.log.trace("Entering Opportunity.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering Opportunity.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, OpportunityTransactionCallback, OpportunitySuccessCallback, OpportunityErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes Opportunity(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. Opportunity.remove("where AccountId like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
Opportunity.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering Opportunity.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Opportunity_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Opportunity_removeSuccess(){
		sync.log.trace("Entering Opportunity.remove->Opportunity_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering Opportunity.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering Opportunity.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Opportunity_removeTransactioncallback, Opportunity_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes Opportunity using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
Opportunity.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Opportunity.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	Opportunity.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
Opportunity.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering Opportunity.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(Opportunity.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function OpportunityTransactionCallback(tx){
		sync.log.trace("Entering Opportunity.removeDeviceInstanceByPK -> OpportunityTransactionCallback");
		var record = kony.sync.getOriginalRow(tx, tbname, wcs, errorcallback);
		if(null !== record && false !=record) {
			deletedRows = kony.sync.remove(tx, tbname, wcs, true, null, null);
			if(deletedRows === false){
				isError = true;
			}
		}else{
			pkNotFound = true;
		}
	}
	
	function OpportunityErrorCallback(){
		sync.log.error("Entering Opportunity.removeDeviceInstanceByPK -> OpportunityErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function OpportunitySuccessCallback(){
		sync.log.trace("Entering Opportunity.removeDeviceInstanceByPK -> OpportunitySuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering Opportunity.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, OpportunityTransactionCallback, OpportunitySuccessCallback, OpportunityErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes Opportunity(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
Opportunity.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Opportunity.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Opportunity_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Opportunity_removeSuccess(){
		sync.log.trace("Entering Opportunity.remove->Opportunity_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering Opportunity.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering Opportunity.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Opportunity_removeTransactioncallback, Opportunity_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves Opportunity using primary key from the local Database. 
*************************************************************************************/
Opportunity.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Opportunity.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	Opportunity.getAllDetailsByPK(pks,successcallback,errorcallback);
};
Opportunity.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering Opportunity.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	var wcs = [];
	if(Opportunity.pkCheck(pks,wcs,errorcallback,"searching")===false){
		return;
	}
	twcs = kony.sync.CreateCopy(wcs);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, wcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	function mySuccCallback(res){
		sync.log.trace("Entering Opportunity.getAllDetailsByPK-> success callback function");
		successcallback(Opportunity.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves Opportunity(s) using where clause from the local Database. 
* e.g. Opportunity.find("where AccountId like 'A%'", successcallback,errorcallback);
*************************************************************************************/
Opportunity.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Opportunity.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Opportunity.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of Opportunity with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Opportunity.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering Opportunity.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	Opportunity.markForUploadbyPK(pks, successcallback, errorcallback);
};
Opportunity.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Opportunity.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(Opportunity.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
		return;
	}

	function markRecordForUpload(tx, record){
		var versionMapMain = [];
		versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname);
					kony.sync.qb_set(query,versionMapMain);
					kony.sync.qb_where(query, wcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		return kony.sync.executeSql(tx, sql, params);		
	}
	
	function markRecordForUploadHistory(tx, record){
		var versionMap = [];
		versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		var twcs = [];
		twcs = wcs;
		kony.table.insert(twcs,{key : kony.sync.historyTableChangeTypeColumn, value : record[kony.sync.historyTableChangeTypeColumn], optype : "EQ",comptype : "AND"});
		versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
					kony.sync.qb_set(query,versionMap);
					kony.sync.qb_where(query, twcs);
		kony.table.remove(twcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		return kony.sync.executeSql(tx, sql, params);
	}
	
	function single_transaction_callback (tx){
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_select(query, [kony.sync.historyTableChangeTypeColumn]);
					kony.sync.qb_from(query, tbname);
					kony.sync.qb_where(query, wcs);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0];
		var params = query_compile[1];
		var resultSet = kony.sync.executeSql(tx, sql, params);
		if(resultSet === false){
			isError = true;
			return;
		}

		var num_records = resultSet.rows.length;
		if(num_records > 0){
			recordsFound = true;
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, 0);
			var changeType = record[kony.sync.mainTableChangeTypeColumn];
			if(!kony.sync.isNullOrUndefined(changeType) && kony.string.startsWith(""+changeType,"9")){
				recordsMarkedForUpload = 1;
				if(markRecordForUpload(tx, record) === false){
					isError = true;
					return;
				}
			}
		}
					
				
		var query1 =kony.sync.qb_createQuery();
					kony.sync.qb_select(query1, [kony.sync.historyTableChangeTypeColumn]);
					kony.sync.qb_from(query1, tbname + kony.sync.historyTableName);
					kony.sync.qb_where(query1, wcs);
		var query1_compile = kony.sync.qb_compile(query1);
		var sql1 = query1_compile[0];
		var params1 = query1_compile[1];
		var resultSet1 = kony.sync.executeSql (tx, sql1, params1);
		if(resultSet1!==false){
			var num_records = resultSet1.rows.length;
			for(var i = 0; i <= num_records - 1; i++ ){
				var record = kony.db.sqlResultsetRowItem(tx, resultSet1, i);
				if(markRecordForUploadHistory(tx, record) === false){
					isError = true;
					return;
				}
				recordsFound = true;
			}
		}
		else{
			isError = true;
		}
	}
	function single_transaction_success_callback(){
		if(recordsFound === true){
			kony.sync.verifyAndCallClosure(successcallback , {count:recordsMarkedForUpload});
		}
		else{
			kony.sync.pkNotFoundErrCallback(errorcallback, tbname);
		}
	}
	
	function single_transaction_error_callback(res){
		if (!isError) {
			kony.sync.showTransactionError(errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(connection != null){
		kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
	}
};

/************************************************************************************
* Marks instance(s) of Opportunity matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Opportunity.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Opportunity.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	var isError = false;
	var num_records_main = 0;
	wcs = kony.sync.validateWhereClause(wcs);
	if(!kony.sync.isNull(wcs) && !kony.sync.isEmptyString(wcs)) {
		wcs = wcs + " and " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
	}else{	
		wcs = "where " + kony.sync.historyTableChangeTypeColumn + " like '9%'";
	}
	
	function markRecordForUpload(tx, record){
		var versionMapMain = [];
		versionMapMain[kony.sync.mainTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		versionMapMain[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname);
					kony.sync.qb_set(query,versionMapMain);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0] + " " + wcs;
		var params = query_compile[1];
		if(kony.sync.executeSql(tx, sql, params) === false){
			return false;
		}
	}
	
	function markRecordForUploadHistory(tx, record){
		var versionMap = [];
		versionMap[kony.sync.historyTableChangeTypeColumn] = kony.sync.getChangeTypeForUploadTrue(record[kony.sync.historyTableChangeTypeColumn]);
		var scopename = kony.sync.scopes.syncTableScopeDic[tbname];
		var versionNo = kony.sync.getseqnumber(tx, scopename);
		if(versionNo === false){
			return false;
		}
		var twcs = "";
		twcs = wcs;
		twcs = twcs + " AND " + kony.sync.historyTableChangeTypeColumn + " = " + record[kony.sync.historyTableChangeTypeColumn];
		versionMap[kony.sync.historyTableSyncVersionColumn] = versionNo.versionnumber;
		
		var query = kony.sync.qb_createQuery();
					kony.sync.qb_update(query, tbname + kony.sync.historyTableName);
					kony.sync.qb_set(query,versionMap);
		var query_compile = kony.sync.qb_compile(query);
		var sql = query_compile[0]  + " " + twcs;
		var params = query_compile[1];
		if(kony.sync.executeSql(tx, sql, params) === false){
			return false;
		}
	}
	
	function single_transaction_callback (tx){
		sync.log.trace("Entering Opportunity.markForUpload->single_transaction_callback");
		//updating main table
		var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from \"" + tbname + "\" " + wcs ;
		var resultSet = kony.sync.executeSql (tx, sql, null);
		if(resultSet === false){
			isError = true;
			return;
		}
		
		num_records_main = resultSet.rows.length;
		for(var i = 0; i < num_records_main; i++ ){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUpload(tx, record) === false){
				isError = true;
				return;
			}
		}
		
		//updating history table
		var sql = "select " + kony.sync.historyTableChangeTypeColumn + " from " + tbname + kony.sync.historyTableName + " " + wcs;
		var resultSet = kony.sync.executeSql (tx, sql, null);
		if(resultSet === false){
			isError = true;
			return;
		}

		var num_records = resultSet.rows.length;
		for ( var i = 0; i <= num_records - 1; i++ ){
			var record = kony.db.sqlResultsetRowItem(tx, resultSet, i);
			if(markRecordForUploadHistory(tx, record)=== false){
				isError = true;
				return;
			}
		}
	}
	
	function single_transaction_success_callback(){
		sync.log.trace("Entering Opportunity.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering Opportunity.markForUpload->single_transaction_error_callback");
		if(!isError) {
			kony.sync.showTransactionError(errorcallback);
		}else{
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(connection != null){
		kony.sync.startTransaction(connection, single_transaction_callback, single_transaction_success_callback, single_transaction_error_callback);
	}
};

/************************************************************************************
* Retrieves instance(s) of Opportunity pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
Opportunity.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Opportunity.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var sql;
	if(typeof(wcs) === "string" && wcs != null){
		wcs = kony.sync.validateWhereClause(wcs);
		sql = "select * from \"" + tbname + "\" "+ wcs + " and " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	}else{
		errorcallback = successcallback;
		successcallback = wcs;
		sql = "select * from \"" + tbname + "\" WHERE " + kony.sync.mainTableChangeTypeColumn + " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" = "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Opportunity.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, Opportunity.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Opportunity pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
Opportunity.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering Opportunity.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Opportunity.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, Opportunity.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Opportunity deferred for upload.
*************************************************************************************/
Opportunity.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering Opportunity.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	var sql;
	if(typeof(wcs) === "string" && wcs != null ){
		wcs = kony.sync.validateWhereClause(wcs);
		sql = "select * from \"" + tbname +  "\" " + wcs + " and " + kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'";
	}else{
		errorcallback = successcallback;
		successcallback = wcs;
		sql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableChangeTypeColumn+" LIKE '9%'"; 
	}
	
	kony.sync.single_select_execute(dbname, sql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Opportunity.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, Opportunity.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to Opportunity in local database to last synced state
*************************************************************************************/
Opportunity.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering Opportunity.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Opportunity.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to Opportunity's record with given primary key in local 
* database to last synced state
*************************************************************************************/
Opportunity.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Opportunity.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	Opportunity.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
Opportunity.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Opportunity.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	var wcs = [];
	if(Opportunity.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Opportunity.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering Opportunity.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether Opportunity's record  
* with given primary key got deferred in last sync
*************************************************************************************/
Opportunity.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  Opportunity.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	Opportunity.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
Opportunity.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Opportunity.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	var wcs = [] ;
	var flag;
	if(Opportunity.pkCheck(pks,wcs,errorcallback,"selecting")===false){
		return;
	}
	var twcs = [];
	twcs = kony.sync.CreateCopy(wcs);
	kony.table.insert(twcs, {
			key : kony.sync.mainTableChangeTypeColumn,
			value : "9%",
			optype : "LIKE",
			comptype : "AND"
		});
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, twcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Opportunity.isRecordDeferredForUpload->successcallback function");
		if(res.length === 1){
			flag = true;
		}
		else{
			flag = false;
		}
		kony.sync.verifyAndCallClosure(successcallback, {deferred:flag});
	}
};

/************************************************************************************
* isRecordPendingForUpload returns true or false depending on whether Opportunity's record  
* with given primary key is pending for upload
*************************************************************************************/
Opportunity.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  Opportunity.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	Opportunity.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
Opportunity.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Opportunity.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Opportunity.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Opportunity.getTableName();
	var wcs = [] ;
	var flag;
	if(Opportunity.pkCheck(pks,wcs,errorcallback,"selecting")===false){
		return;
	}
	var twcs = [];
	twcs = kony.sync.CreateCopy(wcs);
	kony.table.insert(twcs, {
			key : kony.sync.mainTableChangeTypeColumn,
			value : "9%",
			optype : "NOT LIKE",
			comptype : "AND"
		});
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_where(query, twcs);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];
	kony.sync.single_select_execute(dbname, sql, params, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Opportunity.isRecordPendingForUpload->successcallback function");
		if(res.length === 1){
			flag = true;
		}
		else{
			flag = false;
		}
		kony.sync.verifyAndCallClosure(successcallback, {pending:flag});
	}
};



/************************************************************************************
* Start of helper functions used internally, not to be used as ORMs
*************************************************************************************/

//Deletes all the dependant tables in the relationship tables.Need to pass transaction handler as input
Opportunity.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering Opportunity.removeCascade function");
	var tbname = Opportunity.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	function removeCascadeChildren(){
	}
	if(isCascade){
		if(removeCascadeChildren()===false){
			return false;
		}
		if(kony.sync.deleteBatch(tx, tbname, wcs, isLocal,markForUpload, null)===false){
			return false;
		}
		return true;
	}else{
		var sql = "select * from \"" + tbname + "\" " + wcs;
		var resultSet = kony.sync.executeSql(tx, sql, null);
		if(resultSet===false){
			return false;
		}	
		var num_records = resultSet.rows.length;
		if(num_records === 0){
			return true;
		}else{
			sync.log.error(kony.sync.getReferetialIntegrityDeleteErrMessg(tbname,tbname,tbname,parentTable));
			errorcallback(kony.sync.getErrorTable(kony.sync.errorCodeReferentialIntegrity,kony.sync.getReferetialIntegrityDeleteErrMessg(tbname,tbname,tbname,parentTable)));
			return false;
		}
	}
};


Opportunity.convertTableToObject = function(res){
	sync.log.trace("Entering Opportunity.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new Opportunity();
			obj.AccountId = res[i].AccountId;
			obj.Amount = res[i].Amount;
			obj.BATCH_SIZE = res[i].BATCH_SIZE;
			obj.CampaignId = res[i].CampaignId;
			obj.CloseDate = res[i].CloseDate;
			obj.CreatedById = res[i].CreatedById;
			obj.CreatedDate = res[i].CreatedDate;
			obj.CurrentGenerators__c = res[i].CurrentGenerators__c;
			obj.DeliveryInstallationStatus__c = res[i].DeliveryInstallationStatus__c;
			obj.Description = res[i].Description;
			obj.ExpectedRevenue = res[i].ExpectedRevenue;
			obj.Fiscal = res[i].Fiscal;
			obj.FiscalQuarter = res[i].FiscalQuarter;
			obj.FiscalYear = res[i].FiscalYear;
			obj.ForecastCategory = res[i].ForecastCategory;
			obj.ForecastCategoryName = res[i].ForecastCategoryName;
			obj.HasOpportunityLineItem = res[i].HasOpportunityLineItem;
			obj.Id = res[i].Id;
			obj.IsClosed = res[i].IsClosed;
			obj.IsDeleted = res[i].IsDeleted;
			obj.IsPrivate = res[i].IsPrivate;
			obj.IsWon = res[i].IsWon;
			obj.LastActivityDate = res[i].LastActivityDate;
			obj.LastModifiedById = res[i].LastModifiedById;
			obj.LastModifiedDate = res[i].LastModifiedDate;
			obj.LastReferencedDate = res[i].LastReferencedDate;
			obj.LastViewedDate = res[i].LastViewedDate;
			obj.LeadSource = res[i].LeadSource;
			obj.MainCompetitors__c = res[i].MainCompetitors__c;
			obj.Name = res[i].Name;
			obj.NextStep = res[i].NextStep;
			obj.OrderNumber__c = res[i].OrderNumber__c;
			obj.OwnerId = res[i].OwnerId;
			obj.Pricebook2Id = res[i].Pricebook2Id;
			obj.Probability = res[i].Probability;
			obj.START_TIME = res[i].START_TIME;
			obj.StageName = res[i].StageName;
			obj.SystemModstamp = res[i].SystemModstamp;
			obj.TotalOpportunityQuantity = res[i].TotalOpportunityQuantity;
			obj.TrackingNumber__c = res[i].TrackingNumber__c;
			obj.Type = res[i].Type;
			obj.errorCode = res[i].errorCode;
			obj.message = res[i].message;
			obj.moreRecordsAvailable = res[i].moreRecordsAvailable;
			obj.queryIdentifier = res[i].queryIdentifier;
			obj.queryString = res[i].queryString;
			obj.markForUpload = (Math.floor(res[i].konysyncchangetype/10)==9)? false:true;
			objMap[i] = obj;
		}
	}
	return objMap;
};

Opportunity.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering Opportunity.filterAttributes function");
	var attributeTable = {};
	attributeTable.AccountId = "AccountId";
	attributeTable.Amount = "Amount";
	attributeTable.BATCH_SIZE = "BATCH_SIZE";
	attributeTable.CampaignId = "CampaignId";
	attributeTable.CloseDate = "CloseDate";
	attributeTable.CreatedById = "CreatedById";
	attributeTable.CreatedDate = "CreatedDate";
	attributeTable.CurrentGenerators__c = "CurrentGenerators__c";
	attributeTable.DeliveryInstallationStatus__c = "DeliveryInstallationStatus__c";
	attributeTable.Description = "Description";
	attributeTable.ExpectedRevenue = "ExpectedRevenue";
	attributeTable.Fiscal = "Fiscal";
	attributeTable.FiscalQuarter = "FiscalQuarter";
	attributeTable.FiscalYear = "FiscalYear";
	attributeTable.ForecastCategory = "ForecastCategory";
	attributeTable.ForecastCategoryName = "ForecastCategoryName";
	attributeTable.HasOpportunityLineItem = "HasOpportunityLineItem";
	attributeTable.Id = "Id";
	attributeTable.IsClosed = "IsClosed";
	attributeTable.IsPrivate = "IsPrivate";
	attributeTable.IsWon = "IsWon";
	attributeTable.LastActivityDate = "LastActivityDate";
	attributeTable.LastModifiedById = "LastModifiedById";
	attributeTable.LastReferencedDate = "LastReferencedDate";
	attributeTable.LastViewedDate = "LastViewedDate";
	attributeTable.LeadSource = "LeadSource";
	attributeTable.MainCompetitors__c = "MainCompetitors__c";
	attributeTable.Name = "Name";
	attributeTable.NextStep = "NextStep";
	attributeTable.OrderNumber__c = "OrderNumber__c";
	attributeTable.OwnerId = "OwnerId";
	attributeTable.Pricebook2Id = "Pricebook2Id";
	attributeTable.Probability = "Probability";
	attributeTable.START_TIME = "START_TIME";
	attributeTable.StageName = "StageName";
	attributeTable.SystemModstamp = "SystemModstamp";
	attributeTable.TotalOpportunityQuantity = "TotalOpportunityQuantity";
	attributeTable.TrackingNumber__c = "TrackingNumber__c";
	attributeTable.Type = "Type";
	attributeTable.errorCode = "errorCode";
	attributeTable.message = "message";
	attributeTable.moreRecordsAvailable = "moreRecordsAvailable";
	attributeTable.queryIdentifier = "queryIdentifier";
	attributeTable.queryString = "queryString";

	var PKTable = {};
	PKTable.Id = {}
	PKTable.Id.name = "Id";
	PKTable.Id.isAutoGen = true;
	var newvaluestable = {};
	for (var k in valuestable){
		var v = valuestable[k];
		if(kony.sync.isNull(attributeTable[k])) { 
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject Opportunity. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject Opportunity. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject Opportunity. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
			}else{
				newvaluestable[k] = v;
			}
		}
		else{
			newvaluestable[k] = v;
		}
	}
	return newvaluestable;
};

Opportunity.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering Opportunity.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = Opportunity.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

Opportunity.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering Opportunity.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.AccountId = this.AccountId;
	valuesTable.Amount = this.Amount;
	valuesTable.BATCH_SIZE = this.BATCH_SIZE;
	valuesTable.CampaignId = this.CampaignId;
	valuesTable.CloseDate = this.CloseDate;
	valuesTable.CreatedById = this.CreatedById;
	valuesTable.CreatedDate = this.CreatedDate;
	valuesTable.CurrentGenerators__c = this.CurrentGenerators__c;
	valuesTable.DeliveryInstallationStatus__c = this.DeliveryInstallationStatus__c;
	valuesTable.Description = this.Description;
	valuesTable.ExpectedRevenue = this.ExpectedRevenue;
	valuesTable.Fiscal = this.Fiscal;
	valuesTable.FiscalQuarter = this.FiscalQuarter;
	valuesTable.FiscalYear = this.FiscalYear;
	valuesTable.ForecastCategory = this.ForecastCategory;
	valuesTable.ForecastCategoryName = this.ForecastCategoryName;
	valuesTable.HasOpportunityLineItem = this.HasOpportunityLineItem;
	if(isInsert===true){
		valuesTable.Id = this.Id;
	}
	valuesTable.IsClosed = this.IsClosed;
	valuesTable.IsPrivate = this.IsPrivate;
	valuesTable.IsWon = this.IsWon;
	valuesTable.LastActivityDate = this.LastActivityDate;
	valuesTable.LastModifiedById = this.LastModifiedById;
	valuesTable.LastReferencedDate = this.LastReferencedDate;
	valuesTable.LastViewedDate = this.LastViewedDate;
	valuesTable.LeadSource = this.LeadSource;
	valuesTable.MainCompetitors__c = this.MainCompetitors__c;
	valuesTable.Name = this.Name;
	valuesTable.NextStep = this.NextStep;
	valuesTable.OrderNumber__c = this.OrderNumber__c;
	valuesTable.OwnerId = this.OwnerId;
	valuesTable.Pricebook2Id = this.Pricebook2Id;
	valuesTable.Probability = this.Probability;
	valuesTable.START_TIME = this.START_TIME;
	valuesTable.StageName = this.StageName;
	valuesTable.SystemModstamp = this.SystemModstamp;
	valuesTable.TotalOpportunityQuantity = this.TotalOpportunityQuantity;
	valuesTable.TrackingNumber__c = this.TrackingNumber__c;
	valuesTable.Type = this.Type;
	valuesTable.errorCode = this.errorCode;
	valuesTable.message = this.message;
	valuesTable.moreRecordsAvailable = this.moreRecordsAvailable;
	valuesTable.queryIdentifier = this.queryIdentifier;
	valuesTable.queryString = this.queryString;
	return valuesTable;
};

Opportunity.prototype.getPKTable = function(){
	sync.log.trace("Entering Opportunity.prototype.getPKTable function");
	var pkTable = {};
	pkTable.Id = {key:"Id",value:this.Id};
	return pkTable;
};

Opportunity.getPKTable = function(){
	sync.log.trace("Entering Opportunity.getPKTable function");
	var pkTable = [];
	pkTable.push("Id");
	return pkTable;
};

Opportunity.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering Opportunity.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key Id not specified in  " + opName + "  an item in Opportunity");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Id",opName,"Opportunity")));
		return false;	
	}
	else if(kony.sync.isValidJSTable(pks)){
		if(!kony.sync.isNull(pks.Id)){
			if(!kony.sync.isNull(pks.Id.value)){
				wc.key = "Id";
				wc.value = pks.Id.value;
			}
			else{
				wc.key = "Id";
				wc.value = pks.Id;
			}
		}else{
			sync.log.error("Primary Key Id not specified in  " + opName + "  an item in Opportunity");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Id",opName,"Opportunity")));
			return false;
		}
	}
	else{
		wc.key = "Id";
		wc.value = pks;
	}	
	kony.table.insert(wcs,wc);
	return true;
};

Opportunity.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering Opportunity.validateNull function");
	return true;
};

Opportunity.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering Opportunity.validateNullInsert function");
	return true;
};
Opportunity.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering Opportunity.getRelationshipMap function");
	var r1 = {};
	return relationshipMap;
};

Opportunity.getTableName = function(){
	return "Opportunity";
};


// **********************************End Opportunity's helper methods************************