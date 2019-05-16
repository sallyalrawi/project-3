import axios from 'axios';

export async function getDiary(userId) {
  const url = `/api/cashCal/diary/${userId}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
}

export function postDiary(userId, data) {
  return axios.post(`/api/cashCal/diary/${userId}`, data);
}

export async function getWeight(userId) {
  const url = `/api/cashCal/weight/${userId}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
}

export function postWeight(userId, data) {
  return axios.post(`/api/cashCal/weight/${userId}`, data);
}

export async function getUser(userId) {
  const url = `/api/cashCal/user/${userId}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
}

export function postUser(userId, data) {
  return axios.post(`/api/cashCal/user/${userId}`, data);
}

export async function getRewards() {
  const url = '/api/cashCal/rewards';
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function purchaseReward(userId, data) {
  const url = `/api/cashCal/user/${userId}`;
  try {
    const response = await axios.put(url, data);
    return response;
  } catch (error) {
    throw error;
  }
}