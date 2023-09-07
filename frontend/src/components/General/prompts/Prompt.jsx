import "./Prompt.scss"
import { styled } from "styled-components"

function Prompt({ type = "send", data, pic, time }) {
  return (
    <>
      <StyledImg type={type}>
        {pic && <img src={pic} alt="img-profil" />}
      </StyledImg>
      <PromptStyled type={type}>
        <PromptBulle type={type} data={data} className="prompt__bulle">
          {data}

          <p> {time} </p>
        </PromptBulle>
      </PromptStyled>
    </>
  )
}

export default Prompt

const PromptStyled = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;

  ${(props) =>
    props.type === "send"
      ? "justify-content: flex-start"
      : "justify-content: flex-end"}
`

const PromptBulle = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
  border-radius: 5px;
  position: relative;
  box-sizing: border-box;
  padding: 0.5rem;
  color: black;
  z-index: 2;
  margin-bottom: 8px;

  ${(props) =>
    props.type === "send"
      ? "border-radius: 0px 15px 15px 15px"
      : "border-radius: 15px 0px 15px 15px"};

  p {
    text-align: right;
  }
`

const StyledImg = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  margin-bottom: 8px;

  ${(props) =>
    props.type === "send"
      ? "justify-content: flex-start"
      : "justify-content: flex-end"}
`
