export const FloorPlanList = [
  { id: 'B3', tag: 'B3', floor: 'B3', is_use: true },
  { id: 'B2', tag: 'B2', floor: 'B2', is_use: true },
  { id: 'B1', tag: 'B1', floor: 'B1', is_use: true },
  { id: '1F', tag: '1F', floor: '1F', is_use: true },
  { id: 'M-1F', tag: 'M-1F', floor: '1MF', is_use: true },
  { id: '2F', tag: '2F', floor: '2F', is_use: true },
  { id: '3F', tag: '3F', floor: '3F', is_use: true },
  { id: '4F', tag: '4F', floor: '4F', is_use: true },
  { id: '5F', tag: '5F-11F', floor: '5F', is_use: true },
  { id: '6F', tag: '6F-13F', floor: '6F', is_use: true },
  { id: '7F', tag: '6F-13F', floor: '7F', is_use: true },
  { id: '8F', tag: '5F-11F', floor: '8F', is_use: true },
  { id: '9F', tag: '6F-13F', floor: '9F', is_use: true },
  { id: '10F', tag: '6F-13F', floor: '10F', is_use: true },
  { id: '11F', tag: '5F-11F', floor: '11F', is_use: true },
  { id: '12F', tag: '6F-13F', floor: '12F', is_use: true },
  { id: '13F', tag: '6F-13F', floor: '13F', is_use: true },
  { id: 'R1', tag: 'R1', floor: 'RF', is_use: true },
]

