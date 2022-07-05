import React, { useState } from 'react';
import SpecialChar from '../special-char/SpecialChar';
import styles from './InteractiveDetails.module.css';

type InteractiveDetailsProps = {
    titles:string[];
    details:string[];
}

const InteractiveDetails = ({titles,details}:InteractiveDetailsProps) => {
    if(titles.length !== details.length) throw new Error("Invalid props.");
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
        <section className={styles.container}>
            <div className={styles.titles}>
                {!titles || titles.length < 1 ? undefined : 
                    titles.map(title => {
                        return (<button 
                            key={titles.indexOf(title)} 
                            onClick={()=>setActiveIndex(titles.indexOf(title))}
                            className={titles.indexOf(title) === activeIndex ? styles.activeBtn : ""}
                        >
                            {/* {titles.indexOf(title) === activeIndex ? title : ""} */}
                            {title}
                        </button>);
                    })}
            </div>
            <div className={styles.details}>
                <p><SpecialChar>{details[activeIndex]}</SpecialChar></p>
            </div>
        </section>
    );
};

export default InteractiveDetails;