function generateRandomInteger(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export function generatedRandomReviews(
  title: string[],
  text: string[]
): {
  title: string;
  description: string;
}[] {
  const reviews = [];
  let random = generateRandomInteger(90);
  for (let i = random; i < random + 10; i++) {
    reviews.push({
      title: title[i],
      description: text[i],
    });
  }
  return reviews;
}
