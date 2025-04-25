export const FloorPlanList = [
  {
    id: 'B3',
    tag: 'B3',
    floor: 'B3',
  },
  { id: 'B2', tag: 'B2', floor: 'B2' },
  { id: 'B1', tag: 'B1', floor: 'B1' },
  { id: '1F', tag: '1F', floor: '1F' },
  { id: '1F', tag: '1F', floor: '1F夾層' },
  { id: '2F', tag: '2F', floor: '2F' },
  { id: '3F', tag: '3F', floor: '3F' },
  { id: '4F', tag: '4F-9F', floor: '4F' },
  { id: '5F', tag: '10F', floor: '5F' },
  { id: '6F', tag: '4F-9F', floor: '6F' },
  { id: '7F', tag: '4F-9F', floor: '7F' },
  { id: '8F', tag: '10F', floor: '8F' },
  { id: '9F', tag: '4F-9F', floor: '9F' },
  { id: '10F', tag: '4F-9F', floor: '10F' },
  { id: '10F', tag: '10F', floor: '11F' },
  { id: '10F', tag: '4F-9F', floor: '12F' },
  { id: '10F', tag: '4F-9F', floor: '13F' },
  { id: 'R1', tag: 'R1', floor: 'RF' },
]

export const FloorPlanAest = [
  {
    id: 'B3',
    tag: 'B3',
    floor: 'B3',
    image: new URL('@/assets/img/floor-plan/B3@2x.png', import.meta.url).href,
  },
  {
    id: 'B2',
    tag: 'B2',
    floor: 'B2',
    image: new URL('@/assets/img/floor-plan/B2@2x.png', import.meta.url).href,
  },
  {
    id: 'B1',
    tag: 'B1',
    floor: 'B1',
    image: new URL('@/assets/img/floor-plan/B1@2x.png', import.meta.url).href,
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
        name: '花園入口',
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
        name: '宅配區',
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
        fName: '健身房',
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
    id: '2F',
    tag: '2F',
    floor: '2F',
    image: new URL('@/assets/img/floor-plan/2F@2x.png', import.meta.url).href,
    points: [
      {
        className: 'a1-2F',
        name: 'A1',
      },
      {
        className: 'a2-2F',
        name: 'A2',
      },
      {
        className: 'a3-2F',
        name: 'A3',
      },
      {
        className: 'a5-2F',
        name: 'A5',
      },
      {
        className: 'a6-2F',
        name: 'A6',
      },
      {
        className: 'a9-2F',
        name: 'A9',
      },
      {
        className: 'b1-2F',
        name: 'B1',
      },
      {
        className: 'b2-2F',
        name: 'B2',
      },
      {
        className: 'b3-2F',
        name: 'B3',
      },
      {
        className: 'b5-2F',
        name: 'B5',
      },
      {
        className: 'b6-2F',
        name: 'B6',
      },
      {
        className: 'b7-2F',
        name: 'B7',
      },
      {
        className: 'b8-2F',
        name: 'B8',
      },
      {
        className: 'b9-2F',
        name: 'B9',
      },
    ],
  },
  {
    id: '3F',
    tag: '3F',
    floor: '3F',
    image: new URL('@/assets/img/floor-plan/3F@2x.png', import.meta.url).href,
    points: [
      {
        className: 'a1-3F',
        name: 'A1',
      },
      {
        className: 'a2-3F',
        name: 'A2',
      },
      {
        className: 'a3-3F',
        name: 'A3',
      },
      {
        className: 'a5-3F',
        name: 'A5',
      },
      {
        className: 'a6-3F',
        name: 'A6',
      },
      {
        className: 'a7-3F',
        name: 'A7',
      },
      {
        className: 'a8-3F',
        name: 'A8',
      },
      {
        className: 'a9-3F',
        name: 'A9',
      },
      {
        className: 'b1-3F',
        name: 'B1',
      },
      {
        className: 'b2-3F',
        name: 'B2',
      },
      {
        className: 'b3-3F',
        name: 'B3',
      },
      {
        className: 'b5-3F',
        name: 'B5',
      },
      {
        className: 'b6-3F',
        name: 'B6',
      },
      {
        className: 'b7-3F',
        name: 'B7',
      },
      {
        className: 'b8-3F',
        name: 'B8',
      },
      {
        className: 'b9-3F',
        name: 'B9',
      },
    ],
  },
  {
    id: '4F-9F',
    tag: '4F-9F',
    floor: '4F-9F',
    image: new URL('@/assets/img/floor-plan/4F-9F@2x.png', import.meta.url).href,
    points: [
      {
        className: 'a1-4F-9F',
        name: 'A1',
      },
      {
        className: 'a2-4F-9F',
        name: 'A2',
      },
      {
        className: 'a3-4F-9F',
        name: 'A3',
      },
      {
        className: 'a5-4F-9F',
        name: 'A5',
      },
      {
        className: 'a6-4F-9F',
        name: 'A6',
      },
      {
        className: 'a7-4F-9F',
        name: 'A7',
      },
      {
        className: 'a8-4F-9F',
        name: 'A8',
      },
      {
        className: 'a9-4F-9F',
        name: 'A9',
      },
      {
        className: 'b1-4F-9F',
        name: 'B1',
      },
      {
        className: 'b2-4F-9F',
        name: 'B2',
      },
      {
        className: 'b3-4F-9F',
        name: 'B3',
      },
      {
        className: 'b5-4F-9F',
        name: 'B5',
      },
      {
        className: 'b6-4F-9F',
        name: 'B6',
      },
      {
        className: 'b7-4F-9F',
        name: 'B7',
      },
      {
        className: 'b8-4F-9F',
        name: 'B8',
      },
      {
        className: 'b9-4F-9F',
        name: 'B9',
      },
    ],
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
    image: new URL('@/assets/img/floor-plan/RF@2x.webp', import.meta.url).href,
    points: [
      {
        className: 'point-r1-1',
        swiperTag: true,
        content: [
          {
            key: 'point-r1-1-1',
            image: new URL('@/assets/img/floor-plan/資產 1@2x.png', import.meta.url).href,
          },
        ],
      },
      {
        className: 'point-r1-2',
        swiperTag: true,
        content: [
          {
            key: 'point-r1-2-1',
            image: new URL('@/assets/img/floor-plan/R1-swiper-2-1.png', import.meta.url).href,
          },
        ],
      },
      {
        className: 'point-r1-3',
        swiperTag: true,
        content: [
          {
            key: 'point-r1-3-1',
            image: new URL('@/assets/img/floor-plan/R1-swiper-3-1.png', import.meta.url).href,
          },
        ],
      },
      {
        className: 'point-r1-4',
        swiperTag: true,
        content: [
          {
            key: 'point-r1-4-1',
            image: new URL('@/assets/img/floor-plan/R1-swiper-1-1.png', import.meta.url).href,
          },
        ],
      },
      {
        className: 'point-r1-5',
        swiperTag: true,
        content: [
          {
            key: 'point-r1-5-1',
            image: new URL('@/assets/img/floor-plan/R1-swiper-1-2.png', import.meta.url).href,
          },
        ],
      },
    ],
  },
]

