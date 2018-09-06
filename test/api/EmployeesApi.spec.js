/**
 * Manage Employees APIs
 * This API supports all services required to manage Employees on HR system
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 1.0.16
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ManageEmployeesApIs);
  }
}(this, function(expect, ManageEmployeesApIs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ManageEmployeesApIs.EmployeesApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EmployeesApi', function() {
    describe('employeesEmployeeIDDelete', function() {
      it('should call employeesEmployeeIDDelete successfully', function(done) {
        //uncomment below and update the code to test employeesEmployeeIDDelete
        //instance.employeesEmployeeIDDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeesEmployeeIDGet', function() {
      it('should call employeesEmployeeIDGet successfully', function(done) {
        //uncomment below and update the code to test employeesEmployeeIDGet
        //instance.employeesEmployeeIDGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeesGet', function() {
      it('should call employeesGet successfully', function(done) {
        //uncomment below and update the code to test employeesGet
        //instance.employeesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('employeesPost', function() {
      it('should call employeesPost successfully', function(done) {
        //uncomment below and update the code to test employeesPost
        //instance.employeesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
