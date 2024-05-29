import React, { useState } from "react";
import "./scss/App.scss";

export default function App() {
  const [isModal, setIsModal] = useState(false);
  const [modalMsg, setModalMsg] = useState('')
  const [inp1, set1] = useState("");
  const [inp2, set2] = useState("");
  const [inp3, set3] = useState("");
  const [inp4, set4] = useState("");
  const [inp5, set5] = useState("");
  const [inp6, set6] = useState("");
  const [inp7, set7] = useState("");
  const [inp8, set8] = useState("");
  const [inp9, set9] = useState("");
  const [inp10, set10] = useState("");

  const HandleSubmitForm = async (e) => {
    e.preventDefault();
    const message =
      `Новая идея проекта:\n\n` +
      `*Никнейм*: ${inp1}\n\n` +
      `*Идея*: ${inp2}\n\n` +
      `*Проблемы*: ${inp3}\n\n` +
      `*Целевая аудитория*: ${inp4}\n\n` +
      `*Инновации*: ${inp5}\n\n` +
      `*Масштабирование*: ${inp6}\n\n` +
      `*Этапы реализации*: ${inp7}\n\n` +
      `*Коммерческий потенциал*: ${inp8}\n\n` +
      `*Аналогичные проекты*: ${inp9}\n\n` +
      `*Участие сообщества*: ${inp10}`;

    if (inp1 && inp2 && inp3 && inp4 && inp5 && inp6 && inp7 && inp8 && inp10) {
      fetch(
        `https://api.telegram.org/bot${
          import.meta.env.VITE_BOT_TOKEN
        }/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: import.meta.env.VITE_CHAT_ID,
            text: message,
            parse_mode: "Markdown",
          }),
        }
      )
        .then((response) => response.json())
        .then(() => {
          setModalMsg('Форма успешно отправлена!')
          setIsModal(true);
          set1("");
          set2("");
          set3("");
          set4("");
          set5("");
          set6("");
          set7("");
          set8("");
          set9("");
          set10("");
          setTimeout(() => setIsModal(false), 3000)
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      setModalMsg('Пожалуйста, заполните обязательные * поля!')
      setIsModal(true)
      setTimeout(() => setIsModal(false), 3000)
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <h1>Форма отправки идеи проекта</h1>
        <form onSubmit={HandleSubmitForm}>
          <label htmlFor="telegramNickname">
            Ваш никнейм для связи в Телеграме
            <span className="required">*</span>:
          </label>
          <input
            type="text"
            id="telegramNickname"
            name="telegramNickname"
            required
            value={inp1}
            onChange={(e) => set1(e.target.value)}
          />

          <label htmlFor="projectDescription">
            Детально опишите свою идею <span className="required">*</span>:
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            rows={5}
            required
            value={inp2}
            onChange={(e) => set2(e.target.value)}
          ></textarea>

          <label htmlFor="problemSolved">
            Какие актуальные проблемы помогает решить идея вашего проекта?{" "}
            <span className="required">*</span>:
          </label>
          <textarea
            id="problemSolved"
            name="problemSolved"
            rows={5}
            required
            value={inp3}
            onChange={(e) => set3(e.target.value)}
          ></textarea>

          <label htmlFor="targetAudience">
            Как по вашему мнению выглядит целевая аудитория вашего проекта?{" "}
            <span className="required">*</span>:
          </label>
          <textarea
            id="targetAudience"
            name="targetAudience"
            rows={5}
            required
            value={inp4}
            onChange={(e) => set4(e.target.value)}
          ></textarea>

          <label htmlFor="innovation">
            В чем инновационность предлагаемой вами идеи?{" "}
            <span className="required">*</span>:
          </label>
          <textarea
            id="innovation"
            name="innovation"
            rows={5}
            required
            value={inp5}
            onChange={(e) => set5(e.target.value)}
          ></textarea>

          <label htmlFor="scalingPotential">
            Имеет ли ваша идея потенциал для масштабирования в будущем?{" "}
            <span className="required">*</span>:
          </label>
          <textarea
            id="scalingPotential"
            name="scalingPotential"
            rows={5}
            required
            value={inp6}
            onChange={(e) => set6(e.target.value)}
          ></textarea>

          <label htmlFor="implementationStages">
            Какие этапы реализации вашей идеи вы можете предложить?{" "}
            <span className="required">*</span>:
          </label>
          <textarea
            id="implementationStages"
            name="implementationStages"
            rows={5}
            required
            value={inp7}
            onChange={(e) => set7(e.target.value)}
          ></textarea>

          <label htmlFor="commercialPotential">
            Есть ли у вашего проекта коммерческий потенциал?{" "}
            <span className="required">*</span>:
          </label>
          <textarea
            id="commercialPotential"
            name="commercialPotential"
            rows={5}
            required
            value={inp8}
            onChange={(e) => set8(e.target.value)}
          ></textarea>

          <label htmlFor="similarProjects">
            Какие аналогичные проекты уже существуют?
          </label>
          <textarea
            id="similarProjects"
            name="similarProjects"
            rows={5}
            value={inp9}
            onChange={(e) => set9(e.target.value)}
          ></textarea>

          <label htmlFor="communityParticipation">
            Каким вы видите участие нашего сообщества в процессе реализации?{" "}
            <span className="required">*</span>:
          </label>
          <textarea
            id="communityParticipation"
            name="communityParticipation"
            rows={5}
            required
            value={inp10}
            onChange={(e) => set10(e.target.value)}
          ></textarea>

          <button type="submit" onClick={HandleSubmitForm}>
            Отправить
          </button>
        </form>
      </div>

      {isModal ? (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setIsModal(false)}>
              &times;
            </span>
            <p>{modalMsg}</p>
          </div>
        </div>
      ) : null}
    </React.Fragment>
  )
}