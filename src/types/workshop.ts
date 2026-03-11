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
  image: { // Just the filename. Will be automatically expanded to 'public/images/posters/'
    regular: string;
    square: string;
  }
}
