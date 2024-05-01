import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo])
    .then((responses) => {
      const arr = responses.map((response) => {
        let val;
        if (response.status === 'fulfilled') {
          val = {
            status: response.status,
            value: response.value
          };
        } else if (response.status === 'rejected') {
          val = {
            status: response.status,
            value: `${response.reason}`
          };
        }
        return val;
      });
      return arr;
    });
}
