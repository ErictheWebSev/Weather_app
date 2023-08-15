const E = (x) => document.querySelector(x);
const API = async (x) => await (await fetch(x)).json() 
const main = ReactDOM.createRoot(E('main'));
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const cities = [ "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nassarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"]

const modal = ReactDOM.createRoot(E('.body'));

async function fetchX(city){
    const data = await API(`http://api.weatherapi.com/v1/forecast.json?key=146400f3fe054f9694b230714231408&q=${city}&days=3`);
    render(data);
}

modal.render(cities.map((a,b) => 
    <p key={b} onClick={() => {E('nav').classList.add("hidden"); fetchX(a)}}>{a}</p>
))

fetchX('Lagos');
function render(data){
    const date = new Date(data.location.localtime);
    main.render(
        [
    
            <div key={1} className="grid bg-center bg-cover lg:col-span-2 bg-no-repeat grid-rows-2 gap-2 rounded-xl" style={{backgroundImage: `url('data/bg.jpg')`}}>
                <div className="flex items-start px-4 pt-4 flex-col gap-2" style={{textShadow: `2px 1px 3px black`}}>
                    <b>{DAYS[date.getDay()]}</b>
                    <span>{date.toDateString().split(' ').slice(1).join(' ')}</span>
                    <span className="flex gap-1 items-center"><i className="not-italic symbol text-sm">location_on</i>{data.location.region}, {data.location.country}</span>
                </div>
                <div className="flex px-4 pb-4 items-baseline gap-2 justify-start flex-col">
                    <img src={data.current.condition.icon}/>
                    <h1 className="text-5xl font-bold">{data.current.temp_c} °C</h1>
                    <p className="font-semibold">{data.current.condition.text}</p>
                </div>
            </div>,
            <div key={2} className="lg:col-span-3 p-8 flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                    <div>
                        <b>PERCIPITATION</b>
                        <span className="float-right">{data.current.precip_mm} %</span>
                    </div>
                    <div>
                        <b>HUMIDITY</b>
                        <span className="float-right">{data.current.humidity}%</span>
                    </div>
                    <div>
                        <b>WIND</b>
                        <span className="float-right">{data.current.wind_kph} km/h</span>
                    </div>
                </div>
                <div className="grid grid-cols-4">
                    <div className="flex flex-col justify-center gap-1 rounded-xl">
                        <img src={data.current.condition.icon}/>
                        <div className="flex flex-col gap-2">
                            <span className="text-center">{date.toDateString().split(' ').shift()}</span>
                            <b className="text-center mt-2">{data.current.temp_c} °C</b>
                        </div>
                    </div>
                    {
                        data.forecast.forecastday.map((a,b) => 
                            <div key={b} className="flex flex-col justify-center gap-1 rounded-xl">
                                <img src={a.day.condition.icon}/>
                                <div className="flex flex-col gap-2">
                                    <span className="text-center">{(new Date(a.date)).toDateString().split(' ').shift()}</span>
                                    <b className="text-center">{a.day.avgtemp_c}°C</b>
                                </div>
                            </div>
                        )
                    }
                </div>
                <button onClick={() => E('nav').classList.remove("hidden")} className="bg-gradient-to-r flex items-center gap-1 justify-center from-button-grad-start to-button-grad-end py-1.5 font-bold rounded-xl"><i className="not-italic symbol text-base">location_on</i> Change Location</button>
            </div>
        ]
    )
}