import { useState } from "react";

const gym = "gym";
const resources = "resources";

const Gym = () => {
  const [hidden, setHidden] = useState({
    day1: "none",
    day2: "none",
    day3: "none",
    day4: "none",
    day5: "none",
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
      <h1>Lịch tập gym 5 buổi/tuần</h1>
      <div>
        <li>
          Buổi 1 (Pull day): cơ lưng, tay trước và cẳng tay - Tập trung tay
          trước - 3 tay/2 lưng
        </li>
        <li>
          Buổi 2 (Push day): cơ ngực, cơ vai và cơ tay sau - Tập trung ngực - 3
          ngực/1 vai/1 tay sau
        </li>
        <li>Buổi 3 (Legs Day): cơ chân, mông, bắp chân và cơ bụng</li>
        <li>
          Buổi 4 (Pull day): cơ lưng, tay trước và cẳng tay - Tập trung lưng - 3
          lưng/2 tay
        </li>
        <li>
          Buổi 5 (Push day): cơ ngực, cơ vai và cơ tay sau - Tập trung tay sau -
          3 tay sau/1 ngực/1 vai
        </li>
        <h4>3 SET - 8-12 REP - Nghỉ 2 phút mỗi set</h4>
      </div>
      <div className="content">
        <h2
          className="heading"
          onClick={(event) => displayContentHandle(event, "day1")}
        >
          Buổi 1: Tập cơ lưng xô, tay trước và cẳng tay{" "}
          <img alt="" src={`${resources}/down-arrow.png`} />
        </h2>

        <div style={{ display: hidden.day1 }}>
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
          <img alt="" src="gym/Incline-Dumbbell-Curl-resized.webp" />

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
          <img alt="" src="gym/zottman-curl.jpg" />

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
          <img alt="" src="gym/Barbell-Curl.gif" />
          <img alt="" src="gym/barbell-curl-resized.webp" />

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
          <img alt="" src={`${gym}/Lat-Pulldown.gif`} />
          <img alt="" src={`${gym}/wide-grip-lat-pull-down-resized.webp`} />
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
          <img alt="" src={`${gym}/seated-v-bar-cable-row-exercise.gif`} />
          <img alt="" src={`${gym}/seated-cable-row.jpg`} />
        </div>

        <h2
          className="heading"
          onClick={(event) => displayContentHandle(event, "day2")}
        >
          Buổi 2: Tập cơ ngực, cơ vai và cơ tay sau{" "}
          <img alt="" src={`${resources}/down-arrow.png`} />
        </h2>
        <div style={{ display: hidden.day2 }}>
          <h3>Incline Dumbbell Press</h3>
          <img
            alt=""
            src="https://www.thethaothientruong.vn/uploads/contents/incline-dumbbell-press.jpg"
          ></img>

          <h3>Cable Chest Fly</h3>
          <img
            alt=""
            src="https://i0.wp.com/soma.fitness/wp-content/uploads/2022/04/1cb5e71808ae65b73fd99b633c214c4ede40f5e1.jpg?resize=1024%2C450&ssl=1"
          ></img>

          <h3>Dumbbell bench press</h3>
          <img
            alt=""
            src="https://cdn-0.weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Bench-Press-resized.png?ezimgfmt=ng%3Awebp%2Fngcb4"
          ></img>

          <h3>Triceps rope push-down</h3>
          <img
            alt=""
            src="https://weighttraining.guide/wp-content/uploads/2016/05/Triceps-Rope-Pushdown-resized.png"
          ></img>

          <h3>Seated Dumbbell Shoulder Press</h3>
          <img
            alt=""
            src="https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492640379861-4YARXK0C5XIKTU2LW2II/Seated+Dumbbell+Shoulder+Press"
          ></img>
        </div>

        <h2
          className="heading"
          onClick={(event) => displayContentHandle(event, "day3")}
        >
          Buổi 3: Tập chân, mông, đùi{" "}
          <img alt="" src={`${resources}/down-arrow.png`} />
        </h2>

        <h2
          className="heading"
          onClick={(event) => displayContentHandle(event, "day4")}
        >
          Buổi 4: Tập cơ lưng, tay trước và cẳng tay - Tập trung lưng
          <img alt="" src={`${resources}/down-arrow.png`} />
        </h2>
        <div style={{ display: hidden.day4 }}>
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
          <img alt="" src="gym/15244.gif" style={{ minWidth: "300px" }} />
          <img alt="" src="gym/Cable-Seated-Wide-grip-Row-resized.webp" />

          <h3>Close grip cable pull down</h3>
          <img
            alt=""
            src="https://weighttraining.guide/wp-content/uploads/2016/10/Cable-close-grip-pull-down-resized.png"
          />

          <h3>Machine one-arm row</h3>
          <img
            alt=""
            src="https://weighttraining.guide/wp-content/uploads/2017/01/Machine-one-arm-row-resized.png"
          />

          <h3>Cable Bicep Curls</h3>
          <img
            alt=""
            src="https://www.dmoose.com/cdn/shop/articles/1_1_42ccb79d-1b2f-4bd6-a9d4-e886fb09fd06.png?v=1646826645"
          />

          <h3>Standing Dumbbell Preacher Curl</h3>
          <img
            alt=""
            src="https://weighttraining.guide/wp-content/uploads/2017/07/standing-dumbbell-preacher-curl-resized.png"
          />
        </div>

        <h2
          className="heading"
          onClick={(event) => displayContentHandle(event, "day5")}
        >
          Buổi 5 (Push day): cơ ngực, cơ vai và cơ tay sau - Tập trung tay sau
          <img alt="" src={`${resources}/down-arrow.png`} />
        </h2>
        <div style={{ display: hidden.day5 }}>
          <h3>TRICEP SINGLE ARM CABLE PUSHDOWN</h3>
          <iframe
            title="Tricep Single Arm Cable Pushdown"
            src="https://gymlab.vn/wp-content/uploads/2023/03/720-Cach-tap-tay-sau-mot-tay-voi-day-cap-Ngang-Gymlab.mp4"
          />

          <h3>Triceps Dips Machine </h3>
          <img
            alt=""
            src="https://fitnessprogramer.com/wp-content/uploads/2021/04/Lever-Overhand-Triceps-Dip.gif"
          />

          <h3>Dumbbell Kickbacks</h3>
          <img
            alt=""
            src="https://weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Kickback-resized.png"
          />

          <h3>Dumbbell fly</h3>
          <img
            alt=""
            src="https://weighttraining.guide/wp-content/uploads/2016/11/dumbbell-fly-resized.png"
          />

          <h3>Dumbbell Lateral Raise</h3>
          <img
            alt=""
            src="https://www.thethaothientruong.vn/uploads/contents/dumbbell-lateral-raise.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Gym;
