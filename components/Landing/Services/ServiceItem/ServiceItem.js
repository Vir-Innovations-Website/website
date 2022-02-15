import React from 'react';
import { convertToHtml } from '../../../../helpers';
import styles from './ServiceItem.module.scss';

const ServiceItem = ({ card }) => {
    return (
        <div className={styles.ServiceItem}>
            <div className='container'>
                <div className={`${styles.ItemWrapper} ${card.reverse && styles.Reverse}`}>
                    <div className={styles.Image}>
                        {card.image ? <img src={card.image} alt={card.title} /> : <div style={{ height: 400, maxWidth: 400 }}></div>}
                    </div>
                    <div className={styles.Content}>
                        <div className={styles.Title}>{card.title}</div>
                        <div className={styles.Description} dangerouslySetInnerHTML={convertToHtml(card.description)}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem
