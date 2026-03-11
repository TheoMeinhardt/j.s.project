export type Workshop = {
  titel: string;
  text: string;
  begin: Date;
  end: Date;
  location: {
    name: string;
    address: string;
    houseNumber: number;
    zip: number;
    city: string;
  };
  price: number;
  signUp: string;
  features: string[];
}
