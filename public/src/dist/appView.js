function creatProfile() {
    try {
        var userProfile = document.querySelector(".userProfile");
        var profileHtml = "\n        <div class=\"main\">\n        <h2 class=\"main__h2\">welcome <span class=\"main__h2__span\"></span></h2>\n        <h3 class=\"main__h3\">lets create your profile</h3>\n        <form class=\"profileForm\" onsubmit=\"createMyCard(event)\">\n\n        \n         <label class=\"label\" for=\"age\">what is your age:</label> \n         <br>\n         <input class=\"input\" type=\"number\" name=\"age\">  \n         <br>\n\n         <label class=\"label\" for=\"gender\">whats your gender:</label>\n         <br>\n         <input class=\"inputRadio\" type=\"radio\" name=\"gender\" value=\"man\">man\n         <input class=\"inputRadio\" type=\"radio\" name=\"gender\" value=\"women\">women\n         <input class=\"inputRadio\" type=\"radio\" name=\"gender\" value=\"other\">other\n         <br>\n\n           <label class=\"label\" for=\"location\">where do you live:</label>\n           <br>\n           <input class=\"input\" type=\"text\" name=\"location\">\n           <br>\n\n            <label class=\"label\" for=\"height\">what is your height:</label>\n            <br>\n            <input class=\"input\" type=\"number\" name=\"height\">\n            <br>\n\n            <label class=\"label\" for=\"bodytype\">what is your bodyType:</label>\n            <br>\n            <input class=\"input\" type=\"number\" name=\"bodytype\">\n            <br>\n\n            <label for=\"kids\">do you have kids:</label>\n            <br>\n            <input class=\"inputRadio\" type=\"radio\" name=\"kids\" value=\"ido\">I do\n            <input class=\"inputRadio\" type=\"radio\" name=\"kids\" value=\"no\">no kids\n            <br>\n\n            <label for=\"smoking\">are you smoking:</label>\n            <br>\n            <input class=\"inputRadio\" type=\"radio\" name=\"smoking\" value=\"ido\">I do\n            <input class=\"inputRadio\" type=\"radio\" name=\"smoking\" value=\"no\">no \n            <br>\n\n            <label for=\"education\">Education:</label>\n          <br>\n          <input type=\"radio\" name=\"education\" value=\"high school\">high school\n          <input type=\"radio\" name=\"education\" value=\"University\">University \n          <input type=\"radio\" name=\"education\" value=\"didnt study\">didnt study\n          <br>\n\n          <label for=\"job\"> Job:</label>\n          <br>\n          <input type=\"radio\" name=\"job\" value=\"yes\">yes\n          <input type=\"radio\" name=\"job\" value=\"no\">No\n          <input type=\"radio\" name=\"job\" value=\"between\">Between Jobs\n          <br>\n\n          <label for=\"relationship\">The type of relationship:</label>\n          <br>\n          <input type=\"radio\" name=\"relationship\" value=\"love\">looking for love\n          <input type=\"radio\" name=\"relationship\" value=\"affair\">Looking for an affair\n          <input type=\"radio\" name=\"relationship\" value=\"Friendship\">Friendship\n          <br>\n\n            <label class=\"label\" for=\"yourself\">few words about yourself:</label>\n              <br>\n              <textarea name=\"info\" id=\"\" cols=\"30\" rows=\"10\"></textarea>\n              <br>\n\n              <label for=\"religious\">Religious belief:</label>\n              <br>\n              <input type=\"radio\" name=\"religious\" value=\"religious\">religious\n              <input type=\"radio\" name=\"religious\" value=\"secular\">secular\n              <input type=\"radio\" name=\"religious\" value=\"traditional\">traditional\n              <br>\n\n              <button id=\"btnCreatProfile\" type=\"submit\">creat-profile</button>\n        </form>\n        </div>\n        ";
        if (userProfile)
            userProfile.innerHTML = profileHtml;
    }
    catch (error) {
        console.error(error);
    }
}
function myPreferences() {
    try {
        var userProfile = document.querySelector(".userProfile");
        var myPreferences_1 = "\n        <div>\n        <h2>Now we will ask you about your preferences</h2>\n        <h3>Your preferences will affect the adjustments you receive</h3>\n        <form onsubmit=\"createMyPrefferance(event)\">\n          <label for=\"height\">prefferd height:</label>\n          <br>\n          <input type=\"radio\" name=\"height\" value=\"Tall\">very tall - 1.80+\n          <input type=\"radio\" name=\"height\" value=\"avarage\">average height - 1.70 / 1.79 \n          <input type=\"radio\" name=\"height\" value=\"Short\"> - 1.55 / 1.69\n          <br>\n\n          <label for=\"bodytype\">prefferd body:</label>\n          <br>\n          <input type=\"radio\" name=\"bodytype\" value=\"full\">Full body structure\n          <input type=\"radio\" name=\"bodytype\" value=\"average\">Average body type\n          <input type=\"radio\" name=\"bodytype\" value=\"lean\">lean body structure\n          <br>\n\n          <label for=\"kids\">intrested in kids:</label>\n          <br>\n          <input type=\"radio\" name=\"kids\" vlaue=\"yes\">yes\n          <input type=\"radio\" name=\"kids\" vlaue=\"not now\">not now\n          <input type=\"radio\" name=\"kids\" vlaue=\"never\">never\n          <br>\n\n          <label for=\"smoking\">Smoking:</label>\n          <br>\n          <input type=\"radio\" name=\"smoking\" value=\"no\">No\n          <input type=\"radio\" name=\"smoking\" value=\"yes\">Yes\n          <input type=\"radio\" name=\"smoking\" value=\"sometimes\">Sometime\n          <br>\n\n          <label for=\"hangout\">likes to hang out:</label>\n          <br>\n          <input type=\"radio\" name=\"hangout\" value=\"home\">Home\n          <input type=\"radio\" name=\"hangout\" value=\"outside\">Outside\n          <input type=\"radio\" name=\"hangout\" value=\"both\">Both\n          <br>\n\n          <label for=\"education\">Education:</label>\n          <br>\n          <input type=\"radio\" name=\"education\" value=\"high school\">high school\n          <input type=\"radio\" name=\"education\" value=\"University\">University \n          <input type=\"radio\" name=\"education\" value=\"didnt study\">didnt study\n          <br>\n\n          <label for=\"job\"> Job:</label>\n          <br>\n          <input type=\"radio\" name=\"job\" value=\"yes\">yes\n          <input type=\"radio\" name=\"job\" value=\"no\">No\n          <input type=\"radio\" name=\"job\" value=\"between\">Between Jobs\n          <br>\n\n          <label for=\"relationship\">The type of relationship:</label>\n          <br>\n          <input type=\"radio\" name=\"relationship\" value=\"love\">looking for love\n          <input type=\"radio\" name=\"relationship\" value=\"affair\">Looking for an affair\n          <input type=\"radio\" name=\"relationship\" value=\"Friendship\">Friendship\n          <br>\n\n          <label for=\"religious\">Religious belief:</label>\n          <br>\n          <input type=\"radio\" name=\"religious\" value=\"religious\">religious\n          <input type=\"radio\" name=\"religious\" value=\"secular\">secular\n          <input type=\"radio\" name=\"religious\" value=\"traditional\">traditional\n          <br>\n          <button type=\"submit\">creat</button>\n        </form>\n    </div>\n    ";
        if (userProfile)
            userProfile.innerHTML = myPreferences_1;
    }
    catch (error) {
        console.error(error);
    }
}
