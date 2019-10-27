const tasks = [
    'click',
    'code',
    'qrCode', //maybe....
    'text',
    'picture',
    'video',
    'location',
]

export const dummyBoard = {
    id: '10er8vhj20',
    title: 'Orientation',
    description: 'A mandatory (but fun!) orientation for everyone!',
    org: 'Spenco Systems',
    randomize: false,
    timeLimit: null,
    numSquares: 25,
    accessCode: 'asdfasdf',
    mustBeDoneInOrder: false,
    groups: {
        useTeams: true,
        teams: [
            {
                id: 'team1',
                name: 'Razor Sharks',
                accessCode: 'razorsRule',
            },
            {
                id: 'team2',
                name: 'Farmsville Warriors',
                accessCode: 'warriors 4 ever',
            },
        ]
    },
    freeSquareIcon: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
    incompleteColor: 'ABCDEF',
    completeColor: 'FEDCBA',
    boardLocation: {
        lat: 1000000,
        long: 1000000,
    },
    rewards: [
        {
            id: 1,
            //-blackout = do EVERY task, -bingo = upon first bingo
            position: 'wholeBoard-blackout',
            img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
            title: 'HYENA',
            howToEarn: "Complete every task on the board!",
            description: 'The freakin hyena whole board!',
            earned: false,
        },
        {
            id: 2,
            position: 'diagonalUpRight',
            img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
            title: 'HYENA',
            howToEarn: "Complete every task in the diagonal from the bottom left square to the top right.",
            description: 'The freakin hyena diagonal UpdRight!',
            earned: false,
        },
        {
            id: 3,
            position: 'diagonalDownRight',
            img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
            title: 'HYENA',
            howToEarn: "Complete every task in the diagonal from the top left square to the bottom right.",
            description: 'The freakin hyena diagonal Down Right!',
            earned: false,
        },
        {
            id: 4,
            position: 'column1',
            img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
            title: 'HYENA',
            howToEarn: "Complete every task in column 1",
            description: 'The freakin hyena column1!',
            earned: false,
        },
        {
            id: 5,
            position: 'column2',
            img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
            title: 'HYENA',
            howToEarn: "Complete every task in column 2",
            description: 'The freakin hyena column2!',
            earned: false,
        },
        {
            id: 6,
            position: 'column3',
            img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
            title: 'HYENA',
            howToEarn: "Complete every task in column 3",
            description: 'The freakin hyena column3!',
            earned: false,
        },
        {
            id: 7,
            position: 'column4',
            img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
            title: 'HYENA',
            howToEarn: "Complete every task in column 4",
            description: 'The freakin hyena column4!',
            earned: false,
        },
        {
            id: 8,
            position: 'column5',
            img: '',
            title: '',
            howToEarn: "Complete every task in column 5",
            description: '',
            earned: false,
        },
        {
            id: 9,
            position: 'row1',
            img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
            title: 'HYENA',
            howToEarn: "Complete every task in row 1",
            description: 'The freakin hyena row1!',
            earned: false,
        },
        {
            id: 10,
            position: 'row2',
            img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
            title: 'HYENA',
            howToEarn: "Complete every task in row 2",
            description: 'The freakin hyena row2!',
            earned: false,
        },
        {
            id: 11,
            position: 'row3',
            img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
            title: 'HYENA',
            howToEarn: "Complete every task in row 3",
            description: 'The freakin hyena row3!',
            earned: false,
        },
        {
            id: 12,
            position: 'row4',
            img: 'https://i.pinimg.com/originals/a2/e7/0a/a2e70acaae2c00e8d090961cf5d1f4d8.jpg',
            title: 'HYENA',
            howToEarn: "Complete every task in row 4",
            description: 'The freakin hyena row4!',
            earned: false,
        },
        {
            id: 13,
            position: 'row5',
            img: '',
            title: '',
            howToEarn: "Complete every task in row 5",
            description: '',
            earned: false,
        },
    ],
    squares: [
        {
            id: 1,
            freeSquare: false,
            squareText: 'Meet Jenny',
            description: 'Find Jenny in the library, ask her for a code!',
            task: {
                taskType: 'code',
                answer: '',
            },
            complete: false,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 2,
            freeSquare: false,
            squareText: 'Check this box',
            description: 'Flip this switch, that\'s it!!',
            task: {
                taskType: 'click',
                answer: false,
            },
            complete: false,
            location: {
                to: {
                    lat: 0,
                    lng: 0
                },
                within: 100
            },
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 3,
            freeSquare: true,
            squareText: '',
            description: '',
            task: {
                taskType: '',
                answer: '',
            },
            complete: true,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 4,
            freeSquare: false,
            squareText: 'Rock selfie',
            description: 'Get a selfie with a rock!',
            task: {
                taskType: 'picture',
                answer: '',
            },
            complete: false,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 5,
            freeSquare: false,
            squareText: 'Dirt video',
            description: 'Get a video of you with dirt!',
            task: {
                taskType: 'video',
                answer: '',
            },
            complete: false,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 6,
            freeSquare: false,
            squareText: 'Septic tank closeness',
            description: 'Get within 100 meters of the company septic tank!',
            task: {
                taskType: 'location',
                answer: false,
            },
            complete: false,
            location: {
                to: {
                    lat: 0,
                    lng: 0
                },
                within: 100
            },
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 7,
            freeSquare: false,
            squareText: 'Meet Heidi',
            description: 'Find Heidi in the library, ask her for a code!',
            task: {
                taskType: 'code',
                answer: '',
            },
            complete: false,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 8,
            freeSquare: false,
            squareText: 'Scan QR Code',
            description: 'Find the QR code by the manhole and scan it!',
            task: {
                taskType: 'qrCode',
                answer: '',
            },
            complete: false,
            location: null,
            hint: 'We put the code under Helga\'s chair',
        },
        {
            id: 9,
            freeSquare: false,
            squareText: 'Meet Helga',
            description: 'Find Helga in the library, ask her for a code!',
            task: {
                taskType: 'code',
                answer: '',
            },
            complete: false,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 10,
            freeSquare: false,
            squareText: 'Meet Helga',
            description: 'Find Helga in the library, ask her for a code!',
            task: {
                taskType: 'code',
                answer: '',
            },
            complete: false,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 11,
            freeSquare: false,
            squareText: 'Meet Helga',
            description: 'Find Helga in the library, ask her for a code!',
            task: {
                taskType: 'code',
                answer: '',
            },
            complete: false,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 12,
            freeSquare: false,
            squareText: 'Meet Helga',
            description: 'Find Helga in the library, ask her for a code!',
            task: {
                taskType: 'code',
                answer: '',
            },
            complete: false,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 13,
            freeSquare: false,
            squareText: 'Meet Helga',
            description: 'Find Helga in the library, ask her for a code!',
            task: {
                taskType: 'code',
                answer: '',
            },
            complete: false,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 14,
            freeSquare: false,
            squareText: 'Meet Tiffany',
            description: 'Find Tiffany in the library, ask her for a code!',
            task: {
                taskType: 'code',
                answer: '',
            },
            complete: false,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 15,
            freeSquare: false,
            squareText: 'Meet Beth',
            description: 'Find Beth in the library, ask her for a code!',
            task: {
                taskType: 'code',
                answer: '',
            },
            complete: false,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 16,
            freeSquare: false,
            squareText: 'Enter some text',
            description: 'Enter some text so we know you did it!',
            task: {
                taskType: 'text',
                answer: '',
            },
            complete: false,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 17,
            freeSquare: true,
            squareText: '',
            description: '',
            task: {
                taskType: '',
                answer: '',
            },
            complete: true,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 18,
            freeSquare: true,
            squareText: '',
            description: '',
            task: {
                taskType: '',
                answer: '',
            },
            complete: true,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 19,
            freeSquare: true,
            squareText: '',
            description: '',
            task: {
                taskType: '',
                answer: '',
            },
            complete: true,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 20,
            freeSquare: true,
            squareText: '',
            description: '',
            task: {
                taskType: '',
                answer: '',
            },
            complete: true,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 21,
            freeSquare: true,
            squareText: '',
            description: '',
            task: {
                taskType: '',
                answer: '',
            },
            complete: true,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 22,
            freeSquare: true,
            squareText: '',
            description: '',
            task: {
                taskType: '',
                answer: '',
            },
            complete: true,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 23,
            freeSquare: true,
            squareText: '',
            description: '',
            task: {
                taskType: '',
                answer: '',
            },
            complete: true,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 24,
            freeSquare: true,
            squareText: '',
            description: '',
            task: {
                taskType: '',
                answer: '',
            },
            complete: true,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
        {
            id: 25,
            freeSquare: true,
            squareText: '',
            description: '',
            task: {
                taskType: '',
                answer: '',
            },
            complete: true,
            location: null,
            hint: '',
            codes: {
                useOnce: false,
                codeList: []
            }
        },
    ]

}