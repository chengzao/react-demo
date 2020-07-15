import React, { useEffect, useState } from "react";
import { DrawQRPoster } from "./create";
import { downloadFile } from "./download";

export default function Poster() {
  const [poster, setPoster] = useState();
  const width = 375;
  const height = 546;
  useEffect(() => {
    async function getPoster() {
      const link = "https://www.baidu.com";
      let imgUrl = await DrawQRPoster(link, width, height);
      setPoster(imgUrl);
    }
    getPoster();
  }, []);

  const handleDownload = () => {
    let image = new Image();
    image.src = poster;
    image.style.width = width + "px";
    image.style.height = height + "px";
    let fileName = `${+new Date()}.png`;
    downloadFile(image.src, fileName);

    // let fileName = `${+new Date()}.png`;
    // downloadFile(poster.src, fileName);
  };

  return (
    <div className="poster">
      <img style={{ width, height }} src={poster} alt="" />
      <p></p>
      <button onClick={handleDownload}>download</button>
    </div>
  );
}
