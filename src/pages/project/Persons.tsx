import { Button, Progress } from 'antd'
import React, { FC } from 'react'
import { useField } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import { Flex, Text } from 'utility'
import { PlusOutlined } from '@ant-design/icons'
import { Person } from './Person'
import { TabInterface } from './constants'

export const Persons: FC<TabInterface> = ({
  onBack,
  onNext
}) => {
  return (
    <>
      <Text fontSize={24}>
        Ответственные лица
      </Text>
      <FieldArray
        name="persons"
        render={({ fields }) => (
          <>
            {fields.map((x) => (
              <Person key={x} path={x} />
            ))}

            <Flex justifyContent="center" my={20}>
              <Button type="primary" shape="circle" icon={<PlusOutlined />} size="large" onClick={() => fields.push({ title: 'Иные лица' })} />
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
