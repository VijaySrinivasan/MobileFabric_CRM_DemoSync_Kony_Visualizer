//****************Sync Version:Sync-GA-6.5.2_v201508271357*******************
// ****************Generated On Thu Jan 21 11:36:09 UTC 2016Account*******************
// **********************************Start Account's helper methods************************
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
* Creates new Account
*************************************************************************************/
Account = function(){
	this.AccountNumber = null;
	this.AccountSource = null;
	this.Active__c = null;
	this.AnnualRevenue = null;
	this.BATCH_SIZE = null;
	this.BillingAddress = null;
	this.BillingCity = null;
	this.BillingCountry = null;
	this.BillingLatitude = null;
	this.BillingLongitude = null;
	this.BillingPostalCode = null;
	this.BillingState = null;
	this.BillingStreet = null;
	this.CleanStatus = null;
	this.CreatedById = null;
	this.CreatedDate = null;
	this.CustomerPriority__c = null;
	this.DandbCompanyId = null;
	this.Description = null;
	this.DunsNumber = null;
	this.Fax = null;
	this.Id = null;
	this.Industry = null;
	this.IsDeleted = null;
	this.Jigsaw = null;
	this.JigsawCompanyId = null;
	this.LastActivityDate = null;
	this.LastModifiedById = null;
	this.LastModifiedDate = null;
	this.LastReferencedDate = null;
	this.LastViewedDate = null;
	this.MasterRecordId = null;
	this.NaicsCode = null;
	this.NaicsDesc = null;
	this.Name = null;
	this.NumberOfEmployees = null;
	this.NumberofLocations__c = null;
	this.OwnerId = null;
	this.Ownership = null;
	this.ParentId = null;
	this.Phone = null;
	this.PhotoUrl = null;
	this.Rating = null;
	this.SLAExpirationDate__c = null;
	this.SLASerialNumber__c = null;
	this.SLA__c = null;
	this.START_TIME = null;
	this.ShippingAddress = null;
	this.ShippingCity = null;
	this.ShippingCountry = null;
	this.ShippingLatitude = null;
	this.ShippingLongitude = null;
	this.ShippingPostalCode = null;
	this.ShippingState = null;
	this.ShippingStreet = null;
	this.Sic = null;
	this.SicDesc = null;
	this.Site = null;
	this.SystemModstamp = null;
	this.TickerSymbol = null;
	this.Tradestyle = null;
	this.Type = null;
	this.UpsellOpportunity__c = null;
	this.Website = null;
	this.YearStarted = null;
	this.errorCode = null;
	this.message = null;
	this.moreRecordsAvailable = null;
	this.queryIdentifier = null;
	this.queryString = null;
	this.markForUpload = true;
};

