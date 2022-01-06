// queryselectors
const form=document.querySelector('form');
const btn=document.querySelector('#button');
const aqi=document.querySelector('#aqi');
const inputValue=document.querySelector('#cityName');
const section=document.querySelector('section');


form.addEventListener('submit',(e)=>{

    e.preventDefault();
    section.innerText=''
 
    const city=inputValue.value;
    const endInfo ={params:{key:'a87c30fe92b44a66831101943212812', q:city, aqi:'yes'}}

    axios.get('https://api.weatherapi.com/v1/current.json',endInfo)
    .then((result)=>{


    const resultDiv=document.createElement('div');
    resultDiv.classList.add('result-div');

    const listLocation=document.createElement('ul');
    listLocation.classList.add('location-list');

    const conditionImg= document.createElement('img')
    conditionImg.src=result.data.current.condition.icon;
    resultDiv.appendChild(conditionImg);

    const headlocation=document.createElement('h2');
    headlocation.innerText='Location Details'
    listLocation.appendChild(headlocation)

    const name=document.createElement('li');
    name.innerText=`Location: ${result.data.location.name}`;
    listLocation.appendChild(name);

    const ifRegion=result.data.location.region;
    if(ifRegion!=''){
        const region=document.createElement('li');
        region.innerText=`State or Region of Location: ${result.data.location.region}`;
        listLocation.appendChild(region);
    }

    const country=document.createElement('li');
    country.innerText=`Location Country: ${result.data.location.country}`;
    listLocation.appendChild(country);

    const lat=document.createElement('li');
    lat.innerText=`Latitude: ${result.data.location.lat}`;
    listLocation.appendChild(lat);

    const lon=document.createElement('li');
    lon.innerText=`Longitude: ${result.data.location.lon}`;
    listLocation.appendChild(lon);

    const localtime=document.createElement('li');
    localtime.innerText=`Local Date and Time: ${result.data.location.localtime}`;
    listLocation.appendChild(localtime);

   

    const listCurrent=document.createElement('ul');
    listCurrent.classList.add('current-list');

    const current=document.createElement('li');
    current.innerText=`Weather Condition: ${result.data.current.condition.text}`;
    listCurrent.appendChild(current);

    const temp_c=document.createElement('li');
    temp_c.innerHTML=`Tempurature in  &#176;C: ${result.data.current.temp_c}`;
    listCurrent.appendChild(temp_c);

    const humidity=document.createElement('li');
    humidity.innerText=`Humidity as Percentage: ${result.data.current.humidity}`;
    listCurrent.appendChild(humidity);

    const precip_mm=document.createElement('li');
    precip_mm.innerText=`Precipitation Amount in Milimeters: ${result.data.current.precip_mm}`;
    listCurrent.appendChild(precip_mm);

    const wind_degree=document.createElement('li');
    wind_degree.innerText=`Wind Direction in Degrees: ${result.data.current.wind_degree}`;
    listCurrent.appendChild(wind_degree);

    const wind_dir=document.createElement('li');
    wind_dir.innerText=`Wind Direction as 16 Point Compass: ${result.data.current.wind_dir}`;
    listCurrent.appendChild(wind_dir);

    const wind_kph=document.createElement('li');
    wind_kph.innerText=`Wind Speed in Kilometer Per Hour: ${result.data.current.wind_kph}`;
    listCurrent.appendChild(wind_kph);

    const pressure_mb=document.createElement('li');
    pressure_mb.innerText=`Pressure in Milibars: ${result.data.current.pressure_mb}`;
    listCurrent.appendChild(pressure_mb);

    const cloud=document.createElement('li');
    cloud.innerText=`Cloud Coverage as Percentage: ${result.data.current.cloud}`;
    listCurrent.appendChild(cloud);

    const gust_kph=document.createElement('li');
    gust_kph.innerText=`Wind Gust in Kilometer Per Hour: ${result.data.current.gust_kph}`;
    listCurrent.appendChild(gust_kph);

    resultDiv.appendChild(listCurrent);
    

    if(aqi.checked==true){

        const airQuality = document.createElement('ul')
        airQuality.classList.add('airquality-list');

        const headaqi=document.createElement('h2');
        headaqi.innerText='AQI Details'
        airQuality.appendChild(headaqi)

        const co = document.createElement('li')
        co.innerText=`CO: ${result.data.current.air_quality.co}`
        airQuality.appendChild(co)

        const no2 = document.createElement('li')
        no2.innerHTML=`NO<sub>2</sub>: ${result.data.current.air_quality.no2}`
        airQuality.appendChild(no2)

        const o3 = document.createElement('li')
        o3.innerHTML=`O<sub>3</sub>: ${result.data.current.air_quality.o3}`
        airQuality.appendChild(o3)

        const so2 = document.createElement('li')
        so2.innerHTML=`SO<sub>2</sub>: ${result.data.current.air_quality.so2}`
        airQuality.appendChild(so2)

        resultDiv.appendChild(airQuality)
    }

    resultDiv.appendChild(listLocation);
    
    section.appendChild(resultDiv);


})
})
