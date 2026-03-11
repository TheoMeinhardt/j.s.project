import type { Workshop } from "@/types";

// temporary type to represent a workshop as it is stored in JSON.
// The main difference are the 'begin' and 'end' dates, which are
// stored as ISO 8601 strings
export type JSONWorkshop = {
  titel: string;
  text: string;
  begin: string;
  end: string;
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
  image: {
    regular: string;
    square: string;
  }
}

// Parses the JSON-stored workshop to the ts Workshop type. Mainly because
// JSON doesn't support dates but we need them
function parseWorkshops(json: JSONWorkshop[]): Workshop[] {
  let result: Workshop[] = []

  json.forEach((elem) => {
    result.push({
      titel: elem.titel,
      text: elem.text,
      begin: new Date(elem.begin),
      end: new Date(elem.end),
      location: {
        name: elem.location.name,
        address: elem.location.address,
        houseNumber: elem.location.houseNumber,
        zip: elem.location.zip,
        city: elem.location.city
      },
      price: elem.price,
      signUp: elem.signUp,
      features: elem.features,
      image: {
        regular: '/public/images/posters/' + elem.image.regular,
        square: '/public/images/posters/' + elem.image.square
      }
    })
  })

  return result
}

export { parseWorkshops }
