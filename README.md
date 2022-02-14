<Describe: placesVisited()>

Test: This function will display "Portland".
Code: placesVisted();
Input: pdx.name;
Expected Outcome: 'Portland'

Test: This function will display "San Francisco".
Code: placesVisted();
Input: sfo.name;
Expected Outcome: 'San Francisco'

Test: This function will display "Seattle".
Code: placesVisted();
Input: sea.name;
Expected Outcome: 'Seattle'

Test: This function will display "Unites States of America"
Code: placesVisited();
Input: usa.name;
Expected Output: "United States of America"

Test: This function will obtain objects with objects.
Code: placesVisited();
Input: usa.cities;
Expected Output: 'Portland', 'San Francisco', 'Seattle'

Test: This function will concatenate "Let's go" with the desired place.
code: places.unshift(phrase) + ""
Expected outcome: "Let's go to Portland!", "Let's go to San Francisco!", "Let's go to Seattle!"




Website requirements:
-keep track of places visited
  -destinations should be objects w/ multiple properties 
    i.e location, time of year, other notes
-display said properties with places when is clicked by user
-add a list page where user can add tasks
add option for user to "cross-off" task
-allow user to remove task

