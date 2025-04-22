const apiURL = "https://api.weatherapi.com/v1/current.json?q=Cancun&key=4e5e576e864142e780a45600252403";
        fetch(apiURL)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not OK");
                }
                return response.json(); 
            })
            .then(data => {
                const weatherInfo = data;
                city.innerHTML = weatherInfo.location.name + " , " +  weatherInfo.location.country; 
                temp.innerHTML = `Temp:  ${weatherInfo.current.temp_c} °C`;
                condition.src = "https:" + weatherInfo.current.condition.icon;
            })
            .catch(error => {
                console.error("Error:", error);
            })