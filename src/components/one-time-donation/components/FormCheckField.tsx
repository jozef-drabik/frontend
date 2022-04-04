import { useField } from 'formik'
import { useTranslation } from 'next-i18next'
import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@mui/material'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { TranslatableField, translateError } from 'common/form/validation'
import React from 'react'

export type CheckboxFieldProps = {
  name: string
  label: string | number | React.ReactElement
}

export default function CheckboxField({ name, label }: CheckboxFieldProps) {
  const { t } = useTranslation()
  const [field, meta] = useField(name)
  const helperText = meta.touched ? translateError(meta.error as TranslatableField, t) : ''
  return (
    <FormControl required component="fieldset" error={Boolean(meta.error) && Boolean(meta.touched)}>
      <FormControlLabel
        label={typeof label === 'string' ? `${t(label)}` : label}
        control={
          <Checkbox
            icon={<CircleOutlinedIcon />}
            checkedIcon={<CheckCircleIcon color="disabled" />}
            sx={{ '& .MuiSvgIcon-root': { fontSize: 33 } }}
            color="primary"
            checked={Boolean(field.value)}
            {...field}
          />
        }
      />
      {Boolean(meta.error) && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  )
}