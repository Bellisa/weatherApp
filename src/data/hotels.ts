export let getHotels: () => IHotel[] = (): IHotel[] => {
    return [
        {
            id: 0,
            title: 'Universal Cabana',
            address: 'Orlando',
            description: 'Best one!',
            phone: '+3242353434',
            picture: 'assets/images/1.jpg',
            photos: [
                'assets/images/2.jpg',
                'assets/images/3.jpg'
            ],
            weather: {
                temperature: 12,
                wind: 11,
                icon: 'sun'
            },
            profile: {
                followers: 112,
                following: 11,
                photo: 'assets/images/4.jpg'
            },
            stars: 3
        },
        {
            id: 1,
            title: 'Kharkov plaza',
            address: 'Kharkov',
            description: 'Five Stars',
            phone: '+3242353434',
            picture: 'assets/images/5.jpg',
            photos: [
                'assets/images/6.jpg'
            ],
            weather: {
                temperature: 5,
                wind: 4,
                icon: 'rain'
            },
            profile: {
                followers: 12,
                following: 111,
                photo: 'assets/images/8.jpg'
            },
            stars: 4
        },
        {
            id: 2,
            title: 'Hotel name',
            address: 'Orlando',
            description: 'Lorem ipson0',
            phone: '+3242353434',
            picture: 'assets/images/9.jpg',
            photos: [
                'assets/images/10.jpg',
                'assets/images/11.jpg'
            ],
            weather: {
                temperature: -2,
                wind: 2,
                icon: 'cloud'
            },
            profile: {
                followers: 45,
                following: 78,
                photo: 'assets/images/12.jpg'
            },
            stars: 5
        }
    ];
};
