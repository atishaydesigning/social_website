import { Article } from '@/types'

export const articles: Article[] = [
  {
    id: 1,
    publication: "THE GENE POOL",
    publicationIcon: "/p1.jpg",
    title: "Courage & Cowardice",
    author: "GENE WEINGARTEN",
    readTime: "5 MIN READ",
    image: "/i1.jpg",
    likes: 849,
    comment_count: 69,
    date:"12/01/25",
    comments: [
      {
        id: 101,
        parentId: null,
        postId: 1,
        text: "Excited to join this community!",
        replies: [
          {
            id: 102,
            parentId: 101,
            postId: 1,
            text: "Welcome aboard!",
          },
        ],
      },
      {
        id: 103,
        parentId: null,
        postId: 1,
        text: "Hello everyone!",
        replies: [],
      },
    ],
  },
  {
    id: 2,
    publication: "BITS & PIECES",
    publicationIcon: "/p2.jpg",
    title: "The Sweet Spot",
    author: "STEVE SKROVAN",
    readTime: "9 MIN READ",
    preview: 'A Memoir in Four Parts: Part One "Insult to the Brain"',
    image: "/i2.jpg",
    likes: 849,
    comment_count: 69,
    date:"12/01/25",
    comments: [
      {
        id: 101,
        parentId: null,
        postId: 1,
        text: "Excited to join this community!",
        replies: [
          {
            id: 102,
            parentId: 101,
            postId: 1,
            text: "Welcome aboard!",
          },
        ],
      },
      {
        id: 103,
        parentId: null,
        postId: 1,
        text: "Hello everyone!",
        replies: [],
      },
    ],
  },
  {
    id: 3,
    publication: "WATSON-SMYTH",
    publicationIcon: "/p3.jpg",
    title: "Your decorating dilemmas solved",
    author: "KATE WATSON-SMYTH",
    readTime: "11 MIN READ",
    preview: "What to do about bad lighting? How do I overcome decision paralysis? Is it OK to rip out original features? Can I use strong colour in small rooms? How to hide the TV – and more of your questions answered",
    image: "/i3.jpg",
    likes: 849,
    comment_count: 69,
    date:"12/01/25",
    comments: [
      {
        id: 101,
        parentId: null,
        postId: 1,
        text: "Excited to join this community!",
        replies: [
          {
            id: 102,
            parentId: 101,
            postId: 1,
            text: "Welcome aboard!",
          },
        ],
      },
      {
        id: 103,
        parentId: null,
        postId: 1,
        text: "Hello everyone!",
        replies: [],
      },
    ],
  },
];