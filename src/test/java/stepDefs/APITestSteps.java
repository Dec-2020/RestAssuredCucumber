package stepDefs;

import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class APITestSteps {
	
	Response response;
	RequestSpecification request;
	
	@Given("Base URI is {string}")
	public void base_URI_is(String URI) {
	    request = RestAssured.given()
	    					.baseUri(URI);
	}

	@When("I perform the get operation")
	public void i_perform_the_get_operation() {
	    response = request.get();
	}

	@Then("I get status code {int}")
	public void i_get_status_code(int responseCode) {
	   Assert.assertEquals(response.statusCode(), responseCode);
	}

}
