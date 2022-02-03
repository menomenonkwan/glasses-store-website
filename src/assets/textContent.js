import { faker } from '@faker-js/faker';

const shopOptions = [
  {
    id: 1,
    title: "Women's Glasses",
    image: "https://source.unsplash.com/dNNfMegXUi4/",
    link: '#/',
  },
  {
    id: 2,
    title: "Men's Glasses",
    image: "https://source.unsplash.com/cmQqRwJ-MpQ/",
    link: '#/',
  },
  {
    id: 3,
    title: "Children's Glasses",
    image: "https://source.unsplash.com/LjzyAxn2hdQ/",
    link: '#/',
  },
  {
    id: 4,
    title: "EyeGlasses",
    image: "https://source.unsplash.com/UnVeFudXIro/",
    link: '#/',
  },
  {
    id: 5,
    title: "SunGlasses",
    image: "https://source.unsplash.com/3Z5gO5vod5w/",
    link: '#/',
  },
  {
    id: 6,
    title: "Blue Light Glasses",
    image: "https://source.unsplash.com/-paUf05gaUs/",
    link: '#/',
  }
];

const ReviewCard = () => {
  return (
    <div className="py-3">
      <p className="text-start fs-5 fw-lighter px-5">{faker.lorem.sentence()}</p>
      <h4 className="text-start fw-bold fs-4 fst-italic px-5 ms-4">{faker.name.findName()} - <span className="lead">{faker.address.city()}, {faker.address.country()}</span></h4>
    </div>
  );
}

const reviewerImages = [
  "https://source.unsplash.com/u6JG0eYjcEU/750x400",
  "https://source.unsplash.com/SCbycmUSAaE/750x400",
  "https://source.unsplash.com/OoOU2-5ZPYk/750x400",
  "https://source.unsplash.com/WE3X71Hk4dA/750x400",
]

export { shopOptions, ReviewCard, reviewerImages }