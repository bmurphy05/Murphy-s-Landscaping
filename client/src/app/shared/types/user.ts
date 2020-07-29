export interface User {
  id: string;
  fullName: string;
  role: string;
  email: string;
  phone: string;
  address: {
    id: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  };
}
