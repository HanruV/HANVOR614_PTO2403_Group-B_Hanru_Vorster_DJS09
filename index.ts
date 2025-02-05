const returningUserDisplay = document.querySelector("#returning-user");
const userNameDisplay = document.querySelector("#user");
const reviewTotalDisplay = document.querySelector("#reviews");

const reviews = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: true,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: false,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: true,
    date: "27-03-2021",
  },
];

function showReviewTotal(value: number, name: string, loyal: boolean) {
  const star = "\u2B50";
  reviewTotalDisplay.innerHTML = `Review total: ${value.toString()} | last reviewed by: ${name} ${
    loyal ? star : ""
  }`;
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

const you: {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  age: number;
} = {
  firstName: "Bobby",
  lastName: "Brown",
  isReturning: true,
  age: 35,
};

function populateUser(isReturning: boolean, userName: string) {
  if (isReturning) {
    returningUserDisplay.innerHTML = "back";
  }
  userNameDisplay.innerHTML = userName;
}

populateUser(you.isReturning, you.firstName);
