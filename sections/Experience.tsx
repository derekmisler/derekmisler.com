import { Fragment, useState } from 'react'
import { Text } from 'components/Typography'
import { Button } from 'components/Buttons'
import { Row, Col } from 'components/Grid'
import { careers } from 'constants/resume'

export const Experience = () => {
  const tabs = careers.map(c => `${c.startDate}-${c.endDate}`)
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  return (
    <>
      <Row columnsDesktop={3}>
        <Col rangeDesktop={1}>
          {tabs.map((tab, i) => <Button key={tab} onClick={() => setActiveTabIndex(i)}>{tab}</Button>)}
        </Col>
        <Col rangeDesktop={2}>
          {
            careers.map((career, i) => (
              activeTabIndex === i && (
                <Fragment key={career.title}>
                  <Text>{career.title}</Text>
                  <Text>{career.specification}</Text>
                </Fragment>
              )
            ))
          }
        </Col>
      </Row>
    </>
  )
}

export default Experience
