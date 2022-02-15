import React from 'react'
import { useMutation } from 'react-query'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AxiosError, AxiosResponse } from 'axios'
import { GridColumns, DataGrid } from '@mui/x-data-grid'
import { Box, IconButton, Modal, Typography } from '@mui/material'
import { DeleteOutline, ModeEditOutline, InfoOutlined } from '@mui/icons-material'

import { useTranslation } from 'next-i18next'
import { AlertStore } from '../../stores/AlertStore'
import { routes } from '../../common/routes'

import { useBootcampList } from '../../common/hooks/bootcamp'
import { BootcampResponse } from 'gql/bootcamp'
import { ApiErrors } from 'common/api-errors'
import { deleteBootcampREST, getBootcamp } from 'common/bootcampRest'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const initialValues: BootcampResponse = {
  id: '',
  firstName: '',
  lastName: '',
}

export default function BootcampGrid() {
  const [intern, setIntern] = React.useState<BootcampResponse>(initialValues)
  const [openInfo, setOpenInfo] = React.useState(false)
  const { data } = useBootcampList()

  const router = useRouter()
  const { t } = useTranslation()

  const handleOpen = () => setOpenInfo(true)
  const handleClose = () => setOpenInfo(false)

  const deleteMutation = useMutation<
    AxiosResponse<BootcampResponse>,
    AxiosError<ApiErrors>,
    string
  >({
    mutationFn: deleteBootcampREST,
    onError: () => AlertStore.show(t('common:alerts.error'), 'error'),
    onSuccess: () => AlertStore.show(t('common:alerts.message-sent'), 'success'),
  })

  const deleteRow = async (id: string) => {
    await deleteMutation.mutateAsync(id)
    router.push(routes.bootcamp.index)
  }

  const infoMutation = useMutation<AxiosResponse<BootcampResponse>, AxiosError<ApiErrors>, string>({
    mutationFn: getBootcamp,
    onError: () => AlertStore.show(t('bootcamp:alerts.load-intern.error'), 'error'),
    onSuccess: ({ data }) => {
      setIntern(data)
      handleOpen()
    },
  })

  const loadInternInfo = async (id: string) => {
    try {
      await infoMutation.mutateAsync(id)
    } catch (error) {
      console.error(error)
    }
  }

  const renderButtons = (params: any) => {
    return (
      <>
        <IconButton onClick={() => loadInternInfo(params.id)}>
          <InfoOutlined />
        </IconButton>
        <Link href={routes.bootcamp.edit(params.id)}>
          <IconButton>
            <ModeEditOutline />
          </IconButton>
        </Link>
        <IconButton onClick={() => deleteRow(params.id)}>
          <DeleteOutline />
        </IconButton>
      </>
    )
  }

  const columns: GridColumns = [
    { field: 'id', headerName: 'ID', hide: true },
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 200,
    },
    {
      field: 'lastName',
      headerName: 'Last Name',
      width: 760,
    },
    {
      field: 'buttons',
      headerName: '',
      width: 140,
      align: 'right',
      renderCell: renderButtons,
    },
  ]

  return (
    <>
      <Modal
        open={openInfo}
        onClose={handleClose}
        aria-labelledby="modal-m)odal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Info
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <p>
              <b>Id:</b> {intern.id}
            </p>
            <p>
              <b>{t('auth:fields.first-name')}:</b> {intern.firstName}
            </p>
            <p>
              <b>{t('auth:fields.last-name')}:</b> {intern.lastName}
            </p>
          </Typography>
        </Box>
      </Modal>
      <DataGrid
        rows={data || []}
        columns={columns}
        pageSize={5}
        autoHeight
        autoPageSize
        checkboxSelection
        disableSelectionOnClick
        onRowClick={(row) => {
          const id = row.getValue(row.id, 'id')
          if (typeof id !== 'string') return
          // router.push(routes.bootcamp.view(id))
        }}
      />
    </>
  )
}