$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/restAPI/APITest.feature");
formatter.feature({
  "name": "Perform CRUD operations",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@APIGetReq"
    }
  ]
});
formatter.scenario({
  "name": "To perform Get operation on Employee DB",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@APIGetReq"
    }
  ]
});
formatter.step({
  "name": "Base URI is \"http://3.85.227.102:8088/employees\"",
  "keyword": "Given "
});
formatter.match({
  "location": "APITestSteps.base_URI_is(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I perform the get operation",
  "keyword": "When "
});
formatter.match({
  "location": "APITestSteps.i_perform_the_get_operation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I get status code 200",
  "keyword": "Then "
});
formatter.match({
  "location": "APITestSteps.i_get_status_code(int)"
});
formatter.result({
  "status": "passed"
});
});