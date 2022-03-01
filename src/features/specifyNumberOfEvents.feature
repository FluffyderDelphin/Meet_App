Feature:As a user I should be able to set specify the numbers of Events, so that I can limit the Amount I see on the List.

    Scenario: When the user hasnt set a Number of Events the default Number displayed is 32
        Given the user hasnt specified a Number and looks for Events.
        When the User looks for the Events. Then
        Then number of Events displayed is 32 by default.

    Scenario: When the User specifies a Number of Events. The Number of Events displayed change acording to that Number.
        Given the User looks for Events.
        When the user specifies a number of Events.
        Then the Number of displayed Events changes.