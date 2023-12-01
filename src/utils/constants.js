const apiKey_1 = "157bd74521b12d0172d26acc21c3651b";
const apiKey_2 = "258866f4986ebda66455925abdcfb439";

export const currencyApiLink =
  `https://corsproxy.io/?http://apilayer.net/api/live?access_key=${apiKey_1 || apiKey_2}&currencies=USD,AED,GBP,CAD,SGD,EUR,JPY,PKR,ZAR,INR,ALL&source=INR&format=1`;