Account.prototype = {
	get AccountNumber(){
		return this._AccountNumber;
	},
	set AccountNumber(val){
		this._AccountNumber = val;
	},
	get AccountSource(){
		return this._AccountSource;
	},
	set AccountSource(val){
		this._AccountSource = val;
	},
	get Active__c(){
		return this._Active__c;
	},
	set Active__c(val){
		this._Active__c = val;
	},
	get AnnualRevenue(){
		return this._AnnualRevenue;
	},
	set AnnualRevenue(val){
		this._AnnualRevenue = val;
	},
	get BATCH_SIZE(){
		return this._BATCH_SIZE;
	},
	set BATCH_SIZE(val){
		this._BATCH_SIZE = val;
	},
	get BillingAddress(){
		return this._BillingAddress;
	},
	set BillingAddress(val){
		this._BillingAddress = val;
	},
	get BillingCity(){
		return this._BillingCity;
	},
	set BillingCity(val){
		this._BillingCity = val;
	},
	get BillingCountry(){
		return this._BillingCountry;
	},
	set BillingCountry(val){
		this._BillingCountry = val;
	},
	get BillingLatitude(){
		return this._BillingLatitude;
	},
	set BillingLatitude(val){
		this._BillingLatitude = val;
	},
	get BillingLongitude(){
		return this._BillingLongitude;
	},
	set BillingLongitude(val){
		this._BillingLongitude = val;
	},
	get BillingPostalCode(){
		return this._BillingPostalCode;
	},
	set BillingPostalCode(val){
		this._BillingPostalCode = val;
	},
	get BillingState(){
		return this._BillingState;
	},
	set BillingState(val){
		this._BillingState = val;
	},
	get BillingStreet(){
		return this._BillingStreet;
	},
	set BillingStreet(val){
		this._BillingStreet = val;
	},
	get CleanStatus(){
		return this._CleanStatus;
	},
	set CleanStatus(val){
		this._CleanStatus = val;
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
	get CustomerPriority__c(){
		return this._CustomerPriority__c;
	},
	set CustomerPriority__c(val){
		this._CustomerPriority__c = val;
	},
	get DandbCompanyId(){
		return this._DandbCompanyId;
	},
	set DandbCompanyId(val){
		this._DandbCompanyId = val;
	},
	get Description(){
		return this._Description;
	},
	set Description(val){
		this._Description = val;
	},
	get DunsNumber(){
		return this._DunsNumber;
	},
	set DunsNumber(val){
		this._DunsNumber = val;
	},
	get Fax(){
		return this._Fax;
	},
	set Fax(val){
		this._Fax = val;
	},
	get Id(){
		return this._Id;
	},
	set Id(val){
		this._Id = val;
	},
	get Industry(){
		return this._Industry;
	},
	set Industry(val){
		this._Industry = val;
	},
	get IsDeleted(){
		return kony.sync.getBoolean(this._IsDeleted);
	},
	set IsDeleted(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsDeleted in Account.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsDeleted = val;
	},
	get Jigsaw(){
		return this._Jigsaw;
	},
	set Jigsaw(val){
		this._Jigsaw = val;
	},
	get JigsawCompanyId(){
		return this._JigsawCompanyId;
	},
	set JigsawCompanyId(val){
		this._JigsawCompanyId = val;
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
	get MasterRecordId(){
		return this._MasterRecordId;
	},
	set MasterRecordId(val){
		this._MasterRecordId = val;
	},
	get NaicsCode(){
		return this._NaicsCode;
	},
	set NaicsCode(val){
		this._NaicsCode = val;
	},
	get NaicsDesc(){
		return this._NaicsDesc;
	},
	set NaicsDesc(val){
		this._NaicsDesc = val;
	},
	get Name(){
		return this._Name;
	},
	set Name(val){
		this._Name = val;
	},
	get NumberOfEmployees(){
		return this._NumberOfEmployees;
	},
	set NumberOfEmployees(val){
		this._NumberOfEmployees = val;
	},
	get NumberofLocations__c(){
		return this._NumberofLocations__c;
	},
	set NumberofLocations__c(val){
		this._NumberofLocations__c = val;
	},
	get OwnerId(){
		return this._OwnerId;
	},
	set OwnerId(val){
		this._OwnerId = val;
	},
	get Ownership(){
		return this._Ownership;
	},
	set Ownership(val){
		this._Ownership = val;
	},
	get ParentId(){
		return this._ParentId;
	},
	set ParentId(val){
		this._ParentId = val;
	},
	get Phone(){
		return this._Phone;
	},
	set Phone(val){
		this._Phone = val;
	},
	get PhotoUrl(){
		return this._PhotoUrl;
	},
	set PhotoUrl(val){
		this._PhotoUrl = val;
	},
	get Rating(){
		return this._Rating;
	},
	set Rating(val){
		this._Rating = val;
	},
	get SLAExpirationDate__c(){
		return this._SLAExpirationDate__c;
	},
	set SLAExpirationDate__c(val){
		this._SLAExpirationDate__c = val;
	},
	get SLASerialNumber__c(){
		return this._SLASerialNumber__c;
	},
	set SLASerialNumber__c(val){
		this._SLASerialNumber__c = val;
	},
	get SLA__c(){
		return this._SLA__c;
	},
	set SLA__c(val){
		this._SLA__c = val;
	},
	get START_TIME(){
		return this._START_TIME;
	},
	set START_TIME(val){
		this._START_TIME = val;
	},
	get ShippingAddress(){
		return this._ShippingAddress;
	},
	set ShippingAddress(val){
		this._ShippingAddress = val;
	},
	get ShippingCity(){
		return this._ShippingCity;
	},
	set ShippingCity(val){
		this._ShippingCity = val;
	},
	get ShippingCountry(){
		return this._ShippingCountry;
	},
	set ShippingCountry(val){
		this._ShippingCountry = val;
	},
	get ShippingLatitude(){
		return this._ShippingLatitude;
	},
	set ShippingLatitude(val){
		this._ShippingLatitude = val;
	},
	get ShippingLongitude(){
		return this._ShippingLongitude;
	},
	set ShippingLongitude(val){
		this._ShippingLongitude = val;
	},
	get ShippingPostalCode(){
		return this._ShippingPostalCode;
	},
	set ShippingPostalCode(val){
		this._ShippingPostalCode = val;
	},
	get ShippingState(){
		return this._ShippingState;
	},
	set ShippingState(val){
		this._ShippingState = val;
	},
	get ShippingStreet(){
		return this._ShippingStreet;
	},
	set ShippingStreet(val){
		this._ShippingStreet = val;
	},
	get Sic(){
		return this._Sic;
	},
	set Sic(val){
		this._Sic = val;
	},
	get SicDesc(){
		return this._SicDesc;
	},
	set SicDesc(val){
		this._SicDesc = val;
	},
	get Site(){
		return this._Site;
	},
	set Site(val){
		this._Site = val;
	},
	get SystemModstamp(){
		return this._SystemModstamp;
	},
	set SystemModstamp(val){
		this._SystemModstamp = val;
	},
	get TickerSymbol(){
		return this._TickerSymbol;
	},
	set TickerSymbol(val){
		this._TickerSymbol = val;
	},
	get Tradestyle(){
		return this._Tradestyle;
	},
	set Tradestyle(val){
		this._Tradestyle = val;
	},
	get Type(){
		return this._Type;
	},
	set Type(val){
		this._Type = val;
	},
	get UpsellOpportunity__c(){
		return this._UpsellOpportunity__c;
	},
	set UpsellOpportunity__c(val){
		this._UpsellOpportunity__c = val;
	},
	get Website(){
		return this._Website;
	},
	set Website(val){
		this._Website = val;
	},
	get YearStarted(){
		return this._YearStarted;
	},
	set YearStarted(val){
		this._YearStarted = val;
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
* Retrieves all instances of Account SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "AccountNumber";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "AccountSource";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* Account.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
Account.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering Account.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	orderByMap = kony.sync.formOrderByClause("Account",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering Account.getAll->successcallback");
		successcallback(Account.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of Account present in local database.
*************************************************************************************/
Account.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering Account.getAllCount function");
	Account.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of Account using where clause in the local Database
*************************************************************************************/
Account.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering Account.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering Account.getCount->successcallback");
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
* Creates a new instance of Account in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Account.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  Account.prototype.create function");
	var valuestable = this.getValuesTable(true);
	Account.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
Account.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  Account.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "Account.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"Account",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  Account.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = Account.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of Account in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].AccountNumber = "AccountNumber_0";
*		valuesArray[0].AccountSource = "AccountSource_0";
*		valuesArray[0].Active__c = "Active__c_0";
*		valuesArray[0].AnnualRevenue = "AnnualRevenue_0";
*		valuesArray[0].BATCH_SIZE = "BATCH_SIZE_0";
*		valuesArray[0].BillingAddress = "BillingAddress_0";
*		valuesArray[0].BillingCity = "BillingCity_0";
*		valuesArray[0].BillingCountry = "BillingCountry_0";
*		valuesArray[0].BillingLatitude = "BillingLatitude_0";
*		valuesArray[0].BillingLongitude = "BillingLongitude_0";
*		valuesArray[0].BillingPostalCode = "BillingPostalCode_0";
*		valuesArray[0].BillingState = "BillingState_0";
*		valuesArray[0].BillingStreet = "BillingStreet_0";
*		valuesArray[0].CleanStatus = "CleanStatus_0";
*		valuesArray[0].CreatedById = "CreatedById_0";
*		valuesArray[0].CreatedDate = "CreatedDate_0";
*		valuesArray[0].CustomerPriority__c = "CustomerPriority__c_0";
*		valuesArray[0].DandbCompanyId = "DandbCompanyId_0";
*		valuesArray[0].Description = "Description_0";
*		valuesArray[0].DunsNumber = "DunsNumber_0";
*		valuesArray[0].Fax = "Fax_0";
*		valuesArray[0].Industry = "Industry_0";
*		valuesArray[0].Jigsaw = "Jigsaw_0";
*		valuesArray[0].JigsawCompanyId = "JigsawCompanyId_0";
*		valuesArray[0].LastActivityDate = "LastActivityDate_0";
*		valuesArray[0].LastModifiedById = "LastModifiedById_0";
*		valuesArray[0].LastReferencedDate = "LastReferencedDate_0";
*		valuesArray[0].LastViewedDate = "LastViewedDate_0";
*		valuesArray[0].MasterRecordId = "MasterRecordId_0";
*		valuesArray[0].NaicsCode = "NaicsCode_0";
*		valuesArray[0].NaicsDesc = "NaicsDesc_0";
*		valuesArray[0].Name = "Name_0";
*		valuesArray[0].NumberOfEmployees = "NumberOfEmployees_0";
*		valuesArray[0].NumberofLocations__c = "NumberofLocations__c_0";
*		valuesArray[0].OwnerId = "OwnerId_0";
*		valuesArray[0].Ownership = "Ownership_0";
*		valuesArray[0].ParentId = "ParentId_0";
*		valuesArray[0].Phone = "Phone_0";
*		valuesArray[0].PhotoUrl = "PhotoUrl_0";
*		valuesArray[0].Rating = "Rating_0";
*		valuesArray[0].SLAExpirationDate__c = "SLAExpirationDate__c_0";
*		valuesArray[0].SLASerialNumber__c = "SLASerialNumber__c_0";
*		valuesArray[0].SLA__c = "SLA__c_0";
*		valuesArray[0].START_TIME = "START_TIME_0";
*		valuesArray[0].ShippingAddress = "ShippingAddress_0";
*		valuesArray[0].ShippingCity = "ShippingCity_0";
*		valuesArray[0].ShippingCountry = "ShippingCountry_0";
*		valuesArray[0].ShippingLatitude = "ShippingLatitude_0";
*		valuesArray[0].ShippingLongitude = "ShippingLongitude_0";
*		valuesArray[0].ShippingPostalCode = "ShippingPostalCode_0";
*		valuesArray[0].ShippingState = "ShippingState_0";
*		valuesArray[0].ShippingStreet = "ShippingStreet_0";
*		valuesArray[0].Sic = "Sic_0";
*		valuesArray[0].SicDesc = "SicDesc_0";
*		valuesArray[0].Site = "Site_0";
*		valuesArray[0].SystemModstamp = "SystemModstamp_0";
*		valuesArray[0].TickerSymbol = "TickerSymbol_0";
*		valuesArray[0].Tradestyle = "Tradestyle_0";
*		valuesArray[0].Type = "Type_0";
*		valuesArray[0].UpsellOpportunity__c = "UpsellOpportunity__c_0";
*		valuesArray[0].Website = "Website_0";
*		valuesArray[0].YearStarted = "YearStarted_0";
*		valuesArray[0].errorCode = "errorCode_0";
*		valuesArray[0].message = "message_0";
*		valuesArray[0].moreRecordsAvailable = "moreRecordsAvailable_0";
*		valuesArray[0].queryIdentifier = "queryIdentifier_0";
*		valuesArray[0].queryString = "queryString_0";
*		valuesArray[1] = {};
*		valuesArray[1].AccountNumber = "AccountNumber_1";
*		valuesArray[1].AccountSource = "AccountSource_1";
*		valuesArray[1].Active__c = "Active__c_1";
*		valuesArray[1].AnnualRevenue = "AnnualRevenue_1";
*		valuesArray[1].BATCH_SIZE = "BATCH_SIZE_1";
*		valuesArray[1].BillingAddress = "BillingAddress_1";
*		valuesArray[1].BillingCity = "BillingCity_1";
*		valuesArray[1].BillingCountry = "BillingCountry_1";
*		valuesArray[1].BillingLatitude = "BillingLatitude_1";
*		valuesArray[1].BillingLongitude = "BillingLongitude_1";
*		valuesArray[1].BillingPostalCode = "BillingPostalCode_1";
*		valuesArray[1].BillingState = "BillingState_1";
*		valuesArray[1].BillingStreet = "BillingStreet_1";
*		valuesArray[1].CleanStatus = "CleanStatus_1";
*		valuesArray[1].CreatedById = "CreatedById_1";
*		valuesArray[1].CreatedDate = "CreatedDate_1";
*		valuesArray[1].CustomerPriority__c = "CustomerPriority__c_1";
*		valuesArray[1].DandbCompanyId = "DandbCompanyId_1";
*		valuesArray[1].Description = "Description_1";
*		valuesArray[1].DunsNumber = "DunsNumber_1";
*		valuesArray[1].Fax = "Fax_1";
*		valuesArray[1].Industry = "Industry_1";
*		valuesArray[1].Jigsaw = "Jigsaw_1";
*		valuesArray[1].JigsawCompanyId = "JigsawCompanyId_1";
*		valuesArray[1].LastActivityDate = "LastActivityDate_1";
*		valuesArray[1].LastModifiedById = "LastModifiedById_1";
*		valuesArray[1].LastReferencedDate = "LastReferencedDate_1";
*		valuesArray[1].LastViewedDate = "LastViewedDate_1";
*		valuesArray[1].MasterRecordId = "MasterRecordId_1";
*		valuesArray[1].NaicsCode = "NaicsCode_1";
*		valuesArray[1].NaicsDesc = "NaicsDesc_1";
*		valuesArray[1].Name = "Name_1";
*		valuesArray[1].NumberOfEmployees = "NumberOfEmployees_1";
*		valuesArray[1].NumberofLocations__c = "NumberofLocations__c_1";
*		valuesArray[1].OwnerId = "OwnerId_1";
*		valuesArray[1].Ownership = "Ownership_1";
*		valuesArray[1].ParentId = "ParentId_1";
*		valuesArray[1].Phone = "Phone_1";
*		valuesArray[1].PhotoUrl = "PhotoUrl_1";
*		valuesArray[1].Rating = "Rating_1";
*		valuesArray[1].SLAExpirationDate__c = "SLAExpirationDate__c_1";
*		valuesArray[1].SLASerialNumber__c = "SLASerialNumber__c_1";
*		valuesArray[1].SLA__c = "SLA__c_1";
*		valuesArray[1].START_TIME = "START_TIME_1";
*		valuesArray[1].ShippingAddress = "ShippingAddress_1";
*		valuesArray[1].ShippingCity = "ShippingCity_1";
*		valuesArray[1].ShippingCountry = "ShippingCountry_1";
*		valuesArray[1].ShippingLatitude = "ShippingLatitude_1";
*		valuesArray[1].ShippingLongitude = "ShippingLongitude_1";
*		valuesArray[1].ShippingPostalCode = "ShippingPostalCode_1";
*		valuesArray[1].ShippingState = "ShippingState_1";
*		valuesArray[1].ShippingStreet = "ShippingStreet_1";
*		valuesArray[1].Sic = "Sic_1";
*		valuesArray[1].SicDesc = "SicDesc_1";
*		valuesArray[1].Site = "Site_1";
*		valuesArray[1].SystemModstamp = "SystemModstamp_1";
*		valuesArray[1].TickerSymbol = "TickerSymbol_1";
*		valuesArray[1].Tradestyle = "Tradestyle_1";
*		valuesArray[1].Type = "Type_1";
*		valuesArray[1].UpsellOpportunity__c = "UpsellOpportunity__c_1";
*		valuesArray[1].Website = "Website_1";
*		valuesArray[1].YearStarted = "YearStarted_1";
*		valuesArray[1].errorCode = "errorCode_1";
*		valuesArray[1].message = "message_1";
*		valuesArray[1].moreRecordsAvailable = "moreRecordsAvailable_1";
*		valuesArray[1].queryIdentifier = "queryIdentifier_1";
*		valuesArray[1].queryString = "queryString_1";
*		valuesArray[2] = {};
*		valuesArray[2].AccountNumber = "AccountNumber_2";
*		valuesArray[2].AccountSource = "AccountSource_2";
*		valuesArray[2].Active__c = "Active__c_2";
*		valuesArray[2].AnnualRevenue = "AnnualRevenue_2";
*		valuesArray[2].BATCH_SIZE = "BATCH_SIZE_2";
*		valuesArray[2].BillingAddress = "BillingAddress_2";
*		valuesArray[2].BillingCity = "BillingCity_2";
*		valuesArray[2].BillingCountry = "BillingCountry_2";
*		valuesArray[2].BillingLatitude = "BillingLatitude_2";
*		valuesArray[2].BillingLongitude = "BillingLongitude_2";
*		valuesArray[2].BillingPostalCode = "BillingPostalCode_2";
*		valuesArray[2].BillingState = "BillingState_2";
*		valuesArray[2].BillingStreet = "BillingStreet_2";
*		valuesArray[2].CleanStatus = "CleanStatus_2";
*		valuesArray[2].CreatedById = "CreatedById_2";
*		valuesArray[2].CreatedDate = "CreatedDate_2";
*		valuesArray[2].CustomerPriority__c = "CustomerPriority__c_2";
*		valuesArray[2].DandbCompanyId = "DandbCompanyId_2";
*		valuesArray[2].Description = "Description_2";
*		valuesArray[2].DunsNumber = "DunsNumber_2";
*		valuesArray[2].Fax = "Fax_2";
*		valuesArray[2].Industry = "Industry_2";
*		valuesArray[2].Jigsaw = "Jigsaw_2";
*		valuesArray[2].JigsawCompanyId = "JigsawCompanyId_2";
*		valuesArray[2].LastActivityDate = "LastActivityDate_2";
*		valuesArray[2].LastModifiedById = "LastModifiedById_2";
*		valuesArray[2].LastReferencedDate = "LastReferencedDate_2";
*		valuesArray[2].LastViewedDate = "LastViewedDate_2";
*		valuesArray[2].MasterRecordId = "MasterRecordId_2";
*		valuesArray[2].NaicsCode = "NaicsCode_2";
*		valuesArray[2].NaicsDesc = "NaicsDesc_2";
*		valuesArray[2].Name = "Name_2";
*		valuesArray[2].NumberOfEmployees = "NumberOfEmployees_2";
*		valuesArray[2].NumberofLocations__c = "NumberofLocations__c_2";
*		valuesArray[2].OwnerId = "OwnerId_2";
*		valuesArray[2].Ownership = "Ownership_2";
*		valuesArray[2].ParentId = "ParentId_2";
*		valuesArray[2].Phone = "Phone_2";
*		valuesArray[2].PhotoUrl = "PhotoUrl_2";
*		valuesArray[2].Rating = "Rating_2";
*		valuesArray[2].SLAExpirationDate__c = "SLAExpirationDate__c_2";
*		valuesArray[2].SLASerialNumber__c = "SLASerialNumber__c_2";
*		valuesArray[2].SLA__c = "SLA__c_2";
*		valuesArray[2].START_TIME = "START_TIME_2";
*		valuesArray[2].ShippingAddress = "ShippingAddress_2";
*		valuesArray[2].ShippingCity = "ShippingCity_2";
*		valuesArray[2].ShippingCountry = "ShippingCountry_2";
*		valuesArray[2].ShippingLatitude = "ShippingLatitude_2";
*		valuesArray[2].ShippingLongitude = "ShippingLongitude_2";
*		valuesArray[2].ShippingPostalCode = "ShippingPostalCode_2";
*		valuesArray[2].ShippingState = "ShippingState_2";
*		valuesArray[2].ShippingStreet = "ShippingStreet_2";
*		valuesArray[2].Sic = "Sic_2";
*		valuesArray[2].SicDesc = "SicDesc_2";
*		valuesArray[2].Site = "Site_2";
*		valuesArray[2].SystemModstamp = "SystemModstamp_2";
*		valuesArray[2].TickerSymbol = "TickerSymbol_2";
*		valuesArray[2].Tradestyle = "Tradestyle_2";
*		valuesArray[2].Type = "Type_2";
*		valuesArray[2].UpsellOpportunity__c = "UpsellOpportunity__c_2";
*		valuesArray[2].Website = "Website_2";
*		valuesArray[2].YearStarted = "YearStarted_2";
*		valuesArray[2].errorCode = "errorCode_2";
*		valuesArray[2].message = "message_2";
*		valuesArray[2].moreRecordsAvailable = "moreRecordsAvailable_2";
*		valuesArray[2].queryIdentifier = "queryIdentifier_2";
*		valuesArray[2].queryString = "queryString_2";
*		Account.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
Account.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering Account.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"Account",errorcallback,true)===false){
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
		sync.log.trace("Entering  Account.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  Account.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = Account.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates Account using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Account.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  Account.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	Account.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
Account.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  Account.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(Account.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"Account",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = Account.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates Account(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Account.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering Account.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"Account",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  Account.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, Account.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = Account.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, Account.getPKTable());
	}
};

/************************************************************************************
* Updates Account(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.AccountNumber = "AccountNumber_updated0";
*		inputArray[0].changeSet.AccountSource = "AccountSource_updated0";
*		inputArray[0].changeSet.Active__c = "Active__c_updated0";
*		inputArray[0].changeSet.AnnualRevenue = "AnnualRevenue_updated0";
*		inputArray[0].whereClause = "where Id = '0'";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.AccountNumber = "AccountNumber_updated1";
*		inputArray[1].changeSet.AccountSource = "AccountSource_updated1";
*		inputArray[1].changeSet.Active__c = "Active__c_updated1";
*		inputArray[1].changeSet.AnnualRevenue = "AnnualRevenue_updated1";
*		inputArray[1].whereClause = "where Id = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.AccountNumber = "AccountNumber_updated2";
*		inputArray[2].changeSet.AccountSource = "AccountSource_updated2";
*		inputArray[2].changeSet.Active__c = "Active__c_updated2";
*		inputArray[2].changeSet.AnnualRevenue = "AnnualRevenue_updated2";
*		inputArray[2].whereClause = "where Id = '2'";
*		Account.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
Account.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering Account.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "b972d075-dd15-4910-ac1c-9edda03ea089";
	var tbname = "Account";
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
			if(kony.sync.attributeValidation(valuestable,"Account",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, Account.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  Account.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, Account.getPKTable());
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
		sync.log.trace("Entering  Account.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = Account.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes Account using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
Account.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Account.prototype.deleteByPK function");
	var pks = this.getPKTable();
	Account.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Account.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering Account.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(Account.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function AccountTransactionCallback(tx){
		sync.log.trace("Entering Account.deleteByPK->Account_PKPresent successcallback");
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
	
	function AccountErrorCallback(){
		sync.log.error("Entering Account.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function AccountSuccessCallback(){
		sync.log.trace("Entering Account.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering Account.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, AccountTransactionCallback, AccountSuccessCallback, AccountErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes Account(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. Account.remove("where AccountNumber like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
Account.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering Account.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Account_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Account_removeSuccess(){
		sync.log.trace("Entering Account.remove->Account_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering Account.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering Account.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Account_removeTransactioncallback, Account_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes Account using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
Account.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Account.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	Account.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
Account.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering Account.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(Account.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function AccountTransactionCallback(tx){
		sync.log.trace("Entering Account.removeDeviceInstanceByPK -> AccountTransactionCallback");
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
	
	function AccountErrorCallback(){
		sync.log.error("Entering Account.removeDeviceInstanceByPK -> AccountErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function AccountSuccessCallback(){
		sync.log.trace("Entering Account.removeDeviceInstanceByPK -> AccountSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering Account.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, AccountTransactionCallback, AccountSuccessCallback, AccountErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes Account(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
Account.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Account.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Account_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Account_removeSuccess(){
		sync.log.trace("Entering Account.remove->Account_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering Account.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering Account.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Account_removeTransactioncallback, Account_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves Account using primary key from the local Database. 
*************************************************************************************/
Account.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Account.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	Account.getAllDetailsByPK(pks,successcallback,errorcallback);
};
Account.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering Account.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	var wcs = [];
	if(Account.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering Account.getAllDetailsByPK-> success callback function");
		successcallback(Account.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves Account(s) using where clause from the local Database. 
* e.g. Account.find("where AccountNumber like 'A%'", successcallback,errorcallback);
*************************************************************************************/
Account.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Account.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Account.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of Account with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Account.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering Account.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	Account.markForUploadbyPK(pks, successcallback, errorcallback);
};
Account.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Account.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(Account.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of Account matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Account.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Account.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
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
		sync.log.trace("Entering Account.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering Account.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering Account.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of Account pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
Account.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Account.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
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
		sync.log.trace("Entering Account.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, Account.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Account pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
Account.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering Account.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Account.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, Account.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Account deferred for upload.
*************************************************************************************/
Account.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering Account.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
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
		sync.log.trace("Entering Account.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, Account.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to Account in local database to last synced state
*************************************************************************************/
Account.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering Account.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Account.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to Account's record with given primary key in local 
* database to last synced state
*************************************************************************************/
Account.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Account.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	Account.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
Account.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Account.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	var wcs = [];
	if(Account.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Account.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering Account.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether Account's record  
* with given primary key got deferred in last sync
*************************************************************************************/
Account.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  Account.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	Account.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
Account.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Account.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	var wcs = [] ;
	var flag;
	if(Account.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering Account.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether Account's record  
* with given primary key is pending for upload
*************************************************************************************/
Account.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  Account.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	Account.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
Account.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Account.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Account.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Account.getTableName();
	var wcs = [] ;
	var flag;
	if(Account.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering Account.isRecordPendingForUpload->successcallback function");
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
Account.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering Account.removeCascade function");
	var tbname = Account.getTableName();
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


Account.convertTableToObject = function(res){
	sync.log.trace("Entering Account.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new Account();
			obj.AccountNumber = res[i].AccountNumber;
			obj.AccountSource = res[i].AccountSource;
			obj.Active__c = res[i].Active__c;
			obj.AnnualRevenue = res[i].AnnualRevenue;
			obj.BATCH_SIZE = res[i].BATCH_SIZE;
			obj.BillingAddress = res[i].BillingAddress;
			obj.BillingCity = res[i].BillingCity;
			obj.BillingCountry = res[i].BillingCountry;
			obj.BillingLatitude = res[i].BillingLatitude;
			obj.BillingLongitude = res[i].BillingLongitude;
			obj.BillingPostalCode = res[i].BillingPostalCode;
			obj.BillingState = res[i].BillingState;
			obj.BillingStreet = res[i].BillingStreet;
			obj.CleanStatus = res[i].CleanStatus;
			obj.CreatedById = res[i].CreatedById;
			obj.CreatedDate = res[i].CreatedDate;
			obj.CustomerPriority__c = res[i].CustomerPriority__c;
			obj.DandbCompanyId = res[i].DandbCompanyId;
			obj.Description = res[i].Description;
			obj.DunsNumber = res[i].DunsNumber;
			obj.Fax = res[i].Fax;
			obj.Id = res[i].Id;
			obj.Industry = res[i].Industry;
			obj.IsDeleted = res[i].IsDeleted;
			obj.Jigsaw = res[i].Jigsaw;
			obj.JigsawCompanyId = res[i].JigsawCompanyId;
			obj.LastActivityDate = res[i].LastActivityDate;
			obj.LastModifiedById = res[i].LastModifiedById;
			obj.LastModifiedDate = res[i].LastModifiedDate;
			obj.LastReferencedDate = res[i].LastReferencedDate;
			obj.LastViewedDate = res[i].LastViewedDate;
			obj.MasterRecordId = res[i].MasterRecordId;
			obj.NaicsCode = res[i].NaicsCode;
			obj.NaicsDesc = res[i].NaicsDesc;
			obj.Name = res[i].Name;
			obj.NumberOfEmployees = res[i].NumberOfEmployees;
			obj.NumberofLocations__c = res[i].NumberofLocations__c;
			obj.OwnerId = res[i].OwnerId;
			obj.Ownership = res[i].Ownership;
			obj.ParentId = res[i].ParentId;
			obj.Phone = res[i].Phone;
			obj.PhotoUrl = res[i].PhotoUrl;
			obj.Rating = res[i].Rating;
			obj.SLAExpirationDate__c = res[i].SLAExpirationDate__c;
			obj.SLASerialNumber__c = res[i].SLASerialNumber__c;
			obj.SLA__c = res[i].SLA__c;
			obj.START_TIME = res[i].START_TIME;
			obj.ShippingAddress = res[i].ShippingAddress;
			obj.ShippingCity = res[i].ShippingCity;
			obj.ShippingCountry = res[i].ShippingCountry;
			obj.ShippingLatitude = res[i].ShippingLatitude;
			obj.ShippingLongitude = res[i].ShippingLongitude;
			obj.ShippingPostalCode = res[i].ShippingPostalCode;
			obj.ShippingState = res[i].ShippingState;
			obj.ShippingStreet = res[i].ShippingStreet;
			obj.Sic = res[i].Sic;
			obj.SicDesc = res[i].SicDesc;
			obj.Site = res[i].Site;
			obj.SystemModstamp = res[i].SystemModstamp;
			obj.TickerSymbol = res[i].TickerSymbol;
			obj.Tradestyle = res[i].Tradestyle;
			obj.Type = res[i].Type;
			obj.UpsellOpportunity__c = res[i].UpsellOpportunity__c;
			obj.Website = res[i].Website;
			obj.YearStarted = res[i].YearStarted;
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

Account.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering Account.filterAttributes function");
	var attributeTable = {};
	attributeTable.AccountNumber = "AccountNumber";
	attributeTable.AccountSource = "AccountSource";
	attributeTable.Active__c = "Active__c";
	attributeTable.AnnualRevenue = "AnnualRevenue";
	attributeTable.BATCH_SIZE = "BATCH_SIZE";
	attributeTable.BillingAddress = "BillingAddress";
	attributeTable.BillingCity = "BillingCity";
	attributeTable.BillingCountry = "BillingCountry";
	attributeTable.BillingLatitude = "BillingLatitude";
	attributeTable.BillingLongitude = "BillingLongitude";
	attributeTable.BillingPostalCode = "BillingPostalCode";
	attributeTable.BillingState = "BillingState";
	attributeTable.BillingStreet = "BillingStreet";
	attributeTable.CleanStatus = "CleanStatus";
	attributeTable.CreatedById = "CreatedById";
	attributeTable.CreatedDate = "CreatedDate";
	attributeTable.CustomerPriority__c = "CustomerPriority__c";
	attributeTable.DandbCompanyId = "DandbCompanyId";
	attributeTable.Description = "Description";
	attributeTable.DunsNumber = "DunsNumber";
	attributeTable.Fax = "Fax";
	attributeTable.Id = "Id";
	attributeTable.Industry = "Industry";
	attributeTable.Jigsaw = "Jigsaw";
	attributeTable.JigsawCompanyId = "JigsawCompanyId";
	attributeTable.LastActivityDate = "LastActivityDate";
	attributeTable.LastModifiedById = "LastModifiedById";
	attributeTable.LastReferencedDate = "LastReferencedDate";
	attributeTable.LastViewedDate = "LastViewedDate";
	attributeTable.MasterRecordId = "MasterRecordId";
	attributeTable.NaicsCode = "NaicsCode";
	attributeTable.NaicsDesc = "NaicsDesc";
	attributeTable.Name = "Name";
	attributeTable.NumberOfEmployees = "NumberOfEmployees";
	attributeTable.NumberofLocations__c = "NumberofLocations__c";
	attributeTable.OwnerId = "OwnerId";
	attributeTable.Ownership = "Ownership";
	attributeTable.ParentId = "ParentId";
	attributeTable.Phone = "Phone";
	attributeTable.PhotoUrl = "PhotoUrl";
	attributeTable.Rating = "Rating";
	attributeTable.SLAExpirationDate__c = "SLAExpirationDate__c";
	attributeTable.SLASerialNumber__c = "SLASerialNumber__c";
	attributeTable.SLA__c = "SLA__c";
	attributeTable.START_TIME = "START_TIME";
	attributeTable.ShippingAddress = "ShippingAddress";
	attributeTable.ShippingCity = "ShippingCity";
	attributeTable.ShippingCountry = "ShippingCountry";
	attributeTable.ShippingLatitude = "ShippingLatitude";
	attributeTable.ShippingLongitude = "ShippingLongitude";
	attributeTable.ShippingPostalCode = "ShippingPostalCode";
	attributeTable.ShippingState = "ShippingState";
	attributeTable.ShippingStreet = "ShippingStreet";
	attributeTable.Sic = "Sic";
	attributeTable.SicDesc = "SicDesc";
	attributeTable.Site = "Site";
	attributeTable.SystemModstamp = "SystemModstamp";
	attributeTable.TickerSymbol = "TickerSymbol";
	attributeTable.Tradestyle = "Tradestyle";
	attributeTable.Type = "Type";
	attributeTable.UpsellOpportunity__c = "UpsellOpportunity__c";
	attributeTable.Website = "Website";
	attributeTable.YearStarted = "YearStarted";
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
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject Account. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject Account. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject Account. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

Account.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering Account.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = Account.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

Account.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering Account.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.AccountNumber = this.AccountNumber;
	valuesTable.AccountSource = this.AccountSource;
	valuesTable.Active__c = this.Active__c;
	valuesTable.AnnualRevenue = this.AnnualRevenue;
	valuesTable.BATCH_SIZE = this.BATCH_SIZE;
	valuesTable.BillingAddress = this.BillingAddress;
	valuesTable.BillingCity = this.BillingCity;
	valuesTable.BillingCountry = this.BillingCountry;
	valuesTable.BillingLatitude = this.BillingLatitude;
	valuesTable.BillingLongitude = this.BillingLongitude;
	valuesTable.BillingPostalCode = this.BillingPostalCode;
	valuesTable.BillingState = this.BillingState;
	valuesTable.BillingStreet = this.BillingStreet;
	valuesTable.CleanStatus = this.CleanStatus;
	valuesTable.CreatedById = this.CreatedById;
	valuesTable.CreatedDate = this.CreatedDate;
	valuesTable.CustomerPriority__c = this.CustomerPriority__c;
	valuesTable.DandbCompanyId = this.DandbCompanyId;
	valuesTable.Description = this.Description;
	valuesTable.DunsNumber = this.DunsNumber;
	valuesTable.Fax = this.Fax;
	if(isInsert===true){
		valuesTable.Id = this.Id;
	}
	valuesTable.Industry = this.Industry;
	valuesTable.Jigsaw = this.Jigsaw;
	valuesTable.JigsawCompanyId = this.JigsawCompanyId;
	valuesTable.LastActivityDate = this.LastActivityDate;
	valuesTable.LastModifiedById = this.LastModifiedById;
	valuesTable.LastReferencedDate = this.LastReferencedDate;
	valuesTable.LastViewedDate = this.LastViewedDate;
	valuesTable.MasterRecordId = this.MasterRecordId;
	valuesTable.NaicsCode = this.NaicsCode;
	valuesTable.NaicsDesc = this.NaicsDesc;
	valuesTable.Name = this.Name;
	valuesTable.NumberOfEmployees = this.NumberOfEmployees;
	valuesTable.NumberofLocations__c = this.NumberofLocations__c;
	valuesTable.OwnerId = this.OwnerId;
	valuesTable.Ownership = this.Ownership;
	valuesTable.ParentId = this.ParentId;
	valuesTable.Phone = this.Phone;
	valuesTable.PhotoUrl = this.PhotoUrl;
	valuesTable.Rating = this.Rating;
	valuesTable.SLAExpirationDate__c = this.SLAExpirationDate__c;
	valuesTable.SLASerialNumber__c = this.SLASerialNumber__c;
	valuesTable.SLA__c = this.SLA__c;
	valuesTable.START_TIME = this.START_TIME;
	valuesTable.ShippingAddress = this.ShippingAddress;
	valuesTable.ShippingCity = this.ShippingCity;
	valuesTable.ShippingCountry = this.ShippingCountry;
	valuesTable.ShippingLatitude = this.ShippingLatitude;
	valuesTable.ShippingLongitude = this.ShippingLongitude;
	valuesTable.ShippingPostalCode = this.ShippingPostalCode;
	valuesTable.ShippingState = this.ShippingState;
	valuesTable.ShippingStreet = this.ShippingStreet;
	valuesTable.Sic = this.Sic;
	valuesTable.SicDesc = this.SicDesc;
	valuesTable.Site = this.Site;
	valuesTable.SystemModstamp = this.SystemModstamp;
	valuesTable.TickerSymbol = this.TickerSymbol;
	valuesTable.Tradestyle = this.Tradestyle;
	valuesTable.Type = this.Type;
	valuesTable.UpsellOpportunity__c = this.UpsellOpportunity__c;
	valuesTable.Website = this.Website;
	valuesTable.YearStarted = this.YearStarted;
	valuesTable.errorCode = this.errorCode;
	valuesTable.message = this.message;
	valuesTable.moreRecordsAvailable = this.moreRecordsAvailable;
	valuesTable.queryIdentifier = this.queryIdentifier;
	valuesTable.queryString = this.queryString;
	return valuesTable;
};

Account.prototype.getPKTable = function(){
	sync.log.trace("Entering Account.prototype.getPKTable function");
	var pkTable = {};
	pkTable.Id = {key:"Id",value:this.Id};
	return pkTable;
};

Account.getPKTable = function(){
	sync.log.trace("Entering Account.getPKTable function");
	var pkTable = [];
	pkTable.push("Id");
	return pkTable;
};

Account.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering Account.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key Id not specified in  " + opName + "  an item in Account");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Id",opName,"Account")));
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
			sync.log.error("Primary Key Id not specified in  " + opName + "  an item in Account");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Id",opName,"Account")));
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

Account.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering Account.validateNull function");
	return true;
};

Account.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering Account.validateNullInsert function");
	return true;
};
Account.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering Account.getRelationshipMap function");
	var r1 = {};
	return relationshipMap;
};

Account.getTableName = function(){
	return "Account";
};


// **********************************End Account's helper methods************************