import countries from "world-countries";

const formattedCountries = countries.map((country)=>{
    if(country.name.common === "Israel") {
        return {
            "name": {
                "common": "Palestine",
                "official": "State of Palestine",
                "native": {
                    "ara": {
                        "official": "دولة فلسطين",
                        "common": "فلسطين"
                    }
                }
            },
            "tld": [
                ".ps",
                "فلسطين."
            ],
            "cca2": "PS",
            "ccn3": "275",
            "cca3": "PSE",
            "cioc": "PLE",
            "independent": false,
            "status": "officially-assigned",
            "currencies": {
                "EGP": {
                    "name": "Egyptian pound",
                    "symbol": "E£"
                },
                "ILS": {
                    "name": "Israeli new shekel",
                    "symbol": "₪"
                },
                "JOD": {
                    "name": "Jordanian dinar",
                    "symbol": "JD"
                }
            },
            "idd": {
                "root": "+9",
                "suffixes": [
                    "70"
                ]
            },
            "capital": [
                "Ramallah"
            ],
            "altSpellings": [
                "PS",
                "Palestine, State of",
                "State of Palestine",
                "Dawlat Filasṭin"
            ],
            "region": "Asia",
            "subregion": "Western Asia",
            "languages": {
                "ara": "Arabic"
            },
            "latlng": [
                31.9,
                35.2
            ],
            "landlocked": false,
            "borders": [
                "ISR",
                "EGY",
                "JOR"
            ],
            "area": 6220,
            "flag": "🇵🇸",
        }
    }

    return(
    {
        value: country.cca2,
        label: country.name.common,
        flag: country.flag,
        latlng: country.latlng,
        region: country.region,
    }
)})

const useCountries = () =>{
    const getAll = () =>formattedCountries;

    const getByValue = (value:string)=>{
        return formattedCountries.find(item=> item.value === value)
    }


    return {
        getAll,
        getByValue
    }
}

export default useCountries;