export type BoxItem = {
  id: number;
  title: string;
  price: number | null;
};

export const boxList: BoxItem[] = [
  { id: 1, title: "Box 1", price: 299 },
  { id: 2, title: "Box 2", price: 599 },
  { id: 3, title: "Box 3", price: null },
];
