export type Agent = {
  id: string;
  name: string;
  role: string;
  specialization: string;
  location: string;
  yearsExperience: number;
  email: string;
  phone: string;
  languages: string[];
  bio: string;
};

export type Review = {
  id: string;
  agentId: string;
  rating: number;
  reviewerName: string;
  comment: string;
  createdAt: string;
};
