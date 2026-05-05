export type Category = 'socks' | 'shirt' | 'muffler' | 'bag' | 'etc';

export type Project = {
  id: string;
  name: string;
  category: Category;
  startDate: string | null;
  endDate: string | null;
  yarn: string | null;
  needle: string | null;
  imageUrl: string | null;
  rowCounter: number;
  createdAt: string;
};

export type ProjectInsert = Omit<Project, 'id' | 'createdAt' | 'rowCounter'>;
export type ProjectUpdate = Partial<ProjectInsert>;