export const FloorPlanAest = [
  {
    id: 'B3',
    tag: 'B3',
    floor: 'B3',
    image: new URL('@/assets/img/floor-plan/new/B3@2x.webp', import.meta.url).href,
  },
  {
    id: 'B2',
    tag: 'B2',
    floor: 'B2',
    image: new URL('@/assets/img/floor-plan/new/B2@2x.webp', import.meta.url).href,
  },
  {
    id: 'B1',
    tag: 'B1',
    floor: 'B1',
    image: new URL('@/assets/img/floor-plan/new/B1@2x.webp', import.meta.url).href,
  },
  {
    id: '1F',
    tag: '1F',
    floor: '1F',
    image: new URL('@/assets/img/floor-plan/1F@2x.webp', import.meta.url).href,
    list: [
      {
        number: new URL('@/assets/img/floor-plan/number/number-1@2x.png', import.meta.url).href,
        id: 'first',
        name: '車道出入口',
        numberList: 1,
      },
      {
        number: new URL('@/assets/img/floor-plan/number/number-2@2x.png', import.meta.url).href,
        id: 'second',
        name: '機車道出入口',
        numberList: 2,
      },
      {
        number: new URL('@/assets/img/floor-plan/number/number-3@2x.png', import.meta.url).href,
        id: 'third',
        name: '迎賓庭園',
        numberList: 3,
      },
      {
        number: new URL('@/assets/img/floor-plan/number/number-4@2x.png', import.meta.url).href,
        id: 'fourth',
        name: '花園小徑',
        numberList: 4,
      },
      {
        number: new URL('@/assets/img/floor-plan/number/number-5@2x.png', import.meta.url).href,
        id: 'fifth',
        name: '林蔭散步道',
        numberList: 5,
      },
      {
        number: new URL('@/assets/img/floor-plan/number/number-6@2x.png', import.meta.url).href,
        id: 'sixth',
        name: '迎賓大廳',
        numberList: 6,
      },
      {
        number: new URL('@/assets/img/floor-plan/number/number-7@2x.png', import.meta.url).href,
        id: 'night',
        name: '信箱區',
        numberList: 9,
      },
      {
        number: new URL('@/assets/img/floor-plan/number/number-8@2x.png', import.meta.url).href,
        id: 'seventh',
        name: '宅配室',
        numberList: 7,
      },
      {
        number: new URL('@/assets/img/floor-plan/number/number-9@2x.png', import.meta.url).href,
        id: 'eight',
        name: '資源回收室',
        numberList: 8,
      },
    ],
    points: [
      {
        className: 'point-2-1F',
        tag: 'first',
        fName: '接待大廳',
        numberList: 1,
      },
      {
        className: 'point-5-1F',
        tag: 'second',
        fName: '機車道出入口',
        numberList: 2,
      },
      {
        className: 'point-7-1F',
        tag: 'third',
        fName: '韻律教室',
        numberList: 3,
      },
      {
        className: 'point-4-1F',
        tag: 'fourth',
        fName: '多功能交誼廳',
        numberList: 4,
      },
      {
        className: 'point-6-1F',
        tag: 'fifth',
        fName: '視聽室',
        numberList: 5,
      },
      {
        className: 'point-1-1F',
        tag: 'sixth',
        fName: '梯廳A',
        numberList: 6,
      },
      {
        className: 'point-3-1F',
        tag: 'seventh',
        fName: '過廊',
        numberList: 7,
      },
      {
        className: 'point-8-1F',
        tag: 'eight',
        fName: '信箱區',
        numberList: 8,
      },
      {
        className: 'point-9-1F',
        tag: 'night',
        fName: '梯廳B',
        numberList: 9,
      },
    ],
  },
  {
    id: 'M-1F',
    tag: 'M-1F',
    floor: '1MF',
    image: new URL('@/assets/img/floor-plan/new/1F夾層@2x.webp', import.meta.url).href,
  },
  {
    id: '2F',
    tag: '2F',
    floor: '2F',
    image: new URL('@/assets/img/floor-plan/new/2F@2x.webp', import.meta.url).href,
    list: [
      {
        number: new URL('@/assets/img/floor-plan/number/number-1@2x.png', import.meta.url).href,
        id: 'first',
        name: '健身房',
        numberList: 1,
      },
      {
        number: new URL('@/assets/img/floor-plan/number/number-2@2x.png', import.meta.url).href,
        id: 'second',
        name: '交誼廳',
        numberList: 2,
      },
    ],
    points: [
      {
        className: 'point-1-2F',
        tag: 'first',
        fName: '健身房',
        numberList: 1,
      },
      {
        className: 'point-2-2F',
        tag: 'second',
        fName: '交誼廳',
        numberList: 2,
      },
    ],
  },
  {
    id: '3F',
    tag: '3F',
    floor: '3F',
    image: new URL('@/assets/img/floor-plan/new/3F@2x.webp', import.meta.url).href,
    txtImg: new URL('@/assets/img/floor-plan/new/3F-txt@2x.webp', import.meta.url).href,
    // points: [
    //   {
    //     className: 'a1-3F',
    //     name: 'A1',
    //   },
    //   {
    //     className: 'a2-3F',
    //     name: 'A2',
    //   },
    //   {
    //     className: 'a3-3F',
    //     name: 'A3',
    //   },
    //   {
    //     className: 'a5-3F',
    //     name: 'A5',
    //   },
    //   {
    //     className: 'a6-3F',
    //     name: 'A6',
    //   },
    //   {
    //     className: 'a7-3F',
    //     name: 'A7',
    //   },
    //   {
    //     className: 'a8-3F',
    //     name: 'A8',
    //   },
    //   {
    //     className: 'a9-3F',
    //     name: 'A9',
    //   },
    //   {
    //     className: 'b1-3F',
    //     name: 'B1',
    //   },
    //   {
    //     className: 'b2-3F',
    //     name: 'B2',
    //   },
    //   {
    //     className: 'b3-3F',
    //     name: 'B3',
    //   },
    //   {
    //     className: 'b5-3F',
    //     name: 'B5',
    //   },
    //   {
    //     className: 'b6-3F',
    //     name: 'B6',
    //   },
    //   {
    //     className: 'b7-3F',
    //     name: 'B7',
    //   },
    //   {
    //     className: 'b8-3F',
    //     name: 'B8',
    //   },
    //   {
    //     className: 'b9-3F',
    //     name: 'B9',
    //   },
    // ],
  },
  {
    id: '4F',
    tag: '4F',
    floor: '4F',
    image: new URL('@/assets/img/floor-plan/new/4F@2x.webp', import.meta.url).href,
    txtImg: new URL('@/assets/img/floor-plan/new/4F-txt@2x.webp', import.meta.url).href,
    points: [
      {
        className: 'a-a2',
        name: 'A2',
      },
    ],
  },
  {
    id: '5F-11F',
    tag: '5F-11F',
    floor: '5F|8F|11F',
    image: new URL('@/assets/img/floor-plan/new/5-11F@2x.webp', import.meta.url).href,
    txtImg: new URL('@/assets/img/floor-plan/new/5-11F-txt@2x.webp', import.meta.url).href,
    points: [
      {
        className: 'a-a1',
        name: 'A1',
      },
      {
        className: 'a-a3',
        name: 'A3',
      },
      {
        className: 'a-a5',
        name: 'A5',
      },
      {
        className: 'a-a6',
        name: 'A6',
      },
      {
        className: 'a-a7',
        name: 'A7',
      },
    ],
  },
  {
    id: '6F-13F',
    tag: '6F-13F',
    floor: '6F|7F|9F\n10F|12F|13F',
    image: new URL('@/assets/img/floor-plan/new/6-13F@2x.webp', import.meta.url).href,
    txtImg: new URL('@/assets/img/floor-plan/new/6-13F-txt@2x.webp', import.meta.url).href,
  },
  {
    id: '10F',
    tag: '10F',
    floor: '10F',
    image: new URL('@/assets/img/floor-plan/10F@2x.png', import.meta.url).href,
    points: [
      {
        className: 'a1-10F',
        name: 'A1',
      },
      {
        className: 'a2-10F',
        name: 'A2',
      },
      {
        className: 'a3-10F',
        name: 'A3',
      },
      {
        className: 'a5-10F',
        name: 'A5',
      },
      {
        className: 'a6-10F',
        name: 'A6',
      },
      {
        className: 'a7-10F',
        name: 'A7',
      },
      {
        className: 'a8-10F',
        name: 'A8',
      },
      {
        className: 'a9-10F',
        name: 'A9',
      },
      {
        className: 'b1-10F',
        name: 'B1',
      },
      {
        className: 'b2-10F',
        name: 'B2',
      },
      {
        className: 'b3-10F',
        name: 'B3',
      },
      {
        className: 'b5-10F',
        name: 'B5',
      },
      {
        className: 'b6-10F',
        name: 'B6',
      },
      {
        className: 'b7-10F',
        name: 'B7',
      },
      {
        className: 'b8-10F',
        name: 'B8',
      },
      {
        className: 'b9-10F',
        name: 'B9',
      },
    ],
  },
  {
    id: 'R1',
    tag: 'R1',
    floor: 'RF',
    image: new URL('@/assets/img/floor-plan/new/RF@2x.webp', import.meta.url).href,
    txtImg: new URL('@/assets/img/floor-plan/new/RF-txt@2x.webp', import.meta.url).href,
    // points: [
    //   {
    //     className: 'point-r1-1',
    //     swiperTag: true,
    //     content: [
    //       {
    //         key: 'point-r1-1-1',
    //         image: new URL('@/assets/img/floor-plan/資產 1@2x.png', import.meta.url).href,
    //       },
    //     ],
    //   },
    //   {
    //     className: 'point-r1-2',
    //     swiperTag: true,
    //     content: [
    //       {
    //         key: 'point-r1-2-1',
    //         image: new URL('@/assets/img/floor-plan/R1-swiper-2-1.png', import.meta.url).href,
    //       },
    //     ],
    //   },
    //   {
    //     className: 'point-r1-3',
    //     swiperTag: true,
    //     content: [
    //       {
    //         key: 'point-r1-3-1',
    //         image: new URL('@/assets/img/floor-plan/R1-swiper-3-1.png', import.meta.url).href,
    //       },
    //     ],
    //   },
    //   {
    //     className: 'point-r1-4',
    //     swiperTag: true,
    //     content: [
    //       {
    //         key: 'point-r1-4-1',
    //         image: new URL('@/assets/img/floor-plan/R1-swiper-1-1.png', import.meta.url).href,
    //       },
    //     ],
    //   },
    //   {
    //     className: 'point-r1-5',
    //     swiperTag: true,
    //     content: [
    //       {
    //         key: 'point-r1-5-1',
    //         image: new URL('@/assets/img/floor-plan/R1-swiper-1-2.png', import.meta.url).href,
    //       },
    //     ],
    //   },
    // ],
  },
]

