/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			disabled: true,
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				showPeriod: false,
				displaySeconds: false,
				dateFormat: "dddd MMM D",
				timezone: "America/New_York"
			}
		},
		{
			module: "worldclock",
			position: "top_left",
			config: {
				style: "left",
				clocks: [
					{
						title: "Malawi",
						timezone: "Africa/Cairo"
					}
				]
			}
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
				updateInterval: 3800000,
				fadeSpeed: 5000,
				morningStartTime: 4,
				remoteFile: "compliments.json"
			}
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Fairborn",
				locationID: "4509884",
				appid: "3363c462898336929d00b75189f77146",
				roundTemp: true,
				onlyTemp: true
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Fairborn",
				locationID: "4509884",
				appid: "3363c462898336929d00b75189f77146",
				roundTemp: true,
				colored: true,
				maxNumberOfDays: 10
			}
		},
		{
			module: "MMM-quotes",
			position: "bottom_bar",
			config: {
				classes: 'thin medium bright',
				authorClasses: 'thin small normal',
				updateInterval: 3800000
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
