import React, { useState, useRef, useEffect } from 'react';

const ScrollAnimation = ({children, animationClass, hiddenClass}:any) => {
    const [isVisible, setIsVisible] = useState(false);
    
    const scrollRef = useRef(null);

    const handleScroll = () => {
        const observer = new IntersectionObserver((entries) => {
            const [ entry ] = entries;
            setIsVisible(entry.isIntersecting);
        }, { threshold:0 });
    
        const element = scrollRef.current;
        if(element) observer.observe(element);
    
        return  () => {
            if(element) observer.unobserve(element);
        };
    };

    useEffect(()=> {
        handleScroll();
    },[]);

    return (
        <div ref={scrollRef} className={`${hiddenClass} ${isVisible ? animationClass : undefined}`}>
            {children}
        </div>
    );
};

export default ScrollAnimation;