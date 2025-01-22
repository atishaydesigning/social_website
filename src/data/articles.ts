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
    publication: "THE GENE POOL",
    publicationIcon: "/placeholder.svg",
    title: "Courage & Cowardice",
    author: "GENE WEINGARTEN",
    readTime: "5 MIN READ",
    image: "/lovable-uploads/70879639-8136-4173-b100-f396c0a89f86.png",
    likes: 849,
    comments: 69,
  },
  {
    publication: "BITS & PIECES",
    publicationIcon: "/placeholder.svg",
    title: "The Sweet Spot",
    author: "STEVE SKROVAN",
    readTime: "9 MIN READ",
    preview: 'A Memoir in Four Parts: Part One "Insult to the Brain"',
    image: "/placeholder.svg",
    likes: 849,
    comments: 69,
  },
  {
    publication: "MAD ABOUT THE HOUSE BY KATE WATSON-SMYTH",
    publicationIcon: "/placeholder.svg",
    title: "Your decorating dilemmas solved",
    author: "KATE WATSON-SMYTH",
    readTime: "11 MIN READ",
    preview: "What to do about bad lighting? How do I overcome decision paralysis? Is it OK to rip out original features? Can I use strong colour in small rooms? How to hide the TV – and more of your questions answered",
    image: "/placeholder.svg",
    likes: 849,
    comments: 69,
  },
];