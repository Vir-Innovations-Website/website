import React from 'react';
import styles from './ServiceItem.module.scss';

const ServiceItem = ({ card }) => {
    return (
        <div className={styles.ServiceItem}>
            <div className='container'>
                <div className={`${styles.ItemWrapper} ${card.reverse && styles.Reverse}`}>
                    <div className={styles.Image}>
                        <img src={card.image} alt={card.title} />
                    </div>
                    <div className={styles.Content}>
                        <div className={styles.Title}>{card.title}</div>
                        <div className={styles.Description}>{card.description}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem
