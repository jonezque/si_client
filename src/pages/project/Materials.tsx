import { Button, Input } from 'antd'
import React, { FC } from 'react'
import { Flex, Text, Grid } from 'utility'
import { TabInterface } from './constants'
import { FieldArray } from 'react-final-form-arrays'
import { PlusOutlined } from '@ant-design/icons'
import { useField, Field } from 'react-final-form'

export const Materials: FC<TabInterface> = ({ onBack, onNext }) => {
  return (
    <>
      <Text fontSize={24}>Материалы</Text>
      <FieldArray
        name="materials"
        render={({ fields }) => (
          <>
            <Text fontSize={24}>Примененные материалы</Text>
            {fields.map((x) => (
              <Material key={x} path={x} />
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

const Material: FC<{ path: string }> = ({ path }) => {
  return (
    <Grid gridRowGap="12px">
      <Field name={`${path}.name`} render={({ input }) => <Input {...input} placeholder="Название материала" />} />

      <Flex alignItems="flex-end">
        <Field
          name={`${path}.number`}
          style={{ flex: 1 }}
          render={({ input }) => (
            <Input {...input} placeholder="Номер сертификата качества/пожарного сертификата/санитарного сертификата" />
          )}
        />
        <Button type="primary">добавить скан</Button>
      </Flex>
    </Grid>
  )
}
