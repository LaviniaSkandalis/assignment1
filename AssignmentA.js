const cities = [
    'Abu Dhabi',
    'Abuja',
    'Cairo',
    '???',
    'Amman',
    'Islamabad',
    'Tokyo',
    'Beirut',
    '???',
    'Ottowa',
    'New Delhi',
    'BrasÃ­lia'
];

const countries = [
    'UAE',
    'Nigeria',
    'Egypt',
    '???',
    'Jordan',
    'Pakistan',
    'Japan',
    'Lebanon',
    '???',
    'Canada',
    'India',
    'Brazil'
];
    
    
    for (let i = 0; i < cities.length && countries.length; i++) {
        if (cities[i] === '???') {
        console.log("Oops!");
       } else {
        console.log(cities[i], countries[i]);
    }
}