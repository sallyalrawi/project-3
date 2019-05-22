export const caloriesMale = user =>
  66 + 6.2 * user.currentWeight + 12.7 * user.height - 6.76 * user.age;

export const caloriesFemale = user =>
  655.1 + 4.35 * user.currentWeight + 4.7 * user.height - 4.7 * user.age;

export const currentWeight = weights => {
  const index = weights.length;
  return weights[index - 1].weight;
};

export const formatDate = date =>
  `${date.split(' ')[1]} ${date.split(' ')[2]} ${date.split(' ')[3]}`;
