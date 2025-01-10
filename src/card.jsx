import React, { useEffect } from "react";

export default function Card() {
    useEffect(() => {
        const cards = document.querySelectorAll(".card");
        const styleElement = document.querySelector(".hover");

        cards.forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const w = rect.width;
            const h = rect.height;
            const px = Math.abs(Math.floor((100 / w) * x) - 100);
            const py = Math.abs(Math.floor((100 / h) * y) - 100);
            const pa = 50 - px + (50 - py);

            const lp = 50 + (px - 50) / 1.5;
            const tp = 50 + (py - 50) / 1.5;
            const px_spark = 50 + (px - 50) / 7;
            const py_spark = 50 + (py - 50) / 7;
            const p_opc = 20 + Math.abs(pa) * 1.5;

            const tf = `rotateX(${((tp - 50) / 2) * -1}deg) rotateY(${((lp - 50) / 1.5) * 0.5}deg)`;
            const gradPos = `background-position: ${lp}% ${tp}%;`;
            const sparkPos = `background-position: ${px_spark}% ${py_spark}%;`;
            const opacity = `opacity: ${p_opc / 100};`;

            styleElement.innerHTML = `
            .card:hover:before { ${gradPos} }
            .card:hover:after { ${sparkPos} ${opacity} }
            `;

            card.style.transform = tf;
        });

        card.addEventListener("mouseout", () => {
            styleElement.innerHTML = "";
            card.style.transform = "";
        });
        });

        return () => {
        cards.forEach((card) => {
            card.removeEventListener("mousemove", () => {});
            card.removeEventListener("mouseout", () => {});
        });
        };
    }, []);

    return (
        <div>
        <main id="app">
            <section className="cards">
                <div className="card eevee animated"></div>
            </section>

            <style className="hover"></style>
        </main>

        {/* <section className="promo">
            <p>
            <a target="_top" href="https://codepen.io/simeydotme/pen/abYWJdX">
                View Version 2, much improved here
                <img
                src="https://assets.codepen.io/13471/internal/screenshots/pens/abYWJdX.custom.png?version=1674760356"
                alt=""
                />
            </a>
            </p>
        </section> */}
        </div>
    );
}