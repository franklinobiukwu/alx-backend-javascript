import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);

  return Promise.allSettled([user, photo])
    .then((responses) => {
      const arr = responses.map((response) => {
        const val = {
          status: response.status,
        };

        if (response.status === 'fulfilled') {
          val.value = response.value;
        } else if (response.status === 'rejected') {
          val.value = `${response.reason}`;
        }
        return val;
      });
      return arr;
    });
}
