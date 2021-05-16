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
      <div>
        <Article>
          <SharedActor>
            <a href="#">
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.png" alt="" />
            </button>
          </SharedActor>
          <Description>Description</Description>
          <SharedImg>
            <a href="#">
              <img
                src="https://images.barrons.com/im-133736?width=1280&size=1.33333333"
                alt=""
              />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/like.png" alt="" />
                <img
                  src="https://w7.pngwing.com/pngs/136/854/png-transparent-applause-computer-icons-clapping-applause-leaf-text-hand.png"
                  alt=""
                />
                <span>75</span>
              </button>
            </li>
            <li>
              <a href="#">2 comments</a>
            </li>
          </SocialCounts>
          <SocialActions>
            <button>
              <img
                className="img_icon"
                src="https://image.similarpng.com/very-thumbnail/2020/06/Thumb-up-like-icon-social-media-transparent-PNG.png"
                alt=""
              />
              <span>Like</span>
            </button>
            <button>
              <img
                className="img_icon"
                src="https://ar.seaicons.com/wp-content/uploads/2015/11/comment-icon.png"
                alt=""
              />
              <span>Comments</span>
            </button>
            <button>
              <img
                className="img_icon"
                src="https://cdn.iconscout.com/icon/free/png-256/share-2451538-2082548.png"
                alt=""
              />
              <span>Share</span>
            </button>
            <button>
              <img
                className="img_icon"
                src="https://www.clipartmax.com/png/middle/195-1953726_connect-to-mailing-list-platforms-send-message-icon-png.png"
                alt=""
              />
              <span>Send</span>
            </button>
          </SocialActions>
        </Article>
      </div>
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
        span {
          color: #70b5f9;
        }
      }
    }
  }
`;
const Article = styled(CommenCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
  .img_icon {
    width: 25px;
    height: 25px;
    object-fit: contain;
  }
`;
const SharedActor = styled.article`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 10px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;
  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 40px;
      height: 40px;
    }
    & > div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;
      span {
        text-align: left;
        &:first-child {
          font-size: 14px;
          font-weight: 700;
          color: rgba(0, 0, 0, 1);
        }
        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  button {
    position: absolute;
    right: 12px;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;
const Description = styled.p`
  padding: 0 10px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.ul`
  line-height: 1.3;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  margin: 0 16px;
  padding: 8px 0;
  border-bottom: 1px solid #e9e5ef;
  list-style: none;
  li {
    margin-right: 5px;
    font-size: 12px;
    button {
      display: flex;
      img {
        width: 30px;
        height: 30px;
        object-fit: contain;
      }
    }
  }
`;

const SocialActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  min-height: 40px;
  padding: 4px 8px;
  button{
    display: inline-flex;
    align-items: center;
    padding: 8px;
    color: #0a66c2;

    @media(min-width: 768px){
      span{
        margin-left: 8px;
      }
    }

  }
`;

export default Main;
