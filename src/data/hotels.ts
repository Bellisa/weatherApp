import { IHotel } from 'src/interfaces/IHotel';

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
        },
        {
            id: 3,
            title: 'Charter Boat',
            address: 'Destin, United States',
            description: 'My Chance Charters has been fishing the waters out of Destin for over 30 years and they are excited to share their vast experience with you. ',
            phone: '+3242353434',
            picture: 'assets/images/14.jpg',            
            photos: [
                'assets/images/15.jpg',
                'assets/images/16.jpg'
            ],
            weather: {
                'temperature': -2,
                'wind': 2,
                'icon': 'cloud'
            },
            profile: {
                'followers': 45,
                'following': 78,
                'photo': 'assets/images/15.jpg'
            },
            stars: 4
        },
        {
            id: 4,
            title: 'Mighty Fine Charters ',
            address: 'Destin, United States',
            description: 'Mighty Fine Charters is an exciting new addition to the Destin harbor. Owned by mother of two Lindley Staples Ward, this charter boat is the result of generations of family fishing and the desire to provide fun, affordable, family fishing trips.',
            phone: '+3242353434',
            picture: 'assets/images/17.jpg',
            
            photos: [
                'assets/images/18.jpg',
                'assets/images/19.jpg'
            ],
            weather: {
                'temperature': -2,
                'wind': 2,
                'icon': 'cloud'
            },
            profile: {
                'followers': 45,
                'following': 78,
                'photo': 'assets/images/20.jpg'
            },
            stars: 5
        },
        {
            id: 5,
            title: 'Relentless Charter Fishing ',
            address: 'Destin, United States',
            description: 'Mighty Fine Charters is an exciting new addition to the Destin harbor. Owned by mother of two Lindley Staples Ward, this charter boat is the result of generations of family fishing and the desire to provide fun, affordable, family fishing trips.',
            phone: '+3242353434',
            picture: 'assets/images/21.jpg',            
            photos: [
                'assets/images/22.jpg',
                'assets/images/20.jpg'
            ],
            weather: {
                'temperature': -2,
                'wind': 2,
                'icon': 'cloud'
            },
            profile: {
                'followers': 45,
                'following': 78,
                'photo': 'assets/images/19.jpg'
            },
            stars: 5
        }
    ];
};
