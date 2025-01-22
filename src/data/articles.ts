export interface Article {
  publication: string;
  publicationIcon: string;
  title: string;
  author: string;
  readTime: string;
  image?: string;
  preview?: string;
  likes: number;
  comments: number;
}

export const articles: Article[] = [
  {
    publication: "WANDERLUST DIARIES",
    publicationIcon: "./p3.jpg",
    title: "The Hidden Gems of Bali",
    author: "SARAH MILLER",
    readTime: "7 MIN READ",
    image: "./i1.jpg",
    likes: 35,
    comments: 8,
  },
  {
    publication: "TRAVEL TALES",
    publicationIcon: "./p4.jpg",
    title: "Exploring the Streets of Paris",
    author: "JAMES CARTER",
    readTime: "6 MIN READ",
    preview: 'A romantic journey through the city of lights, from the Eiffel Tower to Montmartre.',
    image: "./i2.jpg",
    likes: 28,
    comments: 5,
  },
  {
    publication: "OFF THE BEATEN PATH",
    publicationIcon: "./p5.jpg",
    title: "Discovering Patagonia",
    author: "EMILY ROBINSON",
    readTime: "10 MIN READ",
    preview: "Unveiling the breathtaking landscapes of Patagonia. A guide to hiking, wildlife, and adventure.",
    image: "./i3.jpg",
    likes: 20,
    comments: 2,
  },
  {
    publication: "ADVENTURE AWAITS",
    publicationIcon: "./p6.jpg",
    title: "Top 10 Beaches in the Maldives",
    author: "DAVID ANDERSON",
    readTime: "8 MIN READ",
    preview: "Crystal-clear waters, white sands, and the best spots for snorkeling and relaxation.",
    image: "./i4.jpg",
    likes: 42,
    comments: 12,
  },
];
