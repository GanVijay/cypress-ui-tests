
Feature: Google Search Test and API validation test

    Scenario: Simple Google Test
        Given I navigate to Google
        When I search for dogs
        Then I expect to see results for dogs 

 