export const FloorPlanImg = [
  {
    name: 'A1',
    className: 'a1-inner',
    image: new URL('@/assets/img/floor-plan/new/A1@2x.webp', import.meta.url).href,
    innerImage: new URL('@/assets/img/floor-plan/new/a1-inner@2x.webp', import.meta.url).href,
  },
  {
    name: 'A2',
    className: 'a2-inner',
    image: new URL('@/assets/img/floor-plan/new/A2@2x.webp', import.meta.url).href,
    innerImage: new URL('@/assets/img/floor-plan/new/a2-inner@2x.webp', import.meta.url).href,
  },
  {
    name: 'A3',
    className: 'a3-inner',
    image: new URL('@/assets/img/floor-plan/new/A3@2x.webp', import.meta.url).href,
    innerImage: new URL('@/assets/img/floor-plan/new/a3-inner@2x.webp', import.meta.url).href,
  },
  {
    name: 'A5',
    className: 'a5-inner',
    image: new URL('@/assets/img/floor-plan/new/A5@2x.webp', import.meta.url).href,
    innerImage: new URL('@/assets/img/floor-plan/new/a5-inner@2x.webp', import.meta.url).href,
  },
  {
    name: 'A6',
    className: 'a6-inner',
    image: new URL('@/assets/img/floor-plan/new/A6@2x.webp', import.meta.url).href,
    innerImage: new URL('@/assets/img/floor-plan/new/a6-inner@2x.webp', import.meta.url).href,
  },
  {
    name: 'A7',
    className: 'a7-inner',
    image: new URL('@/assets/img/floor-plan/new/A7@2x.webp', import.meta.url).href,
    innerImage: new URL('@/assets/img/floor-plan/new/a7-inner@2x.webp', import.meta.url).href,
  },
  // {
  //   tag: '1f',
  //   name: '接待大廳',
  //   image: [
  //     {
  //       id: '1f-1',
  //       img: null,
  //     },
  //     {
  //       id: '1f-1-2',
  //       img: null,
  //     },
  //   ],
  // },
  // {
  //   tag: '1f',
  //   name: '韻律教室',
  //   image: [
  //     {
  //       id: '1f-3',
  //       img: null,
  //     },
  //     {
  //       id: '1f-3-2',
  //       img: null,
  //     },
  //   ],
  // },
  // {
  //   tag: '1f',
  //   name: '多功能交誼廳',
  //   image: [
  //     {
  //       id: '1f-4',
  //       img: null,
  //     },
  //   ],
  // },
  // {
  //   tag: '1f',
  //   name: '視聽室',
  //   image: [
  //     {
  //       id: '1f-5',
  //       img: null,
  //     },
  //     {
  //       id: '1f-5-2',
  //       img: null,
  //     },
  //   ],
  // },
  // {
  //   tag: '1f',
  //   name: '梯廳A',
  //   image: [
  //     {
  //       id: '1f-6',
  //       img: null,
  //     },
  //   ],
  // },
  // {
  //   tag: '1f',
  //   name: '過廊',
  //   image: [
  //     {
  //       id: '1f-7',
  //       img: null,
  //     },
  //   ],
  // },
  // {
  //   tag: '1f',
  //   name: '信箱區',
  //   image: [
  //     {
  //       id: '1f-8',
  //       img: null,
  //     },
  //   ],
  // },
  // {
  //   tag: '1f',
  //   name: '梯廳B',
  //   image: [
  //     {
  //       id: '1f-9',
  //       img: null,
  //     },
  //   ],
  // },

  {
    tag: '2f',
    name: '健身房',
    image: [
      {
        id: '2f-1',
        name: '健身房',
        img: new URL('@/assets/img/floor-plan/家配/健身房.webp', import.meta.url).href,
      },
    ],
  },
  {
    tag: '2f',
    name: '交誼廳',
    image: [
      {
        id: '2f-2',
        name: '交誼廳',
        img: new URL('@/assets/img/floor-plan/家配/交誼廳.webp', import.meta.url).href,
      },
    ],
  },
]

