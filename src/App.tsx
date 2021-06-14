import { useQuery, useReactiveVar } from '@apollo/client'
import { Spin } from 'antd'
import { Login, Project } from 'pages'
import { Home } from 'pages/home/Home'
import React, { useEffect } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { myInfo } from 'state'
import { useVerifyTokenQuery } from 'types'

export const App = () => {
  const user = useReactiveVar(myInfo)
  const { loading } = useVerifyTokenQuery({
    onCompleted: data => {
      if (data.VerifyToken?.id) { myInfo({ ...data.VerifyToken }) }
    },
    skip: !localStorage.getItem('token') && !!user
  })
  const history = useHistory()

  useEffect(() => {
    if (!user && !localStorage.getItem('token')) { history.push('/login') }
  }, [history, user])

  if (loading) return <Spin/>

  return (
    <Switch>
      <Route path="/home" exact>
            <Home />
      </Route>
      <Route path="/login" exact>
        <Login/>
      </Route>
      <Route path="/project/:id">
        <Project/>
      </Route>
      <Redirect from="/" to="/home" exact />
      <Route path="/*">
        <div>error</div>
      </Route>
    </Switch>
  )
}
