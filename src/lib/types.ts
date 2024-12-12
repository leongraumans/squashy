export interface ActivityType {
  id: number;
  name: string;
  visibility: string;
  // Add other relevant fields
}

export interface ActivityDetail extends ActivityType {
  description: string;
  // Add other fields if needed
}
