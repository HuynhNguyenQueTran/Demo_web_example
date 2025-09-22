const cauDoVui = [
  {
    cauHoi: "Công cha như núi Thái Sơn,\nNghĩa mẹ như nước trong nguồn chảy ra. Đây là gì?",
    dapAn: ["Một bài toán", "Một câu ca dao", "Một câu đố"],
    dung: "Một câu ca dao",
    giaiThich: "Đây là ca dao quen thuộc, ca ngợi công lao sinh thành dưỡng dục của cha mẹ."
  },
  {
    cauHoi: "Ăn quả nhớ kẻ trồng cây, là nhắc nhở ta điều gì?",
    dapAn: ["Biết ơn", "Ăn nhanh kẻo hết", "Không ăn quả"],
    dung: "Biết ơn",
    giaiThich: "Câu tục ngữ dạy ta phải luôn nhớ ơn người đã tạo ra thành quả cho mình hưởng."
  },
  {
    cauHoi: "Một cây làm chẳng nên non,\nBa cây chụm lại nên hòn núi cao. Ý nghĩa là gì?",
    dapAn: ["Sức mạnh đoàn kết", "Làm vườn", "Leo núi"],
    dung: "Sức mạnh đoàn kết",
    giaiThich: "Ca dao này dạy rằng đoàn kết thì sẽ mạnh mẽ, làm được những điều lớn lao."
  },
  {
    cauHoi: "Đi một ngày đàng, học một sàng khôn. Vậy đi ba ngày thì sao?",
    dapAn: ["Mỏi chân", "Có thêm ba sàng khôn", "Đi taxi cho nhanh"],
    dung: "Có thêm ba sàng khôn",
    giaiThich: "Ý nghĩa của tục ngữ là: càng đi nhiều, trải nghiệm nhiều thì càng học được nhiều điều."
  },
  {
    cauHoi: "Trâu buộc ghét trâu ăn. Điều này có nghĩa là gì?",
    dapAn: ["Con trâu đói", "Người ghen tị", "Nói xấu bạn bè"],
    dung: "Người ghen tị",
    giaiThich: "Tục ngữ chỉ sự ghen ghét, đố kỵ khi thấy người khác được hưởng lợi mà mình thì không."
  },
  {
    cauHoi: "Vui thôi đừng vui quá – thường được dùng khi nào?",
    dapAn: ["Lúc đi làm", "Lúc đi chơi", "Lúc đang nhảy múa"],
    dung: "Lúc đi chơi",
    giaiThich: "Câu nói vui nhộn, hài hước nhắc nhở mọi người biết dừng lại đúng lúc."
  },
  {
    cauHoi: "Cái gì càng chia sẻ càng nhiều?",
    dapAn: ["Tiền", "Niềm vui", "Cơm hộp văn phòng"],
    dung: "Niềm vui",
    giaiThich: "Niềm vui càng chia sẻ thì càng lan tỏa và nhân lên gấp bội."
  },
  {
    cauHoi: "Ăn no quá thì sẽ thế nào?",
    dapAn: ["Buồn ngủ", "Có thêm sức lực", "Muốn ăn tiếp"],
    dung: "Buồn ngủ",
    giaiThich: "Chuyện vui đời thường: ăn no thường khiến ta buồn ngủ và lười vận động."
  },
  {
    cauHoi: "Trên trời có đám mây xanh,\nỞ giữa mây trắng, xung quanh mây vàng. Đây là gì?",
    dapAn: ["Bức tranh", "Câu đố dân gian", "Đám cưới"],
    dung: "Câu đố dân gian",
    giaiThich: "Đây là một trong những câu đố ca dao quen thuộc của ông bà xưa."
  },
  {
    cauHoi: "Cái gì càng cười càng mỏi?",
    dapAn: ["Cái miệng", "Cái bụng", "Cái răng"],
    dung: "Cái bụng",
    giaiThich: "Khi cười nhiều, bụng ta mỏi nhừ – một câu nói đùa vui nhộn."
  }
];

let index = 0;

