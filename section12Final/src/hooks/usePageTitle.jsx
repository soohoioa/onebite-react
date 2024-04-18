import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")[0];
    // 변수명 앞에 $를 사용하는 이유는 관례상 이 변수 안에 DOM요소가 저장될 거라는 뜻이다.
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
