import "./share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';

export default function Share() {
  return (
      <div className="share">
          <div className="shareWrapper">
              <img src="/assets/person/1.jpeg" className="shareProfileImg" alt="" />
              <input 
              placeholder="What's in your mind?" 
              className="shareInput" />
          </div>
          <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                    <PermMediaIcon className="shareIcon"/>
                        <span className="shareOptionText">Photo or Videos</span>
                    </div>
                </div>
            </div>
         
      </div>
  )
}
