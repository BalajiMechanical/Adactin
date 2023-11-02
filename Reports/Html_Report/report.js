$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user Launch The Url In Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The Username In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Launch_The_Url_In_Adactin_Application()"
});
formatter.result({
  "duration": 7998826100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Username_In_Username_Field()"
});
formatter.result({
  "duration": 229030500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_Password_In_Password_Field()"
});
formatter.result({
  "duration": 149633900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2438130200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User Search The Hotel Type",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-the-hotel-type",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user Select The Location In DropDown Box",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user Select The Hotel In DropDown Box",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Select The Room Type In DropDown Box",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Select The Number Of Rooms In DropDown Box",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Enter The CheckIn Date In DropDown Box",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Enter The CheckOut Date Out DropDown Box",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Select The No Of Adults In Room In DropDown Box",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Select The Children In Room In DropDown Box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Click The Search Button And It Navigates To Next Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Location_In_DropDown_Box()"
});
formatter.result({
  "duration": 519338300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Hotel_In_DropDown_Box()"
});
formatter.result({
  "duration": 389922600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Room_Type_In_DropDown_Box()"
});
formatter.result({
  "duration": 337730000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Number_Of_Rooms_In_DropDown_Box()"
});
formatter.result({
  "duration": 472752500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_CheckIn_Date_In_DropDown_Box()"
});
formatter.result({
  "duration": 152002200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Enter_The_CheckOut_Date_Out_DropDown_Box()"
});
formatter.result({
  "duration": 131965400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_No_Of_Adults_In_Room_In_DropDown_Box()"
});
formatter.result({
  "duration": 292725400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Select_The_Children_In_Room_In_DropDown_Box()"
});
formatter.result({
  "duration": 294759200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_Click_The_Search_Button_And_It_Navigates_To_Next_Page()"
});
formatter.result({
  "duration": 824585700,
  "status": "passed"
});
});