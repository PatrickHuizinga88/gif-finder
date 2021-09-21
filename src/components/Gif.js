import { TwitterIcon, TwitterShareButton, WhatsappShareButton } from "react-share"
import { WhatsappIcon } from "react-share"

const Gif = ({gif, embed}) => {
    return (
        <div className="gif-container">
            <img 
                className="gif" 
                src={gif} 
                alt="gif"
            />
            <div className="overlay">
                {/* <p>Share:</p> */}
                <WhatsappShareButton url={embed}>
                    <WhatsappIcon size={35} />
                </WhatsappShareButton>
            </div>
        </div>
    )
}

export default Gif
