import { Button } from 'antd'
import React from 'react'
import { useHistory } from 'react-router'
import { useGetAllProjectsQuery } from 'types'
import { Flex, Grid } from 'utility'

export const Home = () => {
  const history = useHistory()
  const { data } = useGetAllProjectsQuery()
  const projects = data?.GetAllProjects ?? []
  return <Flex mt={100} justifyContent="center">
    <Grid gridTemplateColumns="repeat( auto-fill, minmax(200px, 1fr) )" maxWidth="90%" width="100%" gridGap="20px">
      {projects.map(x => <Button type="primary" key={x.id}>{x.name}</Button>)}
      <Button type="primary" onClick={() => history.push('/project/new')}>add new</Button>
    </Grid>
  </Flex>
}
