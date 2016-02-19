//****************Sync Version:Sync-GA-6.5.2_v201508271357*******************
// ****************Generated On Thu Jan 21 11:36:09 UTC 2016Lead*******************
// **********************************Start Lead's helper methods************************
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
* Creates new Lead
*************************************************************************************/
Lead = function(){
	this.Address = null;
	this.AnnualRevenue = null;
	this.BATCH_SIZE = null;
	this.City = null;
	this.CleanStatus = null;
	this.Company = null;
	this.CompanyDunsNumber = null;
	this.ConvertedAccountId = null;
	this.ConvertedContactId = null;
	this.ConvertedDate = null;
	this.ConvertedOpportunityId = null;
	this.Country = null;
	this.CreatedById = null;
	this.CreatedDate = null;
	this.CurrentGenerators__c = null;
	this.DandbCompanyId = null;
	this.Description = null;
	this.Email = null;
	this.EmailBouncedDate = null;
	this.EmailBouncedReason = null;
	this.Fax = null;
	this.FirstName = null;
	this.Id = null;
	this.Industry = null;
	this.IsConverted = null;
	this.IsDeleted = null;
	this.IsUnreadByOwner = null;
	this.Jigsaw = null;
	this.JigsawContactId = null;
	this.LastActivityDate = null;
	this.LastModifiedById = null;
	this.LastModifiedDate = null;
	this.LastName = null;
	this.LastReferencedDate = null;
	this.LastViewedDate = null;
	this.Latitude = null;
	this.LeadSource = null;
	this.Longitude = null;
	this.MasterRecordId = null;
	this.MobilePhone = null;
	this.Name = null;
	this.NumberOfEmployees = null;
	this.NumberofLocations__c = null;
	this.OwnerId = null;
	this.Phone = null;
	this.PhotoUrl = null;
	this.PostalCode = null;
	this.Primary__c = null;
	this.ProductInterest__c = null;
	this.Rating = null;
	this.SICCode__c = null;
	this.START_TIME = null;
	this.Salutation = null;
	this.State = null;
	this.Status = null;
	this.Street = null;
	this.SystemModstamp = null;
	this.Title = null;
	this.Website = null;
	this.errorCode = null;
	this.message = null;
	this.moreRecordsAvailable = null;
	this.queryIdentifier = null;
	this.queryString = null;
	this.markForUpload = true;
};

