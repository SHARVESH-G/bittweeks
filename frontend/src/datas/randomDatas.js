import { Colors } from './colors';
import { AllUsers } from './temp/allUsers';
import { groups } from './temp/groups';

export const randomColor = () => {
  const index = Math.floor(Math.random() * Colors.length);
  return Colors[index];
};

export const RandomUser = () => {
  const index = Math.floor(Math.random() * AllUsers.length);
  return AllUsers[index];
};

export const RandomGroup = () => {
  const index = Math.floor(Math.random() * groups.length);
  return groups[index];
};

export const NoOfGroups = (number) => {
  const shuffled = [...groups].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, number);
};

export const NoOfUsers = (number) => {
  const shuffled = [...AllUsers].sort(() => 0.5 - Math.random()).slice(0, number);
  return shuffled.map(user => ({
    ...user,
    color: randomColor(),
  }));
};
