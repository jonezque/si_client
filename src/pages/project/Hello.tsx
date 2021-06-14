import { Button, Card, Input, Progress } from 'antd'
import React, { useState, FC } from 'react'
import { Field, useField } from 'react-final-form'
import { Flex, Text, Grid } from 'utility'

export const Hello: FC<{ onAdd: () => void }> = ({ onAdd }) => {
  const { input: { value } } = useField('projectName')

  return (
    <>
      <Card>
        <p>Привет👋</p>
        <p>
          При первом знакомстве с нашей системой придется потратить немного больше времени, потому что мы пока моло
          знаем о выших проектах.
        </p>
        <p>С каждым актом мы все больше будем узнавать и Вы будете тратить все меньше времени.</p>
      </Card>
      <Field
        name="projectName"
        render={({ input }) => (
          <label>
            Название проекта
            <Input {...input} placeholder="Его будете видеть только вы, назовите как будет удобнее"></Input>
          </label>
        )}
      />
      <Button disabled={!value} type="primary" style={{ justifySelf: 'center' }} onClick={onAdd}>
        Добавить Договор
      </Button>
    </>
  )
}
