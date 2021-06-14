import { Button, Input } from 'antd'
import React, { FC } from 'react'
import { Flex, Text, Grid } from 'utility'
import { TabInterface } from './constants'
import { FieldArray } from 'react-final-form-arrays'
import { PlusOutlined } from '@ant-design/icons'
import { useField, Field } from 'react-final-form'

export const Jobs: FC<TabInterface> = ({ onBack, onNext }) => {
  return (
    <>
      <Text fontSize={24}>Выполнение работы</Text>
      <FieldArray
        name="jobsToReview"
        render={({ fields }) => (
          <>
            <Text fontSize={24}>Работы предъявленные к освидетельствованию</Text>
            {fields.map((x) => (
              <Job key={x} path={x} />
            ))}
            <Flex justifyContent="center" my={20}>
              <Button
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
                size="large"
                onClick={() => fields.push({})}
              />
            </Flex>
          </>
        )}
      />
      <FieldArray
        name="infos"
        render={({ fields }) => (
          <>
            <Text fontSize={24}>Информация о рабочем проекте</Text>
            {fields.map((x) => (
              <Info key={x} path={x} />
            ))}
            <Flex justifyContent="center" my={20}>
              <Button
                type="primary"
                shape="circle"
                icon={<PlusOutlined />}
                size="large"
                onClick={() => fields.push({})}
              />
            </Flex>
          </>
        )}
      />
      <Flex justifyContent="space-evenly">
        <Button onClick={onBack}>Назад</Button>
        <Button type="primary" onClick={onNext}>
          Сохранить
        </Button>
      </Flex>
    </>
  )
}

const Job: FC<{ path: string }> = ({ path }) => {
  return (
    <Grid gridRowGap="12px">
      <Field
        name={`${path}.title`}
        render={({ input }) => <Input {...input} placeholder="Введите работы которые хотите сдать по акту" />}
      />
      <Field
        name={`${path}.place`}
        render={({ input }) => <Input {...input} placeholder="Расположение, например: этаж, секция, квартира, оси" />}
      />
    </Grid>
  )
}

const Info: FC<{ path: string }> = ({ path }) => {
  return (
    <Grid gridRowGap="12px">
      <Field name={`${path}.projectNumber`} render={({ input }) => <Input {...input} placeholder="Номер проекта" />} />
      <Field name={`${path}.projectName`} render={({ input }) => <Input {...input} placeholder="Название проекта" />} />
      <Field name={`${path}.page`} render={({ input }) => <Input {...input} placeholder="Номер листа" />} />
      <Field
        name={`${path}.orgName`}
        render={({ input }) => <Input {...input} placeholder="Название организации которая подготовила проекта" />}
      />
    </Grid>
  )
}
