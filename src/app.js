let apiKey = "52o39a0be8e7e44c8561e303aatfcbbf";
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apikey}&units=metric`;

axios.get(url).then(displayTemperature);
