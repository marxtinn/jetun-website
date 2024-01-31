export type Facility = {
  id: string;
  name: string;
  description: string;
  image_url: string;
};

export type Program = {
  id: string;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  price: number;
  contact_name: string;
  contact_phone: string;
};

export type Post = {
  id: string;
  title: string;
  content: string;
  image_url: string;
  created_at: string;
  updated_at: string;
};
