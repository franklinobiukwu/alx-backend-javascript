import ClassRoom from './0-classroom';

const initializeRooms = () => {
  const sizes = [19, 20, 34];
  const classRooms = [];
  for (let i = 0; i < sizes.length; i += 1) {
    classRooms.push(new ClassRoom(sizes[i]));
  }
  return classRooms;
};

export default initializeRooms;
