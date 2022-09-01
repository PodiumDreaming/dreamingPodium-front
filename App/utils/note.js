// 기록 API 관리
import API from './API';
import axios from 'axios';
import * as APIURL from '../../config';

// 해당 날짜의 트레이닝, 컨디셔닝 부분 기록 불러오기
const getRecord = async (user_id, date, serverToken) => {
  try {
    return await axios.get(
      `${APIURL.BASE_URL}/record/read/${user_id}?wdate=${date}`,
      {
        headers: {
          token: serverToken,
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.warn('기록을 불러오지 못했습니다. ', error);
  }
};

// 해당 날짜의 기록 쓰기
const postRecord = async (user_id, wdate, key_type, content, serverToken) => {
  try {
    return await axios.post(
      `${APIURL.BASE_URL}/record/write/${user_id}?wdate=${wdate}&key_type=${key_type}`,
      content,
      {
        headers: {
          token: serverToken,
        },
      },
    );
  } catch (error) {
    console.warn('fail record', error);
  }
};

const postImage = async (user_id, image_type, wdate, image, serverToken) => {
  return axios
    .post(
      `${APIURL.BASE_URL}/images/uploadfile?user_id=${user_id}&image_type=${image_type}&wdate=${wdate}`,
      image,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          token: serverToken,
        },
      },
    )
    .then(res => console.log('success image upload'))
    .catch(err => console.log('fail image upload', err));
};

const deleteImage = async (user_id, image_type, wdate, serverToken, uri) => {
  return await axios
    .post(
      `${APIURL.BASE_URL}/images/delete_image/${user_id}?image_type=${image_type}&wdate=${wdate}`,
      {content: uri},
      {
        headers: {
          token: serverToken,
        },
      },
    )
    .then(res => console.log('success to delete image'))
    .catch(err => console.log('fail to delete image', err));
};

// 목표, 자질 , 노력 ,루틴  기록 불러오기
const getObjective = async user_id => {
  try {
    return await API.get(`/objective/read_objectives/${user_id}`);
  } catch (error) {
    console.warn('fail to fetch ObjectRecord ', error);
  }
};

const postObjectInit = async (
  user_id,
  objectives,
  requirements,
  efforts,
  routines,
) => {
  return axios
    .post(`${APIURL.BASE_URL}/objective/create_objectives`, {
      user_id: user_id,
      objectives: objectives,
      requirements: requirements,
      efforts: efforts,
      routines: routines,
    })
    .then(res => console.log('success post ObjectRecord', res))
    .catch(err => console.log('fail post ObjectRecord', err));
};

const updateObject = async (user_id, keyword, content) => {
  return await API.post(
    `/objective/update_objectives/${user_id}?keyword=${keyword}&content=${content}`,
  )
    .then(response => response.status)
    .catch(err => console.warn(err));
};

export default {
  getRecord,
  getObjective,
  postRecord,
  postImage,
  postObjectInit,
  updateObject,
  deleteImage,
};
