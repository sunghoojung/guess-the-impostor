const video = require('../../assets/video/guesstheimpostorvideo.mp4');

interface VideoProps {
    children?: React.ReactNode;
}

const Video: React.FC<VideoProps> = ( {children}) => {
    
    return (
        <div className="bg-black w-full h-[640px] absolute left-0 top-[810px] shadow-[0_4px_30px_0px_rgb(0,0,0)] flex justify-center items-center z-10">
            <video className = "w-1/8 h-3/4" controls>
                <source src={video} type="video/mp4" />
            </video>

        </div>
    );
}

export default Video;