import React from 'react';

type buttonProps = {
    onClick: React.MouseEventHandler;
    fill?:string;
    height?:string;
    width?:string;
    rotateDegrees?:number;
}

const ChevronButton = ({onClick,fill="#E0DDD7",height="48px",width="48px", rotateDegrees=0}:buttonProps) => {
    return (
        <button 
            style={{border:"none",background:"none", cursor: "pointer"}}
            onClick={onClick}    
        >
            <svg 
                style={{transform: `rotate(${rotateDegrees}deg)`}} 
                xmlns={"http://www.w3.org/2000/svg"} 
                height={height} width={width}>
                <path fill={fill} d="M28.05 36 16 23.95 28.05 11.9 30.2 14.05 20.3 23.95 30.2 33.85Z"/>
            </svg>
        </button>
    );
};

export default ChevronButton;