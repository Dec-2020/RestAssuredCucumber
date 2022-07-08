@APIGetReq
Feature: Perform CRUD operations

  Scenario: To perform Get operation on Employee DB
    Given Base URI is "http://3.85.227.102:8088/employees"
    When I perform the get operation
    Then I get status code 200
