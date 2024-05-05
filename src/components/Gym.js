import { useState } from "react";

const gym = "gym";
const resources = "resources";

const Gym = () => {
  const [hidden, setHidden] = useState({
    day1: "none",
    day2: "none",
    day3: "none",
  });
  const displayContentHandle = (event, day) => {
    event.preventDefault();
    setHidden((prevDay) => ({
      ...prevDay,
      [day]: hidden[day] !== "none" ? "none" : "block",
    }));
  };

  return (
    <>
      <h1>Lịch tập gym 3 buổi/tuần</h1>
      <div>
        <li>Buổi 1 (Pull day): cơ lưng, tay trước và cẳng tay</li>
        <li>Buổi 2 (Push day): cơ ngực, cơ vai và cơ tay sau</li>
        <li>Buổi 3 (Legs Day): cơ chân, mông, bắp chân và cơ bụng</li>
        <h4>3 SET - 8-12 REP - Nghỉ 2 phút mỗi set</h4>
      </div>
      <div className="content">
        <h2
          className="heading"
          onClick={(event) => displayContentHandle(event, "day1")}
        >
          Buổi 1: Tập cơ lưng xô, tay trước và cẳng tay{" "}
          <img src={`${resources}/down-arrow.png`} />
        </h2>
        <div style={{ display: hidden.day1 }}>
          <h3>Lat pull down</h3>
          <li>
            Bước 1: Ngồi trên máy kéo cáp, chân cố định dưới thanh chắn, lưng
            thẳng, 2 tay nắm lấy thanh ngang với khoảng cách rộng hơn vai.
          </li>
          <li>
            Bước 2: Thở ra, đồng thời kéo thanh ngang xuống chạm ngực, giữ tư
            thế này trong vòng 1 giây.
          </li>
          <li>Bước 3: Hít vào, từ từ đưa tay về tư thế ban đầu.</li>
          <li>
            Bước 4: Lặp lại các động tác trên 12 - 15 lần/hiệp, 2 - 3 hiệp/buổi
            tập.
          </li>
          <img src={`${gym}/Lat-Pulldown.gif`} />
          <img src={`${gym}/wide-grip-lat-pull-down-resized.webp`} />
          <h3>Seated cable row</h3>
          <li>
            Bước 1: Ngồi lên ghế của máy kéo cáp. Hai tay nắm lấy thanh cầm. Hai
            lòng bàn tay hướng vào nhau. Hai bàn chân đặt lên bàn đạp của máy.
            Đầu gối hơi cong và không khóa khớp gối. Hơi ngả lưng về phía trước,
            hơi ưỡn ngực ra, căng cơ ngực.
          </li>
          <li>
            Bước 2: giữ thân người cố định, thở ra, kéo cáp về phía người. Chân
            và người tạo thành 1 góc 90 độ. Kéo cáp sao cho tay cầm chạm vào
            ngực. Giữ vị trí này 1 giây.
          </li>
          <li>
            Bước 3: Lặp lại các động tác trên 12 - 15 lần/hiệp, 2 - 3 hiệp/buổi
            tập.
          </li>
          <img src={`${gym}/seated-v-bar-cable-row-exercise.gif`} />
          <img src={`${gym}/seated-cable-row.jpg`} />
          <h3>Wide Grip Seated Cable Row</h3>
          <li>
            Bước 1: Ngồi lên máy tập và chọn mức tạ phù hợp, hai chân đặt lên vị
            trí bàn đạp. Lưu ý nên để thanh bar cao ngang phần ngực dưới.
          </li>
          <li>
            Bước 2: Giữ lưng thẳng, hạ thấp phần cầu vai và kéo cáp về phía thân
            người.
          </li>
          <li>
            Bước 3: Giữ nguyên tư thế trên khoảng 1 nhịp và đưa thanh bar về vị
            trí ban đầu.
          </li>
          <li>
            Bước 4: Lặp lại các động tác trên 12 - 15 lần/hiệp, 2 - 3 hiệp/buổi
            tập.
          </li>
          <img src="gym/15244.gif" style={{ minWidth: "300px" }} />
          <img src="gym/Cable-Seated-Wide-grip-Row-resized.webp" />
          <h3>Standing Barbell Curl </h3>
          <li>
            Bước 1: Đứng thẳng, hai chân dang rộng bằng vai, tay cầm thanh tạ
            đòn ngang đùi đảm bảo lòng bàn tay hướng về phía trước.
          </li>
          <li>
            Bước 2: Thở ra, gập tay lên trước ngực. Lưu ý, chỉ chuyển động cẳng
            tay, giữ nguyên vị trí bắp tay.
          </li>
          <li>
            Bước 3: Hít vào, đưa thanh tạ về vị trí ban đầu. Tiếp tục lặp lại
            các động tác 12 - 15 lần/hiệp, 2 - 3 hiệp/buổi tập.
          </li>
          <img src="gym/Barbell-Curl.gif" />
          <img src="gym/barbell-curl-resized.webp" />
          <h3> Preacher Curl </h3>
          <li>
            Bước 1: Ngồi lên ghế tập, hai tay cầm thanh tạ đòn sao cho lòng bàn
            tay hướng về phía trước. Đồng thời, đặt khủy tay lên đệm nghiêng của
            ghế.
          </li>
          <li>
            Bước 2: Hít vào, từ từ hạ thanh tạ xuống đến khi cánh tay duỗi
            thẳng.
          </li>
          <li>
            Bước 3: Thở ra, dùng lực từ bắp tay cuốn tạ lên vị trí ban đầu. Tiếp
            tục lặp lại các động tác.
          </li>
          <img src="gym/Machine-preacher-curl-resized.webp" />
          <h3>Incline Dumbbell Curl</h3>
          <li>Bước 1: Điều chỉnh ghế tập nghiêng khoảng 30 độ.</li>
          <li>
            Bước 2: Ngồi vào ghế, lưng tựa ra sau, hai tay cầm tạ đơn sao cho
            lòng bàn tay hướng vào nhau, cánh tay duỗi thẳng, hai chân trụ trên
            mặt sàn.
          </li>
          <li>
            Bước 3: Thở ra, dùng lực từ bắp tay cuốn tạ lên trên đến khi tạ
            ngang vai.
          </li>
          <li>
            Bước 4: Hít vào, từ từ đưa ta về vị trí ban đầu. Tiếp tục lặp lại
            các động tác.
          </li>
          <img src="gym/Incline-Dumbbell-Curl-resized.webp" />

          <h3>Zottman Curl</h3>
          <li>
            Bước 1: Thẳng lưng, mỗi tay cầm một quả tạ và lòng bàn tay hướng về
            phía trước.
          </li>
          <li>
            Bước 2: Bắp tay cố định, nâng tạ lên ngang vai, sau đó xoay cổ tay
            sao cho lòng bàn tay hướng ra ngoài.
          </li>
          <li>Bước 3: Từ từ hạ tay xuống vị trí ban đầu.</li>
          <li>
            Bước 4: Lặp lại các động tác trên khoảng 2 - 3 hiệp, mỗi hiệp 10 -
            12 lần.
          </li>
          <img src="gym/zottman-curl.jpg" />
        </div>

        <h2
          className="heading"
          onClick={(event) => displayContentHandle(event, "day2")}
        >
          Buổi 2: Tập cơ ngực, cơ vai và cơ tay sau{" "}
          <img src={`${resources}/down-arrow.png`} />
        </h2>
        <div style={{ display: hidden.day2 }}>
          <h3>Chest Flys Machine</h3>
          <img src="gym/Machine-Fly-resized.png"></img>
          <h3>Incline Dumbbell Press</h3>
        </div>
      </div>
    </>
  );
};

export default Gym;
