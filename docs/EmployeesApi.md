# ManageEmployeesApIs.EmployeesApi

All URIs are relative to *https://mg-eval-test.apigee.net/demo/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**employeesEmployeeIDDelete**](EmployeesApi.md#employeesEmployeeIDDelete) | **DELETE** /employees/{employeeID} | Deletes an Employee record
[**employeesEmployeeIDGet**](EmployeesApi.md#employeesEmployeeIDGet) | **GET** /employees/{employeeID} | Retrieves an Employee record
[**employeesGet**](EmployeesApi.md#employeesGet) | **GET** /employees | Retrieves all Employee records
[**employeesPost**](EmployeesApi.md#employeesPost) | **POST** /employees | Creates an Employees


<a name="employeesEmployeeIDDelete"></a>
# **employeesEmployeeIDDelete**
> employeesEmployeeIDDelete(employeeID)

Deletes an Employee record

Deletes the profile of an employee.

### Example
```javascript
var ManageEmployeesApIs = require('manage_employees_ap_is');
var defaultClient = ManageEmployeesApIs.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ManageEmployeesApIs.EmployeesApi();

var employeeID = 56; // Number | The unique ID of employee.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.employeesEmployeeIDDelete(employeeID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeID** | **Number**| The unique ID of employee. | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="employeesEmployeeIDGet"></a>
# **employeesEmployeeIDGet**
> Employee employeesEmployeeIDGet(employeeID)

Retrieves an Employee record

Retrieves the profile of an employee.

### Example
```javascript
var ManageEmployeesApIs = require('manage_employees_ap_is');
var defaultClient = ManageEmployeesApIs.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ManageEmployeesApIs.EmployeesApi();

var employeeID = 56; // Number | The unique ID of employee.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.employeesEmployeeIDGet(employeeID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employeeID** | **Number**| The unique ID of employee. | 

### Return type

[**Employee**](Employee.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="employeesGet"></a>
# **employeesGet**
> ERRORUNKNOWN employeesGet()

Retrieves all Employee records

Retrieves the profile of all employees.

### Example
```javascript
var ManageEmployeesApIs = require('manage_employees_ap_is');
var defaultClient = ManageEmployeesApIs.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ManageEmployeesApIs.EmployeesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.employeesGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ERRORUNKNOWN**](ERRORUNKNOWN.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="employeesPost"></a>
# **employeesPost**
> employeesPost(opts)

Creates an Employees

Registers a new employee for the client.

### Example
```javascript
var ManageEmployeesApIs = require('manage_employees_ap_is');
var defaultClient = ManageEmployeesApIs.ApiClient.instance;

// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

var apiInstance = new ManageEmployeesApIs.EmployeesApi();

var opts = { 
  'employee': new ManageEmployeesApIs.Employee() // Employee | The Employee
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.employeesPost(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employee** | [**Employee**](Employee.md)| The Employee | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

