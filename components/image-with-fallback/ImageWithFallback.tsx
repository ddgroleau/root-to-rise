import React, { useEffect, useState } from 'react';
import Image from 'next/image';

type ImageWithFallbackProps = {
    src:string,
    fallbackSrc:string,
    height:number,
    width:number,
    alt:string
}


const ImageWithFallback = ({src, fallbackSrc, height, width, alt}:ImageWithFallbackProps) => {
    const [imgError, setImgError] = useState(false);

    useEffect(()=>{
    },[imgError]);

    return (
        <div>
            <Image
                src={imgError ? fallbackSrc : src}
                onError ={() => setImgError(true)}
                height={height} 
                width={width} 
                alt={alt}
            />
        </div>
    );
};

export default ImageWithFallback;