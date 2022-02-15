import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { queryFn } from 'common/rest'
import BootcampEditPage from 'components/bootcamp/BootcampEditPage'

export const getServerSideProps: GetServerSideProps = async ({ query, locale }) => {
  const { id } = query
  const client = new QueryClient()
  await client.prefetchQuery(`/bootcamp/${id}`, queryFn)
  return {
    props: {
      id,
      ...(await serverSideTranslations(locale ?? 'bg', [
        'common',
        'auth',
        'validation',
        'campaigns',
      ])),
      dehydratedState: dehydrate(client),
    },
  }
}

export default BootcampEditPage