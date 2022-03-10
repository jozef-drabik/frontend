import React from 'react'
import { useRouter } from 'next/router'
import { useMutation } from 'react-query'
import { observer } from 'mobx-react'
import { AxiosError, AxiosResponse } from 'axios'
import { Dialog, Card, CardContent, Box, Button, Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'

import { BankAccountResponse } from 'gql/bankaccounts'
import { ApiErrors } from 'service/apiErrors'
import { useDeleteBankAccount } from 'service/restRequests'
import { ModalStore } from 'stores/dashboard/ModalStore'
import { AlertStore } from 'stores/AlertStore'
import { routes } from 'common/routes'

export default observer(function DeleteModal() {
  const router = useRouter()
  const { isDeleteOpen, hideDelete, selectedRecord } = ModalStore
  const { t } = useTranslation('bankaccounts')

  const mutationFn = useDeleteBankAccount(selectedRecord.id)

  const deleteMutation = useMutation<
    AxiosResponse<BankAccountResponse>,
    AxiosError<ApiErrors>,
    string
  >({
    mutationFn,
    onError: () => AlertStore.show(t('alerts.error'), 'error'),
    onSuccess: () => {
      hideDelete()
      AlertStore.show(t('alerts.delete'), 'success')
      router.push(routes.admin.bankaccounts.index)
    },
  })

  function deleteHandler() {
    deleteMutation.mutate(selectedRecord.id)
  }

  return (
    <Dialog open={isDeleteOpen} onClose={hideDelete}>
      <Card>
        <CardContent>
          <Typography variant="h6" sx={{ marginBottom: '16px', textAlign: 'center' }}>
            {t('deleteTitle')}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '16px', textAlign: 'center' }}>
            {t('deleteContent')} <b>{selectedRecord.name}</b>
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button color="error" onClick={deleteHandler}>
              {t('cta.delete')}
            </Button>
            <Button onClick={hideDelete}>{t('cta.cancel')}</Button>
          </Box>
        </CardContent>
      </Card>
    </Dialog>
  )
})
