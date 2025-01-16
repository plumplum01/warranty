import { useEffect, useRef } from "react";

export default function Photo() {
    const videoRef = useRef(null); // video 요소를 참조하기 위한 useRef

    useEffect(() => {
        const video = videoRef.current; // useRef로 참조한 video 요소

        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then(function (stream) {
                    video.srcObject = stream; // 비디오 스트림 설정
                })
                .catch(function (error) {
                    console.error("Something went wrong!", error);
                });
        }
    }, []); // 빈 배열을 전달하여 컴포넌트 마운트 시 한 번만 실행

    return (
        <section className="camWrapper">
            <div id="camContainer">
                <video autoPlay playsInline ref={videoRef} id="videoElement"></video>
            </div>
            <div className="imgContainer">
            <img src={`${process.env.PUBLIC_URL}/assets/cardfix.png`} alt="Card" />
            </div>
        </section>
    );
}