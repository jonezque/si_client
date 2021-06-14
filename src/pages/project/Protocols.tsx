import { Button, Input } from 'antd'
import React, { FC } from 'react'
import { Flex, Text, Grid } from 'utility'
import { TabInterface } from './constants'
import { FieldArray } from 'react-final-form-arrays'
import { PlusOutlined } from '@ant-design/icons'
import { useField, Field } from 'react-final-form'

export const Protocols: FC<TabInterface> = ({ onBack, onNext }) => {
  return (
    <>
      <Text fontSize={24}>Схемы и протоколы</Text>
      <FieldArray
        name="protocols"
        render={({ fields }) => (
          <>
            {fields.map((x) => (
              <Protocol key={x} path={x} />
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

const Protocol: FC<{ path: string }> = ({ path }) => {
  return (
    <Grid gridRowGap="12px">
      <label>
        Исполнительные схемы
        <Field
          name={`${path}.schema`}
          render={({ input }) => <Input {...input} placeholder="Шифр схемы, номер листа" />}
        />
      </label>
      <Flex alignItems="flex-end">
        <label style={{ flex: 1 }}>
          Протоколы испытаний/отчеты лабораторий
          <Field
            name={`${path}.doc`}
            style={{ flex: 1 }}
            render={({ input }) => <Input {...input} placeholder="Шифр схемы, номер листа" />}
          />
        </label>
        <Button type="primary">добавить скан</Button>
      </Flex>
    </Grid>
  )
}
