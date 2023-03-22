/*eslint-disable*/
import "./App.css";
import { useState } from "react";

function App() {
  const [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이선 독학",
  ]);
  const [따봉, 따봉번경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <button onClick={() => {
        let sortedArray = [...글제목];
        sortedArray.sort();
        글제목변경(sortedArray);}}> 정렬버튼 </button>
      {
      글제목.map((a, i) => {
        return(
           <div className="list" key ={i}>

              <h4 onClick={() => { 
                setModal(!modal);
                setTitle(i);
                console.log(title);

                }}> {  글제목[i]  }
                <span
                  onClick={() => {
                    let copy = [...따봉];
                    copy[i]++;
                    따봉번경(copy);
                  }}> 👍 </span> {따봉[i]}
              </h4>

              <p> 2월 17일 발행</p>
            </div>
        )
      }) 
      }

      {modal == true ? <Modal 글제목= {글제목} 글제목변경={글제목변경} title={title} color="blue"></Modal> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background : props.color}}>
    <h4>{props.글제목[props.title]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  );
}
export default App;
