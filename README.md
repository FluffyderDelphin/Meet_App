# Meet_App

<img src="public\img\Screenshot.jpg" alt="Screenshot" width="1200"/>

GH-Pages Link: https://fluffyderdelphin.github.io/Meet_App/

## What does this Meet_App do ?

This App allows the User to Login in with his Google Acount and View Events provided by an CarrerFoundry Email. 
The App allows the User to Filter and see Data about the Events displayed in 2 Graphs. This Project is build with the Jest testing Framewokr in mind, wich tests the Key Features of the App.

## Tech used
- React
- Aws serverless Functions
- Google Calendar API
- OAuth2
- Jest
- Pupeteer
- Recharts

## Project Reflection
### What was your role for this project and what tasks did you face?

First Time using Aws Serverless Functions, wich was the most diffecult part to get to work, because it was harder to Pinpoint Errors and the YMLL File was very space Sensesative, wich I was not used to mainly writting in Javascript.

### What decisions did you take and why? What were the consequences?
I decided to use React Boostrap to Style this Project. The Issue was that many tested failer after that, because React Bootstrap creates Mulitble Nodes for some Elements. I could solve this Problem by finding out about the .hostnodes function trough Research. Aplying that made the Tests work again.

### If you could, what would you do differently?
Maybe improving the way I aprouch TDD for this Project, beinng more mindful of testing each Step one by one. I was still getting used to TDD here. 
Also I may consider using Snapshot testing for some Features in the Futere, wich I want to try out how that works.


### What lessons did you learn during this project?
- Aprouching Test driven Development.
- Using Serverless Functions 
- Making React Boostrap work with Jest. 
- And creating Graphs from given Data





## User Stories and Scenarios

- Feature 1:

As a user I should be able to “filter events by city”
So that I can see the list of events that take place in that city


SCENARIO 1: 
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

SCENARIO 2: 
Given the main page is open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed

SCENARIO 3: 
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city



- Feature 2:

As a user I should be able to expand and collapse Events, to see and hide Details. 

SCENARIO 1:
Given the user has not clicked on any Event
Then they are collapsed by default.

SCENARIO 2:
Given the Event is collapsed
When the User clicks on it (or a Button 'expand').
Then the Event expands showing Details.

SCENARIO 3:
Given the Event is expanded.
When the user clicks on it (or a Button 'hide'). 
Then the Even gets collapsed again. 

- Feature 3:
As a user I should be able to set specify  the numbers of Events, so that I can limit the Amount I see on the List. 

SCENARIO 1:
Given the user hasnt specified a Number and looks for Events.
When the User looks for the Events.
The number of Events displayed is 32 by default. 

SCENARIO 2:
Given the User looks for Events.
When the user specifies a number of Events.
Then the Number of displayed Events changes.


- Feature 4:

As a user  I should be able to view my information offline, so that I can check Events even without Internet Access. 

 SCENARIO 1:
Given the User has no internet Connection.
When there is cached Data.
Then the user schould still be able to view the Events stored in the cache.

SCENARIO 2:
Given the User has no internet Connection.
When the users tries to change the Search Settings.
Then he gets an Error Message.

- Feature 5:

As a user I should be able to view Charts that visualizes Event Data, so I can soo how the Events are distributed over different Cities

SCENARIO 1:
Given there are a number of Events in different Cities
When the Users opens the Chart. 
Then he can see how many Events are distributed over different Cities on the Chart.
