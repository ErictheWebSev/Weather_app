var t=e=>document.querySelector(e),o=async e=>await(await fetch(e)).json(),c=ReactDOM.createRoot(t("main")),l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Delta","Ebonyi","Edo","Ekiti","Enugu","Abuja","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nassarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"],d=ReactDOM.createRoot(t(".body"));async function n(e){let a=await o(`https://api.weatherapi.com/v1/forecast.json?key=146400f3fe054f9694b230714231408&q=${e}&days=3`);m(a)}d.render(r.map((e,a)=>React.createElement("p",{key:a,onClick:()=>{t("nav").classList.add("hidden"),n(e)}},e)));n("Lagos");function m(e){let a=new Date(e.location.localtime);c.render([React.createElement("div",{key:1,className:"grid bg-center bg-cover lg:col-span-2 bg-no-repeat grid-rows-2 gap-2 rounded-xl",style:{backgroundImage:"url('data/bg.jpg')"}},React.createElement("div",{className:"flex items-start px-4 pt-4 flex-col gap-2",style:{textShadow:"2px 1px 3px black"}},React.createElement("b",null,l[a.getDay()]),React.createElement("span",null,a.toDateString().split(" ").slice(1).join(" ")),React.createElement("span",{className:"flex gap-1 items-center"},React.createElement("i",{className:"not-italic symbol text-sm"},"location_on"),e.location.region,", ",e.location.country)),React.createElement("div",{className:"flex px-4 pb-4 items-baseline gap-2 justify-start flex-col"},React.createElement("img",{src:e.current.condition.icon}),React.createElement("h1",{className:"text-5xl font-bold"},e.current.temp_c," \xB0C"),React.createElement("p",{className:"font-semibold"},e.current.condition.text))),React.createElement("div",{key:2,className:"lg:col-span-3 p-8 flex flex-col gap-8"},React.createElement("div",{className:"flex flex-col gap-3"},React.createElement("div",null,React.createElement("b",null,"PERCIPITATION"),React.createElement("span",{className:"float-right"},e.current.precip_mm," %")),React.createElement("div",null,React.createElement("b",null,"HUMIDITY"),React.createElement("span",{className:"float-right"},e.current.humidity,"%")),React.createElement("div",null,React.createElement("b",null,"WIND"),React.createElement("span",{className:"float-right"},e.current.wind_kph," km/h"))),React.createElement("div",{className:"grid grid-cols-4"},React.createElement("div",{className:"flex flex-col justify-center gap-1 rounded-xl"},React.createElement("img",{src:e.current.condition.icon}),React.createElement("div",{className:"flex flex-col gap-2"},React.createElement("span",{className:"text-center"},a.toDateString().split(" ").shift()),React.createElement("b",{className:"text-center"},e.current.temp_c," \xB0C"))),e.forecast.forecastday.map((s,i)=>React.createElement("div",{key:i,className:"flex flex-col justify-center gap-1 rounded-xl"},React.createElement("img",{src:s.day.condition.icon}),React.createElement("div",{className:"flex flex-col gap-2"},React.createElement("span",{className:"text-center"},new Date(s.date).toDateString().split(" ").shift()),React.createElement("b",{className:"text-center"},s.day.avgtemp_c,"\xB0C"))))),React.createElement("button",{onClick:()=>t("nav").classList.remove("hidden"),className:"bg-gradient-to-r flex items-center gap-1 justify-center from-button-grad-start to-button-grad-end py-1.5 font-bold rounded-xl"},React.createElement("i",{className:"not-italic symbol text-base"},"location_on")," Change Location"))])}
