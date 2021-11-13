# Lab 8 - Starter
Name: Luke Menezes (no partner)
<br>
Check your understanding answers: <br>
<ol> Answer 1: We should set up the automated tests as a Github action that runs whenever code is pushed. In this way, everytime we change something in our codebase, the tests will run to make sure we have not broken anything with our changes. </ol>
<ol> Answer 2: If the function to be tested is part of the user interface, then end to end testing can check if it is working, since it emulates user actions. If the function exists outside of the user's scope, then end to end testing should not be used to check if it returns the correct output.  </ol>
<ol> Answer 3: This would be a bad idea, since the message feature involves interacting with another application and user, which is impossible with unit testing. </ol>
<ol> Answer 4: Since this is a self-contained app feature, this feature can be tested with unit testing, simply by trying to send a message with more than 80 characters, and testing to see if the application prevents it from sending. </ol>