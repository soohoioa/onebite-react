import "./DiaryList.css";
import Button from "./Button";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value={"latest"}>최신순</option>
          {/* value값으로 영어를 사용한 이유
              -> 나중에 select태그에 어떤 옵션이 선택이 되었는지를 실제로 state를 이용하여 저장해야 한다. 
              -> 그때 state값에 한국어로 작성할 경우 코드상에 한국어를 입력해야 하기도 하고 띄어쓰기도 주의를 해줘야 한다. 
              -> 좀 더 편리한 작업을 위해 실제 value값을 영어로 작성했다.  */}
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button text={"새 일기 작성"} type={"POSITIVE"} />
      </div>
      <div className="list_wrapper">
        <DiaryItem />
      </div>
    </div>
  );
};

export default DiaryList;
