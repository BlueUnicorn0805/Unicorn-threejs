/*
Websites:

- https://github.com/pmndrs/gltfjsx (GLTF JSX for 3D Models)
- https://lucide.dev/icons/ (Lucide Icons)
- https://github.com/anuraghazra/github-readme-stats (Github Readme Stats)
- https://skillicons.dev (Skill Icons to show skills)
- https://github-readme-streak-stats.herokuapp.com (Github Readme Streak Stats)

:root {
  --background: 27 27 27;
  --foreground: 225 225 225;
  --muted: 115 115 115;
  --accent: 254 254 91; #FEFE5B
}

id: 10,
name: "MindfulMoments",
description: "Meditation and mindfulness app",
date: "2022-02-14",
demoLink: "https://mindfulmoments.example.com",
*/

import MobileImage1 from '../../public/mobile/1.png';
import MobileImage2 from '../../public/mobile/2.png';
import MobileImage3 from '../../public/mobile/3.png';
import MobileImage4 from '../../public/mobile/4.png';
import MobileImage5 from '../../public/mobile/5.png';
import MobileImage6 from '../../public/mobile/6.png';
import MobileImage7 from '../../public/mobile/7.png';
import MobileImage8 from '../../public/mobile/8.png';
import MobileImage9 from '../../public/mobile/9.png';
import MobileImage10 from '../../public/mobile/10.png';
import MobileImage11 from '../../public/mobile/11.png';
import MobileImage12 from '../../public/mobile/12.png';

export const projectsData = [
  {
		id: 1,
		title: 'Movie Hunt',
		category: 'Android',
		img: MobileImage1,
    repo: "movie-hunt-jetpack",
		tag: "Kotlin"
	},
	{
		id: 2,
		title: 'Furniture Store',
		category: 'IOS',
    repo: "FurnitureShop-Jetpack",
		img: MobileImage2,
		tag: "Swift",
	},
	{
		id: 3,
		title: 'JetSunGlass',
		category: 'Flutter',
    repo: "jetsunglass-Jetpack",
		img: MobileImage3,
		tag: "Dart",
	},
	{
		id: 4,
		title: 'CatTuong',
		category: 'React Native',
		img: MobileImage4,
    repo: "",
		tag: "Javascript",
	},
	{
		id: 5,
		title: 'Shopping Cart',
		category: 'React Native',
		img: MobileImage5,
    repo: "shopping-cart",
		tag: "Javascript",
	},
	{
		id: 6,
		title: 'Symphony',
		category: 'Android',
		img: MobileImage6,
    repo: "symphony-main",
		tag: "Kotlin",
	},
	{
		id: 7,
		title: 'RideSharing',
		category: 'Android',
		img: MobileImage7,
    repo: "RideSharing",
		tag: "Kotlin",
	},
	{
		id: 8,
		title: 'Musify',
		category: 'Flutter',
		img: MobileImage8,
    repo: "Musify",
		tag: "Dart",
	},
	{
		id: 9,
		title: 'Feod',
		category: 'IOS',
		img: MobileImage9,
    repo: "feod",
		tag: "Swift",
	},
	{
		id: 10,
		title: 'Faster',
		category: 'Flutter',
		img: MobileImage10,
    repo: "faster",
		tag: "Dart",
	},
	{
		id: 11,
		title: 'Fashion Goods',
		category: 'Flutter',
		img: MobileImage11,
    repo: "fashion_goods_app",
		tag: "Dart",
	},
	{
		id: 12,
		title: 'BuyProd',
		category: 'Flutter',
		img: MobileImage12,
    repo: "BuyProd",
		tag: "Dart",
	},
];

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  {
    label: "Github",
    link: "https://www.github.com/uniwaydev",
    icon: "github",
    newTab: true,
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/unoiwayuki",
    icon: "linkedin",
    newTab: true,
  },
  {
    label: "Telegram",
    link: "https://www.t.me/iwayuki911",
    icon: "telegram",
    newTab: true,
  },
  {
    label: "Resume",
    link: "/resume.pdf",
    icon: "resume",
    newTab: true,
  },
];


