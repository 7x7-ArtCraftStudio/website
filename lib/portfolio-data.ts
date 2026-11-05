import publishedRecords from '@/public/portfolio-admin/data.json';
import { catalogWorks, type CatalogWork } from '@/lib/catalog';
import { sitePath } from '@/lib/paths';

export const publishedWorks = (publishedRecords as CatalogWork[]).map((record) => ({
  ...record,
  imageUrl: sitePath(record.imageUrl),
  fullImageUrl: sitePath(record.fullImageUrl),
  galleryImageUrls: record.galleryImageUrls?.map(sitePath),
}));

const studioWorks: CatalogWork[] = [
  {
    id: 'studio-74',
    number: '74',
    title: 'Warm Hotel Room',
    titleTh: 'ห้องพักโทนอุ่น',
    category: 'Design',
    categories: ['Design'],
    materials: 'ออกแบบภายใน · งานตกแต่งเฉพาะพื้นที่',
    description: 'การออกแบบห้องพักที่ใช้โทนสีอบอุ่นและวัสดุธรรมชาติ สร้างบรรยากาศพักผ่อนร่วมสมัย',
    imageUrl: sitePath('/portfolio/hotel-room.png'),
    fullImageUrl: sitePath('/portfolio/hotel-room.png'),
    objectKey: null,
    year: '2026',
    sortOrder: 74,
    createdAt: '',
    catalogPage: 0,
  },
  {
    id: 'studio-75',
    number: '75',
    title: 'Veined Stone Mosaic',
    titleTh: 'โมเสกลายชั้นหิน',
    category: 'Mix material',
    categories: ['Mix', 'Other'],
    materials: 'หินธรรมชาติ · โมเสก',
    description: 'งานประกอบชิ้นหินลวดลายเส้นแร่สีขาวดำ วางสลับกับแนวโมเสกสีเข้มเป็นพื้นผิวต่อเนื่อง',
    imageUrl: sitePath('/portfolio/stone-mosaic.png'),
    fullImageUrl: sitePath('/portfolio/stone-mosaic.png'),
    objectKey: null,
    year: '2026',
    sortOrder: 75,
    createdAt: '',
    catalogPage: 0,
  },
  {
    id: 'studio-76',
    number: '76',
    title: 'Abstract Lobby Artwork',
    titleTh: 'ภาพนามธรรมสำหรับล็อบบี้',
    category: 'Design',
    categories: ['Design', 'Other'],
    materials: 'งานจิตรกรรม · กรอบภาพ',
    description: 'ผลงานภาพนามธรรมโทนส้มและเอิร์ธโทน จัดแสดงเป็นจุดเด่นบนผนังล็อบบี้',
    imageUrl: sitePath('/portfolio/lobby-artwork-01.png'),
    fullImageUrl: sitePath('/portfolio/lobby-artwork-01.png'),
    galleryImageUrls: [
      sitePath('/portfolio/lobby-artwork-01.png'),
      sitePath('/portfolio/lobby-artwork-02.png'),
      sitePath('/portfolio/lobby-artwork-03.png'),
    ],
    objectKey: null,
    year: '2026',
    sortOrder: 76,
    createdAt: '',
    catalogPage: 0,
  },
  {
    id: 'studio-77',
    number: '77',
    title: 'Chromatic Fiber Column',
    titleTh: 'เสาสายใยสีสัน',
    category: 'Design',
    categories: ['Design', 'Mix'],
    materials: 'เส้นใยหลากสี · งานติดตั้งเฉพาะพื้นที่',
    description: 'งานตกแต่งเสากลางพื้นที่ต้อนรับด้วยพื้นผิวเส้นสายหลากสีและองค์ประกอบวงแหวน',
    imageUrl: sitePath('/portfolio/fiber-column-01.png'),
    fullImageUrl: sitePath('/portfolio/fiber-column-01.png'),
    galleryImageUrls: [
      sitePath('/portfolio/fiber-column-01.png'),
      sitePath('/portfolio/fiber-column-02.png'),
    ],
    objectKey: null,
    year: '2026',
    sortOrder: 77,
    createdAt: '',
    catalogPage: 0,
  },
];

export const allCatalogWorks = [...catalogWorks, ...publishedWorks, ...studioWorks];
export const portfolioWorkCount = allCatalogWorks.length;