function hienQuiz() {
  const popup = document.getElementById("quizPopup");
  if (popup) {
    popup.style.display = "block";
    hienCauDoVui();
  }
}

function hienCauDoVui() {
  const content = document.getElementById("quizContent");
  if (!content) return;

  if (index < cauDoVui.length) {
    const cauHoi = cauDoVui[index];
    let html = `<h3>${cauHoi.cauHoi}</h3>`;
    cauHoi.dapAn.forEach(dapAn => {
      html += `
        <label>
          <input type="radio" name="quiz" value="${dapAn}"> ${dapAn}
        </label><br>`;
    });
    html += `<br><button onclick="kiemTraDapAn()">Trả lời</button>`;
    html += `<div id="phanHoi" style="margin-top: 15px; font-weight: bold;"></div>`;
    content.innerHTML = html;
  } else {
    hienXacNhanCuoi();
  }
}

function kiemTraDapAn() {
  const luaChon = document.querySelector('input[name="quiz"]:checked');
  const phanHoiDiv = document.getElementById("phanHoi");

  if (!luaChon) {
    phanHoiDiv.innerHTML = `
      <div class="hop-phan-hoi sai">
        Vui lòng chọn một đáp án!
      </div>
    `;
    return;
  }

  const dapAnChon = luaChon.value;
  const cauHoi = cauDoVui[index];
  const correctSound = document.getElementById("correctSound");

  if (dapAnChon === cauHoi.dung) {
    if (correctSound) {
      correctSound.currentTime = 0;
      correctSound.play();
    }

    phanHoiDiv.innerHTML = `
      <div class="hop-phan-hoi dung">
        That's Right! ${cauHoi.giaiThich}<br>
        <div class="anh-phan-hoi">
          <img class="phan-hoi-img" src="assets/dung.gif" alt="Đúng rồi!">
        </div>
      </div>
    `;

    setTimeout(() => {
      if (correctSound) correctSound.pause();
      correctSound.currentTime = 0;

      index++;
      hienCauDoVui();
    }, 4000);
  } else {
    phanHoiDiv.innerHTML = `
      <div class="hop-phan-hoi sai">
       Oh nooo! ${cauHoi.giaiThich}<br>
        <div class="anh-phan-hoi">
          <img class="phan-hoi-img" src="assets/sai.gif" alt="Sai mất rồi!">
        </div>
      </div>
    `;
  }
}

function hienXacNhanCuoi() {
  const content = document.getElementById("quizContent");
  if (!content) return;

  content.innerHTML = `
    <h2> Chỉ còn 1 bước nữa thôi!</h2>
    <p>Bạn đã sẵn sàng đến bước cuối chưa?</p>
    <button onclick="chonSanSang(true)">Yes</button>
    <button onclick="chonSanSang(false)">No</button>
    <div id="phanHoiSanSang" style="margin-top: 15px; font-weight: bold;"></div>
  `;
}
function chonSanSang(isYes) {
  const phanHoi = document.getElementById("phanHoiSanSang");

  if (isYes) {
    hienCauHoiChinh();
  } else {
    if (phanHoi) {
      phanHoi.innerHTML = `<span style="color: red;">Why noo!!! 🤨<br>Oh noo hãy chọn lại nha!</span>`;
    }
  }
}

function quayLai() {
  index--;
  hienCauDoVui();
}