export const FloorViewData = [
  {
    tag: '4F-9F',
    images: [
      {
        tag: 'east',
        day: new URL('@/assets/img/floor-plan/6F/東.webp', import.meta.url).href,
        night: new URL('@/assets/img/floor-plan/6F/night/東.webp', import.meta.url).href,
      },
      {
        tag: 'west',
        day: new URL('@/assets/img/floor-plan/6F/西.webp', import.meta.url).href,
        night: new URL('@/assets/img/floor-plan/6F/night/西.webp', import.meta.url).href,
      },
      {
        tag: 'south',
        day: new URL('@/assets/img/floor-plan/6F/南.webp', import.meta.url).href,
        night: new URL('@/assets/img/floor-plan/6F/night/南.webp', import.meta.url).href,
      },
      {
        tag: 'north',
        day: new URL('@/assets/img/floor-plan/6F/北.webp', import.meta.url).href,
        night: new URL('@/assets/img/floor-plan/6F/night/北.webp', import.meta.url).href,
      },
      {
        tag: 'video',
        videoDay: '',
        videoNight: '',
      },
    ],
  },
  {
    tag: '10F',
    images: [
      {
        tag: 'east',
        day: new URL('@/assets/img/floor-plan/10F/東.webp', import.meta.url).href,
        night: new URL('@/assets/img/floor-plan/10F/night/東.webp', import.meta.url).href,
      },
      {
        tag: 'west',
        day: new URL('@/assets/img/floor-plan/10F/西.webp', import.meta.url).href,
        night: new URL('@/assets/img/floor-plan/10F/night/西.webp', import.meta.url).href,
      },
      {
        tag: 'south',
        day: new URL('@/assets/img/floor-plan/10F/南.webp', import.meta.url).href,
        night: new URL('@/assets/img/floor-plan/10F/night/南.webp', import.meta.url).href,
      },
      {
        tag: 'north',
        day: new URL('@/assets/img/floor-plan/10F/北.webp', import.meta.url).href,
        night: new URL('@/assets/img/floor-plan/10F/night/北.webp', import.meta.url).href,
      },
      {
        tag: 'video',
        videoDay: '',
        videoNight: '',
      },
    ],
  },
]
