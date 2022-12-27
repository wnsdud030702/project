import axios from "axios";

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: "KakaoAK {3a2aecb9b7d074650d0534c37756dd18}" // 공통으로 요청 할 헤더
  }
});


// search map api
export const blogSearch = params => {
  return Kakao.get("/v2/search/map", { params });
};