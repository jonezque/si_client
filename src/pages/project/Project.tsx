import { Card, Progress, Tabs } from 'antd'
import React, { useState } from 'react'
import { Form } from 'react-final-form'
import { Flex, Grid, Text } from 'utility'
import { Hello } from './Hello'
import { Organization } from './Organization'
import { Persons } from './Persons'
import arrayMutators from 'final-form-arrays'
import { persons, organizations, step, TabInterface, jobsToReview, infos, materials, protocols, gost, other } from './constants'
import { Materials } from './Materials'
import { Jobs } from './Jobs'
import { Protocols } from './Protocols'
import { Gost } from './Gost'
import { Other } from './Other'
import { Submit } from './Submit'

const { TabPane } = Tabs

const render = (
  Component: React.FC<TabInterface>,
  tab: number,
  title: string,
  percent: number,
  setActiveTab: (tab: string) => void,
  setPercent: React.Dispatch<React.SetStateAction<number>>,
  content: JSX.Element
) => {
  return percent > tab - 1 ? (
    <TabPane tab={title} key={tab.toString()}>
      {content}
      <Grid gridGap="20px">
        <Component
          onBack={() => {
            setActiveTab(`${tab - 1}`)
          }}
          onNext={() => {
            setPercent((p) => (p === tab ? tab + 1 : p))
            setActiveTab(`${tab + 1}`)
          }}
        />
      </Grid>
    </TabPane>
  ) : null
}

export const Project = () => {
  const [percent, setPercent] = useState(1)
  const [activeTab, setActiveTab] = useState('1')

  const header = (values: any) => (
    <Grid gridGap="20px" mb={40}>
      <Text fontSize={24}>{percent === 1 ? 'Информация о проекте' : values.projectName}</Text>
      {percent > 2 ? <Text>Название договора {values.orgName}</Text> : null}
      {percent > 2 ? <Text>Номер договора {values.orgNumber}</Text> : null}
      <Progress percent={percent * step} showInfo={false} />
    </Grid>
  )

  return (
    <Flex pt={50} justifyContent="center">
      <Form
        onSubmit={(data) => console.log(data)}
        mutators={{
          ...arrayMutators
        }}
        initialValues={{ persons, organizations, jobsToReview, infos, materials, protocols, gost, other }}
      >
        {({ handleSubmit, values }) => (
          <form onSubmit={handleSubmit} style={{ maxWidth: 900, width: '100%' }}>
            <Card>
              <Tabs style={{ width: '100%' }} activeKey={activeTab} onTabClick={(tab) => setActiveTab(tab)}>
                <TabPane tab="Проект" key="1">
                  <Grid gridGap="20px" width="100%">
                    {header(values)}
                    <Hello
                      onAdd={() => {
                        setPercent((p) => (p === 1 ? 2 : p))
                        setActiveTab('2')
                      }}
                    />
                  </Grid>
                </TabPane>
                {render(Organization, 2, 'Организация', percent, setActiveTab, setPercent, header(values))}
                {render(Persons, 3, 'Лица', percent, setActiveTab, setPercent, header(values))}
                {render(Jobs, 4, 'Работы', percent, setActiveTab, setPercent, header(values))}
                {render(Materials, 5, 'Материалы', percent, setActiveTab, setPercent, header(values))}
                {render(Protocols, 6, 'Схемы/протоколы', percent, setActiveTab, setPercent, header(values))}
                {render(Gost, 7, 'ГОСТы', percent, setActiveTab, setPercent, header(values))}
                {render(Other, 8, 'Сроки', percent, setActiveTab, setPercent, header(values))}
                {percent > 8 ? (
                  <TabPane tab="Просмотр" key="9">
                    <Grid gridGap="20px" width="100%">
                      {header(values)}
                      <Submit onNext={() => {}} onBack={() => {}} />
                    </Grid>
                  </TabPane>
                ) : null}
              </Tabs>
            </Card>
          </form>
        )}
      </Form>
    </Flex>
  )
}
