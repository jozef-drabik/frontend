import { Grid, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { useSinglePriceList } from 'common/hooks/donation'
import FormTextField from 'components/common/form/FormTextField'
import RadioButtonGroup from 'components/common/form/RadioButtonGroup'
import { money } from 'common/util/money'
import { useTranslation } from 'next-i18next'
import React from 'react'
import CircleCheckboxField from 'components/common/form/CircleCheckboxField'

const useStyles = makeStyles(() =>
  createStyles({
    h3: {
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '25px',
      lineHeight: '116.7%',
      color: '#343434',
      marginTop: '91px',
      marginBottom: '25px',
      textAlign: 'left',
    },
    message: {
      background: '#FFFFFF',
      borderRadius: '32px',
      textAlign: 'left',
    },
  }),
)
export default function FirstStep() {
  const classes = useStyles()
  const { data: prices } = useSinglePriceList()
  const { t } = useTranslation('one-time-donation')
  return (
    <Grid>
      <Grid container justifyContent="center">
        <Typography className={classes.h3}>{t('first-step.wish')}</Typography>
      </Grid>
      <Grid>
        <FormTextField
          name="message"
          type="text"
          label={t('first-step.message')}
          multiline
          rows={9}
        />
        <CircleCheckboxField name="anonymous" label={t('first-step.check-box-label') as string} />
        <Typography variant="body1">{t('first-step.info-anonymous')}</Typography>
        <Typography className={classes.h3}>{t('first-step.amount')}</Typography>
      </Grid>
      <Grid my={5}>
        <RadioButtonGroup
          name="amount"
          options={
            prices
              ?.sort((a, b) => Number(a.unit_amount) - Number(b.unit_amount))
              .map((v) => ({
                label: money(Number(v.unit_amount)),
                value: Number(v.unit_amount),
              })) || []
          }
        />
      </Grid>
    </Grid>
  )
}
