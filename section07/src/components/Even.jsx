import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수 : useEffect가 끝날때 실행된다.
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>찍수입니다. </div>;
};

export default Even;
