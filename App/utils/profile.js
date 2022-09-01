// Profile API 관리

import API from './API';

const getProfile = async (user_id, date) => {
  try {
    return await API.get(`/profile/read_profile/${user_id}`);
  } catch (error) {
    console.warn('fail to fetch UserProfile', error);
  }
};

const postProfileInfo = async (
  user_id,
  name,
  gender,
  birthday,
  team,
  field,
) => {
  try {
    return await API.post(
      `/profile/create_profile/${user_id}?name=${name}&gender=${gender}&birthday=${birthday}&team=${team}&field=${field}`,
    )
      .then(res => {
        console.log('success update profile Info');
      })
      .catch(err => console.log(err));
  } catch (error) {
    console.warn('fail update profile', error);
  }
};

export default {
  getProfile,
  postProfileInfo,
};
