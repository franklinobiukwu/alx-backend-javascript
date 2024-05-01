import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo])
    .then((responses) => {
      const arr = responses.map((response) => {
        if (response.status === 'fulfilled') {
          return {
            status: response.status,
            value: response.value
          };
        }
        if (response.status === 'rejected') {
          return {
            status: response.status,
            reason: response.reason
          };
        }
        return response;
      });
      return arr;
    });
}