export const FloorPlanImg = [
  {
    name: 'A1',
    image: new URL('@/assets/img/floor-plan/家配/A1@2x.png', import.meta.url).href,
  },
  {
    name: 'A2',
    image: new URL('@/assets/img/floor-plan/家配/A2@2x.png', import.meta.url).href,
  },
  {
    name: 'A3',
    image: new URL('@/assets/img/floor-plan/家配/A3@2x.png', import.meta.url).href,
  },
  {
    name: 'A5',
    image: new URL('@/assets/img/floor-plan/家配/A5@2x.png', import.meta.url).href,
  },
  {
    name: 'A6',
    image: new URL('@/assets/img/floor-plan/家配/A6@2x.png', import.meta.url).href,
  },
  {
    name: 'A7',
    image: new URL('@/assets/img/floor-plan/家配/A7@2x.png', import.meta.url).href,
  },
  {
    name: 'A8',
    image: new URL('@/assets/img/floor-plan/家配/A8@2x.png', import.meta.url).href,
  },
  {
    name: 'A9',
    image: new URL('@/assets/img/floor-plan/家配/A9@2x.png', import.meta.url).href,
  },
  {
    name: 'B1',
    image: new URL('@/assets/img/floor-plan/家配/B1@2x.png', import.meta.url).href,
  },
  {
    name: 'B2',
    image: new URL('@/assets/img/floor-plan/家配/B2@2x.png', import.meta.url).href,
  },
  {
    name: 'B3',
    image: new URL('@/assets/img/floor-plan/家配/B3@2x.png', import.meta.url).href,
  },
  {
    name: 'B5',
    image: new URL('@/assets/img/floor-plan/家配/B5@2x.png', import.meta.url).href,
  },
  {
    name: 'B6',
    image: new URL('@/assets/img/floor-plan/家配/B6@2x.png', import.meta.url).href,
  },
  {
    name: 'B7',
    image: new URL('@/assets/img/floor-plan/家配/B7@2x.png', import.meta.url).href,
  },
  {
    name: 'B8',
    image: new URL('@/assets/img/floor-plan/家配/B8@2x.png', import.meta.url).href,
  },
  {
    name: 'B9',
    image: new URL('@/assets/img/floor-plan/家配/B9@2x.png', import.meta.url).href,
  },
  {
    tag: '1f',
    name: '接待大廳',
    image: [
      {
        id: '1f-1',
        img: new URL('@/assets/img/floor-plan/家配/接待大廳@2x.webp', import.meta.url).href,
      },
      {
        id: '1f-1-2',
        img: new URL('@/assets/img/floor-plan/家配/接待大廳2.jpg', import.meta.url).href,
      },
    ],
  },
  {
    tag: '1f',
    name: '健身房',
    image: [
      {
        id: '1f-2',
        img: new URL('@/assets/img/floor-plan/家配/健身房@2x.webp', import.meta.url).href,
      },
      {
        id: '1f-2-2',
        img: new URL('@/assets/img/floor-plan/家配/健身房2.jpg', import.meta.url).href,
      },
    ],
  },
  {
    tag: '1f',
    name: '韻律教室',
    image: [
      {
        id: '1f-3',
        img: new URL('@/assets/img/floor-plan/家配/韻律教室@2x.webp', import.meta.url).href,
      },
      {
        id: '1f-3-2',
        img: new URL('@/assets/img/floor-plan/家配/資產 18-100.webp', import.meta.url).href,
      },
    ],
  },
  {
    tag: '1f',
    name: '多功能交誼廳',
    image: [
      {
        id: '1f-4',
        img: new URL('@/assets/img/floor-plan/家配/多功能交誼廳@2x.webp', import.meta.url).href,
      },
    ],
  },
  {
    tag: '1f',
    name: '視聽室',
    image: [
      {
        id: '1f-5',
        img: new URL('@/assets/img/floor-plan/家配/視聽室@2x.webp', import.meta.url).href,
      },
      {
        id: '1f-5-2',
        img: new URL('@/assets/img/floor-plan/家配/資產 19-100.webp', import.meta.url).href,
      },
    ],
  },
  {
    tag: '1f',
    name: '梯廳A',
    image: [
      {
        id: '1f-6',
        img: new URL('@/assets/img/floor-plan/家配/梯廳A.webp', import.meta.url).href,
      },
    ],
  },
  {
    tag: '1f',
    name: '過廊',
    image: [
      {
        id: '1f-7',
        img: new URL('@/assets/img/floor-plan/家配/過廊@2x.webp', import.meta.url).href,
      },
    ],
  },
  {
    tag: '1f',
    name: '信箱區',
    image: [
      {
        id: '1f-8',
        img: new URL('@/assets/img/floor-plan/家配/信箱區.jpg', import.meta.url).href,
      },
    ],
  },
  {
    tag: '1f',
    name: '梯廳B',
    image: [
      {
        id: '1f-9',
        img: new URL('@/assets/img/floor-plan/家配/梯廳@2x.webp', import.meta.url).href,
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
        videoDay: new URL('@/assets/img/floor-plan/6F/環景.mp4', import.meta.url).href,
        videoNight: new URL('@/assets/img/floor-plan/6F/night/環景.mp4', import.meta.url).href,
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
        videoDay: new URL('@/assets/img/floor-plan/10F/環景.mp4', import.meta.url).href,
        videoNight: new URL('@/assets/img/floor-plan/10F/night/環景.mp4', import.meta.url).href,
      },
    ],
  },
]
