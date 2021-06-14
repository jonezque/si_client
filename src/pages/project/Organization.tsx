import { Button, Input, Progress } from 'antd'
import React, { FC } from 'react'
import { Field, useField } from 'react-final-form'
import { FieldArray } from 'react-final-form-arrays'
import { Flex, Text } from 'utility'
import { TabInterface } from './constants'

export const Organization: FC<TabInterface> = ({
  onBack,
  onNext
}) => {
  return (
    <>
      <Field
        name="orgName"
        render={({ input }) => (
          <label>
            Название договора
            <Input {...input} placeholder='Его будете видеть только вы, например "Отделка строительства 5"'></Input>
          </label>
        )}
      />
      <Field
        name="orgNumber"
        render={({ input }) => (
          <label>
            Номер договора
            <Input {...input} placeholder="Его будете видеть только вы"></Input>
          </label>
        )}
      />

      <Field
        name="objectName"
        render={({ input }) => (
          <Flex mt={50} alignItems="flex-end">
            <label style={{ flex: 1 }}>
              Объект капитального строительства
              <Input {...input} placeholder="Название объекта, оно пойдет в акты"></Input>
            </label>
            <Button type="primary">Подробнее</Button>
          </Flex>
        )}
      />

      <FieldArray name="persons" render={({ fields }) => fields.map((x) => <OrgItem key={x} path={x} />)} />

      <Flex justifyContent="space-evenly">
        <Button onClick={onBack}>Назад</Button>
        <Button type="primary" onClick={onNext}>
          Сохранить
        </Button>
      </Flex>
    </>
  )
}

const OrgItem: FC<{ path: string }> = ({ path }) => {
  const {
    input: { value: title }
  } = useField(`${path}.title`)
  return (
    <Field
      name={`${path}.inn`}
      render={({ input }) => (
        <Flex alignItems="flex-end">
          <label style={{ flex: 1 }}>
            {title}
            <Input {...input} placeholder="Просто введите ИНН"></Input>
          </label>
          <Button type="primary">Подробнее</Button>
        </Flex>
      )}
    />
  )
}