Lead.prototype = {
	get Address(){
		return this._Address;
	},
	set Address(val){
		this._Address = val;
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
	get City(){
		return this._City;
	},
	set City(val){
		this._City = val;
	},
	get CleanStatus(){
		return this._CleanStatus;
	},
	set CleanStatus(val){
		this._CleanStatus = val;
	},
	get Company(){
		return this._Company;
	},
	set Company(val){
		this._Company = val;
	},
	get CompanyDunsNumber(){
		return this._CompanyDunsNumber;
	},
	set CompanyDunsNumber(val){
		this._CompanyDunsNumber = val;
	},
	get ConvertedAccountId(){
		return this._ConvertedAccountId;
	},
	set ConvertedAccountId(val){
		this._ConvertedAccountId = val;
	},
	get ConvertedContactId(){
		return this._ConvertedContactId;
	},
	set ConvertedContactId(val){
		this._ConvertedContactId = val;
	},
	get ConvertedDate(){
		return this._ConvertedDate;
	},
	set ConvertedDate(val){
		this._ConvertedDate = val;
	},
	get ConvertedOpportunityId(){
		return this._ConvertedOpportunityId;
	},
	set ConvertedOpportunityId(val){
		this._ConvertedOpportunityId = val;
	},
	get Country(){
		return this._Country;
	},
	set Country(val){
		this._Country = val;
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
	get Email(){
		return this._Email;
	},
	set Email(val){
		this._Email = val;
	},
	get EmailBouncedDate(){
		return this._EmailBouncedDate;
	},
	set EmailBouncedDate(val){
		this._EmailBouncedDate = val;
	},
	get EmailBouncedReason(){
		return this._EmailBouncedReason;
	},
	set EmailBouncedReason(val){
		this._EmailBouncedReason = val;
	},
	get Fax(){
		return this._Fax;
	},
	set Fax(val){
		this._Fax = val;
	},
	get FirstName(){
		return this._FirstName;
	},
	set FirstName(val){
		this._FirstName = val;
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
	get IsConverted(){
		return kony.sync.getBoolean(this._IsConverted);
	},
	set IsConverted(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsConverted in Lead.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsConverted = val;
	},
	get IsDeleted(){
		return kony.sync.getBoolean(this._IsDeleted);
	},
	set IsDeleted(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsDeleted in Lead.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsDeleted = val;
	},
	get IsUnreadByOwner(){
		return kony.sync.getBoolean(this._IsUnreadByOwner);
	},
	set IsUnreadByOwner(val){
		if(!kony.sync.isEmptyString(val) && !kony.sync.isNull(val) && !kony.sync.isValidBooleanType(val)){
			sync.log.error("Invalid data type for the attribute IsUnreadByOwner in Lead.\nExpected:\"boolean\"\nActual:\"" + kony.type(val) + "\"");
		}
		this._IsUnreadByOwner = val;
	},
	get Jigsaw(){
		return this._Jigsaw;
	},
	set Jigsaw(val){
		this._Jigsaw = val;
	},
	get JigsawContactId(){
		return this._JigsawContactId;
	},
	set JigsawContactId(val){
		this._JigsawContactId = val;
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
	get LastName(){
		return this._LastName;
	},
	set LastName(val){
		this._LastName = val;
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
	get Latitude(){
		return this._Latitude;
	},
	set Latitude(val){
		this._Latitude = val;
	},
	get LeadSource(){
		return this._LeadSource;
	},
	set LeadSource(val){
		this._LeadSource = val;
	},
	get Longitude(){
		return this._Longitude;
	},
	set Longitude(val){
		this._Longitude = val;
	},
	get MasterRecordId(){
		return this._MasterRecordId;
	},
	set MasterRecordId(val){
		this._MasterRecordId = val;
	},
	get MobilePhone(){
		return this._MobilePhone;
	},
	set MobilePhone(val){
		this._MobilePhone = val;
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
	get PostalCode(){
		return this._PostalCode;
	},
	set PostalCode(val){
		this._PostalCode = val;
	},
	get Primary__c(){
		return this._Primary__c;
	},
	set Primary__c(val){
		this._Primary__c = val;
	},
	get ProductInterest__c(){
		return this._ProductInterest__c;
	},
	set ProductInterest__c(val){
		this._ProductInterest__c = val;
	},
	get Rating(){
		return this._Rating;
	},
	set Rating(val){
		this._Rating = val;
	},
	get SICCode__c(){
		return this._SICCode__c;
	},
	set SICCode__c(val){
		this._SICCode__c = val;
	},
	get START_TIME(){
		return this._START_TIME;
	},
	set START_TIME(val){
		this._START_TIME = val;
	},
	get Salutation(){
		return this._Salutation;
	},
	set Salutation(val){
		this._Salutation = val;
	},
	get State(){
		return this._State;
	},
	set State(val){
		this._State = val;
	},
	get Status(){
		return this._Status;
	},
	set Status(val){
		this._Status = val;
	},
	get Street(){
		return this._Street;
	},
	set Street(val){
		this._Street = val;
	},
	get SystemModstamp(){
		return this._SystemModstamp;
	},
	set SystemModstamp(val){
		this._SystemModstamp = val;
	},
	get Title(){
		return this._Title;
	},
	set Title(val){
		this._Title = val;
	},
	get Website(){
		return this._Website;
	},
	set Website(val){
		this._Website = val;
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
* Retrieves all instances of Lead SyncObject present in local database with
* given limit and offset where limit indicates the number of records to be retrieved
* and offset indicates number of rows to be ignored before returning the records.
* e.g. var orderByMap = []
* orderByMap[0] = {};
* orderByMap[0].key = "Address";
* orderByMap[0].sortType ="desc";
* orderByMap[1] = {};
* orderByMap[1].key = "AnnualRevenue";
* orderByMap[1].sortType ="asc";
* var limit = 20;
* var offset = 5;
* Lead.getAll(successcallback,errorcallback, orderByMap, limit, offset)
*************************************************************************************/
Lead.getAll = function(successcallback, errorcallback, orderByMap, limit, offset){
	sync.log.trace("Entering Lead.getAll->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	orderByMap = kony.sync.formOrderByClause("Lead",orderByMap);
	var query = kony.sync.qb_createQuery();
				kony.sync.qb_select(query, null);	
				kony.sync.qb_from(query, tbname);
				kony.sync.qb_orderBy(query, orderByMap);
				kony.sync.qb_limitOffset(query,limit,offset);
	var query_compile = kony.sync.qb_compile(query);
	var sql = query_compile[0];
	var params = query_compile[1];

	function mySuccCallback(res){
		sync.log.trace("Entering Lead.getAll->successcallback");
		successcallback(Lead.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname,sql, params,mySuccCallback,errorcallback);
};

/************************************************************************************
* Returns number of Lead present in local database.
*************************************************************************************/
Lead.getAllCount = function(successcallback,errorcallback){
	sync.log.trace("Entering Lead.getAllCount function");
	Lead.getCount("",successcallback,errorcallback);
};

/************************************************************************************
* Returns number of Lead using where clause in the local Database
*************************************************************************************/
Lead.getCount = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering Lead.getCount->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.getCount" , "getCount", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select count(*) from \"" + tbname + "\" " + wcs;
	kony.sync.single_execute_sql(dbname,sql, null, mySuccCallback, errorcallback);
	function mySuccCallback(res) {
		sync.log.trace("Entering Lead.getCount->successcallback");
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
* Creates a new instance of Lead in the local Database. The new record will 
* be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Lead.prototype.create = function(successcallback,errorcallback){
	sync.log.trace("Entering  Lead.prototype.create function");
	var valuestable = this.getValuesTable(true);
	Lead.create(valuestable, successcallback,errorcallback,this.markForUpload);
};
Lead.create = function(valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering  Lead.create->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	
	if(!kony.sync.validateInput(arguments, "Lead.create" , "create", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);

	if(kony.sync.attributeValidation(valuestable,"Lead",errorcallback,true)===false){
		return;
	}
	
	function executeSuccess(){
		sync.log.trace("Entering  Lead.create->success callback");
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = Lead.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_insert_execute(dbname,tbname,valuestable,successcallback,errorcallback,markForUpload);
	}
};

/************************************************************************************
* Creates number of new instances of Lead in the local Database. These new 
* records will be merged with the enterprise datasource in the next Sync. Based upon 
* kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var valuesArray = [];
*		valuesArray[0] = {};
*		valuesArray[0].Address = "Address_0";
*		valuesArray[0].AnnualRevenue = "AnnualRevenue_0";
*		valuesArray[0].BATCH_SIZE = "BATCH_SIZE_0";
*		valuesArray[0].City = "City_0";
*		valuesArray[0].CleanStatus = "CleanStatus_0";
*		valuesArray[0].Company = "Company_0";
*		valuesArray[0].CompanyDunsNumber = "CompanyDunsNumber_0";
*		valuesArray[0].ConvertedAccountId = "ConvertedAccountId_0";
*		valuesArray[0].ConvertedContactId = "ConvertedContactId_0";
*		valuesArray[0].ConvertedDate = "ConvertedDate_0";
*		valuesArray[0].ConvertedOpportunityId = "ConvertedOpportunityId_0";
*		valuesArray[0].Country = "Country_0";
*		valuesArray[0].CreatedById = "CreatedById_0";
*		valuesArray[0].CreatedDate = "CreatedDate_0";
*		valuesArray[0].CurrentGenerators__c = "CurrentGenerators__c_0";
*		valuesArray[0].DandbCompanyId = "DandbCompanyId_0";
*		valuesArray[0].Description = "Description_0";
*		valuesArray[0].Email = "Email_0";
*		valuesArray[0].EmailBouncedDate = "EmailBouncedDate_0";
*		valuesArray[0].EmailBouncedReason = "EmailBouncedReason_0";
*		valuesArray[0].Fax = "Fax_0";
*		valuesArray[0].FirstName = "FirstName_0";
*		valuesArray[0].Industry = "Industry_0";
*		valuesArray[0].IsConverted = true;
*		valuesArray[0].IsUnreadByOwner = true;
*		valuesArray[0].Jigsaw = "Jigsaw_0";
*		valuesArray[0].JigsawContactId = "JigsawContactId_0";
*		valuesArray[0].LastActivityDate = "LastActivityDate_0";
*		valuesArray[0].LastModifiedById = "LastModifiedById_0";
*		valuesArray[0].LastName = "LastName_0";
*		valuesArray[0].LastReferencedDate = "LastReferencedDate_0";
*		valuesArray[0].LastViewedDate = "LastViewedDate_0";
*		valuesArray[0].Latitude = "Latitude_0";
*		valuesArray[0].LeadSource = "LeadSource_0";
*		valuesArray[0].Longitude = "Longitude_0";
*		valuesArray[0].MasterRecordId = "MasterRecordId_0";
*		valuesArray[0].MobilePhone = "MobilePhone_0";
*		valuesArray[0].Name = "Name_0";
*		valuesArray[0].NumberOfEmployees = "NumberOfEmployees_0";
*		valuesArray[0].NumberofLocations__c = "NumberofLocations__c_0";
*		valuesArray[0].OwnerId = "OwnerId_0";
*		valuesArray[0].Phone = "Phone_0";
*		valuesArray[0].PhotoUrl = "PhotoUrl_0";
*		valuesArray[0].PostalCode = "PostalCode_0";
*		valuesArray[0].Primary__c = "Primary__c_0";
*		valuesArray[0].ProductInterest__c = "ProductInterest__c_0";
*		valuesArray[0].Rating = "Rating_0";
*		valuesArray[0].SICCode__c = "SICCode__c_0";
*		valuesArray[0].START_TIME = "START_TIME_0";
*		valuesArray[0].Salutation = "Salutation_0";
*		valuesArray[0].State = "State_0";
*		valuesArray[0].Status = "Status_0";
*		valuesArray[0].Street = "Street_0";
*		valuesArray[0].SystemModstamp = "SystemModstamp_0";
*		valuesArray[0].Title = "Title_0";
*		valuesArray[0].Website = "Website_0";
*		valuesArray[0].errorCode = "errorCode_0";
*		valuesArray[0].message = "message_0";
*		valuesArray[0].moreRecordsAvailable = "moreRecordsAvailable_0";
*		valuesArray[0].queryIdentifier = "queryIdentifier_0";
*		valuesArray[0].queryString = "queryString_0";
*		valuesArray[1] = {};
*		valuesArray[1].Address = "Address_1";
*		valuesArray[1].AnnualRevenue = "AnnualRevenue_1";
*		valuesArray[1].BATCH_SIZE = "BATCH_SIZE_1";
*		valuesArray[1].City = "City_1";
*		valuesArray[1].CleanStatus = "CleanStatus_1";
*		valuesArray[1].Company = "Company_1";
*		valuesArray[1].CompanyDunsNumber = "CompanyDunsNumber_1";
*		valuesArray[1].ConvertedAccountId = "ConvertedAccountId_1";
*		valuesArray[1].ConvertedContactId = "ConvertedContactId_1";
*		valuesArray[1].ConvertedDate = "ConvertedDate_1";
*		valuesArray[1].ConvertedOpportunityId = "ConvertedOpportunityId_1";
*		valuesArray[1].Country = "Country_1";
*		valuesArray[1].CreatedById = "CreatedById_1";
*		valuesArray[1].CreatedDate = "CreatedDate_1";
*		valuesArray[1].CurrentGenerators__c = "CurrentGenerators__c_1";
*		valuesArray[1].DandbCompanyId = "DandbCompanyId_1";
*		valuesArray[1].Description = "Description_1";
*		valuesArray[1].Email = "Email_1";
*		valuesArray[1].EmailBouncedDate = "EmailBouncedDate_1";
*		valuesArray[1].EmailBouncedReason = "EmailBouncedReason_1";
*		valuesArray[1].Fax = "Fax_1";
*		valuesArray[1].FirstName = "FirstName_1";
*		valuesArray[1].Industry = "Industry_1";
*		valuesArray[1].IsConverted = true;
*		valuesArray[1].IsUnreadByOwner = true;
*		valuesArray[1].Jigsaw = "Jigsaw_1";
*		valuesArray[1].JigsawContactId = "JigsawContactId_1";
*		valuesArray[1].LastActivityDate = "LastActivityDate_1";
*		valuesArray[1].LastModifiedById = "LastModifiedById_1";
*		valuesArray[1].LastName = "LastName_1";
*		valuesArray[1].LastReferencedDate = "LastReferencedDate_1";
*		valuesArray[1].LastViewedDate = "LastViewedDate_1";
*		valuesArray[1].Latitude = "Latitude_1";
*		valuesArray[1].LeadSource = "LeadSource_1";
*		valuesArray[1].Longitude = "Longitude_1";
*		valuesArray[1].MasterRecordId = "MasterRecordId_1";
*		valuesArray[1].MobilePhone = "MobilePhone_1";
*		valuesArray[1].Name = "Name_1";
*		valuesArray[1].NumberOfEmployees = "NumberOfEmployees_1";
*		valuesArray[1].NumberofLocations__c = "NumberofLocations__c_1";
*		valuesArray[1].OwnerId = "OwnerId_1";
*		valuesArray[1].Phone = "Phone_1";
*		valuesArray[1].PhotoUrl = "PhotoUrl_1";
*		valuesArray[1].PostalCode = "PostalCode_1";
*		valuesArray[1].Primary__c = "Primary__c_1";
*		valuesArray[1].ProductInterest__c = "ProductInterest__c_1";
*		valuesArray[1].Rating = "Rating_1";
*		valuesArray[1].SICCode__c = "SICCode__c_1";
*		valuesArray[1].START_TIME = "START_TIME_1";
*		valuesArray[1].Salutation = "Salutation_1";
*		valuesArray[1].State = "State_1";
*		valuesArray[1].Status = "Status_1";
*		valuesArray[1].Street = "Street_1";
*		valuesArray[1].SystemModstamp = "SystemModstamp_1";
*		valuesArray[1].Title = "Title_1";
*		valuesArray[1].Website = "Website_1";
*		valuesArray[1].errorCode = "errorCode_1";
*		valuesArray[1].message = "message_1";
*		valuesArray[1].moreRecordsAvailable = "moreRecordsAvailable_1";
*		valuesArray[1].queryIdentifier = "queryIdentifier_1";
*		valuesArray[1].queryString = "queryString_1";
*		valuesArray[2] = {};
*		valuesArray[2].Address = "Address_2";
*		valuesArray[2].AnnualRevenue = "AnnualRevenue_2";
*		valuesArray[2].BATCH_SIZE = "BATCH_SIZE_2";
*		valuesArray[2].City = "City_2";
*		valuesArray[2].CleanStatus = "CleanStatus_2";
*		valuesArray[2].Company = "Company_2";
*		valuesArray[2].CompanyDunsNumber = "CompanyDunsNumber_2";
*		valuesArray[2].ConvertedAccountId = "ConvertedAccountId_2";
*		valuesArray[2].ConvertedContactId = "ConvertedContactId_2";
*		valuesArray[2].ConvertedDate = "ConvertedDate_2";
*		valuesArray[2].ConvertedOpportunityId = "ConvertedOpportunityId_2";
*		valuesArray[2].Country = "Country_2";
*		valuesArray[2].CreatedById = "CreatedById_2";
*		valuesArray[2].CreatedDate = "CreatedDate_2";
*		valuesArray[2].CurrentGenerators__c = "CurrentGenerators__c_2";
*		valuesArray[2].DandbCompanyId = "DandbCompanyId_2";
*		valuesArray[2].Description = "Description_2";
*		valuesArray[2].Email = "Email_2";
*		valuesArray[2].EmailBouncedDate = "EmailBouncedDate_2";
*		valuesArray[2].EmailBouncedReason = "EmailBouncedReason_2";
*		valuesArray[2].Fax = "Fax_2";
*		valuesArray[2].FirstName = "FirstName_2";
*		valuesArray[2].Industry = "Industry_2";
*		valuesArray[2].IsConverted = true;
*		valuesArray[2].IsUnreadByOwner = true;
*		valuesArray[2].Jigsaw = "Jigsaw_2";
*		valuesArray[2].JigsawContactId = "JigsawContactId_2";
*		valuesArray[2].LastActivityDate = "LastActivityDate_2";
*		valuesArray[2].LastModifiedById = "LastModifiedById_2";
*		valuesArray[2].LastName = "LastName_2";
*		valuesArray[2].LastReferencedDate = "LastReferencedDate_2";
*		valuesArray[2].LastViewedDate = "LastViewedDate_2";
*		valuesArray[2].Latitude = "Latitude_2";
*		valuesArray[2].LeadSource = "LeadSource_2";
*		valuesArray[2].Longitude = "Longitude_2";
*		valuesArray[2].MasterRecordId = "MasterRecordId_2";
*		valuesArray[2].MobilePhone = "MobilePhone_2";
*		valuesArray[2].Name = "Name_2";
*		valuesArray[2].NumberOfEmployees = "NumberOfEmployees_2";
*		valuesArray[2].NumberofLocations__c = "NumberofLocations__c_2";
*		valuesArray[2].OwnerId = "OwnerId_2";
*		valuesArray[2].Phone = "Phone_2";
*		valuesArray[2].PhotoUrl = "PhotoUrl_2";
*		valuesArray[2].PostalCode = "PostalCode_2";
*		valuesArray[2].Primary__c = "Primary__c_2";
*		valuesArray[2].ProductInterest__c = "ProductInterest__c_2";
*		valuesArray[2].Rating = "Rating_2";
*		valuesArray[2].SICCode__c = "SICCode__c_2";
*		valuesArray[2].START_TIME = "START_TIME_2";
*		valuesArray[2].Salutation = "Salutation_2";
*		valuesArray[2].State = "State_2";
*		valuesArray[2].Status = "Status_2";
*		valuesArray[2].Street = "Street_2";
*		valuesArray[2].SystemModstamp = "SystemModstamp_2";
*		valuesArray[2].Title = "Title_2";
*		valuesArray[2].Website = "Website_2";
*		valuesArray[2].errorCode = "errorCode_2";
*		valuesArray[2].message = "message_2";
*		valuesArray[2].moreRecordsAvailable = "moreRecordsAvailable_2";
*		valuesArray[2].queryIdentifier = "queryIdentifier_2";
*		valuesArray[2].queryString = "queryString_2";
*		Lead.createAll(valuesArray, successcallback, errorcallback, true);
*************************************************************************************/
Lead.createAll = function(valuesArray, successcallback, errorcallback, markForUpload){
	sync.log.trace("Entering Lead.createAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.createAll" , "createAll", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
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
			if(kony.sync.attributeValidation(valuestable,"Lead",errorcallback,true)===false){
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
		sync.log.trace("Entering  Lead.createAll->transactionSuccessCallback");
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
		sync.log.trace("Entering  Lead.createAll->checkIntegrity");
		arrayLength = valuesArray.length;
		for (var i=0; valuesArray != null && i < arrayLength; i++ ){
			var relationshipMap={};  
			relationshipMap = Lead.getRelationshipMap(relationshipMap,valuesArray[i]);
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
* Updates Lead using primary key in the local Database. The update will be
* merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Lead.prototype.updateByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering  Lead.prototype.updateByPK function");
	var pks = this.getPKTable();
	var valuestable = this.getValuesTable(false);
	Lead.updateByPK(pks,valuestable, successcallback,errorcallback,this.markForUpload);
};
Lead.updateByPK = function(pks,valuestable, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering  Lead.updateByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.updateByPK",  "updateByPk", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [ ];

	if(Lead.pkCheck(pks,wcs,errorcallback,"updating")===false){
		return;
	}

	if(kony.sync.attributeValidation(valuestable,"Lead",errorcallback,false)===false){
		return;
	}

	var relationshipMap={};  
	relationshipMap = Lead.getRelationshipMap(relationshipMap,valuestable);

	kony.sync.updateByPK(tbname, dbname, relationshipMap, pks,valuestable, successcallback,errorcallback, markForUpload, wcs);
};

/************************************************************************************
* Updates Lead(s) using where clause in the local Database. The update(s)
* will be merged with the enterprise datasource in the next Sync.
*************************************************************************************/
Lead.update = function(wcs, valuestable, successcallback,errorcallback,markForUpload){
	sync.log.trace("Entering Lead.update function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.update",  "update", errorcallback)){
		return;
	}

	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);

	if(kony.sync.attributeValidation(valuestable,"Lead",errorcallback,false)===false){
		return;
	}
	function executeSuccess(){
		sync.log.trace("Entering  Lead.update-> success callback of Integrity Check");
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, Lead.getPKTable());
	}

	if(kony.sync.enableORMValidations){
		var relationshipMap={};  
		relationshipMap = Lead.getRelationshipMap(relationshipMap,valuestable);
		kony.sync.checkIntegrity(dbname,relationshipMap,executeSuccess,errorcallback);
	}
	else{
		kony.sync.single_update_execute(dbname,tbname,valuestable,wcs,successcallback,errorcallback,true, markForUpload, Lead.getPKTable());
	}
};

/************************************************************************************
* Updates Lead(s) satisfying one or more where clauses in the local Database. 
* The update(s) will be merged with the enterprise datasource in the next Sync.
* Based upon kony.sync.enableORMValidations flag, validations will be enabled/disabled.
* e.g.	var inputArray = [];
*		inputArray[0] = {};
*		inputArray[0].changeSet = {};
*		inputArray[0].changeSet.Address = "Address_updated0";
*		inputArray[0].changeSet.AnnualRevenue = "AnnualRevenue_updated0";
*		inputArray[0].changeSet.BATCH_SIZE = "BATCH_SIZE_updated0";
*		inputArray[0].changeSet.City = "City_updated0";
*		inputArray[0].whereClause = "where Id = '0'";
*		inputArray[1] = {};
*		inputArray[1].changeSet = {};
*		inputArray[1].changeSet.Address = "Address_updated1";
*		inputArray[1].changeSet.AnnualRevenue = "AnnualRevenue_updated1";
*		inputArray[1].changeSet.BATCH_SIZE = "BATCH_SIZE_updated1";
*		inputArray[1].changeSet.City = "City_updated1";
*		inputArray[1].whereClause = "where Id = '1'";
*		inputArray[2] = {};
*		inputArray[2].changeSet = {};
*		inputArray[2].changeSet.Address = "Address_updated2";
*		inputArray[2].changeSet.AnnualRevenue = "AnnualRevenue_updated2";
*		inputArray[2].changeSet.BATCH_SIZE = "BATCH_SIZE_updated2";
*		inputArray[2].changeSet.City = "City_updated2";
*		inputArray[2].whereClause = "where Id = '2'";
*		Lead.updateAll(inputArray,successcallback,errorcallback);
*************************************************************************************/
Lead.updateAll = function(inputArray, successcallback, errorcallback, markForUpload) {
	sync.log.trace("Entering Lead.updateAll function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.updateAll",  "updateAll", errorcallback)){
		return;
	}
	var dbname = "b972d075-dd15-4910-ac1c-9edda03ea089";
	var tbname = "Lead";
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
			if(kony.sync.attributeValidation(valuestable,"Lead",errorcallback,false)===false){
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
		kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,errorcallback,markForUpload, Lead.getPKTable());
	}
	
		function transactionSuccessCallback(){
		sync.log.trace("Entering  Lead.updateAll->transactionSuccessCallback");
		if(!isError){
			kony.sync.massUpdate(dbname, tbname,inputArray,successcallback,transactionErrorCallback,markForUpload, Lead.getPKTable());
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
		sync.log.trace("Entering  Lead.updateAll->checkIntegrity");
		for (var i=0; ((inputArray) != null) && i < inputArray.length; i++ ){
			var relationshipMap={}; 
			relationshipMap = Lead.getRelationshipMap(relationshipMap,inputArray[i].changeSet);
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
* Deletes Lead using primary key from the local Database. The record will be
* deleted from the enterprise datasource in the next Sync.
*************************************************************************************/
Lead.prototype.deleteByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Lead.prototype.deleteByPK function");
	var pks = this.getPKTable();
	Lead.deleteByPK(pks,successcallback,errorcallback,this.markForUpload);
};
Lead.deleteByPK = function(pks, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering Lead.deleteByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.deleteByPK",  "deleteByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var twcs = [];
	var deletedRows;
	var record = "";
	if(Lead.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}	
	twcs = kony.sync.CreateCopy(wcs);
	function LeadTransactionCallback(tx){
		sync.log.trace("Entering Lead.deleteByPK->Lead_PKPresent successcallback");
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
	
	function LeadErrorCallback(){
		sync.log.error("Entering Lead.deleteByPK->relationship failure callback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}

	}
	function LeadSuccessCallback(){
		sync.log.trace("Entering Lead.deleteByPK->relationship success callback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering Lead.deleteByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
		
		var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(dbconnection != null){
			kony.sync.startTransaction(dbconnection, LeadTransactionCallback, LeadSuccessCallback, LeadErrorCallback, "Single Execute");
		}

};

/************************************************************************************
* Deletes Lead(s) using where clause from the local Database. The record(s)
* will be deleted from the enterprise datasource in the next Sync.
* e.g. Lead.remove("where Address like 'A%'", successcallback,errorcallback, true);
*************************************************************************************/
Lead.remove = function(wcs, successcallback,errorcallback, markForUpload){
	sync.log.trace("Entering Lead.remove->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.remove",  "remove", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	markForUpload = kony.sync.getUploadStatus(markForUpload);
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Lead_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, false, markForUpload, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Lead_removeSuccess(){
		sync.log.trace("Entering Lead.remove->Lead_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering Lead.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering Lead.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Lead_removeTransactioncallback, Lead_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Deletes Lead using primary key from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
Lead.prototype.removeDeviceInstanceByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Lead.prototype.removeDeviceInstanceByPK function");
	var pks = this.getPKTable();
	Lead.removeDeviceInstanceByPK(pks,successcallback,errorcallback);
};
Lead.removeDeviceInstanceByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering Lead.removeDeviceInstanceByPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.removeDeviceInstanceByPK",  "removeDeviceInstanceByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	var wcs = [];
	var isError = false;
	var pkNotFound = false;
	var deletedRows;
	if(Lead.pkCheck(pks,wcs,errorcallback,"deleting")===false){
		return;
	}
	
	function LeadTransactionCallback(tx){
		sync.log.trace("Entering Lead.removeDeviceInstanceByPK -> LeadTransactionCallback");
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
	
	function LeadErrorCallback(){
		sync.log.error("Entering Lead.removeDeviceInstanceByPK -> LeadErrorCallback");
		if(isError === false){
			kony.sync.verifyAndCallClosure(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	
	function LeadSuccessCallback(){
		sync.log.trace("Entering Lead.removeDeviceInstanceByPK -> LeadSuccessCallback");
		if(pkNotFound === true){
			kony.sync.verifyAndCallClosure(pkNotFoundErrCallback);
			return;
		}
		
		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, {rowsdeleted:1});
		}
	}
	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering Lead.removeDeviceInstanceByPK -> PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
	
	var dbconnection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
	if(dbconnection != null){
		kony.sync.startTransaction(dbconnection, LeadTransactionCallback, LeadSuccessCallback, LeadErrorCallback, "Single Execute");
	}

};

/************************************************************************************
* Deletes Lead(s) using where clause from the local Database. This will
* not have any effect in enterprise datasource in subsequent sync cycles
*************************************************************************************/
Lead.removeDeviceInstance = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Lead.removeDeviceInstance->main function");
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var twcs = wcs;
	var isError = false;
	var rowsDeleted;

	function Lead_removeTransactioncallback(tx){
		wcs = " " + wcs;
		rowsDeleted = kony.sync.deleteBatch(tx, tbname, wcs, true, null, errorcallback)
		if(rowsDeleted === false){
			isError = true;
		}
	}
	function Lead_removeSuccess(){
		sync.log.trace("Entering Lead.remove->Lead_removeSuccess function");

		if(!isError){
			kony.sync.verifyAndCallClosure(successcallback, rowsDeleted);
		}
	}
	function errorcallbackWrapper(){
		sync.log.trace("Entering Lead.remove->error callback function");
		if(!isError){
			kony.sync.showTransactionError(errorcallback);
		}
		if(kony.sync.errorObject != null){
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.errorObject);
			kony.sync.errorObject = null;
		}
	}
	function deleteEntity(){
		sync.log.trace("Entering Lead.remove->delete Entity function");
		var connection = kony.sync.getConnectionOnly(dbname, dbname, errorcallback);
		if(connection != null){
			kony.sync.startTransaction(connection, Lead_removeTransactioncallback, Lead_removeSuccess, errorcallbackWrapper);
		}
	}
	deleteEntity();
};

/************************************************************************************
* Retrieves Lead using primary key from the local Database. 
*************************************************************************************/
Lead.prototype.getAllDetailsByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Lead.prototype.getAllDetailsByPK function");
	var pks = this.getPKTable();
	Lead.getAllDetailsByPK(pks,successcallback,errorcallback);
};
Lead.getAllDetailsByPK = function(pks, successcallback,errorcallback){
	sync.log.trace("Entering Lead.getAllDetailsByPK-> main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.getAllDetailsByPK",  "getAllDetailsByPK", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	var wcs = [];
	if(Lead.pkCheck(pks,wcs,errorcallback,"searching")===false){
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
		sync.log.trace("Entering Lead.getAllDetailsByPK-> success callback function");
		successcallback(Lead.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
	kony.sync.single_select_execute(dbname, sql, params, mySuccCallback, errorcallback);
};

/************************************************************************************
* Retrieves Lead(s) using where clause from the local Database. 
* e.g. Lead.find("where Address like 'A%'", successcallback,errorcallback);
*************************************************************************************/
Lead.find = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Lead.find function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.find",  "find", errorcallback)){
		return;
	}
	//wcs will be a string formed by the user.
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	wcs = kony.sync.validateWhereClause(wcs);
	var sql = "select * from \"" + tbname + "\" " + wcs;
	function mySuccCallback(res){
		kony.sync.verifyAndCallClosure(successcallback, Lead.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
	kony.sync.single_select_execute(dbname, sql, null, mySuccCallback, errorcallback);
};

/************************************************************************************
* Marks instance of Lead with given primary key for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Lead.prototype.markForUploadbyPK = function(successcallback, errorcallback){
	sync.log.trace("Entering Lead.prototype.markForUploadbyPK function");
	var pks = this.getPKTable();
	Lead.markForUploadbyPK(pks, successcallback, errorcallback);
};
Lead.markForUploadbyPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Lead.markForUploadbyPK function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.markForUploadbyPK",  "markForUploadbyPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	var isError = false;
	var recordsFound = false;
	var recordsMarkedForUpload = 0;
	var wcs = [];
	if(Lead.pkCheck(pks, wcs, errorcallback, "marking for upload by PK")===false){
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
* Marks instance(s) of Lead matching given where clause for upload. This will 
* enable deferred records to merge with the enterprise datasource in the next Sync.
*************************************************************************************/
Lead.markForUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Lead.markForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.markForUpload",  "markForUpload", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
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
		sync.log.trace("Entering Lead.markForUpload->single_transaction_callback");
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
		sync.log.trace("Entering Lead.markForUpload->single_transaction_success_callback");
		kony.sync.verifyAndCallClosure(successcallback, {count:num_records_main});
	}
	
	function single_transaction_error_callback(){
		sync.log.error("Entering Lead.markForUpload->single_transaction_error_callback");
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
* Retrieves instance(s) of Lead pending for upload. Records are marked for
* pending upload if they have been updated or created locally and the changes have
* not been merged with enterprise datasource.
*************************************************************************************/
Lead.getPendingUpload = function(wcs, successcallback,errorcallback){
	sync.log.trace("Entering Lead.getPendingUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
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
		sync.log.trace("Entering Lead.getPendingUpload->successcallback function");
		kony.sync.verifyAndCallClosure(successcallback, Lead.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Lead pending for acknowledgement. This is relevant
* when the SyncObject is part of the SyncScope whose SyncStrategy is PersistentSync.
* In persistent Sync the  records in the local database are put into a pending 
* acknowledgement state after an upload.
*************************************************************************************/
Lead.getPendingAcknowledgement = function(successcallback, errorcallback){
	sync.log.trace("Entering Lead.getPendingAcknowledgement->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	var currentversion = kony.sync.getCurrentVersionNumber(tbname);
	var mysql="select * from \""+tbname+"\" WHERE "+kony.sync.mainTableChangeTypeColumn+ " is not null AND "+kony.sync.mainTableChangeTypeColumn+" <> -1 AND "+kony.sync.mainTableSyncVersionColumn+" <> "+currentversion+" AND "+kony.sync.mainTableChangeTypeColumn+" NOT LIKE '9%'"; 
	kony.sync.single_select_execute(dbname, mysql, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Lead.getPendingAcknowledgement success callback function");
		kony.sync.verifyAndCallClosure(successcallback, Lead.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}
};

/************************************************************************************
* Retrieves instance(s) of Lead deferred for upload.
*************************************************************************************/
Lead.getDeferredUpload = function(wcs,successcallback,errorcallback){
	sync.log.trace("Entering Lead.getDeferredUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
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
		sync.log.trace("Entering Lead.getDeferredUpload->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, Lead.convertTableToObject(kony.sync.filterNullsFromSelectResult(res)));
	}	
};

/************************************************************************************
* Rollbacks all changes to Lead in local database to last synced state
*************************************************************************************/
Lead.rollbackPendingLocalChanges = function(successcallback, errorcallback){
	sync.log.trace("Entering Lead.rollbackPendingLocalChanges->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, null, mySuccesscallback, errorcallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Lead.rollbackPendingLocalChanges->main function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}		
};

/************************************************************************************
* Rollbacks changes to Lead's record with given primary key in local 
* database to last synced state
*************************************************************************************/
Lead.prototype.rollbackPendingLocalChangesByPK = function(successcallback,errorcallback){
	sync.log.trace("Entering Lead.prototype.rollbackPendingLocalChangesByPK function");
	var pks = this.getPKTable();
	Lead.rollbackPendingLocalChangesByPK(pks,successcallback,errorcallback);
};
Lead.rollbackPendingLocalChangesByPK = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Lead.rollbackPendingLocalChangesByPK->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.rollbackPendingLocalChangesByPK",  "rollbackPendingLocalChangesByPK", errorcallback)){
		return;
	}	
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	var wcs = [];
	if(Lead.pkCheck(pks,wcs,errorcallback,"rollbacking")===false){
		return;
	}	
	kony.sync.konySyncRollBackPendingChanges(tbname, dbname, wcs, mySuccesscallback, pkNotFoundErrCallback);
	function mySuccesscallback(res){
		sync.log.trace("Entering Lead.rollbackPendingLocalChangesByPK->success callback function");
		kony.sync.verifyAndCallClosure(successcallback, res);
	}	
	function pkNotFoundErrCallback(){
		sync.log.error("Entering Lead.rollbackPendingLocalChangesByPK->PK not found callback");
		kony.sync.pkNotFoundErrCallback(errorcallback,tbname);
	}
};

/************************************************************************************
* isRecordDeferredForUpload returns true or false depending on whether Lead's record  
* with given primary key got deferred in last sync
*************************************************************************************/
Lead.prototype.isRecordDeferredForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  Lead.prototype.isRecordDeferredForUpload function");
	var pks = this.getPKTable();
	Lead.isRecordDeferredForUpload(pks,successcallback,errorcallback);
};
Lead.isRecordDeferredForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Lead.isRecordDeferredForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.isRecordDeferredForUpload",  "isRecordDeferredForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	var wcs = [] ;
	var flag;
	if(Lead.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering Lead.isRecordDeferredForUpload->successcallback function");
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
* isRecordPendingForUpload returns true or false depending on whether Lead's record  
* with given primary key is pending for upload
*************************************************************************************/
Lead.prototype.isRecordPendingForUpload = function(successcallback,errorcallback){
	sync.log.trace("Entering  Lead.prototype.isRecordPendingForUpload function");
	var pks = this.getPKTable();
	Lead.isRecordPendingForUpload(pks,successcallback,errorcallback);
};
Lead.isRecordPendingForUpload = function(pks, successcallback, errorcallback){
	sync.log.trace("Entering Lead.isRecordPendingForUpload->main function");
	if(!kony.sync.isSyncInitialized(errorcallback)){
		return;
	}
	if(!kony.sync.validateInput(arguments, "Lead.isRecordPendingForUpload",  "isRecordPendingForUpload", errorcallback)){
		return;
	}
	var dbname = kony.sync.getDBName();
	var tbname = Lead.getTableName();
	var wcs = [] ;
	var flag;
	if(Lead.pkCheck(pks,wcs,errorcallback,"selecting")===false){
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
		sync.log.trace("Entering Lead.isRecordPendingForUpload->successcallback function");
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
Lead.removeCascade = function(tx, wcs, errorcallback, markForUpload, isCascade, parentTable, isLocal){
	sync.log.trace("Entering Lead.removeCascade function");
	var tbname = Lead.getTableName();
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


Lead.convertTableToObject = function(res){
	sync.log.trace("Entering Lead.convertTableToObject function");
	objMap = [];
	if(res!==null){
		for(var i in res){
			var obj = new Lead();
			obj.Address = res[i].Address;
			obj.AnnualRevenue = res[i].AnnualRevenue;
			obj.BATCH_SIZE = res[i].BATCH_SIZE;
			obj.City = res[i].City;
			obj.CleanStatus = res[i].CleanStatus;
			obj.Company = res[i].Company;
			obj.CompanyDunsNumber = res[i].CompanyDunsNumber;
			obj.ConvertedAccountId = res[i].ConvertedAccountId;
			obj.ConvertedContactId = res[i].ConvertedContactId;
			obj.ConvertedDate = res[i].ConvertedDate;
			obj.ConvertedOpportunityId = res[i].ConvertedOpportunityId;
			obj.Country = res[i].Country;
			obj.CreatedById = res[i].CreatedById;
			obj.CreatedDate = res[i].CreatedDate;
			obj.CurrentGenerators__c = res[i].CurrentGenerators__c;
			obj.DandbCompanyId = res[i].DandbCompanyId;
			obj.Description = res[i].Description;
			obj.Email = res[i].Email;
			obj.EmailBouncedDate = res[i].EmailBouncedDate;
			obj.EmailBouncedReason = res[i].EmailBouncedReason;
			obj.Fax = res[i].Fax;
			obj.FirstName = res[i].FirstName;
			obj.Id = res[i].Id;
			obj.Industry = res[i].Industry;
			obj.IsConverted = res[i].IsConverted;
			obj.IsDeleted = res[i].IsDeleted;
			obj.IsUnreadByOwner = res[i].IsUnreadByOwner;
			obj.Jigsaw = res[i].Jigsaw;
			obj.JigsawContactId = res[i].JigsawContactId;
			obj.LastActivityDate = res[i].LastActivityDate;
			obj.LastModifiedById = res[i].LastModifiedById;
			obj.LastModifiedDate = res[i].LastModifiedDate;
			obj.LastName = res[i].LastName;
			obj.LastReferencedDate = res[i].LastReferencedDate;
			obj.LastViewedDate = res[i].LastViewedDate;
			obj.Latitude = res[i].Latitude;
			obj.LeadSource = res[i].LeadSource;
			obj.Longitude = res[i].Longitude;
			obj.MasterRecordId = res[i].MasterRecordId;
			obj.MobilePhone = res[i].MobilePhone;
			obj.Name = res[i].Name;
			obj.NumberOfEmployees = res[i].NumberOfEmployees;
			obj.NumberofLocations__c = res[i].NumberofLocations__c;
			obj.OwnerId = res[i].OwnerId;
			obj.Phone = res[i].Phone;
			obj.PhotoUrl = res[i].PhotoUrl;
			obj.PostalCode = res[i].PostalCode;
			obj.Primary__c = res[i].Primary__c;
			obj.ProductInterest__c = res[i].ProductInterest__c;
			obj.Rating = res[i].Rating;
			obj.SICCode__c = res[i].SICCode__c;
			obj.START_TIME = res[i].START_TIME;
			obj.Salutation = res[i].Salutation;
			obj.State = res[i].State;
			obj.Status = res[i].Status;
			obj.Street = res[i].Street;
			obj.SystemModstamp = res[i].SystemModstamp;
			obj.Title = res[i].Title;
			obj.Website = res[i].Website;
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

Lead.filterAttributes = function(valuestable, insert){
	sync.log.trace("Entering Lead.filterAttributes function");
	var attributeTable = {};
	attributeTable.Address = "Address";
	attributeTable.AnnualRevenue = "AnnualRevenue";
	attributeTable.BATCH_SIZE = "BATCH_SIZE";
	attributeTable.City = "City";
	attributeTable.CleanStatus = "CleanStatus";
	attributeTable.Company = "Company";
	attributeTable.CompanyDunsNumber = "CompanyDunsNumber";
	attributeTable.ConvertedAccountId = "ConvertedAccountId";
	attributeTable.ConvertedContactId = "ConvertedContactId";
	attributeTable.ConvertedDate = "ConvertedDate";
	attributeTable.ConvertedOpportunityId = "ConvertedOpportunityId";
	attributeTable.Country = "Country";
	attributeTable.CreatedById = "CreatedById";
	attributeTable.CreatedDate = "CreatedDate";
	attributeTable.CurrentGenerators__c = "CurrentGenerators__c";
	attributeTable.DandbCompanyId = "DandbCompanyId";
	attributeTable.Description = "Description";
	attributeTable.Email = "Email";
	attributeTable.EmailBouncedDate = "EmailBouncedDate";
	attributeTable.EmailBouncedReason = "EmailBouncedReason";
	attributeTable.Fax = "Fax";
	attributeTable.FirstName = "FirstName";
	attributeTable.Id = "Id";
	attributeTable.Industry = "Industry";
	attributeTable.IsConverted = "IsConverted";
	attributeTable.IsUnreadByOwner = "IsUnreadByOwner";
	attributeTable.Jigsaw = "Jigsaw";
	attributeTable.JigsawContactId = "JigsawContactId";
	attributeTable.LastActivityDate = "LastActivityDate";
	attributeTable.LastModifiedById = "LastModifiedById";
	attributeTable.LastName = "LastName";
	attributeTable.LastReferencedDate = "LastReferencedDate";
	attributeTable.LastViewedDate = "LastViewedDate";
	attributeTable.Latitude = "Latitude";
	attributeTable.LeadSource = "LeadSource";
	attributeTable.Longitude = "Longitude";
	attributeTable.MasterRecordId = "MasterRecordId";
	attributeTable.MobilePhone = "MobilePhone";
	attributeTable.Name = "Name";
	attributeTable.NumberOfEmployees = "NumberOfEmployees";
	attributeTable.NumberofLocations__c = "NumberofLocations__c";
	attributeTable.OwnerId = "OwnerId";
	attributeTable.Phone = "Phone";
	attributeTable.PhotoUrl = "PhotoUrl";
	attributeTable.PostalCode = "PostalCode";
	attributeTable.Primary__c = "Primary__c";
	attributeTable.ProductInterest__c = "ProductInterest__c";
	attributeTable.Rating = "Rating";
	attributeTable.SICCode__c = "SICCode__c";
	attributeTable.START_TIME = "START_TIME";
	attributeTable.Salutation = "Salutation";
	attributeTable.State = "State";
	attributeTable.Status = "Status";
	attributeTable.Street = "Street";
	attributeTable.SystemModstamp = "SystemModstamp";
	attributeTable.Title = "Title";
	attributeTable.Website = "Website";
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
			sync.log.warn("Ignoring the attribute " + k + " for the SyncObject Lead. "  + k + " not defined as an attribute in SyncConfiguration.");
		}else if(!kony.sync.isNull(PKTable[k])) {
			if(insert===false){
				sync.log.warn("Ignoring the primary key " + k + " for the SyncObject Lead. Primary Key should not be the part of the attributes to be updated in the local device database.");
			}else if(PKTable[k].isAutoGen){
				sync.log.warn("Ignoring the auto-generated primary key " + k + " for the SyncObject Lead. Auto-generated Primary Key should not be the part of the attributes to be inserted in the local device database.");
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

Lead.formOrderByClause = function(orderByMap){
	sync.log.trace("Entering Lead.formOrderByClause function");
	if(!kony.sync.isNull(orderByMap)){
		var valuestable = kony.sync.convertOrderByMapToValuesTable(orderByMap);
		//var filteredValuestable = Lead.filterAttributes(valuestable, true);
		return kony.sync.convertToValuesTableOrderByMap(orderByMap,valuestable);
	}
	return null;
};

Lead.prototype.getValuesTable = function(isInsert){
	sync.log.trace("Entering Lead.prototype.getValuesTable function");
	var valuesTable = {};
	valuesTable.Address = this.Address;
	valuesTable.AnnualRevenue = this.AnnualRevenue;
	valuesTable.BATCH_SIZE = this.BATCH_SIZE;
	valuesTable.City = this.City;
	valuesTable.CleanStatus = this.CleanStatus;
	valuesTable.Company = this.Company;
	valuesTable.CompanyDunsNumber = this.CompanyDunsNumber;
	valuesTable.ConvertedAccountId = this.ConvertedAccountId;
	valuesTable.ConvertedContactId = this.ConvertedContactId;
	valuesTable.ConvertedDate = this.ConvertedDate;
	valuesTable.ConvertedOpportunityId = this.ConvertedOpportunityId;
	valuesTable.Country = this.Country;
	valuesTable.CreatedById = this.CreatedById;
	valuesTable.CreatedDate = this.CreatedDate;
	valuesTable.CurrentGenerators__c = this.CurrentGenerators__c;
	valuesTable.DandbCompanyId = this.DandbCompanyId;
	valuesTable.Description = this.Description;
	valuesTable.Email = this.Email;
	valuesTable.EmailBouncedDate = this.EmailBouncedDate;
	valuesTable.EmailBouncedReason = this.EmailBouncedReason;
	valuesTable.Fax = this.Fax;
	valuesTable.FirstName = this.FirstName;
	if(isInsert===true){
		valuesTable.Id = this.Id;
	}
	valuesTable.Industry = this.Industry;
	valuesTable.IsConverted = this.IsConverted;
	valuesTable.IsUnreadByOwner = this.IsUnreadByOwner;
	valuesTable.Jigsaw = this.Jigsaw;
	valuesTable.JigsawContactId = this.JigsawContactId;
	valuesTable.LastActivityDate = this.LastActivityDate;
	valuesTable.LastModifiedById = this.LastModifiedById;
	valuesTable.LastName = this.LastName;
	valuesTable.LastReferencedDate = this.LastReferencedDate;
	valuesTable.LastViewedDate = this.LastViewedDate;
	valuesTable.Latitude = this.Latitude;
	valuesTable.LeadSource = this.LeadSource;
	valuesTable.Longitude = this.Longitude;
	valuesTable.MasterRecordId = this.MasterRecordId;
	valuesTable.MobilePhone = this.MobilePhone;
	valuesTable.Name = this.Name;
	valuesTable.NumberOfEmployees = this.NumberOfEmployees;
	valuesTable.NumberofLocations__c = this.NumberofLocations__c;
	valuesTable.OwnerId = this.OwnerId;
	valuesTable.Phone = this.Phone;
	valuesTable.PhotoUrl = this.PhotoUrl;
	valuesTable.PostalCode = this.PostalCode;
	valuesTable.Primary__c = this.Primary__c;
	valuesTable.ProductInterest__c = this.ProductInterest__c;
	valuesTable.Rating = this.Rating;
	valuesTable.SICCode__c = this.SICCode__c;
	valuesTable.START_TIME = this.START_TIME;
	valuesTable.Salutation = this.Salutation;
	valuesTable.State = this.State;
	valuesTable.Status = this.Status;
	valuesTable.Street = this.Street;
	valuesTable.SystemModstamp = this.SystemModstamp;
	valuesTable.Title = this.Title;
	valuesTable.Website = this.Website;
	valuesTable.errorCode = this.errorCode;
	valuesTable.message = this.message;
	valuesTable.moreRecordsAvailable = this.moreRecordsAvailable;
	valuesTable.queryIdentifier = this.queryIdentifier;
	valuesTable.queryString = this.queryString;
	return valuesTable;
};

Lead.prototype.getPKTable = function(){
	sync.log.trace("Entering Lead.prototype.getPKTable function");
	var pkTable = {};
	pkTable.Id = {key:"Id",value:this.Id};
	return pkTable;
};

Lead.getPKTable = function(){
	sync.log.trace("Entering Lead.getPKTable function");
	var pkTable = [];
	pkTable.push("Id");
	return pkTable;
};

Lead.pkCheck = function(pks,wcs,errorcallback,opName){
	sync.log.trace("Entering Lead.pkCheck function");
	var wc = [];
	if(kony.sync.isNull(pks)){
		sync.log.error("Primary Key Id not specified in  " + opName + "  an item in Lead");
		kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Id",opName,"Lead")));
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
			sync.log.error("Primary Key Id not specified in  " + opName + "  an item in Lead");
			kony.sync.verifyAndCallClosure(errorcallback, kony.sync.getErrorTable(kony.sync.errorCodePrimaryKeyNotSpecified,kony.sync.getPrimaryKeyNotSpecifiedMsg("Id",opName,"Lead")));
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

Lead.validateNull = function (valuestable,errorcallback){
	sync.log.trace("Entering Lead.validateNull function");
	return true;
};

Lead.validateNullInsert = function (valuestable,errorcallback){
	sync.log.trace("Entering Lead.validateNullInsert function");
	return true;
};
Lead.getRelationshipMap = function(relationshipMap,valuestable){
	sync.log.trace("Entering Lead.getRelationshipMap function");
	var r1 = {};
	return relationshipMap;
};

Lead.getTableName = function(){
	return "Lead";
};


// **********************************End Lead's helper methods************************