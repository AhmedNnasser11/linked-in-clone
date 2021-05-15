import styled from "styled-components";
const Main = () => {
  return (
    <Container>
      <ShareBox>
        share
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Start a Post</button>
        </div>
        <div className="tools">
          <button>
            <img src="/images/photo.svg" alt="" />
            <span>photo</span>
          </button>
          <button>
            <img src="/images/video-icon.png" alt="" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon-transparent-3.png" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article.png" alt="" />
            <span>article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const Container = styled.section`
  grid-area: main;
`;

const CommenCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommenCard)`
  display: flex;
  flex-direction: column;
  color: #95ab7b;
  margin: 0 0 8px;
  background: #fff;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }
    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;
      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }
      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        background-color: #fff;
        text-align: left;
      }
    }
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 4px 0 -2px;
          width: 40px;
          height: 40px;
        }
        span{
            color: #70b5f9;
        }
      }
    }
  }
`;
export default Main;
