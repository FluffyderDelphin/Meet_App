Feature: As a user I should be able to expand and collapse Events, to see and hide Details.

    Scenario: Events are collapsed by default.
        Given the user has not clicked on any Event
        Then they are collapsed by default.

    Scenario: Clicking on a ShowDetails Button expand the Details of the Event.
        Given the Event is collapsed
        When  the User clicks on a ShowDetails Button
        Then the Event expands showing Details.

    Scenario: When the Details of an Event are expanded, User can Hide the Details by clicking "HideDetails".
        Given the Event is expanded.
        When  the user clicks on a HideDetails Button
        Then the Details get hidden