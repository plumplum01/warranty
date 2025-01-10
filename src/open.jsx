import { useNavigate } from "react-router-dom";
import Card from "./card";

export default function Open() {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "src/assets/helloneuhas.png"; // 다운로드할 파일의 경로
        link.download = "downloaded-image.png"; // 저장될 파일 이름
        link.click();
    };

    const handlePhotoClick = () => {
        navigate("/photo"); // '/photo' 경로로 이동
    };

    return (
        <section className="openContainer">
            <Card />
            <div className="buttonWrapper">
                <button onClick={handleDownload}>저장하기</button>
                <button onClick={handlePhotoClick}>사진찍기</button>
            </div>
        </section>
    );
}