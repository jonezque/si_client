import { Button, Input } from 'antd'
import React, { FC } from 'react'
import { Field, Form } from 'react-final-form'
import { Flex } from 'utility'
import { useLoginMutation } from 'types'
import { decode } from 'jsonwebtoken'
import { myInfo } from 'state'
import { useHistory } from 'react-router'

export const Login = () => {
  const history = useHistory()
  const [loginFn] = useLoginMutation({
    onCompleted: data => {
      localStorage.setItem('token', data.Login)
      const user = decode(data.Login) as any
      myInfo(user)
      history.push('/home')
    },
    onError: (err) => {
      console.log(err)
    }
  })
  const onSubmit = (values: any) => loginFn({ variables: { loginData: values } })

  return (
    <Flex height="100vh" justifyContent="center" flexDirection="column" alignItems="center">
      <Form onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Flex justifyContent="center" flexDirection="column" alignItems="stretch">
              <Field name="email" render={({ input }) => <Input {...input} />} />
              <Field name="password" type="password" render={({ input }) => <Input {...input} />} />
              <Button htmlType="submit">Login</Button>
            </Flex>
          </form>
        )}
      </Form>
    </Flex>
  )
}
