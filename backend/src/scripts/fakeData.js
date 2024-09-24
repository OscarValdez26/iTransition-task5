import { es, en, fr, ru, it, ja, Faker } from "@faker-js/faker";

let customFaker;

function generateName(){
  let nameGenerated = {
    userName: customFaker.person.firstName(),
    userMidname: customFaker.person.middleName(),
    userLastName: customFaker.person.lastName(),
  }
  let values = Object.values(nameGenerated);
  let name = values.join(' ');
  return name;
}

function generateAddress(){
  let addressGenerated = {
    userAddress: customFaker.location.streetAddress(),
    userCity: customFaker.location.city(),
    userState: customFaker.location.state(),
  }
  let values = Object.values(addressGenerated);
  values.sort(function() { return Math.random() - 0.5 });
  let address = values.join(',');
  return address;
}

export function createRandomUser(seed,region) {
  setRegion(region);
  customFaker.seed(seed);
  let data = {
    userId: customFaker.string.uuid(),
    userPhone: customFaker.phone.number(),
  }
  const name = generateName();
  const address = generateAddress();
  let user ={
    id: data.userId,
    name:name,
    address:address,
    phone: data.userPhone,
  }
  return user;
}

function setRegion(region){
  switch (region) {
    case "ES":
        customFaker = new Faker({
            locale: [es, en],
        });
        break;
    case "FR":
      customFaker = new Faker({
            locale: [fr, en],
        });
        break;
    case "IT":
      customFaker = new Faker({
            locale: [it, en],
        });
        break;
    case "RU":
      customFaker = new Faker({
            locale: [ru, en],
        });
        break;
    case "JA":
      customFaker = new Faker({
            locale: [ja, en],
        });
        break;
    case "EN":
      customFaker = new Faker({
            locale: [en],
        });
        break;
    default:
      customFaker = new Faker({
            locale: [en],
        });
        break;
  }
}