function hienCauHoiChinh() {
  const content = document.getElementById("quizContent");
  if (!content) return;

  content.innerHTML = `
    <h2>Câu hỏi cuối cùng</h2>
    
    <p>Hôm nay là ngày gì?</p>
    <label><input type="radio" name="q1" value="một ngày mới"> Một ngày mới tràn đầy năng lượng</label><br>
    <label><input type="radio" name="q1" value="cuối tuần"> Ngày cuối tuần lười biếng</label><br>
    <label><input type="radio" name="q1" value="giữa tuần"> Ngày giữa tuần bận rộn</label><br>
    <label><input type="radio" name="q1" value="bình thường"> Một ngày bình thường thôi</label><br>
    <label><input type="radio" name="q1" value="quên"> Không nhớ, mọi ngày như nhau</label><br><br>

    <p>Sau giờ làm việc bạn sẽ làm gì?</p>
    <label><input type="radio" name="q2" value="ngủ"> Ngủ một giấc tới mai</label><br>
    <label><input type="radio" name="q2" value="thư giãn"> Thư giãn, tận hưởng không khí thoải mái</label><br>
    <label><input type="radio" name="q2" value="học"> Học thêm cho tương lai sáng lạn</label><br>
    <label><input type="radio" name="q2" value="ăn"> Đi ăn uống thả ga</label><br>
    <label><input type="radio" name="q2" value="khóc"> Vừa ăn vừa khóc vì deadline đuổi theo</label><br><br>

    <button onclick="kiemTraCauCuoi()">Xác nhận</button>
    <div id="phanHoiCuoi" style="margin-top: 20px; font-weight: bold;"></div>
  `;
}

function kiemTraCauCuoi() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const phanHoi = document.getElementById("phanHoiCuoi");

  if (!q1 || !q2) {
    phanHoi.innerHTML = `<span style="color: red;">Hãy chọn đầy đủ cả hai câu hỏi trước khi xác nhận.</span>`;
    return;
  }

  const dapAn1 = q1.value;
  const dapAn2 = q2.value;

  // Đáp án đúng
  if (dapAn1 === "một ngày mới" && dapAn2 === "thư giãn") {
    window.location.href = "HB.html";
    return;
  }

  // Gợi ý nếu sai
  let loiNhan = "Bạn chọn vui đó, nhưng chưa đúng 'combo' rồi 😆<br>";

  // Các thông điệp vui nhộn
  const thongDiep = {
    "cuối tuần_ngủ": "Cuối tuần mà ngủ nướng thì chuẩn bài rồi, nhưng đâu phải hôm nay đâu 😴",
    "cuối tuần_ăn": "Ăn xả láng cuối tuần nghe hợp lý quá, nhưng chưa phải đáp án chuẩn nha!",
    "cuối tuần_thư giãn": "Cuối tuần thư giãn thì quá hợp lý, nhưng hôm nay chưa phải cuối tuần 😉",

    "giữa tuần_học": "Giữa tuần mà còn học, đúng chuẩn con ngoan trò giỏi!",
    "giữa tuần_khóc": "Giữa tuần mà khóc chắc deadline dí rồi, thương quá 😢",
    "giữa tuần_thư giãn": "Giữa tuần vẫn thư giãn? Bạn là master quản lý stress rồi 👏",

    "một ngày mới_ngủ": "Một ngày mới mà ngủ tiếp thì ngày đó thành... ngày cũ mất rồi 😆",
    "một ngày mới_học": "Ngày mới mà học hăng say thì tương lai sáng lạn, nhưng chưa đúng đáp án.",
    "một ngày mới_ăn": "Ngày mới ăn uống thả ga thì bụng vui trước, tâm hồn tính sau 🍜",
    "một ngày mới_khóc": "Ngày mới mà khóc thì hơi phí năng lượng tích cực đó nha!",

    "bình thường_ngủ": "Ngày bình thường mà ngủ cũng bình thường thôi 😴",
    "bình thường_thư giãn": "Ngày thường mà thư giãn thì cũng vui, nhưng không phải đáp án đúng!",
    "bình thường_ăn": "Ngày thường mà ăn sung sướng thì bụng bạn MVP rồi đó 😂",

    "quên_ngủ": "Không nhớ ngày gì, thôi đi ngủ cũng coi như xong ngày 😅",
    "quên_thư giãn": "Không nhớ ngày gì mà vẫn thư giãn? Bạn đúng là người biết tận hưởng đó 👌",
    "quên_học": "Không nhớ ngày gì nhưng vẫn học thì quả thật đáng nể 👏"
  };

  const key = `${dapAn1}_${dapAn2}`;
  phanHoi.innerHTML = loiNhan + (thongDiep[key] || "Cách chọn của bạn cũng thú vị đó!");
}
