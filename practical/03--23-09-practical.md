## Rules
Submit 3 files - js, html and css.
Please ask questions if any of this is not clear and also look at the helper text on each part under NOTE.

### Part 1: Baseline Fetch
Your starting point is the Open-Meteo historical archive endpoint:
`https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2022-01-01&end_date=2022-01-01&hourly=temperature_2m`

1. **Make the Call:** Write a JavaScript function that uses `fetch()` to call this exact URL and parse the JSON response.
2. **Inspect the Data:** Look at the returned object in your browser's developer console. You will see two parallel arrays under the `hourly` key: `time` and `temperature_2m`.
3. **The Deliverable:** Write a loop that prints the time alongside its corresponding temperature to the console. 
   * *Add a code comment answering: What was the peak temperature on this day in the data?*
     
NOTE: if you open that first request link in Chrome you can use the pretty-print toggle to display the json in a more readable way
<img width="420" height="535" alt="image" src="https://github.com/user-attachments/assets/7bf80227-e48a-4d54-91a7-3a156cc6557b" />


### Part 2: Parameter Playground
APIs are powerful because they are dynamic. Modify the URL parameters to fetch custom data instead of the default Berlin fallback.
Use input fields to allow the user to input their latitude, longitude, start and end dates and a submit button (you can use event listener 
for the submit button and getElementById(id).value to get the value for each input field).

1. **Change Location:** Find the latitude and longitude of your hometown (or a city you want to visit) and update the `latitude` and `longitude` parameters in the URL.
2. **Change the Timeframe:** Update `start_date` and `end_date` to cover a full 7-day week in the past (e.g., the week of your birthday last year). **Format:** `YYYY-MM-DD`.
3. **Add More Data:** Modify the `hourly` parameter to request `precipitation` and `wind_speed_10m` in addition to the temperature. *(Hint: Separate multiple variables with a comma, e.g., `hourly=temperature_2m,precipitation`).*
4. **The Deliverable:** Update your fetch call with the new URL also tying together with the input field logic. Verify in your console network tab that you are receiving 168 hours (7 days) of data for all three weather variables.

Note: You can use the graphical interface here https://open-meteo.com/en/docs?hourly=temperature_2m,relative_humidity_2m to get a working API url (search for API URL) for this task


### Part 3: Visualizing the Data
Raw JSON arrays aren't useful for end-users. Build a simple user interface to display your custom data on the webpage. 

**The Data Table**
Write a JavaScript function that dynamically creates an HTML `<table>` or an unordered list (`<ul>`). Loop through your 7-day arrays and display a row/list item for every 6th hour showing the Date/Time, Temperature, and Wind Speed.


# Expected Visual Output

Your final output rendered on the webpage should look similar to the table below. Notice how the rows skip ahead by 6 hours instead of showing every single hour of the day. 

Note: remember all of the array methods that are available to use to complete that part about every 6 hours. In the most simplest form you can use a loop and then only display if the hours are 12 or 6. In order to determine that you can use .includes(text) method on the given string e.g. myDateTime.includes('06:00').
For the visuals, remember innerHTML stuff and the way we added the new items to the container. Also remember to clear the container if necessary.

| Date & Time | Temperature | Wind Speed |
| :--- | :--- | :--- |
| 5/1/2023, 00:00:00 | 9.5 °C | 12.2 km/h |
| 5/1/2023, 06:00:00 | 10.2 °C | 14.5 km/h |
| 5/1/2023, 12:00:00 | 15.8 °C | 18.0 km/h |
| 5/1/2023, 18:00:00 | 14.1 °C | 15.2 km/h |
| 5/2/2023, 00:00:00 | 8.3 °C | 9.8 km/h |
| 5/2/2023, 06:00:00 | 9.1 °C | 11.4 km/h |
| 5/2/2023, 12:00:00 | 16.5 °C | 14.8 km/h |
| 5/2/2023, 18:00:00 | 13.2 °C | 12.5 km/h |
| ... | ... | ... |



