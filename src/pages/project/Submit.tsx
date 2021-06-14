import { Button, Progress } from 'antd'
import React, { FC } from 'react'
import { useField } from 'react-final-form'
import { Flex, Text } from 'utility'
import { TabInterface } from './constants'

export const Submit: FC<TabInterface> = ({
  onBack,
  onNext
}) => {
  return (
    <>
      <Flex justifyContent="space-evenly">
        <Button onClick={onBack}>Назад</Button>
        <Button type="primary" onClick={onNext}>
          Отправить
        </Button>
      </Flex>
    </>
  )
}
