import React from 'react';
import { Card } from '@uifabric/react-cards';
import { Text } from '@fluentui/react';

const CardsSection = () => {
    const cards = [
        {
            id: 1,
            title: 'Current Balance',
            amount: '$12345',
            icon: 'Money',
            percentage: '2.3'
        }, {
            id: 2,
            title: 'Current Expenses',
            amount: '$10345',
            icon: 'PaymentCard',
            percentage: '0.3'
        }, {
            id: 3,
            title: 'Current Income',
            amount: '$22345',
            icon: 'Savings',
            percentage: '1.3'
        }
    ];

    const container = {
        display: 'flex',
        justifyContent: 'center',
        margin: '10vh 0'
    };

    const icon = {
        fontSize: 24,
        padding: 15,
        verticalAlign: 'middle',
        paddingLeft: 0
    };

    const styles = {
        cardStyles: {
            padding: 20,
            borderTop: '5px solid #0078d4',
            width: '90%',
            maxWidth: '90%',
            margin: 'auto'
        },
        header: {
            fontSize: 20,
            fontWeight: 'bold'
        },
        amount: {
            fontSize: 26,
            paddingBottom: 20,
            paddingTop: 30
        },
        percentage: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#0078d4'
        }

    };

    return (<div>
        {cards.map(card => {
            return (<div className='ms-Grid-col ms-sm3 ms-xl3' key={card.id} style={container}>
                <Card style={styles.cardStyles}>
                    <Card.Section>
                        <Card.Item>
                            <i className={`ms-Icon ms-Icon--${card.icon} `} style={icon} aria-hidden='true'></i>
                            <Text style={styles.header}>{card.title}</Text>
                        </Card.Item>
                        <Card.Item>
                            <Text style={styles.amount}>{card.amount}</Text>
                        </Card.Item>
                        <Card.Item>
                            <Text style={styles.percentage}>{card.percentage}%</Text>
                        </Card.Item>
                    </Card.Section>
                </Card>
            </div>);
        })}
    </div>);
};
export default CardsSection;
