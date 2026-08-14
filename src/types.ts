export interface DressItem {
  id: string;
  number: string;
  name: string;
  fabric: string;
  silhouette: string;
  image: string;
  status: 'Available' | 'Exclusive' | 'Active';
  description: string;
  details: string[];
}
