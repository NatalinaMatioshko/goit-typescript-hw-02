export type Image = {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
  likes: number;
  user: {
    name: string;
  };
};

export interface Data {
  results: Image[];
  total: number;
  total_pages: number;
}
