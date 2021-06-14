import { Button, Input, Select } from 'antd'
import React, { FC } from 'react'
import { useField, Field } from 'react-final-form'
import { Grid, Text, Flex } from 'utility'

const { Option } = Select

export const Person: FC<{ path: string }> = ({ path }) => {
  const {
    input: { value: title }
  } = useField(`${path}.title`)

  const {
    input: { value: organizations }
  } = useField('organizations')

  return (
    <Grid gridRowGap="12px" gridTemplateColumns="1fr">
      <Text fontSize={20}>{title}</Text>
      <Field name={`${path}.lastName`} render={({ input }) => <Input {...input} placeholder="Фамилия" />} />
      <Field name={`${path}.firstName`} render={({ input }) => <Input {...input} placeholder="Имя" />} />
      <Field name={`${path}.midName`} render={({ input }) => <Input {...input} placeholder="Отчество" />} />
      <Field
        name={`${path}.org`}
        render={({ input }) => (
          <Select {...input} placeholder="Организация">
            {organizations.map((x: any) => (
              <Option key={x.title} value={x.title}>
                {x.title}
              </Option>
            ))}
          </Select>
        )}
      />
      <Field name={`${path}.role`} render={({ input }) => <Input {...input} placeholder="Должность" />} />
      <Field
        name={`${path}.orderNumber`}
        render={({ input }) => (
          <Flex>
            <Input {...input} placeholder="Номер приказа о назначении" />
            <Button type="primary">Добавить приказ</Button>
          </Flex>
        )}
      />
      <Field
        name={`${path}.natNumber`}
        render={({ input }) => <Input {...input} placeholder="Номер в Национальном Реестре Специалистов" />}
      />
    </Grid>
  )
}
