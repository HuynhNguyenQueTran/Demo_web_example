function submitBirthdayInfo() {
  const name = document.getElementById("nameInput").value.trim();
  const dob = document.getElementById("dobInput").value;
  const wishesDiv = document.getElementById("personal-wishes");
  const message = document.getElementById("message");

  if (!name || !dob) {
    alert("Vui lòng điền đầy đủ tên và ngày sinh!");
    return;
  }

  // Tính tuổi
  const [day, month, year] = dob.split("/").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  if (!hasHadBirthday) age--;

  document.getElementById("birthday-form").style.display = "none";
  wishesDiv.style.display = "block";

  message.innerText = "Thấy em tâm lý chưa ai như chị , chị tận gốc rễ :))";
  message.style.animation = "none";
  void message.offsetWidth;
  message.style.animation = "popIn 1s ease-out";

wishesDiv.innerHTML = `
  <div class="wishes-content">
    <p>Gửi chị gái tuổi ${age} – tuổi đôi mươi, áp lực công việc thì dí tới, tình duyên khó hiểu, cuộc sống thì đầy bất ngờ 😆 Nhưng đừng lo, cuộc đời vốn dĩ hài hước, và em nhắc nhẹ: <b>đừng bào cái xác của em</b> nhé!</p>

    <p>Đi làm thì như chơi game: boss to (deadline), nhiệm vụ khó (sếp giao), lúc lag não (mệt mỏi) – nhưng em có “skin đặc biệt”: vừa trưởng thành, vừa trẻ con, vừa dễ thương lại vừa lì lợm. </p>

    <p>Nếu có ngày nào muốn bỏ việc, nhớ còn nhiều việc khác để bỏ hơn – bỏ deadline, bỏ drama, bỏ luôn suy nghĩ “mình không đủ giỏi”. Chỉ cần em vẫn cười khúc khích giữa mớ bòng bong, thế giới này vẫn đáng yêu lắm rồi. ✨</p>

    <p>Chị hãy chill, làm vừa đủ, mệt thì nghỉ – deadline có thể dí nhưng hạnh phúc thì không ai dí được đâu. Cứ tự tin đi, vì chị vừa đáng yêu vừa nhây vừa lỳ, mà người lỳ  kiểu gì cũng thắng. </p>

    <p>Nhớ nha, cuộc sống thì cứ từ từ, không cần gồng quá mức. Khi áp lực dí thì hít một hơi thật sâu, uống trà sữa, và tưởng tượng deadline biến thành một con mèo con đáng yêu </p>
    
    <p>Đi đâu cũng được, chỉ cần còn thời gian là có thể “chill” – nhưng riêng đi chùa thì phải đều đều nha, vừa cầu bình an, vừa… giải stress kiểu hiền lành. </p>

    <p>Mỗi tuần ít nhất một lần thả hồn theo nhang trầm, để não nghỉ ngơi, để tìm bình yên, và để biết rằng đôi khi chỉ cần đi chùa, ăn bánh ngọt, và cười khúc khích thôi là đủ rồi. </p>

    <p>Cuộc đời đôi khi không cần quá nghiêm túc – stress thì né, drama thì block, còn hạnh phúc thì ôm trọn. Chỉ cần còn trà sữa, đi chùa và cười là em đã sống đúng kiểu tuổi đôi mươi rồi. </p>

    <p><i>“Love yourself in every situation of your life and make yourself happy because no one can make you happy except you.”</i></p>

    <p>Chúc chị mỗi ngày thật nhiều niềm vui, ít áp lực, và luôn giữ được nụ cười tươi như ánh mặt trời sớm ban mai nhé! </p>
  </div>
`;


  startFireworks();
}

function startFireworks() {
  const canvas = document.getElementById("fireworksCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Simple fireworks effect
  let particles = [];

  function createParticle(x, y) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 5 + 2;
    return {
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 100
    };
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.05;
      p.life--;

      ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();

      if (p.life <= 0) particles.splice(i, 1);
    });

    if (Math.random() < 0.05) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height / 2;
      for (let i = 0; i < 50; i++) {
        particles.push(createParticle(x, y));
      }
    }

    requestAnimationFrame(render);
  }

  render();
}
let index = 0;