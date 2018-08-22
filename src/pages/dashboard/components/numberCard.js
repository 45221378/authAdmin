import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card } from 'antd'
import CountUp from 'react-countup'
import styles from './numberCard.less'

function NumberCard ({
  icon, color, title, number, countUp,time,day,
}) {
  return (
    <Card className={styles.numberCard} bordered={false} bodyStyle={{ padding: 0 }}>
      <Icon className={styles.iconWarp} style={{ color }} type={icon} />
      <div className={styles.content}>
        <p className={styles.title}>{title || 'No Title'}</p>
        <p className={styles.title}>
          今日访问<CountUp
            start={0} 
            end={day}
            duration={2.75}
            useEasing
            useGrouping
            separator=","
            {...countUp || {}}
          />次
        </p>
        <p className={styles.title}>
          历史访问<CountUp
            start={0} 
            end={number}
            duration={2.75}
            useEasing
            useGrouping
            separator=","
            {...countUp || {}}
          />次
        </p>
        <p className={styles.title}>{time || 0}</p>
      </div>
    </Card>
  )
}

NumberCard.propTypes = {
  icon: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
  number: PropTypes.number,
  countUp: PropTypes.object,
}

export default NumberCard
