import { Button, Input, DatePicker } from 'antd'
import React, { FC } from 'react'
import { Flex, Text, Grid } from 'utility'
import { TabInterface } from './constants'
import { FieldArray } from 'react-final-form-arrays'
import { PlusOutlined } from '@ant-design/icons'
import { useField, Field } from 'react-final-form'

export const Other: FC<TabInterface> = ({ onBack, onNext }) => {
  return (
    <>
      <FieldArray
        name="gost"
        render={({ fields }) => (
          <>
            {fields.map((x) => (
              <Block key={x} path={x} />
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

const Block: FC<{ path: string }> = ({ path }) => {
  return (
    <Grid gridRowGap="12px">
      <label style={{ display: 'flex', alignItems: 'center' }}>
        Сроки выполнения работ
        <Field
          name={`${path}.date`}
          render={({ input }) => <DatePicker.RangePicker {...input} format="DD/MM/YYYY" bordered={false} placeholder={['Дата начала', 'Дата окончания']} />}
        />
      </label>
      <label>
        Количество экземпляров
        <Field
          name={`${path}.count`}
          render={({ input }) => <Input {...input}/>}
        />
      </label>
      <label>
        Разрешается производство последующих работ
        <Field
          name={`${path}.next`}
          render={({ input }) => <Input {...input}/>}
        />
      </label>
      <label>
        Дополнительные сведения
        <Field
          name={`${path}.add`}
          render={({ input }) => <Input {...input}/>}
        />
      </label>
    </Grid>
  )
}
